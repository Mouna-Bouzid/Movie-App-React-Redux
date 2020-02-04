import React from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import './description.css'

function Description(props) {
  return (
      <div className="Description-Format">
    <div className="Description">

      <h1>SYNOPSIS ET DÉTAILS</h1>
      {console.log('iddddd',props.match.params._id)}
      {props.movies.map((el,i)=>(el._id===props.match.params._id)&&<span>{el.synopsis}</span>)}
      
    </div>
    <div><Link to='/'>Home</Link></div>
    </div>
  );
}
const mapStateToProps= state =>({
  movies: state.AddFilmReducer,
})
export default connect(mapStateToProps) (Description);