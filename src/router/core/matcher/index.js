import { isArray } from '@/libs/index'
import { RouteRecord } from '../route/index'
import { getPathBlocks } from '../utils/index'

function Matcher(router) {

    this.routeRecords = []
    this.routeRecordMap = {}

    this.router = router
    let options = router.options

    this.addRoutes(options.routeConfigs)

}


const prototype = Matcher.prototype

// 匹配
prototype.match = function (path) {
    let targetPathBlocks = getPathBlocks(path)
    let matchPath = targetPathBlocks.join('/')
    return this.routeRecords.find(routeRecord => {
        return matchPath.indexOf(routeRecord.path) === 0
        // return targetPathBlocks[0] === routeRecord.pathBlocks[0]
    })
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





export default Matcher 