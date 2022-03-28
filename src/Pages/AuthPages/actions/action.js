import axios from 'axios';
import jwtdecode from 'jwt-decode';
import ROUTE from "../../../Helpers/routes.json";
import { notify } from '../../../utils/notify';
import { REDIRECT_TO } from "../../../Helpers/stats/types"
import { clearNetworkStats } from "../../../Helpers/stats/actions";
import setAuthToken from '../../../utils/setAuthToken';
import process from '../../../env'
import { AUTH_LOADING_ENDS, AUTH_LOADING_STARTS, GET_AUTH_ERROR, SET_CURRENT_USER, GET_LOGIN_ERROR } from './types';

const service_url = process.env.SERVICE_URL

export const setCurrentUser = (decoded) => {
  return {
    type:SET_CURRENT_USER,
    payload:decoded
  }
}

export const loginUser = (userData) => {
  return async(dispatch) => {
    try {
      dispatch({type: AUTH_LOADING_STARTS});
      const response = await axios.post(`${service_url}/login`, userData);
      const { token } = response.data;
      localStorage.setItem("jwtToken", token);
      setAuthToken(localStorage.jwtToken);
      const decoded =  jwtdecode(token);
      notify(response?.data?.message);
      window.location.href = ROUTE.DASHBOARD_HOME;
      dispatch(setCurrentUser(decoded));
      dispatch({type: AUTH_LOADING_ENDS});
    } catch (error) {
      dispatch({type: AUTH_LOADING_ENDS});
      if (error.response) {
        if (error.response.status === 422) {
          dispatch({type: GET_LOGIN_ERROR, payload:error.response})
          return notify('There are errors in your input', 'error')
        } else if(error.response.status === 400){
          dispatch({type: GET_LOGIN_ERROR, payload:error.response})
          return notify('Email and password do not match', 'error')
        } else if (error.response.status === 500) {
          return notify('An internal error occured, we are working on it!')
        } else {
          return notify('Sorry, something went wrong!', 'error')
        }
      }
    }
  }
}

export const registerNewUser = (userData) => dispatch =>{
  dispatch({ type: AUTH_LOADING_STARTS });
  axios.post(`${service_url}/register`, userData)
  .then(()=>{
    dispatch({ type: AUTH_LOADING_ENDS })
    dispatch({type: REDIRECT_TO, payload: ROUTE.LOGIN_SUCCESS })
    dispatch(clearNetworkStats())
  }).catch((error) => {
    dispatch({type: AUTH_LOADING_ENDS});
    if (error.response) {
      if (error.response.status === 422) {
        dispatch({type: GET_AUTH_ERROR, payload:error.response})
        notify('There are errors in your input', 'error')
      } else if (error.response.status === 500) {
        dispatch({type: GET_AUTH_ERROR, payload:error.response})
      } else {
        return notify('Sorry, something went wrong!', 'error')
      }
    } else {
      return notify('Sorry, something went wrong! Check your network', 'error')
    }
  })
}

export const logoutUser = (userData) => dispatch => {
  dispatch({ type:AUTH_LOADING_STARTS });
  axios.post(`${service_url}/logout`, userData)
  .then(() => {
    localStorage.clear();
    window.location.href = ROUTE.LOGIN
  }).catch(() => {
    dispatch({type: AUTH_LOADING_ENDS});
  });
}