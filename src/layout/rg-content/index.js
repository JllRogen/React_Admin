
import React, { } from "react";

import { Layout, } from 'antd';
import './index.less'
const { Content } = Layout
/**
 * 内容组件
 * @export
 * @class
 * @extends {Component}
 */
export default function (props) {
    return (
        <Content className='rg-content'>
            <div >{props.children}</div>
        </Content>
    )
}