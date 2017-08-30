import {createStore} from 'redux';
import reducer from '../reducer'

//any time action created, store notices and something (get from part aug 29 p1)

export default () => createStore(reducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());