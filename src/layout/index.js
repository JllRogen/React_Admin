import React, { Component } from "react";
import RgSide from './rg-side'
import RgHeader from './rg-header'
import RgContent from './rg-content'
import { Layout } from 'antd';

import './index.less'
const { Footer } = Layout

export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <Layout className='rg-layout'>
                <RgSide />
                <Layout>
                    <RgHeader />
                    <RgContent> {this.props.children} </RgContent>
                    <Footer style={{ textAlign: 'center' }}>jll rogen @ 2019</Footer>
                </Layout>
            </Layout>
        )
    }
}