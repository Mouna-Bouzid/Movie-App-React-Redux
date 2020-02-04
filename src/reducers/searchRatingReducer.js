import {SEARCH_RATING} from '../actions/types'
let valeur=0
export const SearchRating=(state=valeur,action)=>{
    switch (action.type) {
    case (SEARCH_RATING):
    return action.payload

    default:
      return  state;
}
}