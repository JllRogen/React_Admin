import React, { Component } from "react";
import RgSide from './rg-side'
import RgHeader from './rg-header'
import RgContent from './rg-content'
// import RgFooter from './rg-footer'
import { Layout } from 'antd';

import './index.less'
// const { Footer } = Layout

export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        console.log(323424334234324234)
        return (
            <Layout className='rg-layout'>
                <RgSide />
                <Layout>
                    <RgHeader />
                    <RgContent> {this.props.children} </RgContent>
                    {/* <RgFooter /> */}
                </Layout>
            </Layout>
        )
    }
}