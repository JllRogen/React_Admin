

import { createHashHistory as createHistory } from "history";
import { isArray, isFun, isPromise } from '@/libs'

import RouterCache from '../cache/index'

import Matcher from '../matcher/index'

function Router(options) {
    let router = this
    router.options = options

    this.history = createHistory(options)

    router.cache = new RouterCache(router)   // 缓存
    router.matcher = new Matcher(router)   // 匹配器初始化

    if (router.options.wrapper) {
        router.bind(router.options.wrapper)
    }
}

const prototype = Router.prototype

prototype.addRoutes = function (list) {
    this.matcher.addRoutes(list)
}
prototype.findRoute = function (location) {
    this.matcher.findRoute(location)
}

prototype.bind = function (wrapper) {
    if (!wrapper) return
    let router = this
    router.wrapper = wrapper

    this.el = createEl()

    wrapper.appendChild(this.el)
    router.locationChange(router.history.location)

    let unlisen = this.history.listen(location => {
        router.locationChange(location)
    })
    this.unbind = () => {
        console.log('解除绑定')
        this.unbind = null
        unlisen()
    }
    return this.unbind

}

/**
 * 路由跳转
 * @param {*} location 
 */
prototype.locationChange = function (location) {
    let { cache, matcher } = this

    let routeRecord = matcher.match(location.pathname)

    if (!routeRecord) return

    let key = routeRecord.key

    let cacheItem = cache.getByKey(key)

    if (!cacheItem) {
        cache.createCacheItem(routeRecord, (cacheItem) => {
            this.el.appendChild(cacheItem.el)
            cacheItem.hide()
            cacheItem.runBeforeRouterHooks(location, () => {
                cache.changeCacheItem(cacheItem)   // 切换
            })
        })
    }
    cacheItem.runBeforeRouterHooks(location, () => {
        cache.changeCacheItem(cacheItem)   // 切换
    })

}


function createEl() {
    let el = document.createElement('div')
    el.className = 'router-main'
    return el
}



export default Router