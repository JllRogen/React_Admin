
import { getPathBlocks } from '../utils/index'
import { isPlainObject } from '@/libs/index'
export function createLocation(params = Object.assign({}, window.location), fatherLocation) {
    let tempLocation = {}
    if (fatherLocation) {
        Object.assign(tempLocation, fatherLocation)
    }
    if (typeof params === 'string') {
        tempLocation.pathname = params
    } else if (isPlainObject(params)) {
        Object.assign(tempLocation, params)
    } else {
        throw new Error('location参数错误')
    }
    let { pathname } = tempLocation

    if (fatherLocation) {
        tempLocation.fullPathname = fatherLocation.pathname + pathname
    } else {
        tempLocation.fullPathname = pathname
    }
    tempLocation.pathBlocks = getPathBlocks(pathname)
    // console.log(tempLocation)
    return tempLocation
}