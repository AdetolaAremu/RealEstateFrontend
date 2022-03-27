import { PUBLIC_POST_GET_DATA, PUBLIC_POST_LOADING_ENDS, PUBLIC_POST_LOADING_STARTS, PUBLIC_POST_GET_ERROR,
   PUBLIC_POST_GET_SINGLE_DATA, PUBLIC_POST_COMMENTS_LOADING_STARTS, PUBLIC_POST_COMMENTS_LOADING_ENDS, 
   GET_PUBLIC_POST_COMMENTS_DATA, PUBLIC_POST_COMMENT_CRUD_STARTS, PUBLIC_POST_COMMENT_CRUD_ENDS, 
   LIKE_POST_LOADING_STARTS, LIKE_POST_LOADING_ENDS, LIKE_POST_DATA, CRUD_LIKE_LOADING_STARTS, 
   CRUD_LIKE_LOADING_ENDS, CHECK_LIKE_DATA, FILTER_POST_LOADING_STARTS, FILTER_POST_LOADING_ENDS, 
   GET_CITIES_IN_DB, RESET_SEARCH_DATA, GET_TYPES_IN_DB 
} from './types'
import axios from 'axios';
import process from '../../../env';
import { notify } from '../../../utils/notify';

const service_url = process.env.SERVICE_URL

//reset filter
export const resetFilter =()=>dispatch=> dispatch({type:RESET_SEARCH_DATA})

export const getAllPosts = () => {
  return async(dispatch) => {
    try {
      dispatch({type: PUBLIC_POST_LOADING_STARTS})
      const response = await axios.get(`${service_url}/all-posts`)
      dispatch({type: PUBLIC_POST_LOADING_ENDS})
      dispatch({type: PUBLIC_POST_GET_DATA, payload:response.data})
    } catch (error) {
      dispatch({type: PUBLIC_POST_LOADING_ENDS, payload:error.response})
      if (error.response) {
        if (error.response.status === 500) {
           dispatch({type: PUBLIC_POST_GET_ERROR, payload:error.response})
         } else {
           return notify('Sorry, something went wrong!', 'error')
         }
       } else {
         return notify('Sorry, something went wrong! Check your network', 'error')
      }
    }
  }
}

export const getSinglePublicPost = (id) => {
  return async(dispatch) => {
    try {
      dispatch({type: PUBLIC_POST_LOADING_STARTS})
      const response = await axios.get(`${service_url}/posts/${id}`)
      dispatch({type: PUBLIC_POST_LOADING_ENDS})
      dispatch({type: PUBLIC_POST_GET_SINGLE_DATA, payload:response.data})
    } catch (error) {
      dispatch({type: PUBLIC_POST_LOADING_ENDS, payload:error.response})
      if (error.response) {
        if (error.response.status === 500) {
           dispatch({type: PUBLIC_POST_GET_ERROR, payload:error.response})
         } else {
           return notify('Sorry, something went wrong!', 'error')
         }
       } else {
         return notify('Sorry, something went wrong! Check your network', 'error')
      }
    }
  }
}

// get all comments that belong to a post
export const getSinglePublicCommentPost = (id) => {
  return async(dispatch) => {
    try {
      dispatch({type: PUBLIC_POST_COMMENTS_LOADING_STARTS})
      const response = await axios.get(`${service_url}/post-comments/${id}`)
      dispatch({type: PUBLIC_POST_COMMENTS_LOADING_ENDS})
      dispatch({type: GET_PUBLIC_POST_COMMENTS_DATA, payload:response.data})
    } catch (error) {
      dispatch({type: PUBLIC_POST_COMMENTS_LOADING_ENDS, payload:error.response})
      if (error.response) {
        if (error.response.status === 500) {
           dispatch({type: PUBLIC_POST_GET_ERROR, payload:error.response})
         } else {
           return notify('Sorry, something went wrong!', 'error')
         }
       } else {
         return notify('Sorry, something went wrong! Check your network', 'error')
      }
    }
  }
}

// post a comment
export const postComment = (data) => {
  return async(dispatch) => {
    try {
      dispatch({type: PUBLIC_POST_COMMENT_CRUD_STARTS})
      await axios.post(`${service_url}/comment`, data)
      .then((res) => {
        dispatch({type: PUBLIC_POST_COMMENT_CRUD_ENDS})
        notify(res?.data?.message)
        dispatch(getSinglePublicCommentPost(data.post_id))
      })
    } catch (error) {
      dispatch({type: PUBLIC_POST_COMMENT_CRUD_ENDS, payload:error.response})
      if (error.response) {
        if (error.response.status === 500) {
           dispatch({type: PUBLIC_POST_GET_ERROR, payload:error.response})
         } else {
           return notify('Sorry, something went wrong!', 'error')
         }
       } else {
         return notify('Sorry, something went wrong! Check your network', 'error')
      }
    }
  }
}

