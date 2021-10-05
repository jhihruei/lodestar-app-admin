import { DeleteOutlined, EyeOutlined, FileWordOutlined, UploadOutlined } from '@ant-design/icons'
import Uppy from '@uppy/core'
import { StatusBar, useUppy } from '@uppy/react'
import Tus from '@uppy/tus'
import { Button, List, Modal, Select, Tag } from 'antd'
import { ButtonProps } from 'antd/lib/button'
import { ModalProps } from 'antd/lib/modal'
import axios from 'axios'
import { useAuth } from 'lodestar-app-element/src/contexts/AuthContext'
import React, { useRef, useState } from 'react'
import { defineMessages, useIntl } from 'react-intl'
import { DeepPick } from 'ts-deep-pick/lib'
import { useCaptions } from '../../hooks/data'
import { Attachment, UploadState } from '../../types/general'
import VideoPlayer from './VideoPlayer'

const messages = defineMessages({
  preview: { id: 'program.ui.preview', defaultMessage: '預覽' },
  reUpload: { id: 'program.ui.reUpload', defaultMessage: '重新上傳' },
  chooseFile: { id: 'program.ui.chooseFile', defaultMessage: '選擇檔案' },
  manageCaption: { id: 'program.ui.manageCaption', defaultMessage: '管理字幕' },
  uploadedCaptions: { id: 'program.ui.uploadedCaptions', defaultMessage: '已上傳字幕' },
  delete: { id: 'program.ui.delete', defaultMessage: '刪除檔案' },
  duration: { id: 'program.label.duration', defaultMessage: '內容時長（分鐘）' },
  chooseCaptionLanguage: { id: 'program.label.chooseCaptionLanguage', defaultMessage: '選擇字幕語系' },
})

const VideoLibraryItem: React.VFC<
  Pick<Attachment, 'id' | 'name'> &
    Partial<Omit<Attachment, 'author'>> &
    DeepPick<Attachment, 'author.name'> & {
      onReUpload?: () => void
      onDelete?: () => void
    }
> = ({
  id,
  name,
  filename,
  size,
  author,
  status,
  thumbnailUrl,
  contentType,
  duration,
  createdAt,
  updatedAt,
  options,
  onReUpload,
  onDelete,
}) => {
  const { authToken } = useAuth()
  const [cloudflareOptions, setCloudflareOptions] = useState(options?.cloudflare)

  return (
    <List.Item className="mb-3" extra={[]}>
      <List.Item.Meta
        title={name}
        description={`${(size ? (size / 1024 / 1024).toFixed(1) : '-') + 'MB'} @${author?.name}`}
      />
      <div>
        <div>status: {status}</div>
        <div>filename: {filename}</div>
        <div>duration: {Math.ceil(Number(duration) / 60)} minute(s)</div>
        <div>Created: {createdAt}</div>
        <div>Updated: {updatedAt}</div>
      </div>
    </List.Item>
  )
}

export const DeleteButton: React.VFC<{ videoId: string; onDelete?: () => void } & ButtonProps> = ({
  videoId,
  onDelete,
  ...buttonProps
}) => {
  const { formatMessage } = useIntl()
  const { authToken } = useAuth()
  const [deleting, setDeleting] = useState(false)
  const handleClick = () => {
    if (window.confirm('This action cannot be reverted.')) {
      setDeleting(true)
      axios
        .delete(`${process.env.REACT_APP_API_BASE_ROOT}/videos/${videoId}`, {
          headers: {
            Authorization: `bearer ${authToken}`,
          },
        })
        .then(({ data: { code, error } }) => {
          if (code === 'SUCCESS') {
            onDelete?.()
          } else {
            alert(error)
          }
        })
        .finally(() => setDeleting(false))
    }
  }
  return (
    <Button size="small" loading={deleting} danger onClick={handleClick} {...buttonProps}>
      <DeleteOutlined />
    </Button>
  )
}

export const PreviewButton: React.VFC<{ videoId: string; title: string } & ButtonProps> = ({
  videoId,
  title,
  ...buttonProps
}) => {
  const { formatMessage } = useIntl()
  const [isModalVisible, setIsModalVisible] = useState(false)
  return (
    <div>
      <Modal title={title} footer={null} visible={isModalVisible} onCancel={() => setIsModalVisible(false)}>
        <VideoPlayer videoId={videoId} width="100%" />
      </Modal>
      <Button size="small" type="primary" onClick={() => setIsModalVisible(true)} {...buttonProps}>
        <EyeOutlined />
      </Button>
    </div>
  )
}

