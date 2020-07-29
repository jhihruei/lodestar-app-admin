import Icon from '@ant-design/icons'
import { Button } from 'antd'
import { ButtonProps } from 'antd/lib/button'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { durationFormatter } from '../../helpers'
import { decodeAudio } from '../../helpers/audio'
import { useInterval } from '../../hooks/util'
import { ReactComponent as MicrophoneIcon } from '../../images/icon/microphone.svg'
import { ReactComponent as StopCircleIcon } from '../../images/icon/stop-circle.svg'
const { default: AudioRecorder } = require('audio-recorder-polyfill')
const { default: mpegEncoder } = require('audio-recorder-polyfill/mpeg-encoder')

AudioRecorder.encoder = mpegEncoder
AudioRecorder.prototype.mimeType = 'audio/mpeg'

const StyledButton = styled(Button)`
  && {
    height: 56px;
    border-radius: 56px;
    padding: 6px;
  }

  span {
    font-size: 18px;
  }
`
const StyledIcon = styled(Icon)<{ size?: number }>`
  width: 42px;
  font-size: ${props => props.size || 42}px;
`

const StyledMicrophoneIcon = styled(MicrophoneIcon)`
  width: 2rem;
  height: 2rem;
`

const RecordButton: React.FC<
  ButtonProps & {
    onStart?: () => void
    onStop?: (audioBuffer: AudioBuffer | null) => void
  }
> = ({ onStart, onStop, ...buttonProps }) => {
  const [isRecording, setIsRecording] = useState(false)
  const [startedAt, setStartedAt] = useState(0)
  const [duration, setDuration] = useState(0)

  const [recorder, setRecorder] = useState<any | null>(null)

  useEffect(() => {
    const initRecorder = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const _recorder = new AudioRecorder(stream)
      _recorder.addEventListener('dataavailable', async (e: any) => {
        const audioBuffer = await decodeAudio(e.data)
        onStop && onStop(audioBuffer)
        setRecorder(null)
      })

      return _recorder
    }

    !recorder && initRecorder().then(recorder => setRecorder(recorder))
  }, [recorder, onStop])

  const handleClickRecordButton = () => {
    if (isRecording) {
      recorder?.stop()
      recorder?.stream.getTracks().forEach((track: any) => track.stop())
      setIsRecording(false)
      setStartedAt(0)
    } else {
      onStart && onStart()
      recorder?.start()
      setIsRecording(true)
      setStartedAt(Date.now())
    }
  }

  useInterval(() => {
    if (startedAt) {
      setDuration((Date.now() - startedAt) / 1000)
    } else if (duration) {
      setDuration(0)
    }
  }, 100)

  return (
    <StyledButton
      type="primary"
      size="large"
      shape="round"
      onClick={handleClickRecordButton}
      className={isRecording ? 'px-2' : undefined}
      {...buttonProps}
    >
      <div className="d-flex align-items-center justify-content-start">
        {isRecording ? (
          <StyledIcon component={() => <StopCircleIcon />} />
        ) : (
          <StyledIcon component={() => <StyledMicrophoneIcon />} size={36} />
        )}

        {isRecording && <span className="ml-2">{durationFormatter(duration)}</span>}
      </div>
    </StyledButton>
  )
}

export default RecordButton
