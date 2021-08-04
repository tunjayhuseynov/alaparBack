import { Component } from 'react'


class FilterLayout extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <><div id={'filter'}>
                <div className={'flex flex-col gap-4'}>
                    {this.props.children}
                </div>
            </div>
            </>
        )
    }
}

export default FilterLayout;