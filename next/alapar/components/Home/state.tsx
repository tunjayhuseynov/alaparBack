import { Currency, City, SharedDate, ImageState, Region, Village, Metro } from '@/Constructions/objects'
import { Category, HOME_FILTER, Type } from './object';
import * as URL from '@/Constructions/const';

interface Home_Selection{
    category: number,
    type: number,
    isNew: boolean,
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

    sharedDate: number,

    minPrice: number,
    maxPrice: number,

    typeList: Array<number>
}

export interface Home extends ImageState{
    url: string,
    submitUrl: string,
    selected: Home_Selection,
    categoryList: Array<Category>,
    typeList: Array<Type>,
    hasNew: boolean,
    currencyList: Array<Currency>,
    cityList: Array<City>,
    sharedDate: Array<SharedDate>,
}

export const Home_State = (json: HOME_FILTER, th) : Home => {
    return {
        ...th.utility.getImageState,
        url: URL.HOME_IMAGE,
        submitUrl: URL.HOME_SUBMIT,
        selected: {
            category: null,
            type: null,
            isNew: null,
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

            sharedDate: null,

            typeList: []
        },
        categoryList: json.category,
        typeList: null,
        hasNew: null,
        currencyList: json.currency,
        cityList: json.cities,
        sharedDate: json.sharedDate
    }

}
