import React, { Component } from 'react'
import './header.css'
import Rating from 'react-star-rating-component'
import {SearchName, SearchRating} from '../actions/action'
import { connect } from 'react-redux'


export class header extends Component {
    constructor(props){
        super(props);
        this.state={
            value:0
        }
    }

handleData=(e)=>{
    e.preventDefault()
    this.props.data(e)
}

//   (el.rate>=(this.props.starRate)))

    render() {
        return (
            <div className="topnav">
                <div>
                    <form className="search-container">
                    <input type="text" placeholder="Search.." name="search" value={this.state.inputSearch} onChange={(e)=>this.props.SearchName(e.target.value)} />
                    </form>
                    
                </div>

                <div className='searchRating'>
                <Rating 
              name="rate1" 
              starCount={5}
              // value={rating}
              onStarClick={(nextValue)=>this.props.SearchRating(nextValue)}/>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps=(dispatch)=>({
SearchName:(input)=> dispatch(SearchName(input)),
SearchRating:(rate)=> dispatch(SearchRating(rate))
})

export default connect(null,mapDispatchToProps) (header);
