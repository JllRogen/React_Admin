import { initMixin } from './init'

import { bindMixin } from './bind'

import { stateMixin } from './state'
function Router(options) {
    this._init(options)
}


initMixin(Router)
bindMixin(Router)
stateMixin(Router)
export default Router