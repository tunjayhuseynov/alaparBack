//ts-check
import { Component } from 'react'
import Utilities from '@/utilities';
import Callbacks from '@/callbacks';
import Form from '@/Constructions/form';
import { stateProcess, InitFetch, pageprocess, pagenames } from '@/controller'
import Header from '@/Layouts/header';
import FilterLayout from '@/Constructions/filter';
import * as URL from '@/Constructions/const';

class StaticPages extends Component {
    constructor(props) {
        super(props)

        this.utility = new Utilities(this)
        this.callbacks = new Callbacks(this)

        this.html = null;
        if (this.props.processname == pageprocess.add)
            stateProcess.bind(this)(this.props.pagename, pageprocess.add);
        else if (this.props.processname == pageprocess.search)
            stateProcess.bind(this)(this.props.pagename, pageprocess.search);

    }

    componentDidUpdate = async (prevProps, prevState) => {
        if (this.props.processname == pageprocess.search && prevState.selected !== this.state.selected ) {
            let conn = await fetch(`${URL.BINA_SEARCH}?s=${0}&t=${20}`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                mode: 'cors',
                body: JSON.stringify(this.state.selected)
            });
            let res = await conn.json();

            this.setState({ ads: res })
        }

    }

    render() {
        let content = this.html();
        return this.props.processname == pageprocess.add ?
            // Add
            (
                <Form submit={this.utility.submitClick} link={this.state.submitUrl}>
                    {content}
                </Form>
            ) :
            // Search
            (
                <>
                    <Header></Header>

                    <FilterLayout state={this.state} ads={this.state.ads??[]}>
                        {content}
                    </FilterLayout>

                </>
            )
    }
}

export async function getStaticProps(context) {
    let pagename = context.params.pagename.toLowerCase();
    let processname = context.params.processname.toLowerCase();

    let url;

    if (processname == pageprocess.add)
        url = InitFetch(pagename, pageprocess.add)
    else if (processname == pageprocess.search)
        url = InitFetch(pagename, pageprocess.search)

    const res = await fetch(url)
    const filter = await res.json()
    return {
        props: {
            filter,
            pagename: pagename,
            processname: processname,
        },
    }
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { pagename: pagenames.animal, processname: pageprocess.add } },
            { params: { pagename: pagenames.auto, processname: pageprocess.add } },
            { params: { pagename: pagenames.bina, processname: pageprocess.add } },
            { params: { pagename: pagenames.child, processname: pageprocess.add } },
            { params: { pagename: pagenames.electro, processname: pageprocess.add } },
            { params: { pagename: pagenames.hobby, processname: pageprocess.add } },
            { params: { pagename: pagenames.home, processname: pageprocess.add } },
            { params: { pagename: pagenames.job, processname: pageprocess.add } },
            { params: { pagename: pagenames.private, processname: pageprocess.add } },
            { params: { pagename: pagenames.service, processname: pageprocess.add } },
            { params: { pagename: pagenames.animal, processname: pageprocess.search } },
            { params: { pagename: pagenames.auto, processname: pageprocess.search } },
            { params: { pagename: pagenames.bina, processname: pageprocess.search } },
            { params: { pagename: pagenames.child, processname: pageprocess.search } },
            { params: { pagename: pagenames.electro, processname: pageprocess.search } },
            { params: { pagename: pagenames.hobby, processname: pageprocess.search } },
            { params: { pagename: pagenames.home, processname: pageprocess.search } },
            { params: { pagename: pagenames.job, processname: pageprocess.search } },
            { params: { pagename: pagenames.private, processname: pageprocess.search } },
            { params: { pagename: pagenames.service, processname: pageprocess.search } },
        ],
        fallback: false // See the "fallback" section below
    };
}

export default StaticPages;