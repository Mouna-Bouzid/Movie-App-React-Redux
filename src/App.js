import React, {Component} from 'react';
import AddFilm from './components/AddFilm'
import Header from './components/header'
import { Route, Switch} from 'react-router-dom'
import './App.css';
import Description from './components/descriptions/description';
// import descriptionSherlock from './components/descriptions/descriptionSherlock';
// import descriptionJulia from './components/descriptions/descriptionJulia';
import loadingHoc from './components/loadingHoc'

class App extends Component {
  state = {
  loading:true
  }
  componentDidMount=()=>{
      setTimeout(()=>
        this.setState({
        loading:false
        }), 2000
      )
    }
  render() {
  return (
    <div className="App">
      <Switch>
      <div>
      <Route exact path='/' render={()=>(<div>
        <Header/>
        <AddFilm />
      </div>)} />
            <Route path='/description/:_id' component={Description} />
      {/* <Route path='/descriptionSherlock' component={descriptionSherlock} exact />
      <Route path='/descriptionJulia' component={descriptionJulia} exact /> */}

        </div>
      </Switch>
    </div>
  );
}
}
export default loadingHoc(App);
