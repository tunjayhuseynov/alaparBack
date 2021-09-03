import { Component } from 'react';
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
            </div>
        );
    }

}

export default withRouter(Layout);