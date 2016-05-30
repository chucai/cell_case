import React, { PropTypes} from 'react';
import HelloRubyWidget from '../components/HelloRubyWidget';
import PopoverWidget from '../components/PopoverWidget';
import _ from 'lodash';

export default class HelloRuby extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    this.state = { name: this.props.name };
    _.bindAll(this, 'updateName');
  };

  updateName(name) {
    this.setState({ name });
  };

  render() {
    return (
      <div>
        <p>Hello Ruby 测试</p>
        <br/>
        <HelloRubyWidget name={this.state.name} updateName={this.updateName} />
        <br/>
        <PopoverWidget />
      </div>
    );
  }
}
