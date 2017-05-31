const visibility = (state=='SHOW_ALL',action)=>{
	const actionType = action.type;
	if ('SET_VISIBILITY' == actionType){
		return action.filter;
	}else{
		return state;
	}

}
export default visibility