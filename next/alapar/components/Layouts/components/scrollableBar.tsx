import { Component, ReactNode } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Link from 'next/link'
import router, { withRouter, NextRouter } from 'next/router'
import { Input } from 'antd';


interface Props {
    categories: Array<{ id: number, name: string }>,
    router: NextRouter
}
interface State {
    ad: Array<ReactNode>
}

class ScrollableBar extends Component<Props, State> {
    length: number;
    constructor(props) {
        super(props)
        this.length = this.props.categories?.length;
            /*
            const reducer = this.props.categories?.reduce((a, c) => {
                const letter = c.name[0].toUpperCase()
                if (Object.keys(a).includes(letter)) {
                    a[letter].push(c)
                } else {
                    a[letter] = []
                    a[letter].push(c)
                }
                return a;
            }, {})

            ads = Object.entries(reducer).sort().map((w: [string, Array<Object>]) => {
                return <div className="flex flex-col p-5">
                    <div className="flex justify-center text-lg underline">{w[0]}</div>
                    <div className="grid grid-cols-2 gap-5">{w[1].map(w => !w["name"].toLowerCase().includes("digər") ? <Bar key={uuidv4()} id={w["id"]} name={w["name"]} path={this.props.router.query?.pagename} /> : null)}</div>
                </div> 

            })*/
        

        this.state = {
            ad: this.processAds(this.props.categories)
        }

    }

    processAds = (ads: Array<{ id: number, name: string }>, filter: string = null): ReactNode[] => {
        if (ads?.length < 20 && ads?.length > 0) {
            return ads?.map(w => <Bar key={uuidv4()} id={w.id} name={w.name} path={this.props.router.query?.pagename} />)
        }
        else {
            if (filter != null) {
                return ads.sort((a, b) => { return a.name.localeCompare(b.name); }).filter(w => w.name.toLowerCase().startsWith(filter.toLowerCase())).map(w => !w["name"].toLowerCase().includes("digər") ? <Bar key={uuidv4()} id={w["id"]} name={w["name"]} path={this.props.router.query?.pagename} /> : null);
            }
            return ads.sort((a, b) => { return a.name.localeCompare(b.name); }).map(w => !w["name"].toLowerCase().includes("digər") ? <Bar key={uuidv4()} id={w["id"]} name={w["name"]} path={this.props.router.query?.pagename} /> : null);
        }
    }

    render() {
        return <div className="grid grid-col-2 gap-5 ">
            <div className={`w-1/2 items-center justify-self-center text-center ${(this.length < 20 && this.length > 0) ? 'hidden' : ''}`}><span className="font-semibold">Kateqoriya:</span> <Input onInput={(e) => { this.setState({ad: this.processAds(this.props.categories, (e.target as HTMLInputElement).value|| null)}) }} placeholder="Aşağıdaki Siyahını Filtirləyin" className="flex-grow-0" /></div>
            <div className={(this.length < 20 && this.length > 0) ? `flex justify-center flex-wrap overflow-hidden gap-2 mb-[50px]` : `grid auto-rows-auto ${ this.length > 40 ? 'grid-cols-3 md:grid-cols-4' :'grid-cols-3'}  gap-5`}>
                {this.state.ad}
            </div>
        </div>
    }
}

const Bar = (props: { id: any, name: string, path: string | string[] }) => {
    return (
        <Link href={{ pathname: `${props.path}/search`, query: { category: props.id } }}>
            <div className="bg-white border  font-semibold text-sm border-[#e2e2e2] px-4 py-2 rounded-xl cursor-pointer sm:hover:bg-gradient-to-r sm:hover:from-skyblue sm:hover:via-blue sm:hover:to-pink sm:hover:text-white active:bg-gradient-to-r active:from-skyblue active:via-blue active:to-pink active:text-white">
                {props.name}
            </div>
        </Link>
    )
}

export default withRouter(ScrollableBar);