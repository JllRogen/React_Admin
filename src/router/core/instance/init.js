
import { createHashHistory as createHistory } from "history";

import { isArray, isFun, isPromise } from '@/libs'

import RouterCache from '../cache/index'

import Matcher from '../matcher/index'


import { initState } from "./state"

export function initMixin(Router) {
    Router.prototype._init = function (options = {}) {

        let router = this
        this.history = createHistory(options)
        router.options = options

        this.isRoot = options.isRoot !== false   // 是否根路由

        initState(router)

        if (router.options.wrapper) {
            router.bind(router.options.wrapper)
        }
    }
}



