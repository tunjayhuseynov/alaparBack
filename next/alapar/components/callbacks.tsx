import React from "react"
import Utilities from "./utilities"
import { Child } from "./Child/state"
import { Private } from "./Private/state"
import { Service } from "./Service/state"
import { Home } from "./Home/state"
import { Animal } from "./Animal/state"
import { Hobby } from "./Hobby/state"
import { Auto } from "./Auto/state"
import { Electro } from "./Electro/state"
import { Bina } from "./Bina/state"
import { Job } from "./Job/state"

const utility = new Utilities();

class Callbacks {
    constructor(th: React.Component) {
        this.checkboxCallback = this.checkboxCallback.bind(th)   // 1
        this.numberCallback = this.numberCallback.bind(th)       // 2
        this.textAreaCallback = this.textAreaCallback.bind(th)   // 3
        this.commonCallback = this.commonCallback.bind(th)       // 4
        this.regionCallback = this.regionCallback.bind(th)       // 5
        this.cityCallback = this.cityCallback.bind(th)           // 6
        this.binaCategoryCallback = this.binaCategoryCallback.bind(th)   // 7
        this.binaSellTypeCallback = this.binaSellTypeCallback.bind(th)   // 8
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
        this.trimCallback = this.trimCallback.bind(th) // 23 
        this.commonNoOptionCallback = this.commonNoOptionCallback.bind(th) // 24 
        this.autoSellTypeCallback = this.autoSellTypeCallback.bind(th) // 25 
        this.multipleCallback = this.multipleCallback.bind(th) // 26 
        this.jobCityCallback = this.jobCityCallback.bind(th) // 27 
    }


    //Job
    jobCityCallback = function (this: React.Component<{}, Job>, value) {
        let regions = this.state.cityList?.find(w => w.id == value)?.regions;
        this.setState({
            selected: {
                ...this.state.selected,
                city: value,
                region: null,
                village: null,
                villageList: [],
            },
            regionList: regions || null,
            villageList: null,
        })
    }

    // Child || Private
    clothesGenderCallback = function (this: React.Component<{}, Child | Private>, value) {
        const cat = this.state.clothesGendersList.find((w) => w.id === value)
        this.setState({
            ...this.state,
            selected: {
                ...this.state.selected,
                clothesGender: value,
                clothesTypes: null,
                clothesColor: null,
                shoesSize: null,
                typeList: [],
                clothesTypesList: [],
                clothesColorList: [],
                clothesSizeList: [],
                shoesSizeList: [],
            },
            clothesTypesList: cat?.clothesTypes
        })
    }

    //Child || Private
    privateCategoryCallback = function (this: React.Component<{}, Child | Private>, value) {
        let cat = this.state.categoryList.find(w => w.id == value)
        this.setState({
            ...this.state,
            selected: {
                ...this.state.selected,
                category: value,
                type: null,
                clothesGender: null,
                clothesTypes: null,
                clothesColor: null,
                shoesSize: null,
                isNew: cat?.new ? this.state.selected.isNew : null,
                hasDelivery: cat?.delivery ? this.state.selected.hasDelivery : null,
                typeList: [],
                clothesTypesList: [],
                clothesColorList: [],
                clothesSizeList: [],
                shoesSizeList: [],
            },
            typeList: cat?.types,
            clothesGendersList: cat?.clothesGender,
            clothesTypesList: null,
            hasNew: cat?.new,
            hasDelivery: cat?.delivery
        })
    }

    // Home || Service
    homeCategoryCallback = function (this: React.Component<{}, Home | Service>, value) {
        let cat = this.state.categoryList.find(w => w.id == value)
        this.setState({
            ...this.state,
            selected: {
                ...this.state.selected,
                category: value,
                type: null,
                typeList: [],
                isNew: cat?.new ? this.state.selected.isNew : null,
                hasDelivery: cat?.delivery ? this.state.selected.hasDelivery : null,
            },
            typeList: cat?.typeList,
            hasNew: cat?.new,
            hasDelivery: cat?.delivery
        })
    }

