import { QuestionCircleFilled } from '@ant-design/icons'
import { useMutation } from '@apollo/react-hooks'
import { Button, Form, Input, message, Radio, Skeleton, Tooltip } from 'antd'
import { useForm } from 'antd/lib/form/Form'
import gql from 'graphql-tag'
import { useApp } from 'lodestar-app-element/src/contexts/AppContext'
import React, { useState } from 'react'
import { useIntl } from 'react-intl'
import { StyledTips } from '../../components/admin'
import CategorySelector from '../../components/form/CategorySelector'
import LanguageSelector from '../../components/form/LanguageSelector'
import TagSelector from '../../components/form/TagSelector'
import hasura from '../../hasura'
import { handleError } from '../../helpers'
import { commonMessages, programMessages } from '../../helpers/translation'
import { useProductSku } from '../../hooks/data'
import { ProgramAdminProps } from '../../types/program'

type FieldProps = {
  title: string
  categoryIds: string[]
  tags: string[]
  languages?: string[]
  isIssuesOpen: boolean
  isIntroductionSectionVisible?: boolean
  sku?: string
}

const ProgramBasicForm: React.FC<{
  program: ProgramAdminProps | null
  onRefetch?: () => void
}> = ({ program, onRefetch }) => {
  const { formatMessage } = useIntl()
  const [form] = useForm<FieldProps>()
  const { enabledModules } = useApp()
  const [updateProgramBasic] = useMutation<hasura.UPDATE_PROGRAM_BASIC, hasura.UPDATE_PROGRAM_BASICVariables>(
    UPDATE_PROGRAM_BASIC,
  )
  const { loadingProduct, product, refetchProduct } = useProductSku(`Program_${program?.id}`)
  const [loading, setLoading] = useState(false)

  if (!program || loadingProduct) {
    return <Skeleton active />
  }

  const handleSubmit = (values: FieldProps) => {
    setLoading(true)
    updateProgramBasic({
      variables: {
        programId: program.id,
        title: values.title,
        supportLocales: values.languages?.length ? values.languages : null,
        isIssuesOpen: values.isIssuesOpen,
        isIntroductionSectionVisible: values.isIntroductionSectionVisible ?? program.isIntroductionSectionVisible,
        programCategories: values.categoryIds.map((categoryId: string, index: number) => ({
          program_id: program.id,
          category_id: categoryId,
          position: index,
        })),
        tags: values.tags.map((programTag: string) => ({
          name: programTag,
          type: '',
        })),
        programTags: values.tags.map((programTag: string, index: number) => ({
          program_id: program.id,
          tag_name: programTag,
          position: index,
        })),
        productId: `Program_${program.id}`,
        sku: values.sku || null,
      },
    })
      .then(() => {
        message.success(formatMessage(commonMessages.event.successfullySaved))
        refetchProduct()
        onRefetch?.()
      })
      .catch(handleError)
      .finally(() => setLoading(false))
  }

  return (
    <Form
      form={form}
      colon={false}
      labelAlign="left"
      labelCol={{ md: { span: 4 } }}
      wrapperCol={{ md: { span: 8 } }}
      initialValues={{
        title: program.title,
        categoryIds: program.categories.map(category => category.id),
        tags: program.tags,
        languages: program.supportLocales,
        isIssuesOpen: program.isIssuesOpen,
        sku: product?.sku,
        isIntroductionSectionVisible: program.isIntroductionSectionVisible,
      }}
      onFinish={handleSubmit}
    >
      <Form.Item label={formatMessage(programMessages.label.programTitle)} name="title">
        <Input />
      </Form.Item>
      <Form.Item label={formatMessage(commonMessages.label.category)} name="categoryIds">
        <CategorySelector classType="program" />
      </Form.Item>
      <Form.Item label={formatMessage(commonMessages.label.tag)} name="tags">
        <TagSelector />
      </Form.Item>
      {enabledModules.sku && (
        <Form.Item label={formatMessage(commonMessages.label.sku)} name="sku">
          <Input />
        </Form.Item>
      )}
      <Form.Item
        label={
          <span className="d-flex align-items-center">
            {formatMessage(commonMessages.label.languages)}
            <Tooltip placement="top" title={<StyledTips>{formatMessage(commonMessages.text.locale)}</StyledTips>}>
              <QuestionCircleFilled className="ml-2" />
            </Tooltip>
          </span>
        }
        name="languages"
        className={enabledModules.locale ? '' : 'd-none'}
      >
        <LanguageSelector />
      </Form.Item>

      {program.isSubscription && (
        <Form.Item
          label={
            <span className="d-flex align-items-center">
              {formatMessage(programMessages.label.isIntroductionSectionVisible)}
              <Tooltip
                placement="top"
                title={<StyledTips>{formatMessage(commonMessages.text.sectionVisible)}</StyledTips>}
              >
                <QuestionCircleFilled className="ml-2" />
              </Tooltip>
            </span>
          }
          name="isIntroductionSectionVisible"
        >
          <Radio.Group>
            <Radio value={true}>{formatMessage(programMessages.status.displayAllSection)}</Radio>
            <Radio value={false}>{formatMessage(programMessages.status.displayTrial)}</Radio>
          </Radio.Group>
        </Form.Item>
      )}

      <Form.Item label={formatMessage(programMessages.label.isIssuesOpen)} name="isIssuesOpen">
        <Radio.Group>
          <Radio value={true}>{formatMessage(programMessages.status.active)}</Radio>
          <Radio value={false}>{formatMessage(programMessages.status.closed)}</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item wrapperCol={{ md: { offset: 4 } }}>
        <Button className="mr-2" onClick={() => form.resetFields()}>
          {formatMessage(commonMessages.ui.cancel)}
        </Button>
        <Button type="primary" htmlType="submit" loading={loading}>
          {formatMessage(commonMessages.ui.save)}
        </Button>
      </Form.Item>
    </Form>
  )
}

const UPDATE_PROGRAM_BASIC = gql`
  mutation UPDATE_PROGRAM_BASIC(
    $programId: uuid!
    $title: String
    $supportLocales: jsonb
    $isIssuesOpen: Boolean
    $isIntroductionSectionVisible: Boolean
    $productId: String
    $sku: String
    $programCategories: [program_category_insert_input!]!
    $tags: [tag_insert_input!]!
    $programTags: [program_tag_insert_input!]!
  ) {
    update_program(
      where: { id: { _eq: $programId } }
      _set: {
        title: $title
        support_locales: $supportLocales
        is_issues_open: $isIssuesOpen
        is_introduction_section_visible: $isIntroductionSectionVisible
      }
    ) {
      affected_rows
    }
    update_product(where: { id: { _eq: $productId } }, _set: { sku: $sku }) {
      affected_rows
    }
    # update categories
    delete_program_category(where: { program_id: { _eq: $programId } }) {
      affected_rows
    }
    insert_program_category(objects: $programCategories) {
      affected_rows
    }

    # update tags
    insert_tag(objects: $tags, on_conflict: { constraint: tag_pkey, update_columns: [updated_at] }) {
      affected_rows
    }
    delete_program_tag(where: { program_id: { _eq: $programId } }) {
      affected_rows
    }
    insert_program_tag(objects: $programTags) {
      affected_rows
    }
  }
`

export default ProgramBasicForm
