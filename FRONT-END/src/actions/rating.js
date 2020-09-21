import * as types from "./type";
import { URL } from "./baseurl";
import Axios from "axios";



/********************************* getRating *********************** */
export function getRating() {
    return (dispatch) => {
      Axios.get(URL + `Antica/rating/getRating`).then((res) => {
        console.log(res);
  
        dispatch(getlisteRating(res.data));
      });
    };
  }
  
  export function getlisteRating(payload) {
    return {
      type: types.getRating,
      payload,
    };
  }
  
  /********************************* PostRating *********************** */
  
  export const postRating = (payload) => {
    return {
      type: types.postRating,
      payload,
    };
  };
  export const postlisteRating = (el) => {
    return (dispatch) =>
      Axios.post(URL + `Antica/rating/postRating/`, el).then((res) => {
        console.log(res.data);
        dispatch(postRating(res.data));
        //  window.location.reload(false)
      });
  };
  