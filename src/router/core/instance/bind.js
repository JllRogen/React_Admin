

export function bindMixin(Router) {
    Router.prototype.bind = function (wrapper) {
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

    Router.prototype.locationChange = locationChange
}



function createEl() {
    let el = document.createElement('div')
    el.className = 'router-main'
    return el
}



/**
 * 路由跳转
 * @param {*} location 
 */
function locationChange(location) {
    let { cache } = this
    let targetRoute = this.getRoute(location)
    if (!targetRoute) return
    let key = targetRoute.key

    let cacheItem = cache.getByKey(key)

    if (!cacheItem) {
        cacheItem = cache.createCacheItem(targetRoute)
        this.wrapper.appendChild(cacheItem.el)
    }

    cache.changeCacheItem(cacheItem)   // 切换

}

