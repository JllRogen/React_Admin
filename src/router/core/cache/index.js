

import { isArray, isFun, isPromise } from '@/libs'
import CacheItem from './CacheItem'

function RouterCache(router, route) {
    this.router = router
    this.curCacheItem = null
    this.data = {}
}


const prototype = RouterCache.prototype

prototype.getByKey = function (key) {
    return this.data[key]
}

prototype.add = function (item) {
    let { key } = item
    this.data[key] = item
    this.router.wrapper.appendChild(item.el)
}

prototype.removeByKey = function (key) {
    let cacheItem = this.cache[key]
    if (!cacheItem) return
    cacheItem.distroy()
    this.cache[key] = null
    delete this.cache[key]
}


prototype.changeCacheItem = function (cacheItem) {
    let curCacheItem = this.curCacheItem
    if (cacheItem === curCacheItem) return
    curCacheItem && curCacheItem.hide()
    cacheItem.show()
    this.curCacheItem = cacheItem
}



prototype.createCacheItem = function (route, cb) {
    let cacheItem = new CacheItem(route, cb)
    this.data[cacheItem.key] = cacheItem
    return cacheItem
}

export default RouterCache