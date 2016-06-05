var React = require('react');

var Todo = React.createClass({
	onClickHandler: function() {
		var {id} = this.props;
		this.props.onToggle(id);
	},

	render: function() {
		var {text, completed} = this.props;
		return (
			<div onClick={this.onClickHandler}> 
				<input type="checkbox" checked={completed}/>
				{text}
			</div>
		);
	}
});

module.exports = Todo;