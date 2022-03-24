import { PROPERTY_POST_DATA_LOADING_STARTS, PROPERTY_POST_DATA_LOADING_ENDS, GET_PROPERTY_DATA, GET_A_PROPERTY_DATA, GET_PROPERTY_ERROR } from './types'

const init = {
  getPropertyData:[],
  getEachPropertyData:{},
  propertyDataLoading:false,
  errors:{}
}

const PrivatePostReducer = (state = init, action) => {
  switch (action.type) {
    case PROPERTY_POST_DATA_LOADING_STARTS:
      return {
        ...state,
        propertyDataLoading:true
      }
    case PROPERTY_POST_DATA_LOADING_ENDS: 
      return {
      ...state,
      propertyDataLoading:false
    }
    case GET_PROPERTY_DATA:
      return {
        ...state,
        getPropertyData:action.payload
      }
    case GET_A_PROPERTY_DATA:
      return {
        ...state,
        getEachPropertyData:action.payload
      }
    case GET_PROPERTY_ERROR:
      return {
        ...state,
        errors:action.payload
      }
    default:
      return state;
  }
}

export default PrivatePostReducer;