
// import ReactDOM from 'react-dom'

import { createHashHistory as createHistory } from "../history/index";
// eslint-disable-next-line 
import Hooks, { keyMap as hookKeyMap, keys as hookKeys } from '../hooks/index'
import RouterCache from '../cache/index'
import { createLocation } from '../location/index'
import Matcher from '../matcher/index'



function Router(options) {
    let router = this
    router.options = { ...options }
    this.isRoot = !!options.isRoot
    this.curLocation = null
    if (this.isRoot) {
        this.history = createHistory(router.options)
        this.history.listen(location => {
            router.locationChange(location)
        })
    }

    router.cache = new RouterCache(router)   // 缓存
    router.matcher = new Matcher(router)   // 匹配器初始化

    if (router.options.wrapper) {
        router.bind(router.options.wrapper)
    }
}

const prototype = Router.prototype


prototype.push = function (options) {
    let pLocation = this.parent ? this.parent.curLocation : null
    let location = createLocation(options, pLocation)
    this.locationChange(location, () => {
        this.history.pushState(location)
    })

}


prototype.addRoutes = function (list) {
    this.matcher.addRoutes(list)

}

prototype.addChild = function (router) {
    this.child = router
    router.history = this.history
}

prototype.addParent = function (router) {
    this.parent = router
}

prototype.findRoute = function (location) {
    this.matcher.findRoute(location)
}

// 挂载 
prototype.mount = function (wrapper) {
    if (!wrapper) return
    this.el = createEl()
    wrapper.appendChild(this.el)
    // 挂载的时候切换路由
    this.unMount = () => {
        this.history && this.history.unlisten()
        this.unMount = null
    }
    if (this.isRoot) {
        this.locationChange(createLocation())
    }
    return this.unMount
}



/**
 * 路由跳转
 * @param {*} location 
 */
prototype.locationChange = function (location, cb) {
    let { cache, matcher } = this
    let { routeRecord, unmatchPathname } = matcher.match(location.pathname)
    if (!routeRecord) return

    let key = routeRecord.key

    let cacheItem = cache.getByKey(key)
    if (cacheItem) {
        // 路由拦截 
        cacheItem.hooks.run(hookKeyMap.beforeHook, { location }, () => {
            cache.changeCacheItem(cacheItem)   // 切换
            matcher.setCurRouteRecord(routeRecord)
            this.curLocation = createLocation(routeRecord.matchPath)
            if (this.child) {
                let subLocation = createLocation(unmatchPathname, location)
                this.child.locationChange(subLocation, cb)
            } else {
                cb && cb()
            }
        })
        return
    }
    // 加载组件
    routeRecord.getComponent(() => {

        // 运行 beforeRouterEnter
        let cacheItem = cache.createCacheItem(routeRecord, location)
        cacheItem.hooks.run(hookKeyMap.beforeHook, { location }, () => {
            cacheItem.renderComponent(location)
            this.el.appendChild(cacheItem.el)
            cache.changeCacheItem(cacheItem)

            matcher.setCurRouteRecord(routeRecord)
            this.curLocation = createLocation(routeRecord.matchPath)

            if (this.child) {
                let subLocation = createLocation(unmatchPathname, location)
                this.child.locationChange(subLocation, cb)
            } else {
                cb && cb()
            }
        })
    })

}


prototype.getPathname = function () {
    let curCacheItem = this.cache.curCacheItem
    if (!curCacheItem) return
    let routeConfig = curCacheItem.routeConfig
    return routeConfig.matchPath
}

function createEl() {
    let el = document.createElement('div')
    el.className = 'router-main'
    return el
}



export default Router