import {connect} from 'react-redux';
import {toggleTodo} from '../actions';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos,filter) => {
	if ('SHOW_COMPLETED' == filter){
		return todos.filter(t=>t.completed);
	} else if ('SHOW_ACTIVE' == filter){
		return todos.filter(t=>!!!t.completed);
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
			dispatch(toggleTodo(id));
		}
	}
}

const VisibleTodoList = connect(
	mapStateToProps,mapDispatchToProps
)(TodoList);

export default VisibleTodoList;