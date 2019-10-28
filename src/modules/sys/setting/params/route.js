/*
* 用户列表模块
*/

import React from 'react'
const component  = React.lazy(() => import(/* webpackChunkName: 'roleMgr' */ "./index.js"))


export default {
    title : '参数设置', 
    
    component, 
}