    // Animal
    animalCategoryCallback = function (this: React.Component<{}, Animal>, value) {
        let cat = this.state.categoryList.find(w => w.id == value)

        this.setState({
            ...this.state,
            selected: {
                ...this.state.selected,
                category: value,
                type: null,
                genera: null,
                generaList: [],
            },
            typeList: cat?.typeList,
            generaList: cat?.generaList,
        })
    }

    // Hobby
    hobbyCategoryCallback = function (this: React.Component<{}, Hobby>, value) {
        let cat = this.state.categoryList.find(w => w.id == value)
        this.setState({
            ...this.state,
            selected: {
                ...this.state.selected,
                category: value,
                type: null,
                isNew: cat?.new ? this.state.selected.isNew : null,
                hasDelivery: cat?.delivery ? this.state.selected.hasDelivery : null,
                typeList: []
            },
            typeList: cat?.type,
            hasNew: cat?.new,
            hasDelivery: cat?.delivery
        })
    }

    // Auto
    autoMarkCallback = function (this: React.Component<{}, Auto>, value) {
        this.setState({
            ...this.state,
            selected: {
                ...this.state.selected,
                mark: value,
                model: null,
                modelList: [],
                banList: [],
                fuelList: [],
                transmissionBoxList: [],
                colorList: [],
                capacityList: [],
            },
            modelList: this.state.markList.find(w => w.id == value).models,
            modelSubList: utility.convertCategory2Sub(this.state.markList.find(w => w.id == value).models, "title")
        })
    }

    //Auto
    autoSellTypeCallback = function (this: React.Component<{}, Auto>, value) {
        const rent = this.state.sellTypeList.find(w => w.id == value.target.value)?.rent
        this.setState({
            ...this.state,
            selected: {
                ...this.state.selected,
                sellType: value.target.value,
                rentDuration: rent.length > 0 ? this.state.selected.rentDuration : null,
                kredit: rent.length > 0 ? null : this.state.selected.kredit,
                barter: rent.length > 0 ? null : this.state.selected.barter,
            },
            kredit: !(rent.length > 0),
            barter: !(rent.length > 0),
            rentDurationList: rent.length > 0 ? rent : null,
        })
    }

    // Electro
    electroMarkCallback = function (this: React.Component<{}, Electro>, value) {
        this.setState({
            ...this.state,
            selected: {
                ...this.state.selected,
                mark: value,
                model: null,
                color: null,
                storage: null,
                typeList: [],
                computerMarkList: [],
                operatorList: [],
                colorList: [],
                storageList: [],
            },
            colorList: null,
            storageList: null,
            modelList: this.state.markList.find(w => w.id == value).model
        })
    }

