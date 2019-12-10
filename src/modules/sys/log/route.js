/*
* 用户列表模块
*/

const component = () => import(/* webpackChunkName: 'log' */ "./index")

// import Log from './index'

export default {
    id: 'ddd',
    title: '系统日志',
    cache: true,  // 缓存页面
    component,
}



