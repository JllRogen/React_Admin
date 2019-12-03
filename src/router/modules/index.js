
import { parseContext } from './tools'

let contextList = [
    { key: 'sys', context: require.context('@/modules/sys', true, /\/route.js$/), },
    { key: 'login', context: require.context('@/modules/login', true, /\/route.js$/), },
]

const moduleMap = {}

contextList.forEach(({ key, context }) => {
    let routes = parseContext(context)
    moduleMap[key] = routes
})

console.log(moduleMap)

/**
 * 获取模块下面的所有路由
 * @param {*} key 
 */
export const getMRoutesByKey = (key) => {
    return moduleMap[key]
}






