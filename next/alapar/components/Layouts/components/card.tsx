import { Component, ReactNode } from 'react'
import { Carousel } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { base, Sites } from '@/Constructions/const'
import { Bina_View, Bina_View_Data } from '@/Bina/view';
import { MdLocationOn } from "react-icons/md"
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
import { AppContext } from 'context/context';

export type General = Bina_View & Auto_View;

interface Props {
    pagename: string,
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
    static contextType = AppContext
    constructor(props) {
        super(props)
        this.state = {
            images: [],
            imageClass: `${this.props.ad.images.length > 1 ? 'cursor-move' : 'text-center'} object-cover w-full h-full`,
            utilities: new Utilities()
        };

        this.props.ad.images.forEach(element => {
            this.state.images.push(
                <div key={`${element.id}${element.imagePath}`} className="imageWrapper relative max-w-full w-full h-[250px] max-h-[250px] md:max-w-[360px] md:h-[250px]">
                    <Image
                        loading={this.props.eager ? 'eager' : 'lazy'}
                        width={500}
                        height={500}
                        layout={'responsive'}
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
        let title = ""
        if (this.props.bina) {
            if (this.props.ad.roomAmount) {
                title = `${this.props.ad.roomAmount} otaqlı ${this.props.ad.categoryName} `
            }
            // if (this.props.ad.villageId) return title += `${this.props.ad.villageName} qəsəbəsi`
            // if (this.props.ad.regionId) return title += `${this.props.ad.villageName} rayonu`
            // if (this.props.ad.cityId) return title += `${this.props.ad.cityName} şəhəri`
        } else if (this.props.auto) {
            if (this.props.ad.categoryId && this.props.ad.modelId) return `${this.props.ad.mark} ${this.props.ad.model}`
            if (this.props.ad.categoryId) return `${this.props.ad.mark}`
        }

        return title;
    }

    setSubtitle = () => {
        let subtitle = ""
        if (this.props.bina) {
            subtitle = `${(this.props.ad.customAdress ?? this.props.ad.metroName) ?? this.props.ad.cityName}`
        }
        return subtitle
    }

    set1Row = () => {
        if (this.props.bina) {
            return <div><MdLocationOn className="inline text-gray-500" /> {((this.props.ad.targetName ?? this.props.ad.villageName) ?? this.props.ad.regionName) ?? this.props.ad.cityName}</div>
        }
    }

    set2Row = () => {
        if (this.props.bina) {
            if (this.props.ad.areaSize) return <div><BiArea className="inline text-gray-500" /> {this.props.ad.areaSize} {this.props.ad.areaUnit}</div>
        }
    }

    set3Row = () => {
        if (this.props.bina) {
            const bina = Bina_View_Data(this.props.ad);
            if (bina.nameList.roomAmount.value) return <div> <FaDoorOpen className="inline text-gray-500" /> {bina.nameList.roomAmount.value} Otaq</div>
            if (bina.nameList.floor.value && bina.nameList.buildingFloor.value) return <div><FiLayers className="inline text-gray-500" /> {bina.nameList.floor.value} / {bina.nameList.buildingFloor.value} mərtəbə</div>
            if (bina.idlist.contractTypeId.value) return <div><RiFilePaper2Line className="inline text-gray-500" /> {bina.nameList.contractName.value}</div>
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
            <div id="card" className="sm:min-h-[200px] lg:min-h-[250px]  bg-white border-2 rounded-lg">
                {/*<div className="h-8 bg-[#272727] flex items-center px-5">
                    <div className={''}>
                        <Link href={`/${this.props.router.query?.pagename}/get/${this.props.ad.id}`}>
                            <h1 className={'truncate m-0 text-lg text-white cursor-pointer'} title={this.setTitle()}>{this.setTitle()}</h1>
                        </Link>
                    </div>
        </div>*/}
                <div className="h-[35px] w-full flex items-center pl-3 border-b" style={{
                    backgroundColor: `${this.context[0].maincolor}25`,
                }}>
                    <Link href={`/${this.props.router.query?.pagename ?? Sites[this.props.pagename].name}/get/${this.props.ad.id}`}>
                        <h1 className={'truncate text-base font-semibold tracking-wide text-secondary cursor-pointer m-0'} title={this.setTitle()}>{this.setTitle()}</h1>
                    </Link>
                </div>
                <div className="grid grid-cols-[360px,1fr]">
                    <div className="flex-none w-full my-auto text-center justify-self-center max-w-full max-h-[250px] md:max-w-[360px] md:h-[250px]">
                        <Carousel
                            adaptiveHeight={true}
                            draggable={true}
                            className={'w-full'}
                        >
                            {this.state.images}
                        </Carousel>
                    </div>
                    <div className="flex-grow-1 grid grid-rows-[12%,1fr,1fr,1fr,10%] pl-3">
                        <div className="flex-grow-0 h-10 md:h-25px text-lg font-medium">
                            <span className="text-black text-sm font-normal border-b border-black-500" >
                                {this.setSubtitle()}
                            </span>
                        </div>
                        <div className="flex-grow-1 pt-3 md:pt-3">
                            <div className={`flex-grow-1 flex text-sm font-medium ${this.props.mobility ? 'flex-col' : 'flex-row'}`}>
                                <div className="flex-grow-1 flex items-center">{this.set1Row()}</div>
                                <div className="flex-grow-1 flex items-center">{this.set2Row()}</div>
                                <div className="flex-grow-1 flex items-center">{this.set3Row()}</div>
                            </div>
                        </div>
                        <div className="flex-grow-0 h-30 md:h-50px text-lg font-medium">
                            <span className="text-black text-lg font-bold border-b border-black-500" >
                                {`${Intl.NumberFormat('en-US').format(this.props.ad.price)} ${this.props.ad.currencyName}`}
                            </span>
                        </div>
                        <div className={`${this.props.mobility ? 'hidden' : null}`}>
                            <div className="text-base font-medium">
                                <p className="break-words line-clamp-3 pr-3">{this.props.ad.about}</p>
                            </div>
                        </div>
                        <div className="flex-grow-1 flex flex-row py-2 md:pt-0">
                            <div className="flex-grow-1 text-sm font-medium self-end border-t border-black-500 pt-1">
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