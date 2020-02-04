import {ADD_FILM,REMOVE_FILM,EDIT_FILM, AXIOS_CARDS} from '../actions/types'

const cards=[]

const AddFilmReducer =(state=cards,action)=>{
switch(action.type){
    case (ADD_FILM):
        return state=[...state,action.payload];
    case (REMOVE_FILM): 
        return (state.filter((el,index)=> index!==action.payload))
    case (EDIT_FILM):
        return (state.map((el)=>  (el._id===action.payload._id) ? {...action.payload}:el))
    case (AXIOS_CARDS):
        return action.payload


    default: return state
    }
    
}
export default AddFilmReducer;