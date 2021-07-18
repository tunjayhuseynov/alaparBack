import { Component } from 'react'
import Utilities from '@/utilities';
import { Button } from 'antd';

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false
        };

        this.utility = new Utilities(this.props.childstate);
    }

    render() {
        return (
            <div id={'addSection'}>
                <div className={'container mx-auto grid grid-cols-1 md:grid-cols-3'}>
                    <div className={'bg-white my-3 py-3 md:col-span-2'}>
                        <div className={'customCol'}>
                            {this.props.children}

                            <div className={'py-5 text-center'}>
                                <Button
                                    type="primary"
                                    loading={this.state.loading}
                                    valid="addSection" 
                                    link={this.props.childstate.state.submitUrl}
                                    onClick={(e)=>{
                                        this.setState((state)=>state.loading = true);
                                        this.utility.submitClick(e);
                                    }}
                                >
                                    <span>Əlavə Et</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className={''}>
                        <div className={'customCol'}>

                        </div>
                    </div>
                </div>
            </div>

        )
    }

}
/*
                                <div className={"button"}>
                                    <a onClick={this.utility.submitClick} valid="addSection" link={this.props.childstate.state.submitUrl}>Elave et</a>
                                </div>
*/

export default Form;