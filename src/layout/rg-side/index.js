import React, { Component } from "react";
import { NavLink } from 'react-router-dom'
import { Layout, Menu, Icon, } from 'antd';
import {menus} from "../../router/modules/sys"
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

                <Menu theme="dark" mode="inline" >
                    {
                        menus.map(menu  =>{
                            if(menu.menus && menu.menus.length > 0 ){
                                    return (
                                        <SubMenu key={menu.key } title={
                                            <span>
                                                <Icon type="unordered-list" />
                                                <span>{menu.title}</span>
                                            </span>
                                        } >
                                            {
                                                menu.menus.map(subMenu =>{
                                                    return (
                                                    <Menu.Item key={subMenu.key } >
                                                        <NavLink to={subMenu.path}>
                                                            <Icon type="home" />
                                                            {subMenu.title}
                                                        </NavLink>
                                                    </Menu.Item>
                                                    )
                                                })
                                            }
                                        </SubMenu>
                                    )
                            }else {
                                return (
                                    <Menu.Item key={menu.key  } >
                                        <NavLink to={menu.path}>
                                            <Icon type="home" />
                                            {menu.title}
                                        </NavLink>
                                    </Menu.Item>
                                )
                            }
                            
                        })
                    }
                    
                    
                </Menu>
            </Sider>
        )
    }
}
