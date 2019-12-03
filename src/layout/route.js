


/*
* 用户登入模块
*/
export const component = () => import(/* webpackChunkName: 'layout' */ "./index")


export default {
    key: 'layout',
    cache: true,  // 缓存页面
    title: '框架',
    component,
}

