import { Component, useEffect, useState } from 'react'
import Card, { General } from '@/Layouts/components/card'
import { v4 as uuidv4 } from 'uuid'
import { NextRouter, useRouter } from 'next/router'
import { Skeleton } from 'antd';
import { BsArrow90DegRight } from 'react-icons/bs'

interface Props {
    animal: boolean,
    auto: boolean,
    bina: boolean,
    electro: boolean,
    hobby: boolean,
    home: boolean,
    job: boolean,
    private: boolean,
    child: boolean,
    service: boolean,
    category: object;
    ads: Array<General>;
    router: NextRouter,
    state: any,
    children: any
}
const FilterLayout = (props: Props) => {

    const router = useRouter()
    const query = router.query

    // useEffect(() => {
    //     if (query?.category != null) {
    //         //props.state.typeFirstCallback(+query.category)
    //         props.state.categoryCallback(+query.category)
    //     }

    // }, [query])


    return (
        <div className="xl:max-w-[1080px] mx-auto mt-[100px] ">
            {/* <div className="text-center block mb-12">
                <h1 className="text-[2rem]">
                    <span style={{ fontFamily: "'Bodoni Moda', serif",  }}>Axtarış</span>
                    <span className={'h-2px w-3% bg-primary block mx-auto my-0'}></span>
                </h1>
            </div> */}
            <div className={'flex flex-col lg:flex-row min-h-screen gap-4 px-2 md:px-16'}>
                <div className={'flex-grow-0 w-[300px] md:w-auto lg:w-[250px] self-center md:self-start text-center py-4 shadow-customSec bg-white rounded-lg'}>
                    <div className={'box'}>
                        <div id={'filter'} className={'mb-5'}>
                            <div className={'flex flex-col  md:grid md:grid-cols-3 lg:flex lg:flex-col gap-4'}>
                                <div className={'font-semibold text-lg px-5'}>Filtr <BsArrow90DegRight className={'inline rotate-90'} /></div>
                                {props.children}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'mt-[65px] flex-grow-2 flex flex-col gap-5 md:pl-3 rounded md:min-h-screen border-t py-5 md:py-0 md:border-t-0 bg-gradient-to-b md:bg-gradient-to-r from-[#f7f8fb] to-[#fff] '}>
                    {!props.state.progressBar ? (props.ads.length > 0 ? props.ads.map((ads) => {

                        return <div key={uuidv4()}>
                            <Card
                                pagename=''
                                ad={ads}
                                animal={props.animal}
                                auto={props.auto}
                                bina={true}
                                electro={props.electro}
                                hobby={props.hobby}
                                home={props.home}
                                job={props.job}
                                private={props.private}
                                child={props.child}
                                service={props.service}
                                eager={false}
                            />
                        </div>
                    }) : null) ?? <span className={'font-semibold flex justify-center'}>Heç bir elan tapılmadı</span> : [...Array(5).keys()].map(w => <Skeleton active key={uuidv4()} />)}
                </div>
            </div>
        </div>
    )
}


export default FilterLayout;