import { isArray } from '@/libs/index'
import { RouteRecord } from '../route/index'
// import { getPathBlocks } from '../utils/index'

function Matcher(router) {

    this.routeRecords = []
    this.routeRecordMap = {}
    this.curRouteRecord = null
    this.router = router
    let options = router.options

    this.addRoutes(options.routeConfigs)

}




const prototype = Matcher.prototype




// 匹配
prototype.match = function (pathname) {

    if (!pathname) return {}
    // let matchPath = pathBlocks.join('/')
    // pathname = pathname.substr(1)
    let matchedRouteRecords = this.routeRecords.find(routeRecord => {
        return pathname.indexOf(routeRecord.matchPath) === 0
    })

    if (!matchedRouteRecords) return {}
    let matchPath = matchedRouteRecords.matchPath
    let unmatchPathname = pathname.substr(matchPath.length)
    return {
        routeRecord: matchedRouteRecords,
        unmatchPathname,   // 没有匹配到的路由

    }


}
// 添加路由
prototype.addRoutes = function (routeConfigs) {
    if (!isArray(routeConfigs)) return
    let router = this.router
    let routeRecordMap = this.routeRecordMap
    let routeRecords = this.routeRecords
    routeConfigs.forEach(routeConfig => {
        let routeRecord = new RouteRecord(routeConfig, router)
        routeRecordMap[routeRecord.key] = routeRecord
        routeRecords.push(routeRecord)
    })
}

prototype.setCurRouteRecord = function (routeRecord) {
    this.curRouteRecord = routeRecord
}




export default Matcher 