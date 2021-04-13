import Icon, { DeleteOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, InputNumber } from 'antd'
import BraftEditor, { EditorState } from 'braft-editor'
import React, { useEffect, useState } from 'react'
import { useIntl } from 'react-intl'
import styled from 'styled-components'
import { v4 as uuidV4 } from 'uuid'
import { commonMessages, programMessages } from '../../helpers/translation'
import { ReactComponent as AngleRightIcon } from '../../images/icon/angle-right.svg'
import { ReactComponent as ExclamationCircleIcon } from '../../images/icon/exclamation-circle.svg'
import { ChoiceProps, QuestionProps } from '../../types/program'
import AdminModal from '../admin/AdminModal'
import AdminBraftEditor from './AdminBraftEditor'

const StyledTitle = styled.div`
  color: var(--gray-darker);
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0.8px;
`
export const StyledAction = styled(Icon)<{ variant?: 'primary'; direction?: 'down' }>`
  color: ${props => (props.variant === 'primary' ? props.theme['@primary'] : 'var(--gray-darker)')};
  cursor: pointer;
  font-size: 20px;
  ${props => (props.direction === 'down' ? 'transform: rotate(90deg);' : '')};
  transition: all 0.2s ease-in-out;
`
export const QuestionBlock = styled.div<{ variant?: 'collapsed'; invalid?: boolean }>`
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  ${props => (props.variant === 'collapsed' ? 'height: 75px;' : '')}
  border-radius: 4px;
  border: solid 1px;
  overflow: hidden;
  border-color: ${props => (props.invalid ? '#FF7D62' : 'var(--gray)')};
`
const StyledInputPoints = styled(InputNumber)<{ invalid: boolean }>`
  border: ${props => (props.invalid ? '#FF7D62 1px solid' : '')};
`
const ChoiceBlock = styled.div`
  margin-bottom: 1.25rem;
  padding: 1.5rem;
  border-radius: 4px;
  background: var(--gray-lighter);
`
const StyledEditorWrapper = styled.div<{ invalid?: boolean }>`
  .bf-controlbar {
    box-shadow: none;
  }
  .bf-content {
    border-radius: 4px;
    border: ${props => (props.invalid ? 'solid 1px #FF7D62' : 'solid 1px var(--gray)')};
  }
`
const StyledAlertText = styled.div`
  color: #ff7d62;
`

