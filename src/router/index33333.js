import React, { Suspense } from "react";   //  lazy Suspense必须同时使用

import { HashRouter as Router, Route } from 'react-keeper'
import Layout from '../layout'


const { routes } = require('./modules/sys')

// 
// function getUserConfirmation(promps, callback) {
//     console.log(promps)
//     callback(false)
// }



/**
 * 主路由
 *
 * @returns
 */
function AppRouter() {
    return (
        <Router
        // getUserConfirmation={getUserConfirmation}
        >
            <Layout>
                <Suspense fallback={<div>loading....</div>}>
                    {routes.map((route) => (
                        <RouteWithSubRoutes key={route.path} {...route} />
                    ))}
                    < Route path="*" render={() => {
                        return "not Match"
                    }}></Route>
                </Suspense>
            </Layout>
        </Router >
    )
}


function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            component={route.component}
        />
    );
}


export default AppRouter;

