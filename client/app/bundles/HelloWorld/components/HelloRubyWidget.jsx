import React, { PropTypes } from 'react';
import { Button } from 'antd';
import _ from 'lodash';

export default class HelloRubyWidget extends React.Component {
  static propTypes = {
    updateName: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired
  };

  constructor(props, context) {
    super(props, context);

    _.bindAll(this, 'handleChange');
  };

  handleChange(e) {
    const name = e.target.value;
    this.props.updateName(name);
  };

  render() {
    const { name } = this.props;
    return (
      <div className='container'>
        <h3>
          Hello, {name}!
        </h3>
        <hr />
        <Button type="primary">Primary</Button>
        <br/>
        <form className="form-horizontal">
          <label>
            Say hello to:
          </label>
          <input
            type="text"
            value={name}
            onChange={this.handleChange}
          />
        </form>
     </div>
    );
  }

}
