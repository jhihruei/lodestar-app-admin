import { useMutation, useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import types from '../types'
import { ProductInventoryStatusProps } from '../types/general'
import {
  InvoiceProps,
  MemberShopPreviewProps,
  MemberShopProps,
  MerchandisePreviewProps,
  MerchandiseProps,
  ShippingProps
} from '../types/merchandise'

export const useInsertMerchandise = () => {
  const [insertMerchandise] = useMutation<types.INSERT_MERCHANDISE, types.INSERT_MERCHANDISEVariables>(gql`
    mutation INSERT_MERCHANDISE(
      $appId: String!
      $memberId: String!
      $title: String!
      $merchandiseCategories: [merchandise_category_insert_input!]!
    ) {
      insert_merchandise(
        objects: {
          app_id: $appId
          title: $title
          member_id: $memberId
          merchandise_categories: { data: $merchandiseCategories }
        }
      ) {
        affected_rows
        returning {
          id
        }
      }
    }
  `)

  return insertMerchandise
}

export const useMerchandiseCollection = (isNotPublished?: boolean) => {
  const { loading, error, data, refetch } = useQuery<types.GET_MERCHANDISE_COLLECTION>(
    gql`
      query GET_MERCHANDISE_COLLECTION($isNotPublished: Boolean) {
        merchandise(
          where: { is_deleted: { _eq: false }, published_at: { _is_null: $isNotPublished } }
          order_by: { position: asc, published_at: desc, updated_at: desc }
        ) {
          id
          title
          list_price
          published_at
          merchandise_imgs(where: { type: { _eq: "cover" } }) {
            id
            url
          }
        }
      }
    `,
    { variables: { isNotPublished } },
  )

  const merchandises: MerchandisePreviewProps[] =
    loading || error || !data
      ? []
      : data.merchandise.map(merchandise => ({
          id: merchandise.id,
          title: merchandise.title,
          listPrice: merchandise.list_price,
          publishedAt: merchandise.published_at ? new Date(merchandise.published_at) : null,
          coverUrl: merchandise.merchandise_imgs[0]?.url || null,
        }))

  return {
    loadingMerchandises: loading,
    errorMerchandises: error,
    merchandises,
    refetchMerchandises: refetch,
  }
}

export const useMerchandise = (id: string) => {
  const { loading, error, data, refetch } = useQuery<types.GET_MERCHANDISE, types.GET_MERCHANDISEVariables>(
    gql`
      query GET_MERCHANDISE($id: uuid!) {
        merchandise_by_pk(id: $id) {
          id
          title
          meta
          abstract
          description
          list_price
          sale_price
          sold_at
          started_at
          ended_at
          link
          published_at
          merchandise_categories(order_by: { position: asc }) {
            id
            category {
              id
              name
            }
          }
          merchandise_tags(order_by: { position: asc }) {
            id
            tag_name
          }
          merchandise_imgs(order_by: { position: asc }) {
            id
            type
            url
          }
          merchandise_inventory_status {
            buyable_quantity
            undelivered_quantity
            delivered_quantity
          }
        }
      }
    `,
    { variables: { id } },
  )
  const merchandise:
    | (MerchandiseProps & {
        merchandiseInventoryStatus: ProductInventoryStatusProps
      })
    | null =
    loading || error || !data || !data.merchandise_by_pk
      ? null
      : {
          id,
          title: data.merchandise_by_pk.title,
          categories: data.merchandise_by_pk.merchandise_categories.map(merchandiseCategory => ({
            id: merchandiseCategory.category.id,
            name: merchandiseCategory.category.name,
          })),
          tags: data.merchandise_by_pk.merchandise_tags.map(merchandiseTag => merchandiseTag.tag_name),
          images: data.merchandise_by_pk.merchandise_imgs.map(img => ({
            url: img.url,
            isCover: img.type === 'cover',
          })),
          abstract: data.merchandise_by_pk.abstract,
          meta: data.merchandise_by_pk.meta,
          link: data.merchandise_by_pk.link,
          description: data.merchandise_by_pk.description,
          listPrice: data.merchandise_by_pk.list_price,
          salePrice: data.merchandise_by_pk.sale_price,
          soldAt: data.merchandise_by_pk.sold_at,
          startedAt: data.merchandise_by_pk.started_at,
          endedAt: data.merchandise_by_pk.ended_at,
          publishedAt: data.merchandise_by_pk.published_at ? new Date(data.merchandise_by_pk.published_at) : null,
          merchandiseInventoryStatus: {
            buyableQuantity: data.merchandise_by_pk.merchandise_inventory_status?.buyable_quantity || 0,
            undeliveredQuantity: data.merchandise_by_pk.merchandise_inventory_status?.undelivered_quantity || 0,
            deliveredQuantity: data.merchandise_by_pk.merchandise_inventory_status?.delivered_quantity || 0,
          },
        }

  return {
    loadingMerchandise: loading,
    errorMerchandise: error,
    merchandise,
    refetchMerchandise: refetch,
  }
}

export const useMemberShopCollection = () => {
  const { loading, error, data, refetch } = useQuery<types.GET_MEMBER_SHOP_COLLECTION>(gql`
    query GET_MEMBER_SHOP_COLLECTION {
      member_shop(order_by: { member_id: asc }) {
        id
        title
        member {
          id
          name
          username
          picture_url
          merchandises_aggregate {
            aggregate {
              count
            }
          }
        }
        published_at
      }
    }
  `)

  const memberShops: MemberShopPreviewProps[] =
    loading || error || !data
      ? []
      : data.member_shop.map(memberShop => ({
          id: memberShop.id,
          title: memberShop.title,
          member: {
            id: memberShop.member.id,
            name: memberShop.member.name || memberShop.member.username,
            pictureUrl: memberShop.member.picture_url,
          },
          merchandisesCount: memberShop.member.merchandises_aggregate.aggregate?.count || 0,
          publishedAt: memberShop.published_at ? new Date(memberShop.published_at) : null,
        }))

  return {
    loadingMemberShops: loading,
    errorMemberShops: error,
    memberShops,
    refetchShops: refetch,
  }
}

export const useMemberShop = (shopId: string) => {
  const { loading, error, data, refetch } = useQuery<types.GET_MEMBER_SHOP, types.GET_MEMBER_SHOPVariables>(
    gql`
      query GET_MEMBER_SHOP($shopId: uuid!) {
        member_shop_by_pk(id: $shopId) {
          id
          title
          shipping_methods
          published_at
        }
      }
    `,
    { variables: { shopId } },
  )

  const memberShop: MemberShopProps | null =
    loading || error || !data || !data.member_shop_by_pk
      ? null
      : {
          id: data.member_shop_by_pk.id,
          title: data.member_shop_by_pk.title,
          shippingMethods: data.member_shop_by_pk.shipping_methods || [],
          publishedAt: data.member_shop_by_pk.published_at,
        }

  return {
    loadingMemberShop: loading,
    errorMemberShop: error,
    memberShop,
    refetchMemberShop: refetch,
  }
}

export const useMerchandiseOrderLogCollection = () => {
  const { error, loading, data, refetch } = useQuery<types.GET_MERCHANDISE_ORDER_LOG>(
    gql`
      query GET_MERCHANDISE_ORDER_LOG {
        orderLogs: order_log(where: { _and: [{ status: { _eq: "SUCCESS" } }] }, order_by: { updated_at: desc }) {
          id
          created_at
          updated_at
          delivered_at
          deliver_message
          shipping
          invoice

          orderMerchandises: order_products(where: { product_id: { _like: "Merchandise_%" } }) {
            id
            name
            product_id
          }
        }
      }
    `,
  )

  const merchandiseOrderLogs: {
    id: string
    createdAt: Date
    updatedAt: Date
    deliveredAt: Date
    deliverMessage: string | null
    shipping: ShippingProps
    invoice: InvoiceProps
    orderMerchandises: {
      key: string
      id: string
      name: string
      merchandiseId: string
    }[]
  }[] =
    error || loading || !data
      ? []
      : data?.orderLogs
          .filter(orderLog => orderLog.orderMerchandises.length)
          .map(orderLog => ({
            id: orderLog.id,
            createdAt: orderLog.created_at,
            updatedAt: orderLog.updated_at,
            deliveredAt: orderLog.delivered_at,
            deliverMessage: orderLog.deliver_message,
            shipping: orderLog.shipping,
            invoice: orderLog.invoice,
            orderMerchandises: orderLog.orderMerchandises.map(orderMerchandise => ({
              key: `${orderLog.id}_${orderMerchandise.name}`,
              id: orderMerchandise.id,
              name: orderMerchandise.name,
              merchandiseId: orderMerchandise.product_id.split('_')[1],
            })),
          }))

  return {
    error,
    loading,
    merchandiseOrderLogs,
    refetch,
  }
}
