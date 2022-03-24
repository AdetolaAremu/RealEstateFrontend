import axios from 'axios';
import process from "../../../../env";
import { notify } from "../../../../utils/notify";
import { REDIRECT_TO } from "../../../../Helpers/stats/types";
import { clearNetworkStats } from "../../../../Helpers/stats/actions";
import ROUTE from "../../../../Helpers/routes.json";
import { GET_PROFILE_ERROR, PROFILE_LOADING_ENDS, PROFILE_LOADING_STARTS } from './types';
import { getLoggedInUser } from '../../../../layouts/actions/action';


const service_url = process.env.SERVICE_URL

export const editProfile = (data) => {
  return async(dispatch) => {
    try {
      dispatch({type: PROFILE_LOADING_STARTS})
      await axios.put(`${service_url}/user/info`, data)
      .then((res) => {
        dispatch({type: PROFILE_LOADING_ENDS})
        dispatch({type: REDIRECT_TO, payload: ROUTE.VIEW_PROFILE })
        dispatch(getLoggedInUser())
        notify(res.data.message, 'success')
        dispatch(clearNetworkStats())
      })
    } catch (error) {
      dispatch({type: GET_PROFILE_ERROR, payload:error.response})
      if (error.response) {
        if (error.response.status === 422) {
          dispatch({type: GET_PROFILE_ERROR, payload:error})
          return notify('There are errors in your input', 'error')
        } else if (error.response.status === 500) {
          dispatch({type: GET_PROFILE_ERROR, payload:error.response})
        } else {
          return notify('Sorry, something went wrong!', 'error')
        }
      }
    }
  }
}


export const editPassword = (data) => {
  return async(dispatch) => {
    try {
      dispatch({type: PROFILE_LOADING_STARTS})
      const response = await axios.put(`${service_url}/user/password`, data)
      .then(() => {
        dispatch({type: PROFILE_LOADING_ENDS})
        dispatch({type: REDIRECT_TO, payload: ROUTE.EDIT_PROFILE })
        notify(response.data.message, 'success')
        dispatch(clearNetworkStats())
      })
    } catch (error) {
      dispatch({type: GET_PROFILE_ERROR, payload:error})
      if (error.response) {
        console.log('actions', error.response)
        if (error.response.status === 422) {
          dispatch({type: GET_PROFILE_ERROR, payload:error.response})
          return notify('There are errors in your input', 'error')
        } else if (error.response.status === 500) {
          dispatch({type: GET_PROFILE_ERROR, payload:error.response})
        } else {
          return notify('Sorry, something went wrong!', 'error')
        }
      }
    }
  }
}