const QuestionInput: React.FC<{
  index: number
  value: QuestionProps
  invalid?: boolean
  onChange?: (value: QuestionProps) => void
  onRemove?: () => void
}> = ({ index, value, invalid, onChange, onRemove }) => {
  const { formatMessage } = useIntl()
  const [isCollapsed, setIsCollapsed] = useState(true)
  const [description, setDescription] = useState<EditorState>(BraftEditor.createEditorState(value.description))
  const [answerDescription, setAnswerDescription] = useState<EditorState>(
    BraftEditor.createEditorState(value.answerDescription),
  )

  useEffect(() => {
    setDescription(BraftEditor.createEditorState(value.description))
    setAnswerDescription(BraftEditor.createEditorState(value.answerDescription))
  }, [value.answerDescription, value.description])

  return (
    <QuestionBlock variant={isCollapsed ? 'collapsed' : undefined} invalid={value.validChecked && invalid}>
      <div className="d-flex align-items-center mb-4 cursor-pointer">
        <StyledTitle className="flex-grow-1" onClick={() => setIsCollapsed(!isCollapsed)}>
          {formatMessage(programMessages.label.question)} {index + 1}
        </StyledTitle>
        <div className="flex-shrink-0 d-flex align-items-center">
          {!isCollapsed && (
            <AdminModal
              renderTrigger={({ setVisible }) => (
                <StyledAction
                  component={() => <DeleteOutlined />}
                  variant="primary"
                  className="mr-3"
                  onClick={() => setVisible(true)}
                />
              )}
              title={formatMessage(programMessages.ui.deleteQuestion)}
              okText={formatMessage(commonMessages.ui.delete)}
              cancelText={formatMessage(commonMessages.ui.back)}
              onOk={() => onRemove?.()}
            >
              {formatMessage(programMessages.text.deleteQuestionDescription)}
            </AdminModal>
          )}
          <StyledAction
            component={() => <AngleRightIcon />}
            variant="primary"
            direction={isCollapsed ? undefined : 'down'}
            onClick={() => setIsCollapsed(!isCollapsed)}
          />
        </div>
      </div>

      <Form.Item label={formatMessage(programMessages.label.points)}>
        <div className="d-flex">
          <StyledInputPoints
            min={0}
            value={value?.points}
            onChange={v =>
              onChange?.({
                ...value,
                points: typeof v === 'string' ? parseFloat(v) : v || 0,
              })
            }
            invalid={value.validChecked && value?.points < 1}
          />
          {value.validChecked && value?.points < 1 && (
            <StyledAlertText className="ml-3 d-flex align-items-center">
              <Icon className="mr-2" component={() => <ExclamationCircleIcon />} />
              <span>{formatMessage(programMessages.text.noQuestionPoints)}</span>
            </StyledAlertText>
          )}
        </div>
      </Form.Item>

      <Form.Item>
        <Checkbox
          defaultChecked={value.isMultipleAnswers}
          onChange={e =>
            onChange?.({
              ...value,
              choices: value.choices.map(v => ({ ...v, isCorrect: false })),
              isMultipleAnswers: e.target.checked,
            })
          }
        >
          {formatMessage(programMessages.label.allowMultipleAnswers)}
        </Checkbox>
      </Form.Item>

      <Form.Item
        label={
          <div className="d-flex">
            {formatMessage(programMessages.label.question)}
            {value.validChecked && BraftEditor.createEditorState(description).isEmpty() && (
              <StyledAlertText className="ml-3 d-flex align-items-center">
                <Icon className="mr-2" component={() => <ExclamationCircleIcon />} />
                <span>{formatMessage(programMessages.text.noQuestionDescription)}</span>
              </StyledAlertText>
            )}
          </div>
        }
      >
        <StyledEditorWrapper invalid={value.validChecked && BraftEditor.createEditorState(description).isEmpty()}>
          <AdminBraftEditor
            variant="short"
            value={description}
            onChange={v => setDescription(v)}
            onBlur={() =>
              onChange?.({
                ...value,
                description: description.toRAW(),
              })
            }
          />
        </StyledEditorWrapper>
      </Form.Item>

      {value?.choices.map((choice, index) => (
        <ChoiceInput
          key={choice.id || index}
          index={index}
          value={choice}
          hasAnswer={value.choices.some(choice => choice.isCorrect)}
          validChecked={value.validChecked}
          onChange={newChoice => {
            const newChoices = value.choices.map(v => {
              if (v.id === newChoice.id) {
                return newChoice
              }
              if (!value.isMultipleAnswers && newChoice.isCorrect) {
                return {
                  ...v,
                  isCorrect: false,
                }
              }
              return v
            })

            onChange?.({
              ...value,
              choices: newChoices,
            })
          }}
          onRemove={() =>
            onChange?.({
              ...value,
              choices: value.choices.filter(c => c.id !== choice.id),
            })
          }
        />
      ))}

      <div className="d-flex mb-4">
        <Button
          type="link"
          icon={<PlusOutlined />}
          onClick={() =>
            onChange?.({
              ...value,
              choices: [
                ...value.choices,
                {
                  id: uuidV4(),
                  description: null,
                  isCorrect: false,
                },
              ],
            })
          }
        >
          {formatMessage(programMessages.ui.createExerciseChoice)}
        </Button>
        {value.validChecked && value.choices.length === 0 && (
          <StyledAlertText className="ml-1 d-flex align-items-center">
            <Icon className="mr-2" component={() => <ExclamationCircleIcon />} />
            <span>{formatMessage(programMessages.text.noQuestionChoice)}</span>
          </StyledAlertText>
        )}
      </div>

      <Form.Item
        label={
          <div className="d-flex">
            {formatMessage(programMessages.label.answerDescription)}
            {value.validChecked && BraftEditor.createEditorState(answerDescription).isEmpty() && (
              <StyledAlertText className="ml-3 d-flex align-items-center">
                <Icon className="mr-2" component={() => <ExclamationCircleIcon />} />
                <span>{formatMessage(programMessages.text.noAnswerDescription)}</span>
              </StyledAlertText>
            )}
          </div>
        }
      >
        <StyledEditorWrapper invalid={value.validChecked && BraftEditor.createEditorState(answerDescription).isEmpty()}>
          <AdminBraftEditor
            variant="short"
            value={answerDescription}
            onChange={v => setAnswerDescription(v)}
            onBlur={() =>
              onChange?.({
                ...value,
                answerDescription: answerDescription.toRAW(),
              })
            }
          />
        </StyledEditorWrapper>
      </Form.Item>
    </QuestionBlock>
  )
}

