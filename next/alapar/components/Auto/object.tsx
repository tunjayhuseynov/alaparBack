import {Currency, City, SharedDate} from '@/Layouts/objects'

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

export interface Model{
    id: number,
    name: string,
    markId: number,
    title: string,
}

export interface Mark{
    id: number,
    name: string,
    models: Array<Model>
}


interface Auto_Filter{
    banTypes: Array<BanType>;
    colors: Array<Color>;
    fuels: Array<Fuel>;
    cities: Array<City>;
    transmissionBoxs: Array<TransmissionBox>;
    transmitters: Array<Transmitter>;
    currencies: Array<Currency>;
    mark: Array<Mark>;
    sharedDate: Array<SharedDate>;
}

export const AUTO_FILTER_CONVERTER = (json : Auto_Filter) => ({
    banTypes: json.banTypes,
    colors: json.colors,
    fuels: json.fuels,
    transmissionBoxs: json.transmissionBoxs,
    transmitters: json.transmitters,
    cities: json.cities,
    mark: json.mark,
    currencies: json.currencies,
    sharedDate: json.sharedDate
})