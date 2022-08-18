import { CloseOutlined } from '@ant-design/icons'
import { useMutation, useQuery } from '@apollo/react-hooks'
import { Grid, GridItem, Spinner } from '@chakra-ui/react'
import { Button, Collapse, message } from 'antd'
import gql from 'graphql-tag'
import { useApp } from 'lodestar-app-element/src/contexts/AppContext'
import { useAuth } from 'lodestar-app-element/src/contexts/AuthContext'
import { useEffect, useState } from 'react'
import { useIntl } from 'react-intl'
import { useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { v4 as uuid } from 'uuid'
import { AdminHeader, AdminHeaderTitle } from '../../components/admin'
import ItemsSortingModal from '../../components/common/ItemsSortingModal'
import hasura from '../../hasura'
import { commonMessages, questionLibraryMessage } from '../../helpers/translation'
import { PlusIcon, TrashOIcon } from '../../images/icon'
import { Question } from '../../types/questionLibrary'
import LoadingPage from '../LoadingPage'
import pageMessages from '../translation'
import QuestionBlock from './QuestionBlock'

const StyledAdminHeader = styled(AdminHeader)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ececec;
  .header-left {
    display: flex;
    align-items: center;
  }
  .header-right {
    button {
      border-radius: 4px;
    }
  }
`

const StyledContent = styled.div`
  display: flex;
  height: 100vh;
  padding: 16px;
`

const QuestionGroupBlock = styled.div`
  width: 50%;
  padding: 0 24px 0 40px;
  overflow-y: scroll;
  .ant-collapse-header {
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 0.8px;
    color: var(--gray-darker);
  }
  .ant-collapse > .ant-collapse-item.ant-collapse-no-arrow > .ant-collapse-header,
  .ant-collapse-content > .ant-collapse-content-box {
    padding: 16px 24px;
  }
  .ant-collapse > .ant-collapse-item.ant-collapse-item-active .ant-collapse-header {
    padding-bottom: 0;
  }
`

const StyledCollapse = styled(Collapse)`
  background-color: #fff;
  margin-bottom: 20px;
  .ant-collapse-header {
    background-color: #fff;
  }
  .ant-collapse-content {
    background-color: #fff;
    border: none;
  }
  .ant-collapse-content-active {
    height: auto;
  }
`

const StyledPanel = styled(Collapse.Panel)`
  .ant-collapse-content-box {
    padding: 16px 24px;
  }
`

const QuestionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const AddButton = styled(Button)`
  padding: 0;
  span {
    margin-left: 8px;
  }
`

const AddQuestionBlock = styled.div`
  position: relative;
  text-align: center;
  &:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 50%;
    width: 40%;
    height: 2px;
    background-color: #ececec;
  }
  &:after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    top: 50%;
    width: 40%;
    height: 2px;
    background-color: #ececec;
  }
`

const PreviewBlock = styled.div`
  width: 50%;
  background-color: #f7f8f8;
  overflow-y: scroll;
`

const PreviewQuestion = styled.div`
  margin: 24px;
  padding: 40px;
  background-color: #fff;
`

const CurrentQuestionIndex = styled.div`
  padding-bottom: 12px;
  p {
    margin: 0;
    color: var(--gray-dark);
  }
`

const PreviewSubject = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.69;
  letter-spacing: 0.2px;
  color: var(--gray-darker);
  padding-bottom: 24px;
`

const PreviewOptions = styled.div<{ previewMode: string }>``

const ListsOption = styled.div`
  padding: 16px;
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.2px;
  color: #585858;
  border: 1px solid var(--gray);
  border-radius: 4px;
`

const GridOption = styled.div`
  border: 1px solid var(--gray);
  border-radius: 4px;
  padding: 16px;
`

const ExamName = styled.p`
  font-size: 18px;
  color: var(--gray-darker);
  font-weight: bold;
  letter-spacing: 0.8px;
  padding-bottom: 24px;
`

