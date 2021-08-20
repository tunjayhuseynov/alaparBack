import { Currency, City, SharedDate, ImageState, Region, Village, Metro } from '@/Constructions/objects'
import * as URL from '@/Constructions/const';
import { SellType, Category, Cities, MetroWays, LandAppointment, Rent, BINA_FILTER, Rental, TargetPoints, PropertySellingType, ContractType, Repair } from './object'

interface Bina_Selection {
    category: number, //numberint
    city: number, //int
    region: number, //int
    village: number, //int
    metro: number, //int
    sellType: number, //int
    roomAmount: number, //int
    floor: number, //int
    buildingFloor: number, //int
    landAppointment: number, //int
    rentDuration: number, //int
    price: number, //int
    areaSize: number, //int
    temir: number,
    houseFloor: number, //int
    aboutInfo: string, //string
    email: string, //string
    phone: string, //string
    name: string, //string
    wp: boolean, //bool
    call: boolean, //bool
    lat: number,
    lng: number,
    hamam: number,
    eyvan: boolean,
    lift: boolean,
    hovuz: boolean,
    qaz: boolean,
    su: boolean,
    isig: boolean,
    kanalizasiya: boolean,
    owner: boolean,
    metbex: boolean,
    qab: boolean,
    paltar: boolean,
    soyuducu: boolean,
    tv: boolean,
    kondicioner: boolean,
    internet: boolean,
    telefon: boolean,
    usag: boolean,
    heyvan: boolean,
    otagordaire: boolean,
    currency: number,
    target: number,
    metroWay: number,
    metroDuration: number,
    secondAreaSize: number,
    customAdress: string,
    contract: number,
    propertySelling: number,
    nearSchool: boolean,
    nearBusstop: boolean,
    nearHospital: boolean,
    nearShop: boolean,
    nearKindigarden: boolean,
    nearMall: boolean,
    withstuffs: boolean,

    madeinHouse: boolean,
    centralHeatingSystem: boolean,
    parkingArea: boolean,
    cabelTv: boolean,
    pvcWindow: boolean,
    combi: boolean,
    garaj: boolean,

    //Filter
    minRoom: number,
    maxRoom: number,
    minApartmentFloor: number,
    maxApartmentFloor: number,
    minBuildingFloor: number,
    maxBuildingFloor: number,
    minPrice: number,
    maxPrice: number,
    minArea: number,
    maxArea: number,
    minMetroDuration: number,
    maxMetroDuration: number,
    minLandArea: number,
    maxLandArea: number,
    sharedDate: number,
    bottomfloor: boolean,
    middlefloor: boolean,
    upperfloor: boolean,

    contractList: Array<number>,
    temirList: Array<number>
    villageList: Array<number>, 
    targetList: Array<number>, 
    propertySellingTypeList: Array<number>, 
    landAppointmentList: Array<Number>, 
}

export interface Bina extends ImageState {
    url: string,
    submitUrl: string,
    selected: Bina_Selection,
    areaUnit: string,
    sellingTypeBoxVisibility: boolean,
    rentingTypeBoxVisibility: boolean,
    mapVisible: boolean,
    sellTypeList: Array<SellType>,
    categoryList: Array<Category>,
    contractList: Array<ContractType>,
    targetPointList: Array<TargetPoints>,
    subCategory: Array<object>,
    cityList: Array<Cities>,
    regionList: Array<Region>,
    villageList: Array<Village>,
    propertySellingTypes: Array<PropertySellingType>,
    metroList: Array<Metro>,
    repairList: Array<Repair>,
    metroWayList: Array<MetroWays>,
    landAppointmentList: Array<LandAppointment>,
    rentDurationList: Array<Rent>,
    currencyList: Array<Currency>,
    lat: number,
    lng: number,
    nometro: boolean,
    rentals: Array<Rental>
    addition: {
        secondArea: boolean,
        roomAmount: boolean,
        floor: boolean,
        buildingFloor: boolean,
        landAppointment: boolean,
        icare: boolean,
        belediyye: boolean,
        barter: boolean,
        houseFloor: boolean,
        eyvan: boolean,
        lift: boolean,
        metbex: boolean,
        temir: boolean,
        hovuz: boolean,
        qaz: boolean,
        su: boolean,
        isig: boolean,
        kanalizasiya: boolean,
        hamam: boolean,

        madeinHouse: boolean,
        centralHeatingSystem: boolean,
        parkingArea: boolean,
        cabelTv: boolean,
        pvcWindow: boolean,
        combi: boolean,
        kondisoner: boolean,
        garaj: boolean,
    
    },
    rentalAddition: {
        metbexM: boolean,
        qabY: boolean,
        paltarY: boolean,
        soyuducu: boolean,
        tv: boolean,
        kondicioner: boolean,
        internet: boolean,
        telefon: boolean,
        usag: boolean,
        heyvan: boolean,
        otagordaire: boolean,
        
        centralHeatingSystem: boolean,
        parkingArea: boolean,
        cabelTv: boolean,
        pvcWindow: boolean,
        combi: boolean,
        garaj: boolean,
    },
    sharedDate: Array<SharedDate>,
    extraVisible: boolean,
}

export const Bina_State = (json: BINA_FILTER, th) : Bina => {
    return {
        ...th.utility.getImageState,
        url: URL.BINA_IMAGE,
        submitUrl: URL.BINA_SUBMIT,
        selected: {
            images: null, //list<string>
            category: null, //int
            city: null, //int
            region: null, //int
            village: null, //int
            metro: null, //int
            target: null, // int
            sellType: json.sellTypes[0].id, //int
            roomAmount: null, //int
            floor: null, //int
            buildingFloor: null, //int
            landAppointment: null, //int
            rentDuration: null, //int
            price: null, //int
            areaSize: null, //int
            aboutInfo: null, //string
            email: null, //string
            phone: null, //string
            name: null, //string
            wp: null, //bool
            houseFloor: null,
            call: null, //bool
            contract: null,
            propertySelling: null,
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
            customAdress: null,
            withstuffs: null,
            
            //Filter
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

            temirList: [],
            contractList: [],
            villageList: [], 
            targetList: [], 
            propertySellingTypeList: [], 
            landAppointmentList: [], 
        },
        areaUnit: null,
        sellingTypeBoxVisibility: true,
        rentingTypeBoxVisibility: false,
        mapVisible: false,
        sellTypeList: json.sellTypes,
        categoryList: json.categories,
        contractList: json.contract,
        targetPointList: null,
        subCategory: th.utility.convertCategory2Sub(json.categories, "subname"),
        cityList: json.cities,
        regionList: null,
        villageList: null,
        metroList: null,
        repairList: json.repairs,
        propertySellingTypes: json.propertySellingTypes,
        metroWayList: json.metroWays,
        landAppointmentList: json.landAppointment,
        rentDurationList: null,
        currencyList: json.currency,
        lat: 40.409264,
        lng: 49.867092,
        nometro: false,
        rentals: json.rentals,
        addition: {
            secondArea: false,
            roomAmount: false,
            floor: false,
            buildingFloor: false,
            landAppointment: false,
            icare: false,
            belediyye: false,
            barter: true,

            eyvan: false,
            lift: false,
            metbex: false,
            temir: false,
            hovuz: false,
            qaz: false,
            su: false,
            isig: false,
            kanalizasiya: false,
            hamam: false,

            madeinHouse: false,
            centralHeatingSystem: false,
            parkingArea: false,
            cabelTv: false,
            pvcWindow: false,
            combi: false,
            kondisoner: false,
            garaj: false,
        },
        rentalAddition: {},
        extraVisible: false,
        sharedDate: json.sharedDate
    }

}