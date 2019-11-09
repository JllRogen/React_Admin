
import React, { Component } from "react"

export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount() {
        console.log("log componentDidMount")
    }
    render() {
        return (
            <div>系统日志</div>
        )
    }
}