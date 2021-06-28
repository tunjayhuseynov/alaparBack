import { Component } from 'react'
import Utilities from '@/utilities';

class Form extends Component {
    constructor(props) {
        super(props)
        this.utility = new Utilities(this.props.childstate);
    }

    render() {
        return (
            <div id={'addSection'}>
                <div className={'container'}>
                    <div className={'row'}>
                        <div className={'col first'}>
                            <div className={'customCol'}>
                                {this.props.children}

                                <div className={'part'}>
                                    <div className={"button"}>
                                        <a onClick={this.utility.submitClick} valid="addSection" link={this.props.childstate.state.submitUrl}>Elave et</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'col second'}>
                            <div className={'customCol'}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}


export default Form;