/*
* 用户列表模块
*/

import React from 'react'
const component  = React.lazy(() => import(/* webpackChunkName: 'log' */ "./index"))


export default {
    id: 'ddd' , 
    title: '系统日志', 
    component, 
}



