
import { isArray, isFun, isPromise } from '@/libs'

import RouterCache from '../cache/index'

export function initState(router) {
    const options = router.$options

    router.cache = new RouterCache(router)   // 缓存


    initRouteState(router)



}

export function stateMixin(Router) {
    routeStateMixin(Router)
}

/*******************************************************************************
 ********************* 路由状态 ********************************
 **********************************************************************/
function initRouteState(router) {

    router.routeMap = {}
    let routes = router.$options.routes || []
    router.routes = routes
    routes.forEach(route => {
        router.routeMap[route.path] = route
    })

}

function routeStateMixin(Router) {
    // 添加路由列表
    Router.prototype.$addRoutes = function (list) {
        if (!isArray(list)) return
        let router = this
        let { routes, routeMap } = router
        list.forEach(route => {
            let path = route.path
            routeMap[path] = route
            routes.push(route)
        })
    }
    Router.prototype.$getRoute = function (location) {
        let { pathname } = location
        let { routeMap } = this
        let targetRoute = routeMap[pathname] || null
        return targetRoute
    }
}
