import { Component } from 'react'
import * as types from '../../store/types'
import { connect } from 'react-redux';
import Utilities from '@/utilities'

const mapStateToProps = (state) => {
    return {
        redux: state.redux
    };
}


class Filter extends Component {
    constructor(props) {
        super(props)

        this.utility = new Utilities(this);

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

    componentDidUpdate = async (prevProps, prevState) => {
        if (prevState.selected !== this.state.selected) {
            console.log(this.state.selected)
            let conn = await fetch("http://192.168.1.107:5566/api/bina/search", {
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

    render(h) {

        return (
            <div className={'filter'}>
                <div className={'containerFilter'}>
                    {this.utility.radioGenerator("Əmlak:", this.state.sellTypeList, 1, this.sellTypeCallback, "sellType")}

                    {this.utility.selectGenerator("Kategoriya:", this.state.categoryList, "category", this.state.selected.category, this.categoryCallback, false, false, this.state.subCategory)}

                    {this.utility.selectGenerator("Şəhər:", this.state.cityList, "city", this.state.selected.city, this.cityCallback, true, false)}

                    {this.utility.selectGenerator("Rayon:", this.state.regionList, "region", this.state.selected.region, this.regionCallback, true, false)}

                    {this.utility.selectGenerator("Qəsəbə:", this.state.villageList, "village", this.state.selected.village, this.commonCallback, true, false)}

                    {this.utility.selectGenerator("Metro:", this.state.metroList, "metro", this.state.selected.metro, this.commonCallback, true, false)}

                    {this.utility.numberGenerator("Metroya olan dəqiqə müddəti:", "Daxil Edin", this.numberCallback, "metroDuration", this.state.selected.metro, 1, 120,
                        { addonAfterList: this.state.metroWayList, addonAfterCallback: this.commonCallback, addonName: "metroWay", addonValue: this.state.selected.metroWay })}

                    {this.utility.selectGenerator("Kirayə müddəti:", this.state.rentDurationList, "rentDuration", this.state.selected.rentDuration, this.commonCallback, true, false)}

                    {this.utility.numberGenerator("Qiymət:", "Daxil Edin", this.numberCallback, "price", true, 1, Number.MAX_VALUE, { addonAfterList: this.state.currencyList, addonAfterCallback: this.commonCallback, addonName: "currency", addonValue: this.state.selected.currency })}

                    {this.utility.numberGenerator("Sahə:", "Daxil Edin", this.numberCallback, "areaSize", true, 1, Number.MAX_VALUE, { addonAfterOnlyText: this.state.areaUnit })}

                </div>
            </div>
        )
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
            areaUnit: this.props.filter.categories.find(w => w.id == value).areaUnit,
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

    checkboxCallback = (e) => {
        let value = e.target.checked
        this.setState({
            selected: {
                ...this.state.selected,
                [e.target.state]: value
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

    commonCallback = (value, option) => {
        this.setState({
            selected: {
                ...this.state.selected,
                [option.state]: value
            }
        })

    }
}






export default connect(mapStateToProps)(Filter);