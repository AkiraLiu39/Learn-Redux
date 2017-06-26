import 'babel-polyfill'
import React from 'react';
import {render} from 'react-dom'
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import todoApp from './reducers';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk'
// import App from './components/App';
import App from './containers/App';
// import {addTodo,toggleTodo,setVisibility,VisibilityFilters} from './actions'
import '../css/todoMVC.css'
import fetch from 'isomorphic-fetch'
// const logger = createLogger();
let store = createStore(todoApp,applyMiddleware(thunkMiddleware,logger));
// 打印初始状态
// console.log(store.getState())
// 每次 state 更新时，打印日志
// 注意 subscribe() 返回一个函数用来注销监听器
// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// )

// 发起一系列 action
// store.dispatch(addTodo('Learn about actions'));
// store.dispatch(addTodo('Learn about reducers'));
// store.dispatch(addTodo('Learn about store'));
// store.dispatch(toggleTodo(0));
// store.dispatch(toggleTodo(1));
// store.dispatch(setVisibility(VisibilityFilters.SHOW_COMPLETED));

// 停止监听 state 更新
// unsubscribe();
// const REQUEST_POSTS = 'REQUEST_POSTS'
// function requestPosts(subreddit) {
//   return {
//     type: REQUEST_POSTS,
//     subreddit
//   }
// }

// const RECEIVE_POSTS = 'RECEIVE_POSTS'
// function receivePosts(subreddit, json) {
//   return {
//     type: RECEIVE_POSTS,
//     subreddit,
//     posts: json,
//     receivedAt: Date.now()
//   }
// }
// const myInit = {
// 	headers:{'Access-Control-Allow-Origin':'*'}
// }
// function fetchPosts(){
// 	return function(dispatch){
// 		dispatch(requestPosts('yohoho'));
// 		return fetch('http://www.126.com/',myInit)
// 				.then(response=>response.text())
// 				.catch(reason=>{
// 					console.log('wuwuuwuwu');
// 				})
// 				.then(text=>dispatch(receivePosts('yoyoyo',text)));
// 	}
// }
// store.dispatch(fetchPosts());
render(
	<Provider store = {store}>
		<App />
	</Provider>,
	document.getElementById('content')

)
