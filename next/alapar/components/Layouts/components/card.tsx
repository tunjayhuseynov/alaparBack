import { Component, ReactNode } from 'react'
import { Carousel } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { base } from '@/Constructions/const'
import { Bina_View, Bina_View_Data } from '@/Bina/view';
import { AiFillTag } from 'react-icons/ai'
import { FaDoorOpen } from 'react-icons/fa'
import { MdLocalPhone } from 'react-icons/md'
import { BiArea } from 'react-icons/bi'
import { RiFilePaper2Line } from 'react-icons/ri'
import { FiLayers } from 'react-icons/fi'
import { Auto_View } from '@/Auto/view';
import Image from 'next/image'
import Utilities from '@/utilities';
import Link from 'next/link'
import { withRouter, NextRouter } from 'next/router';

export type General = Bina_View & Auto_View;

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
    ad: General;
    eager?: boolean,
    query: any,
    router: NextRouter,
    mobility?: boolean,
}
interface State {
    images: Array<ReactNode>;
    utilities: Utilities;
    imageClass: string;
}

class Card extends Component<Props, State> {
    constructor(props) {
        super(props)
        this.state = {
            images: [],
            imageClass: `${this.props.ad.images.length > 1 ? 'cursor-move' : 'text-center'} object-cover w-full h-full`,
            utilities: new Utilities()
        };

        this.props.ad.images.forEach(element => {
            this.state.images.push(
                <div key={uuidv4()} className="imageWrapper relative max-w-full w-full h-[300px] max-h-[300px] md:max-w-[300px] md:h-[300px]">
                    <Image
                        loading={this.props.eager ? 'eager' : 'lazy'}
                        width={500}
                        height={500}
                        layout={'fixed'}
                        blurDataURL={`data:image/png;base64,${element.blur}`}
                        placeholder="blur"
                        src={base + element.imagePath}
                        alt="Picture of the author"
                        className={this.state.imageClass}
                    />
                </div>
            )
        });
    }
    // <img className="cursor-move max-w-full max-h-250 w-full h-250px object-cover" src={base + element.imagePath} />

    setTitle = () => {
        if (this.props.bina) {
            if (this.props.ad.villageId) return `${this.props.ad.villageName} qəsəbəsi`
            if (this.props.ad.regionId) return `${this.props.ad.villageName} rayonu`
            if (this.props.ad.cityId) return `${this.props.ad.cityName} şəhəri`
        } else if (this.props.auto) {
            if (this.props.ad.categoryId && this.props.ad.modelId) return `${this.props.ad.mark} ${this.props.ad.model}`
            if (this.props.ad.categoryId) return `${this.props.ad.mark}`
        }

        return "";
    }

    set1Row = () => {
        if (this.props.bina) {
            return <><AiFillTag className="inline" /> {this.props.ad.categoryName}</>
        }
    }

    set2Row = () => {
        if (this.props.bina) {
            if (this.props.ad.areaSize) return <><BiArea className="inline" /> {this.props.ad.areaSize} {this.props.ad.areaUnit}</>
        }
    }

    set3Row = () => {
        if (this.props.bina) {
            const bina = Bina_View_Data(this.props.ad);
            if (bina.nameList.roomAmount.value) return <> <FaDoorOpen className="inline" /> {bina.nameList.roomAmount.value} Otaq</>
            if (bina.nameList.floor.value && bina.nameList.buildingFloor.value) return <><FiLayers className="inline" /> {bina.nameList.floor.value} / {bina.nameList.buildingFloor.value} mərtəbə</>
            if (bina.idlist.contractTypeId.value) return <><RiFilePaper2Line className="inline" /> {bina.nameList.contractName.value}</>
        }
    }

    setPhone = () => {
        if (this.props.bina) {
            const bina = Bina_View_Data(this.props.ad);

            return <> <MdLocalPhone className="inline" /> {`${bina.contactInfo.contactNumber.value}`.split('').reduce(this.state.utilities.phoneConverter, '')}</>
        }

    }

    render() {
        return (
            <div id="card" className="sm:min-h-[200px] lg:min-h-[300px]  bg-white border-2 rounded-lg">
                {/*<div className="h-8 bg-[#272727] flex items-center px-5">
                    <div className={''}>
                        <Link href={`/${this.props.router.query?.pagename}/get/${this.props.ad.id}`}>
                            <h1 className={'truncate m-0 text-lg text-white cursor-pointer'} title={this.setTitle()}>{this.setTitle()}</h1>
                        </Link>
                    </div>
        </div>*/}
                <div className="flex flex-row flex-wrap md:flex-nowrap p-4">
                    <div className="flex-none w-full my-auto text-center justify-self-center max-w-full max-h-[300px] md:max-w-[300px] md:h-[300px]">
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
                                <Link href={`/${this.props.router.query?.pagename}/get/${this.props.ad.id}`}>
                                    <h1 className={'truncate text-lg text-darkblue cursor-pointer'} title={this.setTitle()}>{this.setTitle()}</h1>
                                </Link>
                            </div>
                        </div>
                        <div className="flex-grow-0 h-30 md:h-50px text-lg font-medium">
                            <span className="text-black text-xl font-bold border-b border-black-500" >
                                {`${Intl.NumberFormat('en-US').format(this.props.ad.price)} ${this.props.ad.currencyName}`}
                            </span>
                        </div>
                        <div className="flex-grow-1 flex flex-row pt-3 md:pt-3">
                            <div className={`flex-grow-1 flex text-base font-medium ${this.props.mobility ? 'flex-col' : 'flex-row'}`}>
                                <div className="flex-grow-1">{this.set1Row()}</div>
                                <div className="flex-grow-1">{this.set2Row()}</div>
                                <div className="flex-grow-1">{this.set3Row()}</div>
                            </div>
                        </div>
                        <div className={`flex-grow-1 flex flex-row pt-5 ${this.props.mobility ? 'hidden' : null}`}>
                            <div className="text-base font-medium">
                                <p className="break-all line-clamp-3 pr-3">{this.props.ad.about}</p>
                            </div>
                        </div>
                        <div className="flex-grow-1 flex flex-row pt-6 md:pt-0">
                            <div className="flex-grow-1 text-base font-medium self-end border-t border-black-500 pt-1">
                                <span>{this.setPhone()}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Card);