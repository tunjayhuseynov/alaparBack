import { SellType } from '@/Bina/object'
import {Currency, City, SharedDate} from '@/Constructions/objects'

export interface BanType{
    id: number,
    name: string,
}

export interface Color{
    id: number,
    name: string,
}

export interface Fuel{
    id: number,
    name: string,
}

export interface TransmissionBox{
    id: number,
    name: string,
}

export interface Transmitter{
    id: number,
    name: string,
}

export interface Type{
    id: number,
    name: string,
    marks: Array<Mark>,
    banType: boolean;
    mileage: boolean;
    fuel: boolean;
    transmissionBox: boolean;
    transmitter: boolean;
    power: boolean;
    capacity: boolean;
    checkboxes: boolean;
    label: string,
    title: boolean;
}

export interface Model{
    id: number,
    name: string,
    markId: number,
    title: string,
}

export interface Mark{
    id: number,
    name: string,
    models: Array<Model>,
    typeId: number,
}


export interface Auto_Filter{
    banTypes: Array<BanType>;
    colors: Array<Color>;
    fuels: Array<Fuel>;
    cities: Array<City>;
    transmissionBoxs: Array<TransmissionBox>;
    transmitters: Array<Transmitter>;
    sellTypes: Array<SellType>;
    currencies: Array<Currency>;
    type: Array<Type>;
    sharedDate: Array<SharedDate>;
}

export const AUTO_FILTER_CONVERTER = (json : Auto_Filter) => ({
    banTypes: json.banTypes,
    type: json.type,
    colors: json.colors,
    fuels: json.fuels,
    transmissionBoxs: json.transmissionBoxs,
    transmitters: json.transmitters,
    sellTypes: json.sellTypes,
    cities: json.cities,
    currencies: json.currencies,
    sharedDate: json.sharedDate
})
