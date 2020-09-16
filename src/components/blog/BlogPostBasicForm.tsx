import { QuestionCircleFilled } from '@ant-design/icons'
import { useMutation } from '@apollo/react-hooks'
import { Button, Form, Input, message, Skeleton, Tooltip } from 'antd'
import { useForm } from 'antd/lib/form/Form'
import gql from 'graphql-tag'
import React, { useContext, useState } from 'react'
import { useIntl } from 'react-intl'
import styled from 'styled-components'
import TagSelector from '../../containers/common/TagSelector'
import AppContext from '../../contexts/AppContext'
import { handleError } from '../../helpers'
import { blogMessages, commonMessages, errorMessages } from '../../helpers/translation'
import types from '../../types'
import { PostProps } from '../../types/blog'
import { StyledTips } from '../admin'
import CategorySelector from '../admin/CategorySelector'

const StyledText = styled.div`
  color: var(--gray-dark);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.4px;
  line-height: 1.2;
`

const BlogPostBasicForm: React.FC<{
  post: PostProps | null
  onRefetch?: () => {}
}> = ({ post, onRefetch }) => {
  const { formatMessage } = useIntl()
  const [form] = useForm()
  const { id: appId, settings } = useContext(AppContext)
  const [updatePostBasic] = useMutation<types.UPDATE_POST_BASIC, types.UPDATE_POST_BASICVariables>(UPDATE_POST_BASIC)
  const [codeName, setCodeName] = useState('')
  const [loading, setLoading] = useState(false)

  if (!post) {
    return <Skeleton active />
  }

  const canCodeNameUse = !post.codeNames.filter(codeName => codeName !== post.codeName).includes(codeName)

  const handleSubmit = (values: any) => {
    if (!canCodeNameUse) {
      message.error(formatMessage(errorMessages.event.checkSameCodeName))
      return
    }

    setLoading(true)
    updatePostBasic({
      variables: {
        postId: post.id,
        title: values.title,
        categories: values.categoryIds.map((categoryId: string, index: number) => ({
          post_id: post.id,
          category_id: categoryId,
          position: index,
        })),
        tags: values.tags.map((tag: string) => ({
          app_id: appId,
          name: tag,
          type: '',
        })),
        postTags: values.tags.map((tag: string, index: number) => ({
          post_id: post.id,
          tag_name: tag,
          position: index,
        })),
        codeName: codeName || null,
      },
    })
      .then(() => {
        onRefetch && onRefetch()
        message.success(formatMessage(commonMessages.event.successfullySaved))
      })
      .catch(handleError)
      .finally(() => setLoading(false))
  }

  return (
    <Form
      form={form}
      colon={false}
      hideRequiredMark
      labelAlign="left"
      labelCol={{ md: { span: 4 } }}
      wrapperCol={{ md: { span: 8 } }}
      initialValues={{
        title: post.title,
        categoryIds: post.categories.map(category => category.id),
        tags: post.tagNames,
      }}
      onFinish={handleSubmit}
    >
      <Form.Item label={formatMessage(commonMessages.term.title)} name="title">
        <Input />
      </Form.Item>
      <Form.Item label={formatMessage(commonMessages.term.category)} name="categoryIds">
        <CategorySelector classType="post" />
      </Form.Item>
      <Form.Item label={formatMessage(commonMessages.term.tag)} name="tags">
        <TagSelector />
      </Form.Item>
      <Form.Item
        label={
          <span>
            {formatMessage(blogMessages.label.codeName)}
            <Tooltip placement="top" title={<StyledTips>{formatMessage(blogMessages.text.url)}</StyledTips>}>
              <QuestionCircleFilled className="ml-2" />
            </Tooltip>
          </span>
        }
        hasFeedback
        validateStatus={codeName.length ? (canCodeNameUse ? 'success' : 'error') : ''}
        extra={
          <StyledText className="mt-2">{`https://${settings['host']}/posts/${
            codeName || post.codeName || ''
          }`}</StyledText>
        }
      >
        <Input maxLength={20} placeholder={post.codeName || ''} onChange={e => setCodeName(e.target.value)} />
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

const UPDATE_POST_BASIC = gql`
  mutation UPDATE_POST_BASIC(
    $postId: uuid!
    $title: String
    $codeName: String
    $categories: [post_category_insert_input!]!
    $tags: [tag_insert_input!]!
    $postTags: [post_tag_insert_input!]!
  ) {
    # update post
    update_post(where: { id: { _eq: $postId } }, _set: { title: $title, code_name: $codeName }) {
      affected_rows
    }

    # update post category
    delete_post_category(where: { post_id: { _eq: $postId } }) {
      affected_rows
    }
    insert_post_category(objects: $categories) {
      affected_rows
    }

    # update post tag
    insert_tag(objects: $tags, on_conflict: { constraint: tag_pkey, update_columns: [updated_at] }) {
      affected_rows
    }
    delete_post_tag(where: { post_id: { _eq: $postId } }) {
      affected_rows
    }
    insert_post_tag(objects: $postTags) {
      affected_rows
    }
  }
`

export default BlogPostBasicForm
