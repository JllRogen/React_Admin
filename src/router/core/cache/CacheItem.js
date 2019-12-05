
import React from "react"
import ReactDOM from 'react-dom'
import { isFun, isPromise, runQueue } from '@/libs'


function CacheItem(routeRecord, cb) {
    this.routeRecord = routeRecord
    this.key = routeRecord.key

    this.initEl()
    this.hooks = {}
    let expFn = routeRecord.component

    this.beforeRouteEnterHooks = []
    if (isFun(expFn)) {
        let p = expFn()
        if (isPromise(p)) {
            p.then(temp => {
                let Component = temp.default

                // debugger
                renderComponent(Component, this, cb)
            })
        }
    } else {
        renderComponent(expFn, this, cb)
    }
}


function renderComponent(Component, cacheItem, cb) {
    let beforeRouteEnter = Component.beforeRouteEnter

    if (isFun.beforeRouteEnter) {

    }
    ReactDOM.render((<Component addBeforeHook={(fn) => {

    }} />), cacheItem.el, () => {
        debugger
        cb && cb(cacheItem)
    })
}


const prototype = CacheItem.prototype


prototype.initEl = function () {
    let el = document.createElement('div')
    el.className = 'route-item'
    this.el = el
}

prototype.show = function () {
    this.el.style.display = 'block'
}

prototype.hide = function () {
    this.el.style.display = 'none'
}
// 运行路由守卫
prototype.runBeforeRouterHooks = function (params, cb) {
    let beforeRouteEnterHooks = this.beforeRouteEnterHooks
    if (beforeRouteEnterHooks.length === 0) {
        cb(true)
        return
    }
    runQueue(beforeRouteEnterHooks, (hook, next) => {
        hook(params, next)
    }, cb)

}

prototype.distroy = function () {
    let el = this.el
    ReactDOM.unmountComponentAtNode(el)
    el.remove()
}


export default CacheItem