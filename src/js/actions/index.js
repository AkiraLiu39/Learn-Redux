
/*
 * action 类型
 */

export const ADD_TODO = 'ADD_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const TOGGLE_TODO = 'TOGGLE_TODO';

/*
 * 其它的常量
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action 创建函数
 */
let index = 0;
export const addTodo = (text)=>{
	return {
		type:ADD_TODO,
		text,
		id : index++
	}
}

export const toggleTodo = (id) => {
	return {
		type:TOGGLE_TODO,
		id
	}
}

export const setVisibility = (filter)=>{

	return {
		type:SET_VISIBILITY_FILTER,
		filter
	}
}

