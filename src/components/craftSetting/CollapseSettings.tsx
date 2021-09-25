import { useNode } from '@craftjs/core'
import { Collapse, Form, Radio, Space } from 'antd'
import { useForm } from 'antd/lib/form/Form'
import { CraftCollapseProps } from 'lodestar-app-element/src/components/craft/CraftCollapse'
import { CraftTextStyleProps } from 'lodestar-app-element/src/types/craft'
import React, { useState } from 'react'
import { useIntl } from 'react-intl'
import { v4 as uuid } from 'uuid'
import { useApp } from '../../contexts/AppContext'
import { useAuth } from '../../contexts/AuthContext'
import { handleError, uploadFile } from '../../helpers/index'
import { craftPageMessages } from '../../helpers/translation'
import ImageUploader from '../common/ImageUploader'
import BoxModelInput, { formatBoxModelValue } from './BoxModelInput'
import ColorPickerBlock from './ColorPickerBlock'
import ParagraphContentBlock from './ParagraphContentBlock'
import { AdminHeaderTitle, StyledCollapsePanel } from './styled'
import TextStyleBlock from './TextStyleBlock'
import TitleContentBlock from './TitleContentBlock'

type FieldProps = Pick<
  CraftCollapseProps,
  'title' | 'paragraph' | 'variant' | 'outlineColor' | 'backgroundType' | 'solidColor' | 'backgroundImageUrl'
> & {
  titleStyle: Pick<CraftTextStyleProps, 'fontSize' | 'textAlign' | 'fontWeight' | 'color'> & {
    margin: string
  }
  paragraphStyle: Pick<CraftTextStyleProps, 'fontSize' | 'lineHeight' | 'textAlign' | 'fontWeight' | 'color'> & {
    margin: string
  }
  cardMargin: string
  cardPadding: string
}

