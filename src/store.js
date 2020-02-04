import {createStore, combineReducers, applyMiddleware, compose } from 'redux'
import AddFilmReducer from './reducers/AddFilmReducer'
import {searchMovieName } from './reducers/searchReducer'
import {SearchRating} from './reducers/searchRatingReducer'
import thunk from 'redux-thunk'

const middleware=[thunk];

const store=createStore(
    combineReducers({
        AddFilmReducer:AddFilmReducer,
        searchName:searchMovieName,
        SearchRating:SearchRating    
}), compose (applyMiddleware(...middleware),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

export default store;