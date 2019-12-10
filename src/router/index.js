// import React, { useEffect, useRef } from "react";

import Router from './core/index'

import { getMRoutesByKey } from "./modules/index"

export function createRouter(options) {
    return new Router(Object.assign({ type: 'hash' }, options))
}

let routerMap = {}


export function getRootRouter() {
    if (routerMap.root) return routerMap.root

    let routeConfigs = [
        Object.assign({}, require('@/layout/route').default, {
            path: 'main',
        }),
        ...getMRoutesByKey('login'),
    ]
    let router = new Router({
        type: 'hash',
        isRoot: true,
        routeConfigs,
    })
    routerMap.root = router
    return router
}

export function getLayoutRouter() {
    if (routerMap.layout) return routerMap.layout
    let routeConfigs = getMRoutesByKey('sys')
    // console.log(routeConfigs)
    let router = new Router({
        type: 'hash',
        routeConfigs
    })
    routerMap.layout = router
    return router
}



// TODO:
// window.addEventListener('hashchange', (e) => { console.log(e) })
// window.addEventListener('popstate', (e) => { console.log(e) })


// document.addEventListener('DOMNodeInserted', function (e) {
//     console.log('“insert”', e.target);
// });
// document.addEventListener('DOMNodeRemoved', function (e) {
//     console.log('“remove”', e.target);
// });

export default Router

