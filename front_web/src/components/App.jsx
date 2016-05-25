import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker, message, Button } from 'antd';

const App = React.createClass({
  render() {
    return <div>
      <Button type='primary' icon='search'>Hello world</Button>
      </div>;
  }
});

window.App = App;

export default App;
