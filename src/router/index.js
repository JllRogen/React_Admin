// import React, { useEffect, useRef } from "react";

import Router from './core/index'

import './index.less'


import { getMRoutesByKey } from "./modules/index"


let routeConfigs = [

    Object.assign({}, require('@/layout/route').default, {
        path: 'sys',
        children: getMRoutesByKey('sys'),
    }),
    ...getMRoutesByKey('login'),
]
console.log(routeConfigs)

export default new Router({
    type: 'hash',
    routeConfigs,
})

