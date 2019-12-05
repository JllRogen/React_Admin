
/*
* 用户登入模块
*/

export const component = () => import(/* webpackChunkName: 'login' */ "./index")

export default {
    key: 'login',
    // cache: false,  // 缓存页面
    title: '登录',
    component,
}

