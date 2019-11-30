/*
* 用户列表模块
*/

import React from 'react'
const component = () => import(/* webpackChunkName: 'home' */ "./index")

// import Home from './index'
export default {
    path: 'log',
    key: 'ddd',
    cache: true,  // 缓存页面
    title: '主页',
    component,
}



