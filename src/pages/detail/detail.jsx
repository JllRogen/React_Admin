import React, { Component } from "react"



function Welcome(props) {
    return <div>hello {props.name}</div>
}

class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = { date: new Date(), value: 0 }
    }
    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({ date: new Date() })
            this.setState((state, props) => {
                let v = state.value + props.step
                return { value: parseFloat(v.toFixed(1)) }
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }
    render() {
        return (
            <div>
                <div>It's {this.state.date.toLocaleTimeString()}</div>
                <div>value {this.state.value}</div>
            </div>

        )
    }
}




class Detail extends Component {
    constructor(props) {
        super(props)
        let params = props.match.params
        let id = params.id
        this.state = { id, step: .1, list: [1, 3, 32,] }
        this.handlerTest = this.handlerTest.bind(this)
    }
    componentDidMount() {
        // this.timer = setInterval(() => {
        //     this.setState(state => {
        //         return { step: state.step + .1 }
        //     })
        // }, 1000);

    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }
    render() {
        return (
            <div className="home" >
                <div>detail {this.state.id}</div>
                <Welcome name="rogen"></Welcome>
                <Clock step={this.state.step}></Clock>
                {/* <a href="#" onClick={this.handlerTest}>click</a> */}
                <div>{
                    this.state.list.map(value => {
                        return <div key={value.toString()}> {value * 2}</div>
                    })
                }</div>
            </div >
        );
    }
    handlerTest(e) {
        e.preventDefault()
        console.log(this)
    }
}




export default Detail;