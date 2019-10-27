import React, { Component } from "react"
import "./home.less"
import { Button } from 'antd'
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            t: 0,
            num: 5,
            info: {
                name: "jiang",
                age: 28
            }
        }
        this.handlerInput = this.handlerInput.bind(this)
    }

    handlerInput(value) {
        console.log(value * 10)
        this.setState({
            t: value,
            num: value * 10,
            info: {
                name: "rogen",
                age: 18
            }
        })

    }
    render() {
        let { props } = this
        let { history } = props
        return (
            <div className="home" >
                <div>首页</div>
                <Button onClick={() => {
                    history.push('/about')
                }}>点击一下到关于</Button>

            </div>

        );
    }
}

export default Home;