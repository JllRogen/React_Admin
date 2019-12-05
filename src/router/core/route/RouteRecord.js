
// 路由标记类
import { isPlainObject, isFun, isPromise, isArray, runQueue } from "@/libs"

function RouteRecord(routeConfig, router) {
    if (!isPlainObject(routeConfig)) {
        console.log(routeConfig)
        throw new Error('路由配置参数不是普通对象')
    }
    let { path } = routeConfig
    if (!path) {
        console.log(routeConfig)
        throw new Error('没有指定路由的路径')
    }
    this.router = router
    this.path = path
    this.key = routeConfig.key || path

    let component = routeConfig.component
    if (!isFun(component)) {
        if (!isPromise(component)) {
            console.log(routeConfig)
            throw new Error('component组件不是函数也不是promise对象')
        }
    } else {
        this._componentLazy = true
    }

    this.component = component

    this.cache = !!routeConfig.cache   // 是否缓存页面

    this.mate = routeConfig.meta || {}
    let pathBlocks = path.split('/')
    this.pathBlocks = pathBlocks


    // this.



}


const prototype = RouteRecord.prototype







export default RouteRecord