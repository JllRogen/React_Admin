/*
* 用户列表模块
*/



const component = () => import(/* webpackChunkName: 'userList' */ "./index.js")


export default {
    path: 'userList',
    title: '测试',
    component,
}



