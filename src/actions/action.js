import {ADD_FILM,REMOVE_FILM, EDIT_FILM, SEARCH_NAME, SEARCH_RATING, AXIOS_CARDS} from './types'
import axios from 'axios'


export const addFilm=(obj)=>(
    {type:ADD_FILM,payload:obj}
    )
export const RemoveFilm=(index)=>(
    {type:REMOVE_FILM,payload:index}
)

export const EditFilm=(newmovie,index)=>({
    type:EDIT_FILM,
    payload:newmovie,
    key:index
})
export const SearchName=(payload)=>({type:SEARCH_NAME, payload})
export const SearchRating=(payload)=>({type:SEARCH_RATING, payload})

export const axiosCards=()=> dispatch => {

    axios({method:'get',url:'https://tv-v2.api-fetch.website/movies/1'})
      .then(res => res.data)
      .then(data =>
        dispatch({
          type: AXIOS_CARDS,
          payload: data
        })
      );
  };
