/*
* 用户列表模块
*/

import React from 'react'
const component  = React.lazy(() => import(/* webpackChunkName: 'roleMgr' */ "./index.js"))


export default {
    path: 'roleMgr',
    id: '32323' , 
    title : '角色管理', 
    
    component, 
}



