import { combineReducers } from 'redux'
import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'
import userReducer from './user/userReducer'
import pasteryReducer from './Pastery/pasteryReducer'
import parentReducer from './parent/parentReducer'
import candiesReducer from './candies/CandiesReducer'

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  user: userReducer,
  pastery:pasteryReducer,
  parent : parentReducer,
  candies: candiesReducer
})

export default rootReducer