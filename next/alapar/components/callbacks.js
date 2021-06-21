class Callbacks {

    constructor(th) {
        this.checkboxCallback = this.checkboxCallback.bind(th)   // 1
        this.numberCallback = this.numberCallback.bind(th)       // 2
        this.textAreaCallback = this.textAreaCallback.bind(th)   // 3
        this.commonCallback = this.commonCallback.bind(th)       // 4
        this.regionCallback = this.regionCallback.bind(th)       // 5
        this.cityCallback = this.cityCallback.bind(th)           // 6
        this.binaCategoryCallback = this.binaCategoryCallback.bind(th)   // 7
        this.sellTypeCallback = this.sellTypeCallback.bind(th)   // 8
        this.rentTypeCallback = this.rentTypeCallback.bind(th)   // 9
        this.ownerCallback = this.ownerCallback.bind(th)         // 10
        this.googleMapCallback = this.googleMapCallback.bind(th) // 11
        this.isMetroCallback = this.isMetroCallback.bind(th)     // 12
        this.autoMarkCallback = this.autoMarkCallback.bind(th)     // 13
        this.electroCategoryCallback = this.electroCategoryCallback.bind(th)   // 14
        this.electroMarkCallback = this.electroMarkCallback.bind(th)   // 15
        this.phoneNumberCallback = this.phoneNumberCallback.bind(th)   // 16
        this.electroModelCallback = this.electroModelCallback.bind(th)   // 17
        this.hobbyCategoryCallback = this.hobbyCategoryCallback.bind(th) // 18
        this.animalCategoryCallback = this.animalCategoryCallback.bind(th) // 19
        this.homeCategoryCallback = this.homeCategoryCallback.bind(th) // 20
        this.privateCategoryCallback = this.privateCategoryCallback.bind(th) // 21
        this.clothesGenderCallback = this.clothesGenderCallback.bind(th) // 22
    }

    clothesGenderCallback = function (value){
        let cat = this.state.clothesGendersList.find(w=>w.id == value)
        this.setState({
            ...this.state,
            selected: {
                ...this.state.selected,
                clothesGender: value,
                clothesTypes: null
            },
            clothesTypesList: cat?.clothesTypes
        })
    }

    privateCategoryCallback = function(value) {
        let cat = this.state.categoryList.find(w=>w.id == value)
        this.setState({
            ...this.state,
            selected: {
                ...this.state.selected,
                category: value, 
                type: null,
                clothesGender: null,
                clothesTypes: null
            },
            typeList: cat?.typeList, 
            clothesGendersList: cat?.ClothesGender,
            clothesTypesList: null,
            hasNew: cat?.new,
            hasDelivery: cat?.delivery
        })
    }

    homeCategoryCallback = function (value){
        let cat = this.state.categoryList.find(w=>w.id == value)
        this.setState({
            ...this.state,
            selected: {
                ...this.state.selected,
                category: value, 
                type: null,
            },
            typeList: cat?.typeList, 
            hasNew: cat?.new
        })
    }

    animalCategoryCallback = function(value, e) {
        console.log(e)
        let cat = this.state.categoryList.find(w=>w.id == value)
        
        this.setState({
            ...this.state,
            selected: {
                ...this.state.selected,
                category: value, 
                type: null,
                genera: null,
            },
            typeList: cat?.typeList, 
            generaList: cat?.generaList,
        })
    }

    hobbyCategoryCallback = function(value){
        let cat = this.state.categoryList.find(w=>w.id == value)
        this.setState({
            ...this.state,
            selected: {
                ...this.state.selected,
                category: value, 
                type: null,
            },
            typeList: cat?.type, 
            isNew: cat?.new,
            hasDelivery: cat?.delivery
        })
    }

    autoMarkCallback = function (value) {
        this.setState({
            ...this.state,
            selected: {
                ...this.state.selected,
                mark: value,
                model: null,
            },
            modelList: this.state.markList.find(w => w.id == value).models,
            modelSubList: this.utility.convertCategory2Sub(this.state.markList.find(w => w.id == value).models, "title")
        })
    }

    electroMarkCallback = function (value) {
        this.setState({
            ...this.state,
            selected: {
                ...this.state.selected,
                mark: value,
                model: null,
            },
            modelList: this.state.markList.find(w=>w.id == value).model
        })
    }

    electroModelCallback = async function(value, option){
        this.callbacks.commonCallback(value, option)

        let reqColor = await fetch(this.state.colorUrl + value)
        let resColor = await reqColor.json()

        let reqStorage = await fetch(this.state.storageUrl + value)
        let resStorage = await reqStorage.json()

        this.setState({
            ...this.state,
            colorList: resColor,
            storageList: resStorage,
            selected: {
                ...this.state.selected,
                colors: null,
                storage: null,
            }
        })
    }
    
    electroCategoryCallback = function (value) {
        console.log(this.state.categoryList.find(w=>w.id == value).operator)
        this.setState({
            ...this.state,
            selected:{
                ...this.state.selected,
                category: value,
                type: null,
                operator: null,
                mark: null,
                computerMark: null,
            },
            typeList: this.state.categoryList.find(w=>w.id == value).type,
            operatorsList: this.state.categoryList.find(w=>w.id == value).operator,
            markList: this.state.categoryList.find(w=>w.id == value).mark,
            computerMarkList: this.state.categoryList.find(w=>w.id == value).computerMark,
        })
    }

    isMetroCallback = function (value) {

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

    googleMapCallback = function (w) {
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

    ownerCallback = function (value) {
        this.setState({
            ...this.state,
            selected: {
                ...this.state.selected,
                owner: value.target.value != 2 ? value.target.value ? true : false : null
            }
        })
    }

    rentTypeCallback = function (value) {
        this.setState({
            ...this.state,
            selected: {
                ...this.state.selected,
                otagordaire: value.target.value ? true : false
            }
        })
    }

    sellTypeCallback = function (value) {
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

    binaCategoryCallback = function (value) {
        this.setState({
            ...this.state,
            areaUnit: this.state.categoryList.find(w => w.id == value).areaUnit,
            selected: {
                ...this.state.selected,
                category: value,
            },
            addition: {
                ...this.state.categoryList.find(w => w.id == value)
            },
            rentalAddition: this.state.rentals.find(w => w.id == this.state.categoryList.find(w => w.id == value).rentalProİd) || {}
        })
    }


    cityCallback = function (value) {
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

    regionCallback = function (value) {
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

    commonCallback = function (value, option) {
        this.setState({
            selected: {
                ...this.state.selected,
                [option.state]: value
            }
        })

    }

    textAreaCallback = function (value) {
        this.setState({
            selected: {
                ...this.state.selected,
                [value.target.name]: value.target.defaultValue
            }
        })
    }

    numberCallback = function (value) {
        this.setState({
            selected: {
                ...this.state.selected,
                [value.target.name]: +value.target.defaultValue.replace(/[^\d]/g, '') || null
            }
        })
    }

    checkboxCallback = function (e) {
        let value = e.target.checked
        this.setState({
            selected: {
                ...this.state.selected,
                [e.target.state]: value || null
            }
        })
    }

    phoneNumberCallback = function (value){
 
        let val = value.target.defaultValue;

        this.setState({
            selected: {
                ...this.state.selected,
                [value.target.name]: val.replace(/[^0-9]/g,'')
            }
        })

    }

}

export default Callbacks;