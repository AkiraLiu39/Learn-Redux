import {connect} from 'react-redux';
import {togoleTodo} from '../actions';
import TodoList from '../component/TodoList';

const getVisibleTodos = (todos,filter) => {
	if ('SHOW_COMPLETED' == filter){
		return todos.filter(t=>t.compeleted);
	} else if ('SHOW_ACTIVE' == filter){
		return todos.filter(t=>!!!t.compeleted);
	} else {
		return todos;
	}
}

const mapStateToProps = (state)=>{
	return {
		todos:getVisibleTodos(state.todos,state.visibilityFilter)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onTodoClick:(id) =>{
			dispatch(togoleTodo(id));
		}
	}
}

const VisibleTodoList = connect(
	mapStateToProps,mapDispatchToProps
)(TodoList);

export default VisibleTodoList;