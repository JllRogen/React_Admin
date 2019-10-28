

const context = require.context('../../modules/sys', true, /\/route.js$/)
// require.context('./test', false, /\.test\.js$/);

export const routes = []

let mPath = 'sys'

export const menuMap = {
    [`/${mPath}`]: { // 顶级路由
        level: 1,
        title: '系统',
        path: `/${mPath}`,
        key: `/${mPath}`,
        menus: []
    }
}



context.keys().forEach(key => {
    let route = context(key).default
    if (Array.prototype.toString.call(route) !== '[object Object]') return
    if (!route.title) {
        console.log(key, '没有指定标题', route)
        return
    }
    let paths = key.split('/')
    paths[0] = mPath
    paths.pop()
    if (paths.length === 0) return
    let copy = Object.assign({}, route)
    let path = `/${paths.join('/')}`
    copy.path = path

    menuMap[path] = {
        level: paths.length,
        path,
        key: path,
        title: route.title || route.path,
        menus: []
    }
    paths.pop()
    let upPath = `/${paths.join('/')}`
    menuMap[path].upPath = upPath

    if (copy.component) {
        routes.push(copy)
    }

})
console.log(menuMap)




Object.keys(menuMap).forEach(path => {
    let menu = menuMap[path]
    if (menu.level !== 1) {
        let upPath = menu.upPath
        let upMenu = menuMap[upPath]
        if (!upMenu) {
            let paths = upPath.split('/')
            paths.shift()
            let p = paths.pop()
            upMenu = menuMap[upPath] = {
                level: paths.length,
                upPath: `/${paths.join('/')}`,
                key: upPath,
                path: upPath,
                title: p,
                menus: []
            }
            menuMap[upMenu.upPath].menus.push(upMenu)
        }
        upMenu.menus.push(menu)
    }
})

export const menus = menuMap['/sys'].menus