

let states = []
let setters = []
let cursor = 0

let cacheC = null
const React = {
    render(Component) {
        cacheC = Component
        let instance = Component()
        instance.render()
        cursor = 0
        return instance
    }
}

let timer = null
function createSetter(cursor) {
    return function (val) {
        states[cursor] = val
        clearTimeout(timer)
        timer = setTimeout(() => {
            React.render(cacheC)
        }, 0);
    }
}

export function useState(initialValue) {

    if (!setters[cursor]) {
        states.push(initialValue)
        setters.push(createSetter(cursor))
    }
    const state = states[cursor]
    const setter = setters[cursor]
    cursor++
    return [state, setter]
}



export function useEffect(fn) {

}


export default React