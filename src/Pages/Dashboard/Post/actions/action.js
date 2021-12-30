import axios from 'axios';
import { GET_A_PROPERTY_DATA, GET_PROPERTY_DATA, GET_PROPERTY_ERROR, PROPERTY_POST_DATA_LOADING_ENDS, PROPERTY_POST_DATA_LOADING_STARTS } from './types';
import process from "../../../../env"

const service_url = process.env.SERVICE_URL

export const getUserEachPost = (id, props) => {
  return async(dispatch) => {
    try {
      dispatch({type: PROPERTY_POST_DATA_LOADING_STARTS})
      const response = await axios.get(`${service_url}/my-each-posts/${props.match.params.id}`, id)
      dispatch({type: PROPERTY_POST_DATA_LOADING_ENDS})
      dispatch({type: GET_A_PROPERTY_DATA, payload:response.data})
    } catch (error) {
      dispatch({type: GET_PROPERTY_ERROR, payload:error})
    }
  }
}