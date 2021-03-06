import React ,{Component} from 'react';
import PropTyes from 'prop-types';
import classnames from 'classnames';
import {SHOW_ALL,SHOW_COMPLETED,SHOW_ACTIVE} from '../constants/TodoFilters';

const FILTER_TITLES = {
	[SHOW_ALL] : 'All',
	[SHOW_ACTIVE] : 'Active',
	[SHOW_COMPLETED] : 'Completed'
};

export default class Footer extends Component {
	constructor(props){
		super(props)
		this.renderTodoCount = this.renderTodoCount.bind(this);
		this.renderFilterLink = this.renderFilterLink.bind(this);
		this.renderClearButton = this.renderClearButton.bind(this);
	}
	renderTodoCount(){
		const {activeCount} = this.props;
		const itemWord = activeCount === 1 ? 'item' : 'items';
		
		
		return (
			<span className="todo-count">
				<strong>{activeCount || 'No'}</strong>{itemWord} left
			</span>
		);
	}

	renderFilterLink(filter) {
		const title = FILTER_TITLES[filter];
		const {filter:selectedFilter,onShow} = this.props;

		return (
			<a className = {classnames({selected:filter === selectedFilter})} style={{cursor:'point'}} onClick={()=>onShow(filter)}>
				{title}
			</a>
		)
	}

	renderClearButton(){
		const {completedCount,onClearCompleted} = this.props;
		if (completedCount > 0) {
			return (
				<button className = "clear-completed" onClick = {onClearCompleted}>
					Clear completed
				</button>
			);
		};
	}

	render(){
		return (
			<footer className = "footer">
				{this.renderTodoCount()}
				<ul className = "filters">
					{[SHOW_ALL,SHOW_ACTIVE,SHOW_COMPLETED].map(filter => 
						<li key={filter}>
							{this.renderFilterLink(filter)}
						</li>
					)}
				</ul>
				{this.renderClearButton()}
			</footer>
		);
	}
}
Footer.propTypes = {
	completedCount : PropTyes.number.isRequired,
	activeCount : PropTyes.number.isRequired,
	filter : PropTyes.string.isRequired,
	onClearCompleted:PropTyes.func.isRequired,
	onShow:PropTyes.func.isRequired

};