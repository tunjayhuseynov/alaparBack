import React, { Component } from 'react'
import { BiDollar } from 'react-icons/bi'
import { MdLocationOn } from 'react-icons/md'
import { BiDoorOpen } from 'react-icons/bi'
import { IoIosResize } from 'react-icons/io'
import { FaRegBuilding } from 'react-icons/fa'
import { GiQueenCrown } from 'react-icons/gi'

import { format } from 'path'

var crypto = require("crypto")

class Card extends Component {
    constructor(props) {
        super(props)

        this.state = {
            imgWidth: 0,
            dotAmount: 0,
        }

        this.imageList = React.createRef()

        this.changeImageIndex = this.changeImageIndex.bind(this)
    }

    componentDidMount() {
        if (typeof window !== 'undefined') {
            let imgWidthValue = document.querySelector(".slider img").clientWidth;
            let imgAmount = this.props.children.length ?? 0;

            this.setState({
                imgWidth: imgWidthValue,
                dotAmount: imgAmount,
                imageIndex: 0
            })

        }
    }

    async changeImageIndex(index) {
        if (typeof window !== 'undefined') {
            await this.setState({
                imageIndex: index
            })

            this.imageList.current.querySelectorAll('img').forEach(e => {
                e.style.transform = `translateX(-${(this.state.imgWidth * this.state.imageIndex)}px)`
            })

        }

    }

    render(h) {
        return (
            <div className={`card ${this.props.noShadow==true?'noShadow':''}`}>
                <div className={'card-main-side'}>
                    <div className={'background'}>
                        <div className={'slider'} ref={this.imageList}>
                            {this.props.children}
                        </div>
                        <div className={'leftPart'}>
                            <div className={`Premium ${this.props.premium==true?'':'none'}`}>
                                <GiQueenCrown/>
                            </div>
                            <div className={'sliderDots'}>
                                {Array.apply(null, { length: this.state.dotAmount })
                                    .map((w, index) => <div key={`${crypto.randomBytes(5).toString('hex')}`}
                                        className={`dot ${this.state.imageIndex == index ? 'activeDot' : ''}`}
                                        onClick={() => this.changeImageIndex(index)}></div>)
                                }
                            </div>
                        </div>
                    </div>
                    <div className={'rightPart'}>
                        <div className={'item'}>
                            <div className={'icon'}>
                                <IoIosResize />
                            </div>
                            <div className={'value'}>
                                55 m²
                            </div>
                        </div>
                        <div className={'item'}>
                            <div className={'icon'}>
                                <BiDoorOpen />
                            </div>
                            <div className={'value'}>
                                3
                            </div>
                        </div>
                        <div className={'item'}>
                            <div className={'icon'}>
                                <FaRegBuilding />
                            </div>
                            <div className={'value'}>
                                5/9
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'card-bottom-side'}>
                    <div className={'leftSide side'}>
                        <div className={'icon'}>
                            <BiDollar />
                        </div>
                        <div className={'value'}>
                            {this.props.price}
                        </div>
                    </div>
                    <div className={'rightSide side'}>
                        <div className={'icon'}>
                            <MdLocationOn />
                        </div>
                        <div className={'value'}>
                            {this.props.loc}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;