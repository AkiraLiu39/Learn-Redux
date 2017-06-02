import {VisibilityFilters,SET_VISIBILITY_FILTER,ADD_TODO,TOGGLE_TODO} from '../actions';
import {combineReducers} from 'redux';

const {SHOW_ALL} = VisibilityFilters;

const todoApp = combineReducers({visibilityFilter,todos})
/* 注意上面的写法和下面完全等价：
function todoApp (state = {},action){

	return {
		visibilityFilter:visibilityFilter(state.visibilityFilter,action);
		todos:todos(state.todos,action);
	};
}
你也可以给它们设置不同的 key，或者调用不同的函数。下面两种合成 reducer 方法完全等价：

const reducer = combineReducers({
  a: doSomethingWithA,
  b: processB,
  c: c
})
function reducer(state = {}, action) {
  return {
    a: doSomethingWithA(state.a, action),
    b: processB(state.b, action),
    c: c(state.c, action)
  }
}
*/

function todos(state=[],action){
	const actionType = action.type;
	if (ADD_TODO == actionType) {
		return [...state,{text:action.text,completed:false}];
	} else if (TOGGLE_TODO == actionType){
		return state.map((todo,index)=>{
			if (index === action.index) {
				return Object.assign({},todo,{completed:!!!todo.completed});
			}else{
				return todo;
			}
		});
	}
	return state;
}

function visibilityFilter(state = SHOW_ALL,action){
	if (SET_VISIBILITY_FILTER == action.type) {
		return action.filter;
	} else {
		return state;
	}
}

export default todoApp;