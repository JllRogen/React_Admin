import React, { useEffect, useRef } from "react";   //  lazy Suspense必须同时使用
import ReactDOM from 'react-dom'
import './index.less'
import Layout from '../layout'


import history from './history'
// import { createHashHistory as createHistory } from "history";

const { routes } = require('./modules/sys')

// const history = createHistory({})

const cacheMap = {}

let curCache = null
function handlerHistory(wrapper) {
    locationChange(history.location, wrapper)
    return history.listen(location => {
        locationChange(location, wrapper)
    });
}

/**
 * 路由跳转
 * @param {*} location 
 */
function locationChange(location, wrapper) {
    const { pathname } = location
    let route = routes.find(route => (route.path === pathname))
    if (!route) return
    curCache && (curCache.el.style.display = 'none')
    let key = route.path
    let temp = cacheMap[key]
    if (!temp) {
        let el = document.createElement('div')
        el.className = 'route-item'
        wrapper.appendChild(el)
        temp = cacheMap[key] = { el }
        let component = route.component
        if (typeof component === "function") {
            component().then(C => {
                ReactDOM.render((<C.default />), temp.el, () => {

                })
            })
        } else {
            ReactDOM.render((<component />), temp.el, () => {

            })
        }

    } else {
        temp.el.style.display = 'block'
    }
    curCache = temp
}


/**
 * 主路由
 * @returns
 */
function AppRouter() {
    // const [memoRoutes, memoRoutesDispatcher] = useReducer(memoRoutesReducer, [], memoRoutesInit)
    const ref = useRef(null)
    // const [location, locationDispatcher] = useReducer(reducer, initialState, init)
    useEffect(() => {
        const wrapper = ref.current

        return handlerHistory(wrapper)

    }, []);
    return (
        <Layout>
            {/* <Suspense fallback={<div>loading....</div>}> */}
            <div className='router-main' ref={ref} />
            {/* </Suspense> */}
        </Layout>
    )
}

export default AppRouter

