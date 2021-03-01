import { Component } from 'react'
import Utilities from '@/utilities';

class Add extends Component {

    constructor(props) {
        super(props)

        this.utility = new Utilities(this);
   
        this.state = {
            ...this.utility.getImageState,
            selected: {
                images: null, //list<string>
                category: null, //int
                city: null, //int
                region: null, //int
                village: null, //int
                metro: null, //int
                sellType: null, //int
                licence: null, //bool
                ipoteka: null, //bool
                roomAmount: null, //int
                floor: null, //int
                buildingFloor: null, //int
                landAppointment: null, //int
                icare: null, //bool
                belediyye: null, //bool
                rentDuration: null, //int
                price: null, //int
                areaSize: null, //int
                aboutInfo: null, //string
                email: null, //string
                phone: null, //string
                name: null, //string
                wp: null, //bool
                call: null, //bool
                lat: null,
                lng: null,
                hamam: null,
                eyvan: null,
                lift: null,
                mebel: null,
                temir: null,
                hovuz: null,
                qaz: null,
                su: null,
                isig: null,
                kanalizasiya: null,
                barter: null,
                owner: true,
                metbex: null,
                qab: null,
                paltar: null,
                soyuducu: null,
                tv: null,
                kondicioner: null,
                internet: null,
                telefon: null,
                usag: null,
                heyvan: null,
                otagordaire: false,
                currency: 1,
                metroWay: 1,
                metroDuration: null,
                secondAreaSize: null
            },
            areaUnit: null,
            sellingTypeBoxVisibility: true,
            rentingTypeBoxVisibility: false,
            mapVisible: false,
            sellTypeList: null,
            categoryList: null,
            cityList: null,
            regionList: null,
            villageList: null,
            metroList: null,
            metroWayList: null,
            landAppointmentList: null,
            rentDurationList: null,
            rentTypeList: null,
            currencyList: null,
            license: true,
            ipoteka: true,
            price: true,
            area: true,
            lat: 40.409264,
            lng: 49.867092,
            activeKey: "1",
            nometro: false,
            addition: {
                secondArea: false,
                roomAmount: false,
                floor: false,
                buildingFloor: false,
                landAppointment: false,
                icare: false,
                belediyye: false,
                barter: true
            },
            rentalAddition: {}
        }

        if (this.props.filter) {
            this.state.categoryList = this.props.filter.categories;
            this.state.subCategory = [...new Set(this.props.filter.categories.map((w) => w.subname))].map((w, i) => { return { name: w, category: this.props.filter.categories.filter(d => d.subname == w) } })
            this.state.metroWayList = this.props.filter.metroWays;
            this.state.currencyList = this.props.filter.currency
            this.state.cityList = this.props.filter.cities
            this.state.sellTypeList = this.props.filter.sellTypes
            this.state.landAppointmentList = this.props.filter.landAppointment
            this.state.selected = {
                ...this.state.selected,
                sellType: this.props.filter.sellTypes[0].id
            }
        }
    }


    header = (title, classname) => {
        return (
            <div>
                <h3 className={classname}>{title}</h3>
            </div>

        )
    }

    ilkin = () => {
        return (
            <div className={'part'}>

                {this.header("Ilkin", "basliq")}

                {this.utility.radioGenerator("Əmlak:", this.state.sellTypeList, 1, this.sellTypeCallback, "sellType")}

                {this.utility.selectGenerator("Kategoriya:", this.state.categoryList, "category", this.state.selected.category, this.categoryCallback, false, false, this.state.subCategory)}

                {this.utility.selectGenerator("Şəhər:", this.state.cityList, "city", this.state.selected.city, this.cityCallback, true, false)}

                {this.utility.selectGenerator("Rayon:", this.state.regionList, "region", this.state.selected.region, this.regionCallback, true, false)}

                {this.utility.selectGenerator("Qəsəbə:", this.state.villageList, "village", this.state.selected.village, this.commonCallback, true, false)}

                {this.utility.selectGenerator("Metro:", this.state.metroList, "metro", this.state.selected.metro, this.commonCallback, true, false)}

                {this.utility.numberGenerator("Metroya olan dəqiqə müddəti:", "Daxil Edin", this.numberCallback, "metroDuration", this.state.selected.metro, 1, 120, 
                {addonAfterList: this.state.metroWayList, addonAfterCallback: this.commonCallback, addonName: "metroWay", addonValue: this.state.selected.metroWay})}

                <div className={'radioGroup'}>
                    {this.utility.checkBoxGenerator("Metro Yoxdur", this.isMetroCallback, "nometro", this.state.nometro)}
                </div>
                {this.utility.googleMap(this.state.lat, this.state.lng, this.googleMapCallback, "Xəritə:", "lat", "lng")}

            </div>
        )
    }

