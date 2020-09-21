import * as types from "./type";
import { URL } from "./baseurl";
import Axios from "axios";

export function getReclamation() {
  return (dispatch) => {
    Axios.get(URL + "Antica/reclamation").then((res) => {
      console.log("argoubi", res.data);

      dispatch(getListereclamation(res.data));
    });
  };
}

export function getListereclamation(paload) {
  return {
    type: types.getReclamation,
    paload,
  };
}

export function deletereclamation(id) {
  console.log(id);
  return (dispatch) => {
    Axios.delete(URL + `Antica/reclamation/${id}`)
      .then((res) => {
        dispatch(deleteListereclamation);
        window.location.reload(false);
      })
      .catch((err) => console.log(err));
  };
}

export function deleteListereclamation(paload) {
  return {
    type: types.deleteReclamation,
    paload,
  };
}

export const addReclamation = (el) => {
  return (dispatch) =>
    Axios.post(URL + "Antica/reclamation", el).then((res) =>
      dispatch(addListereclamation(res.data), window.location.reload(false))
    );
};

export const addListereclamation = (payload) => {
  return {
    type: types.addProduct,
    payload,
  };
};
