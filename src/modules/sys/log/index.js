// eslint-disable-next-line
import React, { useState, useEffect } from "react"


export default class extends React.Component {
    render() {
        return <div>324242342s</div>
    }
    componentWillUnmount() {
        console.log('log 销毁')
    }
}



// let wrapperRef = React.createRef()

// export default function () {
//     console.log('log....')

//     useEffect(() => {
//         console.log(wrapperRef.current)
//         ReactDOM.render(
//             <>
//                 <Test></Test>
//                 <Test></Test>
//             </>

//             , wrapperRef.current)
//         return () => {
//             console.log('clear')
//         };
//     }, []);
//     let [count, setCount] = useState(0)

//     // const [clear, setClear] = useState(false);
//     // if (clear) return null
//     return (
//         <>
//             <h1>Log</h1>
//             <h1>{count}</h1>
//             <div ref={wrapperRef}></div>
//             <Button onClick={() => setCount((c) => (c + 1))}>aa</Button>
//             <Button onClick={() => {
//                 if (!wrapperRef.current) return
//                 ReactDOM.render(null, wrapperRef.current)

//                 console.log(wrapperRef.current)
//                 wrapperRef.current.remove()
//                 wrapperRef.current = null
//             }}>clear</Button>
//         </>
//     )
// }

// function Test() {
//     useEffect(() => {
//         return () => {
//             console.log('clear test')
//         };
//     }, []);
//     return (
//         <div>test</div>
//     )
// }