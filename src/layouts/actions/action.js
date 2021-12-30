import { GET_LAYOUT_DATA, GET_LAYOUT_ERROR, LAYOUT_LOADING_ENDS, LAYOUT_LOADING_STARTS } from './types'
import axios from 'axios';
import process from '../../env';

const service_url = process.env.SERVICE_URL

export const getLoggedInUser = () => {
  return async(dispatch) => {
    try {
      dispatch({type: LAYOUT_LOADING_STARTS})
      const response = await axios.get(`${service_url}/currentuser`)
      dispatch({type: LAYOUT_LOADING_ENDS})
      dispatch({type: GET_LAYOUT_DATA, payload:response.data})
    } catch (error) {
      dispatch({type: GET_LAYOUT_ERROR, payload:error})
    }
  }
}
