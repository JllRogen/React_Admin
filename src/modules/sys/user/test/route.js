/*
* 用户列表模块
*/



import React from 'react'
const component  = React.lazy(() => import(/* webpackChunkName: 'userList' */ "./index.js"))


export default {
    path: 'userList',
    title : '测试', 
    component, 
}