const QuestionGroupAdminPage: React.VFC = () => {
  const history = useHistory()
  const { currentMemberId } = useAuth()
  const { enabledModules } = useApp()
  const { formatMessage } = useIntl()
  const { questionGroupId } = useParams<{ questionGroupId: string }>()
  const [savingLoading, setSavingLoading] = useState<boolean>(false)
  const [questionList, setQuestionList] = useState<Question[]>([])
  const [deletedQuestionIdList, setDeletedQuestionIdList] = useState<string[]>([])
  const [preview, setPreview] = useState<object & { question: Question; idx: number; mode: string }>({
    question: {
      id: '',
      type: 'single',
      title: '',
      subject: '',
      layout: 'lists',
      font: 'auto',
      explanation: '',
      position: 1,
    },
    idx: -1,
    mode: '',
  })
  const { upsertQuestion, updateQuestionPosition } = useQuestionMutation()
  const {
    originalQuestionListLoading,
    originalQuestionListError,
    questionLibraryId,
    questionGroupTitle,
    originalQuestionList,
    isNewQuestionGroup,
    refetchQuestionGroup,
  } = useQuestionGroup(questionGroupId)

  const handleSaveQuestionList = () => {
    setSavingLoading(true)
    let questionOptionsData: Array<any> = []
    questionList.forEach(question => {
      question.options?.forEach(option => {
        questionOptionsData.push({
          id: option.id,
          value: option.value,
          is_answer: option.isAnswer,
          position: option.position,
          question_id: question.id,
        })
      })
    })
    upsertQuestion({
      variables: {
        questionListData: questionList.map(question => ({
          id: question.id,
          question_group_id: questionGroupId,
          subject: question.subject,
          layout: question.layout,
          font: question.font,
          explanation: question.explanation || '',
          position: question.position,
        })),
        questionOptionsData: questionOptionsData,
        archivedQuestionIds: originalQuestionList.length > 0 ? deletedQuestionIdList : [],
        questionGroupIdForUpdatedAt: questionGroupId,
        questionLibraryIdForUpdatedAt: questionLibraryId,
      },
    })
      .then(data => {
        refetchQuestionGroup()
      })
      .catch(err => {
        message.error(formatMessage(commonMessages.event.failedSave), 3)
      })
      .finally(() => {
        setSavingLoading(false)
        message.success(formatMessage(commonMessages.event.successfullySaved), 3)
      })
  }

  const handleAddQuestion = () => {
    setQuestionList([
      ...questionList,
      {
        id: uuid(),
        type: 'single',
        title: `${formatMessage(pageMessages.QuestionGroupAdminPage.question)} ${questionList.length + 1}`,
        subject: `<p>${formatMessage(pageMessages.QuestionGroupAdminPage.question)} ${questionList.length + 1}</p>`,
        layout: 'lists',
        font: 'auto',
        explanation: '',
        position: questionList.length + 1,
        options: [
          {
            id: uuid(),
            value: `<p>${formatMessage(pageMessages.QuestionGroupAdminPage.option)}1</p>`,
            isAnswer: true,
            position: 1,
          },
          {
            id: uuid(),
            value: `<p>${formatMessage(pageMessages.QuestionGroupAdminPage.option)}2</p>`,
            isAnswer: false,
            position: 2,
          },
        ],
      },
    ])
  }

  const handleQuestionDelete = (questionId: string) => {
    setQuestionList(questionList.filter(q => q.id !== questionId))
    setDeletedQuestionIdList([...deletedQuestionIdList, questionId])
    handleQuestionPanelChange(undefined)
  }

  const handleQuestionChange = (newQuestion: Question) => {
    const newQuestionList = questionList.map(question => (question.id === newQuestion.id ? newQuestion : question))
    setPreview({ ...preview, question: newQuestion, mode: newQuestion.layout })
    setQuestionList(newQuestionList)
  }

  const handleQuestionPanelChange = (questionId: string | undefined) => {
    if (questionId === undefined) {
      setPreview({
        question: {
          id: '',
          type: 'single',
          title: '',
          subject: '',
          layout: 'lists',
          font: 'auto',
          explanation: '',
          position: 1,
        },
        idx: -1,
        mode: '',
      })
      return
    }

    questionList.forEach((question, idx) => {
      if (question.id === questionId) {
        setPreview({ question: question, idx: idx + 1, mode: question.layout })
      }
    })
  }

  const handleQuestionPositionChange = async (values: Question[]) => {
    try {
      await updateQuestionPosition({
        variables: {
          questionListData: values.map((value, index) => ({
            id: value.id,
            question_group_id: questionGroupId,
            type: value.type,
            subject: value.subject,
            font: value.font,
            layout: value.layout,
            explanation: value.explanation,
            position: index + 1,
          })),
          questionGroupIdForUpdatedAt: questionGroupId,
          questionLibraryIdForUpdatedAt: questionLibraryId,
        },
      })
      refetchQuestionGroup().then(() => {
        setQuestionList([])
      })
      message.success(formatMessage(questionLibraryMessage.message.successSortQuestionGroup), 3)
    } catch (err) {
      message.success(formatMessage(questionLibraryMessage.message.failSortQuestionGroup), 3)
    }
  }

  useEffect(() => {
    document.body.style.overflowY = 'hidden'
  }, [])

  useEffect(() => {
    if (!originalQuestionListLoading && questionList.length === 0 && originalQuestionList.length > 0) {
      setQuestionList(originalQuestionList)
    }
  }, [originalQuestionList, originalQuestionListLoading, questionList])

  if (Object.keys(enabledModules).length === 0 || originalQuestionListLoading) {
    return <LoadingPage />
  }

  return (
    <>
      <StyledAdminHeader>
        <div className="header-left">
          <Button type="link" className="mr-2" onClick={() => history.goBack()}>
            <CloseOutlined />
          </Button>
          {originalQuestionListLoading ? (
            <>
              <Spinner />
              <span className="flex-grow-1" />
            </>
          ) : (
            <AdminHeaderTitle>{questionGroupTitle}</AdminHeaderTitle>
          )}
        </div>
        <div className="header-right">
          <Button className="ml-3" onClick={() => setQuestionList(originalQuestionList)}>
            {formatMessage(commonMessages.ui.cancel)}
          </Button>
          <Button className="ml-3" type="primary" onClick={handleSaveQuestionList} loading={savingLoading}>
            {formatMessage(commonMessages.ui.save)}
          </Button>
        </div>
      </StyledAdminHeader>
      <StyledContent>
        {!originalQuestionListLoading && (
          <QuestionGroupBlock>
            {!isNewQuestionGroup && (
              <ItemsSortingModal
                items={questionList}
                triggerText={formatMessage(questionLibraryMessage.ui.sortQuestions)}
                onSubmit={values => handleQuestionPositionChange(values)}
              />
            )}
            <StyledCollapse
              accordion={true}
              onChange={v => {
                if (typeof v === 'string' || v === undefined) {
                  handleQuestionPanelChange(v)
                }
              }}
            >
              {questionList?.map((question, idx) => {
                return (
                  <StyledPanel
                    header={
                      <QuestionTitle>
                        {question.subject?.replace(/<[^>]+>/g, '')}
                        {questionList.length > 1 && (
                          <TrashOIcon
                            style={{ zIndex: 99999 }}
                            onClick={() => {
                              setTimeout(() => {
                                handleQuestionDelete(question.id)
                              }, 0)
                            }}
                          />
                        )}
                      </QuestionTitle>
                    }
                    key={question.id}
                    showArrow={false}
                  >
                    <QuestionBlock question={question} onQuestionChange={handleQuestionChange} />
                  </StyledPanel>
                )
              })}
            </StyledCollapse>
            <AddQuestionBlock>
              <AddButton type="link" icon={<PlusIcon />} className="align-items-center" onClick={handleAddQuestion}>
                <span>{formatMessage(questionLibraryMessage.ui.addQuestion)}</span>
              </AddButton>
            </AddQuestionBlock>
          </QuestionGroupBlock>
        )}
        <PreviewBlock>
          {preview.idx !== -1 && (
            <PreviewQuestion>
              <ExamName>{formatMessage(questionLibraryMessage.label.examName)}</ExamName>
              <CurrentQuestionIndex>
                <p>{`${preview.idx} / ${questionList.length}`}</p>
              </CurrentQuestionIndex>
              <PreviewSubject dangerouslySetInnerHTML={{ __html: preview.question.subject || '' }} />
              <PreviewOptions previewMode={preview.mode}>
                {preview.mode === 'lists' &&
                  preview.question.options?.map(option => (
                    <ListsOption key={`preview_${option.id}`} dangerouslySetInnerHTML={{ __html: option.value }} />
                  ))}
                {preview.mode === 'grid' && (
                  <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                    {preview.question.options?.map(option => (
                      <GridItem key={`preview_${option.id}`} colSpan={1} w="100%">
                        <GridOption dangerouslySetInnerHTML={{ __html: option.value }} />
                      </GridItem>
                    ))}
                  </Grid>
                )}
              </PreviewOptions>
            </PreviewQuestion>
          )}
        </PreviewBlock>
      </StyledContent>
    </>
  )
}

