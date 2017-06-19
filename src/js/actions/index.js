import * as types from '../constants/ActionTypes';

export const addTodo = (text)=>({type:types.ADD_TODO,text});
export const deleteTodo = id => ({type:types.DELETE_TODO,id});
export const editTodo = (id,text) => ({type:types.EDIT_TODO,id,text});
export const completeTodo = (id) => {
	
	let result = {type:types.COMPLETE_TODO,id};
	
 	return result;
};
export const compleleAll = () => ({type:types.COMPLETE_ALL});
export const clearCompleted = () => ({type:types.CLEAR_COMPLETED})


