import { ControlType, EditorState } from 'braft-editor'
import React, { forwardRef } from 'react'
import StyledBraftEditor from '../common/StyledBraftEditor'

const braftLanguageFn = (languages: { [lan: string]: any }, context: any) => {
  if (context === 'braft-editor') {
    languages['zh-hant'].controls.normal = '內文'
    languages['zh-hant'].controls.fontSize = '字級'
    languages['zh-hant'].controls.removeStyles = '清除樣式'
    languages['zh-hant'].controls.code = '程式碼'
    languages['zh-hant'].controls.link = '連結'
    languages['zh-hant'].controls.hr = '水平線'
    languages['zh-hant'].controls.fullscreen = '全螢幕'

    return languages['zh-hant']
  }
}

type AdminBraftVariant = 'default' | 'short'
const controls: {
  [key in AdminBraftVariant]: ControlType[]
} = {
  default: [
    'headings',
    'font-size',
    'line-height',
    'text-color',
    'bold',
    'italic',
    'underline',
    'strike-through',
    'remove-styles',
    'separator',
    'text-align',
    'separator',
    'list-ol',
    'list-ul',
    'blockquote',
    'code',
    'separator',
    'media',
    'link',
    'hr',
    'separator',
    'fullscreen',
  ],
  short: ['bold', 'italic', 'underline', 'remove-styles', 'separator', 'media'],
}

const AdminBraftEditor: React.FC<{
  variant?: 'short' | 'default'
  value?: EditorState
  onChange?: (editorState: EditorState) => void
}> = ({ variant, value, onChange }, ref) => {
  return (
    <StyledBraftEditor
      ref={ref}
      value={value}
      onChange={onChange}
      contentClassName={variant === 'short' ? 'short-bf-content' : undefined}
      language={braftLanguageFn}
      controls={controls[variant || 'default']}
    />
  )
}

export default forwardRef(AdminBraftEditor)
