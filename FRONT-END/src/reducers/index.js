import { combineReducers } from "redux";
import vendeurReducer from "./vendeureducer"
import productReducer from "./productreduces";
import userReducer from "./userReducer"
import authReducer from "./authentification"
import reclamationReducer from "./reclamation"
import ratingReducer from "./rating";
const allReducers= combineReducers({
    product: productReducer,
    card :vendeurReducer,
    users:userReducer,
    auth:authReducer,
    reclamation:reclamationReducer,
rating:ratingReducer,
});



export default allReducers;