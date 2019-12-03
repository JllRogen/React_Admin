
// 路由标记类
import { isPlainObject } from "@/libs"

function RouteRecord(options) {
    if (!isPlainObject(options)) {
        console.log(options)
        throw new Error('路由配置参数不是普通对象')
    }
    let { path } = options


}


export default RouteRecord