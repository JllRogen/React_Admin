

import CacheItem from './CacheItem'

function RouterCache(router) {
    this.router = router
    this.curCacheItem = null
    this.data = {}  //缓存的数据
}


const prototype = RouterCache.prototype

prototype.getByKey = function (key) {
    return this.data[key]
}

prototype.add = function (item) {
    let { key } = item
    this.data[key] = item
    this.router.el.appendChild(item.el)
}

prototype.removeByKey = function (key) {
    let cacheItem = this.data[key]
    if (!cacheItem) return
    cacheItem.distroy()
    this.data[key] = null
    delete this.data[key]
}


prototype.changeCacheItem = function (cacheItem) {
    let curCacheItem = this.curCacheItem
    if (cacheItem === curCacheItem) return
    if (curCacheItem) {
        curCacheItem.route.cache ? curCacheItem.hide() : this.removeByKey(curCacheItem.key)
    }
    cacheItem.show()
    this.curCacheItem = cacheItem
}



prototype.createCacheItem = function (route, cb) {
    let cacheItem = new CacheItem(route, cb)
    this.data[cacheItem.key] = cacheItem
    return cacheItem
}

export default RouterCache