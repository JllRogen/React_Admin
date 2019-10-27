

const context  = require.context('../../modules/sys', true,  /\/route.js$/)
// require.context('./test', false, /\.test\.js$/);

let routes = []

let mPath = 'sys'

context.keys().forEach(key =>{
   
    let route = context(key).default 
    if(!route) return
    let paths = key.split('/')
    paths.pop()
    paths.shift()
    let copy = Object.assign({}, route)
    let path = `/${mPath}/${paths.join('/')}`
    copy.path = path 
    console.log( path  )
    routes.push( copy )
})


export default routes 



