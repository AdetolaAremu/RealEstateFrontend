import { CLEAR_NETWORK_STATS, GET_ERROR_STATUS_CODE, REDIRECT_TO } from "./types"


const INITIAL_STATE = {
    error_status_code: null,
    redirectTo: null,
}

const helperReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REDIRECT_TO:
            return {
                ...state,
                redirectTo: action.payload
            }
        case GET_ERROR_STATUS_CODE:
            return {
                ...state,
                error_status_code: action.payload
            }
        case CLEAR_NETWORK_STATS:
            return {
                ...state,
                error_status_code: null,
                redirectTo: null
            }
        default:
            return state
    }
}

export default helperReducer;