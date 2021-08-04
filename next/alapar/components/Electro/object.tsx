import { Currency, City, Metro, Region, SharedDate } from '@/Constructions/objects'

export interface Model {
    id: number,
    name: string,
    markId: number,
}

export interface Mark {
    id: number,
    name: string
    model: Array<Model>
}

export interface Operator {
    id: number,
    name: string,
    categoryId: number
}

export interface ComputerMark {
    id: number,
    name: string,
    categoryId: number
}

export interface Type {
    id: number,
    name: string,
    categoryId: number,
}


export interface Color{
    id: number,
    name: string,
    modelId: number
}

export interface Storage{
    id: number,
    name: string,
    modelId: number
}

export interface Category {
    id: number,
    name: string,
    activateComputerMark: boolean,
    activateOperator: boolean,
    activatePhoneMark: boolean,
    activateType: boolean,
    type: Array<Type>,
    mark: Array<Mark>,
    operator: Array<Operator>,
    computerMark: Array<ComputerMark>
}

export interface ELECTRO_FORM{
    cities: Array<City>,
    categories: Array<Category>,
    currencies: Array<Currency>,
    sharedDate: Array<SharedDate>,
}

export const ELECTRO_FILTER_CONVERTER = (json : ELECTRO_FORM) => ({
    cities: json.cities,
    categories: json.categories,
    currencies: json.currencies,
    sharedDate: json.sharedDate,
})