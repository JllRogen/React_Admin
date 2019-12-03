// import React, { useEffect, useRef } from "react";

import Router from './core/index'

import './index.less'

// import '@/layout/route'

import { getMRoutesByKey } from "./modules/index"


let routeConfigs = [

    Object.assign({}, require('@/layout/route').default, {
        path: 'sys',
        children: getMRoutesByKey('sys'),
    }),
    ...getMRoutesByKey('login'),

]

// const routeMap = require('./modules/index').default
// const routes = [

// ]
export default new Router({
    type: 'hash',
    routes: routeConfigs
})




// /**
//  * 主路由
//  * @returns
//  */
// function AppRouter() {
//     const ref = useRef(null)
//     useEffect(() => {
//         const wrapper = ref.current
//         router.$bind(wrapper)

//         // return bindRouterWrapper(wrapper)

//     }, []);
//     return (
//         <>
//             <div className='router-main' ref={ref} />
//         </>
//     )
// }

// export default AppRouter

