import {SEARCH_NAME} from '../actions/types'

export const searchMovieName = (state='', action)=>{
switch(action.type){
case(SEARCH_NAME):
return action.payload
default:
    return state
}
}