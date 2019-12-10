
import React, { useEffect } from 'react'


import { Button } from 'antd'
/**
 * 登入页面
 */
export default function Login(props) {
    console.log(props)
    useEffect(() => {
        // return props.addBeforeHook((location, next) => {
        //     debugger
        // })
    }, []);
    return (
        <div>
            <h1>登入</h1>
            <Button>登入</Button>
        </div>
    )
}

Login.injectRouteHooks = function () {
    return {
        beforeHook({ location }, next) {
            next()
        }
    }
}

