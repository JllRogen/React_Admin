
import { isArray, isFun, isPromise } from '@/libs'

import RouterCache from '../cache/index'

import Matcher from '../matcher/index'

export function initState(router) {


    // initRouteState(router)
}

export function stateMixin(Router) {
    let prototype = Router.prototype
    // 添加路由
    prototype.addRoutes = function (list) {
        this.matcher.addRoutes(list)
    }
    prototype.findRoute = function (location) {

    }
}

