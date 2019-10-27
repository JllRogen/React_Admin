import React, { Component } from "react"
// import propTypes from 'prop-types';
// import { HashRouter as Router, Route, Link } from "react-router-dom"
// import ReactDOM from "react-dom"




class About extends Component {
    constructor(props) {
        super(props)
        debugger
        this.state = {
            subs: [1, 2, 3]
        }
    }

    componentDidMount() {
        console.log("componentDidMount")
    }




    render() {
        return (
            <div className="about" >
                <div>关于</div>
            </div>
        );
    }
}

console.log(About.abc)

export default About;