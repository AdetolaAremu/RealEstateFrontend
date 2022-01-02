import { GET_INDEX_DATA, GET_INDEX_ERROR, INDEX_LOADING_ENDS, INDEX_LOADING_STARTS, INDEX_EACH_POST_LOADING_STARTS, INDEX_EACH_POST_LOADING_ENDS } from './types'
import axios from 'axios';
import { notify } from '../../../../utils/notify';
import process from '../../../../env';

const service_url = process.env.SERVICE_URL

export const getUserPosts = () => {
  return async(dispatch) => {
    try {
      dispatch({type: INDEX_LOADING_STARTS})
      const response = await axios.get(`${service_url}/my-posts`)
      dispatch({type: INDEX_LOADING_ENDS})
      dispatch({type: GET_INDEX_DATA, payload:response.data})
    } catch (error) {
      dispatch({type: GET_INDEX_ERROR, payload:error})
    }
  }
}

export const getEachUserPosts = (id) => {
  return async(dispatch) => {
    try {
      dispatch({type: INDEX_EACH_POST_LOADING_STARTS})
      const response = await axios.get(`${service_url}/my-each-posts/${id}`)
      dispatch({type: INDEX_EACH_POST_LOADING_STARTS})
      dispatch({type: GET_INDEX_DATA, payload:response.data})
    } catch (error) {
      dispatch({type: GET_INDEX_ERROR, payload:error})
    }
  }
}