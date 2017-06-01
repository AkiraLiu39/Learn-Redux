import {VisibilityFilters} from '../action'

const initialState = {
	visibilityFilter : VisibilityFilters.SHOW_ALL,
	todos:[]
}

function todoApp (state = initialState,action){
	const actionType = action.type;
	if (SET_VISIBILITY_FILTER == actionType){
		return Object.assgin({},state,{visibilityFilter:action.filter});
	}else{
		return state;
	}
}