import React, { Suspense } from "react";   //  lazy Suspense必须同时使用


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


const { routes } = require('./modules/sys')

/**
 * 主路由
 *
 * @returns
 */
function AppRouter() {
    return (
        <Router getUserConfirmation={(result, callback) => {
            debugger
            // callback(true)
        }}>
            <Layout>
                <Suspense fallback={<div>loading....</div>}>
                    <Switch>{
                        routes.map((route) => (
                            <RouteWithSubRoutes key={route.path} {...route} />
                        ))
                    }</Switch>
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

