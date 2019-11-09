
import React, { useState, useEffect } from "react"


// import warning from 'tiny-warning';


import './index.less'
import { Affix, Button, Input } from 'antd'

let temp = null
function useRgLong(x) {

    let [value, setValue] = useState(0)
    console.log(2323, temp === setValue)
    temp = setValue
    useEffect(() => {
        let id = setInterval(() => {
            setValue((w) => (w + 1))
        }, 1000);
        return () => clearInterval(id)
    }, [])

    return [value, setValue]
}

export default function Home() {
    console.log("home ")
    return (
        <div className='home' >
            <h1>home</h1>

            {/* <InputView></InputView> */}
            <KmView></KmView>
            <MView></MView>
            <Counter initialCount={0}></Counter>
        </div>
    )
}


function Counter({ initialCount }) {
    const [count, setCount] = useState(initialCount);
    return (
        <>
            <div>Count: {count}</div>

            <Button onClick={() => setCount(initialCount)}>Reset</Button>
            <Button onClick={() => setCount(prevCount => prevCount - 1)}>-</Button>
            <Button onClick={() => setCount(prevCount => prevCount + 1)}>+</Button>
        </>
    );
}




function InputView() {
    let [, setLong] = useRgLong()
    return (
        <Input style={{ width: 300 }} onChange={(e) => {
            let value = e.currentTarget.value * 1
            console.log(value)
            setLong(value)
        }}></Input>
    )
}

function KmView() {
    let [long] = useRgLong(1)
    return (
        <h1>{long * .001}KM</h1>
    )
}
function MView() {
    let [long] = useRgLong(() => 100)
    return (
        <h1>{long}M</h1>
    )
}