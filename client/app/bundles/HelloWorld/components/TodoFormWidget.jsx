import React, { PropTypes } from 'react';
import _ from 'lodash';

export default class TodoFormWidget extends React.Component {
  static PropTypes = {
    addItem: PropTypes.func.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    _.bindAll(this, 'handleChange');
  };

  handleChange(e) {
    const value = this.refs.todoFormInput.value;
    this.props.addItem(value);
    this.refs.todoFormInput.value = '';
    e.preventDefault();
  };

  render() {
    const { name } = this.props;

    return (
      <div class="todo-form input-form">
      <h5>待办事项应用:  </h5>
      <form onSubmit={this.handleChange}>
      <input type="text" name="description" id="input" ref='todoFormInput' value={name} placeholder="task" />
      <input type="submit" name="commit" value="Add" />
      </form>
      </div>
    );
  }

}
