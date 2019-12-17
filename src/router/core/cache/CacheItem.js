
import React from "react"
import ReactDOM from 'react-dom'
import Hooks, { keys as hookKeys } from '../hooks/index'
import { isPlainObject, isFun, isPromise, isArray, runQueue } from "@/libs"


function CacheItem(routeRecord, location, cb) {

    this.routeRecord = routeRecord
    this.key = routeRecord.key
    this.hooks = new Hooks()
    this.initEl()

    this.initComponentHooks()


}





const prototype = CacheItem.prototype


prototype.initEl = function () {
    let el = document.createElement('div')
    el.className = 'route-item'
    this.el = el
}

prototype.initComponentHooks = function () {
    let Component = this.routeRecord._component
    // 设置组件的hooks
    let injectRouteHooks = Component.injectRouteHooks
    if (!isFun(injectRouteHooks)) return
    let componentHooks = Component.injectRouteHooks()
    this.hooks.setHooks(componentHooks)
}

prototype.show = function () {
    this.el.style.display = 'block'
}

prototype.hide = function () {
    this.el.style.display = 'none'
}

prototype.distroy = function () {
    let el = this.el
    ReactDOM.unmountComponentAtNode(el)
    el.remove()
}


prototype.renderComponent = function (location, cb) {
    let Component = this.routeRecord._component
    ReactDOM.render(
        <Component location={location} routeCb={(routeHooks) => {
            this.hooks.setHooks(routeHooks)
        }} />,
        this.el,
        () => {
            console.log('组件渲染完毕')
            cb && cb()
        })
}


export default CacheItem