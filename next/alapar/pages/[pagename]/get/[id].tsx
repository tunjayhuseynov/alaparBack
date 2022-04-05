import React, { Component, ReactNode } from 'react'
import { InitFetch, pageprocess, pagenames, PackageAd } from '@/controller'
import ImageGallery from 'react-image-gallery'
import { General } from '@/Layouts/components/card'
import { Bina_View_Data } from '@/Bina/view'
import Utilities from '@/utilities'
import { v4 as uuidv4 } from 'uuid'
import { Avatar } from 'antd';
import Link from 'next/link'
import UserSdk from '@/userSDK'
import { Button, Form, InputNumber, Alert, Popconfirm, message } from 'antd';
import router, { withRouter, NextRouter } from 'next/router'
import { SET_IPADRESS } from '@/Constructions/const'

enum UserStatus {
    UnAuth,
    NoBalance,
    Ok
}

class Id extends Component<{ ad: General, auth: any, router: NextRouter, pagename: string, id: number, maincolor: string }, { ad: General, pagename: string, walletAmount: number, valid: boolean, discountValue: number, discountModal: boolean, discountVisible: boolean, btnLoading: boolean, modalStatus: UserStatus, userStatus: UserStatus, modalText: string, images: Array<object>, modalVisible: boolean }> {
    utility: Utilities;
    bina: ReturnType<typeof Bina_View_Data>;
    constructor(props) {
        super(props)

        this.utility = new Utilities(this);
        this.bina = this.props.pagename == pagenames.bina ? Bina_View_Data(this.props.ad) : null
        this.state = {
            valid: new Date(this.props.ad.tillDate) > new Date(),
            ad: this.props.ad,
            images: this.props.ad.images.map(w => {
                return {
                    original: w.imagePath,
                    thumbnail: w.thumbnail,
                }
            }),
            modalVisible: false,
            modalText: "Sistemə Daxil Olmamısınız və ya uzun müddətdir səhfəni dəyişmirsiniz",
            modalStatus: UserStatus.UnAuth,
            walletAmount: 0,
            userStatus: UserStatus.UnAuth,
            btnLoading: false,
            discountModal: false,
            discountVisible: false,
            discountValue: null,
            pagename: Object.keys(pagenames)[Object.values(pagenames).indexOf(this.props.pagename.toLowerCase())]
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
        let discount = <span></span>;
        let currentPrice = this.state.ad.price;
        if ((this.state.ad.discount ?? 0) > 0) {
            currentPrice *= ((100 - this.state.ad.discount) / 100)
            discount = <div className='flex items-center gap-3'><span className="text-green-400 text-sm">-{this.state.ad.discount}%</span> <span className="text-red-500 line-through text-sm ">{this.state.ad.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} {this.state.ad.currencyName}</span></div>
        }
        const price = <div className="flex flex-row gap-5 items-center"><div className="flex items-center">{currentPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} {this.state.ad.currencyName} / {this.state.ad.sellTypeName}</div> {discount}</div>;

        return price;
    }

    setInfo = () => {
        if (this.props.pagename == pagenames.bina) {
            return (
                <>
                    <div className="text-base font-medium">
                        <label className="text-gray-500">{this.bina.nameList.categoryName.name}</label>:  <span>{this.bina.nameList.categoryName.value}</span>
                    </div>
                    <div className="text-base font-medium" style={this.bina.otagordaire.value != null ? null : { display: 'none' }}>
                        <label className="text-gray-500">{this.bina.otagordaire.name}</label>:  <span>{this.bina.otagordaire.value ? "Otaq" : "Bütöv Sahə"}</span>
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
        return <span >{this.state.ad.viewed ?? 0} baxış</span>;
    }

    setDate = (): ReactNode => {
        const date = new Date(this.state.ad.modifiedDate)
        return <div>{`${date.getDay()}-${date.getMonth()}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`}</div>
    }

    setPremiumModal = (): ReactNode => {
        const html = (<span className={'font-semibold'}>{this.state.modalText}</span>)

        if (this.state.modalStatus == UserStatus.NoBalance)
            return this.utility.generateModal(html, this.state.modalVisible, "modalVisible", {
                additionButtonList: [
                    <Link href="/profile/wallet"><button className='bg-green-500 px-2 py-1 font-semibold text-white mx-2'>Balansı Artır</button></Link>
                ]
            })

        if (this.state.modalStatus == UserStatus.UnAuth)
            return this.utility.generateModal(html, this.state.modalVisible, "modalVisible", {
                additionButtonList: [
                    <Link href="/login"><button className='px-2 py-1 font-semibold text-white mx-2' style={{ backgroundColor: this.props?.maincolor }}>Daxil Ol</button></Link>
                ]
            })

        if (this.state.modalStatus == UserStatus.Ok) {
            const obj = { loading: this.state.btnLoading };
            return this.utility.generateModal(html, this.state.modalVisible, "modalVisible", {
                additionButtonList: [
                    <Button {...obj}
                        onClick={() => {
                            this.setState({ ...this.state, btnLoading: true })
                            UserSdk().setPremiumToAd(this.props.id, this.state.pagename).then(res => {
                                this.props.router.reload()
                            }).catch((error) => {
                                console.error(error)
                                this.setState({ ...this.state, btnLoading: false, modalVisible: false })
                                this.utility.showError("Xəta baş verdi")
                            })
                        }}
                        className='px-2 py-1 font-semibold text-white mx-2' style={{ backgroundColor: this.props?.maincolor }}>Premium Et</Button>
                ]
            })
        }
    }

    setDiscount = (): ReactNode => {
        const html = (<div className={'flex gap-1'}>
            <Form className="font-semibold" onValuesChange={(e) => {
                if (e.discount && e.discount > 0 && e.discount <= 100) {
                    this.setState({ discountValue: Math.round(e.discount) })
                } else {
                    this.utility.showError("Endirim 1 ilə 100 faiz arasında olmalıdır")
                }
            }} initialValues={{
                discount: (this.props.ad.discount ?? 0)
            }}>
                <Form.Item label="Endirim Faizi" name="discount">
                    <InputNumber />
                </Form.Item>
            </Form>
            <div>

            </div>
        </div>)

        const btnList = [];

        if ((this.props.ad.discount ?? 0) > 0) {
            const remove = <Button onClick={() => {
                UserSdk().setDiscount(this.props.id, 0, this.state.pagename).then(res => {
                    this.props.router.reload()
                }).catch((error) => {
                    console.error(error)
                    this.setState({ ...this.state, btnLoading: false, modalVisible: false })
                    this.utility.showError("Xəta baş verdi")
                })
            }}
                className={'px-2 py-1 bg-red-500 text-white'}>Sil</Button>
            const change = <Button className={'px-2 py-1 text-white'} style={{ backgroundColor: this.props?.maincolor }}
                onClick={() => {
                    UserSdk().setDiscount(this.props.id, this.state.discountValue, this.state.pagename).then(res => {
                        this.props.router.reload()
                    }).catch((error) => {
                        console.error(error)
                        this.setState({ ...this.state, btnLoading: false, modalVisible: false })
                        this.utility.showError("Xəta baş verdi")
                    })
                }}
            >Dəyiş</Button>
            btnList.push(remove)
            btnList.push(change)
        }

        if (!(this.props.ad.discount ?? 0)) {
            const apply = <Button className={'px-2 py-1 text-white'} style={{ backgroundColor: this.props?.maincolor }}
                onClick={() => {
                    UserSdk().setDiscount(this.props.id, this.state.discountValue, this.state.pagename).then(res => {
                        this.props.router.reload()
                    }).catch((error) => {
                        console.error(error)
                        this.setState({ ...this.state, btnLoading: false, modalVisible: false })
                        this.utility.showError("Xəta baş verdi")
                    })
                }}
            >Tədbiq Et</Button>
            btnList.push(apply)
        }

        return this.utility.generateModal(html, this.state.discountModal, "discountModal", {
            additionButtonList: btnList,
        })
    }

    async componentDidUpdate(prevProps) {
        if (this.props.auth !== prevProps.auth && this.props.auth == true) {
            await this.updatePremiumModal()
            await this.initialValues()
        }
    }

    async componentDidMount() {
        await this.updatePremiumModal()
        await this.initialValues()
        
        fetch(SET_IPADRESS(this.props.id, this.state.pagename))
    }

    initialValues= async () => {
        try {
            const user = await UserSdk().getUser()

            if ((user?.id ?? 0) == (this.props.ad.userId ?? 1)) {
                this.setState({
                    discountVisible: true, 
                })
            }

            if(user?.wallet.amount > 0){
                this.setState({
                    userStatus: UserStatus.Ok,
                    walletAmount: user?.wallet.amount
                })
            }else{
                this.setState({
                    userStatus: UserStatus.NoBalance,
                    walletAmount: user?.wallet.amount
                })
            }
        } catch (error) {
            this.setState({
                userStatus: UserStatus.UnAuth
            })
        }
    }

    updatePremiumModal = async () => {
        try {
            const user = await UserSdk().getUser()

            if (user?.wallet.amount < 10) {
                this.setState({
                    ...this.state,
                    modalText: "Balansınızda kifayət qədər məbləğ yoxdur. Zəhmət olmasa ilk öncə məbləği artırın",
                    modalStatus: UserStatus.NoBalance,
                })
            } else {
                this.setState({
                    ...this.state,
                    modalText: "Elanı Premium olmasını təsdiq edirsiniz? Qeyd: 10Azn balansdan çıxılacaq",
                    modalStatus: UserStatus.Ok,
                })
            }
        } catch (error) {
            this.setState({
                ...this.state,
                modalText: "Sistemə Daxil Olmamısınız və ya uzun müddətdir səhfəni dəyişmirsiniz",
                modalStatus: UserStatus.UnAuth
            })
        }
    }


    renewConfirmation = async () => {
        if(this.state.userStatus == UserStatus.UnAuth) return message.error("İstifadəçi Girişi Etməlisiniz")

        if (this.state.walletAmount < 1) {
            message.error("Balansda Kifayət Qədər Miqdar Yoxdur")
            return
        }

        try {
            const user = await UserSdk().renewAd(this.props.id, this.state.pagename)

            if(user.ok){
                this.props.router.reload();
            }

        } catch (error) {
            console.log(error);
            message.error("Gözlənmədik xəta baş verdi. Yenidən Yoxlayın")
        }
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
        const PremiumModal = this.setPremiumModal()
        const DiscountModal = this.setDiscount();
        const view = this.setView()
        const contactName = this.setContactName()
        const owner = this.setOwner()
        const phone = this.setPhone()
        console.log(this.props.auth);

        return (
            <div className="flex flex-col md:flex-row">
                <div>{PremiumModal}</div>
                <div>{DiscountModal}</div>
                <div className="flex flex-grow-2 flex-col md:w-66vw md:p-8 p-4">
                    <div id="box" className={'shadow-custom'}>
                        <div id="gallery" className={''}>
                            <ImageGallery useBrowserFullscreen={true} items={this.state.images} showPlayButton={false} />
                        </div>
                        {this.state.valid ? null :
                            <div>
                                <Alert message="Bu Elan Artıq Bitmişdir" type="error" showIcon />
                            </div>
                        }
                        <div id="headline" className={'flex flex-col py-6 px-3 md:px-9 border-b'}>
                            {title ? <div className="flex-grow-1 flex justify-between">
                                <span className="flex-grow-1 text-2xl font-bold">{title}</span>
                                <div className="flex items-center gap-2">
                                    {date ? <div className="text-xs">{date}</div> : null}
                                    <span>/</span>
                                    <div className="text-xs">{view}</div>
                                </div>
                            </div> : null}
                            {adress ? <div className="flex-grow-1">
                                <span className={'text-base'}>{adress}</span>
                            </div> : null}
                            {price ? <div className="flex-grow-1 flex justify-between items-center">
                                <span className="text-2xl font-bold">{price}</span>
                                {
                                    this.state.valid ?
                                        <>
                                            <div onClick={() => this.setState({ ...this.state, modalVisible: true })} className={`px-5 py-2 filter hover:saturate-[.8] cursor-pointer text-white font-semibold ${this.props.ad.packageId == PackageAd.Standart ? null : 'hidden'}`} style={{ backgroundColor: this.props?.maincolor ?? 'bg-red-500' }}>Premium - 10 Azn</div>
                                            <div onClick={() => this.setState({ ...this.state, discountModal: true })} className={`px-5 py-2 filter hover:saturate-[.8] cursor-pointer text-white font-semibold ${this.state.discountVisible ? null : 'hidden'}`} style={{ backgroundColor: this.props?.maincolor ?? 'bg-red-500' }}>{(this.props.ad.discount ?? 0) == 0 ? "Endirim Et" : "Endirimi Dəyiş/Sil"}</div>
                                        </>
                                        :
                                        <Popconfirm title="Yenilənməni təsdiq edin." okText="Təsdiq Et" onConfirm={this.renewConfirmation} cancelText="Ləğv"><a className={`px-5 py-2 filter hover:saturate-[.8] cursor-pointer text-white font-semibold bg-green-400`}>Elanı Yenilə - 1 Azn</a></Popconfirm>
                                }
                            </div> : null}
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
                            <span className="text-base font-normal" style={{ whiteSpace: 'pre-line' }}>
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
                    {this.state.valid ? <div className={`shadow bg-white p-4`}>
                        <div className='flex items-center gap-2'>
                            <div><Avatar size="large" >{contactName[0]}</Avatar></div>
                            <div className='flex flex-col'>
                                <div className="font-semibold text-base">{contactName} </div>
                                {owner ? <div className="font-normal text-sm">{owner} </div> : null}
                            </div>
                        </div>
                        <div className='pt-3 font-normal text-base'>
                            {`Telefon nömrəsi: ${`${phone}`.split("").reduce(this.utility.phoneConverter, '')}`}
                        </div>
                    </div> : null}
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

export default withRouter(Id);