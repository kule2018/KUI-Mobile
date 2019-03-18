import React, { Component } from 'react';
import Page from '../../components/Page';
import Header from '../../components/Header';
import Block from '../../components/Block';
import { Collapse, CollapsePanel, Cell } from 'kui-mobile';

const prefixCls = 'app-home';

export default class Home extends Component {
  renderCells(source) {
    let cells = [];
    source.forEach((item, index) => {
      cells.push(<Cell key={index} to={item.to} title={item.title} border showArrow />);
    });

    return <React.Fragment>{cells}</React.Fragment>;
  }
  render() {
    const header = <Header>KUI-Mobile</Header>;
    const basic = [
      { title: 'Button 按钮', to: '/button' },
      { title: 'Cell 单元格', to: '/cell' },
      { title: 'Icon 图标', to: '/icon' },
      { title: 'Layout 布局', to: '/layout' },
    ];
    const display = [
      { title: 'Badge 徽章', to: '/badge' },
      { title: 'Collapse 折叠面板', to: '/collapse' },
    ];
    return (
      <Page header={header} fixedHeader bodySpace className={prefixCls}>
        <Collapse accordion>
          <CollapsePanel header="基础组件" id="1" border={false}>
            {this.renderCells(basic)}
          </CollapsePanel>
          <CollapsePanel header="展示组件" id="2" border={false}>
            {this.renderCells(display)}
          </CollapsePanel>
        </Collapse>
      </Page>
    );
  }
}
