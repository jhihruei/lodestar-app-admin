import { DragOutlined } from '@ant-design/icons'
import React, { HTMLAttributes } from 'react'
import styled from 'styled-components'

const StyledDraggableItem = styled.div`
  padding: 20px;
  background: #f7f8f8;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledChildren = styled.div`
  padding: 8px;
  padding-left: 0;
`

const DraggableItem: React.FC<
  HTMLAttributes<HTMLDivElement> & {
    dataId: string
    handlerClassName?: string
    actions?: React.ReactNode[]
  }
> = ({ dataId, handlerClassName, children, actions, ...divProps }) => {
  return (
    <StyledDraggableItem {...divProps} data-id={dataId}>
      <div className="d-flex align-items-center">
        <DragOutlined onClick={() => {}} className={handlerClassName + ' mr-3'} />
        <StyledChildren>{children}</StyledChildren>
      </div>
      <div className="align-self-stretch">{actions}</div>
    </StyledDraggableItem>
  )
}

export default DraggableItem
