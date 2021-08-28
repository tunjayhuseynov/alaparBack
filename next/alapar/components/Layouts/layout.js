import { Component } from 'react';
import Head from "next/head"
import { Button, Tooltip } from 'antd';
import { BiPlusMedical } from 'react-icons/bi'
import Link from 'next/link'
import Navbar from '@/Layouts/navbar'

import { motion, AnimatePresence } from 'framer-motion'
import { withRouter } from 'next/router'

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
                <AnimatePresence>
                    <motion.div key={this.props.router.route} initial={"pageInitial"} animate={"pageAnimate"} variants={{
                        pageInitial: {
                            x: "100%",
                            opacity: 0,
                        },
                        pageAnimate: {
                            x: "0%",
                            opacity: 1,
                        },
                    }}>
                        {this.props.children}
                    </motion.div>
                </AnimatePresence>
                <div className={'fixed fixRight fixBottom'}>
                    <Link scroll={false} href="/dasinmaz/add">
                        <Tooltip title="Elan Əlavə Et">
                            <Button type="primary" className={'fixedBtnSize'} size={'large'} shape="circle" icon={<BiPlusMedical />} />
                        </Tooltip>
                    </Link>
                </div>
            </div>
        );
    }

}

export default withRouter(Layout);