import {createStore, applyMiddleware} from 'redux'
// import cakeReducer from './cake/cakeReducer'
// import {iceCreamReducer} from './rootReducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import rootReducer from './rootReducer'


const store = createStore(rootReducer, applyMiddleware(thunk,logger))

export default store