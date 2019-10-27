import React, { Suspense } from "react";
import {
    HashRouter as Router,
    Route,
    Switch,
    useParams, 
    useHistory,
    useLocation,
    useRouteMatch
} from "react-router-dom";

import Layout from '../layout'

// const Home = React.lazy(() => import("../pages/home/home.jsx"))
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
                    <Switch>
                        <Route path="/home" exact component={React.lazy(() => import(/* webpackChunkName: 'home' */ "../pages/home/home.jsx"))} />
                        <Route path="/about" exact component={React.lazy(() => import(/* webpackChunkName: 'about' */ "../pages/about/about.jsx"))} />
                        <Route path="/detail/:id" exact component={React.lazy(() => import(/* webpackChunkName: 'detail' */ "../pages/detail/detail.jsx"))} />
                        <Route path="/rogen/:id" exact children={<Child />} />
                        <Route path="*" exact children={<div>no Match </div>} />
                    </Switch>
                </Suspense>
            </Layout>
        </Router>
    )
}


function Child(params) {
    console.log(useRouteMatch())
    let { id } = useParams()
    return (
        <div>id : {id}</div>
    )
}




export default AppRouter;

