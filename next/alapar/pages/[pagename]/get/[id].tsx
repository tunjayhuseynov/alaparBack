import { Component, ReactNode } from 'react'
import { stateProcess, InitFetch, pageprocess, pagenames } from '@/controller'
import ImageGallery from 'react-image-gallery'
import { General } from '@/Layouts/components/card'
import { List } from 'antd'
import { Bina_View_Data } from '@/Bina/view'

class Id extends Component<{ ad: General, pagename: string, id: number }, { ad: General, images: Array<object> }> {
    constructor(props) {
        super(props)

        this.state = {
            ad: this.props.ad,
            images: this.props.ad.images.map(w => {
                return {
                    original: w.imagePath,
                    thumbnail: w.thumbnail,
                }
            })
        }
    }

    setTitle = () => {
        if (this.props.pagename == pagenames.bina) {
            if (this.props.ad.villageId) return `${this.props.ad.villageName} qəsəbəsi`
            if (this.props.ad.regionId) return `${this.props.ad.villageName} rayonu`
            if (this.props.ad.cityId) return `${this.props.ad.cityName} şəhəri`
        } else if (this.props.pagename == pagenames.auto) {
            if (this.props.ad.categoryId && this.props.ad.modelId) return `${this.props.ad.mark} ${this.props.ad.model}`
            if (this.props.ad.categoryId) return `${this.props.ad.mark}`
        }

        return "";
    }

    setAdress = () => {
        if (this.props.pagename == pagenames.bina) {
            return this.state.ad.customAdress || this.state.ad.adress || this.state.ad.regionName ? `${this.state.ad.cityName}, ${this.state.ad.regionName}` : null;
        }
    }

    setAbout = () => {
        if (this.props.pagename == pagenames.bina) {
            return this.state.ad.about;
        }
    }

    setPrice = () => {
        return `${this.state.ad.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} ${this.state.ad.currencyName}`;
    }

    setInfo = () => {
        if (this.props.pagename == pagenames.bina) {
            const bina = Bina_View_Data(this.state.ad);

            return (
                <>
                    <div className="text-base font-medium">
                        <label className="text-gray-500">{bina.names.categoryName.name}</label>:  <span>{bina.names.categoryName.value}</span>
                    </div>
                    <div className="text-base font-medium" style={bina.names.floor.value != null ? null : { display: 'none' }}>
                        <label className="text-gray-500">{bina.names.floor.name}</label>:  <span>{bina.names.floor.value}/{bina.names.buildingFloor.value}</span>
                    </div>
                    <div className="text-base font-medium" style={bina.names.areaSize.value != null ? null : { display: 'none' }}>
                        <label className="text-gray-500">{bina.names.areaSize.name}</label>:  <span>{bina.names.areaSize.value} {bina.names.areaUnit.value}</span>
                    </div>
                    <div className="text-base font-medium" style={bina.names.roomAmount.value != null ? null : { display: 'none' }}>
                        <label className="text-gray-500">{bina.names.roomAmount.name}</label>:  <span>{bina.names.roomAmount.value}</span>
                    </div>
                    <div className="text-base font-medium" style={bina.names.contractName.value != null ? null : { display: 'none' }}>
                        <label className="text-gray-500">{bina.names.contractName.name}</label>:  <span>{bina.names.contractName.value}</span>
                    </div>
                </>
            )
        }
    }

    setChecboxes = (): Array<ReactNode> => {
        if (this.props.pagename == pagenames.bina) {
            const bina = Bina_View_Data(this.state.ad);
            return Object.values(bina.checkboxes).filter(w => w.value == true).map(w => <div className="font-medium">• {w.name}</div>)
        }

        return [];
    }

    render() {
        const checkboxes = this.setChecboxes();

        return (
            <div className="flex flex-col flex-col md:flex-row">
                <div className="flex flex-grow-2 flex-col md:w-66vw md:p-8 p-4">
                    <div id="box" className={'shadow-custom'}>
                        <div id="gallery" className={''}>
                            <ImageGallery useBrowserFullscreen={true} items={this.state.images} showPlayButton={false} />
                        </div>
                        <div id="headline" className={'flex flex-col py-6 px-3 md:px-9 border-b'}>
                            <div className="flex-grow-1 text-2xl font-bold">{this.setTitle()}</div>
                            <div className="flex-grow-1 text-base">{this.setAdress()}</div>
                            <div className="flex-grow-1 text-2xl font-bold">{this.setPrice()}</div>
                        </div>
                        <div id="info" className="py-6 px-3 md:px-9 border-b flex flex-col md:flex-row gap-6 md:gap-0">
                            <div className="flex-grow-1">
                                <div className="text-xl font-bold">Məlumatlar:</div>
                                <div>
                                    {this.setInfo()}
                                </div>
                            </div>
                            <div id="checkboxes" className="flex-grow-1" style={checkboxes.length > 0 ? null : { display: 'none' }}>
                                <div className="text-xl font-bold">Təchizatlar:</div>
                                <div>
                                    {checkboxes}
                                </div>
                            </div>
                        </div>
                        <div className="py-6 px-3 md:px-9">
                            <div className="text-xl font-bold">Ətraflı Məlumat:</div>
                            <div className="text-base font-normal">
                                {this.setAbout()}
                            </div>
                        </div>

                    </div>
                </div>
                <div className="flex-grow-1 md:w-33vw md:p-8 p-4">
                    Salam
                </div>
            </div>
        )
    }
}


export async function getServerSideProps(context) {
    let pagename = context.params.pagename.toLowerCase();
    let id = context.params.id.toLowerCase();

    let url = `${InitFetch(pagename, pageprocess.show)}${id}`
    const res = await fetch(url)
    const ad = await res.json()
    return {
        props: {
            ad: ad,
            pagename: pagename,
            id: id
        }, // will be passed to the page component as props
    }
}

export default Id;