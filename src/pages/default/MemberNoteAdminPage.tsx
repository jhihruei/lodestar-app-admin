import { Button, message, Skeleton } from 'antd'
import { isEmpty } from 'ramda'
import React from 'react'
import { useIntl } from 'react-intl'
import { useParams } from 'react-router-dom'
import { AdminBlock } from '../../components/admin'
import MemberAdminLayout, { StyledEmptyBlock } from '../../components/layout/MemberAdminLayout'
import MemberNoteAdminItem from '../../components/member/MemberNoteAdminItem'
import MemberNoteAdminModal from '../../components/member/MemberNoteAdminModal'
import { useAuth } from '../../contexts/AuthContext'
import { handleError } from '../../helpers'
import { commonMessages, memberMessages } from '../../helpers/translation'
import { useUploadAttachments } from '../../hooks/data'
import { useMemberAdmin, useMemberNotesAdmin, useMutateMemberNote } from '../../hooks/member'
import { ReactComponent as FilePlusIcon } from '../../images/icon/file-plus.svg'
import * as types from '../../types.d'

const MemberProfileAdminPage: React.FC = () => {
  const { formatMessage } = useIntl()
  const { memberId } = useParams<{ memberId: string }>()
  const { currentMemberId } = useAuth()

  const { memberAdmin, refetchMemberAdmin } = useMemberAdmin(memberId)
  const { loadingNotes, errorNotes, notes, refetchNotes } = useMemberNotesAdmin(
    { created_at: types.order_by.desc },
    { member: memberId },
  )
  const { insertMemberNote } = useMutateMemberNote()
  const uploadAttachments = useUploadAttachments()

  if (!currentMemberId || loadingNotes || errorNotes || !memberAdmin) {
    return <Skeleton active />
  }

  return (
    <MemberAdminLayout member={memberAdmin} onRefetch={refetchMemberAdmin}>
      <div className="p-5">
        <MemberNoteAdminModal
          title={formatMessage(memberMessages.label.createMemberNote)}
          renderTrigger={({ setVisible }) => (
            <Button type="primary" icon={<FilePlusIcon />} onClick={() => setVisible(true)}>
              {formatMessage(memberMessages.label.createMemberNote)}
            </Button>
          )}
          onSubmit={({ type, status, duration, description, attachments }) =>
            insertMemberNote({
              variables: {
                memberId: memberAdmin.id,
                authorId: currentMemberId,
                type,
                status,
                duration,
                description,
              },
            })
              .then(async ({ data }) => {
                const memberNoteId = data?.insert_member_note_one?.id
                if (memberNoteId && attachments.length) {
                  await uploadAttachments('MemberNote', memberNoteId, attachments)
                }
                message.success(formatMessage(commonMessages.event.successfullyCreated))
                refetchMemberAdmin()
                refetchNotes()
              })
              .catch(handleError)
          }
        />
        <AdminBlock className="mt-4">
          {isEmpty(notes) ? (
            <StyledEmptyBlock>
              <span>{formatMessage(memberMessages.text.noMemberNote)}</span>
            </StyledEmptyBlock>
          ) : (
            notes.map(note => (
              <MemberNoteAdminItem
                key={note.id}
                note={note}
                memberAdmin={memberAdmin}
                onRefetch={() => {
                  refetchMemberAdmin()
                  refetchNotes()
                }}
              />
            ))
          )}
        </AdminBlock>
      </div>
    </MemberAdminLayout>
  )
}

export default MemberProfileAdminPage
