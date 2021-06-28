import { Component } from 'react'
import * as types from '../../store/types'
import { connect } from 'react-redux';
import Utilities from '@/utilities'
import Callbacks from '@/callbacks';
import FilterLayout from '@/Constructions/filter'
import * as URL from '@/Constructions/const'

const mapStateToProps = (state) => {
    return {
        redux: state.redux
    };
}


class Filter extends Component {
    constructor(props) {
        super(props)

        this.utility = new Utilities(this);
        this.callbacks = new Callbacks(this);

        this.state = {
            ...this.utility.getImageState,
            selected: {
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
                owner: null,
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
                customAdress: null,
                //For Filter Side
                minRoom: null,
                maxRoom: null,
                minApartmentFloor: null,
                maxApartmentFloor: null,
                minBuildingFloor: null,
                maxBuildingFloor: null,
                minPrice: null,
                maxPrice: null,
                minArea: null,
                maxArea: null,
                minMetroDuration: null,
                maxMetroDuration: null,
                minLandArea: null,
                maxLandArea: null,
                sharedDate: null,
                bottomfloor: null,
                middlefloor: null,
                upperfloor: null,
            },
            areaUnit: null,
            sellingTypeBoxVisibility: true,
            rentingTypeBoxVisibility: false,
            mapVisible: false,
            extraVisible: false,
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
            sharedDate: null,
            addition: {
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
            this.state.rentals = this.props.filter.rentals;
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
            },
                this.state.sharedDate = this.props.filter.sharedDate
        }

    }

