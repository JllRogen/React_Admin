import React from "react";


import { router } from '../index'

import { Layout, Menu, Icon, } from 'antd';
import { menus } from "../../router/modules/sys"
import './index.less'
const { Sider } = Layout
const { SubMenu } = Menu



/**
 * 侧边栏组件
 * @export
 * @class
 * @extends {Component}
 */
function LinkMenu() {
    console.log('link Menu')
    return (
        <Menu theme="dark" mode="inline">
            {
                menus.map(menu => {
                    if (menu.menus && menu.menus.length > 0) {
                        return (
                            <SubMenu
                                key={menu.path}
                                title={
                                    <span>
                                        <Icon type="unordered-list" />
                                        <span>{menu.title}</span>
                                    </span>
                                }>
                                {menu.menus.map(subMenu => (
                                    <Menu.Item key={subMenu.path}>
                                        <LinkItem menu={subMenu}></LinkItem>
                                    </Menu.Item>
                                ))}
                            </SubMenu>
                        )
                    } else {

                        return (
                            <Menu.Item key={menu.path}>
                                <LinkItem menu={menu}></LinkItem>
                            </Menu.Item >
                        )
                    }

                })
            }
        </Menu >
    )

}






export default function (props) {
    console.log('sider')
    return (
        <Sider className='rg-side' breakpoint="lg" collapsedWidth={0} collapsible={false} width={220}
        // onBreakpoint={broken => {
        //     console.log(broken);
        // }}
        // onCollapse={(collapsed, type) => {
        //     console.log(collapsed, type);
        // }}
        >
            <div className="rg-side-inner">
                <div className="logo" >
                    <div>Rogen</div>
                </div>
                <div className='menu-wrapper'>
                    <LinkMenu />
                </div>
            </div>

        </Sider>
    )
}

function LinkItem({ menu }) {
    // const history = useHistory()
    return (
        <div onClick={() => {
            router.push(menu.path)
        }} >
            <Icon type="home" />
            {menu.title}
        </div>
    )
}