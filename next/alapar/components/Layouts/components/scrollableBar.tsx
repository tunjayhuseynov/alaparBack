import { Component, ReactNode } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Link from 'next/link'
import router, { withRouter, NextRouter } from 'next/router'

interface Props {
    categories: Array<{ id: number, name: string }>,
    router: NextRouter
}
interface State {
    ad: Array<ReactNode>
}

class ScrollableBar extends Component<Props, State> {
    constructor(props) {
        super(props)
        let ads;

        if (this.props.categories?.length < 20 && this.props.categories?.length > 0) {
            ads = this.props.categories?.map(w => <Bar key={uuidv4()} id={w.id} name={w.name} path={this.props.router.query?.pagename} />)
        }
        else {
            const reducer = this.props.categories?.reduce((a, c) => {
                const letter = c.name[0].toUpperCase()
                if (Object.keys(a).includes(letter)) {
                    a[letter].push(c)
                } else {
                    a[letter] = []
                    a[letter].push(c)
                }
                return a;
            }, { })

            ads = Object.entries(reducer).map((w: [string, Array<Object>])=> {
                return <div className="flex flex-col">
                    <div className="flex justify-center text-lg">{w[0]}</div>
                    <div className="flex justify-start sm:justify-center flex-nowrap sm:flex-wrap overflow-x-auto overflow-y-hidden gap-2 mb-[50px]">{w[1].map(w=><Bar key={uuidv4()} id={w["id"]} name={w["name"]} path={this.props.router.query?.pagename} />)}</div>
                </div>

            })
        }

        this.state = {
            ad: ads
        }

    }

    render() {
        return <div className="flex justify-center">
            <div className={(this.props.categories?.length < 20 && this.props.categories?.length > 0) ? `flex justify-start sm:justify-center flex-nowrap sm:flex-wrap overflow-x-auto overflow-y-hidden gap-2 mb-[50px]` : null}>
                {this.state.ad}
            </div>
        </div>
    }
}

const Bar = (props: { id: any, name: string, path: string | string[] }) => {
    return (
        <Link href={{ pathname: `${props.path}/search`, query: { category: props.id } }}>
            <div className="bg-white border whitespace-nowrap font-semibold text-sm border-[#e2e2e2] px-4 py-2 rounded-xl cursor-pointer sm:hover:bg-gradient-to-r sm:hover:from-skyblue sm:hover:via-blue sm:hover:to-pink sm:hover:text-white active:bg-gradient-to-r active:from-skyblue active:via-blue active:to-pink active:text-white">
                {props.name}
            </div>
        </Link>
    )
}

export default withRouter(ScrollableBar);