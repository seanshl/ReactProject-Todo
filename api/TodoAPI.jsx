
var $ = require('jquery');

module.exports = {
	// setTodos: function(todos) {
	// 	if ($.isArray(todos)) {
	// 		localStorage.setItem('todos', JSON.stringify(todos));
	// 		return todos;
	// 	}
	// },

	// getTodos: function() {
	// 	var stringTodos =  localStorage.getItem('todos');
	// 	var todos = [];

	// 	try {
	// 		todos = JSON.parse(stringTodos);
	// 	} catch (e) {

	// 	}

	// 	return $.isArray(todos)? todos: [];
	// },

	filterTodos: function(todos, showCompleted, searchText) {
		var filteredTodos = todos;

		// filter by showCompleted;
		filteredTodos = filteredTodos.filter(function(todo) {
			return !todo.completed || showCompleted;
		});
		// filter by searchText
		filteredTodos = filteredTodos.filter(function(todo) {
			var todoText = todo.text.toLowerCase();

			return searchText.length === 0 || todoText.indexOf(searchText) > -1;
		});
		//filter by completed status
		filteredTodos.sort(function(a, b) {
			if (!a.completed && b.completed) {
				return -1;
			} else if (a.completed && !b.completed) {
				return 1;
			} else {
				return 0;
			}
		});

		// Sort todos with non-completed first

		return filteredTodos;
	}
};