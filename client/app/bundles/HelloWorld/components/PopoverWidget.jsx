import React from 'react';
import { Popover, Button } from 'antd';

export default class PopoverWidget extends React.Component {

  render() {
    const content = (
      <div>
      <p>内容</p>
      <p>内容</p>
      </div>
    );
    return (
      <Popover content={content} title="标题">
        <Button type="primary">弹出卡片</Button>
      </Popover>
    );
  }
}

