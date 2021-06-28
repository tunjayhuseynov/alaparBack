import {Currency, City, SharedDate} from '@/Constructions/objects'
import { Genera, Type, Category } from './object';

interface Animal_Selection{
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
}


interface Animal{
    selected: Animal_Selection;
    categoryList: Array<Category>;
    generaList: Array<Genera>;
    typeList: Array<Type>;
    currencyList: Array<Currency>;
    cityList: Array<City>;
    sharedDate: Array<SharedDate>;
}

export const Animal_State : Animal = {
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
    },
    categoryList: null,
    generaList: null,
    typeList: null,
    currencyList: null,
    cityList: null,
    sharedDate: null
};