import { useMutation } from '@apollo/react-hooks'
import { Button, Icon } from 'antd'
import gql from 'graphql-tag'
import React, { useEffect, useState } from 'react'
import { defineMessages, useIntl } from 'react-intl'
import { ReactSortable } from 'react-sortablejs'
import { commonMessages } from '../../helpers/translation'
import types from '../../types'
import { ProgramType } from '../../types/program'
import AdminModal from '../admin/AdminModal'
import DraggableItem from '../common/DraggableItem'
import styled from 'styled-components'

const messages = defineMessages({
  sortProgram: { id: 'program.ui.sortProgram', defaultMessage: '課程排序' },
  contentSorting: { id: 'program.label.contentSorting', defaultMessage: '內容排序' },
})

const StyledDraggableSectionLabel = styled.div`
  color: ${props => props.theme['@primary-color']};
`

type ProgramStructureAdminModalProps = {
  program: ProgramType | null
  onStructureChange?: () => void
}
const ProgramStructureAdminModal: React.FC<ProgramStructureAdminModalProps> = ({ program, onStructureChange }) => {
  const { formatMessage } = useIntl()

  const [updateProgramContentSections] = useMutation<
    types.UPSERT_PROGRAM_CONTENT_SECTIONS,
    types.UPSERT_PROGRAM_CONTENT_SECTIONSVariables
  >(UPSERT_PROGRAM_CONTENT_SECTIONS)
  const [updateProgramContents] = useMutation<types.UPSERT_PROGRAM_CONTENTS, types.UPSERT_PROGRAM_CONTENTSVariables>(
    UPSERT_PROGRAM_CONTENTS,
  )

  const [loading, setLoading] = useState(false)
  const [sections, setSections] = useState<
    {
      id: string
      title: string
      programContents: {
        id: string
        title: string
        publishedAt: Date | null
        listPrice: number | null
        duration: number | null
        programContentType: {
          id: string
          type: string | null
        } | null
        programContentPlans: {
          id: any
          programPlan: {
            id: any
            title: string | null
          }
        }[]
      }[]
    }[]
  >([])

  useEffect(() => {
    if (program) {
      setSections(program.contentSections)
    }
  }, [program])

  const handleSubmit = (setVisible: React.Dispatch<React.SetStateAction<boolean>>) => {
    if (!program) {
      return
    }

    setLoading(true)

    Promise.all([
      updateProgramContentSections({
        variables: {
          programContentSections: sections.map((section, idx) => ({
            id: section.id,
            program_id: program.id,
            title: section.title,
            position: idx,
          })),
        },
      }),
      updateProgramContents({
        variables: {
          programContents: sections.flatMap(section =>
            section.programContents.map((content, idx) => ({
              id: content.id,
              title: content.title,
              position: idx,
              content_section_id: section.id,
            })),
          ),
        },
      }),
    ])
      .then(() => {
        onStructureChange && onStructureChange()
        setVisible(false)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <AdminModal
      renderTrigger={({ setVisible }) => (
        <Button type="link" icon="drag" onClick={() => setVisible(true)}>
          {formatMessage(messages.sortProgram)}
        </Button>
      )}
      title={formatMessage(messages.contentSorting)}
      footer={null}
      renderFooter={({ setVisible }) => (
        <>
          <Button className="mr-2" onClick={() => setVisible(false)}>
            {formatMessage(commonMessages.ui.cancel)}
          </Button>
          <Button type="primary" loading={loading} onClick={() => handleSubmit(setVisible)}>
            {formatMessage(commonMessages.ui.confirm)}
          </Button>
        </>
      )}
    >
      <ReactSortable
        handle=".draggable-section"
        list={sections}
        setList={newSections => {
          setSections(newSections)
        }}
      >
        {sections.map((section, index) => (
          <div key={section.id} className='mb-3'>
            <StyledDraggableSectionLabel className="draggable-section cursor-pointer mb-2">
              <Icon type="drag" className="mr-2" />
              <span>{section.title}</span>
            </StyledDraggableSectionLabel>
            <ReactSortable
              handle=".draggable-content"
              list={section.programContents}
              setList={newProgramContents => {
                setSections([
                  ...sections.slice(0, index),
                  {
                    ...section,
                    programContents: newProgramContents,
                  },
                  ...sections.slice(index + 1),
                ])
              }}
            >
              {section.programContents.map(programContent => (
                <DraggableItem
                  key={programContent.id}
                  className="mb-1"
                  dataId={programContent.id}
                  handlerClassName="draggable-content"
                >
                  {programContent.title}
                </DraggableItem>
              ))}
            </ReactSortable>
          </div>
        ))}
      </ReactSortable>
    </AdminModal>
  )
}

const UPSERT_PROGRAM_CONTENT_SECTIONS = gql`
  mutation UPSERT_PROGRAM_CONTENT_SECTIONS($programContentSections: [program_content_section_insert_input!]!) {
    insert_program_content_section(
      objects: $programContentSections
      on_conflict: { constraint: program_content_section_pkey, update_columns: [position] }
    ) {
      affected_rows
    }
  }
`

const UPSERT_PROGRAM_CONTENTS = gql`
  mutation UPSERT_PROGRAM_CONTENTS($programContents: [program_content_insert_input!]!) {
    insert_program_content(
      objects: $programContents
      on_conflict: { constraint: program_content_pkey, update_columns: [content_section_id, position] }
    ) {
      affected_rows
    }
  }
`
export default ProgramStructureAdminModal
