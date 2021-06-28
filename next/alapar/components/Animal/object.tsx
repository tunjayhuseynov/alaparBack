import {Currency, City, SharedDate} from '@/Constructions/objects'

export interface Genera{
    id: number,
    name: string,
    categoryId: number
}

export interface Type{
    id: number,
    name: string,
    categoryId: number
}

export interface Category{
    id: number;
    name: string;
    genera: boolean;
    type: boolean;
    generaList: Array<Genera>;
    typeList: Array<Type>;
}

interface Animal_Filter{
    category : Array<Category>;
    currency : Array<Currency>;
    cities: Array<City>;
    sharedDate: Array<SharedDate>;
}

export const ANIMAL_FILTER_CONVERTER = (json : Animal_Filter) => ({
    category: json.category, 
    currency: json.currency,
    cities: json.cities,
    sharedDate: json.sharedDate
})