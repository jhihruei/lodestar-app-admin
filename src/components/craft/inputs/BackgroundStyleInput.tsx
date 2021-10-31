import { Form, Radio } from 'antd'
import { defineMessages, useIntl } from 'react-intl'
import { CSSObject } from 'styled-components'
import EmptyCover from '../../../images/default/empty-cover.png'
import ColorPicker from './ColorPicker'
import ImageInput from './ImageInput'

export type BackgroundStyle = Pick<CSSObject, 'background' | 'backgroundImage' | 'backgroundColor'>
type BackgroundStyleInputProps = {
  value?: BackgroundStyle
  onChange?: (value: BackgroundStyle) => void
}

const messages = defineMessages({
  background: { id: 'craft.inputs.background', defaultMessage: '背景' },
  none: { id: 'craft.inputs.background.none', defaultMessage: '無' },
  solid: { id: 'craft.inputs.background.solid', defaultMessage: '純色' },
  image: { id: 'craft.inputs.background.image', defaultMessage: '圖片' },
})

const defaultColor = '#fff'
const defaultImage = EmptyCover

const BackgroundStyleInput: React.VFC<BackgroundStyleInputProps> = ({ value, onChange }) => {
  const { formatMessage } = useIntl()
  const backgroundType = value?.backgroundImage ? 'image' : value?.backgroundColor ? 'solid' : 'none'
  const handleTypeChange = (type: typeof backgroundType) => {
    switch (type) {
      case 'none':
        onChange?.({ background: 'unset', backgroundColor: undefined, backgroundImage: undefined })
        break
      case 'solid':
        onChange?.({
          background: undefined,
          backgroundColor: value?.backgroundColor || defaultColor,
          backgroundImage: undefined,
        })
        break
      case 'image':
        onChange?.({
          background: undefined,
          backgroundColor: undefined,
          backgroundImage: value?.backgroundImage || `url(${defaultImage})`,
        })
        break
    }
  }
  return (
    <div>
      <Form.Item>
        <Radio.Group buttonStyle="solid" value={backgroundType} onChange={e => handleTypeChange(e.target.value)}>
          <Radio.Button value="none">{formatMessage(messages.none)}</Radio.Button>
          <Radio.Button value="solid">{formatMessage(messages.solid)}</Radio.Button>
          <Radio.Button value="image">{formatMessage(messages.image)}</Radio.Button>
        </Radio.Group>
      </Form.Item>

      {backgroundType === 'solid' && (
        <ColorPicker
          value={value?.backgroundColor || defaultColor}
          onChange={color => onChange?.({ backgroundColor: color })}
        />
      )}

      {backgroundType === 'image' && (
        <Form.Item name="url" noStyle>
          <ImageInput
            value={value?.backgroundImage?.slice(4, -1).replace(/"/g, '') || defaultImage}
            onChange={url => {
              onChange?.({ backgroundImage: `url(${url})` })
            }}
          />
        </Form.Item>
      )}
    </div>
  )
}

export default BackgroundStyleInput
