import { Currency, City, Metro, Region, SharedDate } from '@/Constructions/objects'

export interface Type {
    id: number;
    name: string;
    categoryId: number;
}

export interface Category {
    id: number;
    name: string;
    new: boolean,
    delivery: boolean,
    type: Array<Type>
}

export interface HOBBY_FORM{
    cities: Array<City>,
    category: Array<Category>,
    currency: Array<Currency>,
    sharedDate: Array<SharedDate>,
}

export const HOBBY_FILTER_CONVERTER = (json : HOBBY_FORM) => ({
    cities: json.cities,
    category: json.category,
    currency: json.currency,
    sharedDate: json.sharedDate,
})