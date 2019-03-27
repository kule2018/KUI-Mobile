import React, { Component } from 'react';
import { Tabs, TabPanel } from 'kui-mobile';

export default class Demo extends Component {
  render() {
    return (
      <Tabs >
        <TabPanel tab="Tab 1">Tab 1</TabPanel>
        <TabPanel tab="Tab 2" disabled>Tab 2</TabPanel>
        <TabPanel tab="Tab 3">Tab 3</TabPanel>
      </Tabs>
    );
  }
}
