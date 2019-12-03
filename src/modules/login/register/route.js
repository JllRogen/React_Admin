
/*
* 用户登入模块
*/

export const component = () => import(/* webpackChunkName: 'register' */ "./index")

export default {
    key: 'register',
    cache: false,  // 缓存页面
    title: '注册',
    component,
}