export default QuestionGroupAdminPage

const useQuestionMutation = () => {
  const [upsertQuestion] = useMutation<hasura.UPSERT_QUESTION, hasura.UPSERT_QUESTIONVariables>(gql`
    mutation UPSERT_QUESTION(
      $questionListData: [question_insert_input!]!
      $questionOptionsData: [question_option_insert_input!]!
      $archivedQuestionIds: [uuid!]!
      $questionGroupIdForUpdatedAt: uuid!
      $questionLibraryIdForUpdatedAt: uuid!
    ) {
      insert_question(
        objects: $questionListData
        on_conflict: { constraint: question_pkey, update_columns: [subject, layout, font, explanation, position] }
      ) {
        affected_rows
        returning {
          id
        }
      }
      insert_question_option(
        objects: $questionOptionsData
        on_conflict: { constraint: question_option_pkey, update_columns: [value, is_answer, position] }
      ) {
        affected_rows
        returning {
          id
        }
      }
      update_question(where: { id: { _in: $archivedQuestionIds } }, _set: { deleted_at: "now()" }) {
        affected_rows
      }
      update_question_group(where: { id: { _eq: $questionGroupIdForUpdatedAt } }, _set: { updated_at: "now()" }) {
        affected_rows
      }
      update_question_library(where: { id: { _eq: $questionLibraryIdForUpdatedAt } }, _set: { updated_at: "now()" }) {
        affected_rows
      }
    }
  `)
  const [updateQuestionPosition] = useMutation<
    hasura.UPDATE_QUESTION_POSITION,
    hasura.UPDATE_QUESTION_POSITIONVariables
  >(gql`
    mutation UPDATE_QUESTION_POSITION(
      $questionListData: [question_insert_input!]!
      $questionGroupIdForUpdatedAt: uuid!
      $questionLibraryIdForUpdatedAt: uuid!
    ) {
      insert_question(
        objects: $questionListData
        on_conflict: { constraint: question_pkey, update_columns: [position] }
      ) {
        affected_rows
        returning {
          id
        }
      }
      update_question_group(where: { id: { _eq: $questionGroupIdForUpdatedAt } }, _set: { updated_at: "now()" }) {
        affected_rows
      }
      update_question_library(where: { id: { _eq: $questionLibraryIdForUpdatedAt } }, _set: { updated_at: "now()" }) {
        affected_rows
      }
    }
  `)
  return {
    upsertQuestion,
    updateQuestionPosition,
  }
}

