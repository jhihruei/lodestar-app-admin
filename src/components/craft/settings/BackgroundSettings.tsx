import { useNode } from '@craftjs/core'
import { Collapse, Radio } from 'antd'
import Form from 'antd/lib/form/'
import { useForm } from 'antd/lib/form/Form'
import { CraftBackgroundProps } from 'lodestar-app-element/src/components/craft/CraftBackground'
import { useApp } from 'lodestar-app-element/src/contexts/AppContext'
import { useAuth } from 'lodestar-app-element/src/contexts/AuthContext'
import React, { useState } from 'react'
import { useIntl } from 'react-intl'
import { v4 as uuid } from 'uuid'
import { AdminHeaderTitle, StyledCollapsePanel } from '.'
import { handleError, uploadFile } from '../../../helpers/index'
import { craftPageMessages } from '../../../helpers/translation'
import ImageUploader from '../../common/ImageUploader'
import BoxModelInput, { formatBoxModelValue } from './BoxModelInput'
import CraftColorPickerBlock from './ColorPickerBlock'

type FieldProps = Pick<CraftBackgroundProps, 'backgroundType' | 'solidColor' | 'coverUrl'> & {
  margin: string
  padding: string
}

const BackgroundSettings: React.VFC = () => {
  const { formatMessage } = useIntl()
  const { authToken } = useAuth()
  const { id: appId } = useApp()
  const [form] = useForm<FieldProps>()
  const {
    actions: { setProp },
    props,
  } = useNode(node => ({
    props: node.data.props as CraftBackgroundProps,
    selected: node.events.selected,
  }))

  const [loading, setLoading] = useState(false)
  const [backgroundImage, setBackgroundImage] = useState<File | null>(null)

  const handleChange = () => {
    form
      .validateFields()
      .then(values => {
        const margin = formatBoxModelValue(values.margin)
        const padding = formatBoxModelValue(values.padding)

        setProp(props => {
          props.backgroundType = values.backgroundType
          props.solidColor = values.solidColor
          props.margin = {
            mt: margin?.[0] || '0',
            mr: margin?.[1] || '0',
            mb: margin?.[2] || '0',
            ml: margin?.[3] || '0',
          }
          props.padding = {
            pt: padding?.[0] || '0',
            pr: padding?.[1] || '0',
            pb: padding?.[2] || '0',
            pl: padding?.[3] || '0',
          }
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
            props.coverUrl = `https://${process.env.REACT_APP_S3_BUCKET}/images/${appId}/craft/${uniqId}${
              file.type.startsWith('image') ? '/1200' : ''
            }`
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
        backgroundType: props.backgroundType || 'none',
        solidColor: props.solidColor || '#cccccc',
        backgroundImage: props.coverUrl || '',
        margin: `${props.margin?.mt || 0};${props.margin?.mr || 0};${props.margin?.mb || 0};${props.margin?.ml || 0}`,
        padding: `${props.padding?.pt || 0};${props.padding?.pr || 0};${props.padding?.pb || 0};${
          props.padding?.pl || 0
        }`,
      }}
      onValuesChange={handleChange}
    >
      <Collapse
        className="mt-2 p-0"
        bordered={false}
        expandIconPosition="right"
        ghost
        defaultActiveKey={['imageSetting']}
      >
        <StyledCollapsePanel
          key="imageSetting"
          header={<AdminHeaderTitle>{formatMessage(craftPageMessages.label.blockSetting)}</AdminHeaderTitle>}
        >
          <Form.Item name="backgroundType" label={formatMessage(craftPageMessages.label.background)}>
            <Radio.Group buttonStyle="solid">
              <Radio.Button value="none">{formatMessage(craftPageMessages.ui.empty)}</Radio.Button>
              <Radio.Button value="solidColor">{formatMessage(craftPageMessages.ui.solidColor)}</Radio.Button>
              <Radio.Button value="backgroundImage">{formatMessage(craftPageMessages.ui.image)}</Radio.Button>
            </Radio.Group>
          </Form.Item>

          <Form.Item name="solidColor" noStyle={props.backgroundType !== 'solidColor'}>
            {props.backgroundType === 'solidColor' && <CraftColorPickerBlock />}
          </Form.Item>

          <Form.Item name="backgroundImage" noStyle={props.backgroundType !== 'backgroundImage'}>
            {props.backgroundType === 'backgroundImage' && (
              <ImageUploader
                uploading={loading}
                file={backgroundImage}
                initialCoverUrl={props.coverUrl}
                onChange={handleImageUpload}
              />
            )}
          </Form.Item>
        </StyledCollapsePanel>
      </Collapse>

      <Collapse className="mt-2 p-0" bordered={false} expandIconPosition="right" ghost defaultActiveKey={['container']}>
        <StyledCollapsePanel
          key="container"
          header={<AdminHeaderTitle>{formatMessage(craftPageMessages.label.containerComponent)}</AdminHeaderTitle>}
        >
          <Form.Item
            name="margin"
            label={formatMessage(craftPageMessages.label.margin)}
            rules={[
              {
                required: true,
                pattern: /^\d+;\d+;\d+;\d+$/,
                message: formatMessage(craftPageMessages.text.boxModelInputWarning),
              },
            ]}
          >
            <BoxModelInput onChange={handleChange} />
          </Form.Item>
          <Form.Item
            name="padding"
            label={formatMessage(craftPageMessages.label.padding)}
            rules={[
              {
                required: true,
                pattern: /^\d+;\d+;\d+;\d+$/,
                message: formatMessage(craftPageMessages.text.boxModelInputWarning),
              },
            ]}
          >
            <BoxModelInput onChange={handleChange} />
          </Form.Item>
        </StyledCollapsePanel>
      </Collapse>
    </Form>
  )
}

export default BackgroundSettings
