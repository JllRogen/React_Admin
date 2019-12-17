// eslint-disable-next-line
import React, { useState, useEffect, useRef } from "react"
import { getLayoutRouter, getRootRouter } from '@/router'
import RgSide from './rg-side'
import RgHeader from './rg-header'
import RgContent from './rg-content'

import { Layout } from 'antd'

import './index.less'


export const router = getLayoutRouter()
let rootRouter = getRootRouter()
router.addParent(rootRouter)
rootRouter.addChild(router)
// rootRouter.subRouter = router

function AppLayout() {
    let ref = useRef()
    useEffect(() => {
        return router.mount(ref.current)
    }, []);
    return (
        <Layout className='rg-layout'>
            <RgSide />
            <Layout>
                <RgHeader />
                <RgContent >
                    <div className='full' ref={ref}></div>
                </RgContent>
            </Layout>
        </Layout>
    )
}



AppLayout.injectRouteHooks = function () {
    return {
        beforeHook({ location }, next) {
            console.log('layout Route hook')
            next()
        }
    }
}

export default AppLayout