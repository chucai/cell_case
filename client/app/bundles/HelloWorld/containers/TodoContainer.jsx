import React, { PropTypes } from 'react';
import TodoFormWidget from '../components/TodoFormWidget';
import TodoListWidget from '../components/TodoListWidget';
import _ from 'lodash';

export default class TodoContainer extends React.Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    this.state = { items: this.props.items };
    _.bindAll(this, 'addItem');
  };

  addItem(value) {
    //数组中插入新的记录
    //同步更新state
    $.ajax({
      url: '/todos',
      method: 'POST',
      dataType: 'json',
      data: { description: value },
      cache: false,
      success: function(data){
        const items = this.state.items;
        items.unshift(data);
        this.setState({ items: items });
      }.bind(this),
      error: function(xhr, status, err){
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  };

  render() {
    return (
        <div class='todo-container'>
        <TodoFormWidget addItem={this.addItem} />
        <TodoListWidget items={this.state.items} />
       </div>
    );
  };
};
