
import { FETCH_DATA_ERROR, FETCH_DATA_SUCCESS } from "./actionType"

export function fetchDataSuccess(data){  
    return {
        type: FETCH_DATA_SUCCESS,
        data
    }
}

export function fetchDataError(error) {
    return {
      type: FETCH_DATA_ERROR,
      payload: { error }
    };
  }