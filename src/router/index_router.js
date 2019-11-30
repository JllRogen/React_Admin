import React, { Suspense } from "react";   //  lazy Suspense必须同时使用
import ReactDOM from 'react-dom'
import Switch from './components/Switch'
import Route from './components/Route'
import {
    HashRouter as Router,
    // Route,
    // Switch,
    // useParams, 
    // useLocation,
    // useRouteMatch
} from "react-router-dom";

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
                    <Switch>
                        {routes.map((route) => (
                            <RouteWithSubRoutes key={route.path} {...route} />
                        ))}
                        < Route path="*" render={() => {
                            return "not Match "
                        }}></Route>
                    </Switch>
                </Suspense>
            </Layout>
        </Router >
    )
}


function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            // render={({ location, history }) => {
            //     // let el = document.createElement('div')
            //     // let data = ReactDOM.createPortal(
            //     //     <route.component></route.component>,
            //     //     el,
            //     // );
            //     // console.log(data)
            //     // debugger
            //     return (<div>
            //         <route.component></route.component>
            //     </div>)
            // }}
            component={route.component}
        />
    );
}


export default AppRouter;

