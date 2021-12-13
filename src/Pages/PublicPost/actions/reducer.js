import { PUBLIC_POST_LOADING_DATA, PUBLIC_POST_LOADING_ENDS, PUBLIC_POST_LOADING_STARTS } from './types'

const INITIAL_STATE = {
  publicDataLoading:false,
  publicData:[]
}  
 
export default (state = INITIAL_STATE, action) => {
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
    case PUBLIC_POST_LOADING_DATA:
      return {
        ...state,
        publicData:action.payload
      }
    default:
      return state
  }
}