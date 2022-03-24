import { PUBLIC_POST_GET_DATA, PUBLIC_POST_LOADING_ENDS, PUBLIC_POST_LOADING_STARTS, PUBLIC_POST_GET_ERROR, 
  PUBLIC_POST_GET_SINGLE_DATA, PUBLIC_POST_COMMENTS_LOADING_STARTS, PUBLIC_POST_COMMENTS_LOADING_ENDS, 
  GET_PUBLIC_POST_COMMENTS_DATA, PUBLIC_POST_COMMENT_CRUD_STARTS, PUBLIC_POST_COMMENT_CRUD_ENDS, 
  LIKE_POST_LOADING_STARTS, LIKE_POST_LOADING_ENDS, LIKE_POST_DATA, CRUD_LIKE_LOADING_STARTS, 
  CRUD_LIKE_LOADING_ENDS, CHECK_LIKE_DATA, FILTER_POST_LOADING_STARTS, FILTER_POST_LOADING_ENDS, 
  GET_CITIES_IN_DB, RESET_SEARCH_DATA, GET_TYPES_IN_DB } from './types'

const INITIAL_STATE = {
  publicDataLoading:false,
  publicData:[],
  singlePublicData:{},
  publicDataError:{},
  publicCommentLoading:false,
  publicCommentData:[],
  commentCrud:false,
  likeLoading:false,
  likeCrudLoading:false,
  filterLoading:false,
  filtered:false,
  likeData:[],
  cityData:[],
  typeData:[],
  checkLikeData:undefined
}
 
const publicPostReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PUBLIC_POST_LOADING_STARTS:
      return {
        ...state,
        publicDataLoading:true
      }
    case PUBLIC_POST_LOADING_ENDS:
      return {
        ...state,
        publicDataLoading:false
      }
    case PUBLIC_POST_GET_DATA:
      return {
        ...state,
        publicData:action.payload
      }
    case PUBLIC_POST_GET_SINGLE_DATA:
      return {
        ...state,
        singlePublicData:action.payload
      }
    case PUBLIC_POST_GET_ERROR:
      return {
        ...state,
        publicDataError:action.payload
      }
    case PUBLIC_POST_COMMENTS_LOADING_STARTS:
      return {
        ...state,
        publicCommentLoading:true
      }
    case PUBLIC_POST_COMMENTS_LOADING_ENDS:
      return {
        ...state,
        publicCommentLoading:false
      }
    case GET_PUBLIC_POST_COMMENTS_DATA:
      return {
        ...state,
        publicCommentData:action.payload
      }
    case PUBLIC_POST_COMMENT_CRUD_STARTS:
      return {
        ...state,
        commentCrud:true
      }
    case PUBLIC_POST_COMMENT_CRUD_ENDS:
      return {
        ...state,
        commentCrud:false
      }
    case LIKE_POST_LOADING_STARTS:
      return {
        ...state,
        likeLoading:true
      }
    case LIKE_POST_LOADING_ENDS:
      return {
        ...state,
        likeLoading:false
      }
    case LIKE_POST_DATA:
      return {
        ...state,
        likeData:action.payload
      }
    case CRUD_LIKE_LOADING_STARTS:
      return {
        ...state,
        likeCrudLoading:true
      }
    case CRUD_LIKE_LOADING_ENDS:
      return {
        ...state,
        likeCrudLoading:false
      }
    case CHECK_LIKE_DATA:
      return {
        ...state,
        checkLikeData:action.payload
      }
    case FILTER_POST_LOADING_STARTS:
      return {
        ...state,
        filterLoading:true
      }
    case FILTER_POST_LOADING_ENDS:
      return {
        ...state,
        filterLoading:false
      }
    case GET_CITIES_IN_DB:
      return {
        ...state,
        cityData:action.payload
      }
    case GET_TYPES_IN_DB:
      return {
        ...state,
        typeData:action.payload
      }
    case RESET_SEARCH_DATA:
      return {
        ...state,
        publicData:action.payload,
      }
    default:
      return state
  }
}

export default publicPostReducer;