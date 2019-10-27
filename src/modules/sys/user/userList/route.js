/*
* 用户列表模块
*/



import React from 'react'
const component  = React.lazy(() => import(/* webpackChunkName: 'userList' */ "./index.js"))


export default {
    path: 'userList',
    id: '3223' , 
    title : '用户列表', 
    
    component, 
}



