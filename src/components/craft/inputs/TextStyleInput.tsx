import { Collapse, InputNumber, Radio, Space } from 'antd'
import React from 'react'
import { useIntl } from 'react-intl'
import { CSSObject } from 'styled-components'
import { craftPageMessages } from '../../../helpers/translation'
import {
  CraftSettingLabel,
  CraftSlider,
  StyledCollapsePanel,
} from '../../../pages/craft/CraftPageAdminPage/CraftSettingsPanel'
import { AdminHeaderTitle } from '../../admin'
import BoxModelInput from './BoxModelInput'
import ColorPicker from './ColorPicker'

const TextStyleInput: React.VFC<{
  type: 'title' | 'paragraph'
  title: string
  value?: CSSObject
  onChange?: (value: CSSObject) => void
}> = ({ type, title, value, onChange }) => {
  const { formatMessage } = useIntl()

  return (
    <Collapse
      className="mt-2 p-0"
      bordered={false}
      expandIconPosition="right"
      ghost
      defaultActiveKey={['contentStyle']}
    >
      {typeof value !== 'undefined' && (
        <StyledCollapsePanel key="contentStyle" header={<AdminHeaderTitle>{title}</AdminHeaderTitle>}>
          <>
            <CraftSettingLabel>{formatMessage(craftPageMessages.label.fontSize)}</CraftSettingLabel>
            <div className="col-12 mb-2 p-0 d-flex justify-content-center align-items-center ">
              <div className="col-8 p-0">
                <CraftSlider
                  value={typeof value.fontSize === 'number' ? value.fontSize : 0}
                  onChange={(v: number) => {
                    onChange?.({ ...value, fontSize: v })
                  }}
                />
              </div>
              <InputNumber
                className="col-4"
                min={0}
                value={Number(value.fontSize)}
                onChange={v => {
                  onChange?.({ ...value, fontSize: Number(v) })
                }}
              />
            </div>
          </>

          {type === 'paragraph' && (
            <>
              <CraftSettingLabel>{formatMessage(craftPageMessages.label.lineHeight)}</CraftSettingLabel>
              <div className="col-12 mb-2 p-0 d-flex justify-content-center align-items-center ">
                <div className="col-8 p-0">
                  <CraftSlider
                    value={typeof value.lineHeight === 'number' ? value?.lineHeight : 0}
                    onChange={(v: number) => onChange?.({ ...value, lineHeight: v })}
                  />
                </div>
                <InputNumber
                  className="col-4"
                  min={0}
                  value={Number(value.lineHeight)}
                  onChange={v => onChange?.({ ...value, lineHeight: Number(v) })}
                />
              </div>
            </>
          )}

          <BoxModelInput
            title={formatMessage(craftPageMessages.label.margin)}
            value={value.margin?.toString()}
            onChange={v => onChange?.({ ...value, margin: v })}
          />

          <div className="d-flex mb-3">
            <div>
              <CraftSettingLabel>{formatMessage(craftPageMessages.label.textAlign)}</CraftSettingLabel>
              <div>
                <Radio.Group
                  className="mt-2"
                  value={value.textAlign}
                  onChange={e => onChange?.({ ...value, textAlign: e.target.value })}
                >
                  <Space direction="vertical">
                    <Radio value="left">{formatMessage(craftPageMessages.label.left)}</Radio>
                    <Radio value="center">{formatMessage(craftPageMessages.label.center)}</Radio>
                    <Radio value="right">{formatMessage(craftPageMessages.label.right)}</Radio>
                  </Space>
                </Radio.Group>
              </div>
            </div>
            <div className="ml-4">
              <CraftSettingLabel>{formatMessage(craftPageMessages.label.fontWeight)}</CraftSettingLabel>
              <div>
                <Radio.Group
                  className="mt-2"
                  value={value.fontWeight}
                  onChange={e => onChange?.({ ...value, fontWeight: e.target.value })}
                >
                  <Space direction="vertical">
                    <Radio value="lighter">{formatMessage(craftPageMessages.label.lighter)}</Radio>
                    <Radio value="normal">{formatMessage(craftPageMessages.label.normal)}</Radio>
                    <Radio value="bold">{formatMessage(craftPageMessages.label.bold)}</Radio>
                  </Space>
                </Radio.Group>
              </div>
            </div>
          </div>
          <ColorPicker value={value.color} onChange={v => onChange?.({ ...value, color: v })} />
        </StyledCollapsePanel>
      )}
    </Collapse>
  )
}

export default TextStyleInput
