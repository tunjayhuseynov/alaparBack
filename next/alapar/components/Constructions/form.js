import { Component } from 'react'
import { Button } from 'antd';

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            url: this.props.link,
            submitClick: this.props.submit
        };

    }

    render() {
        return (
            <div id={'addSection'}>
                <div className={'container mx-auto grid grid-cols-1 md:grid-cols-3'}>
                    <div className={'bg-white my-3 py-3 md:col-span-2'}>

                        <div className={'customCol'}>
                            <div className={'px-10 py-4 '}>
                                <span className={'text-xs'}>* - Zəruri Doldurulmalıdır </span>
                            </div>
                            {this.props.children}

                            <div className={'py-5 text-center'}>
                                <Button
                                    type="primary"
                                    loading={this.state.loading}
                                    valid="addSection"
                                    link={this.state.url}
                                    onClick={(e) => {
                                        this.state.submitClick("addSection", this.state.url);
                                        //this.setState((state)=>state.loading = true);
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

export default Form;