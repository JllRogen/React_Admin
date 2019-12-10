
import History from './base'
// import { cleanPath } from '../util/path'
// import { getLocation } from './html5'
import { supportsPushState } from '../utils/dom'
import { createLocation } from '../location'

function HashHistory(props) {
  History.call(this, props)

  if (supportsPushState) {
    window.addEventListener('popstate',
      () => {
        let location = createLocation()

        this.cb && this.cb(location)
      }
    )

  }

}


const prototype = HashHistory.prototype = Object.create(History.prototype)

if (supportsPushState) {
  prototype.pushState = function (location) {  // 不会被拦截
    let pathname = location.fullPathname || location.pathname
    document.title = pathname
    this.globalHistory.pushState(location.state || {}, '', pathname)
  }

}






export default HashHistory