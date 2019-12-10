
import React from "react"
import ReactDOM from 'react-dom'


function CacheItem(routeRecord) {

    this.routeRecord = routeRecord
    this.key = routeRecord.key

    this.initEl()
    let Component = routeRecord._component
    ReactDOM.render((<Component />), this.el, () => {
        console.log('组件渲染完毕')
    })
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