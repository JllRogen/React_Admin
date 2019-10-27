
import React, { Component } from "react";

import { Layout, } from 'antd';
import './index.less'
const { Header } = Layout
/**
 * 头部组件
 * 
 * @export
 * @class
 * @extends {Component}
 */
export default class extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {

    //     }
    // }
    render() {
        return (
            <Header className='rg-header'></Header>
        )
    }
}