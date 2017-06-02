import React from 'react';
import FilterLink from '../containers/FilterLink'

const Footer = ()=> (
	<p>
		Show:&emsp;
		<FilterLink filter = "SHOW_ALL">ALL</FilterLink>
		,&nbsp;
		<FilterLink filter = "SHOW_ACTIVE">Active</FilterLink>
		,&nbsp;
		<FilterLink filter = "SHOW_COMPLETED">Completed</FilterLink>
	</p>
)

export default Footer;