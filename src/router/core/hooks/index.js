// eslint-disable-next-line
import { isPlainObject, isFun, isPromise, isArray, runQueue } from "@/libs"


export const keyMap = {
    beforeHook: 'beforeHook',
    afterHook: 'afterHook',

}

export const keys = Object.values(keyMap)


function Hooks() {


}




const prototype = Hooks.prototype
// 添加
prototype.addHook = function (key, fn) {
    if (!keys.includes(key)) return
    if (!isFun(fn)) return
    let queue = this[key]
    if (queue) queue.push(fn)
    else this[key] = queue = [fn]
    return () => {
        queue.splice(queue.indexOf(fn), 1)
        fn = null
    }
}

// 运行
prototype.run = function (key, params, cb) {
    let queue = this[key]
    if (isArray(queue) && queue.length > 0) {
        runQueue(queue, (hook, next) => {
            hook(params, next)
        }, cb)
    } else {
        cb()
    }
}


prototype.setHooks = function (hooks) {
    if (!isPlainObject(hooks)) return
    keys.forEach(key => {
        let fn = hooks[key]
        if (isFun(fn)) {
            this.addHook(key, fn)
        }
    })
}



export default Hooks