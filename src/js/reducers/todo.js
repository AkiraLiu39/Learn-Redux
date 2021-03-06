import {ADD_TODO,DELETE_TODO,EDIT_TODO,COMPLETE_TODO,COMPLETE_ALL,CLEAR_COMPLETED} from '../constants/ActionTypes'
const initialState = [
	{
		text:'init',
		completed:false,
		id:0
	}
]

export default function todos(state = initialState,action){
	const acionType = action.type;
	if (ADD_TODO == acionType) {
		let result = [
			{
				id:state.reduce((maxId,todo)=> Math.max(todo.id,maxId),-1) + 1,
				completed :false,
				text:action.text
			},
			...state
		];
		return result;
	} else if (DELETE_TODO == acionType){
		return state.filter(todo=>todo.id !== action.id);

	} else if (COMPLETE_TODO == acionType) {
		return state.map(todo => todo.id === action.id ? Object.assign(todo,{completed:!todo.completed}) : todo);
	} else if (EDIT_TODO == acionType) {
		return state.map(todo => todo.id === action.id ? Object.assign(todo,{text:action.text}) : todo );

	} else if (CLEAR_COMPLETED == acionType){
		return state.filter(todo => !todo.completed);
	} else {
		return state;
	}
}