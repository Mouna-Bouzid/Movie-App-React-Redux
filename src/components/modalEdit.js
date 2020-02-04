import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import './AddFilm.css'
import './modalEdit.css'
import {connect} from 'react-redux'
import {EditFilm} from '../actions/action'
class EditMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false,
            _id:this.props.movie._id,
            title:this.props.movie.title,
            images:{poster:this.props.movie.images.poster},  
            rating:{watching:this.props.movie.rating.watching}       
        }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

  handleChange=(event)=>{
      this.setState({
          [event.target.name]:event.target.value
      })
  }
  handleChangePoster=(event)=>{
    this.setState({
        images:{poster:event.target.value}
    })
}
handleChangeRating=(event)=>{
    this.setState({
        rating:{watching:event.target.value}
    })
}
    
    render() {
        return (
            
                <div>
                <button className='bttn' onClick={() => this.openModal()}>Edit</button>
                <Modal className="modal" visible={this.state.visible} effect="fadeInUp" onClickAway={() => this.closeModal()}>
                   
                    <div className='form-container '>
                    <h1>Edit Movie Card</h1>
                    
                    <label>Movie Title</label>
                    <input type="text" placeholder="Enter Title" value={this.state.title} onChange={this.handleChange} name="title" required />

                    <label>Image Source</label>
                    <input type="text" placeholder="Enter img src" value={this.state.images.poster} onChange={this.handleChangePoster} name="images" required />

                    <label>Rate</label>
                    <input type="text" placeholder="Enter Rate" value={this.state.rating.watching} onChange={this.handleChangeRating} name="rating" required />

                    <button type="submit" className="btn" onClick={()=>{this.props.editFilm({
                        title:this.state.title,
                        images:{poster:this.state.images.poster},
                        rating:{watching:this.state.rating.watching}, 
                        _id:this.state._id});this.closeModal()}}>Save</button>
                    <button type="button" className="btn cancel" onClick={() => this.closeModal()}>Cancel</button>
                     
                    </div>
                </Modal>
                </div>
               
            
        );
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        editFilm:(newmovie)=>dispatch(EditFilm(newmovie))

      }
  }

  export default connect(null, mapDispatchToProps)(EditMovie);