import { GET_INDEX_DATA, GET_INDEX_ERROR, INDEX_LOADING_ENDS, INDEX_LOADING_STARTS } from './types'

const init =  {
  indexData:[],
  indexLoading:false,
  errors: {}
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
    default:
      return state
  }
}