import { GET_PROFILE_DATA, GET_PROFILE_ERROR, PROFILE_LOADING_ENDS, PROFILE_LOADING_STARTS } from './types';

const init = {
  profileDataLoading:false,
  profileData:[],
  errors:{}
}

export default function(state = init, action){
  switch (action.type) {
    case PROFILE_LOADING_STARTS:
      return {
        ...state,
        profileDataLoading:true
      }
    case PROFILE_LOADING_ENDS:
      return {
        ...state,
        profileDataLoading:false
      }
    case GET_PROFILE_DATA:
      return {
        ...state,
        profileData:action.payload
      }
    case GET_PROFILE_ERROR:
      return {
        ...state,
        erros:action.payload
      }
    default:
      return state
  }
}