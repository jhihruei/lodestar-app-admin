/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_ACTIVITY_BASIC
// ====================================================

export interface UPDATE_ACTIVITY_BASIC_update_activity {
  __typename: "activity_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_ACTIVITY_BASIC_delete_activity_category {
  __typename: "activity_category_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_ACTIVITY_BASIC_insert_activity_category {
  __typename: "activity_category_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_ACTIVITY_BASIC {
  /**
   * update data of the table: "activity"
   */
  update_activity: UPDATE_ACTIVITY_BASIC_update_activity | null;
  /**
   * delete data from the table: "activity_category"
   */
  delete_activity_category: UPDATE_ACTIVITY_BASIC_delete_activity_category | null;
  /**
   * insert data into the table: "activity_category"
   */
  insert_activity_category: UPDATE_ACTIVITY_BASIC_insert_activity_category | null;
}

export interface UPDATE_ACTIVITY_BASICVariables {
  activityId: any;
  title: string;
  isParticipantsVisible: boolean;
  activityCategories: activity_category_insert_input[];
  supportLocales?: any | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_ACTIVITY_COVER
// ====================================================

export interface UPDATE_ACTIVITY_COVER_update_activity {
  __typename: "activity_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_ACTIVITY_COVER {
  /**
   * update data of the table: "activity"
   */
  update_activity: UPDATE_ACTIVITY_COVER_update_activity | null;
}

export interface UPDATE_ACTIVITY_COVERVariables {
  activityId: any;
  coverUrl?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_ACTIVITY_INTRODUCTION
// ====================================================

export interface UPDATE_ACTIVITY_INTRODUCTION_update_activity {
  __typename: "activity_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_ACTIVITY_INTRODUCTION {
  /**
   * update data of the table: "activity"
   */
  update_activity: UPDATE_ACTIVITY_INTRODUCTION_update_activity | null;
}

export interface UPDATE_ACTIVITY_INTRODUCTIONVariables {
  activityId: any;
  description?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_ACTIVITY_PARTICIPANTS
// ====================================================

export interface GET_ACTIVITY_PARTICIPANTS_activity_enrollment_activity_ticket {
  __typename: "activity_ticket";
  id: any;
  title: string;
}

export interface GET_ACTIVITY_PARTICIPANTS_activity_enrollment {
  __typename: "activity_enrollment";
  activity_session_id: any | null;
  order_log_id: string | null;
  member_id: string | null;
  member_name: string | null;
  member_email: string | null;
  member_phone: string | null;
  attended: boolean | null;
  /**
   * An object relationship
   */
  activity_ticket: GET_ACTIVITY_PARTICIPANTS_activity_enrollment_activity_ticket | null;
}

export interface GET_ACTIVITY_PARTICIPANTS_activity_session {
  __typename: "activity_session";
  id: any;
  title: string;
  started_at: any;
}

export interface GET_ACTIVITY_PARTICIPANTS {
  /**
   * fetch data from the table: "activity_enrollment"
   */
  activity_enrollment: GET_ACTIVITY_PARTICIPANTS_activity_enrollment[];
  /**
   * fetch data from the table: "activity_session"
   */
  activity_session: GET_ACTIVITY_PARTICIPANTS_activity_session[];
}

export interface GET_ACTIVITY_PARTICIPANTSVariables {
  activityId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: PUBLISH_ACTIVITY
// ====================================================

export interface PUBLISH_ACTIVITY_update_activity {
  __typename: "activity_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface PUBLISH_ACTIVITY {
  /**
   * update data of the table: "activity"
   */
  update_activity: PUBLISH_ACTIVITY_update_activity | null;
}

export interface PUBLISH_ACTIVITYVariables {
  activityId: any;
  publishedAt?: any | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: INSERT_ACTIVITY_SESSION
// ====================================================

export interface INSERT_ACTIVITY_SESSION_insert_activity_session {
  __typename: "activity_session_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface INSERT_ACTIVITY_SESSION {
  /**
   * insert data into the table: "activity_session"
   */
  insert_activity_session: INSERT_ACTIVITY_SESSION_insert_activity_session | null;
}

export interface INSERT_ACTIVITY_SESSIONVariables {
  activityId: any;
  title: string;
  startedAt?: any | null;
  endedAt?: any | null;
  location: string;
  description?: string | null;
  threshold?: any | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_ACTIVITY_SESSION
// ====================================================

export interface UPDATE_ACTIVITY_SESSION_update_activity_session {
  __typename: "activity_session_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_ACTIVITY_SESSION {
  /**
   * update data of the table: "activity_session"
   */
  update_activity_session: UPDATE_ACTIVITY_SESSION_update_activity_session | null;
}

export interface UPDATE_ACTIVITY_SESSIONVariables {
  activitySessionId: any;
  title: string;
  startedAt?: any | null;
  endedAt?: any | null;
  location: string;
  description?: string | null;
  threshold?: any | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: INSERT_ACTIVITY_TICKET
// ====================================================

export interface INSERT_ACTIVITY_TICKET_insert_activity_ticket {
  __typename: "activity_ticket_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface INSERT_ACTIVITY_TICKET {
  /**
   * insert data into the table: "activity_ticket"
   */
  insert_activity_ticket: INSERT_ACTIVITY_TICKET_insert_activity_ticket | null;
}

export interface INSERT_ACTIVITY_TICKETVariables {
  activityId: any;
  title: string;
  activitySessionTickets: activity_session_ticket_insert_input[];
  isPublished: boolean;
  startedAt: any;
  endedAt: any;
  price: any;
  count?: number | null;
  description?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_ACTIVITY_TICKET
// ====================================================

export interface UPDATE_ACTIVITY_TICKET_update_activity_ticket {
  __typename: "activity_ticket_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_ACTIVITY_TICKET_delete_activity_session_ticket {
  __typename: "activity_session_ticket_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_ACTIVITY_TICKET_insert_activity_session_ticket {
  __typename: "activity_session_ticket_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_ACTIVITY_TICKET {
  /**
   * update data of the table: "activity_ticket"
   */
  update_activity_ticket: UPDATE_ACTIVITY_TICKET_update_activity_ticket | null;
  /**
   * delete data from the table: "activity_session_ticket"
   */
  delete_activity_session_ticket: UPDATE_ACTIVITY_TICKET_delete_activity_session_ticket | null;
  /**
   * insert data into the table: "activity_session_ticket"
   */
  insert_activity_session_ticket: UPDATE_ACTIVITY_TICKET_insert_activity_session_ticket | null;
}

export interface UPDATE_ACTIVITY_TICKETVariables {
  activityTicketId: any;
  title: string;
  activitySessionTickets: activity_session_ticket_insert_input[];
  isPublished: boolean;
  startedAt: any;
  endedAt: any;
  price: any;
  count?: number | null;
  description?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_POST_ROLE
// ====================================================

export interface UPDATE_POST_ROLE_update_post {
  __typename: "post_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_POST_ROLE_delete_post_role {
  __typename: "post_role_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_POST_ROLE_insert_post_role {
  __typename: "post_role_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_POST_ROLE {
  /**
   * update data of the table: "post"
   */
  update_post: UPDATE_POST_ROLE_update_post | null;
  /**
   * delete data from the table: "post_role"
   */
  delete_post_role: UPDATE_POST_ROLE_delete_post_role | null;
  /**
   * insert data into the table: "post_role"
   */
  insert_post_role: UPDATE_POST_ROLE_insert_post_role | null;
}

export interface UPDATE_POST_ROLEVariables {
  postId: any;
  postRoles: post_role_insert_input[];
  updatedAt: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_POST_BASIC
// ====================================================

export interface UPDATE_POST_BASIC_update_post {
  __typename: "post_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_POST_BASIC_delete_post_category {
  __typename: "post_category_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_POST_BASIC_insert_post_category {
  __typename: "post_category_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_POST_BASIC_insert_tag {
  __typename: "tag_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_POST_BASIC_delete_post_tag {
  __typename: "post_tag_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_POST_BASIC_insert_post_tag {
  __typename: "post_tag_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_POST_BASIC {
  /**
   * update data of the table: "post"
   */
  update_post: UPDATE_POST_BASIC_update_post | null;
  /**
   * delete data from the table: "post_category"
   */
  delete_post_category: UPDATE_POST_BASIC_delete_post_category | null;
  /**
   * insert data into the table: "post_category"
   */
  insert_post_category: UPDATE_POST_BASIC_insert_post_category | null;
  /**
   * insert data into the table: "tag"
   */
  insert_tag: UPDATE_POST_BASIC_insert_tag | null;
  /**
   * delete data from the table: "post_tag"
   */
  delete_post_tag: UPDATE_POST_BASIC_delete_post_tag | null;
  /**
   * insert data into the table: "post_tag"
   */
  insert_post_tag: UPDATE_POST_BASIC_insert_post_tag | null;
}

export interface UPDATE_POST_BASICVariables {
  postId: any;
  title?: string | null;
  codeName?: string | null;
  categories: post_category_insert_input[];
  tags: tag_insert_input[];
  postTags: post_tag_insert_input[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_POST_DESCRIPTION
// ====================================================

export interface UPDATE_POST_DESCRIPTION_update_post {
  __typename: "post_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_POST_DESCRIPTION {
  /**
   * update data of the table: "post"
   */
  update_post: UPDATE_POST_DESCRIPTION_update_post | null;
}

export interface UPDATE_POST_DESCRIPTIONVariables {
  id: any;
  description: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_POST_IS_DELETED
// ====================================================

export interface UPDATE_POST_IS_DELETED_update_post {
  __typename: "post_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_POST_IS_DELETED {
  /**
   * update data of the table: "post"
   */
  update_post: UPDATE_POST_IS_DELETED_update_post | null;
}

export interface UPDATE_POST_IS_DELETEDVariables {
  postId?: any | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: PUBLISH_POST
// ====================================================

export interface PUBLISH_POST_update_post {
  __typename: "post_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface PUBLISH_POST {
  /**
   * update data of the table: "post"
   */
  update_post: PUBLISH_POST_update_post | null;
}

export interface PUBLISH_POSTVariables {
  postId: any;
  publishedAt?: any | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_POST_SETTING
// ====================================================

export interface UPDATE_POST_SETTING_update_post {
  __typename: "post_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_POST_SETTING_delete_post_merchandise {
  __typename: "post_merchandise_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_POST_SETTING_insert_post_merchandise {
  __typename: "post_merchandise_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_POST_SETTING {
  /**
   * update data of the table: "post"
   */
  update_post: UPDATE_POST_SETTING_update_post | null;
  /**
   * delete data from the table: "post_merchandise"
   */
  delete_post_merchandise: UPDATE_POST_SETTING_delete_post_merchandise | null;
  /**
   * insert data into the table: "post_merchandise"
   */
  insert_post_merchandise: UPDATE_POST_SETTING_insert_post_merchandise | null;
}

export interface UPDATE_POST_SETTINGVariables {
  postId: any;
  coverUrl?: string | null;
  merchandises: post_merchandise_insert_input[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_POST_VIDEO_URL
// ====================================================

export interface UPDATE_POST_VIDEO_URL_update_post {
  __typename: "post_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_POST_VIDEO_URL {
  /**
   * update data of the table: "post"
   */
  update_post: UPDATE_POST_VIDEO_URL_update_post | null;
}

export interface UPDATE_POST_VIDEO_URLVariables {
  id: any;
  videoUrl: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: INSERT_COUPON_PLAN
// ====================================================

export interface INSERT_COUPON_PLAN_insert_coupon_plan {
  __typename: "coupon_plan_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface INSERT_COUPON_PLAN {
  /**
   * insert data into the table: "coupon_plan"
   */
  insert_coupon_plan: INSERT_COUPON_PLAN_insert_coupon_plan | null;
}

export interface INSERT_COUPON_PLANVariables {
  couponCodes: coupon_code_insert_input[];
  constraint?: any | null;
  description?: string | null;
  endedAt?: any | null;
  scope?: any | null;
  startedAt?: any | null;
  title?: string | null;
  type?: number | null;
  amount?: any | null;
  couponPlanProduct: coupon_plan_product_insert_input[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_COUPON_PLAN
// ====================================================

export interface UPDATE_COUPON_PLAN_update_coupon_plan {
  __typename: "coupon_plan_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_COUPON_PLAN_delete_coupon_plan_product {
  __typename: "coupon_plan_product_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_COUPON_PLAN_insert_coupon_plan_product {
  __typename: "coupon_plan_product_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_COUPON_PLAN {
  /**
   * update data of the table: "coupon_plan"
   */
  update_coupon_plan: UPDATE_COUPON_PLAN_update_coupon_plan | null;
  /**
   * delete data from the table: "coupon_plan_product"
   */
  delete_coupon_plan_product: UPDATE_COUPON_PLAN_delete_coupon_plan_product | null;
  /**
   * insert data into the table: "coupon_plan_product"
   */
  insert_coupon_plan_product: UPDATE_COUPON_PLAN_insert_coupon_plan_product | null;
}

export interface UPDATE_COUPON_PLANVariables {
  couponPlanId: any;
  constraint?: any | null;
  description?: string | null;
  endedAt?: any | null;
  startedAt?: any | null;
  scope?: any | null;
  title?: string | null;
  type?: number | null;
  amount?: any | null;
  couponPlanProduct: coupon_plan_product_insert_input[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: INSERT_COIN_LOG_COLLECTION
// ====================================================

export interface INSERT_COIN_LOG_COLLECTION_insert_coin_log {
  __typename: "coin_log_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface INSERT_COIN_LOG_COLLECTION {
  /**
   * insert data into the table: "coin_log"
   */
  insert_coin_log: INSERT_COIN_LOG_COLLECTION_insert_coin_log | null;
}

export interface INSERT_COIN_LOG_COLLECTIONVariables {
  data: coin_log_insert_input[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_CREATOR_COLLECTION
// ====================================================

export interface GET_CREATOR_COLLECTION_member {
  __typename: "member";
  id: string;
  picture_url: string | null;
  name: string;
  username: string;
  email: string;
}

export interface GET_CREATOR_COLLECTION {
  /**
   * fetch data from the table: "member"
   */
  member: GET_CREATOR_COLLECTION_member[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_MEMBER_INFO
// ====================================================

export interface UPDATE_MEMBER_INFO_update_member {
  __typename: "member_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_MEMBER_INFO {
  /**
   * update data of the table: "member"
   */
  update_member: UPDATE_MEMBER_INFO_update_member | null;
}

export interface UPDATE_MEMBER_INFOVariables {
  memberId: string;
  name?: string | null;
  email?: string | null;
  role?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: INSERT_POINT_LOG_COLLECTION
// ====================================================

export interface INSERT_POINT_LOG_COLLECTION_insert_point_log {
  __typename: "point_log_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface INSERT_POINT_LOG_COLLECTION {
  /**
   * insert data into the table: "point_log"
   */
  insert_point_log: INSERT_POINT_LOG_COLLECTION_insert_point_log | null;
}

export interface INSERT_POINT_LOG_COLLECTIONVariables {
  data: point_log_insert_input[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_ISSUE_STATUS
// ====================================================

export interface UPDATE_ISSUE_STATUS_update_issue {
  __typename: "issue_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_ISSUE_STATUS {
  /**
   * update data of the table: "issue"
   */
  update_issue: UPDATE_ISSUE_STATUS_update_issue | null;
}

export interface UPDATE_ISSUE_STATUSVariables {
  issueId: any;
  solvedAt?: any | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_ISSUE
// ====================================================

export interface UPDATE_ISSUE_update_issue {
  __typename: "issue_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_ISSUE {
  /**
   * update data of the table: "issue"
   */
  update_issue: UPDATE_ISSUE_update_issue | null;
}

export interface UPDATE_ISSUEVariables {
  issueId: any;
  title?: string | null;
  description?: string | null;
  solvedAt?: any | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DELETE_ISSUE
// ====================================================

export interface DELETE_ISSUE_delete_issue_reply_reaction {
  __typename: "issue_reply_reaction_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface DELETE_ISSUE_delete_issue_reaction {
  __typename: "issue_reaction_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface DELETE_ISSUE_delete_issue_reply {
  __typename: "issue_reply_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface DELETE_ISSUE_delete_issue {
  __typename: "issue_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface DELETE_ISSUE {
  /**
   * delete data from the table: "issue_reply_reaction"
   */
  delete_issue_reply_reaction: DELETE_ISSUE_delete_issue_reply_reaction | null;
  /**
   * delete data from the table: "issue_reaction"
   */
  delete_issue_reaction: DELETE_ISSUE_delete_issue_reaction | null;
  /**
   * delete data from the table: "issue_reply"
   */
  delete_issue_reply: DELETE_ISSUE_delete_issue_reply | null;
  /**
   * delete data from the table: "issue"
   */
  delete_issue: DELETE_ISSUE_delete_issue | null;
}

export interface DELETE_ISSUEVariables {
  issueId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: INSERT_ISSUE_REACTION
// ====================================================

export interface INSERT_ISSUE_REACTION_insert_issue_reaction {
  __typename: "issue_reaction_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface INSERT_ISSUE_REACTION {
  /**
   * insert data into the table: "issue_reaction"
   */
  insert_issue_reaction: INSERT_ISSUE_REACTION_insert_issue_reaction | null;
}

export interface INSERT_ISSUE_REACTIONVariables {
  memberId: string;
  issueId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DELETE_ISSUE_REACTION
// ====================================================

export interface DELETE_ISSUE_REACTION_delete_issue_reaction {
  __typename: "issue_reaction_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface DELETE_ISSUE_REACTION {
  /**
   * delete data from the table: "issue_reaction"
   */
  delete_issue_reaction: DELETE_ISSUE_REACTION_delete_issue_reaction | null;
}

export interface DELETE_ISSUE_REACTIONVariables {
  memberId: string;
  issueId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_ISSUE_REPLIES
// ====================================================

export interface GET_ISSUE_REPLIES_issue_reply_issue_reply_reactions_public_member {
  __typename: "member_public";
  id: string | null;
  name: string | null;
}

export interface GET_ISSUE_REPLIES_issue_reply_issue_reply_reactions {
  __typename: "issue_reply_reaction";
  /**
   * An object relationship
   */
  public_member: GET_ISSUE_REPLIES_issue_reply_issue_reply_reactions_public_member | null;
}

export interface GET_ISSUE_REPLIES_issue_reply {
  __typename: "issue_reply";
  id: any;
  content: string;
  created_at: any;
  member_id: string;
  /**
   * An array relationship
   */
  issue_reply_reactions: GET_ISSUE_REPLIES_issue_reply_issue_reply_reactions[];
}

export interface GET_ISSUE_REPLIES {
  /**
   * fetch data from the table: "issue_reply"
   */
  issue_reply: GET_ISSUE_REPLIES_issue_reply[];
}

export interface GET_ISSUE_REPLIESVariables {
  issueId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: INSERT_ISSUE_REPLY
// ====================================================

export interface INSERT_ISSUE_REPLY_insert_issue_reply {
  __typename: "issue_reply_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface INSERT_ISSUE_REPLY {
  /**
   * insert data into the table: "issue_reply"
   */
  insert_issue_reply: INSERT_ISSUE_REPLY_insert_issue_reply | null;
}

export interface INSERT_ISSUE_REPLYVariables {
  memberId: string;
  issueId: any;
  content?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: INSERT_ISSUE_REPLY_REACTION
// ====================================================

export interface INSERT_ISSUE_REPLY_REACTION_insert_issue_reply_reaction {
  __typename: "issue_reply_reaction_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface INSERT_ISSUE_REPLY_REACTION {
  /**
   * insert data into the table: "issue_reply_reaction"
   */
  insert_issue_reply_reaction: INSERT_ISSUE_REPLY_REACTION_insert_issue_reply_reaction | null;
}

export interface INSERT_ISSUE_REPLY_REACTIONVariables {
  memberId: string;
  issueReplyId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DELETE_ISSUE_REPLY_REACTION
// ====================================================

export interface DELETE_ISSUE_REPLY_REACTION_delete_issue_reply_reaction {
  __typename: "issue_reply_reaction_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface DELETE_ISSUE_REPLY_REACTION {
  /**
   * delete data from the table: "issue_reply_reaction"
   */
  delete_issue_reply_reaction: DELETE_ISSUE_REPLY_REACTION_delete_issue_reply_reaction | null;
}

export interface DELETE_ISSUE_REPLY_REACTIONVariables {
  memberId: string;
  issueReplyId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DELETE_ISSUE_REPLY
// ====================================================

export interface DELETE_ISSUE_REPLY_delete_issue_reply {
  __typename: "issue_reply_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface DELETE_ISSUE_REPLY {
  /**
   * delete data from the table: "issue_reply"
   */
  delete_issue_reply: DELETE_ISSUE_REPLY_delete_issue_reply | null;
}

export interface DELETE_ISSUE_REPLYVariables {
  issueReplyId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_ISSUE_REPLY
// ====================================================

export interface UPDATE_ISSUE_REPLY_update_issue_reply {
  __typename: "issue_reply_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_ISSUE_REPLY {
  /**
   * update data of the table: "issue_reply"
   */
  update_issue_reply: UPDATE_ISSUE_REPLY_update_issue_reply | null;
}

export interface UPDATE_ISSUE_REPLYVariables {
  issueReplyId: any;
  content?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_MEMBER_SHOP_TITLE
// ====================================================

export interface UPDATE_MEMBER_SHOP_TITLE_update_member_shop {
  __typename: "member_shop_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_MEMBER_SHOP_TITLE {
  /**
   * update data of the table: "member_shop"
   */
  update_member_shop: UPDATE_MEMBER_SHOP_TITLE_update_member_shop | null;
}

export interface UPDATE_MEMBER_SHOP_TITLEVariables {
  memberShopId: any;
  title: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: INSERT_MEMBER_SHOP
// ====================================================

export interface INSERT_MEMBER_SHOP_insert_member_shop_returning {
  __typename: "member_shop";
  id: any;
}

export interface INSERT_MEMBER_SHOP_insert_member_shop {
  __typename: "member_shop_mutation_response";
  /**
   * data of the affected rows by the mutation
   */
  returning: INSERT_MEMBER_SHOP_insert_member_shop_returning[];
}

export interface INSERT_MEMBER_SHOP {
  /**
   * insert data into the table: "member_shop"
   */
  insert_member_shop: INSERT_MEMBER_SHOP_insert_member_shop | null;
}

export interface INSERT_MEMBER_SHOPVariables {
  memberId: string;
  title: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: PUBLISH_MEMBER_SHOP
// ====================================================

export interface PUBLISH_MEMBER_SHOP_update_member_shop {
  __typename: "member_shop_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface PUBLISH_MEMBER_SHOP {
  /**
   * update data of the table: "member_shop"
   */
  update_member_shop: PUBLISH_MEMBER_SHOP_update_member_shop | null;
}

export interface PUBLISH_MEMBER_SHOPVariables {
  memberShopId: any;
  publishedAt?: any | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_MEMBER_SHOP_TITLE_COLLECTION
// ====================================================

export interface GET_MEMBER_SHOP_TITLE_COLLECTION_member_shop {
  __typename: "member_shop";
  id: any;
  title: string;
}

export interface GET_MEMBER_SHOP_TITLE_COLLECTION {
  /**
   * fetch data from the table: "member_shop"
   */
  member_shop: GET_MEMBER_SHOP_TITLE_COLLECTION_member_shop[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_MERCHANDISE_BASIC
// ====================================================

export interface UPDATE_MERCHANDISE_BASIC_update_merchandise {
  __typename: "merchandise_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_MERCHANDISE_BASIC_delete_merchandise_category {
  __typename: "merchandise_category_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_MERCHANDISE_BASIC_insert_merchandise_category {
  __typename: "merchandise_category_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_MERCHANDISE_BASIC_insert_tag {
  __typename: "tag_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_MERCHANDISE_BASIC_delete_merchandise_tag {
  __typename: "merchandise_tag_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_MERCHANDISE_BASIC_insert_merchandise_tag {
  __typename: "merchandise_tag_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_MERCHANDISE_BASIC {
  /**
   * update data of the table: "merchandise"
   */
  update_merchandise: UPDATE_MERCHANDISE_BASIC_update_merchandise | null;
  /**
   * delete data from the table: "merchandise_category"
   */
  delete_merchandise_category: UPDATE_MERCHANDISE_BASIC_delete_merchandise_category | null;
  /**
   * insert data into the table: "merchandise_category"
   */
  insert_merchandise_category: UPDATE_MERCHANDISE_BASIC_insert_merchandise_category | null;
  /**
   * insert data into the table: "tag"
   */
  insert_tag: UPDATE_MERCHANDISE_BASIC_insert_tag | null;
  /**
   * delete data from the table: "merchandise_tag"
   */
  delete_merchandise_tag: UPDATE_MERCHANDISE_BASIC_delete_merchandise_tag | null;
  /**
   * insert data into the table: "merchandise_tag"
   */
  insert_merchandise_tag: UPDATE_MERCHANDISE_BASIC_insert_merchandise_tag | null;
}

export interface UPDATE_MERCHANDISE_BASICVariables {
  merchandiseId: any;
  title?: string | null;
  categories: merchandise_category_insert_input[];
  tags: tag_insert_input[];
  merchandiseTags: merchandise_tag_insert_input[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DELETE_MERCHANDISE
// ====================================================

export interface DELETE_MERCHANDISE_update_merchandise {
  __typename: "merchandise_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface DELETE_MERCHANDISE {
  /**
   * update data of the table: "merchandise"
   */
  update_merchandise: DELETE_MERCHANDISE_update_merchandise | null;
}

export interface DELETE_MERCHANDISEVariables {
  merchandiseId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_MERCHANDISE_DESCRIPTION
// ====================================================

export interface UPDATE_MERCHANDISE_DESCRIPTION_update_merchandise {
  __typename: "merchandise_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_MERCHANDISE_DESCRIPTION {
  /**
   * update data of the table: "merchandise"
   */
  update_merchandise: UPDATE_MERCHANDISE_DESCRIPTION_update_merchandise | null;
}

export interface UPDATE_MERCHANDISE_DESCRIPTIONVariables {
  merchandiseId: any;
  description?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_MERCHANDISE_IMAGES
// ====================================================

export interface UPDATE_MERCHANDISE_IMAGES_delete_merchandise_img {
  __typename: "merchandise_img_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_MERCHANDISE_IMAGES_insert_merchandise_img {
  __typename: "merchandise_img_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_MERCHANDISE_IMAGES {
  /**
   * delete data from the table: "merchandise_img"
   */
  delete_merchandise_img: UPDATE_MERCHANDISE_IMAGES_delete_merchandise_img | null;
  /**
   * insert data into the table: "merchandise_img"
   */
  insert_merchandise_img: UPDATE_MERCHANDISE_IMAGES_insert_merchandise_img | null;
}

export interface UPDATE_MERCHANDISE_IMAGESVariables {
  merchandiseId: any;
  merchandiseImages: merchandise_img_insert_input[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_MERCHANDISE_INTRODUCTION
// ====================================================

export interface UPDATE_MERCHANDISE_INTRODUCTION_update_merchandise {
  __typename: "merchandise_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_MERCHANDISE_INTRODUCTION {
  /**
   * update data of the table: "merchandise"
   */
  update_merchandise: UPDATE_MERCHANDISE_INTRODUCTION_update_merchandise | null;
}

export interface UPDATE_MERCHANDISE_INTRODUCTIONVariables {
  merchandiseId: any;
  abstract?: string | null;
  meta?: string | null;
  memberShopId?: any | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: PUBLISH_MERCHANDISE
// ====================================================

export interface PUBLISH_MERCHANDISE_update_merchandise {
  __typename: "merchandise_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface PUBLISH_MERCHANDISE {
  /**
   * update data of the table: "merchandise"
   */
  update_merchandise: PUBLISH_MERCHANDISE_update_merchandise | null;
}

export interface PUBLISH_MERCHANDISEVariables {
  merchandiseId: any;
  publishedAt?: any | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_MERCHANDISE_SALES
// ====================================================

export interface UPDATE_MERCHANDISE_SALES_update_merchandise {
  __typename: "merchandise_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_MERCHANDISE_SALES {
  /**
   * update data of the table: "merchandise"
   */
  update_merchandise: UPDATE_MERCHANDISE_SALES_update_merchandise | null;
}

export interface UPDATE_MERCHANDISE_SALESVariables {
  merchandiseId: any;
  listPrice?: any | null;
  salePrice?: any | null;
  soldAt?: any | null;
  startedAt?: any | null;
  endedAt?: any | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_SHIPPING_METHODS
// ====================================================

export interface UPDATE_SHIPPING_METHODS_update_member_shop {
  __typename: "member_shop_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_SHIPPING_METHODS {
  /**
   * update data of the table: "member_shop"
   */
  update_member_shop: UPDATE_SHIPPING_METHODS_update_member_shop | null;
}

export interface UPDATE_SHIPPING_METHODSVariables {
  memberShopId: any;
  shippingMethods: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: READ_ALL_NOTIFICATIONS
// ====================================================

export interface READ_ALL_NOTIFICATIONS_update_notification {
  __typename: "notification_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface READ_ALL_NOTIFICATIONS {
  /**
   * update data of the table: "notification"
   */
  update_notification: READ_ALL_NOTIFICATIONS_update_notification | null;
}

export interface READ_ALL_NOTIFICATIONSVariables {
  readAt?: any | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: READ_NOTIFICATION
// ====================================================

export interface READ_NOTIFICATION_update_notification {
  __typename: "notification_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface READ_NOTIFICATION {
  /**
   * update data of the table: "notification"
   */
  update_notification: READ_NOTIFICATION_update_notification | null;
}

export interface READ_NOTIFICATIONVariables {
  notificationId: any;
  readAt?: any | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CREATE_PODCAST_PLAN
// ====================================================

export interface CREATE_PODCAST_PLAN_insert_podcast_plan {
  __typename: "podcast_plan_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface CREATE_PODCAST_PLAN {
  /**
   * insert data into the table: "podcast_plan"
   */
  insert_podcast_plan: CREATE_PODCAST_PLAN_insert_podcast_plan | null;
}

export interface CREATE_PODCAST_PLANVariables {
  publishedAt?: any | null;
  listPrice: any;
  salePrice?: any | null;
  soldAt?: any | null;
  periodAmount: any;
  periodType: string;
  creatorId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_PODCAST_PLAN
// ====================================================

export interface UPDATE_PODCAST_PLAN_update_podcast_plan {
  __typename: "podcast_plan_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_PODCAST_PLAN {
  /**
   * update data of the table: "podcast_plan"
   */
  update_podcast_plan: UPDATE_PODCAST_PLAN_update_podcast_plan | null;
}

export interface UPDATE_PODCAST_PLANVariables {
  podcastPlanId: any;
  publishedAt?: any | null;
  listPrice: any;
  salePrice?: any | null;
  soldAt?: any | null;
  periodAmount: any;
  periodType: string;
  creatorId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CREATE_PODCAST_PROGRAM
// ====================================================

export interface CREATE_PODCAST_PROGRAM_insert_podcast_program_returning {
  __typename: "podcast_program";
  id: any;
}

export interface CREATE_PODCAST_PROGRAM_insert_podcast_program {
  __typename: "podcast_program_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
  /**
   * data of the affected rows by the mutation
   */
  returning: CREATE_PODCAST_PROGRAM_insert_podcast_program_returning[];
}

export interface CREATE_PODCAST_PROGRAM {
  /**
   * insert data into the table: "podcast_program"
   */
  insert_podcast_program: CREATE_PODCAST_PROGRAM_insert_podcast_program | null;
}

export interface CREATE_PODCAST_PROGRAMVariables {
  title: string;
  creatorId: string;
  podcastCategories: podcast_program_category_insert_input[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_PROGRAM_TITLE
// ====================================================

export interface UPDATE_PROGRAM_TITLE_update_program {
  __typename: "program_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_PROGRAM_TITLE {
  /**
   * update data of the table: "program"
   */
  update_program: UPDATE_PROGRAM_TITLE_update_program | null;
}

export interface UPDATE_PROGRAM_TITLEVariables {
  programId: any;
  title?: string | null;
  supportLocales?: any | null;
  isIssuesOpen?: boolean | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_PROGRAM_CATEGORIES
// ====================================================

export interface UPDATE_PROGRAM_CATEGORIES_delete_program_category {
  __typename: "program_category_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_PROGRAM_CATEGORIES_insert_program_category {
  __typename: "program_category_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_PROGRAM_CATEGORIES {
  /**
   * delete data from the table: "program_category"
   */
  delete_program_category: UPDATE_PROGRAM_CATEGORIES_delete_program_category | null;
  /**
   * insert data into the table: "program_category"
   */
  insert_program_category: UPDATE_PROGRAM_CATEGORIES_insert_program_category | null;
}

export interface UPDATE_PROGRAM_CATEGORIESVariables {
  programId: any;
  programCategories: program_category_insert_input[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_PROGRAM_TAGS
// ====================================================

export interface UPDATE_PROGRAM_TAGS_insert_tag {
  __typename: "tag_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_PROGRAM_TAGS_delete_program_tag {
  __typename: "program_tag_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_PROGRAM_TAGS_insert_program_tag {
  __typename: "program_tag_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_PROGRAM_TAGS {
  /**
   * insert data into the table: "tag"
   */
  insert_tag: UPDATE_PROGRAM_TAGS_insert_tag | null;
  /**
   * delete data from the table: "program_tag"
   */
  delete_program_tag: UPDATE_PROGRAM_TAGS_delete_program_tag | null;
  /**
   * insert data into the table: "program_tag"
   */
  insert_program_tag: UPDATE_PROGRAM_TAGS_insert_program_tag | null;
}

export interface UPDATE_PROGRAM_TAGSVariables {
  programId: any;
  tags: tag_insert_input[];
  programTags: program_tag_insert_input[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: PUBLISH_PROGRAM_CONTENT
// ====================================================

export interface PUBLISH_PROGRAM_CONTENT_update_program_content {
  __typename: "program_content_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface PUBLISH_PROGRAM_CONTENT {
  /**
   * update data of the table: "program_content"
   */
  update_program_content: PUBLISH_PROGRAM_CONTENT_update_program_content | null;
}

export interface PUBLISH_PROGRAM_CONTENTVariables {
  programContentId: any;
  publishedAt?: any | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_PROGRAM_CONTENT
// ====================================================

export interface UPDATE_PROGRAM_CONTENT_update_program_content {
  __typename: "program_content_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_PROGRAM_CONTENT_update_program_content_body {
  __typename: "program_content_body_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_PROGRAM_CONTENT {
  /**
   * update data of the table: "program_content"
   */
  update_program_content: UPDATE_PROGRAM_CONTENT_update_program_content | null;
  /**
   * update data of the table: "program_content_body"
   */
  update_program_content_body: UPDATE_PROGRAM_CONTENT_update_program_content_body | null;
}

export interface UPDATE_PROGRAM_CONTENTVariables {
  programContentId: any;
  title?: string | null;
  description?: string | null;
  type?: string | null;
  data?: any | null;
  price?: any | null;
  publishedAt?: any | null;
  duration?: any | null;
  isNotifyUpdate?: boolean | null;
  notifiedAt?: any | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_PROGRAM_CONTENT_PLAN
// ====================================================

export interface UPDATE_PROGRAM_CONTENT_PLAN_delete_program_content_plan {
  __typename: "program_content_plan_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_PROGRAM_CONTENT_PLAN_insert_program_content_plan {
  __typename: "program_content_plan_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_PROGRAM_CONTENT_PLAN {
  /**
   * delete data from the table: "program_content_plan"
   */
  delete_program_content_plan: UPDATE_PROGRAM_CONTENT_PLAN_delete_program_content_plan | null;
  /**
   * insert data into the table: "program_content_plan"
   */
  insert_program_content_plan: UPDATE_PROGRAM_CONTENT_PLAN_insert_program_content_plan | null;
}

export interface UPDATE_PROGRAM_CONTENT_PLANVariables {
  programContentId: any;
  programContentPlans: program_content_plan_insert_input[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DELETE_PROGRAM_CONTENT
// ====================================================

export interface DELETE_PROGRAM_CONTENT_delete_program_content_progress {
  __typename: "program_content_progress_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface DELETE_PROGRAM_CONTENT_delete_program_content_body {
  __typename: "program_content_body_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface DELETE_PROGRAM_CONTENT {
  /**
   * delete data from the table: "program_content_progress"
   */
  delete_program_content_progress: DELETE_PROGRAM_CONTENT_delete_program_content_progress | null;
  /**
   * delete data from the table: "program_content_body"
   */
  delete_program_content_body: DELETE_PROGRAM_CONTENT_delete_program_content_body | null;
}

export interface DELETE_PROGRAM_CONTENTVariables {
  programContentId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: INSERT_PROGRAM_CONTENT_SECTION
// ====================================================

export interface INSERT_PROGRAM_CONTENT_SECTION_insert_program_content_section_returning {
  __typename: "program_content_section";
  id: any;
}

export interface INSERT_PROGRAM_CONTENT_SECTION_insert_program_content_section {
  __typename: "program_content_section_mutation_response";
  /**
   * data of the affected rows by the mutation
   */
  returning: INSERT_PROGRAM_CONTENT_SECTION_insert_program_content_section_returning[];
}

export interface INSERT_PROGRAM_CONTENT_SECTION {
  /**
   * insert data into the table: "program_content_section"
   */
  insert_program_content_section: INSERT_PROGRAM_CONTENT_SECTION_insert_program_content_section | null;
}

export interface INSERT_PROGRAM_CONTENT_SECTIONVariables {
  programId: any;
  title: string;
  position: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DELETE_PROGRAM_CONTENT_SECTION
// ====================================================

export interface DELETE_PROGRAM_CONTENT_SECTION_delete_program_content {
  __typename: "program_content_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface DELETE_PROGRAM_CONTENT_SECTION_delete_program_content_section {
  __typename: "program_content_section_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface DELETE_PROGRAM_CONTENT_SECTION {
  /**
   * delete data from the table: "program_content"
   */
  delete_program_content: DELETE_PROGRAM_CONTENT_SECTION_delete_program_content | null;
  /**
   * delete data from the table: "program_content_section"
   */
  delete_program_content_section: DELETE_PROGRAM_CONTENT_SECTION_delete_program_content_section | null;
}

export interface DELETE_PROGRAM_CONTENT_SECTIONVariables {
  programContentSectionId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: INSERT_PROGRAM_CONTENT
// ====================================================

export interface INSERT_PROGRAM_CONTENT_insert_program_content_returning {
  __typename: "program_content";
  id: any;
}

export interface INSERT_PROGRAM_CONTENT_insert_program_content {
  __typename: "program_content_mutation_response";
  /**
   * data of the affected rows by the mutation
   */
  returning: INSERT_PROGRAM_CONTENT_insert_program_content_returning[];
}

export interface INSERT_PROGRAM_CONTENT {
  /**
   * insert data into the table: "program_content"
   */
  insert_program_content: INSERT_PROGRAM_CONTENT_insert_program_content | null;
}

export interface INSERT_PROGRAM_CONTENTVariables {
  programContentSectionId: any;
  title: string;
  position: number;
  publishedAt?: any | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_PROGRAM_CONTENT_SECTION
// ====================================================

export interface UPDATE_PROGRAM_CONTENT_SECTION_update_program_content_section {
  __typename: "program_content_section_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_PROGRAM_CONTENT_SECTION {
  /**
   * update data of the table: "program_content_section"
   */
  update_program_content_section: UPDATE_PROGRAM_CONTENT_SECTION_update_program_content_section | null;
}

export interface UPDATE_PROGRAM_CONTENT_SECTIONVariables {
  id: any;
  title?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_PROGRAM_IS_DELETED
// ====================================================

export interface UPDATE_PROGRAM_IS_DELETED_update_program {
  __typename: "program_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_PROGRAM_IS_DELETED {
  /**
   * update data of the table: "program"
   */
  update_program: UPDATE_PROGRAM_IS_DELETED_update_program | null;
}

export interface UPDATE_PROGRAM_IS_DELETEDVariables {
  programId?: any | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_PROGRAM_COVER
// ====================================================

export interface UPDATE_PROGRAM_COVER_update_program {
  __typename: "program_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_PROGRAM_COVER {
  /**
   * update data of the table: "program"
   */
  update_program: UPDATE_PROGRAM_COVER_update_program | null;
}

export interface UPDATE_PROGRAM_COVERVariables {
  programId: any;
  coverUrl?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_PROGRAM_INTRO
// ====================================================

export interface UPDATE_PROGRAM_INTRO_update_program {
  __typename: "program_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_PROGRAM_INTRO {
  /**
   * update data of the table: "program"
   */
  update_program: UPDATE_PROGRAM_INTRO_update_program | null;
}

export interface UPDATE_PROGRAM_INTROVariables {
  programId: any;
  abstract?: string | null;
  description?: string | null;
  coverVideoUrl?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_PROGRAM_PERPETUAL_PLAN
// ====================================================

export interface UPDATE_PROGRAM_PERPETUAL_PLAN_update_program {
  __typename: "program_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_PROGRAM_PERPETUAL_PLAN {
  /**
   * update data of the table: "program"
   */
  update_program: UPDATE_PROGRAM_PERPETUAL_PLAN_update_program | null;
}

export interface UPDATE_PROGRAM_PERPETUAL_PLANVariables {
  programId: any;
  listPrice?: any | null;
  salePrice?: any | null;
  soldAt?: any | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPSERT_PROGRAM_PLAN
// ====================================================

export interface UPSERT_PROGRAM_PLAN_insert_program_plan {
  __typename: "program_plan_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPSERT_PROGRAM_PLAN {
  /**
   * insert data into the table: "program_plan"
   */
  insert_program_plan: UPSERT_PROGRAM_PLAN_insert_program_plan | null;
}

export interface UPSERT_PROGRAM_PLANVariables {
  programId: any;
  id: any;
  type: number;
  title: string;
  description: string;
  listPrice: any;
  salePrice?: any | null;
  soldAt?: any | null;
  discountDownPrice: any;
  periodAmount?: any | null;
  periodType?: string | null;
  currencyId: string;
  autoRenewed: boolean;
  publishedAt?: any | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_PROGRAM_PLANS
// ====================================================

export interface GET_PROGRAM_PLANS_program_plan {
  __typename: "program_plan";
  id: any;
  title: string;
}

export interface GET_PROGRAM_PLANS {
  /**
   * fetch data from the table: "program_plan"
   */
  program_plan: GET_PROGRAM_PLANS_program_plan[];
}

export interface GET_PROGRAM_PLANSVariables {
  programId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: PUBLISH_PROGRAM
// ====================================================

export interface PUBLISH_PROGRAM_update_program {
  __typename: "program_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface PUBLISH_PROGRAM {
  /**
   * update data of the table: "program"
   */
  update_program: PUBLISH_PROGRAM_update_program | null;
}

export interface PUBLISH_PROGRAMVariables {
  programId: any;
  publishedAt?: any | null;
  isPrivate?: boolean | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPSERT_PROGRAM_CONTENT_SECTIONS
// ====================================================

export interface UPSERT_PROGRAM_CONTENT_SECTIONS_insert_program_content_section {
  __typename: "program_content_section_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPSERT_PROGRAM_CONTENT_SECTIONS {
  /**
   * insert data into the table: "program_content_section"
   */
  insert_program_content_section: UPSERT_PROGRAM_CONTENT_SECTIONS_insert_program_content_section | null;
}

export interface UPSERT_PROGRAM_CONTENT_SECTIONSVariables {
  programContentSections: program_content_section_insert_input[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPSERT_PROGRAM_CONTENTS
// ====================================================

export interface UPSERT_PROGRAM_CONTENTS_insert_program_content {
  __typename: "program_content_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPSERT_PROGRAM_CONTENTS {
  /**
   * insert data into the table: "program_content"
   */
  insert_program_content: UPSERT_PROGRAM_CONTENTS_insert_program_content | null;
}

export interface UPSERT_PROGRAM_CONTENTSVariables {
  programContents: program_content_insert_input[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_PROGRAM_SUBSCRIPTION_PLAN
// ====================================================

export interface UPDATE_PROGRAM_SUBSCRIPTION_PLAN_update_program_plan {
  __typename: "program_plan_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_PROGRAM_SUBSCRIPTION_PLAN {
  /**
   * update data of the table: "program_plan"
   */
  update_program_plan: UPDATE_PROGRAM_SUBSCRIPTION_PLAN_update_program_plan | null;
}

export interface UPDATE_PROGRAM_SUBSCRIPTION_PLANVariables {
  programPlanId: any;
  listPrice: any;
  salePrice: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_PROGRAM_SUBSCRIPTION_PLAN_COUNT
// ====================================================

export interface GET_PROGRAM_SUBSCRIPTION_PLAN_COUNT_program_plan_enrollment_aggregate_aggregate {
  __typename: "program_plan_enrollment_aggregate_fields";
  count: number | null;
}

export interface GET_PROGRAM_SUBSCRIPTION_PLAN_COUNT_program_plan_enrollment_aggregate {
  __typename: "program_plan_enrollment_aggregate";
  aggregate: GET_PROGRAM_SUBSCRIPTION_PLAN_COUNT_program_plan_enrollment_aggregate_aggregate | null;
}

export interface GET_PROGRAM_SUBSCRIPTION_PLAN_COUNT {
  /**
   * fetch aggregated fields from the table: "program_plan_enrollment"
   */
  program_plan_enrollment_aggregate: GET_PROGRAM_SUBSCRIPTION_PLAN_COUNT_program_plan_enrollment_aggregate;
}

export interface GET_PROGRAM_SUBSCRIPTION_PLAN_COUNTVariables {
  programPlanId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_PROGRAM_PACKAGE_BASIC
// ====================================================

export interface UPDATE_PROGRAM_PACKAGE_BASIC_update_program_package {
  __typename: "program_package_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_PROGRAM_PACKAGE_BASIC {
  /**
   * update data of the table: "program_package"
   */
  update_program_package: UPDATE_PROGRAM_PACKAGE_BASIC_update_program_package | null;
}

export interface UPDATE_PROGRAM_PACKAGE_BASICVariables {
  programPackageId: any;
  title?: string | null;
  coverUrl?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_PROGRAM_PACKAGE_DESCRIPTION
// ====================================================

export interface UPDATE_PROGRAM_PACKAGE_DESCRIPTION_update_program_package {
  __typename: "program_package_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_PROGRAM_PACKAGE_DESCRIPTION {
  /**
   * update data of the table: "program_package"
   */
  update_program_package: UPDATE_PROGRAM_PACKAGE_DESCRIPTION_update_program_package | null;
}

export interface UPDATE_PROGRAM_PACKAGE_DESCRIPTIONVariables {
  description?: string | null;
  programPackageId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: INSERT_PROGRAM_PACKAGE_PLAN
// ====================================================

export interface INSERT_PROGRAM_PACKAGE_PLAN_insert_program_package_plan {
  __typename: "program_package_plan_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface INSERT_PROGRAM_PACKAGE_PLAN {
  /**
   * insert data into the table: "program_package_plan"
   */
  insert_program_package_plan: INSERT_PROGRAM_PACKAGE_PLAN_insert_program_package_plan | null;
}

export interface INSERT_PROGRAM_PACKAGE_PLANVariables {
  data: program_package_plan_insert_input;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_PROGRAM_PACKAGE_PLAN_POSITION_COLLECTION
// ====================================================

export interface UPDATE_PROGRAM_PACKAGE_PLAN_POSITION_COLLECTION_insert_program_package_plan {
  __typename: "program_package_plan_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_PROGRAM_PACKAGE_PLAN_POSITION_COLLECTION {
  /**
   * insert data into the table: "program_package_plan"
   */
  insert_program_package_plan: UPDATE_PROGRAM_PACKAGE_PLAN_POSITION_COLLECTION_insert_program_package_plan | null;
}

export interface UPDATE_PROGRAM_PACKAGE_PLAN_POSITION_COLLECTIONVariables {
  data: program_package_plan_insert_input[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_PROGRAM_PACKAGE_PROGRAM_POSITION_COLLECTION
// ====================================================

export interface UPDATE_PROGRAM_PACKAGE_PROGRAM_POSITION_COLLECTION_insert_program_package_program {
  __typename: "program_package_program_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_PROGRAM_PACKAGE_PROGRAM_POSITION_COLLECTION {
  /**
   * insert data into the table: "program_package_program"
   */
  insert_program_package_program: UPDATE_PROGRAM_PACKAGE_PROGRAM_POSITION_COLLECTION_insert_program_package_program | null;
}

export interface UPDATE_PROGRAM_PACKAGE_PROGRAM_POSITION_COLLECTIONVariables {
  data: program_package_program_insert_input[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_AVAILABLE_PROGRAM_COLLECTION
// ====================================================

export interface GET_AVAILABLE_PROGRAM_COLLECTION_program {
  __typename: "program";
  id: any;
  title: string;
  is_subscription: boolean;
}

export interface GET_AVAILABLE_PROGRAM_COLLECTION {
  /**
   * fetch data from the table: "program"
   */
  program: GET_AVAILABLE_PROGRAM_COLLECTION_program[];
}

export interface GET_AVAILABLE_PROGRAM_COLLECTIONVariables {
  appId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: INSERT_PROGRAM_PACKAGE_PROGRAM
// ====================================================

export interface INSERT_PROGRAM_PACKAGE_PROGRAM_insert_program_package_program {
  __typename: "program_package_program_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface INSERT_PROGRAM_PACKAGE_PROGRAM {
  /**
   * insert data into the table: "program_package_program"
   */
  insert_program_package_program: INSERT_PROGRAM_PACKAGE_PROGRAM_insert_program_package_program | null;
}

export interface INSERT_PROGRAM_PACKAGE_PROGRAMVariables {
  programs: program_package_program_insert_input[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: PROGRAM_PACKAGE_PUBLISH
// ====================================================

export interface PROGRAM_PACKAGE_PUBLISH_update_program_package {
  __typename: "program_package_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface PROGRAM_PACKAGE_PUBLISH {
  /**
   * update data of the table: "program_package"
   */
  update_program_package: PROGRAM_PACKAGE_PUBLISH_update_program_package | null;
}

export interface PROGRAM_PACKAGE_PUBLISHVariables {
  id: any;
  publishedAt?: any | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_ORDERS
// ====================================================

export interface GET_ORDERS_order_log_aggregate_aggregate {
  __typename: "order_log_aggregate_fields";
  count: number | null;
}

export interface GET_ORDERS_order_log_aggregate {
  __typename: "order_log_aggregate";
  aggregate: GET_ORDERS_order_log_aggregate_aggregate | null;
}

export interface GET_ORDERS_order_log_order_products_product {
  __typename: "product";
  /**
   * {type}_{target}, ex: Program_123-456, ProgramPlan_123-456
   */
  id: string;
  /**
   * Program / ProgramPlan / ProgramContent / ProgramPackagePlan / ActivityTicket / Card / Merchandise / ProjectPlan / PodcastProgram / PodcastPlan / AppointmentServicePlan
   */
  type: string;
}

export interface GET_ORDERS_order_log_order_products {
  __typename: "order_product";
  id: any;
  name: string;
  price: any;
  started_at: any | null;
  ended_at: any | null;
  /**
   * An object relationship
   */
  product: GET_ORDERS_order_log_order_products_product;
  options: any | null;
}

export interface GET_ORDERS_order_log_order_discounts {
  __typename: "order_discount";
  id: any;
  name: string;
  description: string | null;
  price: any;
}

export interface GET_ORDERS_order_log_member {
  __typename: "member";
  name: string;
  email: string;
}

export interface GET_ORDERS_order_log {
  __typename: "order_log";
  id: string;
  created_at: any;
  status: string;
  /**
   * An array relationship
   */
  order_products: GET_ORDERS_order_log_order_products[];
  /**
   * An array relationship
   */
  order_discounts: GET_ORDERS_order_log_order_discounts[];
  /**
   * An object relationship
   */
  member: GET_ORDERS_order_log_member;
}

export interface GET_ORDERS {
  /**
   * fetch aggregated fields from the table: "order_log"
   */
  order_log_aggregate: GET_ORDERS_order_log_aggregate;
  /**
   * fetch data from the table: "order_log"
   */
  order_log: GET_ORDERS_order_log[];
}

export interface GET_ORDERSVariables {
  offset?: number | null;
  limit?: number | null;
  status?: string | null;
  orderIdLike?: string | null;
  memberNameAndEmailLike?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_PRODUCT_OWNER_ORDERS
// ====================================================

export interface GET_PRODUCT_OWNER_ORDERS_order_product_order_log {
  __typename: "order_log";
  id: string;
  created_at: any;
  member_id: string;
}

export interface GET_PRODUCT_OWNER_ORDERS_order_product {
  __typename: "order_product";
  id: any;
  name: string;
  price: any;
  ended_at: any | null;
  /**
   * An object relationship
   */
  order_log: GET_PRODUCT_OWNER_ORDERS_order_product_order_log;
}

export interface GET_PRODUCT_OWNER_ORDERS {
  /**
   * fetch data from the table: "order_product"
   */
  order_product: GET_PRODUCT_OWNER_ORDERS_order_product[];
}

export interface GET_PRODUCT_OWNER_ORDERSVariables {
  memberId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_TOTAL_ORDER_AMOUNT
// ====================================================

export interface GET_TOTAL_ORDER_AMOUNT_order_product_aggregate_aggregate_sum {
  __typename: "order_product_sum_fields";
  price: any | null;
}

export interface GET_TOTAL_ORDER_AMOUNT_order_product_aggregate_aggregate {
  __typename: "order_product_aggregate_fields";
  sum: GET_TOTAL_ORDER_AMOUNT_order_product_aggregate_aggregate_sum | null;
}

export interface GET_TOTAL_ORDER_AMOUNT_order_product_aggregate {
  __typename: "order_product_aggregate";
  aggregate: GET_TOTAL_ORDER_AMOUNT_order_product_aggregate_aggregate | null;
}

export interface GET_TOTAL_ORDER_AMOUNT_order_discount_aggregate_aggregate_sum {
  __typename: "order_discount_sum_fields";
  price: any | null;
}

export interface GET_TOTAL_ORDER_AMOUNT_order_discount_aggregate_aggregate {
  __typename: "order_discount_aggregate_fields";
  sum: GET_TOTAL_ORDER_AMOUNT_order_discount_aggregate_aggregate_sum | null;
}

export interface GET_TOTAL_ORDER_AMOUNT_order_discount_aggregate {
  __typename: "order_discount_aggregate";
  aggregate: GET_TOTAL_ORDER_AMOUNT_order_discount_aggregate_aggregate | null;
}

export interface GET_TOTAL_ORDER_AMOUNT {
  /**
   * fetch aggregated fields from the table: "order_product"
   */
  order_product_aggregate: GET_TOTAL_ORDER_AMOUNT_order_product_aggregate;
  /**
   * fetch aggregated fields from the table: "order_discount"
   */
  order_discount_aggregate: GET_TOTAL_ORDER_AMOUNT_order_discount_aggregate;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_PRODUCT_OWNER_TOTAL_AMOUNT
// ====================================================

export interface GET_PRODUCT_OWNER_TOTAL_AMOUNT_order_product_aggregate_aggregate_sum {
  __typename: "order_product_sum_fields";
  price: any | null;
}

export interface GET_PRODUCT_OWNER_TOTAL_AMOUNT_order_product_aggregate_aggregate {
  __typename: "order_product_aggregate_fields";
  sum: GET_PRODUCT_OWNER_TOTAL_AMOUNT_order_product_aggregate_aggregate_sum | null;
}

export interface GET_PRODUCT_OWNER_TOTAL_AMOUNT_order_product_aggregate {
  __typename: "order_product_aggregate";
  aggregate: GET_PRODUCT_OWNER_TOTAL_AMOUNT_order_product_aggregate_aggregate | null;
}

export interface GET_PRODUCT_OWNER_TOTAL_AMOUNT_order_discount_aggregate_aggregate_sum {
  __typename: "order_discount_sum_fields";
  price: any | null;
}

export interface GET_PRODUCT_OWNER_TOTAL_AMOUNT_order_discount_aggregate_aggregate {
  __typename: "order_discount_aggregate_fields";
  sum: GET_PRODUCT_OWNER_TOTAL_AMOUNT_order_discount_aggregate_aggregate_sum | null;
}

export interface GET_PRODUCT_OWNER_TOTAL_AMOUNT_order_discount_aggregate {
  __typename: "order_discount_aggregate";
  aggregate: GET_PRODUCT_OWNER_TOTAL_AMOUNT_order_discount_aggregate_aggregate | null;
}

export interface GET_PRODUCT_OWNER_TOTAL_AMOUNT {
  /**
   * fetch aggregated fields from the table: "order_product"
   */
  order_product_aggregate: GET_PRODUCT_OWNER_TOTAL_AMOUNT_order_product_aggregate;
  /**
   * fetch aggregated fields from the table: "order_discount"
   */
  order_discount_aggregate: GET_PRODUCT_OWNER_TOTAL_AMOUNT_order_discount_aggregate;
}

export interface GET_PRODUCT_OWNER_TOTAL_AMOUNTVariables {
  memberId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_SUBSCRIPTION_CANCELED
// ====================================================

export interface UPDATE_SUBSCRIPTION_CANCELED_update_order_product {
  __typename: "order_product_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_SUBSCRIPTION_CANCELED {
  /**
   * update data of the table: "order_product"
   */
  update_order_product: UPDATE_SUBSCRIPTION_CANCELED_update_order_product | null;
}

export interface UPDATE_SUBSCRIPTION_CANCELEDVariables {
  orderProductId?: any | null;
  options?: any | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_DELIVER_INFO
// ====================================================

export interface UPDATE_DELIVER_INFO_update_order_log {
  __typename: "order_log_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_DELIVER_INFO {
  /**
   * update data of the table: "order_log"
   */
  update_order_log: UPDATE_DELIVER_INFO_update_order_log | null;
}

export interface UPDATE_DELIVER_INFOVariables {
  deliverMessage?: string | null;
  deliveredAt?: any | null;
  orderLogId?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_APPOINTMENT_PLAN_TITLE
// ====================================================

export interface UPDATE_APPOINTMENT_PLAN_TITLE_update_appointment_plan {
  __typename: "appointment_plan_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_APPOINTMENT_PLAN_TITLE {
  /**
   * update data of the table: "appointment_plan"
   */
  update_appointment_plan: UPDATE_APPOINTMENT_PLAN_TITLE_update_appointment_plan | null;
}

export interface UPDATE_APPOINTMENT_PLAN_TITLEVariables {
  appointmentPlanId: any;
  title: string;
  phone: string;
  supportLocales?: any | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_APPOINTMENT_PLAN_COLLECTION_ADMIN
// ====================================================

export interface GET_APPOINTMENT_PLAN_COLLECTION_ADMIN_appointment_plan_creator {
  __typename: "member_public";
  id: string | null;
  picture_url: string | null;
  name: string | null;
  username: string | null;
}

export interface GET_APPOINTMENT_PLAN_COLLECTION_ADMIN_appointment_plan_appointment_enrollments_aggregate_aggregate {
  __typename: "appointment_enrollment_aggregate_fields";
  count: number | null;
}

export interface GET_APPOINTMENT_PLAN_COLLECTION_ADMIN_appointment_plan_appointment_enrollments_aggregate {
  __typename: "appointment_enrollment_aggregate";
  aggregate: GET_APPOINTMENT_PLAN_COLLECTION_ADMIN_appointment_plan_appointment_enrollments_aggregate_aggregate | null;
}

export interface GET_APPOINTMENT_PLAN_COLLECTION_ADMIN_appointment_plan {
  __typename: "appointment_plan";
  id: any;
  /**
   * An object relationship
   */
  creator: GET_APPOINTMENT_PLAN_COLLECTION_ADMIN_appointment_plan_creator | null;
  title: string;
  /**
   * minutes
   */
  duration: any;
  price: any;
  published_at: any | null;
  /**
   * An aggregated array relationship
   */
  appointment_enrollments_aggregate: GET_APPOINTMENT_PLAN_COLLECTION_ADMIN_appointment_plan_appointment_enrollments_aggregate;
}

export interface GET_APPOINTMENT_PLAN_COLLECTION_ADMIN {
  /**
   * fetch data from the table: "appointment_plan"
   */
  appointment_plan: GET_APPOINTMENT_PLAN_COLLECTION_ADMIN_appointment_plan[];
}

export interface GET_APPOINTMENT_PLAN_COLLECTION_ADMINVariables {
  creatorId?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CREATE_APPOINTMENT_PLAN
// ====================================================

export interface CREATE_APPOINTMENT_PLAN_insert_appointment_plan_returning {
  __typename: "appointment_plan";
  id: any;
}

export interface CREATE_APPOINTMENT_PLAN_insert_appointment_plan {
  __typename: "appointment_plan_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
  /**
   * data of the affected rows by the mutation
   */
  returning: CREATE_APPOINTMENT_PLAN_insert_appointment_plan_returning[];
}

export interface CREATE_APPOINTMENT_PLAN {
  /**
   * insert data into the table: "appointment_plan"
   */
  insert_appointment_plan: CREATE_APPOINTMENT_PLAN_insert_appointment_plan | null;
}

export interface CREATE_APPOINTMENT_PLANVariables {
  title: string;
  creatorId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_APPOINTMENT_PLAN_DESCRIPTION
// ====================================================

export interface UPDATE_APPOINTMENT_PLAN_DESCRIPTION_update_appointment_plan {
  __typename: "appointment_plan_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_APPOINTMENT_PLAN_DESCRIPTION {
  /**
   * update data of the table: "appointment_plan"
   */
  update_appointment_plan: UPDATE_APPOINTMENT_PLAN_DESCRIPTION_update_appointment_plan | null;
}

export interface UPDATE_APPOINTMENT_PLAN_DESCRIPTIONVariables {
  appointmentPlanId: any;
  description: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: PUBLISH_APPOINTMENT_PLAN
// ====================================================

export interface PUBLISH_APPOINTMENT_PLAN_update_appointment_plan {
  __typename: "appointment_plan_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface PUBLISH_APPOINTMENT_PLAN {
  /**
   * update data of the table: "appointment_plan"
   */
  update_appointment_plan: PUBLISH_APPOINTMENT_PLAN_update_appointment_plan | null;
}

export interface PUBLISH_APPOINTMENT_PLANVariables {
  appointmentPlanId: any;
  publishedAt?: any | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_APPOINTMENT_PLAN_SALE
// ====================================================

export interface UPDATE_APPOINTMENT_PLAN_SALE_update_appointment_plan {
  __typename: "appointment_plan_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_APPOINTMENT_PLAN_SALE {
  /**
   * update data of the table: "appointment_plan"
   */
  update_appointment_plan: UPDATE_APPOINTMENT_PLAN_SALE_update_appointment_plan | null;
}

export interface UPDATE_APPOINTMENT_PLAN_SALEVariables {
  appointmentPlanId: any;
  duration?: any | null;
  listPrice?: any | null;
  currencyId?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_APPOINTMENT_SCHEDULE
// ====================================================

export interface UPDATE_APPOINTMENT_SCHEDULE_update_appointment_schedule {
  __typename: "appointment_schedule_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_APPOINTMENT_SCHEDULE {
  /**
   * update data of the table: "appointment_schedule"
   */
  update_appointment_schedule: UPDATE_APPOINTMENT_SCHEDULE_update_appointment_schedule | null;
}

export interface UPDATE_APPOINTMENT_SCHEDULEVariables {
  appointmentScheduleId: any;
  excludes?: any | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DELETE_APPOINTMENT_SCHEDULE
// ====================================================

export interface DELETE_APPOINTMENT_SCHEDULE_delete_appointment_schedule {
  __typename: "appointment_schedule_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface DELETE_APPOINTMENT_SCHEDULE {
  /**
   * delete data from the table: "appointment_schedule"
   */
  delete_appointment_schedule: DELETE_APPOINTMENT_SCHEDULE_delete_appointment_schedule | null;
}

export interface DELETE_APPOINTMENT_SCHEDULEVariables {
  appointmentScheduleId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CREATE_APPOINTMENT_SCHEDULE
// ====================================================

export interface CREATE_APPOINTMENT_SCHEDULE_insert_appointment_schedule {
  __typename: "appointment_schedule_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface CREATE_APPOINTMENT_SCHEDULE {
  /**
   * insert data into the table: "appointment_schedule"
   */
  insert_appointment_schedule: CREATE_APPOINTMENT_SCHEDULE_insert_appointment_schedule | null;
}

export interface CREATE_APPOINTMENT_SCHEDULEVariables {
  appointmentPlanId: any;
  startedAt: any;
  intervalType?: string | null;
  intervalAmount?: number | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_ALLTYPE_PRODUCT_COLLECTION
// ====================================================

export interface GET_ALLTYPE_PRODUCT_COLLECTION_program {
  __typename: "program";
  id: any;
  title: string;
  published_at: any | null;
}

export interface GET_ALLTYPE_PRODUCT_COLLECTION_card {
  __typename: "card";
  id: any;
  title: string;
}

export interface GET_ALLTYPE_PRODUCT_COLLECTION_activity_ticket_activity {
  __typename: "activity";
  id: any;
  title: string;
}

export interface GET_ALLTYPE_PRODUCT_COLLECTION_activity_ticket {
  __typename: "activity_ticket";
  id: any;
  title: string;
  /**
   * An object relationship
   */
  activity: GET_ALLTYPE_PRODUCT_COLLECTION_activity_ticket_activity;
}

export interface GET_ALLTYPE_PRODUCT_COLLECTION_program_package_program_package_plans {
  __typename: "program_package_plan";
  id: any;
  title: string;
  published_at: any | null;
}

export interface GET_ALLTYPE_PRODUCT_COLLECTION_program_package {
  __typename: "program_package";
  id: any;
  title: string;
  published_at: any | null;
  /**
   * An array relationship
   */
  program_package_plans: GET_ALLTYPE_PRODUCT_COLLECTION_program_package_program_package_plans[];
}

export interface GET_ALLTYPE_PRODUCT_COLLECTION {
  /**
   * fetch data from the table: "program"
   */
  program: GET_ALLTYPE_PRODUCT_COLLECTION_program[];
  /**
   * fetch data from the table: "card"
   */
  card: GET_ALLTYPE_PRODUCT_COLLECTION_card[];
  /**
   * fetch data from the table: "activity_ticket"
   */
  activity_ticket: GET_ALLTYPE_PRODUCT_COLLECTION_activity_ticket[];
  /**
   * fetch data from the table: "program_package"
   */
  program_package: GET_ALLTYPE_PRODUCT_COLLECTION_program_package[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_PODCAST_PROGRAM_BASIC
// ====================================================

export interface UPDATE_PODCAST_PROGRAM_BASIC_update_podcast_program {
  __typename: "podcast_program_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_PODCAST_PROGRAM_BASIC_delete_podcast_program_category {
  __typename: "podcast_program_category_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_PODCAST_PROGRAM_BASIC_insert_podcast_program_category {
  __typename: "podcast_program_category_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_PODCAST_PROGRAM_BASIC_insert_tag {
  __typename: "tag_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_PODCAST_PROGRAM_BASIC_delete_podcast_program_tag {
  __typename: "podcast_program_tag_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_PODCAST_PROGRAM_BASIC_insert_podcast_program_tag {
  __typename: "podcast_program_tag_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_PODCAST_PROGRAM_BASIC {
  /**
   * update data of the table: "podcast_program"
   */
  update_podcast_program: UPDATE_PODCAST_PROGRAM_BASIC_update_podcast_program | null;
  /**
   * delete data from the table: "podcast_program_category"
   */
  delete_podcast_program_category: UPDATE_PODCAST_PROGRAM_BASIC_delete_podcast_program_category | null;
  /**
   * insert data into the table: "podcast_program_category"
   */
  insert_podcast_program_category: UPDATE_PODCAST_PROGRAM_BASIC_insert_podcast_program_category | null;
  /**
   * insert data into the table: "tag"
   */
  insert_tag: UPDATE_PODCAST_PROGRAM_BASIC_insert_tag | null;
  /**
   * delete data from the table: "podcast_program_tag"
   */
  delete_podcast_program_tag: UPDATE_PODCAST_PROGRAM_BASIC_delete_podcast_program_tag | null;
  /**
   * insert data into the table: "podcast_program_tag"
   */
  insert_podcast_program_tag: UPDATE_PODCAST_PROGRAM_BASIC_insert_podcast_program_tag | null;
}

export interface UPDATE_PODCAST_PROGRAM_BASICVariables {
  podcastProgramId: any;
  title?: string | null;
  podcastCategories: podcast_program_category_insert_input[];
  tags: tag_insert_input[];
  podcastProgramTags: podcast_program_tag_insert_input[];
  updatedAt: any;
  supportLocales?: any | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_PODCAST_PROGRAM_BODY
// ====================================================

export interface UPDATE_PODCAST_PROGRAM_BODY_update_podcast_program {
  __typename: "podcast_program_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_PODCAST_PROGRAM_BODY_update_podcast_program_body {
  __typename: "podcast_program_body_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_PODCAST_PROGRAM_BODY {
  /**
   * update data of the table: "podcast_program"
   */
  update_podcast_program: UPDATE_PODCAST_PROGRAM_BODY_update_podcast_program | null;
  /**
   * update data of the table: "podcast_program_body"
   */
  update_podcast_program_body: UPDATE_PODCAST_PROGRAM_BODY_update_podcast_program_body | null;
}

export interface UPDATE_PODCAST_PROGRAM_BODYVariables {
  podcastProgramId: any;
  description?: string | null;
  duration?: any | null;
  updatedAt: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_PODCAST_PROGRAM_ROLE
// ====================================================

export interface UPDATE_PODCAST_PROGRAM_ROLE_update_podcast_program {
  __typename: "podcast_program_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_PODCAST_PROGRAM_ROLE_delete_podcast_program_role {
  __typename: "podcast_program_role_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_PODCAST_PROGRAM_ROLE_insert_podcast_program_role {
  __typename: "podcast_program_role_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_PODCAST_PROGRAM_ROLE {
  /**
   * update data of the table: "podcast_program"
   */
  update_podcast_program: UPDATE_PODCAST_PROGRAM_ROLE_update_podcast_program | null;
  /**
   * delete data from the table: "podcast_program_role"
   */
  delete_podcast_program_role: UPDATE_PODCAST_PROGRAM_ROLE_delete_podcast_program_role | null;
  /**
   * insert data into the table: "podcast_program_role"
   */
  insert_podcast_program_role: UPDATE_PODCAST_PROGRAM_ROLE_insert_podcast_program_role | null;
}

export interface UPDATE_PODCAST_PROGRAM_ROLEVariables {
  podcastProgramId: any;
  podcastProgramRoles: podcast_program_role_insert_input[];
  updatedAt: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_PODCAST_PROGRAM_INTRO
// ====================================================

export interface UPDATE_PODCAST_PROGRAM_INTRO_update_podcast_program {
  __typename: "podcast_program_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_PODCAST_PROGRAM_INTRO {
  /**
   * update data of the table: "podcast_program"
   */
  update_podcast_program: UPDATE_PODCAST_PROGRAM_INTRO_update_podcast_program | null;
}

export interface UPDATE_PODCAST_PROGRAM_INTROVariables {
  podcastProgramId: any;
  coverUrl?: string | null;
  abstract?: string | null;
  updatedAt: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_PODCAST_PROGRAM_PLAN
// ====================================================

export interface UPDATE_PODCAST_PROGRAM_PLAN_update_podcast_program {
  __typename: "podcast_program_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_PODCAST_PROGRAM_PLAN {
  /**
   * update data of the table: "podcast_program"
   */
  update_podcast_program: UPDATE_PODCAST_PROGRAM_PLAN_update_podcast_program | null;
}

export interface UPDATE_PODCAST_PROGRAM_PLANVariables {
  podcastProgramId: any;
  listPrice?: any | null;
  salePrice?: any | null;
  soldAt?: any | null;
  updatedAt: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: PUBLISH_PODCAST_PROGRAM
// ====================================================

export interface PUBLISH_PODCAST_PROGRAM_update_podcast_program {
  __typename: "podcast_program_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface PUBLISH_PODCAST_PROGRAM {
  /**
   * update data of the table: "podcast_program"
   */
  update_podcast_program: PUBLISH_PODCAST_PROGRAM_update_podcast_program | null;
}

export interface PUBLISH_PODCAST_PROGRAMVariables {
  podcastProgramId: any;
  publishedAt?: any | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_PROGRAM_ROLE
// ====================================================

export interface UPDATE_PROGRAM_ROLE_delete_program_role {
  __typename: "program_role_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_PROGRAM_ROLE_insert_program_role {
  __typename: "program_role_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_PROGRAM_ROLE {
  /**
   * delete data from the table: "program_role"
   */
  delete_program_role: UPDATE_PROGRAM_ROLE_delete_program_role | null;
  /**
   * insert data into the table: "program_role"
   */
  insert_program_role: UPDATE_PROGRAM_ROLE_insert_program_role | null;
}

export interface UPDATE_PROGRAM_ROLEVariables {
  programId: any;
  programRoles: program_role_insert_input[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DELETE_PROGRAM_ROLE
// ====================================================

export interface DELETE_PROGRAM_ROLE_delete_program_role {
  __typename: "program_role_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface DELETE_PROGRAM_ROLE {
  /**
   * delete data from the table: "program_role"
   */
  delete_program_role: DELETE_PROGRAM_ROLE_delete_program_role | null;
}

export interface DELETE_PROGRAM_ROLEVariables {
  programId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_LOGINED_AT
// ====================================================

export interface UPDATE_LOGINED_AT_update_member {
  __typename: "member_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_LOGINED_AT {
  /**
   * update data of the table: "member"
   */
  update_member: UPDATE_LOGINED_AT_update_member | null;
}

export interface UPDATE_LOGINED_ATVariables {
  memberId: string;
  loginedAt?: any | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_APPLICATION
// ====================================================

export interface GET_APPLICATION_currency {
  __typename: "currency";
  id: string;
  name: string;
  label: string;
  unit: string;
}

export interface GET_APPLICATION_app_admin_by_pk_app_app_modules {
  __typename: "app_module";
  id: any;
  /**
   * activity | appointment | blog | invoice | learning_statistics | locale | member_card | merchandise | podcast | program_package | qrcode | social_connect | tempo_delivery | voucher
   */
  module_id: string;
}

export interface GET_APPLICATION_app_admin_by_pk_app_app_settings {
  __typename: "app_setting";
  key: string;
  value: string;
}

export interface GET_APPLICATION_app_admin_by_pk_app {
  __typename: "app";
  id: string;
  name: string | null;
  title: string | null;
  description: string | null;
  vimeo_project_id: string | null;
  /**
   * An array relationship
   */
  app_modules: GET_APPLICATION_app_admin_by_pk_app_app_modules[];
  /**
   * An array relationship
   */
  app_settings: GET_APPLICATION_app_admin_by_pk_app_app_settings[];
}

export interface GET_APPLICATION_app_admin_by_pk {
  __typename: "app_admin";
  /**
   * An object relationship
   */
  app: GET_APPLICATION_app_admin_by_pk_app;
}

export interface GET_APPLICATION {
  /**
   * fetch data from the table: "currency"
   */
  currency: GET_APPLICATION_currency[];
  /**
   * fetch data from the table: "app_admin" using primary key columns
   */
  app_admin_by_pk: GET_APPLICATION_app_admin_by_pk | null;
}

export interface GET_APPLICATIONVariables {
  host: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_APPOINTMENT_PLAN_ADMIN
// ====================================================

export interface GET_APPOINTMENT_PLAN_ADMIN_appointment_plan_by_pk_appointment_schedules {
  __typename: "appointment_schedule";
  id: any;
  /**
   * ISO8601[], ex: ["2019-01-01T12:34:56+0800"]
   */
  excludes: any;
}

export interface GET_APPOINTMENT_PLAN_ADMIN_appointment_plan_by_pk_appointment_periods_appointment_schedule {
  __typename: "appointment_schedule";
  id: any;
  interval_amount: number | null;
  /**
   * Y / M / W / D
   */
  interval_type: string | null;
}

export interface GET_APPOINTMENT_PLAN_ADMIN_appointment_plan_by_pk_appointment_periods {
  __typename: "appointment_period";
  /**
   * An object relationship
   */
  appointment_schedule: GET_APPOINTMENT_PLAN_ADMIN_appointment_plan_by_pk_appointment_periods_appointment_schedule | null;
  started_at: any | null;
  ended_at: any | null;
  booked: boolean | null;
  available: boolean | null;
}

export interface GET_APPOINTMENT_PLAN_ADMIN_appointment_plan_by_pk_appointment_enrollments_aggregate_aggregate {
  __typename: "appointment_enrollment_aggregate_fields";
  count: number | null;
}

export interface GET_APPOINTMENT_PLAN_ADMIN_appointment_plan_by_pk_appointment_enrollments_aggregate {
  __typename: "appointment_enrollment_aggregate";
  aggregate: GET_APPOINTMENT_PLAN_ADMIN_appointment_plan_by_pk_appointment_enrollments_aggregate_aggregate | null;
}

export interface GET_APPOINTMENT_PLAN_ADMIN_appointment_plan_by_pk {
  __typename: "appointment_plan";
  id: any;
  title: string;
  phone: string | null;
  description: string | null;
  /**
   * minutes
   */
  duration: any;
  price: any;
  published_at: any | null;
  support_locales: any | null;
  currency_id: string;
  /**
   * An array relationship
   */
  appointment_schedules: GET_APPOINTMENT_PLAN_ADMIN_appointment_plan_by_pk_appointment_schedules[];
  /**
   * An array relationship
   */
  appointment_periods: GET_APPOINTMENT_PLAN_ADMIN_appointment_plan_by_pk_appointment_periods[];
  /**
   * An aggregated array relationship
   */
  appointment_enrollments_aggregate: GET_APPOINTMENT_PLAN_ADMIN_appointment_plan_by_pk_appointment_enrollments_aggregate;
}

export interface GET_APPOINTMENT_PLAN_ADMIN {
  /**
   * fetch data from the table: "appointment_plan" using primary key columns
   */
  appointment_plan_by_pk: GET_APPOINTMENT_PLAN_ADMIN_appointment_plan_by_pk | null;
}

export interface GET_APPOINTMENT_PLAN_ADMINVariables {
  appointmentPlanId: any;
  now?: any | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_ACTIVITY_COLLECTION_ADMIN
// ====================================================

export interface GET_ACTIVITY_COLLECTION_ADMIN_activity_activity_enrollments_aggregate_aggregate {
  __typename: "activity_enrollment_aggregate_fields";
  count: number | null;
}

export interface GET_ACTIVITY_COLLECTION_ADMIN_activity_activity_enrollments_aggregate {
  __typename: "activity_enrollment_aggregate";
  aggregate: GET_ACTIVITY_COLLECTION_ADMIN_activity_activity_enrollments_aggregate_aggregate | null;
}

export interface GET_ACTIVITY_COLLECTION_ADMIN_activity_activity_sessions_aggregate_aggregate_min {
  __typename: "activity_session_min_fields";
  started_at: any | null;
}

export interface GET_ACTIVITY_COLLECTION_ADMIN_activity_activity_sessions_aggregate_aggregate_max {
  __typename: "activity_session_max_fields";
  ended_at: any | null;
}

export interface GET_ACTIVITY_COLLECTION_ADMIN_activity_activity_sessions_aggregate_aggregate {
  __typename: "activity_session_aggregate_fields";
  min: GET_ACTIVITY_COLLECTION_ADMIN_activity_activity_sessions_aggregate_aggregate_min | null;
  max: GET_ACTIVITY_COLLECTION_ADMIN_activity_activity_sessions_aggregate_aggregate_max | null;
}

export interface GET_ACTIVITY_COLLECTION_ADMIN_activity_activity_sessions_aggregate {
  __typename: "activity_session_aggregate";
  aggregate: GET_ACTIVITY_COLLECTION_ADMIN_activity_activity_sessions_aggregate_aggregate | null;
}

export interface GET_ACTIVITY_COLLECTION_ADMIN_activity {
  __typename: "activity";
  id: any;
  cover_url: string | null;
  title: string;
  published_at: any | null;
  /**
   * An aggregated array relationship
   */
  activity_enrollments_aggregate: GET_ACTIVITY_COLLECTION_ADMIN_activity_activity_enrollments_aggregate;
  /**
   * An aggregated array relationship
   */
  activity_sessions_aggregate: GET_ACTIVITY_COLLECTION_ADMIN_activity_activity_sessions_aggregate;
}

export interface GET_ACTIVITY_COLLECTION_ADMIN {
  /**
   * fetch data from the table: "activity"
   */
  activity: GET_ACTIVITY_COLLECTION_ADMIN_activity[];
}

export interface GET_ACTIVITY_COLLECTION_ADMINVariables {
  memberId?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: INSERT_ACTIVITY
// ====================================================

export interface INSERT_ACTIVITY_insert_activity_returning {
  __typename: "activity";
  id: any;
}

export interface INSERT_ACTIVITY_insert_activity {
  __typename: "activity_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
  /**
   * data of the affected rows by the mutation
   */
  returning: INSERT_ACTIVITY_insert_activity_returning[];
}

export interface INSERT_ACTIVITY {
  /**
   * insert data into the table: "activity"
   */
  insert_activity: INSERT_ACTIVITY_insert_activity | null;
}

export interface INSERT_ACTIVITYVariables {
  title: string;
  memberId: string;
  appId: string;
  activityCategories: activity_category_insert_input[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_ACTIVITY_ADMIN
// ====================================================

export interface GET_ACTIVITY_ADMIN_activity_by_pk_activity_categories_category {
  __typename: "category";
  id: string;
  name: string;
}

export interface GET_ACTIVITY_ADMIN_activity_by_pk_activity_categories {
  __typename: "activity_category";
  id: any;
  /**
   * An object relationship
   */
  category: GET_ACTIVITY_ADMIN_activity_by_pk_activity_categories_category;
}

export interface GET_ACTIVITY_ADMIN_activity_by_pk_activity_tickets_activity_session_tickets_activity_session {
  __typename: "activity_session";
  id: any;
  title: string;
}

export interface GET_ACTIVITY_ADMIN_activity_by_pk_activity_tickets_activity_session_tickets {
  __typename: "activity_session_ticket";
  id: any;
  /**
   * An object relationship
   */
  activity_session: GET_ACTIVITY_ADMIN_activity_by_pk_activity_tickets_activity_session_tickets_activity_session;
}

export interface GET_ACTIVITY_ADMIN_activity_by_pk_activity_tickets_activity_ticket_enrollments_aggregate_aggregate {
  __typename: "activity_ticket_enrollment_aggregate_fields";
  count: number | null;
}

export interface GET_ACTIVITY_ADMIN_activity_by_pk_activity_tickets_activity_ticket_enrollments_aggregate {
  __typename: "activity_ticket_enrollment_aggregate";
  aggregate: GET_ACTIVITY_ADMIN_activity_by_pk_activity_tickets_activity_ticket_enrollments_aggregate_aggregate | null;
}

export interface GET_ACTIVITY_ADMIN_activity_by_pk_activity_tickets {
  __typename: "activity_ticket";
  id: any;
  title: string;
  started_at: any;
  ended_at: any;
  price: any;
  /**
   * unlimited as 99999999
   */
  count: number;
  description: string | null;
  is_published: boolean;
  /**
   * An array relationship
   */
  activity_session_tickets: GET_ACTIVITY_ADMIN_activity_by_pk_activity_tickets_activity_session_tickets[];
  /**
   * An aggregated array relationship
   */
  activity_ticket_enrollments_aggregate: GET_ACTIVITY_ADMIN_activity_by_pk_activity_tickets_activity_ticket_enrollments_aggregate;
}

export interface GET_ACTIVITY_ADMIN_activity_by_pk_activity_sessions_activity_enrollments_aggregate_aggregate {
  __typename: "activity_enrollment_aggregate_fields";
  count: number | null;
}

export interface GET_ACTIVITY_ADMIN_activity_by_pk_activity_sessions_activity_enrollments_aggregate {
  __typename: "activity_enrollment_aggregate";
  aggregate: GET_ACTIVITY_ADMIN_activity_by_pk_activity_sessions_activity_enrollments_aggregate_aggregate | null;
}

export interface GET_ACTIVITY_ADMIN_activity_by_pk_activity_sessions {
  __typename: "activity_session";
  id: any;
  title: string;
  started_at: any;
  ended_at: any;
  location: string;
  threshold: any | null;
  description: string | null;
  /**
   * An aggregated array relationship
   */
  activity_enrollments_aggregate: GET_ACTIVITY_ADMIN_activity_by_pk_activity_sessions_activity_enrollments_aggregate;
}

export interface GET_ACTIVITY_ADMIN_activity_by_pk {
  __typename: "activity";
  id: any;
  title: string;
  description: string | null;
  cover_url: string | null;
  is_participants_visible: boolean;
  organizer_id: string;
  published_at: any | null;
  support_locales: any | null;
  /**
   * An array relationship
   */
  activity_categories: GET_ACTIVITY_ADMIN_activity_by_pk_activity_categories[];
  /**
   * An array relationship
   */
  activity_tickets: GET_ACTIVITY_ADMIN_activity_by_pk_activity_tickets[];
  /**
   * An array relationship
   */
  activity_sessions: GET_ACTIVITY_ADMIN_activity_by_pk_activity_sessions[];
}

export interface GET_ACTIVITY_ADMIN {
  /**
   * fetch data from the table: "activity" using primary key columns
   */
  activity_by_pk: GET_ACTIVITY_ADMIN_activity_by_pk | null;
}

export interface GET_ACTIVITY_ADMINVariables {
  activityId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_APP
// ====================================================

export interface UPDATE_APP_update_app {
  __typename: "app_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_APP {
  /**
   * update data of the table: "app"
   */
  update_app: UPDATE_APP_update_app | null;
}

export interface UPDATE_APPVariables {
  appId: string;
  name?: string | null;
  title?: string | null;
  description?: string | null;
  vimeoProjectId?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPSERT_APP_SETTINGS
// ====================================================

export interface UPSERT_APP_SETTINGS_insert_app_setting {
  __typename: "app_setting_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPSERT_APP_SETTINGS {
  /**
   * insert data into the table: "app_setting"
   */
  insert_app_setting: UPSERT_APP_SETTINGS_insert_app_setting | null;
}

export interface UPSERT_APP_SETTINGSVariables {
  appSettings: app_setting_insert_input[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPSERT_APP_SECRETS
// ====================================================

export interface UPSERT_APP_SECRETS_insert_app_secret {
  __typename: "app_secret_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPSERT_APP_SECRETS {
  /**
   * insert data into the table: "app_secret"
   */
  insert_app_secret: UPSERT_APP_SECRETS_insert_app_secret | null;
}

export interface UPSERT_APP_SECRETSVariables {
  appSecrets: app_secret_insert_input[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_APPOINTMENT_ENROLLMENT_COLLECTION
// ====================================================

export interface GET_APPOINTMENT_ENROLLMENT_COLLECTION_appointment_enrollment_appointment_plan_creator {
  __typename: "member_public";
  id: string | null;
  name: string | null;
}

export interface GET_APPOINTMENT_ENROLLMENT_COLLECTION_appointment_enrollment_appointment_plan {
  __typename: "appointment_plan";
  id: any;
  title: string;
  /**
   * minutes
   */
  duration: any;
  /**
   * An object relationship
   */
  creator: GET_APPOINTMENT_ENROLLMENT_COLLECTION_appointment_enrollment_appointment_plan_creator | null;
}

export interface GET_APPOINTMENT_ENROLLMENT_COLLECTION_appointment_enrollment_member {
  __typename: "member_public";
  id: string | null;
  picture_url: string | null;
}

export interface GET_APPOINTMENT_ENROLLMENT_COLLECTION_appointment_enrollment_order_product_order_log {
  __typename: "order_log";
  id: string;
  created_at: any;
  updated_at: any | null;
}

export interface GET_APPOINTMENT_ENROLLMENT_COLLECTION_appointment_enrollment_order_product {
  __typename: "order_product";
  id: any;
  options: any | null;
  /**
   * An object relationship
   */
  order_log: GET_APPOINTMENT_ENROLLMENT_COLLECTION_appointment_enrollment_order_product_order_log;
}

export interface GET_APPOINTMENT_ENROLLMENT_COLLECTION_appointment_enrollment {
  __typename: "appointment_enrollment";
  id: any | null;
  /**
   * An object relationship
   */
  appointment_plan: GET_APPOINTMENT_ENROLLMENT_COLLECTION_appointment_enrollment_appointment_plan | null;
  /**
   * An object relationship
   */
  member: GET_APPOINTMENT_ENROLLMENT_COLLECTION_appointment_enrollment_member | null;
  started_at: any | null;
  canceled_at: string | null;
  member_name: string | null;
  member_email: string | null;
  member_phone: string | null;
  order_product_id: any | null;
  /**
   * An object relationship
   */
  order_product: GET_APPOINTMENT_ENROLLMENT_COLLECTION_appointment_enrollment_order_product | null;
  issue: string | null;
  result: string | null;
}

export interface GET_APPOINTMENT_ENROLLMENT_COLLECTION {
  /**
   * fetch data from the table: "appointment_enrollment"
   */
  appointment_enrollment: GET_APPOINTMENT_ENROLLMENT_COLLECTION_appointment_enrollment[];
}

export interface GET_APPOINTMENT_ENROLLMENT_COLLECTIONVariables {
  startedAt?: any | null;
  endedAt?: any | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_APPOINTMENT_Result
// ====================================================

export interface UPDATE_APPOINTMENT_Result_update_order_product {
  __typename: "order_product_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_APPOINTMENT_Result {
  /**
   * update data of the table: "order_product"
   */
  update_order_product: UPDATE_APPOINTMENT_Result_update_order_product | null;
}

export interface UPDATE_APPOINTMENT_ResultVariables {
  orderProductId: any;
  data?: any | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_POST
// ====================================================

export interface GET_POST_post_by_pk_post_categories_category {
  __typename: "category";
  id: string;
  name: string;
}

export interface GET_POST_post_by_pk_post_categories {
  __typename: "post_category";
  id: any;
  /**
   * An object relationship
   */
  category: GET_POST_post_by_pk_post_categories_category;
}

export interface GET_POST_post_by_pk_post_tags {
  __typename: "post_tag";
  id: any;
  tag_name: string;
}

export interface GET_POST_post_by_pk_post_merchandises {
  __typename: "post_merchandise";
  merchandise_id: any;
}

export interface GET_POST_post_by_pk_post_roles_member {
  __typename: "member_public";
  name: string | null;
  picture_url: string | null;
}

export interface GET_POST_post_by_pk_post_roles {
  __typename: "post_role";
  /**
   * creator | author
   */
  name: string;
  member_id: string;
  /**
   * An object relationship
   */
  member: GET_POST_post_by_pk_post_roles_member | null;
}

export interface GET_POST_post_by_pk {
  __typename: "post";
  id: any;
  title: string;
  video_url: string | null;
  description: string | null;
  is_deleted: boolean;
  code_name: string | null;
  cover_url: string | null;
  published_at: any | null;
  /**
   * An array relationship
   */
  post_categories: GET_POST_post_by_pk_post_categories[];
  /**
   * An array relationship
   */
  post_tags: GET_POST_post_by_pk_post_tags[];
  /**
   * An array relationship
   */
  post_merchandises: GET_POST_post_by_pk_post_merchandises[];
  /**
   * An array relationship
   */
  post_roles: GET_POST_post_by_pk_post_roles[];
}

export interface GET_POST_post {
  __typename: "post";
  id: any;
  code_name: string | null;
}

export interface GET_POST {
  /**
   * fetch data from the table: "post" using primary key columns
   */
  post_by_pk: GET_POST_post_by_pk | null;
  /**
   * fetch data from the table: "post"
   */
  post: GET_POST_post[];
}

export interface GET_POSTVariables {
  id: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_POSTS
// ====================================================

export interface GET_POSTS_post_post_roles_member {
  __typename: "member_public";
  name: string | null;
  username: string | null;
}

export interface GET_POSTS_post_post_roles {
  __typename: "post_role";
  id: any;
  /**
   * creator | author
   */
  name: string;
  post_id: any;
  /**
   * An object relationship
   */
  member: GET_POSTS_post_post_roles_member | null;
}

export interface GET_POSTS_post {
  __typename: "post";
  id: any;
  title: string;
  cover_url: string | null;
  video_url: string | null;
  /**
   * An array relationship
   */
  post_roles: GET_POSTS_post_post_roles[];
  published_at: any | null;
  views: number;
}

export interface GET_POSTS {
  /**
   * fetch data from the table: "post"
   */
  post: GET_POSTS_post[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: INSERT_POST
// ====================================================

export interface INSERT_POST_insert_post_returning {
  __typename: "post";
  id: any;
}

export interface INSERT_POST_insert_post {
  __typename: "post_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
  /**
   * data of the affected rows by the mutation
   */
  returning: INSERT_POST_insert_post_returning[];
}

export interface INSERT_POST {
  /**
   * insert data into the table: "post"
   */
  insert_post: INSERT_POST_insert_post | null;
}

export interface INSERT_POSTVariables {
  appId: string;
  title: string;
  postCategories: post_category_insert_input[];
  postRoles: post_role_insert_input[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_COUPON_PLAN_COLLECTION
// ====================================================

export interface GET_COUPON_PLAN_COLLECTION_coupon_plan_coupon_codes_aggregate_aggregate_sum {
  __typename: "coupon_code_sum_fields";
  count: number | null;
  remaining: number | null;
}

export interface GET_COUPON_PLAN_COLLECTION_coupon_plan_coupon_codes_aggregate_aggregate {
  __typename: "coupon_code_aggregate_fields";
  sum: GET_COUPON_PLAN_COLLECTION_coupon_plan_coupon_codes_aggregate_aggregate_sum | null;
}

export interface GET_COUPON_PLAN_COLLECTION_coupon_plan_coupon_codes_aggregate {
  __typename: "coupon_code_aggregate";
  aggregate: GET_COUPON_PLAN_COLLECTION_coupon_plan_coupon_codes_aggregate_aggregate | null;
}

export interface GET_COUPON_PLAN_COLLECTION_coupon_plan_coupon_plan_products {
  __typename: "coupon_plan_product";
  id: any;
  product_id: string;
}

export interface GET_COUPON_PLAN_COLLECTION_coupon_plan {
  __typename: "coupon_plan";
  id: any;
  title: string;
  amount: any;
  scope: any | null;
  /**
   * 1 - cash / 2 - percent
   */
  type: number;
  constraint: any | null;
  started_at: any | null;
  ended_at: any | null;
  description: string | null;
  /**
   * An aggregated array relationship
   */
  coupon_codes_aggregate: GET_COUPON_PLAN_COLLECTION_coupon_plan_coupon_codes_aggregate;
  /**
   * An array relationship
   */
  coupon_plan_products: GET_COUPON_PLAN_COLLECTION_coupon_plan_coupon_plan_products[];
}

export interface GET_COUPON_PLAN_COLLECTION {
  /**
   * fetch data from the table: "coupon_plan"
   */
  coupon_plan: GET_COUPON_PLAN_COLLECTION_coupon_plan[];
}

export interface GET_COUPON_PLAN_COLLECTIONVariables {
  appId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_COUPON__CODE_COLLECTION
// ====================================================

export interface GET_COUPON__CODE_COLLECTION_coupon_code_coupons_member {
  __typename: "member";
  id: string;
  email: string;
}

export interface GET_COUPON__CODE_COLLECTION_coupon_code_coupons_status {
  __typename: "coupon_status";
  used: boolean | null;
}

export interface GET_COUPON__CODE_COLLECTION_coupon_code_coupons {
  __typename: "coupon";
  id: any;
  /**
   * An object relationship
   */
  member: GET_COUPON__CODE_COLLECTION_coupon_code_coupons_member;
  /**
   * An object relationship
   */
  status: GET_COUPON__CODE_COLLECTION_coupon_code_coupons_status | null;
}

export interface GET_COUPON__CODE_COLLECTION_coupon_code_coupons_aggregate_aggregate {
  __typename: "coupon_aggregate_fields";
  count: number | null;
}

export interface GET_COUPON__CODE_COLLECTION_coupon_code_coupons_aggregate {
  __typename: "coupon_aggregate";
  aggregate: GET_COUPON__CODE_COLLECTION_coupon_code_coupons_aggregate_aggregate | null;
}

export interface GET_COUPON__CODE_COLLECTION_coupon_code {
  __typename: "coupon_code";
  id: any;
  code: string;
  count: number;
  remaining: number;
  /**
   * An array relationship
   */
  coupons: GET_COUPON__CODE_COLLECTION_coupon_code_coupons[];
  /**
   * An aggregated array relationship
   */
  coupons_aggregate: GET_COUPON__CODE_COLLECTION_coupon_code_coupons_aggregate;
}

export interface GET_COUPON__CODE_COLLECTION {
  /**
   * fetch data from the table: "coupon_code"
   */
  coupon_code: GET_COUPON__CODE_COLLECTION_coupon_code[];
}

export interface GET_COUPON__CODE_COLLECTIONVariables {
  couponPlanId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_VOUCHER_PLAN_COLLECTION
// ====================================================

export interface GET_VOUCHER_PLAN_COLLECTION_voucher_plan_voucher_codes_vouchers_member {
  __typename: "member";
  id: string;
  email: string;
}

export interface GET_VOUCHER_PLAN_COLLECTION_voucher_plan_voucher_codes_vouchers_status {
  __typename: "voucher_status";
  used: boolean | null;
}

export interface GET_VOUCHER_PLAN_COLLECTION_voucher_plan_voucher_codes_vouchers {
  __typename: "voucher";
  id: any;
  /**
   * An object relationship
   */
  member: GET_VOUCHER_PLAN_COLLECTION_voucher_plan_voucher_codes_vouchers_member;
  /**
   * An object relationship
   */
  status: GET_VOUCHER_PLAN_COLLECTION_voucher_plan_voucher_codes_vouchers_status | null;
}

export interface GET_VOUCHER_PLAN_COLLECTION_voucher_plan_voucher_codes {
  __typename: "voucher_code";
  id: any;
  code: string;
  count: number;
  remaining: number;
  /**
   * An array relationship
   */
  vouchers: GET_VOUCHER_PLAN_COLLECTION_voucher_plan_voucher_codes_vouchers[];
}

export interface GET_VOUCHER_PLAN_COLLECTION_voucher_plan_voucher_codes_aggregate_aggregate_sum {
  __typename: "voucher_code_sum_fields";
  count: number | null;
  remaining: number | null;
}

export interface GET_VOUCHER_PLAN_COLLECTION_voucher_plan_voucher_codes_aggregate_aggregate {
  __typename: "voucher_code_aggregate_fields";
  sum: GET_VOUCHER_PLAN_COLLECTION_voucher_plan_voucher_codes_aggregate_aggregate_sum | null;
}

export interface GET_VOUCHER_PLAN_COLLECTION_voucher_plan_voucher_codes_aggregate {
  __typename: "voucher_code_aggregate";
  aggregate: GET_VOUCHER_PLAN_COLLECTION_voucher_plan_voucher_codes_aggregate_aggregate | null;
}

export interface GET_VOUCHER_PLAN_COLLECTION_voucher_plan_voucher_plan_products {
  __typename: "voucher_plan_product";
  id: any;
  product_id: string;
}

export interface GET_VOUCHER_PLAN_COLLECTION_voucher_plan {
  __typename: "voucher_plan";
  id: any;
  title: string;
  description: string | null;
  started_at: any | null;
  ended_at: any | null;
  product_quantity_limit: number;
  /**
   * An array relationship
   */
  voucher_codes: GET_VOUCHER_PLAN_COLLECTION_voucher_plan_voucher_codes[];
  /**
   * An aggregated array relationship
   */
  voucher_codes_aggregate: GET_VOUCHER_PLAN_COLLECTION_voucher_plan_voucher_codes_aggregate;
  /**
   * An array relationship
   */
  voucher_plan_products: GET_VOUCHER_PLAN_COLLECTION_voucher_plan_voucher_plan_products[];
}

export interface GET_VOUCHER_PLAN_COLLECTION {
  /**
   * fetch data from the table: "voucher_plan"
   */
  voucher_plan: GET_VOUCHER_PLAN_COLLECTION_voucher_plan[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: INSERT_VOUCHER_PLAN
// ====================================================

export interface INSERT_VOUCHER_PLAN_insert_voucher_plan {
  __typename: "voucher_plan_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface INSERT_VOUCHER_PLAN {
  /**
   * insert data into the table: "voucher_plan"
   */
  insert_voucher_plan: INSERT_VOUCHER_PLAN_insert_voucher_plan | null;
}

export interface INSERT_VOUCHER_PLANVariables {
  title: string;
  description?: string | null;
  appId: string;
  startedAt?: any | null;
  endedAt?: any | null;
  productQuantityLimit: number;
  voucherCodes: voucher_code_insert_input[];
  voucherPlanProducts: voucher_plan_product_insert_input[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_VOUCHER_PLAN
// ====================================================

export interface UPDATE_VOUCHER_PLAN_update_voucher_plan {
  __typename: "voucher_plan_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_VOUCHER_PLAN_delete_voucher_plan_product {
  __typename: "voucher_plan_product_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_VOUCHER_PLAN_insert_voucher_plan_product {
  __typename: "voucher_plan_product_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_VOUCHER_PLAN {
  /**
   * update data of the table: "voucher_plan"
   */
  update_voucher_plan: UPDATE_VOUCHER_PLAN_update_voucher_plan | null;
  /**
   * delete data from the table: "voucher_plan_product"
   */
  delete_voucher_plan_product: UPDATE_VOUCHER_PLAN_delete_voucher_plan_product | null;
  /**
   * insert data into the table: "voucher_plan_product"
   */
  insert_voucher_plan_product: UPDATE_VOUCHER_PLAN_insert_voucher_plan_product | null;
}

export interface UPDATE_VOUCHER_PLANVariables {
  voucherPlanId: any;
  title: string;
  description?: string | null;
  appId: string;
  startedAt?: any | null;
  endedAt?: any | null;
  productQuantityLimit: number;
  voucherPlanProducts: voucher_plan_product_insert_input[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_TAGS
// ====================================================

export interface GET_TAGS_tag {
  __typename: "tag";
  name: string;
}

export interface GET_TAGS {
  /**
   * fetch data from the table: "tag"
   */
  tag: GET_TAGS_tag[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_CATEGORIES
// ====================================================

export interface GET_CATEGORIES_category {
  __typename: "category";
  id: string;
  name: string;
  position: number;
}

export interface GET_CATEGORIES {
  /**
   * fetch data from the table: "category"
   */
  category: GET_CATEGORIES_category[];
}

export interface GET_CATEGORIESVariables {
  appId: string;
  classType?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_NOTIFICATIONS
// ====================================================

export interface GET_NOTIFICATIONS_notification {
  __typename: "notification";
  id: any;
  avatar: string | null;
  description: string;
  reference_url: string | null;
  extra: string | null;
  type: string | null;
  read_at: any | null;
  updated_at: any;
}

export interface GET_NOTIFICATIONS {
  /**
   * fetch data from the table: "notification"
   */
  notification: GET_NOTIFICATIONS_notification[];
}

export interface GET_NOTIFICATIONSVariables {
  memberId?: string | null;
  limit?: number | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: INSERT_PROGRAM_CATEGORY
// ====================================================

export interface INSERT_PROGRAM_CATEGORY_insert_category {
  __typename: "category_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface INSERT_PROGRAM_CATEGORY {
  /**
   * insert data into the table: "category"
   */
  insert_category: INSERT_PROGRAM_CATEGORY_insert_category | null;
}

export interface INSERT_PROGRAM_CATEGORYVariables {
  appId: string;
  name?: string | null;
  classType?: string | null;
  position?: number | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_CATEGORY
// ====================================================

export interface UPDATE_CATEGORY_update_category {
  __typename: "category_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_CATEGORY {
  /**
   * update data of the table: "category"
   */
  update_category: UPDATE_CATEGORY_update_category | null;
}

export interface UPDATE_CATEGORYVariables {
  categoryId: string;
  name?: string | null;
  position?: number | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_CATEGORY_POSITION
// ====================================================

export interface UPDATE_CATEGORY_POSITION_insert_category {
  __typename: "category_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_CATEGORY_POSITION {
  /**
   * insert data into the table: "category"
   */
  insert_category: UPDATE_CATEGORY_POSITION_insert_category | null;
}

export interface UPDATE_CATEGORY_POSITIONVariables {
  data: category_insert_input[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DELETE_PROGRAM_CATEGORY
// ====================================================

export interface DELETE_PROGRAM_CATEGORY_delete_category {
  __typename: "category_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface DELETE_PROGRAM_CATEGORY {
  /**
   * delete data from the table: "category"
   */
  delete_category: DELETE_PROGRAM_CATEGORY_delete_category | null;
}

export interface DELETE_PROGRAM_CATEGORYVariables {
  categoryId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_PRODUCT_INVENTORY
// ====================================================

export interface GET_PRODUCT_INVENTORY_product_inventory {
  __typename: "product_inventory";
  id: any;
  created_at: any;
  /**
   * arrange
   */
  status: string | null;
  specification: string | null;
  quantity: number;
  comment: string | null;
}

export interface GET_PRODUCT_INVENTORY_order_product_order_log {
  __typename: "order_log";
  delivered_at: any | null;
}

export interface GET_PRODUCT_INVENTORY_order_product {
  __typename: "order_product";
  id: any;
  options: any | null;
  /**
   * An object relationship
   */
  order_log: GET_PRODUCT_INVENTORY_order_product_order_log;
}

export interface GET_PRODUCT_INVENTORY {
  /**
   * fetch data from the table: "product_inventory"
   */
  product_inventory: GET_PRODUCT_INVENTORY_product_inventory[];
  /**
   * fetch data from the table: "order_product"
   */
  order_product: GET_PRODUCT_INVENTORY_order_product[];
}

export interface GET_PRODUCT_INVENTORYVariables {
  productId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ARRANGE_PRODUCT_INVENTORY
// ====================================================

export interface ARRANGE_PRODUCT_INVENTORY_insert_product_inventory {
  __typename: "product_inventory_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface ARRANGE_PRODUCT_INVENTORY {
  /**
   * insert data into the table: "product_inventory"
   */
  insert_product_inventory: ARRANGE_PRODUCT_INVENTORY_insert_product_inventory | null;
}

export interface ARRANGE_PRODUCT_INVENTORYVariables {
  data: product_inventory_insert_input[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_ALL_BRIEF_PRODUCT_COLLECTION
// ====================================================

export interface GET_ALL_BRIEF_PRODUCT_COLLECTION_program {
  __typename: "program";
  id: any;
  title: string;
}

export interface GET_ALL_BRIEF_PRODUCT_COLLECTION_program_plan_program {
  __typename: "program";
  id: any;
  title: string;
}

export interface GET_ALL_BRIEF_PRODUCT_COLLECTION_program_plan {
  __typename: "program_plan";
  id: any;
  title: string;
  /**
   * An object relationship
   */
  program: GET_ALL_BRIEF_PRODUCT_COLLECTION_program_plan_program;
}

export interface GET_ALL_BRIEF_PRODUCT_COLLECTION_activity_ticket_activity {
  __typename: "activity";
  id: any;
  title: string;
}

export interface GET_ALL_BRIEF_PRODUCT_COLLECTION_activity_ticket {
  __typename: "activity_ticket";
  id: any;
  title: string;
  /**
   * An object relationship
   */
  activity: GET_ALL_BRIEF_PRODUCT_COLLECTION_activity_ticket_activity;
}

export interface GET_ALL_BRIEF_PRODUCT_COLLECTION_podcast_program {
  __typename: "podcast_program";
  id: any;
  title: string;
}

export interface GET_ALL_BRIEF_PRODUCT_COLLECTION_podcast_plan_creator {
  __typename: "member_public";
  id: string | null;
  name: string | null;
  username: string | null;
}

export interface GET_ALL_BRIEF_PRODUCT_COLLECTION_podcast_plan {
  __typename: "podcast_plan";
  id: any;
  title: string;
  /**
   * An object relationship
   */
  creator: GET_ALL_BRIEF_PRODUCT_COLLECTION_podcast_plan_creator | null;
}

export interface GET_ALL_BRIEF_PRODUCT_COLLECTION_appointment_plan_creator {
  __typename: "member_public";
  id: string | null;
  name: string | null;
  username: string | null;
}

export interface GET_ALL_BRIEF_PRODUCT_COLLECTION_appointment_plan {
  __typename: "appointment_plan";
  id: any;
  title: string;
  /**
   * An object relationship
   */
  creator: GET_ALL_BRIEF_PRODUCT_COLLECTION_appointment_plan_creator | null;
}

export interface GET_ALL_BRIEF_PRODUCT_COLLECTION_merchandise {
  __typename: "merchandise";
  id: any;
  title: string;
}

export interface GET_ALL_BRIEF_PRODUCT_COLLECTION_project_plan_project {
  __typename: "project";
  id: any;
  title: string;
}

export interface GET_ALL_BRIEF_PRODUCT_COLLECTION_project_plan {
  __typename: "project_plan";
  id: any;
  title: string;
  /**
   * An object relationship
   */
  project: GET_ALL_BRIEF_PRODUCT_COLLECTION_project_plan_project;
}

export interface GET_ALL_BRIEF_PRODUCT_COLLECTION_program_package_plan_program_package {
  __typename: "program_package";
  id: any;
  title: string;
}

export interface GET_ALL_BRIEF_PRODUCT_COLLECTION_program_package_plan {
  __typename: "program_package_plan";
  id: any;
  title: string;
  /**
   * An object relationship
   */
  program_package: GET_ALL_BRIEF_PRODUCT_COLLECTION_program_package_plan_program_package;
}

export interface GET_ALL_BRIEF_PRODUCT_COLLECTION {
  /**
   * fetch data from the table: "program"
   */
  program: GET_ALL_BRIEF_PRODUCT_COLLECTION_program[];
  /**
   * fetch data from the table: "program_plan"
   */
  program_plan: GET_ALL_BRIEF_PRODUCT_COLLECTION_program_plan[];
  /**
   * fetch data from the table: "activity_ticket"
   */
  activity_ticket: GET_ALL_BRIEF_PRODUCT_COLLECTION_activity_ticket[];
  /**
   * fetch data from the table: "podcast_program"
   */
  podcast_program: GET_ALL_BRIEF_PRODUCT_COLLECTION_podcast_program[];
  /**
   * fetch data from the table: "podcast_plan"
   */
  podcast_plan: GET_ALL_BRIEF_PRODUCT_COLLECTION_podcast_plan[];
  /**
   * fetch data from the table: "appointment_plan"
   */
  appointment_plan: GET_ALL_BRIEF_PRODUCT_COLLECTION_appointment_plan[];
  /**
   * fetch data from the table: "merchandise"
   */
  merchandise: GET_ALL_BRIEF_PRODUCT_COLLECTION_merchandise[];
  /**
   * fetch data from the table: "project_plan"
   */
  project_plan: GET_ALL_BRIEF_PRODUCT_COLLECTION_project_plan[];
  /**
   * fetch data from the table: "program_package_plan"
   */
  program_package_plan: GET_ALL_BRIEF_PRODUCT_COLLECTION_program_package_plan[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_PHYSICAL_PRODUCT_ORDER_LOG
// ====================================================

export interface GET_PHYSICAL_PRODUCT_ORDER_LOG_order_log_order_products {
  __typename: "order_product";
  id: any;
  name: string;
  product_id: string;
  options: any | null;
}

export interface GET_PHYSICAL_PRODUCT_ORDER_LOG_order_log {
  __typename: "order_log";
  id: string;
  created_at: any;
  updated_at: any | null;
  delivered_at: any | null;
  deliver_message: string | null;
  shipping: any | null;
  /**
   * name | email | phone | address | postCode | buyerPhone | uniformTitle | uniformNumber
   */
  invoice: any;
  /**
   * An array relationship
   */
  order_products: GET_PHYSICAL_PRODUCT_ORDER_LOG_order_log_order_products[];
}

export interface GET_PHYSICAL_PRODUCT_ORDER_LOG {
  /**
   * fetch data from the table: "order_log"
   */
  order_log: GET_PHYSICAL_PRODUCT_ORDER_LOG_order_log[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_PRODUCT_SIMPLE
// ====================================================

export interface GET_PRODUCT_SIMPLE_program_by_pk {
  __typename: "program";
  id: any;
  title: string;
  cover_url: string | null;
  is_subscription: boolean;
  list_price: any | null;
  sale_price: any | null;
  sold_at: any | null;
}

export interface GET_PRODUCT_SIMPLE_program_plan_by_pk_program {
  __typename: "program";
  id: any;
  title: string;
  cover_url: string | null;
}

export interface GET_PRODUCT_SIMPLE_program_plan_by_pk {
  __typename: "program_plan";
  id: any;
  title: string;
  list_price: any;
  sale_price: any | null;
  sold_at: any | null;
  discount_down_price: any;
  period_type: string | null;
  /**
   * An object relationship
   */
  program: GET_PRODUCT_SIMPLE_program_plan_by_pk_program;
}

export interface GET_PRODUCT_SIMPLE_program_package_plan_by_pk_program_package {
  __typename: "program_package";
  id: any;
  title: string;
  cover_url: string | null;
}

export interface GET_PRODUCT_SIMPLE_program_package_plan_by_pk {
  __typename: "program_package_plan";
  id: any;
  title: string;
  list_price: any;
  sale_price: any | null;
  sold_at: any | null;
  discount_down_price: any | null;
  period_amount: any;
  period_type: string;
  is_subscription: boolean;
  /**
   * An object relationship
   */
  program_package: GET_PRODUCT_SIMPLE_program_package_plan_by_pk_program_package;
}

export interface GET_PRODUCT_SIMPLE_card_by_pk {
  __typename: "card";
  id: any;
  title: string;
}

export interface GET_PRODUCT_SIMPLE_activity_ticket_by_pk_activity {
  __typename: "activity";
  id: any;
  title: string;
  cover_url: string | null;
}

export interface GET_PRODUCT_SIMPLE_activity_ticket_by_pk {
  __typename: "activity_ticket";
  id: any;
  title: string;
  price: any;
  /**
   * An object relationship
   */
  activity: GET_PRODUCT_SIMPLE_activity_ticket_by_pk_activity;
}

export interface GET_PRODUCT_SIMPLE_project_plan_by_pk_project {
  __typename: "project";
  id: any;
  title: string;
}

export interface GET_PRODUCT_SIMPLE_project_plan_by_pk {
  __typename: "project_plan";
  id: any;
  title: string;
  cover_url: string | null;
  list_price: any;
  sale_price: any | null;
  sold_at: any | null;
  discount_down_price: any;
  period_amount: any | null;
  /**
   * Y / M / W / D
   */
  period_type: string | null;
  /**
   * An object relationship
   */
  project: GET_PRODUCT_SIMPLE_project_plan_by_pk_project;
}

export interface GET_PRODUCT_SIMPLE_podcast_program_by_pk {
  __typename: "podcast_program";
  id: any;
  title: string;
  cover_url: string | null;
  list_price: any;
  sale_price: any | null;
  sold_at: any | null;
}

export interface GET_PRODUCT_SIMPLE_podcast_plan_by_pk_creator {
  __typename: "member_public";
  name: string | null;
  username: string | null;
}

export interface GET_PRODUCT_SIMPLE_podcast_plan_by_pk {
  __typename: "podcast_plan";
  id: any;
  title: string;
  list_price: any;
  sale_price: any | null;
  sold_at: any | null;
  /**
   * An object relationship
   */
  creator: GET_PRODUCT_SIMPLE_podcast_plan_by_pk_creator | null;
}

export interface GET_PRODUCT_SIMPLE_appointment_plan_by_pk_creator {
  __typename: "member_public";
  name: string | null;
  username: string | null;
  picture_url: string | null;
}

export interface GET_PRODUCT_SIMPLE_appointment_plan_by_pk_appointment_periods {
  __typename: "appointment_period";
  started_at: any | null;
  ended_at: any | null;
  booked: boolean | null;
}

export interface GET_PRODUCT_SIMPLE_appointment_plan_by_pk {
  __typename: "appointment_plan";
  id: any;
  title: string;
  price: any;
  /**
   * An object relationship
   */
  creator: GET_PRODUCT_SIMPLE_appointment_plan_by_pk_creator | null;
  /**
   * An array relationship
   */
  appointment_periods: GET_PRODUCT_SIMPLE_appointment_plan_by_pk_appointment_periods[];
}

export interface GET_PRODUCT_SIMPLE_merchandise_by_pk_merchandise_imgs {
  __typename: "merchandise_img";
  url: string;
}

export interface GET_PRODUCT_SIMPLE_merchandise_by_pk {
  __typename: "merchandise";
  id: any;
  title: string;
  list_price: any;
  /**
   * An array relationship
   */
  merchandise_imgs: GET_PRODUCT_SIMPLE_merchandise_by_pk_merchandise_imgs[];
}

export interface GET_PRODUCT_SIMPLE {
  /**
   * fetch data from the table: "program" using primary key columns
   */
  program_by_pk: GET_PRODUCT_SIMPLE_program_by_pk | null;
  /**
   * fetch data from the table: "program_plan" using primary key columns
   */
  program_plan_by_pk: GET_PRODUCT_SIMPLE_program_plan_by_pk | null;
  /**
   * fetch data from the table: "program_package_plan" using primary key columns
   */
  program_package_plan_by_pk: GET_PRODUCT_SIMPLE_program_package_plan_by_pk | null;
  /**
   * fetch data from the table: "card" using primary key columns
   */
  card_by_pk: GET_PRODUCT_SIMPLE_card_by_pk | null;
  /**
   * fetch data from the table: "activity_ticket" using primary key columns
   */
  activity_ticket_by_pk: GET_PRODUCT_SIMPLE_activity_ticket_by_pk | null;
  /**
   * fetch data from the table: "project_plan" using primary key columns
   */
  project_plan_by_pk: GET_PRODUCT_SIMPLE_project_plan_by_pk | null;
  /**
   * fetch data from the table: "podcast_program" using primary key columns
   */
  podcast_program_by_pk: GET_PRODUCT_SIMPLE_podcast_program_by_pk | null;
  /**
   * fetch data from the table: "podcast_plan" using primary key columns
   */
  podcast_plan_by_pk: GET_PRODUCT_SIMPLE_podcast_plan_by_pk | null;
  /**
   * fetch data from the table: "appointment_plan" using primary key columns
   */
  appointment_plan_by_pk: GET_PRODUCT_SIMPLE_appointment_plan_by_pk | null;
  /**
   * fetch data from the table: "merchandise" using primary key columns
   */
  merchandise_by_pk: GET_PRODUCT_SIMPLE_merchandise_by_pk | null;
}

export interface GET_PRODUCT_SIMPLEVariables {
  id: any;
  startedAt?: any | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_MEMBER
// ====================================================

export interface GET_MEMBER_member_by_pk_member_tags {
  __typename: "member_tag";
  id: any;
  tag_name: string;
}

export interface GET_MEMBER_member_by_pk {
  __typename: "member";
  id: string;
  name: string;
  email: string;
  username: string;
  picture_url: string | null;
  description: string | null;
  abstract: string | null;
  title: string | null;
  /**
   * An array relationship
   */
  member_tags: GET_MEMBER_member_by_pk_member_tags[];
  /**
   * app-owner / content-creator
   */
  role: string;
}

export interface GET_MEMBER {
  /**
   * fetch data from the table: "member" using primary key columns
   */
  member_by_pk: GET_MEMBER_member_by_pk | null;
}

export interface GET_MEMBERVariables {
  memberId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_PUBLIC_MEMBER
// ====================================================

export interface GET_PUBLIC_MEMBER_member_public {
  __typename: "member_public";
  id: string | null;
  name: string | null;
  username: string | null;
  picture_url: string | null;
  description: string | null;
  role: string | null;
}

export interface GET_PUBLIC_MEMBER {
  /**
   * fetch data from the table: "member_public"
   */
  member_public: GET_PUBLIC_MEMBER_member_public[];
}

export interface GET_PUBLIC_MEMBERVariables {
  memberId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_MEMBER_ROLE_COUNT
// ====================================================

export interface GET_MEMBER_ROLE_COUNT_all_aggregate {
  __typename: "member_aggregate_fields";
  count: number | null;
}

export interface GET_MEMBER_ROLE_COUNT_all {
  __typename: "member_aggregate";
  aggregate: GET_MEMBER_ROLE_COUNT_all_aggregate | null;
}

export interface GET_MEMBER_ROLE_COUNT_app_owner_aggregate {
  __typename: "member_aggregate_fields";
  count: number | null;
}

export interface GET_MEMBER_ROLE_COUNT_app_owner {
  __typename: "member_aggregate";
  aggregate: GET_MEMBER_ROLE_COUNT_app_owner_aggregate | null;
}

export interface GET_MEMBER_ROLE_COUNT_content_creator_aggregate {
  __typename: "member_aggregate_fields";
  count: number | null;
}

export interface GET_MEMBER_ROLE_COUNT_content_creator {
  __typename: "member_aggregate";
  aggregate: GET_MEMBER_ROLE_COUNT_content_creator_aggregate | null;
}

export interface GET_MEMBER_ROLE_COUNT_general_member_aggregate {
  __typename: "member_aggregate_fields";
  count: number | null;
}

export interface GET_MEMBER_ROLE_COUNT_general_member {
  __typename: "member_aggregate";
  aggregate: GET_MEMBER_ROLE_COUNT_general_member_aggregate | null;
}

export interface GET_MEMBER_ROLE_COUNT {
  /**
   * fetch aggregated fields from the table: "member"
   */
  all: GET_MEMBER_ROLE_COUNT_all;
  /**
   * fetch aggregated fields from the table: "member"
   */
  app_owner: GET_MEMBER_ROLE_COUNT_app_owner;
  /**
   * fetch aggregated fields from the table: "member"
   */
  content_creator: GET_MEMBER_ROLE_COUNT_content_creator;
  /**
   * fetch aggregated fields from the table: "member"
   */
  general_member: GET_MEMBER_ROLE_COUNT_general_member;
}

export interface GET_MEMBER_ROLE_COUNTVariables {
  appId?: string | null;
  email?: string | null;
  name?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_PAGE_MEMBER_COLLECTION
// ====================================================

export interface GET_PAGE_MEMBER_COLLECTION_member_point_status {
  __typename: "point_status";
  points: any | null;
}

export interface GET_PAGE_MEMBER_COLLECTION_member_order_logs_order_products_aggregate_aggregate_sum {
  __typename: "order_product_sum_fields";
  price: any | null;
}

export interface GET_PAGE_MEMBER_COLLECTION_member_order_logs_order_products_aggregate_aggregate {
  __typename: "order_product_aggregate_fields";
  sum: GET_PAGE_MEMBER_COLLECTION_member_order_logs_order_products_aggregate_aggregate_sum | null;
}

export interface GET_PAGE_MEMBER_COLLECTION_member_order_logs_order_products_aggregate {
  __typename: "order_product_aggregate";
  aggregate: GET_PAGE_MEMBER_COLLECTION_member_order_logs_order_products_aggregate_aggregate | null;
}

export interface GET_PAGE_MEMBER_COLLECTION_member_order_logs {
  __typename: "order_log";
  /**
   * An aggregated array relationship
   */
  order_products_aggregate: GET_PAGE_MEMBER_COLLECTION_member_order_logs_order_products_aggregate;
}

export interface GET_PAGE_MEMBER_COLLECTION_member {
  __typename: "member";
  id: string;
  picture_url: string | null;
  name: string;
  username: string;
  email: string;
  logined_at: any | null;
  /**
   * app-owner / content-creator
   */
  role: string;
  /**
   * An object relationship
   */
  point_status: GET_PAGE_MEMBER_COLLECTION_member_point_status | null;
  /**
   * An array relationship
   */
  order_logs: GET_PAGE_MEMBER_COLLECTION_member_order_logs[];
}

export interface GET_PAGE_MEMBER_COLLECTION {
  /**
   * fetch data from the table: "member"
   */
  member: GET_PAGE_MEMBER_COLLECTION_member[];
}

export interface GET_PAGE_MEMBER_COLLECTIONVariables {
  offset: number;
  limit?: number | null;
  role?: string | null;
  email?: string | null;
  name?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_MEMBER_SUMMARY_COLLECTION
// ====================================================

export interface GET_MEMBER_SUMMARY_COLLECTION_member {
  __typename: "member";
  id: string;
  picture_url: string | null;
  name: string;
  username: string;
  email: string;
}

export interface GET_MEMBER_SUMMARY_COLLECTION {
  /**
   * fetch data from the table: "member"
   */
  member: GET_MEMBER_SUMMARY_COLLECTION_member[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_MEMBER_BASIC
// ====================================================

export interface UPDATE_MEMBER_BASIC_update_member {
  __typename: "member_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_MEMBER_BASIC_delete_member_tag {
  __typename: "member_tag_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_MEMBER_BASIC_insert_tag {
  __typename: "tag_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_MEMBER_BASIC_insert_member_tag {
  __typename: "member_tag_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_MEMBER_BASIC {
  /**
   * update data of the table: "member"
   */
  update_member: UPDATE_MEMBER_BASIC_update_member | null;
  /**
   * delete data from the table: "member_tag"
   */
  delete_member_tag: UPDATE_MEMBER_BASIC_delete_member_tag | null;
  /**
   * insert data into the table: "tag"
   */
  insert_tag: UPDATE_MEMBER_BASIC_insert_tag | null;
  /**
   * insert data into the table: "member_tag"
   */
  insert_member_tag: UPDATE_MEMBER_BASIC_insert_member_tag | null;
}

export interface UPDATE_MEMBER_BASICVariables {
  memberId?: string | null;
  name?: string | null;
  description?: string | null;
  username?: string | null;
  email?: string | null;
  pictureUrl?: string | null;
  title?: string | null;
  abstract?: string | null;
  tags: tag_insert_input[];
  memberTags: member_tag_insert_input[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_MEMBER_ACCOUNT
// ====================================================

export interface UPDATE_MEMBER_ACCOUNT_update_member {
  __typename: "member_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_MEMBER_ACCOUNT {
  /**
   * update data of the table: "member"
   */
  update_member: UPDATE_MEMBER_ACCOUNT_update_member | null;
}

export interface UPDATE_MEMBER_ACCOUNTVariables {
  memberId?: string | null;
  name?: string | null;
  description?: string | null;
  username?: string | null;
  email?: string | null;
  pictureUrl?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: INSERT_MERCHANDISE
// ====================================================

export interface INSERT_MERCHANDISE_insert_merchandise_returning {
  __typename: "merchandise";
  id: any;
}

export interface INSERT_MERCHANDISE_insert_merchandise {
  __typename: "merchandise_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
  /**
   * data of the affected rows by the mutation
   */
  returning: INSERT_MERCHANDISE_insert_merchandise_returning[];
}

export interface INSERT_MERCHANDISE {
  /**
   * insert data into the table: "merchandise"
   */
  insert_merchandise: INSERT_MERCHANDISE_insert_merchandise | null;
}

export interface INSERT_MERCHANDISEVariables {
  appId: string;
  memberId: string;
  title: string;
  merchandiseCategories: merchandise_category_insert_input[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_MERCHANDISE_COLLECTION
// ====================================================

export interface GET_MERCHANDISE_COLLECTION_merchandise_merchandise_imgs {
  __typename: "merchandise_img";
  id: any;
  url: string;
}

export interface GET_MERCHANDISE_COLLECTION_merchandise {
  __typename: "merchandise";
  id: any;
  title: string;
  list_price: any;
  sale_price: any | null;
  sold_at: any | null;
  published_at: any | null;
  /**
   * An array relationship
   */
  merchandise_imgs: GET_MERCHANDISE_COLLECTION_merchandise_merchandise_imgs[];
}

export interface GET_MERCHANDISE_COLLECTION {
  /**
   * fetch data from the table: "merchandise"
   */
  merchandise: GET_MERCHANDISE_COLLECTION_merchandise[];
}

export interface GET_MERCHANDISE_COLLECTIONVariables {
  isNotPublished?: boolean | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_MERCHANDISE
// ====================================================

export interface GET_MERCHANDISE_merchandise_by_pk_merchandise_categories_category {
  __typename: "category";
  id: string;
  name: string;
}

export interface GET_MERCHANDISE_merchandise_by_pk_merchandise_categories {
  __typename: "merchandise_category";
  id: any;
  /**
   * An object relationship
   */
  category: GET_MERCHANDISE_merchandise_by_pk_merchandise_categories_category;
}

export interface GET_MERCHANDISE_merchandise_by_pk_merchandise_tags {
  __typename: "merchandise_tag";
  id: any;
  tag_name: string;
}

export interface GET_MERCHANDISE_merchandise_by_pk_merchandise_imgs {
  __typename: "merchandise_img";
  id: any;
  /**
   * cover | common
   */
  type: string;
  url: string;
}

export interface GET_MERCHANDISE_merchandise_by_pk_merchandise_inventory_status {
  __typename: "merchandise_inventory_status";
  buyable_quantity: any | null;
  undelivered_quantity: any | null;
  delivered_quantity: any | null;
}

export interface GET_MERCHANDISE_merchandise_by_pk {
  __typename: "merchandise";
  id: any;
  title: string;
  meta: string | null;
  abstract: string | null;
  description: string | null;
  list_price: any;
  sale_price: any | null;
  sold_at: any | null;
  started_at: any | null;
  ended_at: any | null;
  link: string | null;
  published_at: any | null;
  member_shop_id: any | null;
  /**
   * An array relationship
   */
  merchandise_categories: GET_MERCHANDISE_merchandise_by_pk_merchandise_categories[];
  /**
   * An array relationship
   */
  merchandise_tags: GET_MERCHANDISE_merchandise_by_pk_merchandise_tags[];
  /**
   * An array relationship
   */
  merchandise_imgs: GET_MERCHANDISE_merchandise_by_pk_merchandise_imgs[];
  /**
   * An object relationship
   */
  merchandise_inventory_status: GET_MERCHANDISE_merchandise_by_pk_merchandise_inventory_status | null;
}

export interface GET_MERCHANDISE {
  /**
   * fetch data from the table: "merchandise" using primary key columns
   */
  merchandise_by_pk: GET_MERCHANDISE_merchandise_by_pk | null;
}

export interface GET_MERCHANDISEVariables {
  id: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_MEMBER_SHOP_COLLECTION
// ====================================================

export interface GET_MEMBER_SHOP_COLLECTION_member_shop_member {
  __typename: "member_public";
  id: string | null;
  name: string | null;
  username: string | null;
  picture_url: string | null;
}

export interface GET_MEMBER_SHOP_COLLECTION_member_shop_merchandises_aggregate_aggregate {
  __typename: "merchandise_aggregate_fields";
  count: number | null;
}

export interface GET_MEMBER_SHOP_COLLECTION_member_shop_merchandises_aggregate {
  __typename: "merchandise_aggregate";
  aggregate: GET_MEMBER_SHOP_COLLECTION_member_shop_merchandises_aggregate_aggregate | null;
}

export interface GET_MEMBER_SHOP_COLLECTION_member_shop {
  __typename: "member_shop";
  id: any;
  title: string;
  /**
   * An object relationship
   */
  member: GET_MEMBER_SHOP_COLLECTION_member_shop_member | null;
  published_at: any | null;
  /**
   * An aggregated array relationship
   */
  merchandises_aggregate: GET_MEMBER_SHOP_COLLECTION_member_shop_merchandises_aggregate;
}

export interface GET_MEMBER_SHOP_COLLECTION {
  /**
   * fetch data from the table: "member_shop"
   */
  member_shop: GET_MEMBER_SHOP_COLLECTION_member_shop[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_MEMBER_SHOP
// ====================================================

export interface GET_MEMBER_SHOP_member_shop_by_pk {
  __typename: "member_shop";
  id: any;
  title: string;
  shipping_methods: any | null;
  published_at: any | null;
}

export interface GET_MEMBER_SHOP {
  /**
   * fetch data from the table: "member_shop" using primary key columns
   */
  member_shop_by_pk: GET_MEMBER_SHOP_member_shop_by_pk | null;
}

export interface GET_MEMBER_SHOPVariables {
  shopId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_ORDER_LOG_STATUS
// ====================================================

export interface GET_ORDER_LOG_STATUS_order_log {
  __typename: "order_log";
  status: string;
}

export interface GET_ORDER_LOG_STATUS {
  /**
   * fetch data from the table: "order_log"
   */
  order_log: GET_ORDER_LOG_STATUS_order_log[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_ORDER_LOG_COLLECTION
// ====================================================

export interface GET_ORDER_LOG_COLLECTION_order_log_member {
  __typename: "member";
  id: string;
  name: string;
  email: string;
}

export interface GET_ORDER_LOG_COLLECTION_order_log_order_products_aggregate_aggregate_sum {
  __typename: "order_product_sum_fields";
  price: any | null;
}

export interface GET_ORDER_LOG_COLLECTION_order_log_order_products_aggregate_aggregate {
  __typename: "order_product_aggregate_fields";
  sum: GET_ORDER_LOG_COLLECTION_order_log_order_products_aggregate_aggregate_sum | null;
}

export interface GET_ORDER_LOG_COLLECTION_order_log_order_products_aggregate {
  __typename: "order_product_aggregate";
  aggregate: GET_ORDER_LOG_COLLECTION_order_log_order_products_aggregate_aggregate | null;
}

export interface GET_ORDER_LOG_COLLECTION_order_log_order_discounts_aggregate_aggregate_sum {
  __typename: "order_discount_sum_fields";
  price: any | null;
}

export interface GET_ORDER_LOG_COLLECTION_order_log_order_discounts_aggregate_aggregate {
  __typename: "order_discount_aggregate_fields";
  sum: GET_ORDER_LOG_COLLECTION_order_log_order_discounts_aggregate_aggregate_sum | null;
}

export interface GET_ORDER_LOG_COLLECTION_order_log_order_discounts_aggregate {
  __typename: "order_discount_aggregate";
  aggregate: GET_ORDER_LOG_COLLECTION_order_log_order_discounts_aggregate_aggregate | null;
}

export interface GET_ORDER_LOG_COLLECTION_order_log {
  __typename: "order_log";
  id: string;
  status: string;
  /**
   * An object relationship
   */
  member: GET_ORDER_LOG_COLLECTION_order_log_member;
  created_at: any;
  updated_at: any | null;
  /**
   * name | email | phone | address | postCode | buyerPhone | uniformTitle | uniformNumber
   */
  invoice: any;
  /**
   * An aggregated array relationship
   */
  order_products_aggregate: GET_ORDER_LOG_COLLECTION_order_log_order_products_aggregate;
  /**
   * An aggregated array relationship
   */
  order_discounts_aggregate: GET_ORDER_LOG_COLLECTION_order_log_order_discounts_aggregate;
}

export interface GET_ORDER_LOG_COLLECTION {
  /**
   * fetch data from the table: "order_log"
   */
  order_log: GET_ORDER_LOG_COLLECTION_order_log[];
}

export interface GET_ORDER_LOG_COLLECTIONVariables {
  appId: string;
  startedAt: any;
  endedAt: any;
  orderStatuses?: string[] | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_ORDER_PRODUCT_COLLECTION
// ====================================================

export interface GET_ORDER_PRODUCT_COLLECTION_order_product_order_log {
  __typename: "order_log";
  id: string;
  /**
   * name | email | phone | address | postCode | buyerPhone | uniformTitle | uniformNumber
   */
  name: any;
  /**
   * name | email | phone | address | postCode | buyerPhone | uniformTitle | uniformNumber
   */
  phone: any;
}

export interface GET_ORDER_PRODUCT_COLLECTION_order_product_product {
  __typename: "product";
  /**
   * {type}_{target}, ex: Program_123-456, ProgramPlan_123-456
   */
  id: string;
  /**
   * Program / ProgramPlan / ProgramContent / ProgramPackagePlan / ActivityTicket / Card / Merchandise / ProjectPlan / PodcastProgram / PodcastPlan / AppointmentServicePlan
   */
  type: string;
}

export interface GET_ORDER_PRODUCT_COLLECTION_order_product {
  __typename: "order_product";
  id: any;
  /**
   * An object relationship
   */
  order_log: GET_ORDER_PRODUCT_COLLECTION_order_product_order_log;
  /**
   * An object relationship
   */
  product: GET_ORDER_PRODUCT_COLLECTION_order_product_product;
  name: string;
  price: any;
  started_at: any | null;
  ended_at: any | null;
  auto_renewed: boolean;
}

export interface GET_ORDER_PRODUCT_COLLECTION {
  /**
   * fetch data from the table: "order_product"
   */
  order_product: GET_ORDER_PRODUCT_COLLECTION_order_product[];
}

export interface GET_ORDER_PRODUCT_COLLECTIONVariables {
  appId: string;
  startedAt: any;
  endedAt: any;
  orderStatuses?: string[] | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_ORDER_DISCOUNT_COLLECTION
// ====================================================

export interface GET_ORDER_DISCOUNT_COLLECTION_order_discount_order_log {
  __typename: "order_log";
  id: string;
  /**
   * name | email | phone | address | postCode | buyerPhone | uniformTitle | uniformNumber
   */
  invoice: any;
}

export interface GET_ORDER_DISCOUNT_COLLECTION_order_discount {
  __typename: "order_discount";
  id: any;
  /**
   * An object relationship
   */
  order_log: GET_ORDER_DISCOUNT_COLLECTION_order_discount_order_log;
  /**
   * Coupon / Voucher / Card / DownPrice
   */
  type: string | null;
  target: string | null;
  name: string;
  price: any;
}

export interface GET_ORDER_DISCOUNT_COLLECTION {
  /**
   * fetch data from the table: "order_discount"
   */
  order_discount: GET_ORDER_DISCOUNT_COLLECTION_order_discount[];
}

export interface GET_ORDER_DISCOUNT_COLLECTIONVariables {
  appId: string;
  startedAt: any;
  endedAt: any;
  orderStatuses?: string[] | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_PAYMENT_LOG_COLLECTION
// ====================================================

export interface GET_PAYMENT_LOG_COLLECTION_payment_log_order_log_member {
  __typename: "member";
  id: string;
  name: string;
  email: string;
}

export interface GET_PAYMENT_LOG_COLLECTION_payment_log_order_log_order_products_aggregate_aggregate_sum {
  __typename: "order_product_sum_fields";
  price: any | null;
}

export interface GET_PAYMENT_LOG_COLLECTION_payment_log_order_log_order_products_aggregate_aggregate {
  __typename: "order_product_aggregate_fields";
  sum: GET_PAYMENT_LOG_COLLECTION_payment_log_order_log_order_products_aggregate_aggregate_sum | null;
}

export interface GET_PAYMENT_LOG_COLLECTION_payment_log_order_log_order_products_aggregate {
  __typename: "order_product_aggregate";
  aggregate: GET_PAYMENT_LOG_COLLECTION_payment_log_order_log_order_products_aggregate_aggregate | null;
}

export interface GET_PAYMENT_LOG_COLLECTION_payment_log_order_log {
  __typename: "order_log";
  id: string;
  /**
   * An object relationship
   */
  member: GET_PAYMENT_LOG_COLLECTION_payment_log_order_log_member;
  status: string;
  /**
   * An aggregated array relationship
   */
  order_products_aggregate: GET_PAYMENT_LOG_COLLECTION_payment_log_order_log_order_products_aggregate;
}

export interface GET_PAYMENT_LOG_COLLECTION_payment_log {
  __typename: "payment_log";
  /**
   * An object relationship
   */
  order_log: GET_PAYMENT_LOG_COLLECTION_payment_log_order_log;
  no: any;
  status: string | null;
  /**
   * merchant order number 
   */
  created_at: any;
  paid_at: any | null;
  price: any | null;
}

export interface GET_PAYMENT_LOG_COLLECTION {
  /**
   * fetch data from the table: "payment_log"
   */
  payment_log: GET_PAYMENT_LOG_COLLECTION_payment_log[];
}

export interface GET_PAYMENT_LOG_COLLECTIONVariables {
  appId: string;
  startedAt: any;
  endedAt: any;
  orderStatuses?: string[] | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_PODCAST_PROGRAM_ADMIN_COLLECTION
// ====================================================

export interface GET_PODCAST_PROGRAM_ADMIN_COLLECTION_podcast_program_creator {
  __typename: "member_public";
  id: string | null;
  name: string | null;
  username: string | null;
}

export interface GET_PODCAST_PROGRAM_ADMIN_COLLECTION_podcast_program_podcast_program_categories_category {
  __typename: "category";
  id: string;
  name: string;
}

export interface GET_PODCAST_PROGRAM_ADMIN_COLLECTION_podcast_program_podcast_program_categories {
  __typename: "podcast_program_category";
  id: any;
  /**
   * An object relationship
   */
  category: GET_PODCAST_PROGRAM_ADMIN_COLLECTION_podcast_program_podcast_program_categories_category;
}

export interface GET_PODCAST_PROGRAM_ADMIN_COLLECTION_podcast_program_podcast_program_roles_member {
  __typename: "member_public";
  id: string | null;
  name: string | null;
  username: string | null;
}

export interface GET_PODCAST_PROGRAM_ADMIN_COLLECTION_podcast_program_podcast_program_roles {
  __typename: "podcast_program_role";
  id: any;
  /**
   * An object relationship
   */
  member: GET_PODCAST_PROGRAM_ADMIN_COLLECTION_podcast_program_podcast_program_roles_member | null;
}

export interface GET_PODCAST_PROGRAM_ADMIN_COLLECTION_podcast_program_podcast_program_enrollments_aggregate_aggregate {
  __typename: "podcast_program_enrollment_aggregate_fields";
  count: number | null;
}

export interface GET_PODCAST_PROGRAM_ADMIN_COLLECTION_podcast_program_podcast_program_enrollments_aggregate {
  __typename: "podcast_program_enrollment_aggregate";
  aggregate: GET_PODCAST_PROGRAM_ADMIN_COLLECTION_podcast_program_podcast_program_enrollments_aggregate_aggregate | null;
}

export interface GET_PODCAST_PROGRAM_ADMIN_COLLECTION_podcast_program {
  __typename: "podcast_program";
  id: any;
  title: string;
  cover_url: string | null;
  abstract: string | null;
  list_price: any;
  sale_price: any | null;
  sold_at: any | null;
  published_at: any | null;
  /**
   * An object relationship
   */
  creator: GET_PODCAST_PROGRAM_ADMIN_COLLECTION_podcast_program_creator | null;
  /**
   * An array relationship
   */
  podcast_program_categories: GET_PODCAST_PROGRAM_ADMIN_COLLECTION_podcast_program_podcast_program_categories[];
  /**
   * An array relationship
   */
  podcast_program_roles: GET_PODCAST_PROGRAM_ADMIN_COLLECTION_podcast_program_podcast_program_roles[];
  /**
   * An aggregated array relationship
   */
  podcast_program_enrollments_aggregate: GET_PODCAST_PROGRAM_ADMIN_COLLECTION_podcast_program_podcast_program_enrollments_aggregate;
}

export interface GET_PODCAST_PROGRAM_ADMIN_COLLECTION {
  /**
   * fetch data from the table: "podcast_program"
   */
  podcast_program: GET_PODCAST_PROGRAM_ADMIN_COLLECTION_podcast_program[];
}

export interface GET_PODCAST_PROGRAM_ADMIN_COLLECTIONVariables {
  memberId?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_PODCAST_PROGRAM_ADMIN
// ====================================================

export interface GET_PODCAST_PROGRAM_ADMIN_podcast_program_by_pk_podcast_program_bodies {
  __typename: "podcast_program_body";
  id: any;
  description: string;
}

export interface GET_PODCAST_PROGRAM_ADMIN_podcast_program_by_pk_podcast_program_categories_category {
  __typename: "category";
  id: string;
  name: string;
}

export interface GET_PODCAST_PROGRAM_ADMIN_podcast_program_by_pk_podcast_program_categories {
  __typename: "podcast_program_category";
  id: any;
  /**
   * An object relationship
   */
  category: GET_PODCAST_PROGRAM_ADMIN_podcast_program_by_pk_podcast_program_categories_category;
}

export interface GET_PODCAST_PROGRAM_ADMIN_podcast_program_by_pk_podcast_program_tags_tag {
  __typename: "tag";
  name: string;
}

export interface GET_PODCAST_PROGRAM_ADMIN_podcast_program_by_pk_podcast_program_tags {
  __typename: "podcast_program_tag";
  id: any;
  /**
   * An object relationship
   */
  tag: GET_PODCAST_PROGRAM_ADMIN_podcast_program_by_pk_podcast_program_tags_tag;
}

export interface GET_PODCAST_PROGRAM_ADMIN_podcast_program_by_pk_podcast_program_roles_member {
  __typename: "member_public";
  id: string | null;
  picture_url: string | null;
  name: string | null;
  username: string | null;
}

export interface GET_PODCAST_PROGRAM_ADMIN_podcast_program_by_pk_podcast_program_roles {
  __typename: "podcast_program_role";
  id: any;
  /**
   * instructor
   */
  name: string;
  /**
   * An object relationship
   */
  member: GET_PODCAST_PROGRAM_ADMIN_podcast_program_by_pk_podcast_program_roles_member | null;
}

export interface GET_PODCAST_PROGRAM_ADMIN_podcast_program_by_pk {
  __typename: "podcast_program";
  id: any;
  title: string;
  cover_url: string | null;
  abstract: string | null;
  list_price: any;
  sale_price: any | null;
  sold_at: any | null;
  content_type: string | null;
  duration: any;
  published_at: any | null;
  creator_id: string;
  support_locales: any | null;
  /**
   * An array relationship
   */
  podcast_program_bodies: GET_PODCAST_PROGRAM_ADMIN_podcast_program_by_pk_podcast_program_bodies[];
  /**
   * An array relationship
   */
  podcast_program_categories: GET_PODCAST_PROGRAM_ADMIN_podcast_program_by_pk_podcast_program_categories[];
  /**
   * An array relationship
   */
  podcast_program_tags: GET_PODCAST_PROGRAM_ADMIN_podcast_program_by_pk_podcast_program_tags[];
  /**
   * An array relationship
   */
  podcast_program_roles: GET_PODCAST_PROGRAM_ADMIN_podcast_program_by_pk_podcast_program_roles[];
}

export interface GET_PODCAST_PROGRAM_ADMIN {
  /**
   * fetch data from the table: "podcast_program" using primary key columns
   */
  podcast_program_by_pk: GET_PODCAST_PROGRAM_ADMIN_podcast_program_by_pk | null;
}

export interface GET_PODCAST_PROGRAM_ADMINVariables {
  podcastProgramId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_PODCAST_PLAN_ADMIN_COLLECTION
// ====================================================

export interface GET_PODCAST_PLAN_ADMIN_COLLECTION_podcast_plan_podcast_plan_enrollments_aggregate_aggregate {
  __typename: "podcast_plan_enrollment_aggregate_fields";
  count: number | null;
}

export interface GET_PODCAST_PLAN_ADMIN_COLLECTION_podcast_plan_podcast_plan_enrollments_aggregate {
  __typename: "podcast_plan_enrollment_aggregate";
  aggregate: GET_PODCAST_PLAN_ADMIN_COLLECTION_podcast_plan_podcast_plan_enrollments_aggregate_aggregate | null;
}

export interface GET_PODCAST_PLAN_ADMIN_COLLECTION_podcast_plan_creator {
  __typename: "member_public";
  id: string | null;
  name: string | null;
  username: string | null;
  picture_url: string | null;
}

export interface GET_PODCAST_PLAN_ADMIN_COLLECTION_podcast_plan {
  __typename: "podcast_plan";
  id: any;
  is_subscription: boolean;
  period_type: string;
  period_amount: any;
  list_price: any;
  sale_price: any | null;
  sold_at: any | null;
  published_at: any | null;
  /**
   * An aggregated array relationship
   */
  podcast_plan_enrollments_aggregate: GET_PODCAST_PLAN_ADMIN_COLLECTION_podcast_plan_podcast_plan_enrollments_aggregate;
  creator_id: string;
  /**
   * An object relationship
   */
  creator: GET_PODCAST_PLAN_ADMIN_COLLECTION_podcast_plan_creator | null;
}

export interface GET_PODCAST_PLAN_ADMIN_COLLECTION {
  /**
   * fetch data from the table: "podcast_plan"
   */
  podcast_plan: GET_PODCAST_PLAN_ADMIN_COLLECTION_podcast_plan[];
}

export interface GET_PODCAST_PLAN_ADMIN_COLLECTIONVariables {
  creatorId?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_PODCAST_PLAN
// ====================================================

export interface GET_PODCAST_PLAN_podcast_plan_by_pk {
  __typename: "podcast_plan";
  id: any;
  creator_id: string;
  period_type: string;
  period_amount: any;
  list_price: any;
  sale_price: any | null;
  sold_at: any | null;
  published_at: any | null;
}

export interface GET_PODCAST_PLAN {
  /**
   * fetch data from the table: "podcast_plan" using primary key columns
   */
  podcast_plan_by_pk: GET_PODCAST_PLAN_podcast_plan_by_pk | null;
}

export interface GET_PODCAST_PLANVariables {
  podcastPlanId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_PODCAST_PROGRAM_CONTENT
// ====================================================

export interface UPDATE_PODCAST_PROGRAM_CONTENT_update_podcast_program {
  __typename: "podcast_program_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_PODCAST_PROGRAM_CONTENT {
  /**
   * update data of the table: "podcast_program"
   */
  update_podcast_program: UPDATE_PODCAST_PROGRAM_CONTENT_update_podcast_program | null;
}

export interface UPDATE_PODCAST_PROGRAM_CONTENTVariables {
  podcastProgramId: any;
  contentType?: string | null;
  updatedAt: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_PROGRAM_PREVIEW_COLLECTION
// ====================================================

export interface GET_PROGRAM_PREVIEW_COLLECTION_program_program_roles_member {
  __typename: "member_public";
  id: string | null;
  picture_url: string | null;
  name: string | null;
  username: string | null;
}

export interface GET_PROGRAM_PREVIEW_COLLECTION_program_program_roles {
  __typename: "program_role";
  id: any;
  /**
   * An object relationship
   */
  member: GET_PROGRAM_PREVIEW_COLLECTION_program_program_roles_member | null;
}

export interface GET_PROGRAM_PREVIEW_COLLECTION_program_program_plans_program_plan_enrollments_aggregate_aggregate {
  __typename: "program_plan_enrollment_aggregate_fields";
  count: number | null;
}

export interface GET_PROGRAM_PREVIEW_COLLECTION_program_program_plans_program_plan_enrollments_aggregate {
  __typename: "program_plan_enrollment_aggregate";
  aggregate: GET_PROGRAM_PREVIEW_COLLECTION_program_program_plans_program_plan_enrollments_aggregate_aggregate | null;
}

export interface GET_PROGRAM_PREVIEW_COLLECTION_program_program_plans {
  __typename: "program_plan";
  id: any;
  list_price: any;
  sale_price: any | null;
  sold_at: any | null;
  period_type: string | null;
  /**
   * An aggregated array relationship
   */
  program_plan_enrollments_aggregate: GET_PROGRAM_PREVIEW_COLLECTION_program_program_plans_program_plan_enrollments_aggregate;
}

export interface GET_PROGRAM_PREVIEW_COLLECTION_program_program_enrollments_aggregate_aggregate {
  __typename: "program_enrollment_aggregate_fields";
  count: number | null;
}

export interface GET_PROGRAM_PREVIEW_COLLECTION_program_program_enrollments_aggregate {
  __typename: "program_enrollment_aggregate";
  aggregate: GET_PROGRAM_PREVIEW_COLLECTION_program_program_enrollments_aggregate_aggregate | null;
}

export interface GET_PROGRAM_PREVIEW_COLLECTION_program {
  __typename: "program";
  id: any;
  cover_url: string | null;
  title: string;
  abstract: string | null;
  /**
   * An array relationship
   */
  program_roles: GET_PROGRAM_PREVIEW_COLLECTION_program_program_roles[];
  is_subscription: boolean;
  list_price: any | null;
  sale_price: any | null;
  sold_at: any | null;
  /**
   * An array relationship
   */
  program_plans: GET_PROGRAM_PREVIEW_COLLECTION_program_program_plans[];
  /**
   * An aggregated array relationship
   */
  program_enrollments_aggregate: GET_PROGRAM_PREVIEW_COLLECTION_program_program_enrollments_aggregate;
  published_at: any | null;
  is_private: boolean;
}

export interface GET_PROGRAM_PREVIEW_COLLECTION {
  /**
   * fetch data from the table: "program"
   */
  program: GET_PROGRAM_PREVIEW_COLLECTION_program[];
}

export interface GET_PROGRAM_PREVIEW_COLLECTIONVariables {
  memberId?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_PROGRAM
// ====================================================

export interface GET_PROGRAM_program_by_pk_program_content_sections_program_contents_program_content_type {
  __typename: "program_content_type";
  id: any | null;
  type: string | null;
}

export interface GET_PROGRAM_program_by_pk_program_content_sections_program_contents_program_content_plans_program_plan {
  __typename: "program_plan";
  id: any;
  title: string;
}

export interface GET_PROGRAM_program_by_pk_program_content_sections_program_contents_program_content_plans {
  __typename: "program_content_plan";
  id: any;
  /**
   * An object relationship
   */
  program_plan: GET_PROGRAM_program_by_pk_program_content_sections_program_contents_program_content_plans_program_plan;
}

export interface GET_PROGRAM_program_by_pk_program_content_sections_program_contents {
  __typename: "program_content";
  id: any;
  title: string;
  published_at: any | null;
  list_price: any | null;
  /**
   * sec
   */
  duration: any | null;
  is_notify_update: boolean;
  notified_at: any | null;
  /**
   * An object relationship
   */
  program_content_type: GET_PROGRAM_program_by_pk_program_content_sections_program_contents_program_content_type | null;
  /**
   * An array relationship
   */
  program_content_plans: GET_PROGRAM_program_by_pk_program_content_sections_program_contents_program_content_plans[];
}

export interface GET_PROGRAM_program_by_pk_program_content_sections {
  __typename: "program_content_section";
  id: any;
  title: string;
  /**
   * An array relationship
   */
  program_contents: GET_PROGRAM_program_by_pk_program_content_sections_program_contents[];
}

export interface GET_PROGRAM_program_by_pk_program_roles_member {
  __typename: "member_public";
  id: string | null;
  name: string | null;
  picture_url: string | null;
}

export interface GET_PROGRAM_program_by_pk_program_roles {
  __typename: "program_role";
  id: any;
  /**
   * instructor / assistant 
   */
  name: string;
  /**
   * An object relationship
   */
  member: GET_PROGRAM_program_by_pk_program_roles_member | null;
}

export interface GET_PROGRAM_program_by_pk_program_plans {
  __typename: "program_plan";
  id: any;
  /**
   * 1 - subscribe from now / 2 - subscribe all / 3 - all
   */
  type: number;
  title: string;
  description: string | null;
  gains: any | null;
  sale_price: any | null;
  discount_down_price: any;
  list_price: any;
  period_amount: any | null;
  period_type: string | null;
  sold_at: any | null;
  currency_id: string;
  auto_renewed: boolean;
  published_at: any | null;
}

export interface GET_PROGRAM_program_by_pk_program_categories_category {
  __typename: "category";
  id: string;
  name: string;
}

export interface GET_PROGRAM_program_by_pk_program_categories {
  __typename: "program_category";
  /**
   * An object relationship
   */
  category: GET_PROGRAM_program_by_pk_program_categories_category;
}

export interface GET_PROGRAM_program_by_pk_program_tags_tag {
  __typename: "tag";
  name: string;
}

export interface GET_PROGRAM_program_by_pk_program_tags {
  __typename: "program_tag";
  id: any;
  /**
   * An object relationship
   */
  tag: GET_PROGRAM_program_by_pk_program_tags_tag;
}

export interface GET_PROGRAM_program_by_pk {
  __typename: "program";
  id: any;
  app_id: string;
  title: string;
  abstract: string | null;
  description: string | null;
  is_subscription: boolean;
  sold_at: any | null;
  sale_price: any | null;
  list_price: any | null;
  cover_url: string | null;
  cover_video_url: string | null;
  published_at: any | null;
  in_advance: boolean;
  is_sold_out: boolean | null;
  support_locales: any | null;
  is_deleted: boolean;
  is_private: boolean;
  is_issues_open: boolean;
  /**
   * An array relationship
   */
  program_content_sections: GET_PROGRAM_program_by_pk_program_content_sections[];
  /**
   * An array relationship
   */
  program_roles: GET_PROGRAM_program_by_pk_program_roles[];
  /**
   * An array relationship
   */
  program_plans: GET_PROGRAM_program_by_pk_program_plans[];
  /**
   * An array relationship
   */
  program_categories: GET_PROGRAM_program_by_pk_program_categories[];
  /**
   * An array relationship
   */
  program_tags: GET_PROGRAM_program_by_pk_program_tags[];
}

export interface GET_PROGRAM {
  /**
   * fetch data from the table: "program" using primary key columns
   */
  program_by_pk: GET_PROGRAM_program_by_pk | null;
}

export interface GET_PROGRAMVariables {
  programId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_PROGRAM_CONTENT
// ====================================================

export interface GET_PROGRAM_CONTENT_program_content_by_pk_program_content_plans_program_plan {
  __typename: "program_plan";
  id: any;
  title: string;
}

export interface GET_PROGRAM_CONTENT_program_content_by_pk_program_content_plans {
  __typename: "program_content_plan";
  id: any;
  /**
   * An object relationship
   */
  program_plan: GET_PROGRAM_CONTENT_program_content_by_pk_program_content_plans_program_plan;
}

export interface GET_PROGRAM_CONTENT_program_content_by_pk_program_content_body {
  __typename: "program_content_body";
  id: any;
  description: string | null;
  data: any | null;
  type: string | null;
}

export interface GET_PROGRAM_CONTENT_program_content_by_pk_program_content_progress {
  __typename: "program_content_progress";
  id: any;
  progress: any;
}

export interface GET_PROGRAM_CONTENT_program_content_by_pk {
  __typename: "program_content";
  id: any;
  title: string;
  abstract: string | null;
  created_at: any;
  list_price: any | null;
  sale_price: any | null;
  sold_at: any | null;
  metadata: any | null;
  /**
   * sec
   */
  duration: any | null;
  published_at: any | null;
  is_notify_update: boolean;
  notified_at: any | null;
  /**
   * An array relationship
   */
  program_content_plans: GET_PROGRAM_CONTENT_program_content_by_pk_program_content_plans[];
  /**
   * An object relationship
   */
  program_content_body: GET_PROGRAM_CONTENT_program_content_by_pk_program_content_body;
  /**
   * An array relationship
   */
  program_content_progress: GET_PROGRAM_CONTENT_program_content_by_pk_program_content_progress[];
}

export interface GET_PROGRAM_CONTENT {
  /**
   * fetch data from the table: "program_content" using primary key columns
   */
  program_content_by_pk: GET_PROGRAM_CONTENT_program_content_by_pk | null;
}

export interface GET_PROGRAM_CONTENTVariables {
  programContentId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_OWNED_PROGRAMS
// ====================================================

export interface GET_OWNED_PROGRAMS_program {
  __typename: "program";
  id: any;
  title: string;
}

export interface GET_OWNED_PROGRAMS {
  /**
   * fetch data from the table: "program"
   */
  program: GET_OWNED_PROGRAMS_program[];
}

export interface GET_OWNED_PROGRAMSVariables {
  appId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_EDITABLE_PROGRAMS
// ====================================================

export interface GET_EDITABLE_PROGRAMS_program {
  __typename: "program";
  id: any;
  title: string;
}

export interface GET_EDITABLE_PROGRAMS {
  /**
   * fetch data from the table: "program"
   */
  program: GET_EDITABLE_PROGRAMS_program[];
}

export interface GET_EDITABLE_PROGRAMSVariables {
  memberId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_PROGRAM_CONTENT_ENROLLMENT
// ====================================================

export interface GET_PROGRAM_CONTENT_ENROLLMENT_program_content_enrollment_program {
  __typename: "program";
  title: string;
}

export interface GET_PROGRAM_CONTENT_ENROLLMENT_program_content_enrollment {
  __typename: "program_content_enrollment";
  program_id: any | null;
  /**
   * An object relationship
   */
  program: GET_PROGRAM_CONTENT_ENROLLMENT_program_content_enrollment_program | null;
}

export interface GET_PROGRAM_CONTENT_ENROLLMENT {
  /**
   * fetch data from the table: "program_content_enrollment"
   */
  program_content_enrollment: GET_PROGRAM_CONTENT_ENROLLMENT_program_content_enrollment[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_PROGRAM_PROGRESS
// ====================================================

export interface GET_PROGRAM_PROGRESS_member_program_content_enrollments_program_program_content_sections_program_contents_aggregate_aggregate_sum {
  __typename: "program_content_sum_fields";
  duration: any | null;
}

export interface GET_PROGRAM_PROGRESS_member_program_content_enrollments_program_program_content_sections_program_contents_aggregate_aggregate {
  __typename: "program_content_aggregate_fields";
  count: number | null;
  sum: GET_PROGRAM_PROGRESS_member_program_content_enrollments_program_program_content_sections_program_contents_aggregate_aggregate_sum | null;
}

export interface GET_PROGRAM_PROGRESS_member_program_content_enrollments_program_program_content_sections_program_contents_aggregate {
  __typename: "program_content_aggregate";
  aggregate: GET_PROGRAM_PROGRESS_member_program_content_enrollments_program_program_content_sections_program_contents_aggregate_aggregate | null;
}

export interface GET_PROGRAM_PROGRESS_member_program_content_enrollments_program_program_content_sections {
  __typename: "program_content_section";
  /**
   * An aggregated array relationship
   */
  program_contents_aggregate: GET_PROGRAM_PROGRESS_member_program_content_enrollments_program_program_content_sections_program_contents_aggregate;
}

export interface GET_PROGRAM_PROGRESS_member_program_content_enrollments_program {
  __typename: "program";
  id: any;
  /**
   * An array relationship
   */
  program_content_sections: GET_PROGRAM_PROGRESS_member_program_content_enrollments_program_program_content_sections[];
}

export interface GET_PROGRAM_PROGRESS_member_program_content_enrollments {
  __typename: "program_content_enrollment";
  program_id: any | null;
  member_id: string | null;
  /**
   * An object relationship
   */
  program: GET_PROGRAM_PROGRESS_member_program_content_enrollments_program | null;
}

export interface GET_PROGRAM_PROGRESS_member_program_content_progresses {
  __typename: "program_content_progress";
  id: any;
  member_id: string;
  progress: any;
}

export interface GET_PROGRAM_PROGRESS_member {
  __typename: "member";
  id: string;
  username: string;
  name: string;
  email: string;
  picture_url: string | null;
  /**
   * An array relationship
   */
  program_content_enrollments: GET_PROGRAM_PROGRESS_member_program_content_enrollments[];
  /**
   * An array relationship
   */
  program_content_progresses: GET_PROGRAM_PROGRESS_member_program_content_progresses[];
}

export interface GET_PROGRAM_PROGRESS {
  /**
   * fetch data from the table: "member"
   */
  member: GET_PROGRAM_PROGRESS_member[];
}

export interface GET_PROGRAM_PROGRESSVariables {
  programId?: any | null;
  offset?: number | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_PROGRAM_PACKAGE_COLLECTION
// ====================================================

export interface GET_PROGRAM_PACKAGE_COLLECTION_program_package {
  __typename: "program_package";
  id: any;
  title: string;
}

export interface GET_PROGRAM_PACKAGE_COLLECTION {
  /**
   * fetch data from the table: "program_package"
   */
  program_package: GET_PROGRAM_PACKAGE_COLLECTION_program_package[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_PROGRAM_PACKAGE_PLAN_COLLECTION
// ====================================================

export interface GET_PROGRAM_PACKAGE_PLAN_COLLECTION_program_package_plan {
  __typename: "program_package_plan";
  id: any;
  title: string;
}

export interface GET_PROGRAM_PACKAGE_PLAN_COLLECTION {
  /**
   * fetch data from the table: "program_package_plan"
   */
  program_package_plan: GET_PROGRAM_PACKAGE_PLAN_COLLECTION_program_package_plan[];
}

export interface GET_PROGRAM_PACKAGE_PLAN_COLLECTIONVariables {
  programPackageIds?: any[] | null;
  isTempoDelivery?: boolean | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_PROGRAM_PACKAGE_PROGRAM_COLLECTION
// ====================================================

export interface GET_PROGRAM_PACKAGE_PROGRAM_COLLECTION_program_package_program_program {
  __typename: "program";
  id: any;
  title: string;
}

export interface GET_PROGRAM_PACKAGE_PROGRAM_COLLECTION_program_package_program {
  __typename: "program_package_program";
  id: any;
  /**
   * An object relationship
   */
  program: GET_PROGRAM_PACKAGE_PROGRAM_COLLECTION_program_package_program_program;
}

export interface GET_PROGRAM_PACKAGE_PROGRAM_COLLECTION {
  /**
   * fetch data from the table: "program_package_program"
   */
  program_package_program: GET_PROGRAM_PACKAGE_PROGRAM_COLLECTION_program_package_program[];
}

export interface GET_PROGRAM_PACKAGE_PROGRAM_COLLECTIONVariables {
  programPackageIds?: any[] | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_PROGRAM_PACKAGE_PLAN_ENROLLMENT
// ====================================================

export interface GET_PROGRAM_PACKAGE_PLAN_ENROLLMENT_program_package_plan_enrollment_member {
  __typename: "member";
  id: string;
  picture_url: string | null;
  name: string;
  username: string;
  email: string;
}

export interface GET_PROGRAM_PACKAGE_PLAN_ENROLLMENT_program_package_plan_enrollment {
  __typename: "program_package_plan_enrollment";
  /**
   * An object relationship
   */
  member: GET_PROGRAM_PACKAGE_PLAN_ENROLLMENT_program_package_plan_enrollment_member | null;
}

export interface GET_PROGRAM_PACKAGE_PLAN_ENROLLMENT {
  /**
   * fetch data from the table: "program_package_plan_enrollment"
   */
  program_package_plan_enrollment: GET_PROGRAM_PACKAGE_PLAN_ENROLLMENT_program_package_plan_enrollment[];
}

export interface GET_PROGRAM_PACKAGE_PLAN_ENROLLMENTVariables {
  programPackagePlanIds?: any[] | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_PROGRAM_TEMPO_DELIVERY
// ====================================================

export interface GET_PROGRAM_TEMPO_DELIVERY_program_tempo_delivery_program_package_program {
  __typename: "program_package_program";
  id: any;
  program_id: any;
}

export interface GET_PROGRAM_TEMPO_DELIVERY_program_tempo_delivery {
  __typename: "program_tempo_delivery";
  member_id: string;
  /**
   * An object relationship
   */
  program_package_program: GET_PROGRAM_TEMPO_DELIVERY_program_tempo_delivery_program_package_program;
  delivered_at: any;
}

export interface GET_PROGRAM_TEMPO_DELIVERY {
  /**
   * fetch data from the table: "program_tempo_delivery"
   */
  program_tempo_delivery: GET_PROGRAM_TEMPO_DELIVERY_program_tempo_delivery[];
}

export interface GET_PROGRAM_TEMPO_DELIVERYVariables {
  programPackageIds?: any[] | null;
  memberIds?: string[] | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DELIVER_PROGRAM_COLLECTION
// ====================================================

export interface DELIVER_PROGRAM_COLLECTION_insert_program_tempo_delivery {
  __typename: "program_tempo_delivery_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface DELIVER_PROGRAM_COLLECTION {
  /**
   * insert data into the table: "program_tempo_delivery"
   */
  insert_program_tempo_delivery: DELIVER_PROGRAM_COLLECTION_insert_program_tempo_delivery | null;
}

export interface DELIVER_PROGRAM_COLLECTIONVariables {
  data: program_tempo_delivery_insert_input[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_PROGRAM_PACKAGES
// ====================================================

export interface GET_PROGRAM_PACKAGES_program_package_program_package_plans_program_package_plan_enrollments_aggregate_aggregate {
  __typename: "program_package_plan_enrollment_aggregate_fields";
  count: number | null;
}

export interface GET_PROGRAM_PACKAGES_program_package_program_package_plans_program_package_plan_enrollments_aggregate {
  __typename: "program_package_plan_enrollment_aggregate";
  aggregate: GET_PROGRAM_PACKAGES_program_package_program_package_plans_program_package_plan_enrollments_aggregate_aggregate | null;
}

export interface GET_PROGRAM_PACKAGES_program_package_program_package_plans {
  __typename: "program_package_plan";
  /**
   * An aggregated array relationship
   */
  program_package_plan_enrollments_aggregate: GET_PROGRAM_PACKAGES_program_package_program_package_plans_program_package_plan_enrollments_aggregate;
}

export interface GET_PROGRAM_PACKAGES_program_package {
  __typename: "program_package";
  id: any;
  cover_url: string | null;
  title: string;
  published_at: any | null;
  /**
   * An array relationship
   */
  program_package_plans: GET_PROGRAM_PACKAGES_program_package_program_package_plans[];
}

export interface GET_PROGRAM_PACKAGES {
  /**
   * fetch data from the table: "program_package"
   */
  program_package: GET_PROGRAM_PACKAGES_program_package[];
}

export interface GET_PROGRAM_PACKAGESVariables {
  appId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_PROGRAM_PACKAGE
// ====================================================

export interface GET_PROGRAM_PACKAGE_program_package_by_pk_program_package_programs_program {
  __typename: "program";
  id: any;
  title: string;
  cover_url: string | null;
}

export interface GET_PROGRAM_PACKAGE_program_package_by_pk_program_package_programs {
  __typename: "program_package_program";
  id: any;
  /**
   * An object relationship
   */
  program: GET_PROGRAM_PACKAGE_program_package_by_pk_program_package_programs_program;
  position: number;
}

export interface GET_PROGRAM_PACKAGE_program_package_by_pk_program_package_plans_program_package_plan_enrollments_aggregate_aggregate {
  __typename: "program_package_plan_enrollment_aggregate_fields";
  count: number | null;
}

export interface GET_PROGRAM_PACKAGE_program_package_by_pk_program_package_plans_program_package_plan_enrollments_aggregate {
  __typename: "program_package_plan_enrollment_aggregate";
  aggregate: GET_PROGRAM_PACKAGE_program_package_by_pk_program_package_plans_program_package_plan_enrollments_aggregate_aggregate | null;
}

export interface GET_PROGRAM_PACKAGE_program_package_by_pk_program_package_plans {
  __typename: "program_package_plan";
  id: any;
  title: string;
  list_price: any;
  sale_price: any | null;
  sold_at: any | null;
  period_type: string;
  period_amount: any;
  description: string | null;
  is_subscription: boolean;
  discount_down_price: any | null;
  published_at: any | null;
  is_tempo_delivery: boolean;
  is_participants_visible: boolean;
  position: any;
  /**
   * An aggregated array relationship
   */
  program_package_plan_enrollments_aggregate: GET_PROGRAM_PACKAGE_program_package_by_pk_program_package_plans_program_package_plan_enrollments_aggregate;
}

export interface GET_PROGRAM_PACKAGE_program_package_by_pk {
  __typename: "program_package";
  title: string;
  cover_url: string | null;
  published_at: any | null;
  description: string | null;
  /**
   * An array relationship
   */
  program_package_programs: GET_PROGRAM_PACKAGE_program_package_by_pk_program_package_programs[];
  /**
   * An array relationship
   */
  program_package_plans: GET_PROGRAM_PACKAGE_program_package_by_pk_program_package_plans[];
}

export interface GET_PROGRAM_PACKAGE {
  /**
   * fetch data from the table: "program_package" using primary key columns
   */
  program_package_by_pk: GET_PROGRAM_PACKAGE_program_package_by_pk | null;
}

export interface GET_PROGRAM_PACKAGEVariables {
  id: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: INSERT_PROGRAM_PACKAGE
// ====================================================

export interface INSERT_PROGRAM_PACKAGE_insert_program_package_returning {
  __typename: "program_package";
  id: any;
}

export interface INSERT_PROGRAM_PACKAGE_insert_program_package {
  __typename: "program_package_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
  /**
   * data of the affected rows by the mutation
   */
  returning: INSERT_PROGRAM_PACKAGE_insert_program_package_returning[];
}

export interface INSERT_PROGRAM_PACKAGE {
  /**
   * insert data into the table: "program_package"
   */
  insert_program_package: INSERT_PROGRAM_PACKAGE_insert_program_package | null;
}

export interface INSERT_PROGRAM_PACKAGEVariables {
  title: string;
  appId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_COIN_RELEASE_HISTORY
// ====================================================

export interface GET_COIN_RELEASE_HISTORY_coin_log_member {
  __typename: "member";
  id: string;
  picture_url: string | null;
  name: string;
  username: string;
  email: string;
}

export interface GET_COIN_RELEASE_HISTORY_coin_log {
  __typename: "coin_log";
  id: any;
  /**
   * An object relationship
   */
  member: GET_COIN_RELEASE_HISTORY_coin_log_member;
  title: string;
  description: string;
  note: string | null;
  created_at: any;
  started_at: any | null;
  ended_at: any | null;
  amount: any;
}

export interface GET_COIN_RELEASE_HISTORY {
  /**
   * fetch data from the table: "coin_log"
   */
  coin_log: GET_COIN_RELEASE_HISTORY_coin_log[];
}

export interface GET_COIN_RELEASE_HISTORYVariables {
  offset?: number | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_COIN_ABOUT_TO_SEND
// ====================================================

export interface GET_COIN_ABOUT_TO_SEND_coin_log_member {
  __typename: "member";
  id: string;
  picture_url: string | null;
  name: string;
  username: string;
  email: string;
}

export interface GET_COIN_ABOUT_TO_SEND_coin_log {
  __typename: "coin_log";
  id: any;
  /**
   * An object relationship
   */
  member: GET_COIN_ABOUT_TO_SEND_coin_log_member;
  title: string;
  description: string;
  note: string | null;
  created_at: any;
  started_at: any | null;
  ended_at: any | null;
  amount: any;
}

export interface GET_COIN_ABOUT_TO_SEND {
  /**
   * fetch data from the table: "coin_log"
   */
  coin_log: GET_COIN_ABOUT_TO_SEND_coin_log[];
}

export interface GET_COIN_ABOUT_TO_SENDVariables {
  offset?: number | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_ORDER_LOG_WITH_COINS_COLLECTION
// ====================================================

export interface GET_ORDER_LOG_WITH_COINS_COLLECTION_order_log_member {
  __typename: "member";
  id: string;
  picture_url: string | null;
  name: string;
  username: string;
  email: string;
}

export interface GET_ORDER_LOG_WITH_COINS_COLLECTION_order_log_order_discounts {
  __typename: "order_discount";
  id: any;
  name: string;
}

export interface GET_ORDER_LOG_WITH_COINS_COLLECTION_order_log_order_discounts_aggregate_aggregate_sum {
  __typename: "order_discount_sum_fields";
  price: any | null;
}

export interface GET_ORDER_LOG_WITH_COINS_COLLECTION_order_log_order_discounts_aggregate_aggregate {
  __typename: "order_discount_aggregate_fields";
  sum: GET_ORDER_LOG_WITH_COINS_COLLECTION_order_log_order_discounts_aggregate_aggregate_sum | null;
}

export interface GET_ORDER_LOG_WITH_COINS_COLLECTION_order_log_order_discounts_aggregate {
  __typename: "order_discount_aggregate";
  aggregate: GET_ORDER_LOG_WITH_COINS_COLLECTION_order_log_order_discounts_aggregate_aggregate | null;
}

export interface GET_ORDER_LOG_WITH_COINS_COLLECTION_order_log {
  __typename: "order_log";
  id: string;
  created_at: any;
  /**
   * An object relationship
   */
  member: GET_ORDER_LOG_WITH_COINS_COLLECTION_order_log_member;
  /**
   * An array relationship
   */
  order_discounts: GET_ORDER_LOG_WITH_COINS_COLLECTION_order_log_order_discounts[];
  /**
   * An aggregated array relationship
   */
  order_discounts_aggregate: GET_ORDER_LOG_WITH_COINS_COLLECTION_order_log_order_discounts_aggregate;
}

export interface GET_ORDER_LOG_WITH_COINS_COLLECTION {
  /**
   * fetch data from the table: "order_log"
   */
  order_log: GET_ORDER_LOG_WITH_COINS_COLLECTION_order_log[];
}

export interface GET_ORDER_LOG_WITH_COINS_COLLECTIONVariables {
  offset?: number | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DELETE_COIN_LOG
// ====================================================

export interface DELETE_COIN_LOG_delete_coin_log {
  __typename: "coin_log_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface DELETE_COIN_LOG {
  /**
   * delete data from the table: "coin_log"
   */
  delete_coin_log: DELETE_COIN_LOG_delete_coin_log | null;
}

export interface DELETE_COIN_LOGVariables {
  coinLogId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_POINT_RELEASE_HISTORY
// ====================================================

export interface GET_POINT_RELEASE_HISTORY_point_log_member {
  __typename: "member";
  id: string;
  picture_url: string | null;
  name: string;
  username: string;
  email: string;
}

export interface GET_POINT_RELEASE_HISTORY_point_log {
  __typename: "point_log";
  id: any;
  /**
   * An object relationship
   */
  member: GET_POINT_RELEASE_HISTORY_point_log_member;
  description: string;
  note: string | null;
  created_at: any;
  started_at: any | null;
  ended_at: any | null;
  point: any;
}

export interface GET_POINT_RELEASE_HISTORY {
  /**
   * fetch data from the table: "point_log"
   */
  point_log: GET_POINT_RELEASE_HISTORY_point_log[];
}

export interface GET_POINT_RELEASE_HISTORYVariables {
  offset?: number | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_ORDER_LOG_WITH_POINTS_COLLECTION
// ====================================================

export interface GET_ORDER_LOG_WITH_POINTS_COLLECTION_order_log_member {
  __typename: "member";
  id: string;
  picture_url: string | null;
  name: string;
  username: string;
  email: string;
}

export interface GET_ORDER_LOG_WITH_POINTS_COLLECTION_order_log_order_discounts {
  __typename: "order_discount";
  id: any;
  name: string;
}

export interface GET_ORDER_LOG_WITH_POINTS_COLLECTION_order_log_order_discounts_aggregate_aggregate_sum {
  __typename: "order_discount_sum_fields";
  price: any | null;
}

export interface GET_ORDER_LOG_WITH_POINTS_COLLECTION_order_log_order_discounts_aggregate_aggregate {
  __typename: "order_discount_aggregate_fields";
  sum: GET_ORDER_LOG_WITH_POINTS_COLLECTION_order_log_order_discounts_aggregate_aggregate_sum | null;
}

export interface GET_ORDER_LOG_WITH_POINTS_COLLECTION_order_log_order_discounts_aggregate {
  __typename: "order_discount_aggregate";
  aggregate: GET_ORDER_LOG_WITH_POINTS_COLLECTION_order_log_order_discounts_aggregate_aggregate | null;
}

export interface GET_ORDER_LOG_WITH_POINTS_COLLECTION_order_log {
  __typename: "order_log";
  id: string;
  created_at: any;
  /**
   * An object relationship
   */
  member: GET_ORDER_LOG_WITH_POINTS_COLLECTION_order_log_member;
  /**
   * An array relationship
   */
  order_discounts: GET_ORDER_LOG_WITH_POINTS_COLLECTION_order_log_order_discounts[];
  /**
   * An aggregated array relationship
   */
  order_discounts_aggregate: GET_ORDER_LOG_WITH_POINTS_COLLECTION_order_log_order_discounts_aggregate;
}

export interface GET_ORDER_LOG_WITH_POINTS_COLLECTION {
  /**
   * fetch data from the table: "order_log"
   */
  order_log: GET_ORDER_LOG_WITH_POINTS_COLLECTION_order_log[];
}

export interface GET_ORDER_LOG_WITH_POINTS_COLLECTIONVariables {
  offset?: number | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DELETE_POINT_LOG
// ====================================================

export interface DELETE_POINT_LOG_delete_point_log {
  __typename: "point_log_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface DELETE_POINT_LOG {
  /**
   * delete data from the table: "point_log"
   */
  delete_point_log: DELETE_POINT_LOG_delete_point_log | null;
}

export interface DELETE_POINT_LOGVariables {
  pointLogId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: INSERT_PROGRAM
// ====================================================

export interface INSERT_PROGRAM_insert_program_returning {
  __typename: "program";
  id: any;
}

export interface INSERT_PROGRAM_insert_program {
  __typename: "program_mutation_response";
  /**
   * data of the affected rows by the mutation
   */
  returning: INSERT_PROGRAM_insert_program_returning[];
}

export interface INSERT_PROGRAM {
  /**
   * insert data into the table: "program"
   */
  insert_program: INSERT_PROGRAM_insert_program | null;
}

export interface INSERT_PROGRAMVariables {
  ownerId: string;
  instructorId: string;
  appId: string;
  title: string;
  isSubscription: boolean;
  programCategories: program_category_insert_input[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_PROGRAM_POSITION_COLLECTION
// ====================================================

export interface UPDATE_PROGRAM_POSITION_COLLECTION_insert_program {
  __typename: "program_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface UPDATE_PROGRAM_POSITION_COLLECTION {
  /**
   * insert data into the table: "program"
   */
  insert_program: UPDATE_PROGRAM_POSITION_COLLECTION_insert_program | null;
}

export interface UPDATE_PROGRAM_POSITION_COLLECTIONVariables {
  data: program_insert_input[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_CREATOR_PROGRAM_ISSUES
// ====================================================

export interface GET_CREATOR_PROGRAM_ISSUES_issue_issue_reactions {
  __typename: "issue_reaction";
  member_id: string;
}

export interface GET_CREATOR_PROGRAM_ISSUES_issue_issue_replies_aggregate_aggregate {
  __typename: "issue_reply_aggregate_fields";
  count: number | null;
}

export interface GET_CREATOR_PROGRAM_ISSUES_issue_issue_replies_aggregate {
  __typename: "issue_reply_aggregate";
  aggregate: GET_CREATOR_PROGRAM_ISSUES_issue_issue_replies_aggregate_aggregate | null;
}

export interface GET_CREATOR_PROGRAM_ISSUES_issue {
  __typename: "issue";
  id: any;
  title: string;
  description: string;
  solved_at: any | null;
  created_at: any;
  member_id: string;
  thread_id: string;
  /**
   * An array relationship
   */
  issue_reactions: GET_CREATOR_PROGRAM_ISSUES_issue_issue_reactions[];
  /**
   * An aggregated array relationship
   */
  issue_replies_aggregate: GET_CREATOR_PROGRAM_ISSUES_issue_issue_replies_aggregate;
}

export interface GET_CREATOR_PROGRAM_ISSUES {
  /**
   * fetch data from the table: "issue"
   */
  issue: GET_CREATOR_PROGRAM_ISSUES_issue[];
}

export interface GET_CREATOR_PROGRAM_ISSUESVariables {
  appId: string;
  threadIdLike?: string | null;
  unsolved?: boolean | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * unique or primary key constraints on table "activity_attendance"
 */
export enum activity_attendance_constraint {
  activity_attendance_order_product_id_activity_session_id_key = "activity_attendance_order_product_id_activity_session_id_key",
  activity_attendance_pkey = "activity_attendance_pkey",
}

/**
 * update columns of table "activity_attendance"
 */
export enum activity_attendance_update_column {
  activity_session_id = "activity_session_id",
  created_at = "created_at",
  id = "id",
  order_product_id = "order_product_id",
}

/**
 * unique or primary key constraints on table "activity_category"
 */
export enum activity_category_constraint {
  activity_category_pkey = "activity_category_pkey",
}

/**
 * update columns of table "activity_category"
 */
export enum activity_category_update_column {
  activity_id = "activity_id",
  category_id = "category_id",
  id = "id",
  position = "position",
}

/**
 * unique or primary key constraints on table "activity"
 */
export enum activity_constraint {
  activity_pkey = "activity_pkey",
}

/**
 * unique or primary key constraints on table "activity_session"
 */
export enum activity_session_constraint {
  activity_session_pkey = "activity_session_pkey",
}

/**
 * unique or primary key constraints on table "activity_session_ticket"
 */
export enum activity_session_ticket_constraint {
  activity_session_ticket_activity_session_id_activity_ticket_id_ = "activity_session_ticket_activity_session_id_activity_ticket_id_",
  activity_session_ticket_pkey = "activity_session_ticket_pkey",
}

/**
 * update columns of table "activity_session_ticket"
 */
export enum activity_session_ticket_update_column {
  activity_session_id = "activity_session_id",
  activity_ticket_id = "activity_ticket_id",
  id = "id",
}

/**
 * update columns of table "activity_session"
 */
export enum activity_session_update_column {
  activity_id = "activity_id",
  description = "description",
  ended_at = "ended_at",
  id = "id",
  location = "location",
  started_at = "started_at",
  threshold = "threshold",
  title = "title",
}

/**
 * unique or primary key constraints on table "activity_ticket"
 */
export enum activity_ticket_constraint {
  activity_ticket_pkey = "activity_ticket_pkey",
}

/**
 * update columns of table "activity_ticket"
 */
export enum activity_ticket_update_column {
  activity_id = "activity_id",
  count = "count",
  description = "description",
  ended_at = "ended_at",
  id = "id",
  is_published = "is_published",
  price = "price",
  started_at = "started_at",
  title = "title",
}

/**
 * update columns of table "activity"
 */
export enum activity_update_column {
  app_id = "app_id",
  cover_url = "cover_url",
  description = "description",
  id = "id",
  is_participants_visible = "is_participants_visible",
  organizer_id = "organizer_id",
  position = "position",
  published_at = "published_at",
  support_locales = "support_locales",
  title = "title",
}

/**
 * unique or primary key constraints on table "app_admin"
 */
export enum app_admin_constraint {
  app_admin_pkey = "app_admin_pkey",
}

/**
 * update columns of table "app_admin"
 */
export enum app_admin_update_column {
  app_id = "app_id",
  host = "host",
}

/**
 * unique or primary key constraints on table "app"
 */
export enum app_constraint {
  App_pkey = "App_pkey",
}

/**
 * unique or primary key constraints on table "app_module"
 */
export enum app_module_constraint {
  app_module_pkey = "app_module_pkey",
}

/**
 * update columns of table "app_module"
 */
export enum app_module_update_column {
  app_id = "app_id",
  created_at = "created_at",
  id = "id",
  module_id = "module_id",
}

/**
 * unique or primary key constraints on table "app_nav"
 */
export enum app_nav_constraint {
  app_nav_pkey = "app_nav_pkey",
}

/**
 * update columns of table "app_nav"
 */
export enum app_nav_update_column {
  app_id = "app_id",
  block = "block",
  external = "external",
  href = "href",
  icon = "icon",
  id = "id",
  label = "label",
  locale = "locale",
  position = "position",
  tag = "tag",
}

/**
 * unique or primary key constraints on table "app_secret"
 */
export enum app_secret_constraint {
  app_secret_app_id_key_key = "app_secret_app_id_key_key",
  app_secret_pkey = "app_secret_pkey",
}

/**
 * update columns of table "app_secret"
 */
export enum app_secret_update_column {
  app_id = "app_id",
  id = "id",
  key = "key",
  value = "value",
}

/**
 * unique or primary key constraints on table "app_setting"
 */
export enum app_setting_constraint {
  app_setting_app_id_key_key = "app_setting_app_id_key_key",
  app_setting_pkey = "app_setting_pkey",
}

/**
 * update columns of table "app_setting"
 */
export enum app_setting_update_column {
  app_id = "app_id",
  id = "id",
  key = "key",
  value = "value",
}

/**
 * update columns of table "app"
 */
export enum app_update_column {
  description = "description",
  id = "id",
  name = "name",
  point_discount_ratio = "point_discount_ratio",
  point_exchange_rate = "point_exchange_rate",
  point_validity_period = "point_validity_period",
  title = "title",
  vimeo_project_id = "vimeo_project_id",
}

/**
 * unique or primary key constraints on table "appointment_plan"
 */
export enum appointment_plan_constraint {
  appointment_plan_pkey = "appointment_plan_pkey",
}

/**
 * update columns of table "appointment_plan"
 */
export enum appointment_plan_update_column {
  created_at = "created_at",
  creator_id = "creator_id",
  currency_id = "currency_id",
  description = "description",
  duration = "duration",
  id = "id",
  phone = "phone",
  price = "price",
  published_at = "published_at",
  support_locales = "support_locales",
  title = "title",
  updated_at = "updated_at",
}

/**
 * unique or primary key constraints on table "appointment_schedule"
 */
export enum appointment_schedule_constraint {
  appointment_schedule_pkey = "appointment_schedule_pkey",
}

/**
 * update columns of table "appointment_schedule"
 */
export enum appointment_schedule_update_column {
  appointment_plan_id = "appointment_plan_id",
  created_at = "created_at",
  excludes = "excludes",
  id = "id",
  interval_amount = "interval_amount",
  interval_type = "interval_type",
  started_at = "started_at",
  updated_at = "updated_at",
}

/**
 * unique or primary key constraints on table "card"
 */
export enum card_constraint {
  card_pkey = "card_pkey",
}

/**
 * unique or primary key constraints on table "card_discount"
 */
export enum card_discount_constraint {
  card_discount_card_id_product_id_key = "card_discount_card_id_product_id_key",
  card_discount_pkey = "card_discount_pkey",
}

/**
 * update columns of table "card_discount"
 */
export enum card_discount_update_column {
  amount = "amount",
  card_id = "card_id",
  id = "id",
  product_id = "product_id",
  type = "type",
}

/**
 * update columns of table "card"
 */
export enum card_update_column {
  app_id = "app_id",
  creator_id = "creator_id",
  description = "description",
  id = "id",
  template = "template",
  title = "title",
}

/**
 * unique or primary key constraints on table "cart_item"
 */
export enum cart_item_constraint {
  cart_item_pkey = "cart_item_pkey",
}

/**
 * update columns of table "cart_item"
 */
export enum cart_item_update_column {
  app_id = "app_id",
  class = "class",
  fingerprint = "fingerprint",
  id = "id",
  target = "target",
}

/**
 * unique or primary key constraints on table "cart_product"
 */
export enum cart_product_constraint {
  cart_product_pkey = "cart_product_pkey",
}

/**
 * update columns of table "cart_product"
 */
export enum cart_product_update_column {
  app_id = "app_id",
  created_at = "created_at",
  id = "id",
  member_id = "member_id",
  product_id = "product_id",
}

/**
 * unique or primary key constraints on table "category"
 */
export enum category_constraint {
  category_id_key = "category_id_key",
  category_pkey = "category_pkey",
}

/**
 * update columns of table "category"
 */
export enum category_update_column {
  app_id = "app_id",
  class = "class",
  id = "id",
  name = "name",
  position = "position",
}

/**
 * unique or primary key constraints on table "coin_log"
 */
export enum coin_log_constraint {
  coin_log_pkey = "coin_log_pkey",
}

/**
 * update columns of table "coin_log"
 */
export enum coin_log_update_column {
  amount = "amount",
  created_at = "created_at",
  description = "description",
  ended_at = "ended_at",
  id = "id",
  member_id = "member_id",
  note = "note",
  started_at = "started_at",
  title = "title",
}

/**
 * unique or primary key constraints on table "comment"
 */
export enum comment_constraint {
  comment_pkey = "comment_pkey",
}

/**
 * unique or primary key constraints on table "comment_reaction"
 */
export enum comment_reaction_constraint {
  comment_reaction_pkey = "comment_reaction_pkey",
}

/**
 * update columns of table "comment_reaction"
 */
export enum comment_reaction_update_column {
  comment_id = "comment_id",
  created_at = "created_at",
  id = "id",
  member_id = "member_id",
}

/**
 * unique or primary key constraints on table "comment_reply"
 */
export enum comment_reply_constraint {
  comment_reply_pkey = "comment_reply_pkey",
}

/**
 * unique or primary key constraints on table "comment_reply_reaction"
 */
export enum comment_reply_reaction_constraint {
  comment_reply_reaction_pkey = "comment_reply_reaction_pkey",
}

/**
 * update columns of table "comment_reply_reaction"
 */
export enum comment_reply_reaction_update_column {
  comment_reply_id = "comment_reply_id",
  created_at = "created_at",
  id = "id",
  member_id = "member_id",
}

/**
 * update columns of table "comment_reply"
 */
export enum comment_reply_update_column {
  comment_id = "comment_id",
  content = "content",
  created_at = "created_at",
  id = "id",
  member_id = "member_id",
}

/**
 * update columns of table "comment"
 */
export enum comment_update_column {
  app_id = "app_id",
  content = "content",
  created_at = "created_at",
  id = "id",
  member_id = "member_id",
  thread_id = "thread_id",
}

/**
 * unique or primary key constraints on table "contract"
 */
export enum contract_constraint {
  contract_pkey = "contract_pkey",
}

/**
 * update columns of table "contract"
 */
export enum contract_update_column {
  created_at = "created_at",
  deliverables = "deliverables",
  description = "description",
  id = "id",
  name = "name",
  template = "template",
  updated_at = "updated_at",
}

/**
 * unique or primary key constraints on table "coupon_code"
 */
export enum coupon_code_constraint {
  coupon_code_code_key = "coupon_code_code_key",
  coupon_plan_code_app_id_code_key = "coupon_plan_code_app_id_code_key",
  coupon_plan_code_pkey = "coupon_plan_code_pkey",
}

/**
 * update columns of table "coupon_code"
 */
export enum coupon_code_update_column {
  app_id = "app_id",
  code = "code",
  count = "count",
  coupon_plan_id = "coupon_plan_id",
  id = "id",
  remaining = "remaining",
}

/**
 * unique or primary key constraints on table "coupon"
 */
export enum coupon_constraint {
  coupon_member_id_coupon_code_id_key = "coupon_member_id_coupon_code_id_key",
  coupon_pkey = "coupon_pkey",
}

/**
 * unique or primary key constraints on table "coupon_plan"
 */
export enum coupon_plan_constraint {
  coupon_plan_pkey = "coupon_plan_pkey",
}

/**
 * unique or primary key constraints on table "coupon_plan_product"
 */
export enum coupon_plan_product_constraint {
  coupon_plan_product_pkey = "coupon_plan_product_pkey",
}

/**
 * update columns of table "coupon_plan_product"
 */
export enum coupon_plan_product_update_column {
  coupon_plan_id = "coupon_plan_id",
  id = "id",
  product_id = "product_id",
}

/**
 * update columns of table "coupon_plan"
 */
export enum coupon_plan_update_column {
  amount = "amount",
  constraint = "constraint",
  description = "description",
  ended_at = "ended_at",
  id = "id",
  scope = "scope",
  started_at = "started_at",
  title = "title",
  type = "type",
  updated_at = "updated_at",
}

/**
 * update columns of table "coupon"
 */
export enum coupon_update_column {
  coupon_code_id = "coupon_code_id",
  created_at = "created_at",
  id = "id",
  member_id = "member_id",
}

/**
 * unique or primary key constraints on table "currency"
 */
export enum currency_constraint {
  currency_pkey = "currency_pkey",
}

/**
 * update columns of table "currency"
 */
export enum currency_update_column {
  id = "id",
  label = "label",
  name = "name",
  unit = "unit",
}

/**
 * unique or primary key constraints on table "issue"
 */
export enum issue_constraint {
  issue_pkey = "issue_pkey",
}

/**
 * unique or primary key constraints on table "issue_reaction"
 */
export enum issue_reaction_constraint {
  issue_reaction_issue_id_member_id_key = "issue_reaction_issue_id_member_id_key",
  issue_reaction_pkey = "issue_reaction_pkey",
}

/**
 * update columns of table "issue_reaction"
 */
export enum issue_reaction_update_column {
  created_at = "created_at",
  id = "id",
  issue_id = "issue_id",
  member_id = "member_id",
}

/**
 * unique or primary key constraints on table "issue_reply"
 */
export enum issue_reply_constraint {
  issue_reply_pkey = "issue_reply_pkey",
}

/**
 * unique or primary key constraints on table "issue_reply_reaction"
 */
export enum issue_reply_reaction_constraint {
  issue_reply_reaction_pkey = "issue_reply_reaction_pkey",
}

/**
 * update columns of table "issue_reply_reaction"
 */
export enum issue_reply_reaction_update_column {
  created_at = "created_at",
  id = "id",
  issue_reply_id = "issue_reply_id",
  member_id = "member_id",
}

/**
 * update columns of table "issue_reply"
 */
export enum issue_reply_update_column {
  content = "content",
  created_at = "created_at",
  id = "id",
  issue_id = "issue_id",
  member_id = "member_id",
}

/**
 * update columns of table "issue"
 */
export enum issue_update_column {
  app_id = "app_id",
  created_at = "created_at",
  description = "description",
  id = "id",
  member_id = "member_id",
  solved_at = "solved_at",
  thread_id = "thread_id",
  title = "title",
}

/**
 * unique or primary key constraints on table "media"
 */
export enum media_constraint {
  media_pkey = "media_pkey",
}

/**
 * update columns of table "media"
 */
export enum media_update_column {
  created_at = "created_at",
  id = "id",
  member_id = "member_id",
  metadata = "metadata",
  name = "name",
  resource_url = "resource_url",
  size = "size",
  type = "type",
}

/**
 * unique or primary key constraints on table "member_card"
 */
export enum member_card_constraint {
  member_card_id_key = "member_card_id_key",
  member_card_member_id_card_identifier_key = "member_card_member_id_card_identifier_key",
  member_card_pkey = "member_card_pkey",
}

/**
 * update columns of table "member_card"
 */
export enum member_card_update_column {
  card_holder = "card_holder",
  card_identifier = "card_identifier",
  card_info = "card_info",
  card_secret = "card_secret",
  id = "id",
  member_id = "member_id",
}

/**
 * unique or primary key constraints on table "member"
 */
export enum member_constraint {
  User_pkey = "User_pkey",
  member_app_id_email_key = "member_app_id_email_key",
  member_app_id_username_key = "member_app_id_username_key",
  member_refresh_token_key = "member_refresh_token_key",
  member_zoom_user_id_key = "member_zoom_user_id_key",
}

/**
 * unique or primary key constraints on table "member_contract"
 */
export enum member_contract_constraint {
  member_contract_pkey = "member_contract_pkey",
}

/**
 * update columns of table "member_contract"
 */
export enum member_contract_update_column {
  agreed_at = "agreed_at",
  agreed_ip = "agreed_ip",
  agreed_options = "agreed_options",
  contract_id = "contract_id",
  ended_at = "ended_at",
  id = "id",
  member_id = "member_id",
  started_at = "started_at",
  values = "values",
}

/**
 * unique or primary key constraints on table "member_shop"
 */
export enum member_shop_constraint {
  member_shop_pkey = "member_shop_pkey",
}

/**
 * update columns of table "member_shop"
 */
export enum member_shop_update_column {
  created_at = "created_at",
  id = "id",
  member_id = "member_id",
  published_at = "published_at",
  shipping_methods = "shipping_methods",
  title = "title",
  updated_at = "updated_at",
}

/**
 * unique or primary key constraints on table "member_social"
 */
export enum member_social_constraint {
  member_social_pkey = "member_social_pkey",
  member_social_type_channel_id_key = "member_social_type_channel_id_key",
}

/**
 * update columns of table "member_social"
 */
export enum member_social_update_column {
  channel_id = "channel_id",
  channel_url = "channel_url",
  description = "description",
  id = "id",
  member_id = "member_id",
  name = "name",
  profile_url = "profile_url",
  type = "type",
}

/**
 * unique or primary key constraints on table "member_tag"
 */
export enum member_tag_constraint {
  member_tag_member_id_tag_name_key = "member_tag_member_id_tag_name_key",
  member_tag_pkey = "member_tag_pkey",
}

/**
 * update columns of table "member_tag"
 */
export enum member_tag_update_column {
  id = "id",
  member_id = "member_id",
  tag_name = "tag_name",
}

/**
 * update columns of table "member"
 */
export enum member_update_column {
  abstract = "abstract",
  app_id = "app_id",
  created_at = "created_at",
  description = "description",
  email = "email",
  facebook_user_id = "facebook_user_id",
  google_user_id = "google_user_id",
  id = "id",
  logined_at = "logined_at",
  metadata = "metadata",
  name = "name",
  passhash = "passhash",
  picture_url = "picture_url",
  refresh_token = "refresh_token",
  role = "role",
  roles_deprecated = "roles_deprecated",
  title = "title",
  username = "username",
  youtube_channel_ids = "youtube_channel_ids",
  zoom_user_id_deprecate = "zoom_user_id_deprecate",
}

/**
 * unique or primary key constraints on table "merchandise_category"
 */
export enum merchandise_category_constraint {
  merchandise_category_pkey = "merchandise_category_pkey",
}

/**
 * update columns of table "merchandise_category"
 */
export enum merchandise_category_update_column {
  category_id = "category_id",
  id = "id",
  merchandise_id = "merchandise_id",
  position = "position",
}

/**
 * unique or primary key constraints on table "merchandise"
 */
export enum merchandise_constraint {
  merchandise_pkey = "merchandise_pkey",
}

/**
 * unique or primary key constraints on table "merchandise_img"
 */
export enum merchandise_img_constraint {
  merchandise_img_pkey = "merchandise_img_pkey",
}

/**
 * update columns of table "merchandise_img"
 */
export enum merchandise_img_update_column {
  id = "id",
  merchandise_id = "merchandise_id",
  position = "position",
  type = "type",
  url = "url",
}

/**
 * unique or primary key constraints on table "merchandise_tag"
 */
export enum merchandise_tag_constraint {
  merchandise_tag_pkey = "merchandise_tag_pkey",
}

/**
 * update columns of table "merchandise_tag"
 */
export enum merchandise_tag_update_column {
  id = "id",
  merchandise_id = "merchandise_id",
  position = "position",
  tag_name = "tag_name",
}

/**
 * update columns of table "merchandise"
 */
export enum merchandise_update_column {
  abstract = "abstract",
  app_id = "app_id",
  created_at = "created_at",
  description = "description",
  ended_at = "ended_at",
  id = "id",
  is_deleted = "is_deleted",
  link = "link",
  list_price = "list_price",
  member_id = "member_id",
  member_shop_id = "member_shop_id",
  meta = "meta",
  position = "position",
  published_at = "published_at",
  sale_price = "sale_price",
  sold_at = "sold_at",
  started_at = "started_at",
  title = "title",
  updated_at = "updated_at",
}

/**
 * unique or primary key constraints on table "module"
 */
export enum module_constraint {
  module_id_key = "module_id_key",
  module_pkey = "module_pkey",
}

/**
 * update columns of table "module"
 */
export enum module_update_column {
  id = "id",
  name = "name",
}

/**
 * unique or primary key constraints on table "notification"
 */
export enum notification_constraint {
  notification_pkey = "notification_pkey",
}

/**
 * update columns of table "notification"
 */
export enum notification_update_column {
  avatar = "avatar",
  created_at = "created_at",
  description = "description",
  extra = "extra",
  id = "id",
  read_at = "read_at",
  reference_url = "reference_url",
  source_member_id = "source_member_id",
  target_member_id = "target_member_id",
  type = "type",
  updated_at = "updated_at",
}

/**
 * unique or primary key constraints on table "order_discount"
 */
export enum order_discount_constraint {
  order_discount_pkey = "order_discount_pkey",
}

/**
 * update columns of table "order_discount"
 */
export enum order_discount_update_column {
  description = "description",
  id = "id",
  name = "name",
  options = "options",
  order_id = "order_id",
  price = "price",
  target = "target",
  type = "type",
}

/**
 * unique or primary key constraints on table "order_log"
 */
export enum order_log_constraint {
  order_log_id_key = "order_log_id_key",
  order_log_pkey = "order_log_pkey",
}

/**
 * update columns of table "order_log"
 */
export enum order_log_update_column {
  created_at = "created_at",
  deliver_message = "deliver_message",
  delivered_at = "delivered_at",
  discount_coupon_id = "discount_coupon_id",
  discount_point = "discount_point",
  discount_price = "discount_price",
  discount_type = "discount_type",
  id = "id",
  invoice = "invoice",
  member_id = "member_id",
  message = "message",
  payment_model = "payment_model",
  shipping = "shipping",
  status = "status",
  updated_at = "updated_at",
}

/**
 * unique or primary key constraints on table "order_product"
 */
export enum order_product_constraint {
  order_product_order_id_product_id_key = "order_product_order_id_product_id_key",
  order_product_pkey = "order_product_pkey",
}

/**
 * update columns of table "order_product"
 */
export enum order_product_update_column {
  accumulated_errors = "accumulated_errors",
  auto_renewed = "auto_renewed",
  created_at = "created_at",
  currency_id = "currency_id",
  deliverables = "deliverables",
  description = "description",
  ended_at = "ended_at",
  id = "id",
  name = "name",
  options = "options",
  order_id = "order_id",
  price = "price",
  product_id = "product_id",
  started_at = "started_at",
}

/**
 * unique or primary key constraints on table "package"
 */
export enum package_constraint {
  package_pkey = "package_pkey",
}

/**
 * unique or primary key constraints on table "package_item"
 */
export enum package_item_constraint {
  package_item_pkey = "package_item_pkey",
}

/**
 * unique or primary key constraints on table "package_item_group"
 */
export enum package_item_group_constraint {
  package_item_group_pkey = "package_item_group_pkey",
}

/**
 * update columns of table "package_item_group"
 */
export enum package_item_group_update_column {
  id = "id",
  package_section_id = "package_section_id",
  subtitle = "subtitle",
  title = "title",
  type = "type",
  with_filter = "with_filter",
}

/**
 * update columns of table "package_item"
 */
export enum package_item_update_column {
  activity_id = "activity_id",
  id = "id",
  merchandise_id = "merchandise_id",
  package_item_group_id = "package_item_group_id",
  program_id = "program_id",
}

/**
 * unique or primary key constraints on table "package_section"
 */
export enum package_section_constraint {
  package_section_pkey = "package_section_pkey",
}

/**
 * update columns of table "package_section"
 */
export enum package_section_update_column {
  block = "block",
  description = "description",
  id = "id",
  package_id = "package_id",
  position = "position",
  subtitle = "subtitle",
  title = "title",
}

/**
 * update columns of table "package"
 */
export enum package_update_column {
  app_id = "app_id",
  elements = "elements",
  id = "id",
  title = "title",
}

/**
 * unique or primary key constraints on table "payment_log"
 */
export enum payment_log_constraint {
  payment_log_no_key = "payment_log_no_key",
  payment_log_pkey = "payment_log_pkey",
}

/**
 * update columns of table "payment_log"
 */
export enum payment_log_update_column {
  created_at = "created_at",
  gateway = "gateway",
  no = "no",
  options = "options",
  order_id = "order_id",
  paid_at = "paid_at",
  payment_due_at = "payment_due_at",
  price = "price",
  status = "status",
  updated_at = "updated_at",
}

/**
 * unique or primary key constraints on table "playlist"
 */
export enum playlist_constraint {
  playlist_pkey = "playlist_pkey",
}

/**
 * unique or primary key constraints on table "playlist_podcast_program"
 */
export enum playlist_podcast_program_constraint {
  playlist_podcast_program_pkey = "playlist_podcast_program_pkey",
}

/**
 * update columns of table "playlist_podcast_program"
 */
export enum playlist_podcast_program_update_column {
  created_at = "created_at",
  id = "id",
  playlist_id = "playlist_id",
  podcast_program_id = "podcast_program_id",
  position = "position",
  updated_at = "updated_at",
}

/**
 * update columns of table "playlist"
 */
export enum playlist_update_column {
  created_at = "created_at",
  id = "id",
  member_id = "member_id",
  position = "position",
  title = "title",
  updated_at = "updated_at",
}

/**
 * unique or primary key constraints on table "podcast"
 */
export enum podcast_constraint {
  podcast_pkey = "podcast_pkey",
}

/**
 * unique or primary key constraints on table "podcast_plan"
 */
export enum podcast_plan_constraint {
  podcast_plan_pkey = "podcast_plan_pkey",
}

/**
 * update columns of table "podcast_plan"
 */
export enum podcast_plan_update_column {
  created_at = "created_at",
  creator_id = "creator_id",
  id = "id",
  is_subscription = "is_subscription",
  list_price = "list_price",
  period_amount = "period_amount",
  period_type = "period_type",
  podcast_id = "podcast_id",
  position = "position",
  published_at = "published_at",
  sale_price = "sale_price",
  sold_at = "sold_at",
  title = "title",
  updated_at = "updated_at",
}

/**
 * unique or primary key constraints on table "podcast_program_body"
 */
export enum podcast_program_body_constraint {
  podcast_program_body_pkey = "podcast_program_body_pkey",
  podcast_program_body_podcast_program_id_key = "podcast_program_body_podcast_program_id_key",
}

/**
 * update columns of table "podcast_program_body"
 */
export enum podcast_program_body_update_column {
  description = "description",
  id = "id",
  podcast_program_id = "podcast_program_id",
}

/**
 * unique or primary key constraints on table "podcast_program_category"
 */
export enum podcast_program_category_constraint {
  podcast_program_category_pkey = "podcast_program_category_pkey",
}

/**
 * update columns of table "podcast_program_category"
 */
export enum podcast_program_category_update_column {
  category_id = "category_id",
  id = "id",
  podcast_program_id = "podcast_program_id",
  position = "position",
}

/**
 * unique or primary key constraints on table "podcast_program"
 */
export enum podcast_program_constraint {
  podcast_program_pkey = "podcast_program_pkey",
}

/**
 * unique or primary key constraints on table "podcast_program_role"
 */
export enum podcast_program_role_constraint {
  podcast_program_role_pkey = "podcast_program_role_pkey",
}

/**
 * update columns of table "podcast_program_role"
 */
export enum podcast_program_role_update_column {
  id = "id",
  member_id = "member_id",
  name = "name",
  podcast_program_id = "podcast_program_id",
}

/**
 * unique or primary key constraints on table "podcast_program_tag"
 */
export enum podcast_program_tag_constraint {
  podcast_program_tag_pkey = "podcast_program_tag_pkey",
  podcast_program_tag_podcast_program_id_tag_name_key = "podcast_program_tag_podcast_program_id_tag_name_key",
}

/**
 * update columns of table "podcast_program_tag"
 */
export enum podcast_program_tag_update_column {
  id = "id",
  podcast_program_id = "podcast_program_id",
  position = "position",
  tag_name = "tag_name",
}

/**
 * update columns of table "podcast_program"
 */
export enum podcast_program_update_column {
  abstract = "abstract",
  content_type = "content_type",
  cover_url = "cover_url",
  creator_id = "creator_id",
  duration = "duration",
  id = "id",
  list_price = "list_price",
  podcast_id = "podcast_id",
  published_at = "published_at",
  sale_price = "sale_price",
  sold_at = "sold_at",
  support_locales = "support_locales",
  title = "title",
  updated_at = "updated_at",
}

/**
 * update columns of table "podcast"
 */
export enum podcast_update_column {
  app_id = "app_id",
  id = "id",
  instructor_id = "instructor_id",
}

/**
 * unique or primary key constraints on table "point_log"
 */
export enum point_log_constraint {
  point_log_pkey = "point_log_pkey",
}

/**
 * update columns of table "point_log"
 */
export enum point_log_update_column {
  created_at = "created_at",
  description = "description",
  ended_at = "ended_at",
  id = "id",
  member_id = "member_id",
  note = "note",
  point = "point",
  started_at = "started_at",
}

/**
 * unique or primary key constraints on table "post_category"
 */
export enum post_category_constraint {
  post_category_pkey = "post_category_pkey",
}

/**
 * update columns of table "post_category"
 */
export enum post_category_update_column {
  category_id = "category_id",
  id = "id",
  position = "position",
  post_id = "post_id",
}

/**
 * unique or primary key constraints on table "post"
 */
export enum post_constraint {
  post_pkey = "post_pkey",
}

/**
 * unique or primary key constraints on table "post_merchandise"
 */
export enum post_merchandise_constraint {
  post_merchandise_pkey = "post_merchandise_pkey",
}

/**
 * update columns of table "post_merchandise"
 */
export enum post_merchandise_update_column {
  id = "id",
  merchandise_id = "merchandise_id",
  position = "position",
  post_id = "post_id",
}

/**
 * unique or primary key constraints on table "post_role"
 */
export enum post_role_constraint {
  post_role_pkey = "post_role_pkey",
}

/**
 * update columns of table "post_role"
 */
export enum post_role_update_column {
  id = "id",
  member_id = "member_id",
  name = "name",
  position = "position",
  post_id = "post_id",
}

/**
 * unique or primary key constraints on table "post_tag"
 */
export enum post_tag_constraint {
  post_tag_pkey = "post_tag_pkey",
}

/**
 * update columns of table "post_tag"
 */
export enum post_tag_update_column {
  id = "id",
  position = "position",
  post_id = "post_id",
  tag_name = "tag_name",
}

/**
 * update columns of table "post"
 */
export enum post_update_column {
  abstract = "abstract",
  app_id = "app_id",
  code_name = "code_name",
  cover_url = "cover_url",
  created_at = "created_at",
  description = "description",
  id = "id",
  is_deleted = "is_deleted",
  position = "position",
  published_at = "published_at",
  title = "title",
  updated_at = "updated_at",
  video_url = "video_url",
  views = "views",
}

/**
 * unique or primary key constraints on table "product"
 */
export enum product_constraint {
  product_id_key = "product_id_key",
  product_pkey = "product_pkey",
}

/**
 * unique or primary key constraints on table "product_inventory"
 */
export enum product_inventory_constraint {
  product_inventory_pkey = "product_inventory_pkey",
}

/**
 * update columns of table "product_inventory"
 */
export enum product_inventory_update_column {
  comment = "comment",
  created_at = "created_at",
  id = "id",
  product_id = "product_id",
  quantity = "quantity",
  specification = "specification",
  status = "status",
}

/**
 * update columns of table "product"
 */
export enum product_update_column {
  id = "id",
  target = "target",
  type = "type",
}

/**
 * unique or primary key constraints on table "program_announcement"
 */
export enum program_announcement_constraint {
  program_announcement_pkey = "program_announcement_pkey",
}

/**
 * update columns of table "program_announcement"
 */
export enum program_announcement_update_column {
  created_at = "created_at",
  description = "description",
  id = "id",
  program_id = "program_id",
  published_at = "published_at",
  title = "title",
}

/**
 * unique or primary key constraints on table "program_category"
 */
export enum program_category_constraint {
  program_category_pkey = "program_category_pkey",
}

/**
 * update columns of table "program_category"
 */
export enum program_category_update_column {
  category_id = "category_id",
  id = "id",
  position = "position",
  program_id = "program_id",
}

/**
 * unique or primary key constraints on table "program"
 */
export enum program_constraint {
  program_pkey = "program_pkey",
}

/**
 * unique or primary key constraints on table "program_content_body"
 */
export enum program_content_body_constraint {
  program_content_body_pkey = "program_content_body_pkey",
}

/**
 * update columns of table "program_content_body"
 */
export enum program_content_body_update_column {
  data = "data",
  description = "description",
  id = "id",
  type = "type",
}

/**
 * unique or primary key constraints on table "program_content"
 */
export enum program_content_constraint {
  program_content_pkey = "program_content_pkey",
}

/**
 * unique or primary key constraints on table "program_content_plan"
 */
export enum program_content_plan_constraint {
  program_content_permission_pkey = "program_content_permission_pkey",
}

/**
 * update columns of table "program_content_plan"
 */
export enum program_content_plan_update_column {
  id = "id",
  program_content_id = "program_content_id",
  program_plan_id = "program_plan_id",
}

/**
 * unique or primary key constraints on table "program_content_progress"
 */
export enum program_content_progress_constraint {
  program_content_progress_member_id_program_content_id_key = "program_content_progress_member_id_program_content_id_key",
  program_content_progress_pkey = "program_content_progress_pkey",
}

/**
 * update columns of table "program_content_progress"
 */
export enum program_content_progress_update_column {
  id = "id",
  last_progress = "last_progress",
  member_id = "member_id",
  program_content_id = "program_content_id",
  progress = "progress",
}

/**
 * unique or primary key constraints on table "program_content_section"
 */
export enum program_content_section_constraint {
  program_content_section_pkey = "program_content_section_pkey",
}

/**
 * update columns of table "program_content_section"
 */
export enum program_content_section_update_column {
  description = "description",
  id = "id",
  position = "position",
  program_id = "program_id",
  title = "title",
}

/**
 * update columns of table "program_content"
 */
export enum program_content_update_column {
  abstract = "abstract",
  content_body_id = "content_body_id",
  content_section_id = "content_section_id",
  content_type = "content_type",
  created_at = "created_at",
  duration = "duration",
  id = "id",
  is_notify_update = "is_notify_update",
  list_price = "list_price",
  metadata = "metadata",
  notified_at = "notified_at",
  position = "position",
  published_at = "published_at",
  sale_price = "sale_price",
  sold_at = "sold_at",
  title = "title",
}

/**
 * unique or primary key constraints on table "program_package"
 */
export enum program_package_constraint {
  program_package_pkey = "program_package_pkey",
}

/**
 * unique or primary key constraints on table "program_package_plan"
 */
export enum program_package_plan_constraint {
  program_package_plan_pkey = "program_package_plan_pkey",
}

/**
 * update columns of table "program_package_plan"
 */
export enum program_package_plan_update_column {
  created_at = "created_at",
  description = "description",
  discount_down_price = "discount_down_price",
  id = "id",
  is_participants_visible = "is_participants_visible",
  is_subscription = "is_subscription",
  is_tempo_delivery = "is_tempo_delivery",
  list_price = "list_price",
  period_amount = "period_amount",
  period_type = "period_type",
  position = "position",
  program_package_id = "program_package_id",
  published_at = "published_at",
  sale_price = "sale_price",
  sold_at = "sold_at",
  title = "title",
}

/**
 * unique or primary key constraints on table "program_package_program"
 */
export enum program_package_program_constraint {
  program_package_program_pkey = "program_package_program_pkey",
  program_package_program_program_package_id_program_id_key = "program_package_program_program_package_id_program_id_key",
}

/**
 * update columns of table "program_package_program"
 */
export enum program_package_program_update_column {
  id = "id",
  position = "position",
  program_id = "program_id",
  program_package_id = "program_package_id",
}

/**
 * update columns of table "program_package"
 */
export enum program_package_update_column {
  app_id = "app_id",
  cover_url = "cover_url",
  created_at = "created_at",
  creator_id = "creator_id",
  description = "description",
  id = "id",
  published_at = "published_at",
  title = "title",
}

/**
 * unique or primary key constraints on table "program_plan"
 */
export enum program_plan_constraint {
  program_plan_pkey = "program_plan_pkey",
}

/**
 * update columns of table "program_plan"
 */
export enum program_plan_update_column {
  auto_renewed = "auto_renewed",
  created_at = "created_at",
  currency_id = "currency_id",
  description = "description",
  discount_down_price = "discount_down_price",
  ended_at = "ended_at",
  gains = "gains",
  id = "id",
  is_participants_visible = "is_participants_visible",
  list_price = "list_price",
  period_amount = "period_amount",
  period_type = "period_type",
  program_id = "program_id",
  published_at = "published_at",
  sale_price = "sale_price",
  sold_at = "sold_at",
  started_at = "started_at",
  title = "title",
  type = "type",
}

/**
 * unique or primary key constraints on table "program_related_item"
 */
export enum program_related_item_constraint {
  program_related_item_pkey = "program_related_item_pkey",
}

/**
 * update columns of table "program_related_item"
 */
export enum program_related_item_update_column {
  class = "class",
  id = "id",
  program_id = "program_id",
  target = "target",
  weight = "weight",
}

/**
 * unique or primary key constraints on table "program_role"
 */
export enum program_role_constraint {
  program_role_name_program_id_member_id_key = "program_role_name_program_id_member_id_key",
  program_role_pkey = "program_role_pkey",
}

/**
 * update columns of table "program_role"
 */
export enum program_role_update_column {
  id = "id",
  member_id = "member_id",
  name = "name",
  program_id = "program_id",
}

/**
 * unique or primary key constraints on table "program_tag"
 */
export enum program_tag_constraint {
  program_tag_pkey = "program_tag_pkey",
  program_tag_program_id_tag_name_key = "program_tag_program_id_tag_name_key",
}

/**
 * update columns of table "program_tag"
 */
export enum program_tag_update_column {
  id = "id",
  position = "position",
  program_id = "program_id",
  tag_name = "tag_name",
}

/**
 * unique or primary key constraints on table "program_tempo_delivery"
 */
export enum program_tempo_delivery_constraint {
  program_tempo_delivery_member_id_program_package_program_id_key = "program_tempo_delivery_member_id_program_package_program_id_key",
  program_tempo_delivery_pkey = "program_tempo_delivery_pkey",
}

/**
 * update columns of table "program_tempo_delivery"
 */
export enum program_tempo_delivery_update_column {
  delivered_at = "delivered_at",
  id = "id",
  member_id = "member_id",
  program_package_program_id = "program_package_program_id",
}

/**
 * update columns of table "program"
 */
export enum program_update_column {
  abstract = "abstract",
  app_id = "app_id",
  cover_url = "cover_url",
  cover_video_url = "cover_video_url",
  created_at = "created_at",
  description = "description",
  id = "id",
  in_advance = "in_advance",
  is_deleted = "is_deleted",
  is_issues_open = "is_issues_open",
  is_private = "is_private",
  is_sold_out = "is_sold_out",
  is_subscription = "is_subscription",
  list_price = "list_price",
  position = "position",
  published_at = "published_at",
  sale_price = "sale_price",
  sold_at = "sold_at",
  support_locales = "support_locales",
  title = "title",
  updated_at = "updated_at",
}

/**
 * unique or primary key constraints on table "social_card"
 */
export enum social_card_constraint {
  social_card_pkey = "social_card_pkey",
}

/**
 * unique or primary key constraints on table "social_card_subscriber"
 */
export enum social_card_subscriber_constraint {
  social_card_subscriber_pkey = "social_card_subscriber_pkey",
}

/**
 * update columns of table "social_card_subscriber"
 */
export enum social_card_subscriber_update_column {
  created_at = "created_at",
  ended_at = "ended_at",
  id = "id",
  member_channel_id = "member_channel_id",
  member_id = "member_id",
  social_card_id = "social_card_id",
  started_at = "started_at",
}

/**
 * update columns of table "social_card"
 */
export enum social_card_update_column {
  badge_url = "badge_url",
  description = "description",
  id = "id",
  member_social_id = "member_social_id",
  membership_id = "membership_id",
  name = "name",
}

/**
 * unique or primary key constraints on table "tag"
 */
export enum tag_constraint {
  tag_id_key = "tag_id_key",
  tag_pkey = "tag_pkey",
}

/**
 * update columns of table "tag"
 */
export enum tag_update_column {
  app_id = "app_id",
  created_at = "created_at",
  name = "name",
  type = "type",
  updated_at = "updated_at",
}

/**
 * unique or primary key constraints on table "voucher_code"
 */
export enum voucher_code_constraint {
  voucher_code_code_key = "voucher_code_code_key",
  voucher_code_pkey = "voucher_code_pkey",
}

/**
 * update columns of table "voucher_code"
 */
export enum voucher_code_update_column {
  code = "code",
  count = "count",
  id = "id",
  remaining = "remaining",
  voucher_plan_id = "voucher_plan_id",
}

/**
 * unique or primary key constraints on table "voucher"
 */
export enum voucher_constraint {
  voucher_pkey = "voucher_pkey",
  voucher_voucher_code_id_member_id_key = "voucher_voucher_code_id_member_id_key",
}

/**
 * unique or primary key constraints on table "voucher_plan"
 */
export enum voucher_plan_constraint {
  voucher_plan_pkey = "voucher_plan_pkey",
}

/**
 * unique or primary key constraints on table "voucher_plan_product"
 */
export enum voucher_plan_product_constraint {
  voucher_plan_product_pkey = "voucher_plan_product_pkey",
}

/**
 * update columns of table "voucher_plan_product"
 */
export enum voucher_plan_product_update_column {
  id = "id",
  product_id = "product_id",
  voucher_plan_id = "voucher_plan_id",
}

/**
 * update columns of table "voucher_plan"
 */
export enum voucher_plan_update_column {
  app_id = "app_id",
  description = "description",
  ended_at = "ended_at",
  id = "id",
  product_quantity_limit = "product_quantity_limit",
  started_at = "started_at",
  title = "title",
}

/**
 * update columns of table "voucher"
 */
export enum voucher_update_column {
  created_at = "created_at",
  id = "id",
  member_id = "member_id",
  voucher_code_id = "voucher_code_id",
}

/**
 * expression to compare columns of type Boolean. All fields are combined with logical 'AND'.
 */
export interface Boolean_comparison_exp {
  _eq?: boolean | null;
  _gt?: boolean | null;
  _gte?: boolean | null;
  _in?: boolean[] | null;
  _is_null?: boolean | null;
  _lt?: boolean | null;
  _lte?: boolean | null;
  _neq?: boolean | null;
  _nin?: boolean[] | null;
}

/**
 * expression to compare columns of type Int. All fields are combined with logical 'AND'.
 */
export interface Int_comparison_exp {
  _eq?: number | null;
  _gt?: number | null;
  _gte?: number | null;
  _in?: number[] | null;
  _is_null?: boolean | null;
  _lt?: number | null;
  _lte?: number | null;
  _neq?: number | null;
  _nin?: number[] | null;
}

/**
 * expression to compare columns of type String. All fields are combined with logical 'AND'.
 */
export interface String_comparison_exp {
  _eq?: string | null;
  _gt?: string | null;
  _gte?: string | null;
  _ilike?: string | null;
  _in?: string[] | null;
  _is_null?: boolean | null;
  _like?: string | null;
  _lt?: string | null;
  _lte?: string | null;
  _neq?: string | null;
  _nilike?: string | null;
  _nin?: string[] | null;
  _nlike?: string | null;
  _nsimilar?: string | null;
  _similar?: string | null;
}

/**
 * input type for inserting array relation for remote table "activity"
 */
export interface activity_arr_rel_insert_input {
  data: activity_insert_input[];
  on_conflict?: activity_on_conflict | null;
}

/**
 * input type for inserting array relation for remote table "activity_attendance"
 */
export interface activity_attendance_arr_rel_insert_input {
  data: activity_attendance_insert_input[];
  on_conflict?: activity_attendance_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "activity_attendance". All fields are combined with a logical 'AND'.
 */
export interface activity_attendance_bool_exp {
  _and?: (activity_attendance_bool_exp | null)[] | null;
  _not?: activity_attendance_bool_exp | null;
  _or?: (activity_attendance_bool_exp | null)[] | null;
  activity_session?: activity_session_bool_exp | null;
  activity_session_id?: uuid_comparison_exp | null;
  created_at?: timestamptz_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  order_product?: order_product_bool_exp | null;
  order_product_id?: uuid_comparison_exp | null;
}

/**
 * input type for inserting data into table "activity_attendance"
 */
export interface activity_attendance_insert_input {
  activity_session?: activity_session_obj_rel_insert_input | null;
  activity_session_id?: any | null;
  created_at?: any | null;
  id?: any | null;
  order_product?: order_product_obj_rel_insert_input | null;
  order_product_id?: any | null;
}

/**
 * on conflict condition type for table "activity_attendance"
 */
export interface activity_attendance_on_conflict {
  constraint: activity_attendance_constraint;
  update_columns: activity_attendance_update_column[];
  where?: activity_attendance_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "activity". All fields are combined with a logical 'AND'.
 */
export interface activity_bool_exp {
  _and?: (activity_bool_exp | null)[] | null;
  _not?: activity_bool_exp | null;
  _or?: (activity_bool_exp | null)[] | null;
  activity_categories?: activity_category_bool_exp | null;
  activity_enrollments?: activity_enrollment_bool_exp | null;
  activity_sessions?: activity_session_bool_exp | null;
  activity_tickets?: activity_ticket_bool_exp | null;
  app?: app_bool_exp | null;
  app_id?: String_comparison_exp | null;
  cover_url?: String_comparison_exp | null;
  description?: String_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  is_participants_visible?: Boolean_comparison_exp | null;
  organizer?: member_public_bool_exp | null;
  organizer_id?: String_comparison_exp | null;
  package_items?: package_item_bool_exp | null;
  position?: Int_comparison_exp | null;
  published_at?: timestamptz_comparison_exp | null;
  support_locales?: jsonb_comparison_exp | null;
  title?: String_comparison_exp | null;
}

/**
 * input type for inserting array relation for remote table "activity_category"
 */
export interface activity_category_arr_rel_insert_input {
  data: activity_category_insert_input[];
  on_conflict?: activity_category_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "activity_category". All fields are combined with a logical 'AND'.
 */
export interface activity_category_bool_exp {
  _and?: (activity_category_bool_exp | null)[] | null;
  _not?: activity_category_bool_exp | null;
  _or?: (activity_category_bool_exp | null)[] | null;
  activity?: activity_bool_exp | null;
  activity_id?: uuid_comparison_exp | null;
  category?: category_bool_exp | null;
  category_id?: String_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  position?: Int_comparison_exp | null;
}

/**
 * input type for inserting data into table "activity_category"
 */
export interface activity_category_insert_input {
  activity?: activity_obj_rel_insert_input | null;
  activity_id?: any | null;
  category?: category_obj_rel_insert_input | null;
  category_id?: string | null;
  id?: any | null;
  position?: number | null;
}

/**
 * on conflict condition type for table "activity_category"
 */
export interface activity_category_on_conflict {
  constraint: activity_category_constraint;
  update_columns: activity_category_update_column[];
  where?: activity_category_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "activity_enrollment". All fields are combined with a logical 'AND'.
 */
export interface activity_enrollment_bool_exp {
  _and?: (activity_enrollment_bool_exp | null)[] | null;
  _not?: activity_enrollment_bool_exp | null;
  _or?: (activity_enrollment_bool_exp | null)[] | null;
  activity?: activity_bool_exp | null;
  activity_id?: uuid_comparison_exp | null;
  activity_session_id?: uuid_comparison_exp | null;
  activity_ticket?: activity_ticket_bool_exp | null;
  activity_ticket_id?: uuid_comparison_exp | null;
  attended?: Boolean_comparison_exp | null;
  member_email?: String_comparison_exp | null;
  member_id?: String_comparison_exp | null;
  member_name?: String_comparison_exp | null;
  member_phone?: String_comparison_exp | null;
  order_log_id?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "activity"
 */
export interface activity_insert_input {
  activity_categories?: activity_category_arr_rel_insert_input | null;
  activity_sessions?: activity_session_arr_rel_insert_input | null;
  activity_tickets?: activity_ticket_arr_rel_insert_input | null;
  app?: app_obj_rel_insert_input | null;
  app_id?: string | null;
  cover_url?: string | null;
  description?: string | null;
  id?: any | null;
  is_participants_visible?: boolean | null;
  organizer_id?: string | null;
  package_items?: package_item_arr_rel_insert_input | null;
  position?: number | null;
  published_at?: any | null;
  support_locales?: any | null;
  title?: string | null;
}

/**
 * input type for inserting object relation for remote table "activity"
 */
export interface activity_obj_rel_insert_input {
  data: activity_insert_input;
  on_conflict?: activity_on_conflict | null;
}

/**
 * on conflict condition type for table "activity"
 */
export interface activity_on_conflict {
  constraint: activity_constraint;
  update_columns: activity_update_column[];
  where?: activity_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "activity_session"
 */
export interface activity_session_arr_rel_insert_input {
  data: activity_session_insert_input[];
  on_conflict?: activity_session_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "activity_session". All fields are combined with a logical 'AND'.
 */
export interface activity_session_bool_exp {
  _and?: (activity_session_bool_exp | null)[] | null;
  _not?: activity_session_bool_exp | null;
  _or?: (activity_session_bool_exp | null)[] | null;
  activity?: activity_bool_exp | null;
  activity_attendances?: activity_attendance_bool_exp | null;
  activity_enrollments?: activity_enrollment_bool_exp | null;
  activity_id?: uuid_comparison_exp | null;
  activity_session_tickets?: activity_session_ticket_bool_exp | null;
  description?: String_comparison_exp | null;
  ended_at?: timestamptz_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  location?: String_comparison_exp | null;
  started_at?: timestamptz_comparison_exp | null;
  threshold?: numeric_comparison_exp | null;
  title?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "activity_session"
 */
export interface activity_session_insert_input {
  activity?: activity_obj_rel_insert_input | null;
  activity_attendances?: activity_attendance_arr_rel_insert_input | null;
  activity_id?: any | null;
  activity_session_tickets?: activity_session_ticket_arr_rel_insert_input | null;
  description?: string | null;
  ended_at?: any | null;
  id?: any | null;
  location?: string | null;
  started_at?: any | null;
  threshold?: any | null;
  title?: string | null;
}

/**
 * input type for inserting object relation for remote table "activity_session"
 */
export interface activity_session_obj_rel_insert_input {
  data: activity_session_insert_input;
  on_conflict?: activity_session_on_conflict | null;
}

/**
 * on conflict condition type for table "activity_session"
 */
export interface activity_session_on_conflict {
  constraint: activity_session_constraint;
  update_columns: activity_session_update_column[];
  where?: activity_session_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "activity_session_ticket"
 */
export interface activity_session_ticket_arr_rel_insert_input {
  data: activity_session_ticket_insert_input[];
  on_conflict?: activity_session_ticket_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "activity_session_ticket". All fields are combined with a logical 'AND'.
 */
export interface activity_session_ticket_bool_exp {
  _and?: (activity_session_ticket_bool_exp | null)[] | null;
  _not?: activity_session_ticket_bool_exp | null;
  _or?: (activity_session_ticket_bool_exp | null)[] | null;
  activity_session?: activity_session_bool_exp | null;
  activity_session_id?: uuid_comparison_exp | null;
  activity_ticket?: activity_ticket_bool_exp | null;
  activity_ticket_id?: uuid_comparison_exp | null;
  id?: uuid_comparison_exp | null;
}

/**
 * input type for inserting data into table "activity_session_ticket"
 */
export interface activity_session_ticket_insert_input {
  activity_session?: activity_session_obj_rel_insert_input | null;
  activity_session_id?: any | null;
  activity_ticket?: activity_ticket_obj_rel_insert_input | null;
  activity_ticket_id?: any | null;
  id?: any | null;
}

/**
 * on conflict condition type for table "activity_session_ticket"
 */
export interface activity_session_ticket_on_conflict {
  constraint: activity_session_ticket_constraint;
  update_columns: activity_session_ticket_update_column[];
  where?: activity_session_ticket_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "activity_ticket"
 */
export interface activity_ticket_arr_rel_insert_input {
  data: activity_ticket_insert_input[];
  on_conflict?: activity_ticket_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "activity_ticket". All fields are combined with a logical 'AND'.
 */
export interface activity_ticket_bool_exp {
  _and?: (activity_ticket_bool_exp | null)[] | null;
  _not?: activity_ticket_bool_exp | null;
  _or?: (activity_ticket_bool_exp | null)[] | null;
  activity?: activity_bool_exp | null;
  activity_enrollments?: activity_enrollment_bool_exp | null;
  activity_id?: uuid_comparison_exp | null;
  activity_session_tickets?: activity_session_ticket_bool_exp | null;
  activity_ticket_enrollments?: activity_ticket_enrollment_bool_exp | null;
  count?: Int_comparison_exp | null;
  description?: String_comparison_exp | null;
  ended_at?: timestamptz_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  is_published?: Boolean_comparison_exp | null;
  price?: numeric_comparison_exp | null;
  started_at?: timestamptz_comparison_exp | null;
  title?: String_comparison_exp | null;
}

/**
 * Boolean expression to filter rows from the table "activity_ticket_enrollment". All fields are combined with a logical 'AND'.
 */
export interface activity_ticket_enrollment_bool_exp {
  _and?: (activity_ticket_enrollment_bool_exp | null)[] | null;
  _not?: activity_ticket_enrollment_bool_exp | null;
  _or?: (activity_ticket_enrollment_bool_exp | null)[] | null;
  activity_ticket?: activity_ticket_bool_exp | null;
  activity_ticket_id?: uuid_comparison_exp | null;
  member_id?: String_comparison_exp | null;
  order_log_id?: String_comparison_exp | null;
  order_product_id?: uuid_comparison_exp | null;
}

/**
 * input type for inserting data into table "activity_ticket"
 */
export interface activity_ticket_insert_input {
  activity?: activity_obj_rel_insert_input | null;
  activity_id?: any | null;
  activity_session_tickets?: activity_session_ticket_arr_rel_insert_input | null;
  count?: number | null;
  description?: string | null;
  ended_at?: any | null;
  id?: any | null;
  is_published?: boolean | null;
  price?: any | null;
  started_at?: any | null;
  title?: string | null;
}

/**
 * input type for inserting object relation for remote table "activity_ticket"
 */
export interface activity_ticket_obj_rel_insert_input {
  data: activity_ticket_insert_input;
  on_conflict?: activity_ticket_on_conflict | null;
}

/**
 * on conflict condition type for table "activity_ticket"
 */
export interface activity_ticket_on_conflict {
  constraint: activity_ticket_constraint;
  update_columns: activity_ticket_update_column[];
  where?: activity_ticket_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "app_admin"
 */
export interface app_admin_arr_rel_insert_input {
  data: app_admin_insert_input[];
  on_conflict?: app_admin_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "app_admin". All fields are combined with a logical 'AND'.
 */
export interface app_admin_bool_exp {
  _and?: (app_admin_bool_exp | null)[] | null;
  _not?: app_admin_bool_exp | null;
  _or?: (app_admin_bool_exp | null)[] | null;
  app?: app_bool_exp | null;
  app_id?: String_comparison_exp | null;
  host?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "app_admin"
 */
export interface app_admin_insert_input {
  app?: app_obj_rel_insert_input | null;
  app_id?: string | null;
  host?: string | null;
}

/**
 * on conflict condition type for table "app_admin"
 */
export interface app_admin_on_conflict {
  constraint: app_admin_constraint;
  update_columns: app_admin_update_column[];
  where?: app_admin_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "app". All fields are combined with a logical 'AND'.
 */
export interface app_bool_exp {
  _and?: (app_bool_exp | null)[] | null;
  _not?: app_bool_exp | null;
  _or?: (app_bool_exp | null)[] | null;
  activities?: activity_bool_exp | null;
  app_admins?: app_admin_bool_exp | null;
  app_modules?: app_module_bool_exp | null;
  app_navs?: app_nav_bool_exp | null;
  app_secrets?: app_secret_bool_exp | null;
  app_settings?: app_setting_bool_exp | null;
  cards?: card_bool_exp | null;
  cart_items?: cart_item_bool_exp | null;
  comments?: comment_bool_exp | null;
  description?: String_comparison_exp | null;
  id?: String_comparison_exp | null;
  issues?: issue_bool_exp | null;
  members?: member_bool_exp | null;
  merchandises?: merchandise_bool_exp | null;
  name?: String_comparison_exp | null;
  packages?: package_bool_exp | null;
  podcasts?: podcast_bool_exp | null;
  point_discount_ratio?: numeric_comparison_exp | null;
  point_exchange_rate?: numeric_comparison_exp | null;
  point_validity_period?: numeric_comparison_exp | null;
  posts?: post_bool_exp | null;
  program_packages?: program_package_bool_exp | null;
  programs?: program_bool_exp | null;
  tags?: tag_bool_exp | null;
  title?: String_comparison_exp | null;
  vimeo_project_id?: String_comparison_exp | null;
  voucher_plans?: voucher_plan_bool_exp | null;
}

/**
 * input type for inserting data into table "app"
 */
export interface app_insert_input {
  activities?: activity_arr_rel_insert_input | null;
  app_admins?: app_admin_arr_rel_insert_input | null;
  app_modules?: app_module_arr_rel_insert_input | null;
  app_navs?: app_nav_arr_rel_insert_input | null;
  app_secrets?: app_secret_arr_rel_insert_input | null;
  app_settings?: app_setting_arr_rel_insert_input | null;
  cards?: card_arr_rel_insert_input | null;
  cart_items?: cart_item_arr_rel_insert_input | null;
  comments?: comment_arr_rel_insert_input | null;
  description?: string | null;
  id?: string | null;
  issues?: issue_arr_rel_insert_input | null;
  members?: member_arr_rel_insert_input | null;
  merchandises?: merchandise_arr_rel_insert_input | null;
  name?: string | null;
  packages?: package_arr_rel_insert_input | null;
  podcasts?: podcast_arr_rel_insert_input | null;
  point_discount_ratio?: any | null;
  point_exchange_rate?: any | null;
  point_validity_period?: any | null;
  posts?: post_arr_rel_insert_input | null;
  program_packages?: program_package_arr_rel_insert_input | null;
  programs?: program_arr_rel_insert_input | null;
  tags?: tag_arr_rel_insert_input | null;
  title?: string | null;
  vimeo_project_id?: string | null;
  voucher_plans?: voucher_plan_arr_rel_insert_input | null;
}

/**
 * input type for inserting array relation for remote table "app_module"
 */
export interface app_module_arr_rel_insert_input {
  data: app_module_insert_input[];
  on_conflict?: app_module_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "app_module". All fields are combined with a logical 'AND'.
 */
export interface app_module_bool_exp {
  _and?: (app_module_bool_exp | null)[] | null;
  _not?: app_module_bool_exp | null;
  _or?: (app_module_bool_exp | null)[] | null;
  app?: app_bool_exp | null;
  app_id?: String_comparison_exp | null;
  created_at?: timestamptz_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  module?: module_bool_exp | null;
  module_id?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "app_module"
 */
export interface app_module_insert_input {
  app?: app_obj_rel_insert_input | null;
  app_id?: string | null;
  created_at?: any | null;
  id?: any | null;
  module?: module_obj_rel_insert_input | null;
  module_id?: string | null;
}

/**
 * on conflict condition type for table "app_module"
 */
export interface app_module_on_conflict {
  constraint: app_module_constraint;
  update_columns: app_module_update_column[];
  where?: app_module_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "app_nav"
 */
export interface app_nav_arr_rel_insert_input {
  data: app_nav_insert_input[];
  on_conflict?: app_nav_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "app_nav". All fields are combined with a logical 'AND'.
 */
export interface app_nav_bool_exp {
  _and?: (app_nav_bool_exp | null)[] | null;
  _not?: app_nav_bool_exp | null;
  _or?: (app_nav_bool_exp | null)[] | null;
  app?: app_bool_exp | null;
  app_id?: String_comparison_exp | null;
  block?: String_comparison_exp | null;
  external?: Boolean_comparison_exp | null;
  href?: String_comparison_exp | null;
  icon?: String_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  label?: String_comparison_exp | null;
  locale?: String_comparison_exp | null;
  position?: Int_comparison_exp | null;
  tag?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "app_nav"
 */
export interface app_nav_insert_input {
  app?: app_obj_rel_insert_input | null;
  app_id?: string | null;
  block?: string | null;
  external?: boolean | null;
  href?: string | null;
  icon?: string | null;
  id?: any | null;
  label?: string | null;
  locale?: string | null;
  position?: number | null;
  tag?: string | null;
}

/**
 * on conflict condition type for table "app_nav"
 */
export interface app_nav_on_conflict {
  constraint: app_nav_constraint;
  update_columns: app_nav_update_column[];
  where?: app_nav_bool_exp | null;
}

/**
 * input type for inserting object relation for remote table "app"
 */
export interface app_obj_rel_insert_input {
  data: app_insert_input;
  on_conflict?: app_on_conflict | null;
}

/**
 * on conflict condition type for table "app"
 */
export interface app_on_conflict {
  constraint: app_constraint;
  update_columns: app_update_column[];
  where?: app_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "app_secret"
 */
export interface app_secret_arr_rel_insert_input {
  data: app_secret_insert_input[];
  on_conflict?: app_secret_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "app_secret". All fields are combined with a logical 'AND'.
 */
export interface app_secret_bool_exp {
  _and?: (app_secret_bool_exp | null)[] | null;
  _not?: app_secret_bool_exp | null;
  _or?: (app_secret_bool_exp | null)[] | null;
  app?: app_bool_exp | null;
  app_id?: String_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  key?: String_comparison_exp | null;
  value?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "app_secret"
 */
export interface app_secret_insert_input {
  app?: app_obj_rel_insert_input | null;
  app_id?: string | null;
  id?: any | null;
  key?: string | null;
  value?: string | null;
}

/**
 * on conflict condition type for table "app_secret"
 */
export interface app_secret_on_conflict {
  constraint: app_secret_constraint;
  update_columns: app_secret_update_column[];
  where?: app_secret_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "app_setting"
 */
export interface app_setting_arr_rel_insert_input {
  data: app_setting_insert_input[];
  on_conflict?: app_setting_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "app_setting". All fields are combined with a logical 'AND'.
 */
export interface app_setting_bool_exp {
  _and?: (app_setting_bool_exp | null)[] | null;
  _not?: app_setting_bool_exp | null;
  _or?: (app_setting_bool_exp | null)[] | null;
  app?: app_bool_exp | null;
  app_id?: String_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  key?: String_comparison_exp | null;
  value?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "app_setting"
 */
export interface app_setting_insert_input {
  app?: app_obj_rel_insert_input | null;
  app_id?: string | null;
  id?: any | null;
  key?: string | null;
  value?: string | null;
}

/**
 * on conflict condition type for table "app_setting"
 */
export interface app_setting_on_conflict {
  constraint: app_setting_constraint;
  update_columns: app_setting_update_column[];
  where?: app_setting_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "appointment_enrollment". All fields are combined with a logical 'AND'.
 */
export interface appointment_enrollment_bool_exp {
  _and?: (appointment_enrollment_bool_exp | null)[] | null;
  _not?: appointment_enrollment_bool_exp | null;
  _or?: (appointment_enrollment_bool_exp | null)[] | null;
  appointment_plan?: appointment_plan_bool_exp | null;
  appointment_plan_id?: uuid_comparison_exp | null;
  canceled_at?: String_comparison_exp | null;
  created_at?: timestamptz_comparison_exp | null;
  ended_at?: timestamptz_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  issue?: String_comparison_exp | null;
  join_url?: String_comparison_exp | null;
  member?: member_public_bool_exp | null;
  member_email?: String_comparison_exp | null;
  member_id?: String_comparison_exp | null;
  member_name?: String_comparison_exp | null;
  member_phone?: String_comparison_exp | null;
  order_product?: order_product_bool_exp | null;
  order_product_id?: uuid_comparison_exp | null;
  result?: String_comparison_exp | null;
  start_url?: String_comparison_exp | null;
  started_at?: timestamptz_comparison_exp | null;
}

/**
 * Boolean expression to filter rows from the table "appointment_period". All fields are combined with a logical 'AND'.
 */
export interface appointment_period_bool_exp {
  _and?: (appointment_period_bool_exp | null)[] | null;
  _not?: appointment_period_bool_exp | null;
  _or?: (appointment_period_bool_exp | null)[] | null;
  appointment_plan?: appointment_plan_bool_exp | null;
  appointment_plan_id?: uuid_comparison_exp | null;
  appointment_schedule?: appointment_schedule_bool_exp | null;
  appointment_schedule_id?: uuid_comparison_exp | null;
  available?: Boolean_comparison_exp | null;
  booked?: Boolean_comparison_exp | null;
  ended_at?: timestamptz_comparison_exp | null;
  started_at?: timestamptz_comparison_exp | null;
}

/**
 * input type for inserting array relation for remote table "appointment_plan"
 */
export interface appointment_plan_arr_rel_insert_input {
  data: appointment_plan_insert_input[];
  on_conflict?: appointment_plan_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "appointment_plan". All fields are combined with a logical 'AND'.
 */
export interface appointment_plan_bool_exp {
  _and?: (appointment_plan_bool_exp | null)[] | null;
  _not?: appointment_plan_bool_exp | null;
  _or?: (appointment_plan_bool_exp | null)[] | null;
  appointment_enrollments?: appointment_enrollment_bool_exp | null;
  appointment_periods?: appointment_period_bool_exp | null;
  appointment_schedules?: appointment_schedule_bool_exp | null;
  created_at?: timestamptz_comparison_exp | null;
  creator?: member_public_bool_exp | null;
  creator_id?: String_comparison_exp | null;
  currency?: currency_bool_exp | null;
  currency_id?: String_comparison_exp | null;
  description?: String_comparison_exp | null;
  duration?: numeric_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  phone?: String_comparison_exp | null;
  price?: numeric_comparison_exp | null;
  published_at?: timestamptz_comparison_exp | null;
  support_locales?: jsonb_comparison_exp | null;
  title?: String_comparison_exp | null;
  updated_at?: timestamptz_comparison_exp | null;
}

/**
 * input type for inserting data into table "appointment_plan"
 */
export interface appointment_plan_insert_input {
  appointment_schedules?: appointment_schedule_arr_rel_insert_input | null;
  created_at?: any | null;
  creator_id?: string | null;
  currency?: currency_obj_rel_insert_input | null;
  currency_id?: string | null;
  description?: string | null;
  duration?: any | null;
  id?: any | null;
  phone?: string | null;
  price?: any | null;
  published_at?: any | null;
  support_locales?: any | null;
  title?: string | null;
  updated_at?: any | null;
}

/**
 * input type for inserting object relation for remote table "appointment_plan"
 */
export interface appointment_plan_obj_rel_insert_input {
  data: appointment_plan_insert_input;
  on_conflict?: appointment_plan_on_conflict | null;
}

/**
 * on conflict condition type for table "appointment_plan"
 */
export interface appointment_plan_on_conflict {
  constraint: appointment_plan_constraint;
  update_columns: appointment_plan_update_column[];
  where?: appointment_plan_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "appointment_schedule"
 */
export interface appointment_schedule_arr_rel_insert_input {
  data: appointment_schedule_insert_input[];
  on_conflict?: appointment_schedule_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "appointment_schedule". All fields are combined with a logical 'AND'.
 */
export interface appointment_schedule_bool_exp {
  _and?: (appointment_schedule_bool_exp | null)[] | null;
  _not?: appointment_schedule_bool_exp | null;
  _or?: (appointment_schedule_bool_exp | null)[] | null;
  appointment_plan?: appointment_plan_bool_exp | null;
  appointment_plan_id?: uuid_comparison_exp | null;
  created_at?: timestamptz_comparison_exp | null;
  excludes?: jsonb_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  interval_amount?: Int_comparison_exp | null;
  interval_type?: String_comparison_exp | null;
  started_at?: timestamptz_comparison_exp | null;
  updated_at?: timestamptz_comparison_exp | null;
}

/**
 * input type for inserting data into table "appointment_schedule"
 */
export interface appointment_schedule_insert_input {
  appointment_plan?: appointment_plan_obj_rel_insert_input | null;
  appointment_plan_id?: any | null;
  created_at?: any | null;
  excludes?: any | null;
  id?: any | null;
  interval_amount?: number | null;
  interval_type?: string | null;
  started_at?: any | null;
  updated_at?: any | null;
}

/**
 * on conflict condition type for table "appointment_schedule"
 */
export interface appointment_schedule_on_conflict {
  constraint: appointment_schedule_constraint;
  update_columns: appointment_schedule_update_column[];
  where?: appointment_schedule_bool_exp | null;
}

/**
 * expression to compare columns of type bigint. All fields are combined with logical 'AND'.
 */
export interface bigint_comparison_exp {
  _eq?: any | null;
  _gt?: any | null;
  _gte?: any | null;
  _in?: any[] | null;
  _is_null?: boolean | null;
  _lt?: any | null;
  _lte?: any | null;
  _neq?: any | null;
  _nin?: any[] | null;
}

/**
 * input type for inserting array relation for remote table "card"
 */
export interface card_arr_rel_insert_input {
  data: card_insert_input[];
  on_conflict?: card_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "card". All fields are combined with a logical 'AND'.
 */
export interface card_bool_exp {
  _and?: (card_bool_exp | null)[] | null;
  _not?: card_bool_exp | null;
  _or?: (card_bool_exp | null)[] | null;
  app?: app_bool_exp | null;
  app_id?: String_comparison_exp | null;
  card_discounts?: card_discount_bool_exp | null;
  card_enrollments?: card_enrollment_bool_exp | null;
  creator?: member_public_bool_exp | null;
  creator_id?: String_comparison_exp | null;
  description?: String_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  template?: String_comparison_exp | null;
  title?: String_comparison_exp | null;
}

/**
 * input type for inserting array relation for remote table "card_discount"
 */
export interface card_discount_arr_rel_insert_input {
  data: card_discount_insert_input[];
  on_conflict?: card_discount_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "card_discount". All fields are combined with a logical 'AND'.
 */
export interface card_discount_bool_exp {
  _and?: (card_discount_bool_exp | null)[] | null;
  _not?: card_discount_bool_exp | null;
  _or?: (card_discount_bool_exp | null)[] | null;
  amount?: numeric_comparison_exp | null;
  card?: card_bool_exp | null;
  card_id?: uuid_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  product?: product_bool_exp | null;
  product_id?: String_comparison_exp | null;
  type?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "card_discount"
 */
export interface card_discount_insert_input {
  amount?: any | null;
  card?: card_obj_rel_insert_input | null;
  card_id?: any | null;
  id?: any | null;
  product?: product_obj_rel_insert_input | null;
  product_id?: string | null;
  type?: string | null;
}

/**
 * on conflict condition type for table "card_discount"
 */
export interface card_discount_on_conflict {
  constraint: card_discount_constraint;
  update_columns: card_discount_update_column[];
  where?: card_discount_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "card_enrollment". All fields are combined with a logical 'AND'.
 */
export interface card_enrollment_bool_exp {
  _and?: (card_enrollment_bool_exp | null)[] | null;
  _not?: card_enrollment_bool_exp | null;
  _or?: (card_enrollment_bool_exp | null)[] | null;
  card?: card_bool_exp | null;
  card_id?: uuid_comparison_exp | null;
  member?: member_bool_exp | null;
  member_id?: String_comparison_exp | null;
  updated_at?: timestamptz_comparison_exp | null;
}

/**
 * input type for inserting data into table "card"
 */
export interface card_insert_input {
  app?: app_obj_rel_insert_input | null;
  app_id?: string | null;
  card_discounts?: card_discount_arr_rel_insert_input | null;
  creator_id?: string | null;
  description?: string | null;
  id?: any | null;
  template?: string | null;
  title?: string | null;
}

/**
 * input type for inserting object relation for remote table "card"
 */
export interface card_obj_rel_insert_input {
  data: card_insert_input;
  on_conflict?: card_on_conflict | null;
}

/**
 * on conflict condition type for table "card"
 */
export interface card_on_conflict {
  constraint: card_constraint;
  update_columns: card_update_column[];
  where?: card_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "cart_item"
 */
export interface cart_item_arr_rel_insert_input {
  data: cart_item_insert_input[];
  on_conflict?: cart_item_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "cart_item". All fields are combined with a logical 'AND'.
 */
export interface cart_item_bool_exp {
  _and?: (cart_item_bool_exp | null)[] | null;
  _not?: cart_item_bool_exp | null;
  _or?: (cart_item_bool_exp | null)[] | null;
  app?: app_bool_exp | null;
  app_id?: String_comparison_exp | null;
  class?: String_comparison_exp | null;
  fingerprint?: String_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  target?: jsonb_comparison_exp | null;
}

/**
 * input type for inserting data into table "cart_item"
 */
export interface cart_item_insert_input {
  app?: app_obj_rel_insert_input | null;
  app_id?: string | null;
  class?: string | null;
  fingerprint?: string | null;
  id?: any | null;
  target?: any | null;
}

/**
 * on conflict condition type for table "cart_item"
 */
export interface cart_item_on_conflict {
  constraint: cart_item_constraint;
  update_columns: cart_item_update_column[];
  where?: cart_item_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "cart_product"
 */
export interface cart_product_arr_rel_insert_input {
  data: cart_product_insert_input[];
  on_conflict?: cart_product_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "cart_product". All fields are combined with a logical 'AND'.
 */
export interface cart_product_bool_exp {
  _and?: (cart_product_bool_exp | null)[] | null;
  _not?: cart_product_bool_exp | null;
  _or?: (cart_product_bool_exp | null)[] | null;
  app_id?: String_comparison_exp | null;
  created_at?: timestamptz_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  member_id?: String_comparison_exp | null;
  product?: product_bool_exp | null;
  product_id?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "cart_product"
 */
export interface cart_product_insert_input {
  app_id?: string | null;
  created_at?: any | null;
  id?: any | null;
  member_id?: string | null;
  product?: product_obj_rel_insert_input | null;
  product_id?: string | null;
}

/**
 * on conflict condition type for table "cart_product"
 */
export interface cart_product_on_conflict {
  constraint: cart_product_constraint;
  update_columns: cart_product_update_column[];
  where?: cart_product_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "category". All fields are combined with a logical 'AND'.
 */
export interface category_bool_exp {
  _and?: (category_bool_exp | null)[] | null;
  _not?: category_bool_exp | null;
  _or?: (category_bool_exp | null)[] | null;
  activity_categories?: activity_category_bool_exp | null;
  app_id?: String_comparison_exp | null;
  class?: String_comparison_exp | null;
  id?: String_comparison_exp | null;
  merchandise_categories?: merchandise_category_bool_exp | null;
  name?: String_comparison_exp | null;
  podcast_program_categories?: podcast_program_category_bool_exp | null;
  position?: Int_comparison_exp | null;
  post_categories?: post_category_bool_exp | null;
  program_categories?: program_category_bool_exp | null;
}

/**
 * input type for inserting data into table "category"
 */
export interface category_insert_input {
  activity_categories?: activity_category_arr_rel_insert_input | null;
  app_id?: string | null;
  class?: string | null;
  id?: string | null;
  merchandise_categories?: merchandise_category_arr_rel_insert_input | null;
  name?: string | null;
  podcast_program_categories?: podcast_program_category_arr_rel_insert_input | null;
  position?: number | null;
  post_categories?: post_category_arr_rel_insert_input | null;
  program_categories?: program_category_arr_rel_insert_input | null;
}

/**
 * input type for inserting object relation for remote table "category"
 */
export interface category_obj_rel_insert_input {
  data: category_insert_input;
  on_conflict?: category_on_conflict | null;
}

/**
 * on conflict condition type for table "category"
 */
export interface category_on_conflict {
  constraint: category_constraint;
  update_columns: category_update_column[];
  where?: category_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "coin_log"
 */
export interface coin_log_arr_rel_insert_input {
  data: coin_log_insert_input[];
  on_conflict?: coin_log_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "coin_log". All fields are combined with a logical 'AND'.
 */
export interface coin_log_bool_exp {
  _and?: (coin_log_bool_exp | null)[] | null;
  _not?: coin_log_bool_exp | null;
  _or?: (coin_log_bool_exp | null)[] | null;
  amount?: numeric_comparison_exp | null;
  created_at?: timestamptz_comparison_exp | null;
  description?: String_comparison_exp | null;
  ended_at?: timestamptz_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  member?: member_bool_exp | null;
  member_id?: String_comparison_exp | null;
  note?: String_comparison_exp | null;
  started_at?: timestamptz_comparison_exp | null;
  title?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "coin_log"
 */
export interface coin_log_insert_input {
  amount?: any | null;
  created_at?: any | null;
  description?: string | null;
  ended_at?: any | null;
  id?: any | null;
  member?: member_obj_rel_insert_input | null;
  member_id?: string | null;
  note?: string | null;
  started_at?: any | null;
  title?: string | null;
}

/**
 * on conflict condition type for table "coin_log"
 */
export interface coin_log_on_conflict {
  constraint: coin_log_constraint;
  update_columns: coin_log_update_column[];
  where?: coin_log_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "comment"
 */
export interface comment_arr_rel_insert_input {
  data: comment_insert_input[];
  on_conflict?: comment_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "comment". All fields are combined with a logical 'AND'.
 */
export interface comment_bool_exp {
  _and?: (comment_bool_exp | null)[] | null;
  _not?: comment_bool_exp | null;
  _or?: (comment_bool_exp | null)[] | null;
  app?: app_bool_exp | null;
  app_id?: String_comparison_exp | null;
  comment_reactions?: comment_reaction_bool_exp | null;
  comment_replies?: comment_reply_bool_exp | null;
  content?: String_comparison_exp | null;
  created_at?: timestamptz_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  member?: member_bool_exp | null;
  member_id?: String_comparison_exp | null;
  thread_id?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "comment"
 */
export interface comment_insert_input {
  app?: app_obj_rel_insert_input | null;
  app_id?: string | null;
  comment_reactions?: comment_reaction_arr_rel_insert_input | null;
  comment_replies?: comment_reply_arr_rel_insert_input | null;
  content?: string | null;
  created_at?: any | null;
  id?: any | null;
  member?: member_obj_rel_insert_input | null;
  member_id?: string | null;
  thread_id?: string | null;
}

/**
 * input type for inserting object relation for remote table "comment"
 */
export interface comment_obj_rel_insert_input {
  data: comment_insert_input;
  on_conflict?: comment_on_conflict | null;
}

/**
 * on conflict condition type for table "comment"
 */
export interface comment_on_conflict {
  constraint: comment_constraint;
  update_columns: comment_update_column[];
  where?: comment_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "comment_reaction"
 */
export interface comment_reaction_arr_rel_insert_input {
  data: comment_reaction_insert_input[];
  on_conflict?: comment_reaction_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "comment_reaction". All fields are combined with a logical 'AND'.
 */
export interface comment_reaction_bool_exp {
  _and?: (comment_reaction_bool_exp | null)[] | null;
  _not?: comment_reaction_bool_exp | null;
  _or?: (comment_reaction_bool_exp | null)[] | null;
  comment?: comment_bool_exp | null;
  comment_id?: uuid_comparison_exp | null;
  created_at?: timestamptz_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  member?: member_bool_exp | null;
  member_id?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "comment_reaction"
 */
export interface comment_reaction_insert_input {
  comment?: comment_obj_rel_insert_input | null;
  comment_id?: any | null;
  created_at?: any | null;
  id?: any | null;
  member?: member_obj_rel_insert_input | null;
  member_id?: string | null;
}

/**
 * on conflict condition type for table "comment_reaction"
 */
export interface comment_reaction_on_conflict {
  constraint: comment_reaction_constraint;
  update_columns: comment_reaction_update_column[];
  where?: comment_reaction_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "comment_reply"
 */
export interface comment_reply_arr_rel_insert_input {
  data: comment_reply_insert_input[];
  on_conflict?: comment_reply_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "comment_reply". All fields are combined with a logical 'AND'.
 */
export interface comment_reply_bool_exp {
  _and?: (comment_reply_bool_exp | null)[] | null;
  _not?: comment_reply_bool_exp | null;
  _or?: (comment_reply_bool_exp | null)[] | null;
  comment?: comment_bool_exp | null;
  comment_id?: uuid_comparison_exp | null;
  comment_reply_reactions?: comment_reply_reaction_bool_exp | null;
  content?: String_comparison_exp | null;
  created_at?: timestamptz_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  member?: member_bool_exp | null;
  member_id?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "comment_reply"
 */
export interface comment_reply_insert_input {
  comment?: comment_obj_rel_insert_input | null;
  comment_id?: any | null;
  comment_reply_reactions?: comment_reply_reaction_arr_rel_insert_input | null;
  content?: string | null;
  created_at?: any | null;
  id?: any | null;
  member?: member_obj_rel_insert_input | null;
  member_id?: string | null;
}

/**
 * input type for inserting object relation for remote table "comment_reply"
 */
export interface comment_reply_obj_rel_insert_input {
  data: comment_reply_insert_input;
  on_conflict?: comment_reply_on_conflict | null;
}

/**
 * on conflict condition type for table "comment_reply"
 */
export interface comment_reply_on_conflict {
  constraint: comment_reply_constraint;
  update_columns: comment_reply_update_column[];
  where?: comment_reply_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "comment_reply_reaction"
 */
export interface comment_reply_reaction_arr_rel_insert_input {
  data: comment_reply_reaction_insert_input[];
  on_conflict?: comment_reply_reaction_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "comment_reply_reaction". All fields are combined with a logical 'AND'.
 */
export interface comment_reply_reaction_bool_exp {
  _and?: (comment_reply_reaction_bool_exp | null)[] | null;
  _not?: comment_reply_reaction_bool_exp | null;
  _or?: (comment_reply_reaction_bool_exp | null)[] | null;
  comment_reply?: comment_reply_bool_exp | null;
  comment_reply_id?: uuid_comparison_exp | null;
  created_at?: timestamptz_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  member?: member_bool_exp | null;
  member_id?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "comment_reply_reaction"
 */
export interface comment_reply_reaction_insert_input {
  comment_reply?: comment_reply_obj_rel_insert_input | null;
  comment_reply_id?: any | null;
  created_at?: any | null;
  id?: any | null;
  member?: member_obj_rel_insert_input | null;
  member_id?: string | null;
}

/**
 * on conflict condition type for table "comment_reply_reaction"
 */
export interface comment_reply_reaction_on_conflict {
  constraint: comment_reply_reaction_constraint;
  update_columns: comment_reply_reaction_update_column[];
  where?: comment_reply_reaction_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "contract". All fields are combined with a logical 'AND'.
 */
export interface contract_bool_exp {
  _and?: (contract_bool_exp | null)[] | null;
  _not?: contract_bool_exp | null;
  _or?: (contract_bool_exp | null)[] | null;
  created_at?: timestamptz_comparison_exp | null;
  deliverables?: String_comparison_exp | null;
  description?: String_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  member_contracts?: member_contract_bool_exp | null;
  name?: String_comparison_exp | null;
  template?: String_comparison_exp | null;
  updated_at?: timestamptz_comparison_exp | null;
}

/**
 * input type for inserting data into table "contract"
 */
export interface contract_insert_input {
  created_at?: any | null;
  deliverables?: string | null;
  description?: string | null;
  id?: any | null;
  member_contracts?: member_contract_arr_rel_insert_input | null;
  name?: string | null;
  template?: string | null;
  updated_at?: any | null;
}

/**
 * input type for inserting object relation for remote table "contract"
 */
export interface contract_obj_rel_insert_input {
  data: contract_insert_input;
  on_conflict?: contract_on_conflict | null;
}

/**
 * on conflict condition type for table "contract"
 */
export interface contract_on_conflict {
  constraint: contract_constraint;
  update_columns: contract_update_column[];
  where?: contract_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "coupon"
 */
export interface coupon_arr_rel_insert_input {
  data: coupon_insert_input[];
  on_conflict?: coupon_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "coupon". All fields are combined with a logical 'AND'.
 */
export interface coupon_bool_exp {
  _and?: (coupon_bool_exp | null)[] | null;
  _not?: coupon_bool_exp | null;
  _or?: (coupon_bool_exp | null)[] | null;
  coupon_code?: coupon_code_bool_exp | null;
  coupon_code_id?: uuid_comparison_exp | null;
  created_at?: timestamptz_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  member?: member_bool_exp | null;
  member_id?: String_comparison_exp | null;
  order_logs?: order_log_bool_exp | null;
  status?: coupon_status_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "coupon_code"
 */
export interface coupon_code_arr_rel_insert_input {
  data: coupon_code_insert_input[];
  on_conflict?: coupon_code_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "coupon_code". All fields are combined with a logical 'AND'.
 */
export interface coupon_code_bool_exp {
  _and?: (coupon_code_bool_exp | null)[] | null;
  _not?: coupon_code_bool_exp | null;
  _or?: (coupon_code_bool_exp | null)[] | null;
  app_id?: String_comparison_exp | null;
  code?: String_comparison_exp | null;
  count?: Int_comparison_exp | null;
  coupon_plan?: coupon_plan_bool_exp | null;
  coupon_plan_id?: uuid_comparison_exp | null;
  coupons?: coupon_bool_exp | null;
  id?: uuid_comparison_exp | null;
  remaining?: Int_comparison_exp | null;
}

/**
 * input type for inserting data into table "coupon_code"
 */
export interface coupon_code_insert_input {
  app_id?: string | null;
  code?: string | null;
  count?: number | null;
  coupon_plan?: coupon_plan_obj_rel_insert_input | null;
  coupon_plan_id?: any | null;
  coupons?: coupon_arr_rel_insert_input | null;
  id?: any | null;
  remaining?: number | null;
}

/**
 * input type for inserting object relation for remote table "coupon_code"
 */
export interface coupon_code_obj_rel_insert_input {
  data: coupon_code_insert_input;
  on_conflict?: coupon_code_on_conflict | null;
}

/**
 * on conflict condition type for table "coupon_code"
 */
export interface coupon_code_on_conflict {
  constraint: coupon_code_constraint;
  update_columns: coupon_code_update_column[];
  where?: coupon_code_bool_exp | null;
}

/**
 * input type for inserting data into table "coupon"
 */
export interface coupon_insert_input {
  coupon_code?: coupon_code_obj_rel_insert_input | null;
  coupon_code_id?: any | null;
  created_at?: any | null;
  id?: any | null;
  member?: member_obj_rel_insert_input | null;
  member_id?: string | null;
  order_logs?: order_log_arr_rel_insert_input | null;
}

/**
 * input type for inserting object relation for remote table "coupon"
 */
export interface coupon_obj_rel_insert_input {
  data: coupon_insert_input;
  on_conflict?: coupon_on_conflict | null;
}

/**
 * on conflict condition type for table "coupon"
 */
export interface coupon_on_conflict {
  constraint: coupon_constraint;
  update_columns: coupon_update_column[];
  where?: coupon_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "coupon_plan". All fields are combined with a logical 'AND'.
 */
export interface coupon_plan_bool_exp {
  _and?: (coupon_plan_bool_exp | null)[] | null;
  _not?: coupon_plan_bool_exp | null;
  _or?: (coupon_plan_bool_exp | null)[] | null;
  amount?: numeric_comparison_exp | null;
  constraint?: numeric_comparison_exp | null;
  coupon_codes?: coupon_code_bool_exp | null;
  coupon_plan_products?: coupon_plan_product_bool_exp | null;
  description?: String_comparison_exp | null;
  ended_at?: timestamptz_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  scope?: jsonb_comparison_exp | null;
  started_at?: timestamptz_comparison_exp | null;
  title?: String_comparison_exp | null;
  type?: Int_comparison_exp | null;
  updated_at?: timestamptz_comparison_exp | null;
}

/**
 * input type for inserting data into table "coupon_plan"
 */
export interface coupon_plan_insert_input {
  amount?: any | null;
  constraint?: any | null;
  coupon_codes?: coupon_code_arr_rel_insert_input | null;
  coupon_plan_products?: coupon_plan_product_arr_rel_insert_input | null;
  description?: string | null;
  ended_at?: any | null;
  id?: any | null;
  scope?: any | null;
  started_at?: any | null;
  title?: string | null;
  type?: number | null;
  updated_at?: any | null;
}

/**
 * input type for inserting object relation for remote table "coupon_plan"
 */
export interface coupon_plan_obj_rel_insert_input {
  data: coupon_plan_insert_input;
  on_conflict?: coupon_plan_on_conflict | null;
}

/**
 * on conflict condition type for table "coupon_plan"
 */
export interface coupon_plan_on_conflict {
  constraint: coupon_plan_constraint;
  update_columns: coupon_plan_update_column[];
  where?: coupon_plan_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "coupon_plan_product"
 */
export interface coupon_plan_product_arr_rel_insert_input {
  data: coupon_plan_product_insert_input[];
  on_conflict?: coupon_plan_product_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "coupon_plan_product". All fields are combined with a logical 'AND'.
 */
export interface coupon_plan_product_bool_exp {
  _and?: (coupon_plan_product_bool_exp | null)[] | null;
  _not?: coupon_plan_product_bool_exp | null;
  _or?: (coupon_plan_product_bool_exp | null)[] | null;
  coupon_plan?: coupon_plan_bool_exp | null;
  coupon_plan_id?: uuid_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  product?: product_bool_exp | null;
  product_id?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "coupon_plan_product"
 */
export interface coupon_plan_product_insert_input {
  coupon_plan?: coupon_plan_obj_rel_insert_input | null;
  coupon_plan_id?: any | null;
  id?: any | null;
  product?: product_obj_rel_insert_input | null;
  product_id?: string | null;
}

/**
 * on conflict condition type for table "coupon_plan_product"
 */
export interface coupon_plan_product_on_conflict {
  constraint: coupon_plan_product_constraint;
  update_columns: coupon_plan_product_update_column[];
  where?: coupon_plan_product_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "coupon_status". All fields are combined with a logical 'AND'.
 */
export interface coupon_status_bool_exp {
  _and?: (coupon_status_bool_exp | null)[] | null;
  _not?: coupon_status_bool_exp | null;
  _or?: (coupon_status_bool_exp | null)[] | null;
  coupon?: coupon_bool_exp | null;
  coupon_id?: uuid_comparison_exp | null;
  outdated?: Boolean_comparison_exp | null;
  used?: Boolean_comparison_exp | null;
}

/**
 * Boolean expression to filter rows from the table "currency". All fields are combined with a logical 'AND'.
 */
export interface currency_bool_exp {
  _and?: (currency_bool_exp | null)[] | null;
  _not?: currency_bool_exp | null;
  _or?: (currency_bool_exp | null)[] | null;
  appointment_plans?: appointment_plan_bool_exp | null;
  id?: String_comparison_exp | null;
  label?: String_comparison_exp | null;
  name?: String_comparison_exp | null;
  order_products?: order_product_bool_exp | null;
  program_plans?: program_plan_bool_exp | null;
  unit?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "currency"
 */
export interface currency_insert_input {
  appointment_plans?: appointment_plan_arr_rel_insert_input | null;
  id?: string | null;
  label?: string | null;
  name?: string | null;
  order_products?: order_product_arr_rel_insert_input | null;
  program_plans?: program_plan_arr_rel_insert_input | null;
  unit?: string | null;
}

/**
 * input type for inserting object relation for remote table "currency"
 */
export interface currency_obj_rel_insert_input {
  data: currency_insert_input;
  on_conflict?: currency_on_conflict | null;
}

/**
 * on conflict condition type for table "currency"
 */
export interface currency_on_conflict {
  constraint: currency_constraint;
  update_columns: currency_update_column[];
  where?: currency_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "issue"
 */
export interface issue_arr_rel_insert_input {
  data: issue_insert_input[];
  on_conflict?: issue_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "issue". All fields are combined with a logical 'AND'.
 */
export interface issue_bool_exp {
  _and?: (issue_bool_exp | null)[] | null;
  _not?: issue_bool_exp | null;
  _or?: (issue_bool_exp | null)[] | null;
  app?: app_bool_exp | null;
  app_id?: String_comparison_exp | null;
  created_at?: timestamptz_comparison_exp | null;
  description?: String_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  issue_reactions?: issue_reaction_bool_exp | null;
  issue_replies?: issue_reply_bool_exp | null;
  member?: member_bool_exp | null;
  member_id?: String_comparison_exp | null;
  solved_at?: timestamptz_comparison_exp | null;
  thread_id?: String_comparison_exp | null;
  title?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "issue"
 */
export interface issue_insert_input {
  app?: app_obj_rel_insert_input | null;
  app_id?: string | null;
  created_at?: any | null;
  description?: string | null;
  id?: any | null;
  issue_reactions?: issue_reaction_arr_rel_insert_input | null;
  issue_replies?: issue_reply_arr_rel_insert_input | null;
  member?: member_obj_rel_insert_input | null;
  member_id?: string | null;
  solved_at?: any | null;
  thread_id?: string | null;
  title?: string | null;
}

/**
 * input type for inserting object relation for remote table "issue"
 */
export interface issue_obj_rel_insert_input {
  data: issue_insert_input;
  on_conflict?: issue_on_conflict | null;
}

/**
 * on conflict condition type for table "issue"
 */
export interface issue_on_conflict {
  constraint: issue_constraint;
  update_columns: issue_update_column[];
  where?: issue_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "issue_reaction"
 */
export interface issue_reaction_arr_rel_insert_input {
  data: issue_reaction_insert_input[];
  on_conflict?: issue_reaction_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "issue_reaction". All fields are combined with a logical 'AND'.
 */
export interface issue_reaction_bool_exp {
  _and?: (issue_reaction_bool_exp | null)[] | null;
  _not?: issue_reaction_bool_exp | null;
  _or?: (issue_reaction_bool_exp | null)[] | null;
  created_at?: timestamptz_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  issue?: issue_bool_exp | null;
  issue_id?: uuid_comparison_exp | null;
  member?: member_bool_exp | null;
  member_id?: String_comparison_exp | null;
  public_member?: member_public_bool_exp | null;
}

/**
 * input type for inserting data into table "issue_reaction"
 */
export interface issue_reaction_insert_input {
  created_at?: any | null;
  id?: any | null;
  issue?: issue_obj_rel_insert_input | null;
  issue_id?: any | null;
  member?: member_obj_rel_insert_input | null;
  member_id?: string | null;
}

/**
 * on conflict condition type for table "issue_reaction"
 */
export interface issue_reaction_on_conflict {
  constraint: issue_reaction_constraint;
  update_columns: issue_reaction_update_column[];
  where?: issue_reaction_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "issue_reply"
 */
export interface issue_reply_arr_rel_insert_input {
  data: issue_reply_insert_input[];
  on_conflict?: issue_reply_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "issue_reply". All fields are combined with a logical 'AND'.
 */
export interface issue_reply_bool_exp {
  _and?: (issue_reply_bool_exp | null)[] | null;
  _not?: issue_reply_bool_exp | null;
  _or?: (issue_reply_bool_exp | null)[] | null;
  content?: String_comparison_exp | null;
  created_at?: timestamptz_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  issue?: issue_bool_exp | null;
  issue_id?: uuid_comparison_exp | null;
  issue_reply_reactions?: issue_reply_reaction_bool_exp | null;
  member?: member_bool_exp | null;
  member_id?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "issue_reply"
 */
export interface issue_reply_insert_input {
  content?: string | null;
  created_at?: any | null;
  id?: any | null;
  issue?: issue_obj_rel_insert_input | null;
  issue_id?: any | null;
  issue_reply_reactions?: issue_reply_reaction_arr_rel_insert_input | null;
  member?: member_obj_rel_insert_input | null;
  member_id?: string | null;
}

/**
 * input type for inserting object relation for remote table "issue_reply"
 */
export interface issue_reply_obj_rel_insert_input {
  data: issue_reply_insert_input;
  on_conflict?: issue_reply_on_conflict | null;
}

/**
 * on conflict condition type for table "issue_reply"
 */
export interface issue_reply_on_conflict {
  constraint: issue_reply_constraint;
  update_columns: issue_reply_update_column[];
  where?: issue_reply_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "issue_reply_reaction"
 */
export interface issue_reply_reaction_arr_rel_insert_input {
  data: issue_reply_reaction_insert_input[];
  on_conflict?: issue_reply_reaction_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "issue_reply_reaction". All fields are combined with a logical 'AND'.
 */
export interface issue_reply_reaction_bool_exp {
  _and?: (issue_reply_reaction_bool_exp | null)[] | null;
  _not?: issue_reply_reaction_bool_exp | null;
  _or?: (issue_reply_reaction_bool_exp | null)[] | null;
  created_at?: timestamptz_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  issue_reply?: issue_reply_bool_exp | null;
  issue_reply_id?: uuid_comparison_exp | null;
  member?: member_bool_exp | null;
  member_id?: String_comparison_exp | null;
  public_member?: member_public_bool_exp | null;
}

/**
 * input type for inserting data into table "issue_reply_reaction"
 */
export interface issue_reply_reaction_insert_input {
  created_at?: any | null;
  id?: any | null;
  issue_reply?: issue_reply_obj_rel_insert_input | null;
  issue_reply_id?: any | null;
  member?: member_obj_rel_insert_input | null;
  member_id?: string | null;
}

/**
 * on conflict condition type for table "issue_reply_reaction"
 */
export interface issue_reply_reaction_on_conflict {
  constraint: issue_reply_reaction_constraint;
  update_columns: issue_reply_reaction_update_column[];
  where?: issue_reply_reaction_bool_exp | null;
}

/**
 * expression to compare columns of type jsonb. All fields are combined with logical 'AND'.
 */
export interface jsonb_comparison_exp {
  _contained_in?: any | null;
  _contains?: any | null;
  _eq?: any | null;
  _gt?: any | null;
  _gte?: any | null;
  _has_key?: string | null;
  _has_keys_all?: string[] | null;
  _has_keys_any?: string[] | null;
  _in?: any[] | null;
  _is_null?: boolean | null;
  _lt?: any | null;
  _lte?: any | null;
  _neq?: any | null;
  _nin?: any[] | null;
}

/**
 * input type for inserting array relation for remote table "media"
 */
export interface media_arr_rel_insert_input {
  data: media_insert_input[];
  on_conflict?: media_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "media". All fields are combined with a logical 'AND'.
 */
export interface media_bool_exp {
  _and?: (media_bool_exp | null)[] | null;
  _not?: media_bool_exp | null;
  _or?: (media_bool_exp | null)[] | null;
  created_at?: timestamptz_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  member?: member_bool_exp | null;
  member_id?: String_comparison_exp | null;
  metadata?: jsonb_comparison_exp | null;
  name?: String_comparison_exp | null;
  resource_url?: String_comparison_exp | null;
  size?: Int_comparison_exp | null;
  type?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "media"
 */
export interface media_insert_input {
  created_at?: any | null;
  id?: any | null;
  member?: member_obj_rel_insert_input | null;
  member_id?: string | null;
  metadata?: any | null;
  name?: string | null;
  resource_url?: string | null;
  size?: number | null;
  type?: string | null;
}

/**
 * on conflict condition type for table "media"
 */
export interface media_on_conflict {
  constraint: media_constraint;
  update_columns: media_update_column[];
  where?: media_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "member"
 */
export interface member_arr_rel_insert_input {
  data: member_insert_input[];
  on_conflict?: member_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "member". All fields are combined with a logical 'AND'.
 */
export interface member_bool_exp {
  _and?: (member_bool_exp | null)[] | null;
  _not?: member_bool_exp | null;
  _or?: (member_bool_exp | null)[] | null;
  abstract?: String_comparison_exp | null;
  activities?: activity_bool_exp | null;
  app?: app_bool_exp | null;
  app_id?: String_comparison_exp | null;
  appointment_plans?: appointment_plan_bool_exp | null;
  coin_logs?: coin_log_bool_exp | null;
  comment_reactions?: comment_reaction_bool_exp | null;
  comment_replies?: comment_reply_bool_exp | null;
  comment_reply_reactions?: comment_reply_reaction_bool_exp | null;
  comments?: comment_bool_exp | null;
  coupons?: coupon_bool_exp | null;
  created_at?: timestamptz_comparison_exp | null;
  description?: String_comparison_exp | null;
  email?: String_comparison_exp | null;
  facebook_user_id?: String_comparison_exp | null;
  google_user_id?: String_comparison_exp | null;
  id?: String_comparison_exp | null;
  issue_reactions?: issue_reaction_bool_exp | null;
  issue_replies?: issue_reply_bool_exp | null;
  issue_reply_reactions?: issue_reply_reaction_bool_exp | null;
  issues?: issue_bool_exp | null;
  logined_at?: timestamptz_comparison_exp | null;
  media?: media_bool_exp | null;
  member_cards?: member_card_bool_exp | null;
  member_contracts?: member_contract_bool_exp | null;
  member_shops?: member_shop_bool_exp | null;
  member_socials?: member_social_bool_exp | null;
  member_tags?: member_tag_bool_exp | null;
  merchandises?: merchandise_bool_exp | null;
  metadata?: jsonb_comparison_exp | null;
  name?: String_comparison_exp | null;
  notifications?: notification_bool_exp | null;
  notificationsByTargetMembereId?: notification_bool_exp | null;
  order_logs?: order_log_bool_exp | null;
  passhash?: String_comparison_exp | null;
  picture_url?: String_comparison_exp | null;
  playlists?: playlist_bool_exp | null;
  podcast_plans?: podcast_plan_bool_exp | null;
  podcast_program_roles?: podcast_program_role_bool_exp | null;
  podcast_programs?: podcast_program_bool_exp | null;
  podcasts?: podcast_bool_exp | null;
  point_logs?: point_log_bool_exp | null;
  point_status?: point_status_bool_exp | null;
  program_content_enrollments?: program_content_enrollment_bool_exp | null;
  program_content_progresses?: program_content_progress_bool_exp | null;
  program_roles?: program_role_bool_exp | null;
  program_tempo_deliveries?: program_tempo_delivery_bool_exp | null;
  refresh_token?: uuid_comparison_exp | null;
  role?: String_comparison_exp | null;
  roles_deprecated?: jsonb_comparison_exp | null;
  title?: String_comparison_exp | null;
  username?: String_comparison_exp | null;
  vouchers?: voucher_bool_exp | null;
  youtube_channel_ids?: jsonb_comparison_exp | null;
  zoom_user_id_deprecate?: String_comparison_exp | null;
}

/**
 * input type for inserting array relation for remote table "member_card"
 */
export interface member_card_arr_rel_insert_input {
  data: member_card_insert_input[];
  on_conflict?: member_card_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "member_card". All fields are combined with a logical 'AND'.
 */
export interface member_card_bool_exp {
  _and?: (member_card_bool_exp | null)[] | null;
  _not?: member_card_bool_exp | null;
  _or?: (member_card_bool_exp | null)[] | null;
  card_holder?: jsonb_comparison_exp | null;
  card_identifier?: String_comparison_exp | null;
  card_info?: jsonb_comparison_exp | null;
  card_secret?: jsonb_comparison_exp | null;
  id?: String_comparison_exp | null;
  member?: member_bool_exp | null;
  member_id?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "member_card"
 */
export interface member_card_insert_input {
  card_holder?: any | null;
  card_identifier?: string | null;
  card_info?: any | null;
  card_secret?: any | null;
  id?: string | null;
  member?: member_obj_rel_insert_input | null;
  member_id?: string | null;
}

/**
 * on conflict condition type for table "member_card"
 */
export interface member_card_on_conflict {
  constraint: member_card_constraint;
  update_columns: member_card_update_column[];
  where?: member_card_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "member_contract"
 */
export interface member_contract_arr_rel_insert_input {
  data: member_contract_insert_input[];
  on_conflict?: member_contract_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "member_contract". All fields are combined with a logical 'AND'.
 */
export interface member_contract_bool_exp {
  _and?: (member_contract_bool_exp | null)[] | null;
  _not?: member_contract_bool_exp | null;
  _or?: (member_contract_bool_exp | null)[] | null;
  agreed_at?: timestamptz_comparison_exp | null;
  agreed_ip?: String_comparison_exp | null;
  agreed_options?: jsonb_comparison_exp | null;
  contract?: contract_bool_exp | null;
  contract_id?: uuid_comparison_exp | null;
  ended_at?: timestamptz_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  member?: member_bool_exp | null;
  member_id?: String_comparison_exp | null;
  started_at?: timestamptz_comparison_exp | null;
  values?: jsonb_comparison_exp | null;
}

/**
 * input type for inserting data into table "member_contract"
 */
export interface member_contract_insert_input {
  agreed_at?: any | null;
  agreed_ip?: string | null;
  agreed_options?: any | null;
  contract?: contract_obj_rel_insert_input | null;
  contract_id?: any | null;
  ended_at?: any | null;
  id?: any | null;
  member?: member_obj_rel_insert_input | null;
  member_id?: string | null;
  started_at?: any | null;
  values?: any | null;
}

/**
 * on conflict condition type for table "member_contract"
 */
export interface member_contract_on_conflict {
  constraint: member_contract_constraint;
  update_columns: member_contract_update_column[];
  where?: member_contract_bool_exp | null;
}

/**
 * input type for inserting data into table "member"
 */
export interface member_insert_input {
  abstract?: string | null;
  activities?: activity_arr_rel_insert_input | null;
  app?: app_obj_rel_insert_input | null;
  app_id?: string | null;
  appointment_plans?: appointment_plan_arr_rel_insert_input | null;
  coin_logs?: coin_log_arr_rel_insert_input | null;
  comment_reactions?: comment_reaction_arr_rel_insert_input | null;
  comment_replies?: comment_reply_arr_rel_insert_input | null;
  comment_reply_reactions?: comment_reply_reaction_arr_rel_insert_input | null;
  comments?: comment_arr_rel_insert_input | null;
  coupons?: coupon_arr_rel_insert_input | null;
  created_at?: any | null;
  description?: string | null;
  email?: string | null;
  facebook_user_id?: string | null;
  google_user_id?: string | null;
  id?: string | null;
  issue_reactions?: issue_reaction_arr_rel_insert_input | null;
  issue_replies?: issue_reply_arr_rel_insert_input | null;
  issue_reply_reactions?: issue_reply_reaction_arr_rel_insert_input | null;
  issues?: issue_arr_rel_insert_input | null;
  logined_at?: any | null;
  media?: media_arr_rel_insert_input | null;
  member_cards?: member_card_arr_rel_insert_input | null;
  member_contracts?: member_contract_arr_rel_insert_input | null;
  member_shops?: member_shop_arr_rel_insert_input | null;
  member_socials?: member_social_arr_rel_insert_input | null;
  member_tags?: member_tag_arr_rel_insert_input | null;
  merchandises?: merchandise_arr_rel_insert_input | null;
  metadata?: any | null;
  name?: string | null;
  notifications?: notification_arr_rel_insert_input | null;
  notificationsByTargetMembereId?: notification_arr_rel_insert_input | null;
  order_logs?: order_log_arr_rel_insert_input | null;
  passhash?: string | null;
  picture_url?: string | null;
  playlists?: playlist_arr_rel_insert_input | null;
  podcast_plans?: podcast_plan_arr_rel_insert_input | null;
  podcast_program_roles?: podcast_program_role_arr_rel_insert_input | null;
  podcast_programs?: podcast_program_arr_rel_insert_input | null;
  podcasts?: podcast_arr_rel_insert_input | null;
  point_logs?: point_log_arr_rel_insert_input | null;
  program_content_progresses?: program_content_progress_arr_rel_insert_input | null;
  program_roles?: program_role_arr_rel_insert_input | null;
  program_tempo_deliveries?: program_tempo_delivery_arr_rel_insert_input | null;
  refresh_token?: any | null;
  role?: string | null;
  roles_deprecated?: any | null;
  title?: string | null;
  username?: string | null;
  vouchers?: voucher_arr_rel_insert_input | null;
  youtube_channel_ids?: any | null;
  zoom_user_id_deprecate?: string | null;
}

/**
 * input type for inserting object relation for remote table "member"
 */
export interface member_obj_rel_insert_input {
  data: member_insert_input;
  on_conflict?: member_on_conflict | null;
}

/**
 * on conflict condition type for table "member"
 */
export interface member_on_conflict {
  constraint: member_constraint;
  update_columns: member_update_column[];
  where?: member_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "member_public". All fields are combined with a logical 'AND'.
 */
export interface member_public_bool_exp {
  _and?: (member_public_bool_exp | null)[] | null;
  _not?: member_public_bool_exp | null;
  _or?: (member_public_bool_exp | null)[] | null;
  abstract?: String_comparison_exp | null;
  app_id?: String_comparison_exp | null;
  description?: String_comparison_exp | null;
  id?: String_comparison_exp | null;
  metadata?: jsonb_comparison_exp | null;
  name?: String_comparison_exp | null;
  picture_url?: String_comparison_exp | null;
  role?: String_comparison_exp | null;
  roles?: jsonb_comparison_exp | null;
  tag_names?: jsonb_comparison_exp | null;
  title?: String_comparison_exp | null;
  username?: String_comparison_exp | null;
  zoom_user_id?: String_comparison_exp | null;
}

/**
 * input type for inserting array relation for remote table "member_shop"
 */
export interface member_shop_arr_rel_insert_input {
  data: member_shop_insert_input[];
  on_conflict?: member_shop_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "member_shop". All fields are combined with a logical 'AND'.
 */
export interface member_shop_bool_exp {
  _and?: (member_shop_bool_exp | null)[] | null;
  _not?: member_shop_bool_exp | null;
  _or?: (member_shop_bool_exp | null)[] | null;
  created_at?: timestamptz_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  member?: member_public_bool_exp | null;
  member_id?: String_comparison_exp | null;
  merchandises?: merchandise_bool_exp | null;
  published_at?: timestamptz_comparison_exp | null;
  shipping_methods?: jsonb_comparison_exp | null;
  title?: String_comparison_exp | null;
  updated_at?: timestamptz_comparison_exp | null;
}

/**
 * input type for inserting data into table "member_shop"
 */
export interface member_shop_insert_input {
  created_at?: any | null;
  id?: any | null;
  member_id?: string | null;
  merchandises?: merchandise_arr_rel_insert_input | null;
  published_at?: any | null;
  shipping_methods?: any | null;
  title?: string | null;
  updated_at?: any | null;
}

/**
 * input type for inserting object relation for remote table "member_shop"
 */
export interface member_shop_obj_rel_insert_input {
  data: member_shop_insert_input;
  on_conflict?: member_shop_on_conflict | null;
}

/**
 * on conflict condition type for table "member_shop"
 */
export interface member_shop_on_conflict {
  constraint: member_shop_constraint;
  update_columns: member_shop_update_column[];
  where?: member_shop_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "member_social"
 */
export interface member_social_arr_rel_insert_input {
  data: member_social_insert_input[];
  on_conflict?: member_social_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "member_social". All fields are combined with a logical 'AND'.
 */
export interface member_social_bool_exp {
  _and?: (member_social_bool_exp | null)[] | null;
  _not?: member_social_bool_exp | null;
  _or?: (member_social_bool_exp | null)[] | null;
  channel_id?: String_comparison_exp | null;
  channel_url?: String_comparison_exp | null;
  description?: String_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  member?: member_bool_exp | null;
  member_id?: String_comparison_exp | null;
  name?: String_comparison_exp | null;
  profile_url?: String_comparison_exp | null;
  social_cards?: social_card_bool_exp | null;
  type?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "member_social"
 */
export interface member_social_insert_input {
  channel_id?: string | null;
  channel_url?: string | null;
  description?: string | null;
  id?: any | null;
  member?: member_obj_rel_insert_input | null;
  member_id?: string | null;
  name?: string | null;
  profile_url?: string | null;
  social_cards?: social_card_arr_rel_insert_input | null;
  type?: string | null;
}

/**
 * input type for inserting object relation for remote table "member_social"
 */
export interface member_social_obj_rel_insert_input {
  data: member_social_insert_input;
  on_conflict?: member_social_on_conflict | null;
}

/**
 * on conflict condition type for table "member_social"
 */
export interface member_social_on_conflict {
  constraint: member_social_constraint;
  update_columns: member_social_update_column[];
  where?: member_social_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "member_tag"
 */
export interface member_tag_arr_rel_insert_input {
  data: member_tag_insert_input[];
  on_conflict?: member_tag_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "member_tag". All fields are combined with a logical 'AND'.
 */
export interface member_tag_bool_exp {
  _and?: (member_tag_bool_exp | null)[] | null;
  _not?: member_tag_bool_exp | null;
  _or?: (member_tag_bool_exp | null)[] | null;
  id?: uuid_comparison_exp | null;
  member?: member_bool_exp | null;
  member_id?: String_comparison_exp | null;
  tag?: tag_bool_exp | null;
  tag_name?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "member_tag"
 */
export interface member_tag_insert_input {
  id?: any | null;
  member?: member_obj_rel_insert_input | null;
  member_id?: string | null;
  tag?: tag_obj_rel_insert_input | null;
  tag_name?: string | null;
}

/**
 * on conflict condition type for table "member_tag"
 */
export interface member_tag_on_conflict {
  constraint: member_tag_constraint;
  update_columns: member_tag_update_column[];
  where?: member_tag_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "merchandise"
 */
export interface merchandise_arr_rel_insert_input {
  data: merchandise_insert_input[];
  on_conflict?: merchandise_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "merchandise". All fields are combined with a logical 'AND'.
 */
export interface merchandise_bool_exp {
  _and?: (merchandise_bool_exp | null)[] | null;
  _not?: merchandise_bool_exp | null;
  _or?: (merchandise_bool_exp | null)[] | null;
  abstract?: String_comparison_exp | null;
  app?: app_bool_exp | null;
  app_id?: String_comparison_exp | null;
  created_at?: timestamptz_comparison_exp | null;
  description?: String_comparison_exp | null;
  ended_at?: timestamptz_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  is_deleted?: Boolean_comparison_exp | null;
  link?: String_comparison_exp | null;
  list_price?: numeric_comparison_exp | null;
  member?: member_public_bool_exp | null;
  member_id?: String_comparison_exp | null;
  member_shop?: member_shop_bool_exp | null;
  member_shop_id?: uuid_comparison_exp | null;
  merchandise_categories?: merchandise_category_bool_exp | null;
  merchandise_imgs?: merchandise_img_bool_exp | null;
  merchandise_inventory_status?: merchandise_inventory_status_bool_exp | null;
  merchandise_tags?: merchandise_tag_bool_exp | null;
  meta?: String_comparison_exp | null;
  position?: Int_comparison_exp | null;
  post_merchandises?: post_merchandise_bool_exp | null;
  published_at?: timestamptz_comparison_exp | null;
  sale_price?: numeric_comparison_exp | null;
  sold_at?: timestamptz_comparison_exp | null;
  started_at?: timestamptz_comparison_exp | null;
  title?: String_comparison_exp | null;
  updated_at?: timestamptz_comparison_exp | null;
}

/**
 * input type for inserting array relation for remote table "merchandise_category"
 */
export interface merchandise_category_arr_rel_insert_input {
  data: merchandise_category_insert_input[];
  on_conflict?: merchandise_category_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "merchandise_category". All fields are combined with a logical 'AND'.
 */
export interface merchandise_category_bool_exp {
  _and?: (merchandise_category_bool_exp | null)[] | null;
  _not?: merchandise_category_bool_exp | null;
  _or?: (merchandise_category_bool_exp | null)[] | null;
  category?: category_bool_exp | null;
  category_id?: String_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  merchandise?: merchandise_bool_exp | null;
  merchandise_id?: uuid_comparison_exp | null;
  position?: Int_comparison_exp | null;
}

/**
 * input type for inserting data into table "merchandise_category"
 */
export interface merchandise_category_insert_input {
  category?: category_obj_rel_insert_input | null;
  category_id?: string | null;
  id?: any | null;
  merchandise?: merchandise_obj_rel_insert_input | null;
  merchandise_id?: any | null;
  position?: number | null;
}

/**
 * on conflict condition type for table "merchandise_category"
 */
export interface merchandise_category_on_conflict {
  constraint: merchandise_category_constraint;
  update_columns: merchandise_category_update_column[];
  where?: merchandise_category_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "merchandise_img"
 */
export interface merchandise_img_arr_rel_insert_input {
  data: merchandise_img_insert_input[];
  on_conflict?: merchandise_img_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "merchandise_img". All fields are combined with a logical 'AND'.
 */
export interface merchandise_img_bool_exp {
  _and?: (merchandise_img_bool_exp | null)[] | null;
  _not?: merchandise_img_bool_exp | null;
  _or?: (merchandise_img_bool_exp | null)[] | null;
  id?: uuid_comparison_exp | null;
  merchandise?: merchandise_bool_exp | null;
  merchandise_id?: uuid_comparison_exp | null;
  position?: Int_comparison_exp | null;
  type?: String_comparison_exp | null;
  url?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "merchandise_img"
 */
export interface merchandise_img_insert_input {
  id?: any | null;
  merchandise?: merchandise_obj_rel_insert_input | null;
  merchandise_id?: any | null;
  position?: number | null;
  type?: string | null;
  url?: string | null;
}

/**
 * on conflict condition type for table "merchandise_img"
 */
export interface merchandise_img_on_conflict {
  constraint: merchandise_img_constraint;
  update_columns: merchandise_img_update_column[];
  where?: merchandise_img_bool_exp | null;
}

/**
 * input type for inserting data into table "merchandise"
 */
export interface merchandise_insert_input {
  abstract?: string | null;
  app?: app_obj_rel_insert_input | null;
  app_id?: string | null;
  created_at?: any | null;
  description?: string | null;
  ended_at?: any | null;
  id?: any | null;
  is_deleted?: boolean | null;
  link?: string | null;
  list_price?: any | null;
  member_id?: string | null;
  member_shop?: member_shop_obj_rel_insert_input | null;
  member_shop_id?: any | null;
  merchandise_categories?: merchandise_category_arr_rel_insert_input | null;
  merchandise_imgs?: merchandise_img_arr_rel_insert_input | null;
  merchandise_tags?: merchandise_tag_arr_rel_insert_input | null;
  meta?: string | null;
  position?: number | null;
  post_merchandises?: post_merchandise_arr_rel_insert_input | null;
  published_at?: any | null;
  sale_price?: any | null;
  sold_at?: any | null;
  started_at?: any | null;
  title?: string | null;
  updated_at?: any | null;
}

/**
 * Boolean expression to filter rows from the table "merchandise_inventory_status". All fields are combined with a logical 'AND'.
 */
export interface merchandise_inventory_status_bool_exp {
  _and?: (merchandise_inventory_status_bool_exp | null)[] | null;
  _not?: merchandise_inventory_status_bool_exp | null;
  _or?: (merchandise_inventory_status_bool_exp | null)[] | null;
  buyable_quantity?: bigint_comparison_exp | null;
  delivered_quantity?: bigint_comparison_exp | null;
  merchandise?: merchandise_bool_exp | null;
  merchandise_id?: uuid_comparison_exp | null;
  total_quantity?: bigint_comparison_exp | null;
  undelivered_quantity?: bigint_comparison_exp | null;
}

/**
 * input type for inserting object relation for remote table "merchandise"
 */
export interface merchandise_obj_rel_insert_input {
  data: merchandise_insert_input;
  on_conflict?: merchandise_on_conflict | null;
}

/**
 * on conflict condition type for table "merchandise"
 */
export interface merchandise_on_conflict {
  constraint: merchandise_constraint;
  update_columns: merchandise_update_column[];
  where?: merchandise_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "merchandise_tag"
 */
export interface merchandise_tag_arr_rel_insert_input {
  data: merchandise_tag_insert_input[];
  on_conflict?: merchandise_tag_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "merchandise_tag". All fields are combined with a logical 'AND'.
 */
export interface merchandise_tag_bool_exp {
  _and?: (merchandise_tag_bool_exp | null)[] | null;
  _not?: merchandise_tag_bool_exp | null;
  _or?: (merchandise_tag_bool_exp | null)[] | null;
  id?: uuid_comparison_exp | null;
  merchandise?: merchandise_bool_exp | null;
  merchandise_id?: uuid_comparison_exp | null;
  position?: Int_comparison_exp | null;
  tag?: tag_bool_exp | null;
  tag_name?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "merchandise_tag"
 */
export interface merchandise_tag_insert_input {
  id?: any | null;
  merchandise?: merchandise_obj_rel_insert_input | null;
  merchandise_id?: any | null;
  position?: number | null;
  tag?: tag_obj_rel_insert_input | null;
  tag_name?: string | null;
}

/**
 * on conflict condition type for table "merchandise_tag"
 */
export interface merchandise_tag_on_conflict {
  constraint: merchandise_tag_constraint;
  update_columns: merchandise_tag_update_column[];
  where?: merchandise_tag_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "module". All fields are combined with a logical 'AND'.
 */
export interface module_bool_exp {
  _and?: (module_bool_exp | null)[] | null;
  _not?: module_bool_exp | null;
  _or?: (module_bool_exp | null)[] | null;
  app_modules?: app_module_bool_exp | null;
  id?: String_comparison_exp | null;
  name?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "module"
 */
export interface module_insert_input {
  app_modules?: app_module_arr_rel_insert_input | null;
  id?: string | null;
  name?: string | null;
}

/**
 * input type for inserting object relation for remote table "module"
 */
export interface module_obj_rel_insert_input {
  data: module_insert_input;
  on_conflict?: module_on_conflict | null;
}

/**
 * on conflict condition type for table "module"
 */
export interface module_on_conflict {
  constraint: module_constraint;
  update_columns: module_update_column[];
  where?: module_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "notification"
 */
export interface notification_arr_rel_insert_input {
  data: notification_insert_input[];
  on_conflict?: notification_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "notification". All fields are combined with a logical 'AND'.
 */
export interface notification_bool_exp {
  _and?: (notification_bool_exp | null)[] | null;
  _not?: notification_bool_exp | null;
  _or?: (notification_bool_exp | null)[] | null;
  avatar?: String_comparison_exp | null;
  created_at?: timestamptz_comparison_exp | null;
  description?: String_comparison_exp | null;
  extra?: String_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  read_at?: timestamptz_comparison_exp | null;
  reference_url?: String_comparison_exp | null;
  sourceMember?: member_bool_exp | null;
  source_member_id?: String_comparison_exp | null;
  targetMember?: member_bool_exp | null;
  target_member_id?: String_comparison_exp | null;
  type?: String_comparison_exp | null;
  updated_at?: timestamptz_comparison_exp | null;
}

/**
 * input type for inserting data into table "notification"
 */
export interface notification_insert_input {
  avatar?: string | null;
  created_at?: any | null;
  description?: string | null;
  extra?: string | null;
  id?: any | null;
  read_at?: any | null;
  reference_url?: string | null;
  sourceMember?: member_obj_rel_insert_input | null;
  source_member_id?: string | null;
  targetMember?: member_obj_rel_insert_input | null;
  target_member_id?: string | null;
  type?: string | null;
  updated_at?: any | null;
}

/**
 * on conflict condition type for table "notification"
 */
export interface notification_on_conflict {
  constraint: notification_constraint;
  update_columns: notification_update_column[];
  where?: notification_bool_exp | null;
}

/**
 * expression to compare columns of type numeric. All fields are combined with logical 'AND'.
 */
export interface numeric_comparison_exp {
  _eq?: any | null;
  _gt?: any | null;
  _gte?: any | null;
  _in?: any[] | null;
  _is_null?: boolean | null;
  _lt?: any | null;
  _lte?: any | null;
  _neq?: any | null;
  _nin?: any[] | null;
}

/**
 * input type for inserting array relation for remote table "order_discount"
 */
export interface order_discount_arr_rel_insert_input {
  data: order_discount_insert_input[];
  on_conflict?: order_discount_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "order_discount". All fields are combined with a logical 'AND'.
 */
export interface order_discount_bool_exp {
  _and?: (order_discount_bool_exp | null)[] | null;
  _not?: order_discount_bool_exp | null;
  _or?: (order_discount_bool_exp | null)[] | null;
  description?: String_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  name?: String_comparison_exp | null;
  options?: jsonb_comparison_exp | null;
  order_id?: String_comparison_exp | null;
  order_log?: order_log_bool_exp | null;
  price?: numeric_comparison_exp | null;
  target?: String_comparison_exp | null;
  type?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "order_discount"
 */
export interface order_discount_insert_input {
  description?: string | null;
  id?: any | null;
  name?: string | null;
  options?: any | null;
  order_id?: string | null;
  order_log?: order_log_obj_rel_insert_input | null;
  price?: any | null;
  target?: string | null;
  type?: string | null;
}

/**
 * on conflict condition type for table "order_discount"
 */
export interface order_discount_on_conflict {
  constraint: order_discount_constraint;
  update_columns: order_discount_update_column[];
  where?: order_discount_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "order_log"
 */
export interface order_log_arr_rel_insert_input {
  data: order_log_insert_input[];
  on_conflict?: order_log_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "order_log". All fields are combined with a logical 'AND'.
 */
export interface order_log_bool_exp {
  _and?: (order_log_bool_exp | null)[] | null;
  _not?: order_log_bool_exp | null;
  _or?: (order_log_bool_exp | null)[] | null;
  coupon?: coupon_bool_exp | null;
  created_at?: timestamptz_comparison_exp | null;
  deliver_message?: String_comparison_exp | null;
  delivered_at?: timestamptz_comparison_exp | null;
  discount_coupon_id?: uuid_comparison_exp | null;
  discount_point?: numeric_comparison_exp | null;
  discount_price?: numeric_comparison_exp | null;
  discount_type?: Int_comparison_exp | null;
  id?: String_comparison_exp | null;
  invoice?: jsonb_comparison_exp | null;
  member?: member_bool_exp | null;
  member_id?: String_comparison_exp | null;
  message?: String_comparison_exp | null;
  order_discounts?: order_discount_bool_exp | null;
  order_products?: order_product_bool_exp | null;
  payment_logs?: payment_log_bool_exp | null;
  payment_model?: jsonb_comparison_exp | null;
  shipping?: jsonb_comparison_exp | null;
  status?: String_comparison_exp | null;
  updated_at?: timestamptz_comparison_exp | null;
}

/**
 * input type for inserting data into table "order_log"
 */
export interface order_log_insert_input {
  coupon?: coupon_obj_rel_insert_input | null;
  created_at?: any | null;
  deliver_message?: string | null;
  delivered_at?: any | null;
  discount_coupon_id?: any | null;
  discount_point?: any | null;
  discount_price?: any | null;
  discount_type?: number | null;
  id?: string | null;
  invoice?: any | null;
  member?: member_obj_rel_insert_input | null;
  member_id?: string | null;
  message?: string | null;
  order_discounts?: order_discount_arr_rel_insert_input | null;
  order_products?: order_product_arr_rel_insert_input | null;
  payment_logs?: payment_log_arr_rel_insert_input | null;
  payment_model?: any | null;
  shipping?: any | null;
  status?: string | null;
  updated_at?: any | null;
}

/**
 * input type for inserting object relation for remote table "order_log"
 */
export interface order_log_obj_rel_insert_input {
  data: order_log_insert_input;
  on_conflict?: order_log_on_conflict | null;
}

/**
 * on conflict condition type for table "order_log"
 */
export interface order_log_on_conflict {
  constraint: order_log_constraint;
  update_columns: order_log_update_column[];
  where?: order_log_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "order_product"
 */
export interface order_product_arr_rel_insert_input {
  data: order_product_insert_input[];
  on_conflict?: order_product_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "order_product". All fields are combined with a logical 'AND'.
 */
export interface order_product_bool_exp {
  _and?: (order_product_bool_exp | null)[] | null;
  _not?: order_product_bool_exp | null;
  _or?: (order_product_bool_exp | null)[] | null;
  accumulated_errors?: Int_comparison_exp | null;
  activity_attendances?: activity_attendance_bool_exp | null;
  auto_renewed?: Boolean_comparison_exp | null;
  created_at?: timestamptz_comparison_exp | null;
  currency?: currency_bool_exp | null;
  currency_id?: String_comparison_exp | null;
  deliverables?: jsonb_comparison_exp | null;
  description?: String_comparison_exp | null;
  ended_at?: timestamptz_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  name?: String_comparison_exp | null;
  options?: jsonb_comparison_exp | null;
  order_id?: String_comparison_exp | null;
  order_log?: order_log_bool_exp | null;
  price?: numeric_comparison_exp | null;
  product?: product_bool_exp | null;
  product_id?: String_comparison_exp | null;
  started_at?: timestamptz_comparison_exp | null;
}

/**
 * input type for inserting data into table "order_product"
 */
export interface order_product_insert_input {
  accumulated_errors?: number | null;
  activity_attendances?: activity_attendance_arr_rel_insert_input | null;
  auto_renewed?: boolean | null;
  created_at?: any | null;
  currency?: currency_obj_rel_insert_input | null;
  currency_id?: string | null;
  deliverables?: any | null;
  description?: string | null;
  ended_at?: any | null;
  id?: any | null;
  name?: string | null;
  options?: any | null;
  order_id?: string | null;
  order_log?: order_log_obj_rel_insert_input | null;
  price?: any | null;
  product?: product_obj_rel_insert_input | null;
  product_id?: string | null;
  started_at?: any | null;
}

/**
 * input type for inserting object relation for remote table "order_product"
 */
export interface order_product_obj_rel_insert_input {
  data: order_product_insert_input;
  on_conflict?: order_product_on_conflict | null;
}

/**
 * on conflict condition type for table "order_product"
 */
export interface order_product_on_conflict {
  constraint: order_product_constraint;
  update_columns: order_product_update_column[];
  where?: order_product_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "package"
 */
export interface package_arr_rel_insert_input {
  data: package_insert_input[];
  on_conflict?: package_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "package". All fields are combined with a logical 'AND'.
 */
export interface package_bool_exp {
  _and?: (package_bool_exp | null)[] | null;
  _not?: package_bool_exp | null;
  _or?: (package_bool_exp | null)[] | null;
  app?: app_bool_exp | null;
  app_id?: String_comparison_exp | null;
  elements?: jsonb_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  package_sections?: package_section_bool_exp | null;
  title?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "package"
 */
export interface package_insert_input {
  app?: app_obj_rel_insert_input | null;
  app_id?: string | null;
  elements?: any | null;
  id?: any | null;
  package_sections?: package_section_arr_rel_insert_input | null;
  title?: string | null;
}

/**
 * input type for inserting array relation for remote table "package_item"
 */
export interface package_item_arr_rel_insert_input {
  data: package_item_insert_input[];
  on_conflict?: package_item_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "package_item". All fields are combined with a logical 'AND'.
 */
export interface package_item_bool_exp {
  _and?: (package_item_bool_exp | null)[] | null;
  _not?: package_item_bool_exp | null;
  _or?: (package_item_bool_exp | null)[] | null;
  activity?: activity_bool_exp | null;
  activity_id?: uuid_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  merchandise_id?: uuid_comparison_exp | null;
  package_item_group?: package_item_group_bool_exp | null;
  package_item_group_id?: uuid_comparison_exp | null;
  program?: program_bool_exp | null;
  program_id?: uuid_comparison_exp | null;
}

/**
 * input type for inserting array relation for remote table "package_item_group"
 */
export interface package_item_group_arr_rel_insert_input {
  data: package_item_group_insert_input[];
  on_conflict?: package_item_group_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "package_item_group". All fields are combined with a logical 'AND'.
 */
export interface package_item_group_bool_exp {
  _and?: (package_item_group_bool_exp | null)[] | null;
  _not?: package_item_group_bool_exp | null;
  _or?: (package_item_group_bool_exp | null)[] | null;
  id?: uuid_comparison_exp | null;
  package_items?: package_item_bool_exp | null;
  package_section?: package_section_bool_exp | null;
  package_section_id?: uuid_comparison_exp | null;
  subtitle?: String_comparison_exp | null;
  title?: String_comparison_exp | null;
  type?: String_comparison_exp | null;
  with_filter?: Boolean_comparison_exp | null;
}

/**
 * input type for inserting data into table "package_item_group"
 */
export interface package_item_group_insert_input {
  id?: any | null;
  package_items?: package_item_arr_rel_insert_input | null;
  package_section?: package_section_obj_rel_insert_input | null;
  package_section_id?: any | null;
  subtitle?: string | null;
  title?: string | null;
  type?: string | null;
  with_filter?: boolean | null;
}

/**
 * input type for inserting object relation for remote table "package_item_group"
 */
export interface package_item_group_obj_rel_insert_input {
  data: package_item_group_insert_input;
  on_conflict?: package_item_group_on_conflict | null;
}

/**
 * on conflict condition type for table "package_item_group"
 */
export interface package_item_group_on_conflict {
  constraint: package_item_group_constraint;
  update_columns: package_item_group_update_column[];
  where?: package_item_group_bool_exp | null;
}

/**
 * input type for inserting data into table "package_item"
 */
export interface package_item_insert_input {
  activity?: activity_obj_rel_insert_input | null;
  activity_id?: any | null;
  id?: any | null;
  merchandise_id?: any | null;
  package_item_group?: package_item_group_obj_rel_insert_input | null;
  package_item_group_id?: any | null;
  program?: program_obj_rel_insert_input | null;
  program_id?: any | null;
}

/**
 * on conflict condition type for table "package_item"
 */
export interface package_item_on_conflict {
  constraint: package_item_constraint;
  update_columns: package_item_update_column[];
  where?: package_item_bool_exp | null;
}

/**
 * input type for inserting object relation for remote table "package"
 */
export interface package_obj_rel_insert_input {
  data: package_insert_input;
  on_conflict?: package_on_conflict | null;
}

/**
 * on conflict condition type for table "package"
 */
export interface package_on_conflict {
  constraint: package_constraint;
  update_columns: package_update_column[];
  where?: package_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "package_section"
 */
export interface package_section_arr_rel_insert_input {
  data: package_section_insert_input[];
  on_conflict?: package_section_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "package_section". All fields are combined with a logical 'AND'.
 */
export interface package_section_bool_exp {
  _and?: (package_section_bool_exp | null)[] | null;
  _not?: package_section_bool_exp | null;
  _or?: (package_section_bool_exp | null)[] | null;
  block?: Boolean_comparison_exp | null;
  description?: String_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  package?: package_bool_exp | null;
  package_id?: uuid_comparison_exp | null;
  package_item_groups?: package_item_group_bool_exp | null;
  position?: Int_comparison_exp | null;
  subtitle?: String_comparison_exp | null;
  title?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "package_section"
 */
export interface package_section_insert_input {
  block?: boolean | null;
  description?: string | null;
  id?: any | null;
  package?: package_obj_rel_insert_input | null;
  package_id?: any | null;
  package_item_groups?: package_item_group_arr_rel_insert_input | null;
  position?: number | null;
  subtitle?: string | null;
  title?: string | null;
}

/**
 * input type for inserting object relation for remote table "package_section"
 */
export interface package_section_obj_rel_insert_input {
  data: package_section_insert_input;
  on_conflict?: package_section_on_conflict | null;
}

/**
 * on conflict condition type for table "package_section"
 */
export interface package_section_on_conflict {
  constraint: package_section_constraint;
  update_columns: package_section_update_column[];
  where?: package_section_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "payment_log"
 */
export interface payment_log_arr_rel_insert_input {
  data: payment_log_insert_input[];
  on_conflict?: payment_log_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "payment_log". All fields are combined with a logical 'AND'.
 */
export interface payment_log_bool_exp {
  _and?: (payment_log_bool_exp | null)[] | null;
  _not?: payment_log_bool_exp | null;
  _or?: (payment_log_bool_exp | null)[] | null;
  created_at?: timestamptz_comparison_exp | null;
  gateway?: String_comparison_exp | null;
  no?: numeric_comparison_exp | null;
  options?: jsonb_comparison_exp | null;
  order_id?: String_comparison_exp | null;
  order_log?: order_log_bool_exp | null;
  paid_at?: timestamptz_comparison_exp | null;
  payment_due_at?: timestamptz_comparison_exp | null;
  price?: numeric_comparison_exp | null;
  status?: String_comparison_exp | null;
  updated_at?: timestamptz_comparison_exp | null;
}

/**
 * input type for inserting data into table "payment_log"
 */
export interface payment_log_insert_input {
  created_at?: any | null;
  gateway?: string | null;
  no?: any | null;
  options?: any | null;
  order_id?: string | null;
  order_log?: order_log_obj_rel_insert_input | null;
  paid_at?: any | null;
  payment_due_at?: any | null;
  price?: any | null;
  status?: string | null;
  updated_at?: any | null;
}

/**
 * on conflict condition type for table "payment_log"
 */
export interface payment_log_on_conflict {
  constraint: payment_log_constraint;
  update_columns: payment_log_update_column[];
  where?: payment_log_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "playlist"
 */
export interface playlist_arr_rel_insert_input {
  data: playlist_insert_input[];
  on_conflict?: playlist_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "playlist". All fields are combined with a logical 'AND'.
 */
export interface playlist_bool_exp {
  _and?: (playlist_bool_exp | null)[] | null;
  _not?: playlist_bool_exp | null;
  _or?: (playlist_bool_exp | null)[] | null;
  created_at?: timestamptz_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  member?: member_bool_exp | null;
  member_id?: String_comparison_exp | null;
  playlist_podcast_programs?: playlist_podcast_program_bool_exp | null;
  position?: Int_comparison_exp | null;
  title?: String_comparison_exp | null;
  updated_at?: timestamptz_comparison_exp | null;
}

/**
 * input type for inserting data into table "playlist"
 */
export interface playlist_insert_input {
  created_at?: any | null;
  id?: any | null;
  member?: member_obj_rel_insert_input | null;
  member_id?: string | null;
  playlist_podcast_programs?: playlist_podcast_program_arr_rel_insert_input | null;
  position?: number | null;
  title?: string | null;
  updated_at?: any | null;
}

/**
 * input type for inserting object relation for remote table "playlist"
 */
export interface playlist_obj_rel_insert_input {
  data: playlist_insert_input;
  on_conflict?: playlist_on_conflict | null;
}

/**
 * on conflict condition type for table "playlist"
 */
export interface playlist_on_conflict {
  constraint: playlist_constraint;
  update_columns: playlist_update_column[];
  where?: playlist_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "playlist_podcast_program"
 */
export interface playlist_podcast_program_arr_rel_insert_input {
  data: playlist_podcast_program_insert_input[];
  on_conflict?: playlist_podcast_program_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "playlist_podcast_program". All fields are combined with a logical 'AND'.
 */
export interface playlist_podcast_program_bool_exp {
  _and?: (playlist_podcast_program_bool_exp | null)[] | null;
  _not?: playlist_podcast_program_bool_exp | null;
  _or?: (playlist_podcast_program_bool_exp | null)[] | null;
  created_at?: timestamptz_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  playlist?: playlist_bool_exp | null;
  playlist_id?: uuid_comparison_exp | null;
  podcast_program?: podcast_program_bool_exp | null;
  podcast_program_id?: uuid_comparison_exp | null;
  position?: Int_comparison_exp | null;
  updated_at?: timestamptz_comparison_exp | null;
}

/**
 * input type for inserting data into table "playlist_podcast_program"
 */
export interface playlist_podcast_program_insert_input {
  created_at?: any | null;
  id?: any | null;
  playlist?: playlist_obj_rel_insert_input | null;
  playlist_id?: any | null;
  podcast_program?: podcast_program_obj_rel_insert_input | null;
  podcast_program_id?: any | null;
  position?: number | null;
  updated_at?: any | null;
}

/**
 * on conflict condition type for table "playlist_podcast_program"
 */
export interface playlist_podcast_program_on_conflict {
  constraint: playlist_podcast_program_constraint;
  update_columns: playlist_podcast_program_update_column[];
  where?: playlist_podcast_program_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "podcast"
 */
export interface podcast_arr_rel_insert_input {
  data: podcast_insert_input[];
  on_conflict?: podcast_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "podcast". All fields are combined with a logical 'AND'.
 */
export interface podcast_bool_exp {
  _and?: (podcast_bool_exp | null)[] | null;
  _not?: podcast_bool_exp | null;
  _or?: (podcast_bool_exp | null)[] | null;
  app?: app_bool_exp | null;
  app_id?: String_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  instructor_id?: String_comparison_exp | null;
  member?: member_bool_exp | null;
  podcast_plans?: podcast_plan_bool_exp | null;
  podcast_programs?: podcast_program_bool_exp | null;
}

/**
 * input type for inserting data into table "podcast"
 */
export interface podcast_insert_input {
  app?: app_obj_rel_insert_input | null;
  app_id?: string | null;
  id?: any | null;
  instructor_id?: string | null;
  member?: member_obj_rel_insert_input | null;
  podcast_plans?: podcast_plan_arr_rel_insert_input | null;
  podcast_programs?: podcast_program_arr_rel_insert_input | null;
}

/**
 * input type for inserting object relation for remote table "podcast"
 */
export interface podcast_obj_rel_insert_input {
  data: podcast_insert_input;
  on_conflict?: podcast_on_conflict | null;
}

/**
 * on conflict condition type for table "podcast"
 */
export interface podcast_on_conflict {
  constraint: podcast_constraint;
  update_columns: podcast_update_column[];
  where?: podcast_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "podcast_plan"
 */
export interface podcast_plan_arr_rel_insert_input {
  data: podcast_plan_insert_input[];
  on_conflict?: podcast_plan_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "podcast_plan". All fields are combined with a logical 'AND'.
 */
export interface podcast_plan_bool_exp {
  _and?: (podcast_plan_bool_exp | null)[] | null;
  _not?: podcast_plan_bool_exp | null;
  _or?: (podcast_plan_bool_exp | null)[] | null;
  created_at?: timestamptz_comparison_exp | null;
  creator?: member_public_bool_exp | null;
  creator_id?: String_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  is_subscription?: Boolean_comparison_exp | null;
  list_price?: numeric_comparison_exp | null;
  period_amount?: numeric_comparison_exp | null;
  period_type?: String_comparison_exp | null;
  podcast?: podcast_bool_exp | null;
  podcast_id?: uuid_comparison_exp | null;
  podcast_plan_enrollments?: podcast_plan_enrollment_bool_exp | null;
  position?: Int_comparison_exp | null;
  published_at?: timestamptz_comparison_exp | null;
  sale_price?: numeric_comparison_exp | null;
  sold_at?: timestamptz_comparison_exp | null;
  title?: String_comparison_exp | null;
  updated_at?: timestamptz_comparison_exp | null;
}

/**
 * Boolean expression to filter rows from the table "podcast_plan_enrollment". All fields are combined with a logical 'AND'.
 */
export interface podcast_plan_enrollment_bool_exp {
  _and?: (podcast_plan_enrollment_bool_exp | null)[] | null;
  _not?: podcast_plan_enrollment_bool_exp | null;
  _or?: (podcast_plan_enrollment_bool_exp | null)[] | null;
  member_id?: String_comparison_exp | null;
  podcast_plan?: podcast_plan_bool_exp | null;
  podcast_plan_id?: uuid_comparison_exp | null;
}

/**
 * input type for inserting data into table "podcast_plan"
 */
export interface podcast_plan_insert_input {
  created_at?: any | null;
  creator_id?: string | null;
  id?: any | null;
  is_subscription?: boolean | null;
  list_price?: any | null;
  period_amount?: any | null;
  period_type?: string | null;
  podcast?: podcast_obj_rel_insert_input | null;
  podcast_id?: any | null;
  position?: number | null;
  published_at?: any | null;
  sale_price?: any | null;
  sold_at?: any | null;
  title?: string | null;
  updated_at?: any | null;
}

/**
 * on conflict condition type for table "podcast_plan"
 */
export interface podcast_plan_on_conflict {
  constraint: podcast_plan_constraint;
  update_columns: podcast_plan_update_column[];
  where?: podcast_plan_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "podcast_program"
 */
export interface podcast_program_arr_rel_insert_input {
  data: podcast_program_insert_input[];
  on_conflict?: podcast_program_on_conflict | null;
}

/**
 * input type for inserting array relation for remote table "podcast_program_body"
 */
export interface podcast_program_body_arr_rel_insert_input {
  data: podcast_program_body_insert_input[];
  on_conflict?: podcast_program_body_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "podcast_program_body". All fields are combined with a logical 'AND'.
 */
export interface podcast_program_body_bool_exp {
  _and?: (podcast_program_body_bool_exp | null)[] | null;
  _not?: podcast_program_body_bool_exp | null;
  _or?: (podcast_program_body_bool_exp | null)[] | null;
  description?: String_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  podcast_program?: podcast_program_bool_exp | null;
  podcast_program_id?: uuid_comparison_exp | null;
}

/**
 * input type for inserting data into table "podcast_program_body"
 */
export interface podcast_program_body_insert_input {
  description?: string | null;
  id?: any | null;
  podcast_program?: podcast_program_obj_rel_insert_input | null;
  podcast_program_id?: any | null;
}

/**
 * input type for inserting object relation for remote table "podcast_program_body"
 */
export interface podcast_program_body_obj_rel_insert_input {
  data: podcast_program_body_insert_input;
  on_conflict?: podcast_program_body_on_conflict | null;
}

/**
 * on conflict condition type for table "podcast_program_body"
 */
export interface podcast_program_body_on_conflict {
  constraint: podcast_program_body_constraint;
  update_columns: podcast_program_body_update_column[];
  where?: podcast_program_body_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "podcast_program". All fields are combined with a logical 'AND'.
 */
export interface podcast_program_bool_exp {
  _and?: (podcast_program_bool_exp | null)[] | null;
  _not?: podcast_program_bool_exp | null;
  _or?: (podcast_program_bool_exp | null)[] | null;
  abstract?: String_comparison_exp | null;
  content_type?: String_comparison_exp | null;
  cover_url?: String_comparison_exp | null;
  creator?: member_public_bool_exp | null;
  creator_id?: String_comparison_exp | null;
  duration?: numeric_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  list_price?: numeric_comparison_exp | null;
  playlist_podcast_programs?: playlist_podcast_program_bool_exp | null;
  podcast?: podcast_bool_exp | null;
  podcast_id?: uuid_comparison_exp | null;
  podcast_program_bodies?: podcast_program_body_bool_exp | null;
  podcast_program_body?: podcast_program_body_bool_exp | null;
  podcast_program_categories?: podcast_program_category_bool_exp | null;
  podcast_program_enrollments?: podcast_program_enrollment_bool_exp | null;
  podcast_program_roles?: podcast_program_role_bool_exp | null;
  podcast_program_tags?: podcast_program_tag_bool_exp | null;
  published_at?: timestamptz_comparison_exp | null;
  sale_price?: numeric_comparison_exp | null;
  sold_at?: timestamptz_comparison_exp | null;
  support_locales?: jsonb_comparison_exp | null;
  title?: String_comparison_exp | null;
  updated_at?: timestamptz_comparison_exp | null;
}

/**
 * input type for inserting array relation for remote table "podcast_program_category"
 */
export interface podcast_program_category_arr_rel_insert_input {
  data: podcast_program_category_insert_input[];
  on_conflict?: podcast_program_category_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "podcast_program_category". All fields are combined with a logical 'AND'.
 */
export interface podcast_program_category_bool_exp {
  _and?: (podcast_program_category_bool_exp | null)[] | null;
  _not?: podcast_program_category_bool_exp | null;
  _or?: (podcast_program_category_bool_exp | null)[] | null;
  category?: category_bool_exp | null;
  category_id?: String_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  podcast_program?: podcast_program_bool_exp | null;
  podcast_program_id?: uuid_comparison_exp | null;
  position?: Int_comparison_exp | null;
}

/**
 * input type for inserting data into table "podcast_program_category"
 */
export interface podcast_program_category_insert_input {
  category?: category_obj_rel_insert_input | null;
  category_id?: string | null;
  id?: any | null;
  podcast_program?: podcast_program_obj_rel_insert_input | null;
  podcast_program_id?: any | null;
  position?: number | null;
}

/**
 * on conflict condition type for table "podcast_program_category"
 */
export interface podcast_program_category_on_conflict {
  constraint: podcast_program_category_constraint;
  update_columns: podcast_program_category_update_column[];
  where?: podcast_program_category_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "podcast_program_enrollment". All fields are combined with a logical 'AND'.
 */
export interface podcast_program_enrollment_bool_exp {
  _and?: (podcast_program_enrollment_bool_exp | null)[] | null;
  _not?: podcast_program_enrollment_bool_exp | null;
  _or?: (podcast_program_enrollment_bool_exp | null)[] | null;
  member_id?: String_comparison_exp | null;
  podcast_program?: podcast_program_bool_exp | null;
  podcast_program_id?: uuid_comparison_exp | null;
}

/**
 * input type for inserting data into table "podcast_program"
 */
export interface podcast_program_insert_input {
  abstract?: string | null;
  content_type?: string | null;
  cover_url?: string | null;
  creator_id?: string | null;
  duration?: any | null;
  id?: any | null;
  list_price?: any | null;
  playlist_podcast_programs?: playlist_podcast_program_arr_rel_insert_input | null;
  podcast?: podcast_obj_rel_insert_input | null;
  podcast_id?: any | null;
  podcast_program_bodies?: podcast_program_body_arr_rel_insert_input | null;
  podcast_program_body?: podcast_program_body_obj_rel_insert_input | null;
  podcast_program_categories?: podcast_program_category_arr_rel_insert_input | null;
  podcast_program_roles?: podcast_program_role_arr_rel_insert_input | null;
  podcast_program_tags?: podcast_program_tag_arr_rel_insert_input | null;
  published_at?: any | null;
  sale_price?: any | null;
  sold_at?: any | null;
  support_locales?: any | null;
  title?: string | null;
  updated_at?: any | null;
}

/**
 * input type for inserting object relation for remote table "podcast_program"
 */
export interface podcast_program_obj_rel_insert_input {
  data: podcast_program_insert_input;
  on_conflict?: podcast_program_on_conflict | null;
}

/**
 * on conflict condition type for table "podcast_program"
 */
export interface podcast_program_on_conflict {
  constraint: podcast_program_constraint;
  update_columns: podcast_program_update_column[];
  where?: podcast_program_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "podcast_program_role"
 */
export interface podcast_program_role_arr_rel_insert_input {
  data: podcast_program_role_insert_input[];
  on_conflict?: podcast_program_role_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "podcast_program_role". All fields are combined with a logical 'AND'.
 */
export interface podcast_program_role_bool_exp {
  _and?: (podcast_program_role_bool_exp | null)[] | null;
  _not?: podcast_program_role_bool_exp | null;
  _or?: (podcast_program_role_bool_exp | null)[] | null;
  id?: uuid_comparison_exp | null;
  member?: member_public_bool_exp | null;
  member_id?: String_comparison_exp | null;
  name?: String_comparison_exp | null;
  podcast_program?: podcast_program_bool_exp | null;
  podcast_program_id?: uuid_comparison_exp | null;
}

/**
 * input type for inserting data into table "podcast_program_role"
 */
export interface podcast_program_role_insert_input {
  id?: any | null;
  member_id?: string | null;
  name?: string | null;
  podcast_program?: podcast_program_obj_rel_insert_input | null;
  podcast_program_id?: any | null;
}

/**
 * on conflict condition type for table "podcast_program_role"
 */
export interface podcast_program_role_on_conflict {
  constraint: podcast_program_role_constraint;
  update_columns: podcast_program_role_update_column[];
  where?: podcast_program_role_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "podcast_program_tag"
 */
export interface podcast_program_tag_arr_rel_insert_input {
  data: podcast_program_tag_insert_input[];
  on_conflict?: podcast_program_tag_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "podcast_program_tag". All fields are combined with a logical 'AND'.
 */
export interface podcast_program_tag_bool_exp {
  _and?: (podcast_program_tag_bool_exp | null)[] | null;
  _not?: podcast_program_tag_bool_exp | null;
  _or?: (podcast_program_tag_bool_exp | null)[] | null;
  id?: uuid_comparison_exp | null;
  podcast_program?: podcast_program_bool_exp | null;
  podcast_program_id?: uuid_comparison_exp | null;
  position?: Int_comparison_exp | null;
  tag?: tag_bool_exp | null;
  tag_name?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "podcast_program_tag"
 */
export interface podcast_program_tag_insert_input {
  id?: any | null;
  podcast_program?: podcast_program_obj_rel_insert_input | null;
  podcast_program_id?: any | null;
  position?: number | null;
  tag?: tag_obj_rel_insert_input | null;
  tag_name?: string | null;
}

/**
 * on conflict condition type for table "podcast_program_tag"
 */
export interface podcast_program_tag_on_conflict {
  constraint: podcast_program_tag_constraint;
  update_columns: podcast_program_tag_update_column[];
  where?: podcast_program_tag_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "point_log"
 */
export interface point_log_arr_rel_insert_input {
  data: point_log_insert_input[];
  on_conflict?: point_log_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "point_log". All fields are combined with a logical 'AND'.
 */
export interface point_log_bool_exp {
  _and?: (point_log_bool_exp | null)[] | null;
  _not?: point_log_bool_exp | null;
  _or?: (point_log_bool_exp | null)[] | null;
  created_at?: timestamptz_comparison_exp | null;
  description?: String_comparison_exp | null;
  ended_at?: timestamptz_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  member?: member_bool_exp | null;
  member_id?: String_comparison_exp | null;
  note?: String_comparison_exp | null;
  point?: numeric_comparison_exp | null;
  started_at?: timestamptz_comparison_exp | null;
}

/**
 * input type for inserting data into table "point_log"
 */
export interface point_log_insert_input {
  created_at?: any | null;
  description?: string | null;
  ended_at?: any | null;
  id?: any | null;
  member?: member_obj_rel_insert_input | null;
  member_id?: string | null;
  note?: string | null;
  point?: any | null;
  started_at?: any | null;
}

/**
 * on conflict condition type for table "point_log"
 */
export interface point_log_on_conflict {
  constraint: point_log_constraint;
  update_columns: point_log_update_column[];
  where?: point_log_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "point_status". All fields are combined with a logical 'AND'.
 */
export interface point_status_bool_exp {
  _and?: (point_status_bool_exp | null)[] | null;
  _not?: point_status_bool_exp | null;
  _or?: (point_status_bool_exp | null)[] | null;
  member?: member_bool_exp | null;
  member_id?: String_comparison_exp | null;
  points?: numeric_comparison_exp | null;
}

/**
 * input type for inserting array relation for remote table "post"
 */
export interface post_arr_rel_insert_input {
  data: post_insert_input[];
  on_conflict?: post_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "post". All fields are combined with a logical 'AND'.
 */
export interface post_bool_exp {
  _and?: (post_bool_exp | null)[] | null;
  _not?: post_bool_exp | null;
  _or?: (post_bool_exp | null)[] | null;
  abstract?: String_comparison_exp | null;
  app?: app_bool_exp | null;
  app_id?: String_comparison_exp | null;
  code_name?: String_comparison_exp | null;
  cover_url?: String_comparison_exp | null;
  created_at?: timestamptz_comparison_exp | null;
  description?: String_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  is_deleted?: Boolean_comparison_exp | null;
  position?: Int_comparison_exp | null;
  post_categories?: post_category_bool_exp | null;
  post_merchandises?: post_merchandise_bool_exp | null;
  post_roles?: post_role_bool_exp | null;
  post_tags?: post_tag_bool_exp | null;
  published_at?: timestamptz_comparison_exp | null;
  title?: String_comparison_exp | null;
  updated_at?: timestamptz_comparison_exp | null;
  video_url?: String_comparison_exp | null;
  views?: Int_comparison_exp | null;
}

/**
 * input type for inserting array relation for remote table "post_category"
 */
export interface post_category_arr_rel_insert_input {
  data: post_category_insert_input[];
  on_conflict?: post_category_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "post_category". All fields are combined with a logical 'AND'.
 */
export interface post_category_bool_exp {
  _and?: (post_category_bool_exp | null)[] | null;
  _not?: post_category_bool_exp | null;
  _or?: (post_category_bool_exp | null)[] | null;
  category?: category_bool_exp | null;
  category_id?: String_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  position?: Int_comparison_exp | null;
  post?: post_bool_exp | null;
  post_id?: uuid_comparison_exp | null;
}

/**
 * input type for inserting data into table "post_category"
 */
export interface post_category_insert_input {
  category?: category_obj_rel_insert_input | null;
  category_id?: string | null;
  id?: any | null;
  position?: number | null;
  post?: post_obj_rel_insert_input | null;
  post_id?: any | null;
}

/**
 * on conflict condition type for table "post_category"
 */
export interface post_category_on_conflict {
  constraint: post_category_constraint;
  update_columns: post_category_update_column[];
  where?: post_category_bool_exp | null;
}

/**
 * input type for inserting data into table "post"
 */
export interface post_insert_input {
  abstract?: string | null;
  app?: app_obj_rel_insert_input | null;
  app_id?: string | null;
  code_name?: string | null;
  cover_url?: string | null;
  created_at?: any | null;
  description?: string | null;
  id?: any | null;
  is_deleted?: boolean | null;
  position?: number | null;
  post_categories?: post_category_arr_rel_insert_input | null;
  post_merchandises?: post_merchandise_arr_rel_insert_input | null;
  post_roles?: post_role_arr_rel_insert_input | null;
  post_tags?: post_tag_arr_rel_insert_input | null;
  published_at?: any | null;
  title?: string | null;
  updated_at?: any | null;
  video_url?: string | null;
  views?: number | null;
}

/**
 * input type for inserting array relation for remote table "post_merchandise"
 */
export interface post_merchandise_arr_rel_insert_input {
  data: post_merchandise_insert_input[];
  on_conflict?: post_merchandise_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "post_merchandise". All fields are combined with a logical 'AND'.
 */
export interface post_merchandise_bool_exp {
  _and?: (post_merchandise_bool_exp | null)[] | null;
  _not?: post_merchandise_bool_exp | null;
  _or?: (post_merchandise_bool_exp | null)[] | null;
  id?: uuid_comparison_exp | null;
  merchandise?: merchandise_bool_exp | null;
  merchandise_id?: uuid_comparison_exp | null;
  position?: Int_comparison_exp | null;
  post?: post_bool_exp | null;
  post_id?: uuid_comparison_exp | null;
}

/**
 * input type for inserting data into table "post_merchandise"
 */
export interface post_merchandise_insert_input {
  id?: any | null;
  merchandise?: merchandise_obj_rel_insert_input | null;
  merchandise_id?: any | null;
  position?: number | null;
  post?: post_obj_rel_insert_input | null;
  post_id?: any | null;
}

/**
 * on conflict condition type for table "post_merchandise"
 */
export interface post_merchandise_on_conflict {
  constraint: post_merchandise_constraint;
  update_columns: post_merchandise_update_column[];
  where?: post_merchandise_bool_exp | null;
}

/**
 * input type for inserting object relation for remote table "post"
 */
export interface post_obj_rel_insert_input {
  data: post_insert_input;
  on_conflict?: post_on_conflict | null;
}

/**
 * on conflict condition type for table "post"
 */
export interface post_on_conflict {
  constraint: post_constraint;
  update_columns: post_update_column[];
  where?: post_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "post_role"
 */
export interface post_role_arr_rel_insert_input {
  data: post_role_insert_input[];
  on_conflict?: post_role_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "post_role". All fields are combined with a logical 'AND'.
 */
export interface post_role_bool_exp {
  _and?: (post_role_bool_exp | null)[] | null;
  _not?: post_role_bool_exp | null;
  _or?: (post_role_bool_exp | null)[] | null;
  id?: uuid_comparison_exp | null;
  member?: member_public_bool_exp | null;
  member_id?: String_comparison_exp | null;
  name?: String_comparison_exp | null;
  position?: Int_comparison_exp | null;
  post?: post_bool_exp | null;
  post_id?: uuid_comparison_exp | null;
}

/**
 * input type for inserting data into table "post_role"
 */
export interface post_role_insert_input {
  id?: any | null;
  member_id?: string | null;
  name?: string | null;
  position?: number | null;
  post?: post_obj_rel_insert_input | null;
  post_id?: any | null;
}

/**
 * on conflict condition type for table "post_role"
 */
export interface post_role_on_conflict {
  constraint: post_role_constraint;
  update_columns: post_role_update_column[];
  where?: post_role_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "post_tag"
 */
export interface post_tag_arr_rel_insert_input {
  data: post_tag_insert_input[];
  on_conflict?: post_tag_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "post_tag". All fields are combined with a logical 'AND'.
 */
export interface post_tag_bool_exp {
  _and?: (post_tag_bool_exp | null)[] | null;
  _not?: post_tag_bool_exp | null;
  _or?: (post_tag_bool_exp | null)[] | null;
  id?: uuid_comparison_exp | null;
  position?: Int_comparison_exp | null;
  post?: post_bool_exp | null;
  post_id?: uuid_comparison_exp | null;
  tag?: tag_bool_exp | null;
  tag_name?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "post_tag"
 */
export interface post_tag_insert_input {
  id?: any | null;
  position?: number | null;
  post?: post_obj_rel_insert_input | null;
  post_id?: any | null;
  tag?: tag_obj_rel_insert_input | null;
  tag_name?: string | null;
}

/**
 * on conflict condition type for table "post_tag"
 */
export interface post_tag_on_conflict {
  constraint: post_tag_constraint;
  update_columns: post_tag_update_column[];
  where?: post_tag_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "product". All fields are combined with a logical 'AND'.
 */
export interface product_bool_exp {
  _and?: (product_bool_exp | null)[] | null;
  _not?: product_bool_exp | null;
  _or?: (product_bool_exp | null)[] | null;
  card_discounts?: card_discount_bool_exp | null;
  cart_products?: cart_product_bool_exp | null;
  coupon_plan_products?: coupon_plan_product_bool_exp | null;
  id?: String_comparison_exp | null;
  order_products?: order_product_bool_exp | null;
  product_enrollments?: product_enrollment_bool_exp | null;
  product_inventories?: product_inventory_bool_exp | null;
  product_inventory_status?: product_inventory_status_bool_exp | null;
  product_owner?: product_owner_bool_exp | null;
  target?: String_comparison_exp | null;
  type?: String_comparison_exp | null;
  voucher_plan_products?: voucher_plan_product_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "product_enrollment". All fields are combined with a logical 'AND'.
 */
export interface product_enrollment_bool_exp {
  _and?: (product_enrollment_bool_exp | null)[] | null;
  _not?: product_enrollment_bool_exp | null;
  _or?: (product_enrollment_bool_exp | null)[] | null;
  is_physical?: Boolean_comparison_exp | null;
  member?: member_public_bool_exp | null;
  member_id?: String_comparison_exp | null;
  product?: product_bool_exp | null;
  product_id?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "product"
 */
export interface product_insert_input {
  card_discounts?: card_discount_arr_rel_insert_input | null;
  cart_products?: cart_product_arr_rel_insert_input | null;
  coupon_plan_products?: coupon_plan_product_arr_rel_insert_input | null;
  id?: string | null;
  order_products?: order_product_arr_rel_insert_input | null;
  product_inventories?: product_inventory_arr_rel_insert_input | null;
  target?: string | null;
  type?: string | null;
  voucher_plan_products?: voucher_plan_product_arr_rel_insert_input | null;
}

/**
 * input type for inserting array relation for remote table "product_inventory"
 */
export interface product_inventory_arr_rel_insert_input {
  data: product_inventory_insert_input[];
  on_conflict?: product_inventory_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "product_inventory". All fields are combined with a logical 'AND'.
 */
export interface product_inventory_bool_exp {
  _and?: (product_inventory_bool_exp | null)[] | null;
  _not?: product_inventory_bool_exp | null;
  _or?: (product_inventory_bool_exp | null)[] | null;
  comment?: String_comparison_exp | null;
  created_at?: timestamptz_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  product?: product_bool_exp | null;
  product_id?: String_comparison_exp | null;
  quantity?: Int_comparison_exp | null;
  specification?: String_comparison_exp | null;
  status?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "product_inventory"
 */
export interface product_inventory_insert_input {
  comment?: string | null;
  created_at?: any | null;
  id?: any | null;
  product?: product_obj_rel_insert_input | null;
  product_id?: string | null;
  quantity?: number | null;
  specification?: string | null;
  status?: string | null;
}

/**
 * on conflict condition type for table "product_inventory"
 */
export interface product_inventory_on_conflict {
  constraint: product_inventory_constraint;
  update_columns: product_inventory_update_column[];
  where?: product_inventory_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "product_inventory_status". All fields are combined with a logical 'AND'.
 */
export interface product_inventory_status_bool_exp {
  _and?: (product_inventory_status_bool_exp | null)[] | null;
  _not?: product_inventory_status_bool_exp | null;
  _or?: (product_inventory_status_bool_exp | null)[] | null;
  buyable_quantity?: bigint_comparison_exp | null;
  delivered_quantity?: bigint_comparison_exp | null;
  product?: product_bool_exp | null;
  product_id?: String_comparison_exp | null;
  total_quantity?: bigint_comparison_exp | null;
  undelivered_quantity?: bigint_comparison_exp | null;
}

/**
 * input type for inserting object relation for remote table "product"
 */
export interface product_obj_rel_insert_input {
  data: product_insert_input;
  on_conflict?: product_on_conflict | null;
}

/**
 * on conflict condition type for table "product"
 */
export interface product_on_conflict {
  constraint: product_constraint;
  update_columns: product_update_column[];
  where?: product_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "product_owner". All fields are combined with a logical 'AND'.
 */
export interface product_owner_bool_exp {
  _and?: (product_owner_bool_exp | null)[] | null;
  _not?: product_owner_bool_exp | null;
  _or?: (product_owner_bool_exp | null)[] | null;
  member?: member_public_bool_exp | null;
  member_id?: String_comparison_exp | null;
  product?: product_bool_exp | null;
  product_id?: String_comparison_exp | null;
}

/**
 * input type for inserting array relation for remote table "program_announcement"
 */
export interface program_announcement_arr_rel_insert_input {
  data: program_announcement_insert_input[];
  on_conflict?: program_announcement_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "program_announcement". All fields are combined with a logical 'AND'.
 */
export interface program_announcement_bool_exp {
  _and?: (program_announcement_bool_exp | null)[] | null;
  _not?: program_announcement_bool_exp | null;
  _or?: (program_announcement_bool_exp | null)[] | null;
  created_at?: timestamptz_comparison_exp | null;
  description?: String_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  program?: program_bool_exp | null;
  program_id?: uuid_comparison_exp | null;
  published_at?: timestamptz_comparison_exp | null;
  title?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "program_announcement"
 */
export interface program_announcement_insert_input {
  created_at?: any | null;
  description?: string | null;
  id?: any | null;
  program?: program_obj_rel_insert_input | null;
  program_id?: any | null;
  published_at?: any | null;
  title?: string | null;
}

/**
 * on conflict condition type for table "program_announcement"
 */
export interface program_announcement_on_conflict {
  constraint: program_announcement_constraint;
  update_columns: program_announcement_update_column[];
  where?: program_announcement_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "program"
 */
export interface program_arr_rel_insert_input {
  data: program_insert_input[];
  on_conflict?: program_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "program". All fields are combined with a logical 'AND'.
 */
export interface program_bool_exp {
  _and?: (program_bool_exp | null)[] | null;
  _not?: program_bool_exp | null;
  _or?: (program_bool_exp | null)[] | null;
  abstract?: String_comparison_exp | null;
  app?: app_bool_exp | null;
  app_id?: String_comparison_exp | null;
  cover_url?: String_comparison_exp | null;
  cover_video_url?: String_comparison_exp | null;
  created_at?: timestamptz_comparison_exp | null;
  description?: String_comparison_exp | null;
  editors?: program_editor_bool_exp | null;
  id?: uuid_comparison_exp | null;
  in_advance?: Boolean_comparison_exp | null;
  is_deleted?: Boolean_comparison_exp | null;
  is_issues_open?: Boolean_comparison_exp | null;
  is_private?: Boolean_comparison_exp | null;
  is_sold_out?: Boolean_comparison_exp | null;
  is_subscription?: Boolean_comparison_exp | null;
  list_price?: numeric_comparison_exp | null;
  package_items?: package_item_bool_exp | null;
  position?: Int_comparison_exp | null;
  program_announcements?: program_announcement_bool_exp | null;
  program_categories?: program_category_bool_exp | null;
  program_content_sections?: program_content_section_bool_exp | null;
  program_enrollments?: program_enrollment_bool_exp | null;
  program_package_programs?: program_package_program_bool_exp | null;
  program_plans?: program_plan_bool_exp | null;
  program_related_items?: program_related_item_bool_exp | null;
  program_roles?: program_role_bool_exp | null;
  program_tags?: program_tag_bool_exp | null;
  published_at?: timestamptz_comparison_exp | null;
  sale_price?: numeric_comparison_exp | null;
  sold_at?: timestamptz_comparison_exp | null;
  support_locales?: jsonb_comparison_exp | null;
  title?: String_comparison_exp | null;
  updated_at?: timestamptz_comparison_exp | null;
}

/**
 * input type for inserting array relation for remote table "program_category"
 */
export interface program_category_arr_rel_insert_input {
  data: program_category_insert_input[];
  on_conflict?: program_category_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "program_category". All fields are combined with a logical 'AND'.
 */
export interface program_category_bool_exp {
  _and?: (program_category_bool_exp | null)[] | null;
  _not?: program_category_bool_exp | null;
  _or?: (program_category_bool_exp | null)[] | null;
  category?: category_bool_exp | null;
  category_id?: String_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  position?: Int_comparison_exp | null;
  program?: program_bool_exp | null;
  program_id?: uuid_comparison_exp | null;
}

/**
 * input type for inserting data into table "program_category"
 */
export interface program_category_insert_input {
  category?: category_obj_rel_insert_input | null;
  category_id?: string | null;
  id?: any | null;
  position?: number | null;
  program?: program_obj_rel_insert_input | null;
  program_id?: any | null;
}

/**
 * on conflict condition type for table "program_category"
 */
export interface program_category_on_conflict {
  constraint: program_category_constraint;
  update_columns: program_category_update_column[];
  where?: program_category_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "program_content"
 */
export interface program_content_arr_rel_insert_input {
  data: program_content_insert_input[];
  on_conflict?: program_content_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "program_content_body". All fields are combined with a logical 'AND'.
 */
export interface program_content_body_bool_exp {
  _and?: (program_content_body_bool_exp | null)[] | null;
  _not?: program_content_body_bool_exp | null;
  _or?: (program_content_body_bool_exp | null)[] | null;
  data?: jsonb_comparison_exp | null;
  description?: String_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  program_contents?: program_content_bool_exp | null;
  type?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "program_content_body"
 */
export interface program_content_body_insert_input {
  data?: any | null;
  description?: string | null;
  id?: any | null;
  program_contents?: program_content_arr_rel_insert_input | null;
  type?: string | null;
}

/**
 * input type for inserting object relation for remote table "program_content_body"
 */
export interface program_content_body_obj_rel_insert_input {
  data: program_content_body_insert_input;
  on_conflict?: program_content_body_on_conflict | null;
}

/**
 * on conflict condition type for table "program_content_body"
 */
export interface program_content_body_on_conflict {
  constraint: program_content_body_constraint;
  update_columns: program_content_body_update_column[];
  where?: program_content_body_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "program_content". All fields are combined with a logical 'AND'.
 */
export interface program_content_bool_exp {
  _and?: (program_content_bool_exp | null)[] | null;
  _not?: program_content_bool_exp | null;
  _or?: (program_content_bool_exp | null)[] | null;
  abstract?: String_comparison_exp | null;
  content_body_id?: uuid_comparison_exp | null;
  content_section_id?: uuid_comparison_exp | null;
  content_type?: String_comparison_exp | null;
  created_at?: timestamptz_comparison_exp | null;
  duration?: numeric_comparison_exp | null;
  enrollments?: program_content_enrollment_bool_exp | null;
  id?: uuid_comparison_exp | null;
  is_notify_update?: Boolean_comparison_exp | null;
  list_price?: numeric_comparison_exp | null;
  metadata?: jsonb_comparison_exp | null;
  notified_at?: timestamptz_comparison_exp | null;
  position?: Int_comparison_exp | null;
  program_content_body?: program_content_body_bool_exp | null;
  program_content_plans?: program_content_plan_bool_exp | null;
  program_content_progress?: program_content_progress_bool_exp | null;
  program_content_section?: program_content_section_bool_exp | null;
  program_content_type?: program_content_type_bool_exp | null;
  published_at?: timestamptz_comparison_exp | null;
  sale_price?: numeric_comparison_exp | null;
  sold_at?: timestamptz_comparison_exp | null;
  title?: String_comparison_exp | null;
}

/**
 * Boolean expression to filter rows from the table "program_content_enrollment". All fields are combined with a logical 'AND'.
 */
export interface program_content_enrollment_bool_exp {
  _and?: (program_content_enrollment_bool_exp | null)[] | null;
  _not?: program_content_enrollment_bool_exp | null;
  _or?: (program_content_enrollment_bool_exp | null)[] | null;
  member?: member_bool_exp | null;
  member_id?: String_comparison_exp | null;
  program?: program_bool_exp | null;
  program_content?: program_content_bool_exp | null;
  program_content_id?: uuid_comparison_exp | null;
  program_id?: uuid_comparison_exp | null;
}

/**
 * input type for inserting data into table "program_content"
 */
export interface program_content_insert_input {
  abstract?: string | null;
  content_body_id?: any | null;
  content_section_id?: any | null;
  content_type?: string | null;
  created_at?: any | null;
  duration?: any | null;
  id?: any | null;
  is_notify_update?: boolean | null;
  list_price?: any | null;
  metadata?: any | null;
  notified_at?: any | null;
  position?: number | null;
  program_content_body?: program_content_body_obj_rel_insert_input | null;
  program_content_plans?: program_content_plan_arr_rel_insert_input | null;
  program_content_progress?: program_content_progress_arr_rel_insert_input | null;
  program_content_section?: program_content_section_obj_rel_insert_input | null;
  published_at?: any | null;
  sale_price?: any | null;
  sold_at?: any | null;
  title?: string | null;
}

/**
 * input type for inserting object relation for remote table "program_content"
 */
export interface program_content_obj_rel_insert_input {
  data: program_content_insert_input;
  on_conflict?: program_content_on_conflict | null;
}

/**
 * on conflict condition type for table "program_content"
 */
export interface program_content_on_conflict {
  constraint: program_content_constraint;
  update_columns: program_content_update_column[];
  where?: program_content_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "program_content_plan"
 */
export interface program_content_plan_arr_rel_insert_input {
  data: program_content_plan_insert_input[];
  on_conflict?: program_content_plan_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "program_content_plan". All fields are combined with a logical 'AND'.
 */
export interface program_content_plan_bool_exp {
  _and?: (program_content_plan_bool_exp | null)[] | null;
  _not?: program_content_plan_bool_exp | null;
  _or?: (program_content_plan_bool_exp | null)[] | null;
  id?: uuid_comparison_exp | null;
  program_content?: program_content_bool_exp | null;
  program_content_id?: uuid_comparison_exp | null;
  program_plan?: program_plan_bool_exp | null;
  program_plan_id?: uuid_comparison_exp | null;
}

/**
 * input type for inserting data into table "program_content_plan"
 */
export interface program_content_plan_insert_input {
  id?: any | null;
  program_content?: program_content_obj_rel_insert_input | null;
  program_content_id?: any | null;
  program_plan?: program_plan_obj_rel_insert_input | null;
  program_plan_id?: any | null;
}

/**
 * on conflict condition type for table "program_content_plan"
 */
export interface program_content_plan_on_conflict {
  constraint: program_content_plan_constraint;
  update_columns: program_content_plan_update_column[];
  where?: program_content_plan_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "program_content_progress"
 */
export interface program_content_progress_arr_rel_insert_input {
  data: program_content_progress_insert_input[];
  on_conflict?: program_content_progress_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "program_content_progress". All fields are combined with a logical 'AND'.
 */
export interface program_content_progress_bool_exp {
  _and?: (program_content_progress_bool_exp | null)[] | null;
  _not?: program_content_progress_bool_exp | null;
  _or?: (program_content_progress_bool_exp | null)[] | null;
  id?: uuid_comparison_exp | null;
  last_progress?: numeric_comparison_exp | null;
  member?: member_bool_exp | null;
  member_id?: String_comparison_exp | null;
  program_content?: program_content_bool_exp | null;
  program_content_id?: uuid_comparison_exp | null;
  progress?: numeric_comparison_exp | null;
}

/**
 * input type for inserting data into table "program_content_progress"
 */
export interface program_content_progress_insert_input {
  id?: any | null;
  last_progress?: any | null;
  member?: member_obj_rel_insert_input | null;
  member_id?: string | null;
  program_content?: program_content_obj_rel_insert_input | null;
  program_content_id?: any | null;
  progress?: any | null;
}

/**
 * on conflict condition type for table "program_content_progress"
 */
export interface program_content_progress_on_conflict {
  constraint: program_content_progress_constraint;
  update_columns: program_content_progress_update_column[];
  where?: program_content_progress_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "program_content_section"
 */
export interface program_content_section_arr_rel_insert_input {
  data: program_content_section_insert_input[];
  on_conflict?: program_content_section_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "program_content_section". All fields are combined with a logical 'AND'.
 */
export interface program_content_section_bool_exp {
  _and?: (program_content_section_bool_exp | null)[] | null;
  _not?: program_content_section_bool_exp | null;
  _or?: (program_content_section_bool_exp | null)[] | null;
  description?: String_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  position?: Int_comparison_exp | null;
  program?: program_bool_exp | null;
  program_contents?: program_content_bool_exp | null;
  program_id?: uuid_comparison_exp | null;
  title?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "program_content_section"
 */
export interface program_content_section_insert_input {
  description?: string | null;
  id?: any | null;
  position?: number | null;
  program?: program_obj_rel_insert_input | null;
  program_contents?: program_content_arr_rel_insert_input | null;
  program_id?: any | null;
  title?: string | null;
}

/**
 * input type for inserting object relation for remote table "program_content_section"
 */
export interface program_content_section_obj_rel_insert_input {
  data: program_content_section_insert_input;
  on_conflict?: program_content_section_on_conflict | null;
}

/**
 * on conflict condition type for table "program_content_section"
 */
export interface program_content_section_on_conflict {
  constraint: program_content_section_constraint;
  update_columns: program_content_section_update_column[];
  where?: program_content_section_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "program_content_type". All fields are combined with a logical 'AND'.
 */
export interface program_content_type_bool_exp {
  _and?: (program_content_type_bool_exp | null)[] | null;
  _not?: program_content_type_bool_exp | null;
  _or?: (program_content_type_bool_exp | null)[] | null;
  id?: uuid_comparison_exp | null;
  program_content?: program_content_bool_exp | null;
  type?: String_comparison_exp | null;
}

/**
 * input type for inserting array relation for remote table "program_editor"
 */
export interface program_editor_arr_rel_insert_input {
  data: program_editor_insert_input[];
}

/**
 * Boolean expression to filter rows from the table "program_editor". All fields are combined with a logical 'AND'.
 */
export interface program_editor_bool_exp {
  _and?: (program_editor_bool_exp | null)[] | null;
  _not?: program_editor_bool_exp | null;
  _or?: (program_editor_bool_exp | null)[] | null;
  member_id?: String_comparison_exp | null;
  program_id?: uuid_comparison_exp | null;
}

/**
 * input type for inserting data into table "program_editor"
 */
export interface program_editor_insert_input {
  member_id?: string | null;
  program_id?: any | null;
}

/**
 * Boolean expression to filter rows from the table "program_enrollment". All fields are combined with a logical 'AND'.
 */
export interface program_enrollment_bool_exp {
  _and?: (program_enrollment_bool_exp | null)[] | null;
  _not?: program_enrollment_bool_exp | null;
  _or?: (program_enrollment_bool_exp | null)[] | null;
  member?: member_bool_exp | null;
  member_email?: String_comparison_exp | null;
  member_id?: String_comparison_exp | null;
  member_name?: String_comparison_exp | null;
  member_picture_url?: String_comparison_exp | null;
  program?: program_bool_exp | null;
  program_id?: uuid_comparison_exp | null;
  updated_at?: timestamptz_comparison_exp | null;
}

/**
 * input type for inserting data into table "program"
 */
export interface program_insert_input {
  abstract?: string | null;
  app?: app_obj_rel_insert_input | null;
  app_id?: string | null;
  cover_url?: string | null;
  cover_video_url?: string | null;
  created_at?: any | null;
  description?: string | null;
  editors?: program_editor_arr_rel_insert_input | null;
  id?: any | null;
  in_advance?: boolean | null;
  is_deleted?: boolean | null;
  is_issues_open?: boolean | null;
  is_private?: boolean | null;
  is_sold_out?: boolean | null;
  is_subscription?: boolean | null;
  list_price?: any | null;
  package_items?: package_item_arr_rel_insert_input | null;
  position?: number | null;
  program_announcements?: program_announcement_arr_rel_insert_input | null;
  program_categories?: program_category_arr_rel_insert_input | null;
  program_content_sections?: program_content_section_arr_rel_insert_input | null;
  program_package_programs?: program_package_program_arr_rel_insert_input | null;
  program_plans?: program_plan_arr_rel_insert_input | null;
  program_related_items?: program_related_item_arr_rel_insert_input | null;
  program_roles?: program_role_arr_rel_insert_input | null;
  program_tags?: program_tag_arr_rel_insert_input | null;
  published_at?: any | null;
  sale_price?: any | null;
  sold_at?: any | null;
  support_locales?: any | null;
  title?: string | null;
  updated_at?: any | null;
}

/**
 * input type for inserting object relation for remote table "program"
 */
export interface program_obj_rel_insert_input {
  data: program_insert_input;
  on_conflict?: program_on_conflict | null;
}

/**
 * on conflict condition type for table "program"
 */
export interface program_on_conflict {
  constraint: program_constraint;
  update_columns: program_update_column[];
  where?: program_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "program_package"
 */
export interface program_package_arr_rel_insert_input {
  data: program_package_insert_input[];
  on_conflict?: program_package_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "program_package". All fields are combined with a logical 'AND'.
 */
export interface program_package_bool_exp {
  _and?: (program_package_bool_exp | null)[] | null;
  _not?: program_package_bool_exp | null;
  _or?: (program_package_bool_exp | null)[] | null;
  app?: app_bool_exp | null;
  app_id?: String_comparison_exp | null;
  cover_url?: String_comparison_exp | null;
  created_at?: timestamptz_comparison_exp | null;
  creator?: member_public_bool_exp | null;
  creator_id?: String_comparison_exp | null;
  description?: String_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  program_package_plans?: program_package_plan_bool_exp | null;
  program_package_programs?: program_package_program_bool_exp | null;
  published_at?: timestamptz_comparison_exp | null;
  title?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "program_package"
 */
export interface program_package_insert_input {
  app?: app_obj_rel_insert_input | null;
  app_id?: string | null;
  cover_url?: string | null;
  created_at?: any | null;
  creator_id?: string | null;
  description?: string | null;
  id?: any | null;
  program_package_plans?: program_package_plan_arr_rel_insert_input | null;
  program_package_programs?: program_package_program_arr_rel_insert_input | null;
  published_at?: any | null;
  title?: string | null;
}

/**
 * input type for inserting object relation for remote table "program_package"
 */
export interface program_package_obj_rel_insert_input {
  data: program_package_insert_input;
  on_conflict?: program_package_on_conflict | null;
}

/**
 * on conflict condition type for table "program_package"
 */
export interface program_package_on_conflict {
  constraint: program_package_constraint;
  update_columns: program_package_update_column[];
  where?: program_package_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "program_package_plan"
 */
export interface program_package_plan_arr_rel_insert_input {
  data: program_package_plan_insert_input[];
  on_conflict?: program_package_plan_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "program_package_plan". All fields are combined with a logical 'AND'.
 */
export interface program_package_plan_bool_exp {
  _and?: (program_package_plan_bool_exp | null)[] | null;
  _not?: program_package_plan_bool_exp | null;
  _or?: (program_package_plan_bool_exp | null)[] | null;
  created_at?: timestamptz_comparison_exp | null;
  description?: String_comparison_exp | null;
  discount_down_price?: numeric_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  is_participants_visible?: Boolean_comparison_exp | null;
  is_subscription?: Boolean_comparison_exp | null;
  is_tempo_delivery?: Boolean_comparison_exp | null;
  list_price?: numeric_comparison_exp | null;
  period_amount?: numeric_comparison_exp | null;
  period_type?: String_comparison_exp | null;
  position?: numeric_comparison_exp | null;
  program_package?: program_package_bool_exp | null;
  program_package_id?: uuid_comparison_exp | null;
  program_package_plan_enrollments?: program_package_plan_enrollment_bool_exp | null;
  published_at?: timestamptz_comparison_exp | null;
  sale_price?: numeric_comparison_exp | null;
  sold_at?: timestamptz_comparison_exp | null;
  title?: String_comparison_exp | null;
}

/**
 * Boolean expression to filter rows from the table "program_package_plan_enrollment". All fields are combined with a logical 'AND'.
 */
export interface program_package_plan_enrollment_bool_exp {
  _and?: (program_package_plan_enrollment_bool_exp | null)[] | null;
  _not?: program_package_plan_enrollment_bool_exp | null;
  _or?: (program_package_plan_enrollment_bool_exp | null)[] | null;
  member?: member_bool_exp | null;
  member_id?: String_comparison_exp | null;
  program_package_plan?: program_package_plan_bool_exp | null;
  program_package_plan_id?: uuid_comparison_exp | null;
}

/**
 * input type for inserting data into table "program_package_plan"
 */
export interface program_package_plan_insert_input {
  created_at?: any | null;
  description?: string | null;
  discount_down_price?: any | null;
  id?: any | null;
  is_participants_visible?: boolean | null;
  is_subscription?: boolean | null;
  is_tempo_delivery?: boolean | null;
  list_price?: any | null;
  period_amount?: any | null;
  period_type?: string | null;
  position?: any | null;
  program_package?: program_package_obj_rel_insert_input | null;
  program_package_id?: any | null;
  published_at?: any | null;
  sale_price?: any | null;
  sold_at?: any | null;
  title?: string | null;
}

/**
 * on conflict condition type for table "program_package_plan"
 */
export interface program_package_plan_on_conflict {
  constraint: program_package_plan_constraint;
  update_columns: program_package_plan_update_column[];
  where?: program_package_plan_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "program_package_program"
 */
export interface program_package_program_arr_rel_insert_input {
  data: program_package_program_insert_input[];
  on_conflict?: program_package_program_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "program_package_program". All fields are combined with a logical 'AND'.
 */
export interface program_package_program_bool_exp {
  _and?: (program_package_program_bool_exp | null)[] | null;
  _not?: program_package_program_bool_exp | null;
  _or?: (program_package_program_bool_exp | null)[] | null;
  id?: uuid_comparison_exp | null;
  position?: Int_comparison_exp | null;
  program?: program_bool_exp | null;
  program_id?: uuid_comparison_exp | null;
  program_package?: program_package_bool_exp | null;
  program_package_id?: uuid_comparison_exp | null;
  program_tempo_deliveries?: program_tempo_delivery_bool_exp | null;
}

/**
 * input type for inserting data into table "program_package_program"
 */
export interface program_package_program_insert_input {
  id?: any | null;
  position?: number | null;
  program?: program_obj_rel_insert_input | null;
  program_id?: any | null;
  program_package?: program_package_obj_rel_insert_input | null;
  program_package_id?: any | null;
  program_tempo_deliveries?: program_tempo_delivery_arr_rel_insert_input | null;
}

/**
 * input type for inserting object relation for remote table "program_package_program"
 */
export interface program_package_program_obj_rel_insert_input {
  data: program_package_program_insert_input;
  on_conflict?: program_package_program_on_conflict | null;
}

/**
 * on conflict condition type for table "program_package_program"
 */
export interface program_package_program_on_conflict {
  constraint: program_package_program_constraint;
  update_columns: program_package_program_update_column[];
  where?: program_package_program_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "program_plan"
 */
export interface program_plan_arr_rel_insert_input {
  data: program_plan_insert_input[];
  on_conflict?: program_plan_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "program_plan". All fields are combined with a logical 'AND'.
 */
export interface program_plan_bool_exp {
  _and?: (program_plan_bool_exp | null)[] | null;
  _not?: program_plan_bool_exp | null;
  _or?: (program_plan_bool_exp | null)[] | null;
  auto_renewed?: Boolean_comparison_exp | null;
  created_at?: timestamptz_comparison_exp | null;
  currency?: currency_bool_exp | null;
  currency_id?: String_comparison_exp | null;
  description?: String_comparison_exp | null;
  discount_down_price?: numeric_comparison_exp | null;
  ended_at?: timestamptz_comparison_exp | null;
  gains?: jsonb_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  is_participants_visible?: Boolean_comparison_exp | null;
  list_price?: numeric_comparison_exp | null;
  period_amount?: numeric_comparison_exp | null;
  period_type?: String_comparison_exp | null;
  program?: program_bool_exp | null;
  program_content_permissions?: program_content_plan_bool_exp | null;
  program_id?: uuid_comparison_exp | null;
  program_plan_enrollments?: program_plan_enrollment_bool_exp | null;
  published_at?: timestamptz_comparison_exp | null;
  sale_price?: numeric_comparison_exp | null;
  sold_at?: timestamptz_comparison_exp | null;
  started_at?: timestamptz_comparison_exp | null;
  title?: String_comparison_exp | null;
  type?: Int_comparison_exp | null;
}

/**
 * Boolean expression to filter rows from the table "program_plan_enrollment". All fields are combined with a logical 'AND'.
 */
export interface program_plan_enrollment_bool_exp {
  _and?: (program_plan_enrollment_bool_exp | null)[] | null;
  _not?: program_plan_enrollment_bool_exp | null;
  _or?: (program_plan_enrollment_bool_exp | null)[] | null;
  ended_at?: timestamptz_comparison_exp | null;
  member?: member_bool_exp | null;
  member_id?: String_comparison_exp | null;
  program_plan?: program_plan_bool_exp | null;
  program_plan_id?: uuid_comparison_exp | null;
  started_at?: timestamptz_comparison_exp | null;
  updated_at?: timestamptz_comparison_exp | null;
}

/**
 * input type for inserting data into table "program_plan"
 */
export interface program_plan_insert_input {
  auto_renewed?: boolean | null;
  created_at?: any | null;
  currency?: currency_obj_rel_insert_input | null;
  currency_id?: string | null;
  description?: string | null;
  discount_down_price?: any | null;
  ended_at?: any | null;
  gains?: any | null;
  id?: any | null;
  is_participants_visible?: boolean | null;
  list_price?: any | null;
  period_amount?: any | null;
  period_type?: string | null;
  program?: program_obj_rel_insert_input | null;
  program_content_permissions?: program_content_plan_arr_rel_insert_input | null;
  program_id?: any | null;
  published_at?: any | null;
  sale_price?: any | null;
  sold_at?: any | null;
  started_at?: any | null;
  title?: string | null;
  type?: number | null;
}

/**
 * input type for inserting object relation for remote table "program_plan"
 */
export interface program_plan_obj_rel_insert_input {
  data: program_plan_insert_input;
  on_conflict?: program_plan_on_conflict | null;
}

/**
 * on conflict condition type for table "program_plan"
 */
export interface program_plan_on_conflict {
  constraint: program_plan_constraint;
  update_columns: program_plan_update_column[];
  where?: program_plan_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "program_related_item"
 */
export interface program_related_item_arr_rel_insert_input {
  data: program_related_item_insert_input[];
  on_conflict?: program_related_item_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "program_related_item". All fields are combined with a logical 'AND'.
 */
export interface program_related_item_bool_exp {
  _and?: (program_related_item_bool_exp | null)[] | null;
  _not?: program_related_item_bool_exp | null;
  _or?: (program_related_item_bool_exp | null)[] | null;
  class?: String_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  program?: program_bool_exp | null;
  program_id?: uuid_comparison_exp | null;
  target?: jsonb_comparison_exp | null;
  weight?: numeric_comparison_exp | null;
}

/**
 * input type for inserting data into table "program_related_item"
 */
export interface program_related_item_insert_input {
  class?: string | null;
  id?: any | null;
  program?: program_obj_rel_insert_input | null;
  program_id?: any | null;
  target?: any | null;
  weight?: any | null;
}

/**
 * on conflict condition type for table "program_related_item"
 */
export interface program_related_item_on_conflict {
  constraint: program_related_item_constraint;
  update_columns: program_related_item_update_column[];
  where?: program_related_item_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "program_role"
 */
export interface program_role_arr_rel_insert_input {
  data: program_role_insert_input[];
  on_conflict?: program_role_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "program_role". All fields are combined with a logical 'AND'.
 */
export interface program_role_bool_exp {
  _and?: (program_role_bool_exp | null)[] | null;
  _not?: program_role_bool_exp | null;
  _or?: (program_role_bool_exp | null)[] | null;
  id?: uuid_comparison_exp | null;
  member?: member_public_bool_exp | null;
  member_id?: String_comparison_exp | null;
  name?: String_comparison_exp | null;
  program?: program_bool_exp | null;
  program_id?: uuid_comparison_exp | null;
}

/**
 * input type for inserting data into table "program_role"
 */
export interface program_role_insert_input {
  id?: any | null;
  member_id?: string | null;
  name?: string | null;
  program?: program_obj_rel_insert_input | null;
  program_id?: any | null;
}

/**
 * on conflict condition type for table "program_role"
 */
export interface program_role_on_conflict {
  constraint: program_role_constraint;
  update_columns: program_role_update_column[];
  where?: program_role_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "program_tag"
 */
export interface program_tag_arr_rel_insert_input {
  data: program_tag_insert_input[];
  on_conflict?: program_tag_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "program_tag". All fields are combined with a logical 'AND'.
 */
export interface program_tag_bool_exp {
  _and?: (program_tag_bool_exp | null)[] | null;
  _not?: program_tag_bool_exp | null;
  _or?: (program_tag_bool_exp | null)[] | null;
  id?: uuid_comparison_exp | null;
  position?: Int_comparison_exp | null;
  program?: program_bool_exp | null;
  program_id?: uuid_comparison_exp | null;
  tag?: tag_bool_exp | null;
  tag_name?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "program_tag"
 */
export interface program_tag_insert_input {
  id?: any | null;
  position?: number | null;
  program?: program_obj_rel_insert_input | null;
  program_id?: any | null;
  tag?: tag_obj_rel_insert_input | null;
  tag_name?: string | null;
}

/**
 * on conflict condition type for table "program_tag"
 */
export interface program_tag_on_conflict {
  constraint: program_tag_constraint;
  update_columns: program_tag_update_column[];
  where?: program_tag_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "program_tempo_delivery"
 */
export interface program_tempo_delivery_arr_rel_insert_input {
  data: program_tempo_delivery_insert_input[];
  on_conflict?: program_tempo_delivery_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "program_tempo_delivery". All fields are combined with a logical 'AND'.
 */
export interface program_tempo_delivery_bool_exp {
  _and?: (program_tempo_delivery_bool_exp | null)[] | null;
  _not?: program_tempo_delivery_bool_exp | null;
  _or?: (program_tempo_delivery_bool_exp | null)[] | null;
  delivered_at?: timestamptz_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  member?: member_public_bool_exp | null;
  member_id?: String_comparison_exp | null;
  program_package_program?: program_package_program_bool_exp | null;
  program_package_program_id?: uuid_comparison_exp | null;
}

/**
 * input type for inserting data into table "program_tempo_delivery"
 */
export interface program_tempo_delivery_insert_input {
  delivered_at?: any | null;
  id?: any | null;
  member_id?: string | null;
  program_package_program?: program_package_program_obj_rel_insert_input | null;
  program_package_program_id?: any | null;
}

/**
 * on conflict condition type for table "program_tempo_delivery"
 */
export interface program_tempo_delivery_on_conflict {
  constraint: program_tempo_delivery_constraint;
  update_columns: program_tempo_delivery_update_column[];
  where?: program_tempo_delivery_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "social_card"
 */
export interface social_card_arr_rel_insert_input {
  data: social_card_insert_input[];
  on_conflict?: social_card_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "social_card". All fields are combined with a logical 'AND'.
 */
export interface social_card_bool_exp {
  _and?: (social_card_bool_exp | null)[] | null;
  _not?: social_card_bool_exp | null;
  _or?: (social_card_bool_exp | null)[] | null;
  badge_url?: String_comparison_exp | null;
  description?: String_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  member_social?: member_social_bool_exp | null;
  member_social_id?: uuid_comparison_exp | null;
  membership_id?: String_comparison_exp | null;
  name?: String_comparison_exp | null;
  social_card_subscribers?: social_card_subscriber_bool_exp | null;
}

/**
 * input type for inserting data into table "social_card"
 */
export interface social_card_insert_input {
  badge_url?: string | null;
  description?: string | null;
  id?: any | null;
  member_social?: member_social_obj_rel_insert_input | null;
  member_social_id?: any | null;
  membership_id?: string | null;
  name?: string | null;
  social_card_subscribers?: social_card_subscriber_arr_rel_insert_input | null;
}

/**
 * input type for inserting object relation for remote table "social_card"
 */
export interface social_card_obj_rel_insert_input {
  data: social_card_insert_input;
  on_conflict?: social_card_on_conflict | null;
}

/**
 * on conflict condition type for table "social_card"
 */
export interface social_card_on_conflict {
  constraint: social_card_constraint;
  update_columns: social_card_update_column[];
  where?: social_card_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "social_card_subscriber"
 */
export interface social_card_subscriber_arr_rel_insert_input {
  data: social_card_subscriber_insert_input[];
  on_conflict?: social_card_subscriber_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "social_card_subscriber". All fields are combined with a logical 'AND'.
 */
export interface social_card_subscriber_bool_exp {
  _and?: (social_card_subscriber_bool_exp | null)[] | null;
  _not?: social_card_subscriber_bool_exp | null;
  _or?: (social_card_subscriber_bool_exp | null)[] | null;
  created_at?: timestamptz_comparison_exp | null;
  ended_at?: timestamptz_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  member?: member_bool_exp | null;
  member_channel_id?: String_comparison_exp | null;
  member_id?: String_comparison_exp | null;
  social_card?: social_card_bool_exp | null;
  social_card_id?: uuid_comparison_exp | null;
  started_at?: timestamptz_comparison_exp | null;
}

/**
 * input type for inserting data into table "social_card_subscriber"
 */
export interface social_card_subscriber_insert_input {
  created_at?: any | null;
  ended_at?: any | null;
  id?: any | null;
  member?: member_obj_rel_insert_input | null;
  member_channel_id?: string | null;
  member_id?: string | null;
  social_card?: social_card_obj_rel_insert_input | null;
  social_card_id?: any | null;
  started_at?: any | null;
}

/**
 * on conflict condition type for table "social_card_subscriber"
 */
export interface social_card_subscriber_on_conflict {
  constraint: social_card_subscriber_constraint;
  update_columns: social_card_subscriber_update_column[];
  where?: social_card_subscriber_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "tag"
 */
export interface tag_arr_rel_insert_input {
  data: tag_insert_input[];
  on_conflict?: tag_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "tag". All fields are combined with a logical 'AND'.
 */
export interface tag_bool_exp {
  _and?: (tag_bool_exp | null)[] | null;
  _not?: tag_bool_exp | null;
  _or?: (tag_bool_exp | null)[] | null;
  app?: app_bool_exp | null;
  app_id?: String_comparison_exp | null;
  created_at?: timestamptz_comparison_exp | null;
  member_tags?: member_tag_bool_exp | null;
  merchandise_tags?: merchandise_tag_bool_exp | null;
  name?: String_comparison_exp | null;
  podcast_program_tags?: podcast_program_tag_bool_exp | null;
  post_tags?: post_tag_bool_exp | null;
  program_tags?: program_tag_bool_exp | null;
  type?: String_comparison_exp | null;
  updated_at?: timestamptz_comparison_exp | null;
}

/**
 * input type for inserting data into table "tag"
 */
export interface tag_insert_input {
  app?: app_obj_rel_insert_input | null;
  app_id?: string | null;
  created_at?: any | null;
  member_tags?: member_tag_arr_rel_insert_input | null;
  merchandise_tags?: merchandise_tag_arr_rel_insert_input | null;
  name?: string | null;
  podcast_program_tags?: podcast_program_tag_arr_rel_insert_input | null;
  post_tags?: post_tag_arr_rel_insert_input | null;
  program_tags?: program_tag_arr_rel_insert_input | null;
  type?: string | null;
  updated_at?: any | null;
}

/**
 * input type for inserting object relation for remote table "tag"
 */
export interface tag_obj_rel_insert_input {
  data: tag_insert_input;
  on_conflict?: tag_on_conflict | null;
}

/**
 * on conflict condition type for table "tag"
 */
export interface tag_on_conflict {
  constraint: tag_constraint;
  update_columns: tag_update_column[];
  where?: tag_bool_exp | null;
}

/**
 * expression to compare columns of type timestamptz. All fields are combined with logical 'AND'.
 */
export interface timestamptz_comparison_exp {
  _eq?: any | null;
  _gt?: any | null;
  _gte?: any | null;
  _in?: any[] | null;
  _is_null?: boolean | null;
  _lt?: any | null;
  _lte?: any | null;
  _neq?: any | null;
  _nin?: any[] | null;
}

/**
 * expression to compare columns of type uuid. All fields are combined with logical 'AND'.
 */
export interface uuid_comparison_exp {
  _eq?: any | null;
  _gt?: any | null;
  _gte?: any | null;
  _in?: any[] | null;
  _is_null?: boolean | null;
  _lt?: any | null;
  _lte?: any | null;
  _neq?: any | null;
  _nin?: any[] | null;
}

/**
 * input type for inserting array relation for remote table "voucher"
 */
export interface voucher_arr_rel_insert_input {
  data: voucher_insert_input[];
  on_conflict?: voucher_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "voucher". All fields are combined with a logical 'AND'.
 */
export interface voucher_bool_exp {
  _and?: (voucher_bool_exp | null)[] | null;
  _not?: voucher_bool_exp | null;
  _or?: (voucher_bool_exp | null)[] | null;
  created_at?: timestamptz_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  member?: member_bool_exp | null;
  member_id?: String_comparison_exp | null;
  status?: voucher_status_bool_exp | null;
  voucher_code?: voucher_code_bool_exp | null;
  voucher_code_id?: uuid_comparison_exp | null;
}

/**
 * input type for inserting array relation for remote table "voucher_code"
 */
export interface voucher_code_arr_rel_insert_input {
  data: voucher_code_insert_input[];
  on_conflict?: voucher_code_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "voucher_code". All fields are combined with a logical 'AND'.
 */
export interface voucher_code_bool_exp {
  _and?: (voucher_code_bool_exp | null)[] | null;
  _not?: voucher_code_bool_exp | null;
  _or?: (voucher_code_bool_exp | null)[] | null;
  code?: String_comparison_exp | null;
  count?: Int_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  remaining?: Int_comparison_exp | null;
  voucher_plan?: voucher_plan_bool_exp | null;
  voucher_plan_id?: uuid_comparison_exp | null;
  vouchers?: voucher_bool_exp | null;
}

/**
 * input type for inserting data into table "voucher_code"
 */
export interface voucher_code_insert_input {
  code?: string | null;
  count?: number | null;
  id?: any | null;
  remaining?: number | null;
  voucher_plan?: voucher_plan_obj_rel_insert_input | null;
  voucher_plan_id?: any | null;
  vouchers?: voucher_arr_rel_insert_input | null;
}

/**
 * input type for inserting object relation for remote table "voucher_code"
 */
export interface voucher_code_obj_rel_insert_input {
  data: voucher_code_insert_input;
  on_conflict?: voucher_code_on_conflict | null;
}

/**
 * on conflict condition type for table "voucher_code"
 */
export interface voucher_code_on_conflict {
  constraint: voucher_code_constraint;
  update_columns: voucher_code_update_column[];
  where?: voucher_code_bool_exp | null;
}

/**
 * input type for inserting data into table "voucher"
 */
export interface voucher_insert_input {
  created_at?: any | null;
  id?: any | null;
  member?: member_obj_rel_insert_input | null;
  member_id?: string | null;
  voucher_code?: voucher_code_obj_rel_insert_input | null;
  voucher_code_id?: any | null;
}

/**
 * on conflict condition type for table "voucher"
 */
export interface voucher_on_conflict {
  constraint: voucher_constraint;
  update_columns: voucher_update_column[];
  where?: voucher_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "voucher_plan"
 */
export interface voucher_plan_arr_rel_insert_input {
  data: voucher_plan_insert_input[];
  on_conflict?: voucher_plan_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "voucher_plan". All fields are combined with a logical 'AND'.
 */
export interface voucher_plan_bool_exp {
  _and?: (voucher_plan_bool_exp | null)[] | null;
  _not?: voucher_plan_bool_exp | null;
  _or?: (voucher_plan_bool_exp | null)[] | null;
  app?: app_bool_exp | null;
  app_id?: String_comparison_exp | null;
  description?: String_comparison_exp | null;
  ended_at?: timestamptz_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  product_quantity_limit?: Int_comparison_exp | null;
  started_at?: timestamptz_comparison_exp | null;
  title?: String_comparison_exp | null;
  voucher_codes?: voucher_code_bool_exp | null;
  voucher_plan_products?: voucher_plan_product_bool_exp | null;
}

/**
 * input type for inserting data into table "voucher_plan"
 */
export interface voucher_plan_insert_input {
  app?: app_obj_rel_insert_input | null;
  app_id?: string | null;
  description?: string | null;
  ended_at?: any | null;
  id?: any | null;
  product_quantity_limit?: number | null;
  started_at?: any | null;
  title?: string | null;
  voucher_codes?: voucher_code_arr_rel_insert_input | null;
  voucher_plan_products?: voucher_plan_product_arr_rel_insert_input | null;
}

/**
 * input type for inserting object relation for remote table "voucher_plan"
 */
export interface voucher_plan_obj_rel_insert_input {
  data: voucher_plan_insert_input;
  on_conflict?: voucher_plan_on_conflict | null;
}

/**
 * on conflict condition type for table "voucher_plan"
 */
export interface voucher_plan_on_conflict {
  constraint: voucher_plan_constraint;
  update_columns: voucher_plan_update_column[];
  where?: voucher_plan_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "voucher_plan_product"
 */
export interface voucher_plan_product_arr_rel_insert_input {
  data: voucher_plan_product_insert_input[];
  on_conflict?: voucher_plan_product_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "voucher_plan_product". All fields are combined with a logical 'AND'.
 */
export interface voucher_plan_product_bool_exp {
  _and?: (voucher_plan_product_bool_exp | null)[] | null;
  _not?: voucher_plan_product_bool_exp | null;
  _or?: (voucher_plan_product_bool_exp | null)[] | null;
  id?: uuid_comparison_exp | null;
  product?: product_bool_exp | null;
  product_id?: String_comparison_exp | null;
  voucher_plan?: voucher_plan_bool_exp | null;
  voucher_plan_id?: uuid_comparison_exp | null;
}

/**
 * input type for inserting data into table "voucher_plan_product"
 */
export interface voucher_plan_product_insert_input {
  id?: any | null;
  product?: product_obj_rel_insert_input | null;
  product_id?: string | null;
  voucher_plan?: voucher_plan_obj_rel_insert_input | null;
  voucher_plan_id?: any | null;
}

/**
 * on conflict condition type for table "voucher_plan_product"
 */
export interface voucher_plan_product_on_conflict {
  constraint: voucher_plan_product_constraint;
  update_columns: voucher_plan_product_update_column[];
  where?: voucher_plan_product_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "voucher_status". All fields are combined with a logical 'AND'.
 */
export interface voucher_status_bool_exp {
  _and?: (voucher_status_bool_exp | null)[] | null;
  _not?: voucher_status_bool_exp | null;
  _or?: (voucher_status_bool_exp | null)[] | null;
  outdated?: Boolean_comparison_exp | null;
  used?: Boolean_comparison_exp | null;
  voucher?: voucher_bool_exp | null;
  voucher_id?: uuid_comparison_exp | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
