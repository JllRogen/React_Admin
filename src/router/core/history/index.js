
import HashHistory from './hash'

let history = null
export function createHashHistory(params) {
    history = new HashHistory(params)
    return history
}