// likes per comment
export const likeCount = (id) => {
  return async(dispatch) => {
    try {
      dispatch({type: LIKE_POST_LOADING_STARTS})
      await axios.get(`${service_url}/likes/${id}`)
      .then((res) => {
        dispatch({type: LIKE_POST_LOADING_ENDS})
        dispatch({type: LIKE_POST_DATA, payload:res.data})
        // notify(res?.data?.message)
      })
    } catch (error) {
      dispatch({type: LIKE_POST_LOADING_ENDS, payload:error.response})
      if (error.response) {
        if (error.response.status === 500) {
           dispatch({type: PUBLIC_POST_GET_ERROR, payload:error.response})
         } else {
           return notify('Sorry, something went wrong!', 'error')
         }
       } else {
         return notify('Sorry, something went wrong! Check your network', 'error')
      }
    }
  }
}

// like a post
export const likePost = (id, data) => {
  return async(dispatch) => {
    try {
      dispatch({type: CRUD_LIKE_LOADING_STARTS})
      await axios.post(`${service_url}/likes/${id}/post`)
      .then((res) => {
        dispatch({type: CRUD_LIKE_LOADING_ENDS});
        notify(res?.data?.message);
        dispatch(likeCount(id));
        dispatch(checkLiked(id));
      })
    } catch (error) {
      dispatch({type: CRUD_LIKE_LOADING_ENDS, payload:error.response})
      if (error.response) {
        if (error.response.status === 500) {
          dispatch({type: PUBLIC_POST_GET_ERROR, payload:error.response})
         }
         if (error.response.status === 400) {
          dispatch({type: PUBLIC_POST_GET_ERROR, payload:error.response})
          return notify('You have already liked this post', 'error')
         }
         if (error.response.status === 401) {
          dispatch({type: PUBLIC_POST_GET_ERROR, payload:error.response})
          return notify('Only logged in user can like a post', 'error')
         } else {
           return notify('Sorry, something went wrong!', 'error')
         }
       } else {
         return notify('Sorry, something went wrong! Check your network', 'error')
      }
    }
  }
}

// delete or unlike a post
export const unlikeAPost = (id, data) => {
  return async(dispatch) => {
    try {
      dispatch({type: CRUD_LIKE_LOADING_STARTS})
      await axios.delete(`${service_url}/likes/${id}/post`)
      .then((res) => {
        dispatch({type: CRUD_LIKE_LOADING_ENDS});
        notify(res?.data?.message);
        dispatch(checkLiked(id));
        dispatch(likeCount(id));
      })
    } catch (error) {
      dispatch({type: CRUD_LIKE_LOADING_ENDS, payload:error.response})
      if (error.response) {
        if (error.response.status === 500) {
          dispatch({type: PUBLIC_POST_GET_ERROR, payload:error.response})
         }
         if (error.response.status === 400) {
          dispatch({type: PUBLIC_POST_GET_ERROR, payload:error.response})
          return notify('You have already liked this post', 'error')
         } else {
           return notify('Sorry, something went wrong!', 'error')
         }
       } else {
         return notify('Sorry, something went wrong! Check your network', 'error')
      }
    }
  }
}

// check if a user has already liked a post
export const checkLiked = (id) => {
  return async(dispatch) => {
    try {
      dispatch({type: LIKE_POST_LOADING_STARTS})
      const response = await axios.get(`${service_url}/check-liked/${id}`)
      dispatch({type: LIKE_POST_LOADING_ENDS})
      dispatch({type: CHECK_LIKE_DATA, payload:response.data})
    } catch (error) {
      dispatch({type: LIKE_POST_LOADING_ENDS, payload:error.response})
      if (error.response) {
        if (error.response.status === 500) {
          dispatch({type: LIKE_POST_LOADING_ENDS, payload:error.response})
        }
      }
    }
  }
}

