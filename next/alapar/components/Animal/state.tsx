import { Currency, City, SharedDate, ImageState } from '@/Constructions/objects'
import { Genera, Type, Category, Animal_Filter } from './object';
import * as URL from '@/Constructions/const';

interface Animal_Selection {
    category: number,
    type: number,
    genera: number,
    hasDelivery: boolean,
    title: string,
    price: number,
    currency: number,
    aboutInfo: string,
    city: number,
    name: string,
    email: string,
    phone: string,
    isWp: boolean,
    isCall: boolean,

    
    maxPrice: number,
    minPrice: number,
    sharedDate: number,

    generaList: Array<number>
}


export interface Animal extends ImageState{
    url: string,
    submitUrl: string,
    selected: Animal_Selection;
    categoryList: Array<Category>;
    generaList: Array<Genera>;
    typeList: Array<Type>;
    currencyList: Array<Currency>;
    cityList: Array<City>;
    sharedDate: Array<SharedDate>;
}

export const Animal_State = (json : Animal_Filter, th) : Animal => {

    return {
        ...th.utility.getImageState,
        url: URL.ANIMAL_IMAGE,
        submitUrl: URL.ANIMAL_SUBMIT,
        selected: {
            category: null,
            type: null,
            genera: null,
            hasDelivery: null,
            title: null,
            price: null,
            currency: 1,
            aboutInfo: null,
            city: null,

            name: null,
            email: null,
            phone: null,
            isWp: null,
            isCall: null,
            
            maxPrice: null,
            minPrice: null,
            sharedDate: null,

            generaList: []
        },
        categoryList: json.category,
        generaList: null,
        typeList: null,
        currencyList: json.currency,
        cityList: json.cities,
        sharedDate: json.sharedDate
    }
};