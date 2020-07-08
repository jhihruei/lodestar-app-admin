import { Button, Divider, Icon, Tooltip } from 'antd'
import React from 'react'
import { useIntl } from 'react-intl'
import styled, { css } from 'styled-components'
import { desktopViewMixin, durationFormatter } from '../../helpers'
import { commonMessages, podcastMessages } from '../../helpers/translation'
import { ReactComponent as Backward5Icon } from '../../images/icon/backward-5.svg'
import { ReactComponent as Forward5Icon } from '../../images/icon/forward-5.svg'
import { ReactComponent as PauseCircleIcon } from '../../images/icon/pause-circle.svg'
import { ReactComponent as PlayCircleIcon } from '../../images/icon/play-circle.svg'
import { ReactComponent as TrashOIcon } from '../../images/icon/trash-o.svg'
import { ReactComponent as TrimIcon } from '../../images/icon/trim.svg'
import { ReactComponent as UploadIcon } from '../../images/icon/upload.svg'
import Responsive from '../common/Responsive'

const StyledWrapper = styled.div<{ hidden?: boolean }>`
  position: fixed;
  bottom: 0;
  width: 100%;
  visibility: ${props => (props.hidden ? '0%' : '100%')};
`
const StyledOverlay = styled.div<{ active?: boolean }>`
  position: relative;
  z-index: 999;
  padding: 1rem 0;
  background: white;
  color: ${props => props.theme['@primary-color']};
  font-size: 14px;
  box-shadow: 0 -1px 6px 1px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  transition: transform 0.2s ease-in-out;
  transform: translateY(${props => (props.active ? '4%' : '100%')});
`
const StyledBar = styled.div`
  position: relative;
  z-index: 1000;
  background: #323232;
  color: white;
`
const StyledAction = styled.div`
  ${desktopViewMixin(css`
    > * {
      margin-left: 2rem;
    }
  `)}
`

type StyledButtonProps = {
  variant?: 'overlay' | 'bar-icon'
  height?: string
  iconSize?: string
}
const StyledButton = styled(Button)<StyledButtonProps>`
  && {
    height: ${props =>
      props.height
        ? props.height
        : props.variant === 'overlay'
        ? '52px'
        : props.variant === 'bar-icon'
        ? '24px'
        : '44px'};
    color: ${props => (props.variant === 'overlay' ? 'var(--gray-darker)' : 'white')};
    i {
      font-size: ${props => props.iconSize || '24px'};
    }
    span {
      line-height: 1.5;
    }
    ${props =>
      props.variant === 'bar-icon'
        ? css`
            &:hover i {
              color: #cdcdcd;
            }
          `
        : ''}
  }
`
const TooltipText = styled.span`
  font-size: 12px;
`

