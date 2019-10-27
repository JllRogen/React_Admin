import React, { Suspense } from "react";


import {
    HashRouter as Router,
    Route,
    Switch,
    // useParams, 
    // useHistory,
    // useLocation,
    // useRouteMatch
} from "react-router-dom";

import Layout from '../layout'

const {routes} = require('./modules/sys')

/**
 * 主路由
 *
 * @returns
 */
function AppRouter() {
    return (
        <Router>
            <Layout>
                <Suspense fallback={<div>loading....</div>}>
                    <Switch>{
                        routes.map((route ) =>(
                            <RouteWithSubRoutes key={route.path} {...route}/> 
                        ))
                    }</Switch>
                </Suspense>
            </Layout>
        </Router>
    )
}


function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      component={route.component}
    //   render={props => (
    //     <route.component {...props} routes={route.routes} />
    //   )}
    />
  );
}










// function Child(params) {
//     console.log(useRouteMatch())
//     let { id } = useParams()
//     return (
//         <div>id : {id}</div>
//     )
// }




export default AppRouter;

