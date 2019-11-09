import React, { Component } from "react";



import { NavLink, useHistory, withRouter, useLocation } from 'react-router-dom'

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


// class LinkMenu extends Component {
//     constructor(props) {
//         super(props)
//         this.handlerClick = this.handlerClick.bind(this)
//         this.push = props.history.push
//     }
//     componentDidMount() {
//         console.log(this)
//     }

//     handlerClick() {
//         this.push('/sys/home')
//     }
//     render() {
//         // 
//         console.log(3333333)
//         return (
//             <Menu theme="dark" mode="inline" >
//                 {
//                     menus.map(menu => {
//                         let { key } = menu
//                         if (menu.menus && menu.menus.length > 0) {
//                             return (
//                                 <SubMenu
//                                     key={key}
//                                     title={
//                                         <span>
//                                             <Icon type="unordered-list" />
//                                             <span>{menu.title}</span>
//                                         </span>
//                                     }>
//                                     {menu.menus.map(subMenu => (
//                                         <Menu.Item key={subMenu.key}
//                                             onClick={this.handlerClick}
//                                         >
//                                             <Icon type="home" />
//                                             {subMenu.title}
//                                             {/* <LinkItem menu={subMenu}></LinkItem> */}
//                                         </Menu.Item>
//                                     ))}
//                                 </SubMenu>
//                             )
//                         } else {
//                             return (
//                                 <Menu.Item key={key}
//                                     onClick={this.handlerClick}
//                                 // onClick={() => { this.push(menu.path) }}
//                                 >
//                                     <Icon type="home" />
//                                     {menu.title}
//                                     {/* <LinkItem menu={menu}></LinkItem> */}
//                                 </Menu.Item >
//                             )
//                         }

//                     })
//                 }
//             </Menu >
//         )
//     }
// }


function LinkMenu() {
    console.log(3242342324)
    // let { push } = useHistory()
    return (
        <Menu theme="dark" mode="inline" >
            {
                menus.map(menu => {
                    let { key } = menu
                    if (menu.menus && menu.menus.length > 0) {
                        return (
                            <SubMenu
                                key={key}
                                title={
                                    <span>
                                        <Icon type="unordered-list" />
                                        <span>{menu.title}</span>
                                    </span>
                                }>
                                {menu.menus.map(subMenu => (
                                    <Menu.Item key={subMenu.key}
                                    // onClick={this.handlerClick}
                                    >
                                        {/* <Icon type="home" />
                                        {subMenu.title} */}
                                        <LinkItem menu={subMenu}></LinkItem>
                                    </Menu.Item>
                                ))}
                            </SubMenu>
                        )
                    } else {
                        return (
                            <Menu.Item key={key}>
                                <LinkItem menu={menu}></LinkItem>
                            </Menu.Item >
                        )
                    }

                })
            }
        </Menu >
    )

}



// const Test = withRouter(LinkMenu)

class RgSide extends Component {
    render() {
        console.log(32424324)
        return (

            <Sider className='rg-side' breakpoint="lg" collapsedWidth={0} collapsible={true} width={220}
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
}


export default RgSide

function LinkItem({ menu }) {
    return (
        <NavLink to={menu.path}>
            <Icon type="home" />
            {menu.title}
        </NavLink>
    )
}