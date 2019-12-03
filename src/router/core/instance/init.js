

import { createHashHistory as createHistory } from "history";

import { initState } from "./state"

export function initMixin(Router) {
    Router.prototype._init = function (options = {}) {

        let router = this
        this.history = createHistory(options)
        router.$options = options

        let el = document.createElement('div')
        el.className = 'router-main'
        router.$el = el

        initState(router)

        if (router.$options.wrapper) {
            router.$bind(router.$options.wrapper)
        }
    }
}



