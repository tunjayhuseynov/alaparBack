

class Callbacks {

    constructor(th){
        this.checkboxCallback = this.checkboxCallback.bind(th)   // 1
        this.numberCallback = this.numberCallback.bind(th)       // 2
        this.textAreaCallback = this.textAreaCallback.bind(th)   // 3
        this.commonCallback = this.commonCallback.bind(th)       // 4
        this.regionCallback = this.regionCallback.bind(th)       // 5
        this.cityCallback = this.cityCallback.bind(th)           // 6
        this.categoryCallback = this.categoryCallback.bind(th)   // 7
        this.sellTypeCallback = this.sellTypeCallback.bind(th)   // 8
        this.rentTypeCallback = this.rentTypeCallback.bind(th)   // 9
        this.ownerCallback = this.ownerCallback.bind(th)         // 10
        this.googleMapCallback = this.googleMapCallback.bind(th) // 11
        this.isMetroCallback = this.isMetroCallback.bind(th)     // 12
        this.markCallback = this.markCallback.bind(th)     // 12
    }

    markCallback = function(value){
        this.setState({
            ...this.state,
            selected: {
                ...this.state.selected,
                mark: value,
            },
            modelList: this.state.markList.find(w=>w.id == value).models,
            modelSubList: this.utility.convertCategory2Sub(this.state.markList.find(w=>w.id == value).models, "title")
        })
    }

    isMetroCallback = function(value) {

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

    googleMapCallback = function(w) {
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

    ownerCallback = function(value) {
        this.setState({
            ...this.state,
            selected: {
                ...this.state.selected,
                owner: value.target.value != 2? value.target.value ? true : false : null
            }
        })
    }

    rentTypeCallback = function(value) {
        this.setState({
            ...this.state,
            selected: {
                ...this.state.selected,
                otagordaire: value.target.value ? true : false
            }
        })
    }

    sellTypeCallback = function(value) {
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

    categoryCallback = function(value) {
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

    cityCallback = function(value) {
        let regions = this.state.cityList?.find(w => w.id == value)?.regions;
        let metros = this.state.cityList?.find(w => w.id == value)?.metros;
        this.setState({
            selected: {
                ...this.state.selected,
                city: value,
                region: null,
                village: null,
                metro: null,
            },
            metroList: metros || null,
            nometro: !metros.length ? false : true,
            regionList: regions || null,
            villageList: null
        })
    }

    regionCallback = function(value) {
        let villages = this.state.regionList?.find(w => w.id == value)?.villages;
        this.setState({
            selected: {
                ...this.state.selected,
                region: value,
                village: null
            },
            villageList: villages || null
        })
    }

    commonCallback = function(value, option) {
        this.setState({
            selected: {
                ...this.state.selected,
                [option.state]: value
            }
        })

    }

    textAreaCallback = function(value) {
        this.setState({
            selected: {
                ...this.state.selected,
                [value.target.name]: value.target.defaultValue
            }
        })
    }

    numberCallback = function(value) {
        this.setState({
            selected: {
                ...this.state.selected,
                [value.target.name]: +value.target.defaultValue.replace(/[^\d]/g, '')
            }
        })
    }

    checkboxCallback = function(e) {
        let value = e.target.checked
        this.setState({
            selected: {
                ...this.state.selected,
                [e.target.state]: value
            }
        })
    }

}

export default Callbacks;