const CollapseSettings: React.VFC = () => {
  const { formatMessage } = useIntl()
  const [loading, setLoading] = useState(false)
  const { authToken } = useAuth()
  const { id: appId } = useApp()
  const [form] = useForm<FieldProps>()

  const {
    actions: { setProp },
    props,
  } = useNode(node => ({
    props: node.data.props as CraftCollapseProps,
  }))
  const [backgroundImage, setBackgroundImage] = useState<File | null>(null)

  const handleChange = () => {
    form
      .validateFields()
      .then(values => {
        const cardMargin = formatBoxModelValue(values.cardMargin)
        const cardPadding = formatBoxModelValue(values.cardPadding)
        const titleMargin = formatBoxModelValue(values.titleStyle?.margin)
        const paragraphMargin = formatBoxModelValue(values.paragraphStyle?.margin)

        setProp(props => {
          props.cardMargin = {
            mt: cardMargin?.[0] || '0',
            mr: cardMargin?.[1] || '0',
            mb: cardMargin?.[2] || '0',
            ml: cardMargin?.[3] || '0',
          }
          props.cardPadding = {
            pt: cardPadding?.[0] || '0',
            pr: cardPadding?.[1] || '0',
            pb: cardPadding?.[2] || '0',
            pl: cardPadding?.[3] || '0',
          }
          props.variant = values.variant
          props.backgroundType = values.backgroundType
          props.outlineColor = values.outlineColor
          props.solidColor = values.solidColor
          props.title = values.title
          props.titleStyle.fontSize = values.titleStyle.fontSize
          props.titleStyle.margin = {
            mt: titleMargin?.[0] || '0',
            mr: titleMargin?.[1] || '0',
            mb: titleMargin?.[2] || '0',
            ml: titleMargin?.[3] || '0',
          }
          props.titleStyle.textAlign = values.titleStyle.textAlign
          props.titleStyle.fontWeight = values.titleStyle.fontWeight
          props.titleStyle.color = values.titleStyle.color
          props.paragraph = values.paragraph
          props.paragraphStyle.fontSize = values.paragraphStyle.fontSize
          props.paragraphStyle.lineHeight = values.paragraphStyle.lineHeight
          props.paragraphStyle.margin = {
            mt: paragraphMargin?.[0] || '0',
            mr: paragraphMargin?.[1] || '0',
            mb: paragraphMargin?.[2] || '0',
            ml: paragraphMargin?.[3] || '0',
          }
          props.paragraphStyle.textAlign = values.paragraphStyle.textAlign
          props.paragraphStyle.fontWeight = values.paragraphStyle.fontWeight
          props.paragraphStyle.color = values.paragraphStyle.color
        })
      })
      .catch(() => {})
  }

  const handleImageUpload = (file?: File) => {
    if (file) {
      const uniqId = uuid()
      setLoading(true)
      uploadFile(`images/${appId}/craft/${uniqId}`, file, authToken)
        .then(() => {
          setBackgroundImage(file)
          setProp(props => {
            props.backgroundImageUrl = `https://${process.env.REACT_APP_S3_BUCKET}/images/${appId}/craft/${uniqId}`
          })
        })
        .catch(handleError)
        .finally(() => setLoading(false))
    }
  }

  return (
    <Form
      form={form}
      layout="vertical"
      colon={false}
      requiredMark={false}
      initialValues={{
        cardPadding: `${props.cardPadding?.pt || 0};${props.cardPadding?.pr || 0};${props.cardPadding?.pb || 0};${
          props.cardPadding?.pl || 0
        }`,
        cardMargin: `${props.cardMargin?.mt || 0};${props.cardMargin?.mr || 0};${props.cardMargin?.mb || 0};${
          props.cardMargin?.ml || 0
        }`,
        variant: props.variant || 'none',
        outlineColor: props.outlineColor || '#585858',
        backgroundType: props.backgroundType || 'none',
        solidColor: props.solidColor || '#cccccc',
        backgroundImage: props.backgroundImageUrl || '',
        title: props.title || '',
        titleStyle: {
          fontSize: props.titleStyle.fontSize || 16,
          margin: `${props.titleStyle.margin?.mt || 0};${props.titleStyle.margin?.mr || 0};${
            props.titleStyle.margin?.mb || 0
          };${props.titleStyle.margin?.ml || 0}`,
          textAlign: props.titleStyle.textAlign || 'left',
          fontWeight: props.titleStyle.fontWeight || 'normal',
          color: props.titleStyle.color || '#585858',
        },
        paragraph: props.paragraph || '',
        paragraphStyle: {
          fontSize: props.paragraphStyle.fontSize || 16,
          margin: `${props.paragraphStyle?.margin?.mt || 0};${props.paragraphStyle?.margin?.mr || 0};${
            props.paragraphStyle?.margin?.mb || 0
          };${props.paragraphStyle?.margin?.ml || 0}`,
          textAlign: props.paragraphStyle.textAlign || 'left',
          fontWeight: props.paragraphStyle.fontWeight || 'normal',
          color: props.paragraphStyle.color || '#585858',
        },
      }}
      onValuesChange={handleChange}
    >
      <Form.Item name="title">
        <TitleContentBlock />
      </Form.Item>
      <Form.Item name="titleStyle">
        <TextStyleBlock type="title" title={formatMessage(craftPageMessages.label.titleStyle)} />
      </Form.Item>
      <Form.Item name="paragraph">
        <ParagraphContentBlock />
      </Form.Item>
      <Form.Item name="paragraphStyle">
        <TextStyleBlock type="paragraph" title={formatMessage(craftPageMessages.label.paragraphStyle)} />
      </Form.Item>

      <Collapse className="mt-2 p-0" bordered={false} expandIconPosition="right" ghost defaultActiveKey={['cardStyle']}>
        <StyledCollapsePanel
          key="cardStyle"
          header={<AdminHeaderTitle>{formatMessage(craftPageMessages.label.cardStyle)}</AdminHeaderTitle>}
        >
          <Form.Item name="cardMargin" label={formatMessage(craftPageMessages.label.margin)}>
            <BoxModelInput onChange={handleChange} />
          </Form.Item>
          <Form.Item name="cardPadding" label={formatMessage(craftPageMessages.label.padding)}>
            <BoxModelInput onChange={handleChange} />
          </Form.Item>
        </StyledCollapsePanel>
      </Collapse>

      <Form.Item name="variant" label={formatMessage(craftPageMessages.label.variant)}>
        <Radio.Group>
          <Space direction="vertical">
            <Radio value="none">{formatMessage(craftPageMessages.label.none)}</Radio>
            <Radio value="outline">{formatMessage(craftPageMessages.label.outline)}</Radio>
            <Radio value="backgroundColor">{formatMessage(craftPageMessages.label.backgroundColor)}</Radio>
          </Space>
        </Radio.Group>
      </Form.Item>

      <Form.Item name="outlineColor" noStyle={props.variant !== 'outline'}>
        {props.variant === 'outline' && <ColorPickerBlock />}
      </Form.Item>

      <Form.Item
        name="backgroundType"
        label={formatMessage(craftPageMessages.label.background)}
        noStyle={props.variant !== 'backgroundColor'}
      >
        {props.variant === 'backgroundColor' && (
          <Radio.Group buttonStyle="solid">
            <Radio.Button value="none">{formatMessage(craftPageMessages.ui.empty)}</Radio.Button>
            <Radio.Button value="solidColor">{formatMessage(craftPageMessages.ui.solidColor)}</Radio.Button>
            <Radio.Button value="backgroundImage">{formatMessage(craftPageMessages.ui.image)}</Radio.Button>
          </Radio.Group>
        )}
      </Form.Item>

      <Form.Item
        name="solidColor"
        noStyle={props.variant !== 'backgroundColor' || props.backgroundType !== 'solidColor'}
      >
        {props.variant === 'backgroundColor' && props.backgroundType === 'solidColor' && <ColorPickerBlock />}
      </Form.Item>

      <Form.Item
        name="backgroundImage"
        noStyle={props.variant !== 'backgroundColor' || props.backgroundType !== 'backgroundImage'}
      >
        {props.variant === 'backgroundColor' && props.backgroundType === 'backgroundImage' && (
          <ImageUploader
            uploading={loading}
            file={backgroundImage}
            initialCoverUrl={props.backgroundImageUrl}
            onChange={handleImageUpload}
          />
        )}
      </Form.Item>
    </Form>
  )
}

export default CollapseSettings
