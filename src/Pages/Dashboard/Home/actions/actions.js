import { GET_INDEX_DATA, INDEX_LOADING_ENDS, INDEX_LOADING_STARTS } from './types'
import axios from 'axios';
import process from '../../../../env';
import { GET_AUTH_ERROR } from '../../../AuthPages/actions/types';

const service_url = process.env.SERVICE_URL

export const getUserPosts = () => {
  return async(dispatch) => {
    try {
      dispatch({type: INDEX_LOADING_STARTS})
      const response = await axios.get(`${service_url}/my-posts`)
      dispatch({type: INDEX_LOADING_ENDS})
      dispatch({type: GET_INDEX_DATA, payload:response.data})
    } catch (error) {
      dispatch({type: GET_AUTH_ERROR, payload:error})
    }
  }
}