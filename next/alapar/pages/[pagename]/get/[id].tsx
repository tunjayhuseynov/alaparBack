import { Component, ReactNode } from 'react'
import { InitFetch, pageprocess, pagenames } from '@/controller'
import ImageGallery from 'react-image-gallery'
import { General } from '@/Layouts/components/card'
import { Bina_View_Data } from '@/Bina/view'
import Utilities from '@/utilities'
import { v4 as uuidv4 } from 'uuid'
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

class Id extends Component<{ ad: General, pagename: string, id: number }, { ad: General, images: Array<object> }> {
    utility: Utilities;
    bina: ReturnType<typeof Bina_View_Data>;
    constructor(props) {
        super(props)
        this.utility = new Utilities(this);
        this.bina = this.props.pagename == pagenames.bina ? Bina_View_Data(this.props.ad) : null
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
            if (this.bina.idlist.targetPointId.value) return `${this.bina.nameList.targetName.value}`
            if (this.bina.idlist.villageId.value) return `${this.bina.nameList.villageName.value} qəsəbəsi`
            if (this.bina.idlist.regionId.value) return `${this.bina.nameList.regionName.value} rayonu`
            if (this.bina.idlist.cityId.value) return `${this.bina.nameList.cityName.value} şəhəri`
        } else if (this.props.pagename == pagenames.auto) {
            if (this.props.ad.categoryId && this.props.ad.modelId) return `${this.props.ad.mark} ${this.props.ad.model}`
            if (this.props.ad.categoryId) return `${this.props.ad.mark}`
        }

