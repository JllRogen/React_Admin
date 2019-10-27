/*
* 用户列表模块
*/

import React from 'react'
const component  = React.lazy(() => import(/* webpackChunkName: 'log' */ "./index"))


export default {
    path: 'log',
    id: 'ddd' , 
    name: '系统日志', 
    component, 
}



