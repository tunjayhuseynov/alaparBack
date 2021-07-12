// @ts-check
import { Component } from 'react'
import Utilities from '@/utilities';
import Callbacks from '@/callbacks';
import Form from '@/Constructions/form';
import {stateProcess, InitFetch, pageprocess} from '@/controller'


class Add extends Component {
    constructor(props) {
        super(props)

        this.utility = new Utilities(this)
        this.callbacks = new Callbacks(this)

        this.html = null;
        stateProcess.bind(this)(this.props.pagename, pageprocess.add);

    }

    render() {
        let content = this.html();
        return content ? (
            <Form childstate={this}>
                {content}
            </Form>
        ) : null;
    }
}

export async function getStaticProps(context) {
    let pagename = context.params.pagename.toLowerCase();

    let url = InitFetch(pagename, pageprocess.add);

    const res = await fetch(url)
    const filter = await res.json()
    return {
        props: {
            filter,
            pagename: pagename, 
        },
    }
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { pagename: 'animal' } },
            { params: { pagename: 'auto' } },
            { params: { pagename: 'dasinmaz' } },
            { params: { pagename: 'electro' } },
            { params: { pagename: 'hobby' } },
            { params: { pagename: 'home' } },
            { params: { pagename: 'job' } },
            { params: { pagename: 'private' } },
            { params: { pagename: 'child' } },
            { params: { pagename: 'service' } },
        ],
        fallback: false // See the "fallback" section below
    };
}

export default Add;