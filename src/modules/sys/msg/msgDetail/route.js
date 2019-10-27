/*
* 用户列表模块
*/

import React from 'react'
const component  = React.lazy(() => import(/* webpackChunkName: 'roleMgr' */ "./index.js"))

export default {
    id: '32323' , 
    title: '消息详情', 
    component, 
}




