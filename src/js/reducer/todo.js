const todo = (state,action)=>{
	const actionType = action.type;
	if ('ADD_TODO' == actionType) {
		return {
			id:action.id,
			text:action.text,
			complated:false,
		};
	}else if('TOGGLE_TODO' == actionType){
		if (state.id != action.id) return state;

		return Object.assign({},state,{complated:!!!complated.state});
	}else{
		return statel
	}

}

const todos = (state,action)=>{
	const actionType = action.type;
	if ('ADD_TODO' == actionType){
		return [...state,todo(undefined,action)]
	}else if ('TOGGLE_TODO' == actionType) {
		return state.map(t=>todo(t,action))
	}else {
		return state;
	}
}

export default todos;