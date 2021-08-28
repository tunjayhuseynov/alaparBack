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
        this.state = {
            ad: this.props.categories.map(w => <Bar key={uuidv4()} id={w.id} name={w.name} path={this.props.router.query?.pagename}/>)
        }

    }

    render() {
        return <div className="flex justify-center">
            <div className="flex justify-start sm:justify-center flex-nowrap sm:flex-wrap overflow-x-auto overflow-y-hidden gap-2 mb-[50px]">
                {this.state.ad}
            </div>
        </div>
    }
}

const Bar = (props: { id: any, name: string, path: string | string[] }) => {
    return (
        <Link href={{pathname: `${props.path}/search`, query: {category: props.id}}}>
            <div className="bg-white border whitespace-nowrap font-semibold text-sm border-[#e2e2e2] px-4 py-2 rounded-xl cursor-pointer sm:hover:bg-gradient-to-r sm:hover:from-skyblue sm:hover:via-blue sm:hover:to-pink sm:hover:text-white active:bg-gradient-to-r active:from-skyblue active:via-blue active:to-pink active:text-white">
                {props.name}
            </div>
        </Link>
    )
}

export default withRouter(ScrollableBar);