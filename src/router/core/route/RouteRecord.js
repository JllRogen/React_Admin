
// 路由标记类
import { isPlainObject, isFun, isPromise, } from "@/libs"

import Hooks, { keys as hookKeys } from '../hooks/index'


function RouteRecord(routeConfig, router) {
    if (!isPlainObject(routeConfig)) {
        console.log(routeConfig)
        throw new Error('路由配置参数不是普通对象')
    }
    let { path, base } = routeConfig
    if (!path) {
        console.log(routeConfig)
        throw new Error('没有指定路由的路径')
    }
    this.router = router
    this.path = path
    if (base) this.matchPath = `/${base}/${path}`
    else this.matchPath = `/${path}`
    this.key = routeConfig.key || path

    let component = routeConfig.component


    this.component = component
    this._component = null

    this.cache = !!routeConfig.cache   // 是否缓存页面

    this.mate = routeConfig.meta || {}
    let pathBlocks = path.split('/')
    this.pathBlocks = pathBlocks

    this.hooks = new Hooks()
    // this.beforeHooks = null

}


const prototype = RouteRecord.prototype

// 获取组件
prototype.getComponent = function (cb) {
    if (this._component) {
        cb(this._component)
        return
    }
    let componentExp = this.component

    if (isFun(componentExp)) {
        let p = componentExp()
        if (!isPromise(p)) throw new Error('懒加载组件不是promise对象')
        p.then(tempC => {
            let component = tempC.default
            this._component = component
            this.setHooks()
            cb(component)
        })
    } else {
        if (!isPromise(componentExp)) {
            console.log(componentExp)
            throw new Error('component组件不是函数也不是promise对象')
        }
        this._component = componentExp
        cb(this._component)
    }
}

// 设置hooks
prototype.setHooks = function () {
    let _component = this._component
    let injectRouteHooks = _component.injectRouteHooks
    if (!isFun(injectRouteHooks)) return
    let componentHooks = _component.injectRouteHooks()
    if (!isPlainObject(componentHooks)) return
    hookKeys.forEach(key => {
        let fn = componentHooks[key]
        if (isFun(fn)) {
            this.hooks.addHook(key, fn)
        }
    })
}
// // 运行路由守卫
// prototype.runHooks = function (key, params, cb) {
//     let targetHooks = this.hooks[key]
//     debugger
//     if (isArray(targetHooks) && targetHooks.length > 0) {
//         runQueue(targetHooks, (hook, next) => {
//             hook(params, next)
//         }, cb)
//     } else {
//         cb()
//     }
// }




export default RouteRecord