// get all cities in the DB
export const getCitiesInTheDB = () => {
  return async(dispatch) => {
    try {
      dispatch({type: FILTER_POST_LOADING_STARTS})
      const response = await axios.get(`${service_url}/cities`)
      dispatch({type: FILTER_POST_LOADING_ENDS})
      dispatch({type: GET_CITIES_IN_DB, payload:response.data})
    } catch (error) {
      dispatch({type: FILTER_POST_LOADING_ENDS, payload:error.response})
      if (error.response) {
        if (error.response.status === 500) {
           dispatch({type: FILTER_POST_LOADING_ENDS, payload:error.response})
         } else {
           return notify('Sorry, something went wrong!', 'error')
         }
       } else {
         return notify('Sorry, something went wrong! Check your network', 'error')
      }
    }
  }
}

// search for posts
export const searchPost = (text) => {
  return async(dispatch) => {
    try {
      dispatch({type: FILTER_POST_LOADING_STARTS})
      await axios.post(`${service_url}/posts/search`, {q:text})
      .then((res) => {
        dispatch({type: FILTER_POST_LOADING_ENDS})
        dispatch({type: PUBLIC_POST_GET_DATA, payload:res.data});
        notify(res?.data?.message);
      })
    } catch (error) {
      dispatch({type: FILTER_POST_LOADING_ENDS, payload:error.response})
      if (error.response) {
        if (error.response.status === 500) {
          dispatch({type: PUBLIC_POST_GET_ERROR, payload:error.response})
         }
         if (error.response.status === 400) {
          dispatch({type: PUBLIC_POST_GET_ERROR, payload:error.response})
          return notify('You have already liked this post', 'error')
         } else {
           return notify('Sorry, something went wrong!', 'error')
         }
       } else {
         return notify('Sorry, something went wrong! Check your network', 'error')
      }
    }
  }
}

// get posts by city
export const filterByCity = (city) => {
  return async(dispatch) => {
    try {
      dispatch({type: FILTER_POST_LOADING_STARTS})
      await axios.get(`${service_url}/filter/${city}`)
      .then((res) => {
        dispatch({type: FILTER_POST_LOADING_ENDS})
        dispatch({type: PUBLIC_POST_GET_DATA, payload:res.data});
        notify(res?.data?.message);
      })
    } catch (error) {
      dispatch({type: FILTER_POST_LOADING_ENDS, payload:error.response})
      if (error.response) {
        if (error.response.status === 500) {
          dispatch({type: PUBLIC_POST_GET_ERROR, payload:error.response})
         }
         if (error.response.status === 400) {
          dispatch({type: PUBLIC_POST_GET_ERROR, payload:error.response})
          return notify('You have already liked this post', 'error')
         } else {
           return notify('Sorry, something went wrong!', 'error')
         }
       } else {
         return notify('Sorry, something went wrong! Check your network', 'error')
      }
    }
  }
}

// filter post by type
export const filterByType = (type) => {
  return async(dispatch) => {
    try {
      dispatch({type: FILTER_POST_LOADING_STARTS})
      await axios.get(`${service_url}/posts/type/${type}`)
      .then((res) => {
        dispatch({type: FILTER_POST_LOADING_ENDS})
        dispatch({type: PUBLIC_POST_GET_DATA, payload:res.data});
        notify(res?.data?.message);
      })
    } catch (error) {
      dispatch({type: FILTER_POST_LOADING_ENDS, payload:error.response})
      if (error.response) {
        if (error.response.status === 500) {
          dispatch({type: PUBLIC_POST_GET_ERROR, payload:error.response})
         }
         if (error.response.status === 400) {
          dispatch({type: PUBLIC_POST_GET_ERROR, payload:error.response})
          return notify('You have already liked this post', 'error')
         } else {
           return notify('Sorry, something went wrong!', 'error')
         }
       } else {
         return notify('Sorry, something went wrong! Check your network', 'error')
      }
    }
  }
}

//get all the types in the DB
export const getAllTypes = () => {
  return async(dispatch) => {
    try {
      dispatch({type: FILTER_POST_LOADING_STARTS})
      await axios.get(`${service_url}/type`)
      .then((res) => {
        dispatch({type: FILTER_POST_LOADING_ENDS})
        dispatch({type: GET_TYPES_IN_DB, payload:res.data});
      })
    } catch (error) {
      dispatch({type: FILTER_POST_LOADING_ENDS, payload:error.response})
      if (error.response) {
        if (error.response.status === 500) {
          dispatch({type: PUBLIC_POST_GET_ERROR, payload:error.response})
         }
         if (error.response.status === 400) {
          dispatch({type: PUBLIC_POST_GET_ERROR, payload:error.response})
          return notify('You have already liked this post', 'error')
         } else {
           return notify('Sorry, something went wrong!', 'error')
         }
       } else {
         return notify('Sorry, something went wrong! Check your network', 'error')
      }
    }
  }
}