    esas = () => {
        let sellingBox = <div className={'sellingTypeBox radioGroup'} style={{ textAlign: '' }}>

            {this.utility.checkBoxGenerator("Cixaris", this.checkboxCallback, "licence", this.state.license)}

            {this.utility.checkBoxGenerator("Barter", this.checkboxCallback, "barter", this.state.addition.barter)}

            {this.utility.checkBoxGenerator("Ipoteka", this.checkboxCallback, "ipoteka", this.state.ipoteka)}

            {this.utility.checkBoxGenerator("Cixaris (Icare)", this.checkboxCallback, "icare", this.state.addition.icare)}

            {this.utility.checkBoxGenerator("Belediyye", this.checkboxCallback, "belediyye", this.state.addition.belediyye)}

        </div>

        let rentingBox = <div className={'rentingBox radioGroup'} style={{ textAlign: '' }}>

            {this.utility.checkBoxGenerator("Mətbəx Mebeli", this.checkboxCallback, "metbex", this.state.rentalAddition.metbexM)}

            {this.utility.checkBoxGenerator("Qabyuyan", this.checkboxCallback, "qab", this.state.rentalAddition.qabY)}

            {this.utility.checkBoxGenerator("Paltaryuyan", this.checkboxCallback, "paltar", this.state.rentalAddition.paltarY)}

            {this.utility.checkBoxGenerator("Soyuducu", this.checkboxCallback, "soyuducu", this.state.rentalAddition.soyuducu)}

            {this.utility.checkBoxGenerator("TV", this.checkboxCallback, "tv", this.state.rentalAddition.tv)}

            {this.utility.checkBoxGenerator("Kondicioner", this.checkboxCallback, "kondicioner", this.state.rentalAddition.kondicioner)}

            {this.utility.checkBoxGenerator("Internet", this.checkboxCallback, "internet", this.state.rentalAddition.internet)}

            {this.utility.checkBoxGenerator("Telefon", this.checkboxCallback, "telefon", this.state.rentalAddition.telefon)}

            {this.utility.checkBoxGenerator("Usag ilə", this.checkboxCallback, "usag", this.state.rentalAddition.usag)}

            {this.utility.checkBoxGenerator("Heyvan ilə", this.checkboxCallback, "heyvan", this.state.rentalAddition.heyvan)}

        </div>

        return (
            <div className={'part'}>

                {this.header("Əsas", "basliq")}

                {this.utility.selectGenerator("Kirayə müddəti:", this.state.rentDurationList, "rentDuration", this.state.selected.rentDuration, this.commonCallback, true, false)}

                {this.state.rentingTypeBoxVisibility?this.utility.radioGenerator("Kirayə Tipi:", this.state.rentalAddition.otagordaire, 0, this.rentTypeCallback, "otagordaire", [{ id: 0, name: "Bütün Yer" }, { id: 1, name: "Otag" }]):null}

                {this.utility.numberGenerator("Qiymət:", "Daxil Edin", this.numberCallback, "price", true, 1, Number.MAX_VALUE, {addonAfterList: this.state.currencyList, addonAfterCallback: this.commonCallback, addonName: "currency", addonValue: this.state.selected.currency})}

                {this.utility.numberGenerator("Sahə:", "Daxil Edin", this.numberCallback, "areaSize", true, 1, Number.MAX_VALUE, {addonAfterOnlyText: this.state.areaUnit})}

                {this.utility.numberGenerator("Torpaq Sahəsi:", "Daxil Edin", this.numberCallback, "secondAreaSize", this.state.addition.secondArea, 1, Number.MAX_VALUE, {addonAfterOnlyText: "sot"})}

                {this.utility.numberGenerator("Otag:", "Daxil Edin", this.numberCallback, "roomAmount", this.state.addition.roomAmount)}

                {this.utility.selectGenerator("Torpag Teyinati:", this.state.addition.landAppointment ? this.state.landAppointmentList : false, "landAppointment", this.state.selected.landAppointment, this.commonCallback, null, true, false)}

                {this.utility.numberGenerator("Menzil Mertebesi:", "Daxil Edin", this.numberCallback, "floor", this.state.addition.floor, 0)}

                {this.utility.numberGenerator("Bina Mertebesi:", "Daxil Edin", this.numberCallback, "buildingFloor", this.state.addition.buildingFloor)}

                {this.utility.numberGenerator("Hamam Sayı", "Daxil Edin", this.numberCallback, "hamam", this.state.addition.hamam, 0, 20)}

                <div className={'radioGroup'} style={{ textAlign: '' }}>

                    {this.utility.checkBoxGenerator("Eyvan", this.checkboxCallback, "eyvan", this.state.addition.eyvan)}
                    {this.utility.checkBoxGenerator("Lift", this.checkboxCallback, "lift", this.state.addition.lift)}
                    {this.utility.checkBoxGenerator("Mebel", this.checkboxCallback, "mebel", this.state.addition.mebel)}
                    {this.utility.checkBoxGenerator("Temir", this.checkboxCallback, "temir", this.state.addition.temir)}
                    {this.utility.checkBoxGenerator("Hovuz", this.checkboxCallback, "hovuz", this.state.addition.hovuz)}
                    {this.utility.checkBoxGenerator("Qaz", this.checkboxCallback, "qaz", this.state.addition.qaz)}
                    {this.utility.checkBoxGenerator("Su", this.checkboxCallback, "su", this.state.addition.su)}
                    {this.utility.checkBoxGenerator("Isig", this.checkboxCallback, "isig", this.state.addition.isig)}
                    {this.utility.checkBoxGenerator("Kanalizasiya", this.checkboxCallback, "kanalizasiya", this.state.addition.kanalizasiya)}

                </div>

                {this.state.rentingTypeBoxVisibility ? rentingBox : null}

                {this.utility.textAreaGeneretor("Məlumat:", "Ən azı 100 hərfdən ibarət olmalıdır", this.textAreaCallback, "aboutInfo")}

                {this.state.sellingTypeBoxVisibility ? sellingBox : null}

                {this.utility.imageUploadGenerator(this.state.fileList, this.state.previewVisible, this.state.previewTitle, this.state.previewImage)}
            </div>
        )
    }

