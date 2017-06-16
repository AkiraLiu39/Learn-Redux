import React,{component} from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';

export default class TodoTextInput extends Component{
	constructor(props){
		super(props);
		this.state = {this.props.text || ''};
	}

	handleSubmit = e => {
		if (e.which == 13) {
			const text = e.target.value.trim();	
			this.props.onSave(text);
			if(this.props.newTodo){
				this.setState({text:''});
			}
		};
	}

	handleChange = e => {
		this.setState({text:e.target.value});
	}

	handleBlur = e => {
		if(!this.props.newTodo){
			this.props.onSave(text:e.target.value);
		}
	}

	render() {
		return (
			<input classname = {
				classnames({edit:this.props.editing,
							'new-todo':this.props.newTodo})}
				type = 'text' 
				placeholder = {this.props.placeholder} 
				autoFocus = 'true'
				value = {this.state.text}
				onBlur = {this.handleBlur}
				onChange = {this.handleChange}
				onKeyDown = {this.handleSubmit} />
		);
	}
}