

const context  = require.context('../../modules/sys', true,  /\/route.js$/)
// require.context('./test', false, /\.test\.js$/);

export const routes = []


export const  menuMap = {
    '/sys' : {
        level: 1, 
        path: '/sys' ,
        key: '/sys', 
        menus: []
    }
}


let mPath = 'sys'

context.keys().forEach(key =>{
    let route = context(key).default 
    if(!route) return
    let paths = key.split('/')
    paths[0] = mPath
    paths.pop()
    if(paths.length  === 0 ) return 
    let copy = Object.assign({}, route)

    let path = `/${paths.join('/')}`
    copy.path = path 

    
    menuMap[path] = {
        level: paths.length , 
        path, 
        key: path, 
        title: route.title || route.path , 
        menus: []
    }

    paths.pop()
    let upPath = `/${paths.join('/')}`
    menuMap[path].upPath = upPath
    
    
    console.log( path  )
    if(copy.component){
        routes.push( copy )
    }
    
})
console.log(menuMap)




Object.keys(menuMap).forEach(path=>{
    let menu = menuMap[path]
    if(menu.level !== 1) {
        let upPath = menu.upPath
        let upMenu = menuMap[upPath]
        // if(!upMenu){
        //     upMenu  =  {
        //         key: upPath, 
        //         path: upPath, 
        //         menus:[]
        //     }
        //     menus.push(upMenu)
        // }
        // let upMenuMenus = upMenu.menus ||(upMenu.menus = [])
        upMenu.menus.push(menu)
    }

} )

export const  menus = menuMap['/sys'].menus
// console.log(menus )