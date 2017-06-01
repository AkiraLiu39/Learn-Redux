import todos from './todos'
import visibility from './visibility'
import {combineReducers} from 'redux'

const todoApp = combineReducers({
	todos,
	visibility
})
export default todoApp