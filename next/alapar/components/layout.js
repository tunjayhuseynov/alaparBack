import Header from '@/Layouts/header'
import { Component } from 'react';
import Head from "next/head"
import { Button, Tooltip } from 'antd';
import { BiPlusMedical } from 'react-icons/bi'
import Link from 'next/link'
import Navbar from '@/Layouts/navbar'


class Layout extends Component {
    constructor(props) {
        super(props)
    }
    render(h) {
        return (
            <div>
                <Head>
                    <link rel="stylesheet" href={'https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css'} />
                </Head>
                <Navbar></Navbar>
                <Header></Header>
                {this.props.children}
                <div className={'fixed fixRight fixBottom'}>
                    <Link scroll={false} href="/add">
                        <Tooltip title="Elan Əlavə Et">
                            <Button type="primary" className={'fixedBtnSize'} size={'large'} shape="circle" icon={<BiPlusMedical />} />
                        </Tooltip>
                    </Link>
                </div>
            </div>
        );
    }

}

export default Layout;