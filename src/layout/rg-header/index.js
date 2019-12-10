
import React from "react";

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
export default function () {
    return (
        <Header className='rg-header'>
            <h1>后台管理系统</h1>
        </Header>
    )
}