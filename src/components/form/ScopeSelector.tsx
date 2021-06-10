import { useQuery } from '@apollo/react-hooks'
import { Checkbox, Radio, TreeSelect } from 'antd'
import gql from 'graphql-tag'
import React, { useState } from 'react'
import { useIntl } from 'react-intl'
import styled from 'styled-components'
import { useApp } from '../../contexts/AppContext'
import hasura from '../../hasura'
import { commonMessages } from '../../helpers/translation'
import { ProductType } from '../../types/general'
import ProductTypeLabel from '../common/ProductTypeLabel'

const StyledLabel = styled.div`
  color: var(--gray-darker);
  font-size: 14px;
  line-height: 1.71;
  letter-spacing: 0.4px;
`
const StyledProductParent = styled.div`
  max-width: 10rem;
  overflow: hidden;
  text-overflow: ellipsis;
`
const StyledProductTitle = styled.div`
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;

  ${StyledProductParent} + & {
    max-width: 14rem;
    :before {
      content: ' - ';
    }
  }
`
const StyledColumns = styled.div`
  columns: 2;
`

export type ScopeProps = {
  productTypes: ProductType[] | null
  productIds: string[]
}

const ScopeSelector: React.FC<{
  value?: ScopeProps
  onChange?: (value: ScopeProps) => void
  allText?: string
  specificTypeText?: string
  otherProductText?: string
}> = ({ value, onChange, allText, specificTypeText, otherProductText }) => {
  const { formatMessage } = useIntl()
  const { enabledModules } = useApp()
  const { briefProducts } = useAllBriefProductCollection()

  const [scopeType, setScopeType] = useState<'all' | 'specific'>(
    !value || (value.productTypes === null && value.productIds.length === 0) ? 'all' : 'specific',
  )
  const [selectedProductTypes, setSelectedProductTypes] = useState<ProductType[]>(value?.productTypes || [])
  const [selectedProductIds, setSelectedProductIds] = useState<string[]>(value?.productIds || [])

  return (
    <Radio.Group
      value={scopeType}
      onChange={value => {
        setScopeType(value.target.value)
        onChange?.(
          value.target.value === 'all'
            ? {
                productTypes: null,
                productIds: [],
              }
            : {
                productTypes: selectedProductTypes,
                productIds: selectedProductIds,
              },
        )
      }}
    >
      <Radio value="all" className="d-block mb-4">
        {allText || formatMessage(commonMessages.product.allItem)}
      </Radio>
      <Radio value="specific" className="d-block">
        {specificTypeText || formatMessage(commonMessages.product.specificItem)}
      </Radio>

      <div className={`mt-3 pl-3 ${scopeType === 'all' ? 'd-none' : ''}`}>
        <Checkbox.Group
          className="mb-3"
          value={selectedProductTypes}
          onChange={value => {
            setSelectedProductTypes(value as ProductType[])
            onChange &&
              onChange({
                productTypes: value as ProductType[],
                productIds: selectedProductIds,
              })
          }}
          style={{ width: '100%' }}
        >
          <StyledColumns>
            <div className="mb-3">
              <Checkbox value="Program">{formatMessage(commonMessages.product.allProgram)}</Checkbox>
            </div>
            <div className="mb-3">
              <Checkbox value="ProgramPlan">{formatMessage(commonMessages.product.allProgramPlan)}</Checkbox>
            </div>
            {enabledModules.activity && (
              <div className="mb-3">
                <Checkbox value="ActivityTicket">{formatMessage(commonMessages.product.allActivityTicket)}</Checkbox>
              </div>
            )}
            {enabledModules.podcast && (
              <div className="mb-3">
                <Checkbox value="PodcastProgram">{formatMessage(commonMessages.product.allPodcastProgram)}</Checkbox>
              </div>
            )}
            {enabledModules.podcast && (
              <div className="mb-3">
                <Checkbox value="PodcastPlan">{formatMessage(commonMessages.product.allPodcastPlan)}</Checkbox>
              </div>
            )}
            {enabledModules.appointment && (
              <div className="mb-3">
                <Checkbox value="AppointmentPlan">{formatMessage(commonMessages.product.allAppointmentPlan)}</Checkbox>
              </div>
            )}
            {enabledModules.merchandise && (
              <div className="mb-3">
                <Checkbox value="MerchandiseSpec">{formatMessage(commonMessages.product.allMerchandise)}</Checkbox>
              </div>
            )}
            <div className="mb-3">
              <Checkbox value="ProjectPlan">{formatMessage(commonMessages.product.allProjectPlan)}</Checkbox>
            </div>
            {enabledModules.program_package && (
              <div className="mb-3">
                <Checkbox value="ProgramPackagePlan">
                  {formatMessage(commonMessages.product.allProgramPackagePlan)}
                </Checkbox>
              </div>
            )}
          </StyledColumns>
        </Checkbox.Group>

        <StyledLabel>{otherProductText || formatMessage(commonMessages.product.otherItem)}</StyledLabel>
        <TreeSelect
          showSearch
          multiple
          allowClear
          treeCheckable
          placeholder={formatMessage(commonMessages.product.selectProducts)}
          style={{ width: '100%' }}
          dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
          value={selectedProductIds}
          onChange={value => {
            setSelectedProductIds(value)
            onChange &&
              onChange({
                productTypes: selectedProductTypes,
                productIds: value,
              })
          }}
        >
          {Object.keys(briefProducts).map(
            productType =>
              briefProducts[productType as ProductType]?.length && (
                <TreeSelect.TreeNode
                  key={productType}
                  value={productType}
                  title={<ProductTypeLabel productType={productType} />}
                  checkable={false}
                >
                  {briefProducts[productType as ProductType]?.map(product => (
                    <TreeSelect.TreeNode
                      key={product.productId}
                      value={product.productId}
                      title={
                        <div className="d-flex">
                          {product.parent && <StyledProductParent>{product.parent}</StyledProductParent>}
                          <StyledProductTitle>{product.title}</StyledProductTitle>
                        </div>
                      }
                    />
                  ))}
                </TreeSelect.TreeNode>
              ),
          )}
        </TreeSelect>
      </div>
    </Radio.Group>
  )
}

