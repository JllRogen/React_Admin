
import { isArray } from './util'
export function runQueue(queue, fn, cb) {

  if (isArray(queue) && queue.length > 0) {
    _runQueue(queue, fn, 0, cb)

  } else {
    cb()
  }
}

function _runQueue(queue, fn, index, cb) {
  if (index >= queue.length) {
    cb()
  } else {
    if (queue[index]) {
      fn(queue[index], () => {
        _runQueue(queue, fn, index + 1, cb)
      })
    } else {
      _runQueue(queue, fn, index + 1, cb)
    }
  }
}

