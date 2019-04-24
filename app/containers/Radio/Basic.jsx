import React, { Component } from 'react';
import { Radio, RadioGroup } from 'kui-mobile';

export default class Demo extends Component {
  render() {
    return (
      <React.Fragment>
        <RadioGroup>
          <Radio label="单选项一" value="选项一" />
          <Radio label="单选项二" value="选项二" />
        </RadioGroup>
      </React.Fragment>
    );
  }
}