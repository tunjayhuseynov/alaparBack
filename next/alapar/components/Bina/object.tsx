import { Currency, City, Metro, Region, SharedDate } from '@/Constructions/objects'

export interface Category {
    id: number,
    name: string,
    buildingFloor: boolean,
    roomAmount: boolean,
    floor: boolean,
    landAppointment: boolean,
    icare: boolean,
    belediyye: boolean,
    hamam: boolean,
    eyvan: boolean,
    lift: boolean,
    metbex: boolean,
    temir: boolean,
    hovuz: boolean,
    qaz: boolean,
    su: boolean,
    isig: boolean,
    kanalizasiya: boolean,
    barter: boolean,
    rentalProİd: number,
    areaUnit: string,
    subname: string,
    secondArea: boolean,
    houseFloor: boolean,
    
    madeinHouse: boolean,
    centralHeatingSystem: boolean,
    parkingArea: boolean,
    cabelTv: boolean,
    pvcWindow: boolean,
    combi: boolean,
    kondisoner: boolean,
    garaj: boolean,
}

export interface TargetPoints{
    id: number,
    name: string,
    cityId: number,
}

export interface LandAppointment {
    id: number,
    name: string
}

export interface ContractType {
    id: number,
    name: string,
}

export interface Cities extends City {
    metros: Array<Metro>,
    regions: Array<Region>,
    targetPoints: Array<TargetPoints>
}

export interface SellType {
    id: number,
    name: string,
    filtername: string,
    rent: Array<Rent>
}

export interface Rent {
    id: number,
    name: string
    rentId: number
}

export interface PropertySellingType{
    id: number,
    name: string,
}

export interface Rental {
    id: number,
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

    madeinHouse: boolean,
    centralHeatingSystem: boolean,
    parkingArea: boolean,
    cabelTv: boolean,
    pvcWindow: boolean,
    combi: boolean,
    garaj: boolean,
}

export interface MetroWays {
    id: number,
    name: string
}

export interface Repair{
    id: number,
    name: string
}

export interface BINA_FILTER {
    categories: Array<Category>,
    landAppointment: Array<LandAppointment>,
    cities: Array<Cities>,
    sellTypes: Array<SellType>,
    currency: Array<Currency>,
    rentals: Array<Rental>,
    propertySellingTypes: Array<PropertySellingType>,
    contract: Array<ContractType>,
    repairs: Array<Repair>,
    metroWays: Array<MetroWays>,
    sharedDate: Array<SharedDate>,
}

export const BINA_FILTER_CONVERTER = (json : BINA_FILTER) => ({
    rentals: json.rentals,
    categories: json.categories,
    metroWays: json.metroWays,
    currency: json.currency,
    contract: json.contract,
    propertySellingTypes: json.propertySellingTypes,
    cities: json.cities,
    repairs: json.repairs,
    sellTypes: json.sellTypes,
    landAppointment: json.landAppointment,
    sharedDate: json.sharedDate,
})