        return null;
    }

    setAdress = () => {
        if (this.props.pagename == pagenames.bina) {
            return `${this.bina.nameList.customAdress.value || this.bina.nameList.adress || (this.bina.idlist.regionId.value ? `${this.state.ad?.cityName}, ${this.state.ad?.regionName}` : null)}`;
        }

        return null;
    }

    setAbout = () => {
        if (this.props.pagename == pagenames.bina) {
            return this.bina.nameList.about.value;
        }

        return null
    }

    setPrice = () => {
        return `${this.bina.nameList.price.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} ${this.bina.nameList.currencyName.value} / ${this.bina.nameList.sellTypeName.value}`;
    }

    setInfo = () => {
        if (this.props.pagename == pagenames.bina) {
            return (
                <>
                    <div className="text-base font-medium">
                        <label className="text-gray-500">{this.bina.nameList.categoryName.name}</label>:  <span>{this.bina.nameList.categoryName.value}</span>
                    </div>
                    <div className="text-base font-medium" style={this.bina.otagordaire.value != null ? null : { display: 'none' }}>
                        <label className="text-gray-500">{this.bina.otagordaire.name}</label>:  <span>{this.bina.otagordaire.value?"Otaq":"Bütöv Sahə"}</span>
                    </div>
                    <div className="text-base font-medium" style={this.bina.nameList.floor.value != null ? null : { display: 'none' }}>
                        <label className="text-gray-500">{this.bina.nameList.floor.name}</label>:  <span>{this.bina.nameList.floor.value}/{this.bina.nameList.buildingFloor.value}</span>
                    </div>
                    <div className="text-base font-medium" style={this.bina.nameList.areaSize.value != null ? null : { display: 'none' }}>
                        <label className="text-gray-500">{this.bina.nameList.areaSize.name}</label>:  <span>{this.bina.nameList.areaSize.value} {this.bina.nameList.areaUnit.value}</span>
                    </div>
                    <div className="text-base font-medium" style={this.bina.nameList.repairName.value != null ? null : { display: 'none' }}>
                        <label className="text-gray-500">{this.bina.nameList.repairName.name}</label>:  <span>{this.bina.nameList.repairName.value}</span>
                    </div>
                    <div className="text-base font-medium" style={this.bina.nameList.landAppointmentName.value != null ? null : { display: 'none' }}>
                        <label className="text-gray-500">{this.bina.nameList.landAppointmentName.name}</label>:  <span>{this.bina.nameList.landAppointmentName.value}</span>
                    </div>
                    <div className="text-base font-medium" style={this.bina.nameList.secondAreaSize.value != null ? null : { display: 'none' }}>
                        <label className="text-gray-500">{this.bina.nameList.secondAreaSize.name}</label>:  <span>{this.bina.nameList.secondAreaSize.value} {this.bina.nameList.areaUnit.value}</span>
                    </div>
                    <div className="text-base font-medium" style={this.bina.nameList.roomAmount.value != null ? null : { display: 'none' }}>
                        <label className="text-gray-500">{this.bina.nameList.roomAmount.name}</label>:  <span>{this.bina.nameList.roomAmount.value}</span>
                    </div>
                    <div className="text-base font-medium" style={this.bina.nameList.contractName.value != null ? null : { display: 'none' }}>
                        <label className="text-gray-500">{this.bina.nameList.contractName.name}</label>:  <span>{this.bina.nameList.contractName.value}</span>
                    </div>
                    <div className="text-base font-medium" style={this.bina.nameList.propertySellingName.value != null ? null : { display: 'none' }}>
                        <label className="text-gray-500">{this.bina.nameList.propertySellingName.name}</label>:  <span>{this.bina.nameList.propertySellingName.value}</span>
                    </div>
                    <div className="text-base font-medium" style={this.bina.nameList.hamam.value != null ? null : { display: 'none' }}>
                        <label className="text-gray-500">{this.bina.nameList.hamam.name}</label>:  <span>{this.bina.nameList.hamam.value}</span>
                    </div>
                    <div className="text-base font-medium" style={this.bina.nameList.metroName.value != null ? null : { display: 'none' }}>
                        <label className="text-gray-500">{this.bina.nameList.metroName.name}</label>:  <span>{this.bina.nameList.metroName.value}</span>
                    </div>
                    <div className="text-base font-medium" style={this.bina.nameList.metroDuration.value != null ? null : { display: 'none' }}>
                        <label className="text-gray-500">{this.bina.nameList.metroDuration.name}</label>:  <span>{this.bina.nameList.metroWayName.value} {this.bina.nameList.metroDuration.value}</span>
                    </div>
                    <div className="text-base font-medium" style={this.bina.nameList.hamam.value != null ? null : { display: 'none' }}>
                        <label className="text-gray-500">{this.bina.nameList.hamam.name}</label>:  <span>{this.bina.nameList.hamam.value}</span>
                    </div>
                </>
            )
        }

        return null;
    }

    setChecboxes = (): Array<ReactNode> => {
        if (this.props.pagename == pagenames.bina) {
            return Object.values(this.bina.checkboxes).filter(w => w.value == true).map(w => <div key={uuidv4()} className="font-medium">• {w.name}</div>)
        }

        return null;
    }

    setRent = (): Array<ReactNode> => {
        if (this.bina != null) {
            return Object.values(this.bina.rent).filter(w => w.value == true).map(w => <div key={uuidv4()} className="font-medium">• {w.name}</div>)
        }

        return null;
    }

    setNearLocation = (): Array<ReactNode> => {
        if (this.bina != null) {
            return Object.values(this.bina.nearLocations).filter(w => w.value == true).map(w => <div key={uuidv4()} className="font-medium">• {w.name}</div>)
        }

        return null;
    }

    setMap = (): Array<ReactNode> => {
        if (this.props.pagename == pagenames.bina && this.state.ad.latitude && this.state.ad.longitude) {
            return this.utility.googleMap(this.state.ad.latitude, this.state.ad.longitude, null, "")
        }

        return null;
    }

    setView = (): ReactNode => {
        if (this.bina != null) {
            return <div>{this.bina.nameList.viewed.value}</div>;
        }

        return null;
    }

    setDate = (): ReactNode => {
        const date = new Date(this.state.ad.modifiedDate)
        return <div>{`${date.getDay()}-${date.getMonth()}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`}</div>
    }

    render() {
        const title = this.setTitle()
        const rent = this.setRent();
        const nearLocations = this.setNearLocation()
        const adress = this.setAdress()
        const price = this.setPrice()
        const date = this.setDate()
        const about = this.setAbout();
        const info = this.setInfo();
        const checkboxes = this.setChecboxes();
        const map = this.setMap();

        const contactName = this.setContactName()
        const owner = this.setOwner()
        const phone = this.setPhone()
        return (
            <div className="flex flex-col md:flex-row">
                <div className="flex flex-grow-2 flex-col md:w-66vw md:p-8 p-4">
                    <div id="box" className={'shadow-custom'}>
                        <div id="gallery" className={''}>
                            <ImageGallery useBrowserFullscreen={true} items={this.state.images} showPlayButton={false} />
                        </div>
                        <div id="headline" className={'flex flex-col py-6 px-3 md:px-9 border-b'}>
                            {title ? <div className="flex-grow-1 flex justify-between">
                                <span className="flex-grow-1 text-2xl font-bold">{title}</span>
                                {date ? <div className="text-xs self-center">{date}</div> : null}
                            </div> : null}
                            {adress ? <div className="flex-grow-1 text-base">{adress}</div> : null}
                            {price ? <div className="flex-grow-1 text-2xl font-bold">{price}</div> : null}
                        </div>
                        {info || checkboxes ? <div id="info" className="py-6 px-3 md:px-9 border-b flex flex-col md:flex-row md:flex-wrap gap-6 md:gap-0">
                            {info ? <div className="flex-grow-1 md:mb-3 md:mr-5">
                                <div className="text-xl font-bold">Məlumatlar:</div>
                                <div>
                                    {info}
                                </div>
                            </div> : null}
                            {nearLocations ? <div id="checkboxes" className="flex-grow-1 mr-5" >
                                <div className="text-xl font-bold">Yaxınlıqda:</div>
                                <div>
                                    {nearLocations}
                                </div>
                            </div> : null}
                            {checkboxes ? <div id="checkboxes" className="flex-grow-1">
                                <div className="text-xl font-bold">Təchizatlar:</div>
                                <div>
                                    {checkboxes}
                                    {rent}
                                </div>
                            </div> : null}
                        </div> : null}
                        {about ? <div className="py-6 px-3 md:px-9">
                            <div className="text-xl font-bold">Ətraflı Məlumat:</div>
                            <span className="text-base font-normal" style={{whiteSpace: 'pre-line'}}>
                                {about}
                            </span>
                        </div> : null}
                        {map ? <div className='py-6 px-3 md:px-9'>
                            <div className="text-xl font-bold">Xəritə:</div>
                            <div className="w-full">
                                {map}
                            </div>
                        </div> : null}
                    </div>
                </div>
                <div className="flex-grow-1 md:w-[33vw] h-[33%] md:p-8 p-4 sticky top-2 py-4 md:py-8">
                    <div className='shadow bg-white p-4'>
                        <div className='flex items-center gap-2'>
                            <div><Avatar size="large" >{contactName[0]}</Avatar></div>
                            <div className='flex flex-col'>
                                <div className="font-semibold text-base">{contactName} </div>
                                {owner ? <div className="font-normal text-sm">{owner} </div> : null}
                            </div>
                        </div>
                        <div className='pt-3 font-normal text-base'>
                            {`Telefon nömrəsi: ${`0${phone}`.split("").reduce(this.utility.phoneConverter,'')}`}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    setOwner = () => {
        if (this.props.pagename == pagenames.bina) {
            return this.bina.contactInfo.owner.value ? "Mülkiyyətçi" : "Vasitəçi"
        }

        return null
    }

    setWp = () => {
        if (this.props.pagename == pagenames.bina) {
            return this.state.ad.isWp
        }
    }

    setCall = () => {
        if (this.props.pagename == pagenames.bina) {
            return this.state.ad.isCall
        }
    }

    setOtagOrDaire = () => {
        if (this.props.pagename == pagenames.bina) {
            return this.state.ad.otagordaire
        }
    }

    setPhone = () => {
        if (this.props.pagename == pagenames.bina) {
            return this.bina.contactInfo.contactNumber.value
        }
    }

    setContactName = () => {
        if (this.bina != null) {
            return this.bina.contactInfo.personName.value
        }
    }
    setEmail = () => {
        if (this.bina != null) {
            return this.bina.contactInfo.email.value
        }
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