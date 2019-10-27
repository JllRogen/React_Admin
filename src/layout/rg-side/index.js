import React, { Component } from "react";
import { NavLink } from 'react-router-dom'
import { Layout, Menu, Icon, } from 'antd';

import './index.less'
const { Sider } = Layout
const { SubMenu } = Menu
/**
 * 侧边栏组件
 * @export
 * @class
 * @extends {Component}
 */
export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <Sider className='rg-side' breakpoint="lg" collapsedWidth={0} collapsible={true} width={220}
                onBreakpoint={broken => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div className="logo" />

                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" >
                        <NavLink to="/sys/log">
                            <Icon type="home" />
                            log日志
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <NavLink to="/sys/msg/msgList">
                            <Icon type="video-camera" />
                            信息列表
                        </NavLink>
                    </Menu.Item>
                    <SubMenu key="sub1" title={
                        <span>
                            <Icon type="unordered-list" />
                            <span>Navigation One</span>
                        </span>
                    }
                    >
                        <Menu.Item key="5">
                            <Icon type="upload" />
                            <span className="nav-text">ddddddddddddddddddddddddddd</span>
                        </Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        )
    }
}