const useAllBriefProductCollection = () => {
  const { enabledModules } = useApp()

  const { loading, error, data, refetch } = useQuery<hasura.GET_ALL_BRIEF_PRODUCT_COLLECTION>(
    gql`
      query GET_ALL_BRIEF_PRODUCT_COLLECTION {
        program(where: { published_at: { _is_null: false } }) {
          id
          title
        }
        program_plan(where: { program: { published_at: { _is_null: false } } }) {
          id
          title
          program {
            id
            title
          }
        }
        activity_ticket(where: { is_published: { _eq: true }, activity: { published_at: { _is_null: false } } }) {
          id
          title
          activity {
            id
            title
          }
        }
        podcast_program(where: { published_at: { _is_null: false } }) {
          id
          title
        }
        podcast_plan(where: { published_at: { _is_null: false } }) {
          id
          title
          creator {
            id
            name
            username
          }
        }
        appointment_plan(where: { published_at: { _is_null: false } }) {
          id
          title
          creator {
            id
            name
            username
          }
        }
        merchandise_spec(where: { merchandise: { published_at: { _is_null: false } } }) {
          id
          title
          merchandise {
            id
            title
          }
        }
        project_plan(where: { project: { published_at: { _is_null: false } } }) {
          id
          title
          project {
            id
            title
          }
        }
        program_package_plan(
          where: { published_at: { _is_null: false }, program_package: { published_at: { _is_null: false } } }
        ) {
          id
          title
          program_package {
            id
            title
          }
        }
      }
    `,
  )

  const briefProducts: {
    [key in ProductType]?: {
      productId: string
      title: string
      parent?: string
    }[]
  } =
    loading || error || !data
      ? {}
      : {
          Program: data.program.map(program => ({
            productId: `Program_${program.id}`,
            title: program.title,
          })),
          ProgramPlan: data.program_plan.map(programPlan => ({
            productId: `ProgramPlan_${programPlan.id}`,
            title: programPlan.title || '',
            parent: programPlan.program.title,
          })),
          ActivityTicket: enabledModules.activity
            ? data.activity_ticket.map(activityTicket => ({
                productId: `ActivityTicket_${activityTicket.id}`,
                title: activityTicket.title,
                parent: activityTicket.activity.title,
              }))
            : undefined,
          PodcastProgram: enabledModules.podcast
            ? data.podcast_program.map(podcastProgram => ({
                productId: `PodcastProgram_${podcastProgram.id}`,
                title: podcastProgram.title,
              }))
            : undefined,
          PodcastPlan: enabledModules.podcast
            ? data.podcast_plan.map(podcastPlan => ({
                productId: `PodcastPlan_${podcastPlan.id}`,
                title: `${podcastPlan.creator?.name || podcastPlan.creator?.username || ''}`,
              }))
            : undefined,
          AppointmentPlan: enabledModules.appointment
            ? data.appointment_plan.map(appointmentPlan => ({
                productId: `AppointmentPlan_${appointmentPlan.id}`,
                title: appointmentPlan.title,
                parent: appointmentPlan.creator?.name || appointmentPlan.creator?.username || '',
              }))
            : undefined,
          MerchandiseSpec: enabledModules.merchandise
            ? data.merchandise_spec.map(merchandiseSpec => ({
                productId: `MerchandiseSpec_${merchandiseSpec.id}`,
                title: merchandiseSpec.title,
                parent: merchandiseSpec.merchandise.title,
              }))
            : undefined,
          // todo: add module check of project
          ProjectPlan: data.project_plan.map(projectPlan => ({
            productId: `ProjectPlan_${projectPlan.id}`,
            title: projectPlan.title,
            parent: projectPlan.project.title,
          })),
          ProgramPackagePlan: enabledModules.program_package
            ? data.program_package_plan.map(programPackagePlan => ({
                productId: `ProgramPackagePlan_${programPackagePlan.id}`,
                title: programPackagePlan.title,
                parent: programPackagePlan.program_package.title,
              }))
            : undefined,
        }

  return {
    loadingBriefProducts: loading,
    errorBriefProducts: error,
    briefProducts,
    refetchBriefProducts: refetch,
  }
}

export default ScopeSelector
