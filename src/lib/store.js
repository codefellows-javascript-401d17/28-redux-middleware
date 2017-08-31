import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducer'
import reporter from '../reducer/'

export default () => createStore(reducer, applyMiddleware(reporter), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());