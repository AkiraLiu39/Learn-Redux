import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Header from '../components/HeaderMVC';
import MainSection from '../components/MainSectionMVC';
import * as TodoAction from '../actions';


const App = ({todos,actions}) => (
	<div>
		<Header addTodo = {actions.addTodo}/>
		<MainSection todos = {todos} actions={actions} />
	</div>
);

App.PropTypes = {
	todos:PropTypes.array.isRequired,
	actions:PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	todos:state.todos
});
const mapDispatchToProps = dispatch => ({
	actions:bindActionCreators(TodoAction,dispatch)
});

export default connect(mapStateToProps,mapDispatchToProps)(App)

