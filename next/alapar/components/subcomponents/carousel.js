import { Component } from 'react'
import { MdArrowBack, MdArrowForward } from "react-icons/md"
class Carousel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            itemContainerWidth: 0,
            index: 0,
            margin: this.props.viewAmount
        }

        this.PositionChage = this.PositionChage.bind(this)
    }

    async PositionChage(p) {
        if (typeof window !== 'undefined') {
            let items = document.querySelectorAll(".carousel-item-container");
            let futureIndex = p == 'r' ?
                this.state.index + 1 > items.length - this.state.margin ? this.state.index : this.state.index + 1 :
                this.state.index - 1 < 0 ? this.state.index : this.state.index - 1;
            await this.setState({ index: futureIndex })
            items.forEach((item) => {
                item.style.transform = `translateX(-${this.state.itemContainerWidth * (this.state.index)}px)`
            })
        }

    }

    componentDidMount() {
        this.setState({
            itemContainerWidth: document.querySelector('.carousel-item-container').clientWidth
        })
    }


    render(h) {
        return (
            <div className={'header-carousel'}>
                <div className={'previous-button'} onClick={() => { this.PositionChage('l') }}>
                    <MdArrowBack />
                </div>
                <div className={'header-carousel-container'}>
                    {this.props.children}
                </div>
                <div className={'next-button'} onClick={() => { this.PositionChage('r') }}>
                    <MdArrowForward />
                </div>
            </div>

        );
    }

}

export default Carousel;