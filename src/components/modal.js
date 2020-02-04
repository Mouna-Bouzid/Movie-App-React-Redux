import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import './AddFilm.css'
import './modal.css'
import {connect} from 'react-redux'
import {ADD_FILM} from '../actions/types'

class AddMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false,
            _id:Date.now(),
            title:'',
            images:{poster:''},  
            rating:{watching:''}         
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
                <div className='addbox' onClick={() => this.openModal()}>| + |</div>
                <Modal className="modal" visible={this.state.visible} effect="fadeInUp" onClickAway={() => this.closeModal()}>
                   
                    <div className='form-container '>
                    <h1>Create a Movie Card</h1>
                    
                    <label>Movie Title</label>
                    <input type="text" placeholder="Enter Title" value={this.state.title} onChange={this.handleChange} name="title" required />

                    <label>Image Source</label>
                    <input type="text" placeholder="Enter img src" value={this.state.images.poster} onChange={this.handleChangePoster} name="src" required />

                    <label>Rate</label>
                    <input type="text" placeholder="Enter Rate" value={this.state.rating.watching} onChange={this.handleChangeRating} name="rate" required />

                    <button type="submit" className="btn" onClick={()=>this.props.addFilm(this.state,this.setState({visible:false}))}>Create</button>
                    <button type="button" className="btn cancel" onClick={() => this.closeModal()}>Cancel</button>
                     
                    </div>
                </Modal>
                </div>
               
            
        );
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        addFilm:(y)=>{
            let newMovie=y
            dispatch ({type:ADD_FILM, payload:newMovie})
        }

      }
  }

  export default connect(null, mapDispatchToProps)(AddMovie);