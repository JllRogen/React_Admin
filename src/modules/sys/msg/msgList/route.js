/*
* 用户列表模块
*/

const component = () => import(/* webpackChunkName: 'roleMgr' */ "./index.js")

export default {
    path: 'msgList',
    id: '32323',
    title: '消息列表',
    component,
}




