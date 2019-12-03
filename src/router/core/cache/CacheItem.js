
import React from "react"
import ReactDOM from 'react-dom'
import { isFun, isPromise } from '@/libs'


function CacheItem(route, cb) {
    this.route = route
    this.key = route.key

    this.initEl()

    let el = this.el
    let expFn = route.component
    if (isFun(expFn)) {
        let p = expFn()
        if (isPromise(p)) {
            p.then(temp => {
                let Component = temp.default
                ReactDOM.render((<Component />), el, cb)
            })
        }
    } else {
        let Component = expFn
        ReactDOM.render((<Component />), el, cb)
    }
}





const prototype = CacheItem.prototype


prototype.initEl = function () {
    let el = document.createElement('div')
    el.className = 'route-item'
    this.el = el
}




prototype.show = function () {
    this.el.style.display = 'block'
}

prototype.hide = function () {
    this.el.style.display = 'none'
}


prototype.distroy = function () {
    let el = this.el
    ReactDOM.unmountComponentAtNode(el)
    el.remove()
}


export default CacheItem