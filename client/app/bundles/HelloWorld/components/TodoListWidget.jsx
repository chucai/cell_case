import React, { PropTypes } from 'react';
import _ from 'lodash';

export default class TodoListWidget extends React.Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    this.state = { items: this.props.items };

    _.bindAll(this, 'handleChange');
  };

  handleChange(e) {
  };

  render(){
    const items = this.state.items;
    return (
      <div class='todo-list'>
        <ul class='todo-list-ul'>
        { items.map(function(item){
          return(
            <li key={item.id}>
            <input type='checkbox' />
            {item.description}</li>
            );
        })}
        </ul>
      </div>
    );
  };
};
