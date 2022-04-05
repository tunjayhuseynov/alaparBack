import { Component } from 'react';
import Navbar from '@/Layouts/navbar'

import { motion, AnimatePresence } from 'framer-motion'
import { withRouter } from 'next/router'
import { MainContext } from 'pages/_app'

class Layout extends Component {
    constructor(props) {
        super(props)
    }
    render(h) {
        return (
            <MainContext.Consumer>
                {
                    ({ auth, user }) => <>
                        <Navbar isUser={auth} user={user}></Navbar>
                        <div className="w-full h-full pt-[75px]" key={this.props.router.route}>
                            {this.props.children}
                        </div>
                    </>
                }
            </MainContext.Consumer>

        );
    }

}

export default withRouter(Layout);