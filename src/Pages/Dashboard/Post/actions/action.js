import axios from 'axios';
import { GET_A_PROPERTY_DATA, GET_PROPERTY_ERROR, PROPERTY_POST_DATA_LOADING_ENDS, PROPERTY_POST_DATA_LOADING_STARTS } from './types';
import { getUserStats } from '../../../../layouts/actions/action';
import process from "../../../../env";
import { getUserPosts } from "../../Home/actions/actions";
import { notify } from "../../../../utils/notify";
import { REDIRECT_TO } from "../../../../Helpers/stats/types"
import { clearNetworkStats } from "../../../../Helpers/stats/actions"
import ROUTE from "../../../../Helpers/routes.json";

const service_url = process.env.SERVICE_URL

export const createRealEstatePost = (data) => {
  return async(dispatch) => {
    try {
      dispatch({type: PROPERTY_POST_DATA_LOADING_STARTS})
      await axios.post(`${service_url}/post`, data)
      .then((response) => {
        dispatch({type: PROPERTY_POST_DATA_LOADING_ENDS})
        dispatch({type: REDIRECT_TO, payload: ROUTE.DASHBOARD_HOME })
        dispatch(getUserPosts())
        dispatch(getUserStats())
        notify(response.data.message, 'success')
        dispatch({type: GET_A_PROPERTY_DATA, payload:response.data})
        dispatch(clearNetworkStats())
      })
    } catch (error) {
      dispatch({type: PROPERTY_POST_DATA_LOADING_ENDS})
      dispatch({type: GET_PROPERTY_ERROR, payload:error})
      if (error.response) {
        if (error.response.status === 422) {
          dispatch({type: GET_PROPERTY_ERROR, payload:error.response})
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

export const editUserEachPost = (data, id) => {
  return async(dispatch) => {
    try {
      dispatch({type: PROPERTY_POST_DATA_LOADING_STARTS})
      await axios.put(`${service_url}/post/${id}`, data)
      .then((res) => {
        dispatch({type: PROPERTY_POST_DATA_LOADING_ENDS})
        // history.push('/user/dashboard');

        dispatch({type: REDIRECT_TO, payload:ROUTE.DASHBOARD_HOME})
        dispatch(getUserPosts())
        notify(res.data.message, 'success')
        dispatch(clearNetworkStats())
      })
    } catch (error) {
      dispatch({type: GET_PROPERTY_ERROR, payload:error.response})
      if (error.response) {
        if (error.response.status === 422) {
          dispatch({type: GET_PROPERTY_ERROR, payload:error.response})
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