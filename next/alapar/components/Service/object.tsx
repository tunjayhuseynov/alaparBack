
import { Currency, City, SharedDate } from '@/Constructions/objects'

export interface Type{
    id: number,
    name: string,
    categoryId: number
}

export interface Category{
    id: number,
    name: string,
    new: boolean,
    delivery: boolean,
    typeList: Array<Type>
    type: boolean,
}

export interface SERVICE_FILTER{
    category: Array<Category>,
    cities: Array<City>,
    currency: Array<Currency>,
    sharedDate: Array<SharedDate>,
}

export const SERVICE_FILTER_CONVERTER = (json : SERVICE_FILTER) => ({
    category: json.category,
    cities: json.cities,
    currency: json.currency,
    sharedDate: json.sharedDate,
})