    // Electro
    electroModelCallback = async function (this: React.Component<{}, Electro>, value, option) {
        new Callbacks(this).commonCallback(value, option)

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
                color: null,
                storage: null,
                typeList: [],
                computerMarkList: [],
                operatorList: [],
                colorList: [],
                storageList: [],
            }
        })
    }

    // Electro
    electroCategoryCallback = function (this: React.Component<{}, Electro>, value) {
        this.setState({
            ...this.state,
            selected: {
                ...this.state.selected,
                category: value,
                type: null,
                operator: null,
                mark: null,
                computerMark: null,
                model: null,
                color: null,
                storage: null,
                typeList: [],
                computerMarkList: [],
                operatorList: [],
                colorList: [],
                storageList: [],
            },
            typeList: this.state.categoryList.find(w => w.id == value).type,
            operatorsList: this.state.categoryList.find(w => w.id == value).operator,
            markList: this.state.categoryList.find(w => w.id == value).mark,
            computerMarkList: this.state.categoryList.find(w => w.id == value).computerMark,
            modelList: null,
            colorList: null,
            storageList: null,
        })
    }

    // Bina
    binaCategoryCallback = function (this: React.Component<{}, Bina>, value) {
        this.setState({
            ...this.state,
            areaUnit: this.state.categoryList.find(w => w.id == value).areaUnit,
            selected: {
                ...this.state.selected,
                category: value,
                temirList: [],
                contractList: [],
                villageList: [],
                targetList: [],
                propertySellingTypeList: [],
                landAppointmentList: [],
            },
            addition: {
                ...this.state.categoryList.find(w => w.id == value)
            },
            rentalAddition: this.state.rentals.find(w => w.id == this.state.categoryList.find(w => w.id == value).rentalProİd)
        })
    }

    // Bina
    ownerCallback = function (this: React.Component<{}, Bina>, value) {
        this.setState({
            ...this.state,
            selected: {
                ...this.state.selected,
                owner: value.target.value != 2 ? value.target.value ? true : false : null
            }
        })
    }

    //Bina
    rentTypeCallback = function (this: React.Component<{}, Bina>, value) {
        this.setState({
            ...this.state,
            selected: {
                ...this.state.selected,
                otagordaire: value.target.value ? true : false
            }
        })
    }

    //Bina
    binaSellTypeCallback = function (this: React.Component<{}, Bina>, value) {
        let rent = this.state.sellTypeList.find(w => w.id == value.target.value).rent
        this.setState({
            ...this.state,
            selected: {
                ...this.state.selected,
                sellType: value.target.value,
                rentDuration: rent.length > 0 ? this.state.selected.rentDuration : null,
                temirList: [],
                contractList: [],
                villageList: [],
                targetList: [],
                propertySellingTypeList: [],
                landAppointmentList: [],
            },
            rentDurationList: rent.length > 0 ? rent : null,
            sellingTypeBoxVisibility: !(rent.length > 0),
            rentingTypeBoxVisibility: rent.length > 0,
            rentalAddition: this.state.rentalAddition,

        })
    }


    //Bina
    cityCallback = function (this: React.Component<{}, Bina>, value) {
        let regions = this.state.cityList?.find(w => w.id == value)?.regions;
        let metros = this.state.cityList?.find(w => w.id == value)?.metros;
        let targets = this.state.cityList?.find(w => w.id == value)?.targetPoints;
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
            villageList: null,
            targetPointList: targets
        })
    }

    // Bina
    regionCallback = function (this: React.Component<{}, Bina>, value) {
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


    isMetroCallback = function (this: React.Component<{}, Bina>, value) {
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



    commonCallback = function (value, option) {
        this.setState({
            selected: {
                ...this.state.selected,
                [option.state]: value === '' ? null : value
            }
        })

    }

    commonNoOptionCallback = function (value) {
        this.setState({
            selected: {
                ...this.state.selected,
                [value.target.name]: value.target.value === '' ? null : value.target.value
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
        const val = +value.target.defaultValue.replace(/[^\-\d]/g, '').slice(0, 14) || +value.target.value.replace(/[^\-\d]/g, '').slice(0, 14) || null;
        if (val == null) {
            this.setState({
                selected: {
                    ...this.state.selected,
                    [value.target.name]: null
                }
            })
            return
        };
        const min = +value.target.min || +value.target.ariaValueMin
        const max = +value.target.max || +value.target.ariaValueMax
        const result = Math.max(min, val) != min ? Math.min(val, max) : min;

        this.setState({
            selected: {
                ...this.state.selected,
                [value.target.name]: result
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

    phoneNumberCallback = function (value) {

        let val = value.target.defaultValue;

        this.setState({
            selected: {
                ...this.state.selected,
                [value.target.name]: val.replace(/[^0-9]/g, '')
            }
        })
    }

    trimCallback = function (value) {
        this.setState({
            selected: {
                ...this.state.selected,
                [value.target.name]: value.target.defaultValue.trim()
            }
        })
    }

    multipleCallback = function (value, option) {
        if (value == null) return
        this.setState({
            selected: {
                ...this.state.selected,
                [option.state]: this.state.selected[option.state].includes(value) ? this.state.selected[option.state].filter(r => r !== value) : [...this.state.selected[option.state], value === '' ? null : value]
            }
        })
    }

}

export default Callbacks;