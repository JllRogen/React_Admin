
import React, { Component } from "react";

import { Layout, } from 'antd';
import './index.less'
const { Content } = Layout
/**
 * 内容组件
 * 
 * @export
 * @class
 * @extends {Component}
 */
export default class extends Component {
    render() {
        return (
            <Content className='rg-content'>
                <div >
                    {this.props.children}
                </div>
            </Content>
        )
    }
}