export const CaptionUploadButton: React.VFC<{ videoId: string } & ButtonProps> = ({ videoId, ...buttonProps }) => {
  const { formatMessage } = useIntl()
  const [isModalVisible, setIsModalVisible] = useState(false)

  return (
    <div>
      <Button size="small" onClick={() => setIsModalVisible(true)} {...buttonProps}>
        <FileWordOutlined />
      </Button>
      {isModalVisible && <CaptionModal videoId={videoId} onCancel={() => setIsModalVisible(false)} destroyOnClose />}
    </div>
  )
}

const CaptionModal: React.VFC<{ videoId: string } & ModalProps> = ({ videoId, ...modalProps }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { formatMessage } = useIntl()
  const { captions, captionLanguages, refetch: refetchCaptions, deleteCaption, addCaption, uppy } = useCaptions(videoId)
  const [languageCode, setLanguageCode] = useState<typeof captionLanguages[number]['code']>()
  return (
    <Modal visible footer={null} title={formatMessage(messages.manageCaption)} {...modalProps}>
      <div className="d-flex mb-2">
        {formatMessage(messages.uploadedCaptions)}：
        {captions.map(caption => (
          <Tag key={caption.language} className="mr-1" closable onClose={() => deleteCaption(caption.language)}>
            {caption.label}
          </Tag>
        ))}
      </div>
      <Select
        className="mb-2"
        style={{ width: '100%' }}
        showSearch
        allowClear
        placeholder={formatMessage(messages.chooseCaptionLanguage)}
        value={languageCode}
        onChange={code =>
          addCaption(code).then(() => {
            setLanguageCode('')
            refetchCaptions()
          })
        }
      >
        {captionLanguages.map(captionLanguage => (
          <Select.Option key={captionLanguage.code} value={captionLanguage.code}>
            {captionLanguage.name}
          </Select.Option>
        ))}
      </Select>
      {uppy && (
        <Button block onClick={() => inputRef.current?.click()}>
          {formatMessage(messages.chooseFile)}
        </Button>
      )}
      {uppy && (
        <input
          accept=".srt,.vtt"
          ref={inputRef}
          type="file"
          hidden
          onChange={e => {
            const files = Array.from(e.target.files || [])
            if (files.length > 0) {
              uppy.reset()
            }
            files.forEach(file => {
              try {
                uppy.addFile({
                  source: 'file input',
                  name: file.name,
                  type: file.type,
                  data: file,
                })
              } catch (err: any) {
                if (err.isRestriction) {
                  // handle restrictions
                  alert('Restriction error:' + err)
                } else {
                  // handle other errors
                  console.error(err)
                }
              }
            })
          }}
        />
      )}
      {uppy && <StatusBar uppy={uppy} hideUploadButton showProgressDetails />}
    </Modal>
  )
}

export const ReUploadButton: React.VFC<{ videoId: string; onFinish?: () => void } & ButtonProps> = ({
  videoId,
  onFinish,
  ...buttonProps
}) => {
  const [uploadState, setUploadState] = useState<UploadState>('idle')
  const inputRef = useRef<HTMLInputElement>(null)
  const { authToken } = useAuth()
  const { formatMessage } = useIntl()
  const uppy = useUppy(() => {
    const tusEndpoint = `${process.env.REACT_APP_API_BASE_ROOT}/videos/${videoId}/stream`
    return new Uppy({
      autoProceed: true,
      restrictions: {
        maxNumberOfFiles: 1,
        allowedFileTypes: ['video/*'],
        maxTotalFileSize: 10 * 1024 * 1024 * 1024, // limited 10GB at once
      },
    })
      .use(Tus, {
        removeFingerprintOnSuccess: true,
        chunkSize: 10 * 1024 * 1024, // 10MB
        endpoint: tusEndpoint,
        onBeforeRequest: req => {
          if (req.getURL() === tusEndpoint) {
            req.setHeader('Authorization', `bearer ${authToken}`)
          }
        },
      })
      .on('upload', () => setUploadState('uploading'))
      .on('complete', () => {
        onFinish?.()
        setUploadState('upload-success')
      })
  })
  return (
    <div>
      <Button
        size="small"
        disabled={uploadState === 'uploading'}
        onClick={() => inputRef.current?.click()}
        {...buttonProps}
      >
        <UploadOutlined />
      </Button>
      <input
        accept="video/*"
        ref={inputRef}
        type="file"
        hidden
        onChange={e => {
          const files = Array.from(e.target.files || [])
          if (files.length > 0) {
            uppy.reset()
          }
          files.forEach(file => {
            try {
              uppy.addFile({
                source: 'file input',
                name: file.name,
                type: file.type,
                data: file,
              })
            } catch (err: any) {
              if (err.isRestriction) {
                // handle restrictions
                alert('Restriction error:' + err)
              } else {
                // handle other errors
                console.error(err)
              }
            }
          })
        }}
      />
      <StatusBar uppy={uppy} hideUploadButton hideAfterFinish />
    </div>
  )
}

export default VideoLibraryItem
