
import { Currency, City, SharedDate } from '@/Constructions/objects'

export interface ClothesType{
    id: number,
    name: string,
    clothesGenderId: number
}

export interface ClothesGender{
    id: number,
    name: string,
    clothesType: Array<ClothesType>
}

export interface Type{
    id: number,
    name: string,
    categoryId: number
}

export interface Category{
    id: number,
    name: string,
    new: boolean,
    delivery: boolean
}

export interface PRIVATE_FILTER{
    category: Array<Category>,
    cities: Array<City>,
    currency: Array<Currency>,
    sharedDate: Array<SharedDate>,
}

export const PRIVATE_FILTER_CONVERTER = (json : PRIVATE_FILTER) => ({
    category: json.category,
    cities: json.cities,
    currency: json.currency,
    sharedDate: json.sharedDate,
})