const ChoiceInput: React.FC<{
  index: number
  value: ChoiceProps
  hasAnswer?: boolean
  validChecked: boolean
  onChange?: (value: ChoiceProps) => void
  onRemove?: () => void
}> = ({ index, value, hasAnswer, validChecked, onChange, onRemove }) => {
  const { formatMessage } = useIntl()
  const [description, setDescription] = useState<EditorState>(BraftEditor.createEditorState(value.description))

  useEffect(() => {
    setDescription(BraftEditor.createEditorState(value.description))
  }, [value.description])

  return (
    <ChoiceBlock>
      <div className="d-flex align-items-center justify-content-between mb-3">
        <div className="d-flex">
          <StyledTitle>
            {formatMessage(programMessages.label.choice)} {index + 1}
          </StyledTitle>
          {validChecked && BraftEditor.createEditorState(description).isEmpty() && (
            <StyledAlertText className="ml-3 d-flex align-items-center">
              <Icon className="mr-2" component={() => <ExclamationCircleIcon />} />
              <span>{formatMessage(programMessages.text.noChoiceDescription)}</span>
            </StyledAlertText>
          )}
        </div>
        <AdminModal
          renderTrigger={({ setVisible }) => (
            <StyledAction component={() => <DeleteOutlined />} onClick={() => setVisible(true)} />
          )}
          title={formatMessage(programMessages.ui.deleteChoice)}
          okText={formatMessage(commonMessages.ui.delete)}
          cancelText={formatMessage(commonMessages.ui.back)}
          onOk={() => onRemove?.()}
        >
          {formatMessage(programMessages.text.deleteChoiceDescription)}
        </AdminModal>
      </div>

      <Form.Item>
        <StyledEditorWrapper invalid={validChecked && BraftEditor.createEditorState(description).isEmpty()}>
          <AdminBraftEditor
            variant="short"
            value={description}
            onChange={v => setDescription(v)}
            onBlur={() =>
              onChange?.({
                ...value,
                description: description.toRAW(),
              })
            }
          />
        </StyledEditorWrapper>
      </Form.Item>
      <Form.Item className="m-0">
        <div className="d-flex">
          <Checkbox
            checked={value.isCorrect}
            onChange={e =>
              onChange?.({
                ...value,
                isCorrect: e.target.checked,
              })
            }
          >
            {formatMessage(programMessages.label.isCorrectAnswer)}
          </Checkbox>
          {!hasAnswer && (
            <StyledAlertText className="ml-3 d-flex align-items-center">
              <Icon className="mr-2" component={() => <ExclamationCircleIcon />} />
              <span>{formatMessage(programMessages.text.noAnswers)}</span>
            </StyledAlertText>
          )}
        </div>
      </Form.Item>
    </ChoiceBlock>
  )
}

export default QuestionInput
