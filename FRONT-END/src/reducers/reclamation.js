import * as types from '../actions/type'

const reclamations = [];

const reclamationReducer  = (state = reclamations, action) => {
console.log(action.paload)
  if (action.type === types.getReclamation)
   {return action.paload } 


   else if (action.type === types.deleteReclamation) {
    return state.filter((el) => el.id !== action. paload); } 



      else if (action.type === types.postReclamation) {
        return [...state, action.payload]; } 



        else {
          return state;
        }
  
};

export default reclamationReducer ;