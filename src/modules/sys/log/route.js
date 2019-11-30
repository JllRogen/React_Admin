/*
* 用户列表模块
*/

import React from 'react'
const component = () => import(/* webpackChunkName: 'log' */ "./index")

// import Log from './index'

export default {
    id: 'ddd',
    title: '系统日志',
    component,
}



