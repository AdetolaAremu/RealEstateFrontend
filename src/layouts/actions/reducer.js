import { LAYOUT_LOADING_STARTS, LAYOUT_LOADING_ENDS, GET_LAYOUT_DATA, GET_LAYOUT_ERROR, GET_LAYOUT_USER_STATS } from './types'

const init =  {
  layoutData:[],
  layoutLoading:false,
  layoutsUserStats:[],
  errors: {}
}

const layoutReducer = (state = init, action) => {
  switch (action.type) {
    case LAYOUT_LOADING_STARTS:
      return {
        ...state,
        layoutLoading:true
      }
    case LAYOUT_LOADING_ENDS:
      return {
        ...state,
        layoutLoading:false
      }
    case GET_LAYOUT_DATA:
      return {
        ...state,
        layoutData:action.payload
      }
    case GET_LAYOUT_USER_STATS:
      return {
        ...state,
        layoutsUserStats:action.payload
      }
    case GET_LAYOUT_ERROR:
      return {
        ...state,
        errors:action.payload
      }
    default:
      return state
  }
}

export default layoutReducer;