    elaqe = () => {
        return (
            <div className={'part'}>

                {this.header("Əlaqə", "basliq")}

                {this.utility.radioGenerator("Əlaqədar Şəxsin Statusu:", [
                    {
                        id: 1,
                        name: "Sahibi"
                    },
                    {
                        id: 0,
                        name: "Vastəçi"
                    },
                ], 1, this.ownerCallback, "owner")}

                {this.utility.inputGenerator("Ad:", "Daxil Edin", this.textAreaCallback, "name")}

                {this.utility.inputGenerator("Nömrə:", "Daxil Edin", this.textAreaCallback, "phone")}

                {this.utility.inputGenerator("E-mail:", "Daxil Edin", this.textAreaCallback, "email")}




                <div className={'radioGroup'} style={{ textAlign: '' }}>

                    {this.utility.checkBoxGenerator("WhatsApp", this.checkboxCallback, "wp", true)}
                    {this.utility.checkBoxGenerator("Zəng", this.checkboxCallback, "call", true)}

                </div>
                <div className={"button"}>
                    <a onClick={this.submitClick}>Elave et</a>
                </div>
            </div>
        )
    }

    elave = () => {
        return (
            <div>

            </div>
        )
    }

    render(h) {
        return (
            <div id={'addSection'}>
                <div className={'container'}>
                    <div className={'row'}>
                        <div className={'col first'}>
                            <div className={'customCol'}>
                                {this.ilkin()}
                                {this.esas()}
                                {this.elaqe()}
                            </div>
                        </div>
                        <div className={'col second'}>
                            <div className={'customCol'}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    validation = () => {
        let inputs = document.querySelectorAll("#addSection [validatename]");

        let hasError = false

        for (let index = 0; index < inputs.length; index++) {
            if (!this.state.selected[inputs[index].getAttribute("validatename")]) {
                if (!hasError) { hasError = !hasError; }

                let text = `Məlumat Doldurulmayıb: ${inputs[index].getAttribute("displayname")}`
                this.utility.showError(text)

                let ele = inputs[index].querySelector(".ant-select-selector") || inputs[index].querySelector("textarea") || inputs[index].querySelector("input");
                if (ele) {
                    ele.classList.add("errorBorder");
                    ele.onclick = (e) => { ele.classList.remove("errorBorder") }
                }
            }
        }

        if (this.state.selected.images == null || this.state.selected.images.length == 0) {
            let text = `Məlumat Doldurulmayıb: Şəkillər`
            this.utility.showError(text)
            return false;
        }

        return hasError

    }

    submitClick = async (e) => {
        if (this.validation()) return

        let header = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify(this.state.selected)
        }

        let res = await fetch("http://192.168.1.107:5566/api/bina/Add", header);
        if (res.status == 200) {
            alert("Done")
        }
    }

    isMetroCallback = (value) => {

        let city = this.state.cityList.find(w => w.id == this.state.selected.city) || false;
        if (!value.target.checked && city) {
            this.setState({
                ...this.state,
                metroList: city.metros
            })
        } else {
            this.setState({
                ...this.state,
                metroList: null
            })
        }

    }

    googleMapCallback = (w) => {
        this.setState({
            ...this.state,
            selected: {
                ...this.state.selected,
                lat: w.latLng.lat(),
                lng: w.latLng.lng()
            },
            lat: w.latLng.lat(),
            lng: w.latLng.lng()
        })
    }

    ownerCallback = (value) => {
        this.setState({
            ...this.state,
            selected: {
                ...this.state.selected,
                owner: value.target.value ? true : false
            }
        })
    }

    rentTypeCallback = (value) => {
        this.setState({
            ...this.state,
            selected: {
                ...this.state.selected,
                otagordaire: value.target.value ? true : false
            }
        })
    }

    sellTypeCallback = (value) => {
        let rent = this.state.sellTypeList.find(w => w.id == value.target.value).rent
        this.setState({
            ...this.state,
            selected: {
                ...this.state.selected,
                category: null,
                sellType: value.target.value,
                rentDuration: rent.length > 0 ? this.state.selected.rentDuration : null
            },
            rentDurationList: rent.length > 0 ? rent : null,
            sellingTypeBoxVisibility: rent.length > 0 ? false : true,
            rentingTypeBoxVisibility: rent.length > 0 ? true : false,
            rentalAddition: rent.length > 0 ? this.state.rentalAddition : {},

        })
    }

    categoryCallback = (value) => {
        this.setState({
            ...this.state,
            areaUnit: this.props.filter.categories.find(w=>w.id == value).areaUnit,
            selected: {
                ...this.state.selected,
                category: value,
            },
            addition: {
                ...this.props.filter.categories.find(w => w.id == value)
            },
            rentalAddition: this.props.filter.rentals.find(w => w.id == this.props.filter.categories.find(w => w.id == value).rentalProİd) || {}
        })
    }

    cityCallback = (value) => {
        let regions = this.state.cityList.find(w => w.id == value).regions;
        let metros = this.state.cityList.find(w => w.id == value).metros;
        this.setState({
            selected: {
                ...this.state.selected,
                city: value,
                region: null,
                village: null,
                metro: null,
            },
            metroList: !metros.length ? null : metros,
            nometro: !metros.length ? false : true,
            regionList: !regions.length ? null : regions,
            villageList: null
        })
    }

    regionCallback = (value) => {
        if (!value) {
            this.setState({
                selected: {
                    ...this.state.selected,
                    region: 0,
                    village: null,
                },
                villageList: null
            })

            return;
        }
        let villages = this.state.regionList.find(w => w.id == value).villages;
        this.setState({
            selected: {
                ...this.state.selected,
                region: value,
                village: null
            },
            villageList: !villages.length ? null : villages
        })
    }

    commonCallback = (value, option) => {
        this.setState({
            selected: {
                ...this.state.selected,
                [option.state]: value
            }
        })

    }

    textAreaCallback = (value) => {
        this.setState({
            selected: {
                ...this.state.selected,
                [value.target.name]: value.target.defaultValue
            }
        })
    }

    numberCallback = (value) => {
        this.setState({
            selected: {
                ...this.state.selected,
                [value.target.name]: +value.target.defaultValue.replace(/[^\d]/g, '')
            }
        })
    }

    checkboxCallback = (e) => {
        let value = e.target.checked
        this.setState({
            selected: {
                ...this.state.selected,
                [e.target.state]: value
            }
        })
    }
}

export async function getStaticProps() {
    const res = await fetch('http://192.168.1.107:5566/api/bina/Form')
    const filter = await res.json()
    return {
        props: {
            filter,
        },
    }
}

export default Add;