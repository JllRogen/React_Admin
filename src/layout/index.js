import React, {
    // useState, useEffect
} from "react";
import RgSide from './rg-side'
import RgHeader from './rg-header'
import RgContent from './rg-content'
// import RgFooter from './rg-footer'
import { Layout } from 'antd';

import './index.less'
// const { Footer } = Layout

export default function (props) {
    // const [count, setCount] = useState(0);
    // useEffect(() => {
    //     setInterval(() => {
    //         setCount(count => (count + 1))
    //     }, 1000);
    // }, []);
    return (
        <Layout className='rg-layout'>
            <RgSide />
            <Layout>
                <RgHeader />
                <RgContent>{props.children}</RgContent>
                {/* <RgFooter /> */}
            </Layout>
        </Layout>
    )
}