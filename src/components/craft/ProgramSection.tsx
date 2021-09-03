import { Element, useEditor } from '@craftjs/core'
import { Image } from 'antd'
import CraftBackground from 'lodestar-app-element/src/components/craft/CraftBackground'
import CraftButton from 'lodestar-app-element/src/components/craft/CraftButton'
import CraftLayout from 'lodestar-app-element/src/components/craft/CraftLayout'
import CraftProgram from 'lodestar-app-element/src/components/craft/CraftProgram'
import CraftTitle from 'lodestar-app-element/src/components/craft/CraftTitle'
import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { StyledBoxWrapper } from '../../pages/CraftPage/CraftToolbox'

const ProblemSection: React.VFC = () => {
  const { connectors } = useEditor()
  const theme = useContext(ThemeContext)

  return (
    <StyledBoxWrapper
      className="mb-3"
      ref={ref =>
        ref &&
        connectors.create(
          ref,
          <Element
            id="CraftBackground"
            is={CraftBackground}
            backgroundType="none"
            padding={{ pt: '64', pb: '64' }}
            margin={{ mb: '5' }}
            canvas
          >
            <CraftTitle
              titleContent="線上課程"
              fontSize={20}
              margin={{ mb: '40' }}
              textAlign="center"
              fontWeight="bold"
              color={'#585858'}
            />
            <Element
              id="CraftLayout"
              is={CraftLayout}
              canvas
              mobile={{
                margin: { ml: '16', mr: '16', mb: '20' },
                columnAmount: 1,
                columnRatio: [12],
                displayAmount: 3,
              }}
              desktop={{
                margin: { ml: '120', mr: '120', mb: '20' },
                columnAmount: 3,
                columnRatio: [4, 4, 4],
                displayAmount: 3,
              }}
            >
              <CraftProgram />
            </Element>
            <div style={{ textAlign: 'center' }}>
              <CraftButton
                title="馬上查看 〉"
                link="/programs"
                openNewTab={false}
                size="md"
                block={false}
                variant="text"
                color={theme['@primary-color']}
              />
            </div>
          </Element>,
        )
      }
    >
      <Image preview={false} src="https://static.kolable.com/images/default/craft/program.png" />
    </StyledBoxWrapper>
  )
}

export default ProblemSection
