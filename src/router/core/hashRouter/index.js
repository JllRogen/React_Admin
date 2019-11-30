

import React, { useEffect, useReducer } from 'react'
import { createHashHistory as createHistory } from "history";


// const history = createHistory();

let history = null

// let location = null 
function locationReducer(oldLocation, newLocation) {
    return newLocation
}


const pages = []

export default function (props) {

    let [location, dispatchLocation] = useReducer(locationReducer, null)
    useEffect(() => {
        history = createHistory(props)
        let unlisten = history.listen(location => {

            dispatchLocation(location)
        })
        return () => (unlisten && unlisten())
    }, []);




    return (
        <div className='rg-router'>{pages}</div>
    )
}