const RecordingController: React.FC<{
  hidden?: boolean
  name: string
  duration: number
  isPlaying?: boolean
  isEditing?: boolean
  onPlay?: () => void
  onPause?: () => void
  onForward?: () => void
  onBackward?: () => void
  onTrim?: () => void
  onDelete?: () => void
  onUpload?: () => void
  onEdit?: () => void
}> = ({
  hidden,
  name,
  duration,
  isPlaying,
  isEditing,
  onPlay,
  onPause,
  onForward,
  onBackward,
  onTrim,
  onDelete,
  onUpload,
  onEdit,
}) => {
  const { formatMessage } = useIntl()

  return (
    <StyledWrapper hidden={hidden}>
      <Responsive.Default>
        <StyledOverlay className="d-flex align-items-center justify-content-around" active={isEditing}>
          <div className="flex-grow-1 text-center">
            <StyledButton type="link" size="small" variant="overlay" onClick={() => onDelete && onDelete()}>
              <Icon component={() => <TrashOIcon />} className="d-block mb-1" />
              <div>{formatMessage(podcastMessages.ui.deleteAudio)}</div>
            </StyledButton>
          </div>
          <Divider type="vertical" style={{ height: '49px' }} />
          <div className="flex-grow-1 text-center">
            <StyledButton type="link" size="small" variant="overlay">
              <Icon component={() => <UploadIcon />} className="d-block mb-1" onClick={() => onUpload && onUpload()} />
              <div>{formatMessage(podcastMessages.ui.bulkUpload)}</div>
            </StyledButton>
          </div>
        </StyledOverlay>
      </Responsive.Default>

      <StyledBar className="py-1">
        <div className="container">
          <Responsive.Default>
            <div className="text-center">
              {name} {durationFormatter(duration)}
            </div>
          </Responsive.Default>

          <div className="row justify-content-between py-2">
            <div className="col-3 col-lg-4 d-flex align-items-center">
              <Responsive.Default>
                <Tooltip title={<TooltipText>{formatMessage(podcastMessages.ui.trim)}</TooltipText>}>
                  <StyledButton type="link" variant="bar-icon" className="p-0" onClick={() => onTrim && onTrim()}>
                    <Icon component={() => <TrimIcon />} />
                  </StyledButton>
                </Tooltip>
              </Responsive.Default>
              <Responsive.Desktop>
                <div className="text-center">
                  {name} {durationFormatter(duration)}
                </div>
              </Responsive.Desktop>
            </div>

            <div className="col-6 col-lg-4 d-flex align-items-center justify-content-center">
              <Tooltip title={<TooltipText>{formatMessage(podcastMessages.ui.backward)}</TooltipText>}>
                <StyledButton type="link" variant="bar-icon" className="p-0" onClick={() => onBackward && onBackward()}>
                  <Icon component={() => <Backward5Icon />} />
                </StyledButton>
              </Tooltip>
              <Tooltip title={<TooltipText>{formatMessage(podcastMessages.ui.play)}</TooltipText>}>
                <StyledButton
                  type="link"
                  variant="bar-icon"
                  className="mx-1"
                  height="44px"
                  iconSize="44px"
                  onClick={() => (isPlaying ? onPause && onPause() : onPlay && onPlay())}
                >
                  <Icon component={() => (isPlaying ? <PauseCircleIcon /> : <PlayCircleIcon />)} />
                </StyledButton>
              </Tooltip>
              <Tooltip title={<TooltipText>{formatMessage(podcastMessages.ui.forward)}</TooltipText>}>
                <StyledButton type="link" variant="bar-icon" className="p-0" onClick={() => onForward && onForward()}>
                  <Icon component={() => <Forward5Icon />} />
                </StyledButton>
              </Tooltip>
            </div>

            <StyledAction className="col-3 col-lg-4 d-flex align-items-center justify-content-end">
              <Responsive.Desktop>
                <Tooltip title={<TooltipText>{formatMessage(podcastMessages.ui.trim)}</TooltipText>}>
                  <StyledButton type="link" variant="bar-icon" className="p-0 m-0" onClick={() => onTrim && onTrim()}>
                    <Icon component={() => <TrimIcon />} />
                  </StyledButton>
                </Tooltip>
                <Divider
                  type="vertical"
                  style={{ top: 0, marginRight: '0', height: '24px', backgroundColor: 'white' }}
                />
                {isEditing && (
                  <>
                    <Tooltip title={<TooltipText>{formatMessage(commonMessages.ui.delete)}</TooltipText>}>
                      <StyledButton
                        type="link"
                        variant="bar-icon"
                        className="p-0"
                        onClick={() => onDelete && onDelete()}
                      >
                        <Icon component={() => <TrashOIcon />} />
                      </StyledButton>
                    </Tooltip>
                    <Tooltip title={<TooltipText>{formatMessage(podcastMessages.ui.upload)}</TooltipText>}>
                      <StyledButton
                        type="link"
                        variant="bar-icon"
                        className="p-0"
                        onClick={() => onUpload && onUpload()}
                      >
                        <Icon component={() => <UploadIcon />} />
                      </StyledButton>
                    </Tooltip>
                  </>
                )}
              </Responsive.Desktop>
              <StyledButton
                className="py-2 px-3"
                size="small"
                ghost
                variant="bar-icon"
                height="36px"
                onClick={() => onEdit && onEdit()}
              >
                {isEditing ? formatMessage(commonMessages.ui.cancel) : formatMessage(commonMessages.ui.edit)}
              </StyledButton>
            </StyledAction>
          </div>
        </div>
      </StyledBar>
    </StyledWrapper>
  )
}

export default RecordingController
