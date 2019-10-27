/*
* 用户列表模块
*/

import React from 'react'
const component  = React.lazy(() => import(/* webpackChunkName: 'home' */ "./index"))


export default {
    path: 'log',
    id: 'ddd' , 
    title: '主页', 
    component, 
}



