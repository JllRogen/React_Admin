
import React, { Component } from "react"

class Boiling extends Component {
    constructor(props) {
        super(props)
        this.state = { t: 0 }
        this.handlerInput = this.handlerInput.bind(this)
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.t} onChange={this.handlerInput} />
            </div>
        )
    }
    handlerInput(e) {
        this.setState({
            t: e.target.value
        })
        this.props.onInputChange(e.target.value)
    }
}
export default Boiling