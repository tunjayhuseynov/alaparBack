import { Component } from 'react'


class FilterLayout extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <><div id={'filter'}>
                <div className={'containerFilter'}>
                    {this.props.children}
                </div>
            </div>
            </>
        )
    }
}

export default FilterLayout;