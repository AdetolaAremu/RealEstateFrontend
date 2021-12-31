import axios from 'axios';
import { GET_A_PROPERTY_DATA, GET_PROPERTY_DATA, GET_PROPERTY_ERROR, PROPERTY_POST_DATA_LOADING_ENDS, PROPERTY_POST_DATA_LOADING_STARTS } from './types';
import process from "../../../../env";
import { getUserPosts } from "../../Home/actions/actions";
import { notify } from "../../../../utils/notify";
import { REDIRECT_TO } from "../../../../Helpers/stats/types"
import { clearNetworkStats } from "../../../../Helpers/stats/actions"
import ROUTE from "../../../../Helpers/routes.json";

const service_url = process.env.SERVICE_URL

export const editUserEachPost = (data, id) => {
  return async(dispatch) => {
    try {
      dispatch({type: PROPERTY_POST_DATA_LOADING_STARTS})
      const response = await axios.put(`${service_url}/post/${id}`, data)
      .then(() => {
        dispatch({type: PROPERTY_POST_DATA_LOADING_ENDS})
        dispatch({type: REDIRECT_TO, payload: ROUTE.DASHBOARD_HOME })
        dispatch(getUserPosts())
        notify(response.data.message, 'success')
        dispatch({type: GET_A_PROPERTY_DATA, payload:response.data})
        dispatch(clearNetworkStats())
      })
    } catch (error) {
      dispatch({type: GET_PROPERTY_ERROR, payload:error})
      if (error.response) {
        if (error.response.status === 422) {
          dispatch({type: GET_PROPERTY_ERROR, payload:error})
          return notify('There are errors in your input', 'error')
        } else if (error.response.status === 500) {
          dispatch({type: GET_PROPERTY_ERROR, payload:error.response})
        } else {
          return notify('Sorry, something went wrong!', 'error')
        }
      }
    }
  }
}