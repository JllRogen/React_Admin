/**
 * 工具函数
 */

export const emptyObject = Object.freeze({})
export function isUndef(v) {
    return v === undefined || v === null
}

export function isDef(v) {
    return v !== undefined && v !== null
}

export function isTrue(v) {
    return v === true
}

export function isFalse(v) {
    return v === false
}

/**
 * Check if value is primitive.
 */
export function isPrimitive(value) {
    return (
        typeof value === 'string' ||
        typeof value === 'number' ||
        typeof value === 'symbol' ||
        typeof value === 'boolean'
    )
}


export function isObject(obj) {
    return obj !== null && typeof obj === 'object'
}


const _toString = Object.prototype.toString


export function toRawType(value) {
    return _toString.call(value).slice(8, -1)
}


export function isPlainObject(obj) {
    return _toString.call(obj) === '[object Object]'
}

export function isRegExp(v) {
    return _toString.call(v) === '[object RegExp]'
}

export function isValidArrayIndex(val) {
    const n = parseFloat(String(val))
    return n >= 0 && Math.floor(n) === n && isFinite(val)
}

export function isPromise(val) {
    return (
        isDef(val) &&
        typeof val.then === 'function' &&
        typeof val.catch === 'function'
    )
}

export function isError(err) {
    return _toString.call(err).indexOf('Error') > -1
}

export function isFun(val) {
    return _toString.call(val) === '[object Function]'
}

export function isArray(val) {
    return _toString.call(val) === '[object Array]'
}

export function toString(val) {
    return val == null
        ? ''
        : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
            ? JSON.stringify(val, null, 2)
            : String(val)
}

export function toNumber(val) {
    const n = parseFloat(val)
    return isNaN(n) ? val : n
}



/**
 * Make a map and return a function for checking if a key is in that map.
 */
export function makeMap(str, expectsLowerCase) {
    const map = Object.create(null)
    const list = str.split(',')
    for (let i = 0; i < list.length; i++) {
        map[list[i]] = true
    }
    return expectsLowerCase
        ? val => map[val.toLowerCase()]
        : val => map[val]
}


export function remove(arr, item) {
    if (arr.length) {
        const index = arr.indexOf(item)
        if (index > -1) {
            return arr.splice(index, 1)
        }
    }
}


/**
 * Create a cached version of a pure function.
 */
export function cached(fn) {
    const cache = Object.create(null)
    return (function cachedFn(str) {
        const hit = cache[str]
        return hit || (cache[str] = fn(str))
    })
}
