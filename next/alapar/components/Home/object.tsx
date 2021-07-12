import { Currency, City, Metro, Region, SharedDate } from '@/Constructions/objects'

export interface Type{
    id: number,
    name: string,
    categoryId: number,

}

export interface Category{
    id: number,
    name: string,
    new: boolean,
    type: boolean,
    delivery: boolean,
    typeList: Array<Type>
}

export interface HOME_FILTER{
    category: Array<Category>,
    cities: Array<City>,
    currency: Array<Currency>,
    sharedDate: Array<SharedDate>,
}

export const HOME_FILTER_CONVERTER = (json : HOME_FILTER) => ({
    category: json.category,
    cities: json.cities,
    currency: json.currency,
    sharedDate: json.sharedDate,
})