    componentDidUpdate = async (prevProps, prevState) => {
        if (prevState.selected !== this.state.selected) {
            let conn = await fetch(`${URL.BINA_SEARCH}?s=${0}&t=${20}`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                mode: 'cors',
                body: JSON.stringify(this.state.selected)
            });
            let res = await conn.json();

            this.props.dispatch({ type: types.SAVE_FILTER, payload: res })
        }

    }

    extras = () => {

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
            <div>
                {this.utility.radioGenerator("Əlaqədar Şəxsin Statusu:", [
                    {
                        id: 2,
                        name: "Hamısı"
                    },
                    {
                        id: 1,
                        name: "Sahibi"
                    },
                    {
                        id: 0,
                        name: "Vastəçi"
                    },
                ], 2, this.callbacks.ownerCallback, "owner")}


                {this.utility.rangeİnputGenerator("Menzil Mertebesi:", "minApartmentFloor", "maxApartmentFloor", this.callbacks.numberCallback, this.state.addition.floor)}


                {this.utility.rangeİnputGenerator("Bina Mertebesi:", "minBuildingFloor", "maxBuildingFloor", this.callbacks.numberCallback, this.state.addition.buildingFloor)}

                {this.utility.rangeİnputGenerator("Metroya olan müddət:", "minMetroDuration", "maxMetroDuration", this.callbacks.numberCallback, this.state.selected.metro,
                    { addonAfterList: this.state.metroWayList, addonAfterCallback: this.callbacks.commonCallback, addonName: "metroWay", addonValue: this.state.selected.metroWay })}


                {this.utility.rangeİnputGenerator("Hamam Sayı", "minBath", "maxBath", this.callbacks.numberCallback, this.state.addition.hamam)}

                {this.utility.checkBoxGenerator("Eyvan", this.callbacks.checkboxCallback, "eyvan", this.state.addition.eyvan)}
                {this.utility.checkBoxGenerator("Lift", this.callbacks.checkboxCallback, "lift", this.state.addition.lift)}
                {this.utility.checkBoxGenerator("Mebel", this.callbacks.checkboxCallback, "mebel", this.state.addition.mebel)}
                {this.utility.checkBoxGenerator("Temir", this.callbacks.checkboxCallback, "temir", this.state.addition.temir)}
                {this.utility.checkBoxGenerator("Hovuz", this.callbacks.checkboxCallback, "hovuz", this.state.addition.hovuz)}
                {this.utility.checkBoxGenerator("Qaz", this.callbacks.checkboxCallback, "qaz", this.state.addition.qaz)}
                {this.utility.checkBoxGenerator("Su", this.callbacks.checkboxCallback, "su", this.state.addition.su)}
                {this.utility.checkBoxGenerator("Isig", this.callbacks.checkboxCallback, "isig", this.state.addition.isig)}
                {this.utility.checkBoxGenerator("Kanalizasiya", this.callbacks.checkboxCallback, "kanalizasiya", this.state.addition.kanalizasiya)}


                {this.state.rentingTypeBoxVisibility ? rentingBox : null}
                {this.state.sellingTypeBoxVisibility ? sellingBox : null}

            </div>
        );
    }

    render(h) {

        return (
            <FilterLayout>
                {this.utility.radioGenerator("Əmlak:", this.state.sellTypeList, 1, this.callbacks.sellTypeCallback, "sellType")}

                {this.utility.selectGenerator("Kategoriya:", this.state.categoryList, "category", this.state.selected.category, this.callbacks.binaCategoryCallback, { subname: this.state.subCategory })}

                {this.utility.selectGenerator("Şəhər:", this.state.cityList, "city", this.state.selected.city, this.callbacks.cityCallback, { sort: true, swapItem: [5] })}

                {this.utility.selectGenerator("Rayon:", this.state.regionList, "region", this.state.selected.region, this.callbacks.regionCallback, { sort: true })}

                {this.utility.selectGenerator("Qəsəbə:", this.state.villageList, "village", this.state.selected.village, this.callbacks.commonCallback, { sort: true })}

                {this.utility.selectGenerator("Metro:", this.state.metroList, "metro", this.state.selected.metro, this.callbacks.commonCallback, { sort: true })}


                {this.utility.selectGenerator("Kirayə müddəti:", this.state.rentDurationList, "rentDuration", this.state.selected.rentDuration, this.callbacks.commonCallback, { sort: true })}


                {this.utility.rangeİnputGenerator("Qiymət:", "minPrice", "maxPrice", this.callbacks.numberCallback, this.state.selected.category, { addonAfterList: this.state.currencyList, addonAfterCallback: this.callbacks.commonCallback, addonName: "currency", addonValue: this.state.selected.currency })}

                {this.utility.rangeİnputGenerator("Sahə:", "minArea", "maxArea", this.callbacks.numberCallback, this.state.selected.category, { addonAfterOnlyText: this.state.areaUnit ?? "m²" })}

                {this.utility.rangeİnputGenerator("Torpaq Sahəsi:", "minLandArea", "maxLandArea", this.callbacks.numberCallback, this.state.addition.secondArea, { addonAfterOnlyText: "sot" })}

                {this.utility.rangeİnputGenerator("Otag", "minRoom", "maxRoom", this.callbacks.numberCallback, this.state.addition.roomAmount)}

                {this.utility.selectGenerator("Torpag Teyinati:", this.state.addition.landAppointment ? this.state.landAppointmentList : false, "landAppointment", this.state.selected.landAppointment, this.callbacks.commonCallback, { selectAll: true })}


                {this.utility.checkBoxGenerator("Mərtəbə:", this.callbacks.checkboxCallback, null, this.state.addition.roomAmount, {
                    multiple: [
                        {
                            name: "bottomfloor",
                            title: "Ən Alt"
                        },
                        {
                            name: "middlefloor",
                            title: "Ortalar"
                        },
                        {
                            name: "upperfloor",
                            title: "Ən Yuxarı"
                        },
                    ]
                })}

                {this.utility.selectGenerator("Paylaşma Tarixi:", this.state.sharedDate, "sharedDate", this.state.selected.sharedDate, this.callbacks.commonCallback, { selectAll: true })}

                {this.utility.generateModal(this.extras(), this.state.extraVisible, "extraVisible", { title: "Əlavələr" })}

                <div className={'extraBtnParent'}>
                    <button className={'extraBtn'} onClick={() => { this.setState({ extraVisible: true }) }}>Əlavələr</button>
                </div>
            </FilterLayout>
        )
    }

}


export default connect(mapStateToProps)(Filter);