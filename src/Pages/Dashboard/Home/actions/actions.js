import { GET_INDEX_DATA, GET_INDEX_ERROR, INDEX_LOADING_ENDS, INDEX_LOADING_STARTS, INDEX_EACH_POST_LOADING_STARTS, INDEX_EACH_POST_LOADING_ENDS, MY_LIKED_POST_LOADING_STARTS, MY_LIKED_POST_LOADING_ENDS, GET_MY_LIKED_DATA } from './types'
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
      if (error.response) {
        if (error.response.status === 422) {
          dispatch({type: GET_INDEX_ERROR, payload:error.response})
          return notify('There are errors in your input', 'error')
        } else if(error.response.status === 400){
          dispatch({type: GET_INDEX_ERROR, payload:error.response})
          return notify('Email and password do not match', 'error')
        } else if(error.response.status === 401) {
          return notify('You are not authorized, please login again') 
        } else if (error.response.status === 500) {
          return notify('An internal error occured, we are working on it!')
        } else {
          return notify('Sorry, something went wrong!', 'error')
        }
      }
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
      if (error.response) {
        if (error.response.status === 422) {
          dispatch({type: GET_INDEX_ERROR, payload:error.response})
          return notify('There are errors in your input', 'error')
        } else if(error.response.status === 400){
          dispatch({type: GET_INDEX_ERROR, payload:error.response})
          return notify('Email and password do not match', 'error')
        } else if(error.response.status === 401) {
          return notify('You are not authorized, please login again') 
        } else if (error.response.status === 500) {
          return notify('An internal error occured, we are working on it!')
        } else {
          return notify('Sorry, something went wrong!', 'error')
        }
      }
    }
  }
}

export const getMyLikedPosts = () => {
  return async(dispatch) => {
    try {
      dispatch({type: MY_LIKED_POST_LOADING_STARTS})
      const response = await axios.get(`${service_url}/liked-posts`)
      dispatch({type: MY_LIKED_POST_LOADING_ENDS})
      dispatch({type: GET_MY_LIKED_DATA, payload:response.data})
    } catch (error) {
      dispatch({type: GET_INDEX_ERROR, payload:error})
      if (error.response) {
        if (error.response.status === 422) {
          dispatch({type: GET_INDEX_ERROR, payload:error.response})
          return notify('There are errors in your input', 'error')
        } else if(error.response.status === 400){
          dispatch({type: GET_INDEX_ERROR, payload:error.response})
          return notify('Email and password do not match', 'error')
        } else if(error.response.status === 401) {
          return notify('You are not authorized, please login again')
        } else if (error.response.status === 500) {
          return notify('An internal error occured, we are working on it!')
        } else {
          return notify('Sorry, something went wrong!', 'error')
        }
      }
    }
  }
}