import firebase, {firebaseRef} from 'app/firebase/';
import moment from 'moment';

export var setSearchText = function(searchText) {
	return {
		type: 'SET_SEARCH_TEXT',
		searchText
	};
};

// toggleShowCompleted TOGGLE_SHOW_COMPLETED
export var toggleShowCompleted = function() {
	return {
		type: 'TOGGLE_SHOW_COMPLETED',

	};
};

export var addTodo = function(todo) {
	return {
		type: 'ADD_TODO',
		todo
	};
};

export var startAddTodo = function(text) {
	return function(dispatch, getState) {
		var todo = {
			text,
			completed: false,
			createdAt: moment().unix(),
			completedAt: null
		};

		var todoRef = firebaseRef.child('todos').push(todo);

		return todoRef.then(function() {
			dispatch(addTodo({
				...todo,
				id: todoRef.key
			}));
		});
	};	
};

// toggleTodo(id) TOGGLE_TODO
export var toggleTodo = function(id) {
	return {
		type: 'TOGGLE_TODO',
		id
	};
};

export var addTodos = function(todos) {
	return {
		type: 'ADD_TODOS',
		todos: todos
	};
};