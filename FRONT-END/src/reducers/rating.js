import * as types from '../actions/type'

const list_rating = [];

const ratingReducer = (state = list_rating, action) => {







       if (action.type === types.getRating)
        {return action.payload } 
     
        else if (action.type === types.postRating) {
          return [...state, action.payload]; } 





        else {
          return state;
        }
  
};

export default ratingReducer;