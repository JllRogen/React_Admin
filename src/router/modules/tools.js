
import { isPlainObject, isFun, } from '@/libs'

export function parseContext(context, base = "") {
    let keys = context.keys()
    let list = []
    keys.forEach(key => {
        let route = context(key).default
        if (!isPlainObject(route)) return   // 不是普通对象
        let { component, title } = route
        if (!title) {
            // console.log(key, '没有指定标题', route)
            return
        }
        if (!isFun(component)) {
            // console.log(key, '组件不是懒加载的', route)
            return
        }
        let pathBlocks = key.split('/')   // 路径块列表
        pathBlocks.shift()
        pathBlocks.pop()
        if (pathBlocks.length === 0) return
        let meta = isPlainObject(route.meta) ? route.meta : {}
        meta.pathBlocks = pathBlocks

        let path = pathBlocks.join('/')
        let copy = Object.assign({}, route, {
            path,
            base,
            // matchPath: `/${key}${path}`,
            meta,
        })
        list.push(copy)
    })

    return list


}