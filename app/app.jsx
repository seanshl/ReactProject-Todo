var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router'); 

var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');

import TodoApp from 'TodoApp';
import Login from 'Login';

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

//App css
require('style!css!sass!applicationStyles')


// store.subscribe(function() {
// 	var state = store.getState();

// 	console.log('New state', state);

// 	TodoAPI.setTodos(state.todos);
// });

/*store.dispatch(actions.addTodo('Clean the yard'));
store.dispatch(actions.setSearchText('yard'));
store.dispatch(actions.toggleShowCompleted());*/
// var initialTodos = TodoAPI.getTodos();
// store.dispatch(actions.addTodos(initialTodos));

store.dispatch(actions.startAddTodos());


ReactDOM.render(
	<Provider  store={store}>
		<Router history={hashHistory}>
			<Route path="/">
				<Route path="todos" component={TodoApp}/>
				<IndexRoute component={Login}/> 
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
);