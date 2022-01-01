import isEmpty from '../../../utils/isEmpty'
import { AUTH_LOADING_ENDS, AUTH_LOADING_STARTS, SET_CURRENT_USER, GET_AUTH_ERROR } from './types'

const init = {
  isAuthenticated:false,
  user:{},
  authLoading:false,
  errors: {}  
}

export default function(state = init, action){
  switch (action.type) {
    case SET_CURRENT_USER: 
      return {
        ...state,
        isAuthenticated:!isEmpty(action.payload),
        user: action.payload
      }
    case AUTH_LOADING_STARTS:
      return {
        ...state,
        authLoading:true
      }
    case AUTH_LOADING_ENDS:
      return {
        ...state,
        authLoading:false
      }
    case GET_AUTH_ERROR:
      return {
        ...state,
        errors:action.payload
      }
    default:
      return state;
  }
}