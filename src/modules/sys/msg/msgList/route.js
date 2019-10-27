/*
* 用户列表模块
*/

import React from 'react'
const component  = React.lazy(() => import(/* webpackChunkName: 'roleMgr' */ "./index.js"))

export default {
    path: 'msgList',
    id: '32323' , 
    name: '消息列表', 
    component, 
}




