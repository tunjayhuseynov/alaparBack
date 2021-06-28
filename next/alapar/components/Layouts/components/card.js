import { Component } from 'react'
import { Carousel } from 'antd';
import SwiperCore, { Pagination, Lazy } from 'swiper';
import { v4 as uuidv4 } from 'uuid';

import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Pagination, Lazy]);

class Card extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let list = []
        for (let index = 0; index < 10; index++) {
            list.push(
                <SwiperSlide key={uuidv4()} >
                    <img className="cursor-move swiper-lazy" src={"https://source.unsplash.com/random/1000x100" + index} />
                </SwiperSlide>)

        }
        /*
            <Carousel className={'w-full h-full'} adaptiveHeight={true} draggable>
                        {list}
            </Carousel>
         */
        return (
            <div id="card" className="flex flex-row flex-wrap sm:flex-nowrap sm:min-h-100 lg:min-h-150 shadow-custom">
                <div className="flex-none justify-self-center max-w-full sm:max-w-150px lg:max-w-250px">
                    <Swiper
                        autoHeight={true}
                        preloadImages={false}
                        lazy={{checkInView: true, loadPrevNext: true, loadOnTransitionStart: true}}
                        pagination={{ clickable: true, dynamicBullets: true }}
                    >
                        {list}
                    
                    </Swiper>
                </div>
                <div className="flex-grow flex flex-col p-3">
                    <div className="flex-none h-40px grid grid-cols-12">
                        <div className={'col-span-12'}>
                            <h1 className={'truncate text-lg'} title={'Apple, Iphone 12 Pro Max 128GB 8Ram'}>Apple, Iphone 12 Pro Max 128GB 8Ram</h1>
                        </div>
                    </div>
                    <div className="flex-grow">

                    </div>
                    <div className="flex-none h-25px">
                        25.000$
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;