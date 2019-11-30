/*
* 用户列表模块
*/

const component = () => import(/* webpackChunkName: 'roleMgr' */ "./index.js")


export default {
    path: 'roleMgr',
    id: '32323',
    title: '角色管理',

    component,
}



