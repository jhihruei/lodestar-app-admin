import { message, Modal, Spin } from 'antd'
import { extname } from 'path'
import React, { useCallback, useContext, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useIntl } from 'react-intl'
import { useHistory, useParams } from 'react-router-dom'
import { ReactSortable } from 'react-sortablejs'
import styled from 'styled-components'
import { v4 as uuid } from 'uuid'
import AudioTrackCard from '../../components/podcast/AudioTrackCard'
import RecordButton from '../../components/podcast/RecordButton'
import RecordingController from '../../components/podcast/RecordingController'
import PodcastProgramHeader from '../../containers/podcast/PodcastProgramHeader'
import AppContext from '../../contexts/AppContext'
import { useAuth } from '../../contexts/AuthContext'
import { getFileDownloadableLink, handleError, uploadFile } from '../../helpers'
import {
  convertAudioBufferToMp3,
  decodeAudioArrayBuffer,
  mergeAudioBuffer,
  sliceAudioBuffer,
} from '../../helpers/audio'
import { commonMessages, errorMessages, podcastMessages } from '../../helpers/translation'
import { usePodcastProgramAdmin, useUpdatePodcastProgramContent } from '../../hooks/podcast'

const StyledLayoutContent = styled.div`
  height: calc(100vh - 64px);
  overflow-y: auto;
`
const StyledContainer = styled.div`
  padding-top: 5rem;
  padding-bottom: 12rem;
`
const StyledPageTitle = styled.h1`
  margin-bottom: 2rem;
  color: var(--gray-darker);
  font-size: 24px;
  font-weight: bold;
`

interface WaveCollectionProps {
  id: string
  audioBuffer: AudioBuffer
}

