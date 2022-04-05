//ts-check
import { Component, useMemo } from 'react'
import Utilities from '@/utilities';
import Callbacks from '@/callbacks';
import { stateProcess, labelNames, InitFetch, pageprocess, pagenames } from '@/controller'
import Header from '@/Layouts/header';
import FilterLayout from '@/Constructions/filter';

const Search = ({filter, pagename, color}) => {
    const utility = useMemo(() => new Utilities(this), [])
    const callbacks = useMemo(() => new Callbacks(this), [])


    return (
        <>
            {/* <Header color={this.props.maincolor}></Header> */}

            <FilterLayout state={this.state} router={this.props.router} ads={this.state.ads ?? []}>
                {content}
            </FilterLayout>

        </>
    )
}

// class StaticPages extends Component {
//     constructor(props) {
//         super(props)

//         this.utility = new Utilities(this)
//         this.callbacks = new Callbacks(this)
//         this.html = null;
//         stateProcess.bind(this)(this.props.pagename, pageprocess.filter);

//         this.state.progressBar = false
//     }

//     componentDidMount = () => {
//         this.controller = new AbortController();
//         this.signal = this.controller.signal;
//     }

//     componentDidUpdate = async (prevProps, prevState) => {
//         if (prevState.selected !== this.state.selected) {
//             if (this.state.progressBar) {
//                 this.controller.abort()
//                 this.controller = new AbortController();
//                 this.signal = this.controller.signal;
//             }
//             await this.searchSendData()
//         }
//     }

//     searchSendData = async () => {
//         this.setState({ progressBar: true })
//         let conn = await fetch(`${InitFetch(this.props.pagename, pageprocess.search)}?s=${0}&t=${20}`, {
//             method: "POST",
//             signal: this.signal,
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             mode: 'cors',
//             body: JSON.stringify(this.state.selected)
//         });

//         let res = await conn.json();

//         this.setState({ ads: res, progressBar: false })
//     }

//     render() {

//         let content = this.html();
//         return (
//             <>
//                 {/* <Header color={this.props.maincolor}></Header> */}

//                 <FilterLayout state={this.state} router={this.props.router} ads={this.state.ads ?? []}>
//                     {content}
//                 </FilterLayout>

//             </>
//         )
//     }
// }


export async function getServerSideProps(context) {
    let pagename = context.params.pagename.toLowerCase();
    const url = InitFetch(pagename, pageprocess.filter)

    const res = await fetch(url)
    const filter = await res.json()
    return {
        props: {
            filter,
            pagename: pagename,
            color: labelNames[pagename]?.mainColor
        },
    }
}

export default Search
// export default StaticPages;