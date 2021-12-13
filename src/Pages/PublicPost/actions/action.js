import { PUBLIC_POST_LOADING_DATA, PUBLIC_POST_LOADING_ENDS, PUBLIC_POST_LOADING_STARTS } from './types'
import axios from 'axios';
// import process from 'env.js';
// import { notify } from 'utils/notification';

// const service_url = process.env.SERVICE_URL

export const getUsers = () => {
  return async(dispatch) => {
    try {
      dispatch({type: PUBLIC_POST_LOADING_STARTS})
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      dispatch({type: PUBLIC_POST_LOADING_ENDS})
      dispatch({type: PUBLIC_POST_LOADING_DATA, payload:response.data})
    } catch (error) {
    //   dispatch({type: PUBLIC_POST_LOADING_ENDS, payload:error})
    //   if (error.response) {
    //     if (error.response.status === 500) {
    //        dispatch({type: GET_APPLICATION_ERROR, payload:error.response})
    //      } else if(error.response.status === 401){
    //         return notify("You are unauthorized")
    //      } else {
    //        return notify('Sorry, something went wrong!', 'error')
    //      }
    //    } else {
    //      return notify('Sorry, something went wrong! Check your network', 'error')
    //   }
    }
  }
}