const RecordingPage: React.FC = () => {
  const { id: appId } = useContext(AppContext)
  const { authToken } = useAuth()
  const { formatMessage } = useIntl()
  const { podcastProgramId } = useParams<{ podcastProgramId: string }>()
  const { podcastProgram, refetchPodcastProgram } = usePodcastProgramAdmin(podcastProgramId)

  const [isRecording, setIsRecording] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [isGeneratingAudio, setIsGeneratingAudio] = useState(false)
  const [isInitializedAudio, setIsInitializedAudio] = useState(false)
  const [currentPlayingSecond, setCurrentPlayingSecond] = useState(0)
  const [currentAudioId, setCurrentAudioId] = useState<string | undefined>()

  const [waveCollection, setWaveCollection] = useState<WaveCollectionProps[]>([])
  const audioObjectRef = useRef<{ waveCollection: WaveCollectionProps[]; currentAudioId: string | undefined }>()

  const updatePodcastProgramContent = useUpdatePodcastProgramContent()
  const history = useHistory()

  const currentAudioIndex = waveCollection.findIndex(wave => wave.id === currentAudioId)

  useLayoutEffect(() => {
    audioObjectRef.current = {
      waveCollection,
      currentAudioId,
    }
  })

  const showUploadingModal = () => {
    return Modal.info({
      icon: null,
      content: (
        <div className="text-center">
          <Spin size="large" className="my-5" />
          <p>{formatMessage(podcastMessages.text.uploadingVoice)}</p>
        </div>
      ),
      centered: true,
      okButtonProps: { disabled: true, className: 'modal-footer-hidden-button' },
    })
  }

  const showUploadConfirmationModal = () => {
    return Modal.confirm({
      icon: null,
      title: formatMessage(podcastMessages.ui.bulkUpload),
      content: formatMessage(podcastMessages.text.bulkUploadMessage),
      okText: formatMessage(podcastMessages.ui.bulkUpload),
      centered: true,
      onOk: () => onUploadAudio(),
    })
  }

  const onGetRecordAudio = useCallback(
    (audioBuffer: AudioBuffer | null) => {
      if (audioBuffer && audioObjectRef.current?.waveCollection) {
        const waveId = uuid()
        setWaveCollection([
          ...audioObjectRef.current.waveCollection,
          {
            id: waveId,
            audioBuffer,
          },
        ])
        if (!currentAudioId) {
          setCurrentAudioId(waveId)
        }
      }
      setIsGeneratingAudio(false)
    },
    [currentAudioId],
  )

  useEffect(() => {
    const getAudioLink = async () => {
      if (podcastProgram?.contentType && waveCollection.length === 0 && !isInitializedAudio) {
        setIsInitializedAudio(true)
        setIsGeneratingAudio(true)

        const fileKey = `audios/${appId}/${podcastProgram.id}.${podcastProgram.contentType}`
        const audioLink = await getFileDownloadableLink(fileKey, authToken)
        const audioRequest = new Request(audioLink)

        const response = await fetch(audioRequest)
        const arrayBuffer = await response.arrayBuffer()
        const audioBuffer = await decodeAudioArrayBuffer(arrayBuffer)
        onGetRecordAudio(audioBuffer)
      }
    }
    getAudioLink()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(podcastProgram), appId, authToken, onGetRecordAudio, waveCollection.length])

  const onFinishPlaying = useCallback(() => {
    if (audioObjectRef.current) {
      const { waveCollection, currentAudioId } = audioObjectRef.current
      const nextAudioIndex = waveCollection.findIndex(wave => wave.id === currentAudioId)
      if (nextAudioIndex + 1 < waveCollection.length) {
        setCurrentAudioId(waveCollection[nextAudioIndex + 1].id)
      } else {
        setIsPlaying(false)
      }
    }
  }, [])

  const onTrimAudio = () => {
    const wave = waveCollection.find(wave => wave.id === currentAudioId)
    if (wave?.audioBuffer && currentPlayingSecond > 0) {
      const { duration, length } = wave.audioBuffer

      const audioSlicedFirst = sliceAudioBuffer(
        wave.audioBuffer,
        ~~((length * 0) / duration),
        ~~((length * currentPlayingSecond) / duration),
      )
      const audioSlicedLast = sliceAudioBuffer(
        wave.audioBuffer,
        ~~((length * currentPlayingSecond) / duration),
        ~~(length * 1),
      )
      setWaveCollection(
        waveCollection.reduce((acc: WaveCollectionProps[], wave: WaveCollectionProps) => {
          if (wave.id === currentAudioId) {
            const audioSlicedFirstId = uuid()
            acc.push({
              id: audioSlicedFirstId,
              audioBuffer: audioSlicedFirst,
            })
            acc.push({
              id: uuid(),
              audioBuffer: audioSlicedLast,
            })
            setCurrentAudioId(audioSlicedFirstId)
          } else {
            acc.push(wave)
          }
          return acc
        }, []),
      )
      setCurrentPlayingSecond(0)
    }
  }

  const onUploadAudio = () => {
    let dstAudioData = null
    if (waveCollection.length === 1) {
      dstAudioData = waveCollection[0].audioBuffer
    } else {
      dstAudioData = mergeAudioBuffer(waveCollection[0].audioBuffer, waveCollection[1].audioBuffer)
      for (let i = 2; i < waveCollection.length; i++) {
        if (dstAudioData) {
          dstAudioData = mergeAudioBuffer(dstAudioData, waveCollection[i].audioBuffer)
        }
      }
    }
    if (dstAudioData) {
      const modal = showUploadingModal()
      const mp3Data = convertAudioBufferToMp3(dstAudioData)
      const file = new File([mp3Data], 'record.mp3', { type: 'audio/mp3', lastModified: Date.now() })
      uploadFile(`audios/${appId}/${podcastProgramId}` + extname(file.name), file, authToken, {})
        .then(() => {
          updatePodcastProgramContent({
            variables: {
              updatedAt: new Date(),
              podcastProgramId,
              contentType: 'mp3',
            },
          })
            .then(async () => {
              await refetchPodcastProgram()
              message.success(formatMessage(commonMessages.event.successfullyUpload))
              history.push(`/podcast-programs/${podcastProgramId}`)
            })
            .catch(error => handleError(error))
            .finally(() => modal.destroy())
        })
        .catch(error => {
          handleError(error)
        })
    } else {
      handleError(new Error(formatMessage(errorMessages.event.failedPodcastRecording)))
    }
  }

  return (
    <div>
      <PodcastProgramHeader podcastProgramId={podcastProgramId} title={podcastProgram?.title} noPreview />
      <StyledLayoutContent>
        <StyledContainer className="container">
          <div className="text-center mb-5">
            <StyledPageTitle>{formatMessage(podcastMessages.ui.recordAudio)}</StyledPageTitle>
            <RecordButton
              onStart={() => setIsRecording(true)}
              onStop={() => {
                setIsRecording(false)
                setIsGeneratingAudio(true)
              }}
              onGetAudio={onGetRecordAudio}
            />
          </div>

          <ReactSortable
            handle=".handle"
            list={waveCollection}
            setList={newWaveCollection => setWaveCollection(newWaveCollection)}
          >
            {waveCollection.map((wave, index) => {
              return (
                <AudioTrackCard
                  key={wave.id}
                  id={wave.id}
                  position={index}
                  audioBuffer={wave.audioBuffer}
                  onClick={() => {
                    setIsPlaying(false)
                    setCurrentAudioId(wave.id)
                  }}
                  isActive={wave.id === currentAudioId}
                  isPlaying={wave.id === currentAudioId && isPlaying}
                  onAudioPlaying={second => setCurrentPlayingSecond(second)}
                  onFinishPlaying={onFinishPlaying}
                />
              )
            })}
          </ReactSortable>
        </StyledContainer>
      </StyledLayoutContent>

      <RecordingController
        hidden={isRecording}
        name={`${(currentAudioIndex + 1).toString().padStart(2, '0')} ${formatMessage(podcastMessages.ui.voiceFile)}`}
        duration={currentPlayingSecond}
        isPlaying={isPlaying}
        isEditing={isEditing}
        isDeleteDisabled={waveCollection.length < 1}
        isUploadDisabled={waveCollection.length < 1}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEdit={() => {
          setIsEditing(isEditing => !isEditing)
        }}
        onTrim={onTrimAudio}
        onDelete={() => {
          setWaveCollection(waveCollection.filter(wave => wave.id !== currentAudioId))
          setIsEditing(false)
        }}
        onUpload={() => {
          showUploadConfirmationModal()
          setIsEditing(false)
        }}
        isBackwardDisabled={currentAudioIndex === 0}
        isForwardDisabled={currentAudioIndex + 1 === waveCollection.length}
        onForward={() => {
          if (currentAudioIndex + 1 < waveCollection.length) {
            setCurrentAudioId(waveCollection[currentAudioIndex + 1].id)
          }
        }}
        onBackward={() => {
          if (currentAudioIndex > 0) {
            setCurrentAudioId(waveCollection[currentAudioIndex - 1].id)
          }
        }}
      />

      <Modal visible={isGeneratingAudio} closable={false} footer={false}>
        <div className="text-center">
          <Spin size="large" className="my-5" />
          <p className="mb-5">{formatMessage(podcastMessages.text.generatingVoice)}</p>
        </div>
      </Modal>
    </div>
  )
}

export default RecordingPage
