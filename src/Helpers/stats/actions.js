import { CLEAR_NETWORK_STATS } from "./types"


export const clearNetworkStats = ()=>{
    return (dispatch) => {
        dispatch({type:CLEAR_NETWORK_STATS})
    }
}