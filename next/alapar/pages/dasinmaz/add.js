import { Component } from 'react'
import Utilities from '@/utilities';
import Callbacks from '@/callbacks';

class Add extends Component {

    constructor(props) {
        super(props)

        this.utility = new Utilities(this);
        this.callbacks = new Callbacks(this);
   
        this.state = {
            ...this.utility.getImageState,
            url: "http://192.168.1.107:5566/api/bina/image",
            submitUrl: "http://192.168.1.107:5566/api/bina/Add",
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
                secondAreaSize: null,
                customAdress: null
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
            this.state.subCategory = this.utility.convertCategory2Sub(this.props.filter.categories, "subname")
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


    ilkin = () => {
        return (
            <div className={'part'}>

                {this.utility.header("Ilkin", "basliq")}

                {this.utility.radioGenerator("Əmlak:", this.state.sellTypeList, 1, this.callbacks.sellTypeCallback, "sellType")}

                {this.utility.selectGenerator("Kategoriya:", this.state.categoryList, "category", this.state.selected.category, this.callbacks.categoryCallback, {subname: this.state.subCategory})}

                {this.utility.selectGenerator("Şəhər:", this.state.cityList, "city", this.state.selected.city, this.callbacks.cityCallback, {sort: true, swapItem: [5]})}

                {this.utility.selectGenerator("Rayon:", this.state.regionList, "region", this.state.selected.region, this.callbacks.regionCallback, {sort: true})}

                {this.utility.selectGenerator("Qəsəbə:", this.state.villageList, "village", this.state.selected.village, this.callbacks.commonCallback, {sort: true})}

                {this.utility.inputGenerator("Ünvan (Küçə, Ev, Mənzil və s.):", "Daxil Edin", this.callbacks.textAreaCallback, "customAdress")}

                {this.utility.selectGenerator("Metro:", this.state.metroList, "metro", this.state.selected.metro, this.callbacks.commonCallback, {sort: true})}

                {this.utility.numberGenerator("Metroya olan dəqiqə müddəti:", "Daxil Edin", this.callbacks.numberCallback, "metroDuration", this.state.selected.metro, 1, 120, 
                {addonAfterList: this.state.metroWayList, addonAfterCallback: this.callbacks.commonCallback, addonName: "metroWay", addonValue: this.state.selected.metroWay})}

                <div className={'radioGroup'}>
                    {this.utility.checkBoxGenerator("Metro Yoxdur", this.callbacks.isMetroCallback, "nometro", this.state.nometro)}
                </div>
                {this.utility.googleMap(this.state.lat, this.state.lng, this.callbacks.googleMapCallback, "Xəritə:", "lat", "lng")}

            </div>
        )
    }

    esas = () => {
        let sellingBox = <div className={'sellingTypeBox radioGroup'} style={{ textAlign: '' }}>

            {this.utility.checkBoxGenerator("Cixaris", this.callbacks.checkboxCallback, "licence", this.state.license)}

            {this.utility.checkBoxGenerator("Barter", this.callbacks.checkboxCallback, "barter", this.state.addition.barter)}

            {this.utility.checkBoxGenerator("Ipoteka", this.callbacks.checkboxCallback, "ipoteka", this.state.ipoteka)}

            {this.utility.checkBoxGenerator("Cixaris (Icare)", this.callbacks.checkboxCallback, "icare", this.state.addition.icare)}

            {this.utility.checkBoxGenerator("Belediyye", this.callbacks.checkboxCallback, "belediyye", this.state.addition.belediyye)}

        </div>

        let rentingBox = <div className={'rentingBox radioGroup'} style={{ textAlign: '' }}>

            {this.utility.checkBoxGenerator("Mətbəx Mebeli", this.callbacks.checkboxCallback, "metbex", this.state.rentalAddition.metbexM)}

            {this.utility.checkBoxGenerator("Qabyuyan", this.callbacks.checkboxCallback, "qab", this.state.rentalAddition.qabY)}

            {this.utility.checkBoxGenerator("Paltaryuyan", this.callbacks.checkboxCallback, "paltar", this.state.rentalAddition.paltarY)}

            {this.utility.checkBoxGenerator("Soyuducu", this.callbacks.checkboxCallback, "soyuducu", this.state.rentalAddition.soyuducu)}

            {this.utility.checkBoxGenerator("TV", this.callbacks.checkboxCallback, "tv", this.state.rentalAddition.tv)}

            {this.utility.checkBoxGenerator("Kondicioner", this.callbacks.checkboxCallback, "kondicioner", this.state.rentalAddition.kondicioner)}

            {this.utility.checkBoxGenerator("Internet", this.callbacks.checkboxCallback, "internet", this.state.rentalAddition.internet)}

            {this.utility.checkBoxGenerator("Telefon", this.callbacks.checkboxCallback, "telefon", this.state.rentalAddition.telefon)}

            {this.utility.checkBoxGenerator("Usag ilə", this.callbacks.checkboxCallback, "usag", this.state.rentalAddition.usag)}

            {this.utility.checkBoxGenerator("Heyvan ilə", this.callbacks.checkboxCallback, "heyvan", this.state.rentalAddition.heyvan)}

        </div>

        return (
            <div className={'part'}>

                {this.utility.header("Əsas", "basliq")}

                {this.utility.selectGenerator("Kirayə müddəti:", this.state.rentDurationList, "rentDuration", this.state.selected.rentDuration, this.callbacks.commonCallback, {sort: true})}

                {this.state.rentingTypeBoxVisibility?this.utility.radioGenerator("Kirayə Tipi:", this.state.rentalAddition.otagordaire, 0, this.callbacks.rentTypeCallback, "otagordaire", [{ id: 0, name: "Bütün Yer" }, { id: 1, name: "Otag" }]):null}

                {this.utility.numberGenerator("Qiymət:", "Daxil Edin", this.callbacks.numberCallback, "price", true, 1, Number.MAX_VALUE, {addonAfterList: this.state.currencyList, addonAfterCallback: this.callbacks.commonCallback, addonName: "currency", addonValue: this.state.selected.currency})}

                {this.utility.numberGenerator("Sahə:", "Daxil Edin", this.callbacks.numberCallback, "areaSize", true, 1, Number.MAX_VALUE, {addonAfterOnlyText: this.state.areaUnit})}

                {this.utility.numberGenerator("Torpaq Sahəsi:", "Daxil Edin", this.callbacks.numberCallback, "secondAreaSize", this.state.addition.secondArea, 1, Number.MAX_VALUE, {addonAfterOnlyText: "sot"})}

                {this.utility.numberGenerator("Otag:", "Daxil Edin", this.callbacks.numberCallback, "roomAmount", this.state.addition.roomAmount)}

                {this.utility.selectGenerator("Torpag Teyinati:", this.state.addition.landAppointment ? this.state.landAppointmentList : false, "landAppointment", this.state.selected.landAppointment, this.callbacks.commonCallback, {sort: true})}

                {this.utility.numberGenerator("Menzil Mertebesi:", "Daxil Edin", this.callbacks.numberCallback, "floor", this.state.addition.floor, 0)}

                {this.utility.numberGenerator("Bina Mertebesi:", "Daxil Edin", this.callbacks.numberCallback, "buildingFloor", this.state.addition.buildingFloor)}

                {this.utility.numberGenerator("Hamam Sayı", "Daxil Edin", this.callbacks.numberCallback, "hamam", this.state.addition.hamam, 0, 20)}

                <div className={'radioGroup'} style={{ textAlign: '' }}>

                    {this.utility.checkBoxGenerator("Eyvan", this.callbacks.checkboxCallback, "eyvan", this.state.addition.eyvan)}
                    {this.utility.checkBoxGenerator("Lift", this.callbacks.checkboxCallback, "lift", this.state.addition.lift)}
                    {this.utility.checkBoxGenerator("Mebel", this.callbacks.checkboxCallback, "mebel", this.state.addition.mebel)}
                    {this.utility.checkBoxGenerator("Temir", this.callbacks.checkboxCallback, "temir", this.state.addition.temir)}
                    {this.utility.checkBoxGenerator("Hovuz", this.callbacks.checkboxCallback, "hovuz", this.state.addition.hovuz)}
                    {this.utility.checkBoxGenerator("Qaz", this.callbacks.checkboxCallback, "qaz", this.state.addition.qaz)}
                    {this.utility.checkBoxGenerator("Su", this.callbacks.checkboxCallback, "su", this.state.addition.su)}
                    {this.utility.checkBoxGenerator("Isig", this.callbacks.checkboxCallback, "isig", this.state.addition.isig)}
                    {this.utility.checkBoxGenerator("Kanalizasiya", this.callbacks.checkboxCallback, "kanalizasiya", this.state.addition.kanalizasiya)}

                </div>

                {this.state.rentingTypeBoxVisibility ? rentingBox : null}

                {this.utility.textAreaGeneretor("Məlumat:", "Ən azı 100 hərfdən ibarət olmalıdır", this.callbacks.textAreaCallback, "aboutInfo")}

                {this.state.sellingTypeBoxVisibility ? sellingBox : null}

                {this.utility.imageUploadGenerator(this.state.fileList, this.state.previewVisible, this.state.previewTitle, this.state.previewImage, this.state.url)}
            </div>
        )
    }

    elaqe = () => {
        return (
            <div className={'part'}>

                {this.utility.header("Əlaqə", "basliq")}

                {this.utility.radioGenerator("Əlaqədar Şəxsin Statusu:", [
                    {
                        id: 1,
                        name: "Sahibi"
                    },
                    {
                        id: 0,
                        name: "Vastəçi"
                    },
                ], 1, this.callbacks.ownerCallback, "owner")}

                {this.utility.inputGenerator("Ad:", "Daxil Edin", this.callbacks.textAreaCallback, "name")}

                {this.utility.inputGenerator("Nömrə:", "Daxil Edin", this.callbacks.textAreaCallback, "phone")}

                {this.utility.inputGenerator("E-mail:", "Daxil Edin", this.callbacks.textAreaCallback, "email")}




                <div className={'radioGroup'} style={{ textAlign: '' }}>

                    {this.utility.checkBoxGenerator("WhatsApp", this.callbacks.checkboxCallback, "wp", true)}
                    {this.utility.checkBoxGenerator("Zəng", this.callbacks.checkboxCallback, "call", true)}

                </div>
                <div className={"button"}>
                    <a onClick={this.utility.submitClick} valId="addSection" link={this.state.submitUrl}>Elave et</a>
                </div>
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