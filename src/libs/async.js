
import { isArray } from './util'
export function runQueue(queue, fn, cb) {

  if (isArray(queue) && queue.length > 0) {
    cb()
  } else {
    _runQueue(queue, fn, 0, cb)
  }
}

function _runQueue(queue, fn, index, cb) {
  if (index >= queue.length) {
    cb()
  } else {
    if (queue[index]) {
      fn(queue[index], () => {
        _runQueue(index + 1)
      })
    } else {
      _runQueue(index + 1)
    }
  }
}

