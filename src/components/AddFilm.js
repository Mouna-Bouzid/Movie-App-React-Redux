import React, { Component } from 'react';
import { connect } from 'react-redux'
import Rating from 'react-star-rating-component'
import './AddFilm.css'
import Modal from './modal'
import {REMOVE_FILM} from '../actions/types'
import ModalEdit from './modalEdit';
import {Link} from 'react-router-dom';
import { axiosCards } from '../actions/action'


class AddFilm extends Component {

    componentDidMount() {
        // const { handle } = this.props.movie.match.params
        // console.log(handle)
         this.props.axiosCards();
    }
    
    render() {
        return (
            <div className='movieboxes'>
                {this.props.movies
                .filter((el,indice)=>(el.title.toUpperCase().includes(this.props.movieSearched.toUpperCase()) &&  (el.rating.watching>=(this.props.searchRating) )))
                    .map((el,i) => (
                        <div key={el._id} className="moviebox">
                            <img src={el.images.poster} />
                            <div className="movieinfo">
                                <p>{el.title}</p>
                                <span className='Rating'> <Rating
                                    name="rate1"
                                    starCount={5}
                                    value={el.rating.watching}
                                    onStarClick={this.onStarClick}
                                />
                                </span>
                            </div>
                            {/* <Route path="/description" component={Description} /> */}
                            <div className='description'><Link className='link' to={`/description/${el._id}`}>Description</Link></div>
                            <div className='btns'>
                                <div><ModalEdit movie={el} /></div> 
                                <button className='bttn' onClick={()=>this.props.RemoveFilm(i)}>Remove</button>
                            </div>

                        </div>
                    )

                    )}
                <div className='moviebox'><Modal /></div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        movies: state.AddFilmReducer,
        movieSearched:state.searchName,
        searchRating:state.SearchRating,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        axiosCards:()=>{
            dispatch(axiosCards())
        },
        RemoveFilm:(x)=>{
        dispatch({type:REMOVE_FILM, payload:x})
        },

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddFilm);