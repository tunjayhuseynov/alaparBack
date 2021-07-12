// @ts-check
import { Component } from 'react'
import * as URL from '@/Constructions/const';
import Utilities from '@/utilities'
import Callbacks from '@/callbacks';
import Header from '@/Layouts/header';
import FilterLayout from '@/Constructions/filter';
import {stateProcess, InitFetch, pageprocess} from '@/controller'



class Search extends Component {
    constructor(props) {
        super(props)

        this.utility = new Utilities(this);
        this.callbacks = new Callbacks(this);

        this.html = null;
        stateProcess.bind(this)(this.props.pagename, pageprocess.search);

    }
    /*
     {posts.map(w => <div className={'col'}>
                            <Card size={'45'} price={w.price} loc={w.adress?.split(',')[0]} premium={true}>
                                {w.images.map(s=><img src={URL.base+s.thumbnail} />)}
                            </Card>
                        </div>)}
    */
    componentDidUpdate = async (prevProps, prevState) => {
        if (prevState.selected !== this.state.selected) {
            let conn = await fetch(`${URL.ANIMAL_SEARCH}?s=${0}&t=${20}`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                mode: 'cors',
                body: JSON.stringify(this.state.selected)
            });
            let res = await conn.json();
        }

    }

    render(h) {
        let content = this.html();
        return (
            <>
                <Header></Header>
                <div className={'searchbox container'}>
                    <div className={'split leftSide'}>
                        <div className={'box'}>
                            <FilterLayout>
                                {content}
                            </FilterLayout>
                        </div>
                    </div>
                    <div className={'split rightSide'}>




                    </div>
                </div>
            </>
        );
    }
}



export async function getStaticProps(context) {
    let pagename = context.params.pagename.toLowerCase();
    let url = InitFetch(pagename, pageprocess.search);

    const res = await fetch(url)
    const filter = await res.json()
    return {
        props: {
            filter,
            pagename: pagename
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


export default Search;