const useQuestionGroup = (questionGroupId: string) => {
  const { formatMessage } = useIntl()
  const { loading, error, data, refetch } = useQuery<hasura.GET_QUESTIONS, hasura.GET_QUESTIONSVariables>(
    GET_QUESTIONS,
    {
      variables: {
        questionGroupId,
      },
    },
  )

  let isNewQuestionGroup = false

  let questions: Question[] =
    data?.question_group_by_pk?.questions.map(v => ({
      id: v.id,
      type: v.type,
      title: v.subject.replace(/<[^>]+>/g, ''),
      subject: v.subject,
      layout: v.layout,
      font: v.font,
      explanation: v.explanation,
      position: v.position,
      options: v.question_options.map(w => {
        return {
          id: String(w.id),
          value: w.value,
          isAnswer: w.is_answer || false,
          position: w.position,
        }
      }),
    })) || []

  if (questions.length === 0) {
    isNewQuestionGroup = true
    questions.push({
      id: uuid(),
      type: 'single',
      title: `<p>${formatMessage(pageMessages.QuestionGroupAdminPage.question)} 1</p>`,
      subject: `<p>${formatMessage(pageMessages.QuestionGroupAdminPage.question)} 1</p>`,
      layout: 'lists',
      font: 'auto',
      explanation: '',
      position: 1,
      options: [
        {
          id: uuid(),
          value: `<p><strong>${formatMessage(pageMessages.QuestionGroupAdminPage.option)}1</strong></p>`,
          isAnswer: true,
          position: 1,
        },
        {
          id: uuid(),
          value: `<p><strong>${formatMessage(pageMessages.QuestionGroupAdminPage.option)}2</strong></p>`,
          isAnswer: false,
          position: 2,
        },
      ],
    })
  }

  return {
    questionLibraryId: data?.question_group_by_pk?.question_library?.id,
    questionGroupTitle: data?.question_group_by_pk?.title,
    originalQuestionList: questions,
    isNewQuestionGroup: isNewQuestionGroup,
    refetchQuestionGroup: refetch,
    originalQuestionListLoading: loading,
    originalQuestionListError: error,
  }
}

const GET_QUESTIONS = gql`
  query GET_QUESTIONS($questionGroupId: uuid!) {
    question_group_by_pk(id: $questionGroupId) {
      title
      questions(order_by: { position: asc }) {
        id
        type
        subject
        layout
        font
        explanation
        position
        question_options(order_by: { position: asc }) {
          id
          value
          is_answer
          position
        }
      }
      question_library {
        id
      }
    }
  }
`
