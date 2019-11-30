/*
* 用户列表模块
*/



const component = () => import(/* webpackChunkName: 'userList' */ "./index.js")


export default {
    path: 'userList',
    id: '3223',
    title: '用户列表',

    component,
}



