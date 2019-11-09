
import React, { useState, useMemo, useRef } from "react"


import { Input, Button } from 'antd'



export default function () {
    console.log("abcg")
    let [a, setA] = useState(0)
    let [b, setB] = useState(0)
    let sum = useMemo((x, y) => {
        console.log(x, y)
        return a + b
    }, [a, b])

    let ARef = useRef(null)
    return (
        <>
            <h1>消息详情</h1>
            <Input style={{ width: 200 }} value={a} ref={ARef} onChange={e => { setA(e.currentTarget.value * 1 || 0) }}></Input>
            <Button onClick={() => {
                ARef.current.focus()
            }}>+</Button>
            <Input style={{ width: 200 }} value={b} onChange={e => { setB(e.currentTarget.value * 1 || 0) }}></Input>=
            <span>{sum}</span>
        </>

    )
}

// export default class extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {}
//     }
//     render() {
//         return (
//             <div>消息详情</div>
//         )
//     }
// }