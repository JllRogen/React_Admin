

import { isFun } from '@/libs'



function History(props = {}) {
  this.current = null

  this.cb = null

  this.ready = false

  this.globalHistory = window.history

  this.readyCbs = []
  this.readyErrorCbs = []
  this.errorCbs = []
  this.setConfirmTransition(props.confirmTransition)

}

let prototype = History.prototype
// 监听
prototype.listen = function (cb) {
  if (isFun(cb)) this.cb = cb
  this.unlisten = () => (this.cb === null)
  return this.unlisten
}

prototype.setConfirmTransition = function (fn) {
  if (isFun(fn)) {
    this.confirmTransition = fn
  }
}

prototype.onError = function (cb) {
  if (isFun(cb)) this.errorCbs.push(cb)
}

prototype.transitionTo = function (location) {
  if (this.confirmTransition) {
    this.confirmTransition(location, (isOk) => {
      if (isOk) {
        this.cb && this.cb(location)
      } else {
        this.revert()
      }
    })
  } else {
    this.cb && this.cb(location)
  }
}




export default History