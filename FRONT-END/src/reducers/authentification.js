import {USER_LOADED} from "../actions/type";
import * as types from '../actions/type'


const initialState = []

const authReducer = (state = initialState, action) => {
  if(action.type=== USER_LOADED){
    return action.payload
}

else if (action.type === types.edit_Profile ) {
  return [...state, action.paload ]; }







else return state
};
export default authReducer;