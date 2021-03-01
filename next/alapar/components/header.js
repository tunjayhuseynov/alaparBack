import { Component } from 'react'
import Link from 'next/link'
import SearchBar from '@/subcomponents/searchbar'
import Carousel from '@/subcomponents/carousel'
import Card from '@/subcomponents/card'
import Navbar from '@/navbar'

class Header extends Component {
    constructor() {
        super()
    }

    render(h) {
        let arr = []
        for (let index = 0; index < 10; index++) {
            arr.push(
                <div key={index} className={'carousel-item-container'}>
                    <div className={'item'}>
                        <Card size={'45'} price={'55.000'} loc={'Sahil metrosu'} premium={true}>
                            <img src="placeholders/1.jpg" />
                            <img src="placeholders/2.jpg" />
                            <img src="placeholders/3.jpg" />
                            <img src="placeholders/1.jpg" />
                            <img src="placeholders/1.jpg" />
                            <img src="placeholders/1.jpg" />
                            <img src="placeholders/1.jpg" />
                            <img src="placeholders/1.jpg" />
                            <img src="placeholders/1.jpg" />
                            <img src="placeholders/1.jpg" />
                            <img src="placeholders/1.jpg" />
                            <img src="placeholders/1.jpg" />
                            <img src="placeholders/1.jpg" />
                            <img src="placeholders/1.jpg" />
                        </Card>
                    </div>
                </div>
            )
        }
        return (
            <div className={'header'}>
                <Navbar></Navbar>
                <div className={'title'}><span className={'underline'}>ALAPAR.AZ</span></div>
                <SearchBar></SearchBar>
                <div className={'premium'}>
                    <div className={'title'}><span className={'underline white'}>Premium</span></div>
                    <Carousel viewAmount={4}>
                        {arr}
                    </Carousel>
                </div>

            </div>
        );
    }
}

export default Header;