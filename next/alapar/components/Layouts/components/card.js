import { Component } from 'react'
import { Carousel } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import {base} from '@/Constructions/const'



class Card extends Component {
    constructor(props) {
        super(props)

        this.state = {
            images: [],
        };

        this.props.images.forEach(element => {
            this.state.images.push(
                <div key={uuidv4()} >
                    <img className="cursor-move max-w-full max-h-250 w-full h-250px object-cover" src={base + element.imagePath} />
                </div>
            )
        });
    }
    

    render() {
        return (
            <div id="card" className="flex flex-row flex-wrap sm:flex-nowrap sm:min-h-100 lg:min-h-150 shadow-custom">
                <div className="flex-none my-auto justify-self-center max-w-full sm:max-w-150px lg:max-w-250px lg:max-h-250">
                    <Carousel
                        adaptiveHeight={true}
                        draggable={true}
                        className={'w-full'}
                    >
                        {this.state.images}

                    </Carousel>
                </div>
                <div className="flex-grow-1 flex flex-col p-3">
                    <div className="flex-none h-40px grid grid-cols-12">
                        <div className={'col-span-12'}>
                            <h1 className={'truncate text-lg'} title={this.props.title}>{this.props.title}</h1>
                        </div>
                    </div>
                    <div className="flex-grow-1 flex flex-row">
                        {this.props.children}
                    </div>
                    <div className="flex-none h-25px text-lg font-medium">
                        {`${this.props.currency} ${Intl.NumberFormat('en-US').format(this.props.price)}`}
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;