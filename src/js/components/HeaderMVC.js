import React,{Component} from 'react';
import PropTypes from 'prop-types';
import TodoTextInput from './TextTodoInputMVC';

export default class Header extends Component{
	constructor(props){
		super(props);
		this.handleSave = this.handleSave.bind(this);
	}
	handleSave(text){
		index.css
		if (text.length !== 0) {
			this.props.addTodo(text)			
		};
	}
	render(){
		return (
			<header className="header">
				<h1>todos</h1>
				<TodoTextInput 	newTodo 
								onSave = {this.handleSave}
								placeHolder="What needs to be done?" />
			</header>
		);
	}
}

Header.propTypes = {
	addTodo:PropTypes.func.isRequired
}

