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

export var addTodo = function(text) {
	return {
		type: 'ADD_TODO',
		text
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