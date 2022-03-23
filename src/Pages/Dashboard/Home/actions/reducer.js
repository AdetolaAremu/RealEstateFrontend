import { GET_INDEX_DATA, GET_INDEX_ERROR, INDEX_LOADING_ENDS, INDEX_LOADING_STARTS, INDEX_EACH_POST_LOADING_STARTS, INDEX_EACH_POST_LOADING_ENDS, GET_MY_LIKED_DATA, MY_LIKED_POST_LOADING_STARTS, MY_LIKED_POST_LOADING_ENDS, CRUD_OPERATION_STARTS, CRUD_OPERATION_ENDS, DELETE_USER_POST } from './types'

const init =  {
  indexData:[],
  indexLoading:false,
  indexEachLoading:false,
  crudLoading:false,
  errors: {},
  myLikedLoading:false,
  myLikedData:[]
}

export default function(state = init, action){
  switch (action.type) {
    case INDEX_LOADING_STARTS:
      return {
        ...state,
        indexLoading:true
      }
    case INDEX_LOADING_ENDS:
      return {
        ...state,
        indexLoading:false
      }
    case INDEX_EACH_POST_LOADING_STARTS:
      return {
        ...state,
        indexEachLoading:true
      }
    case INDEX_EACH_POST_LOADING_ENDS:
      return {
        ...state,
        indexEachLoading:false
      }
    case GET_INDEX_DATA:
      return {
        ...state,
        indexData:action.payload
      }
    case GET_INDEX_ERROR:
      return {
        ...state,
        errors:action.payload
      }
    case GET_MY_LIKED_DATA:
      return {
        ...state,
        myLikedData:action.payload
      }
    case MY_LIKED_POST_LOADING_STARTS:
      return {
        ...state,
        myLikedLoading:true
      }
    case MY_LIKED_POST_LOADING_ENDS:
      return {
        ...state,
        myLikedLoading:false
      }
    case CRUD_OPERATION_STARTS:
      return {
        ...state,
        crudLoading:true
      }
    case CRUD_OPERATION_ENDS:
      return {
        ...state,
        crudLoading:false
      }
    case DELETE_USER_POST:
      return{
        ...state,
        indexData: state.indexData.filter(item => item.id !== action.payload)
      }
    default:
      return state
  }
}