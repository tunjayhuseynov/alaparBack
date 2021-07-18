import { City, Currency, ImageState, SharedDate } from "@/Constructions/objects";
import { Category,  SERVICE_FILTER, Type } from "./object";
import * as URL from '@/Constructions/const';

export interface Service_Selection{
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

    sharedDate: number
}

export interface Service extends ImageState{
    url: string,
    submitUrl: string,
    selected: Service_Selection,
    categoryList: Array<Category>,
    typeList: Array<Type>,
    hasNew: boolean,
    hasDelivery: boolean,
    currencyList: Array<Currency>,
    cityList: Array<City>,
    sharedDate: Array<SharedDate>,
}

export const Service_State = (json: SERVICE_FILTER, th) : Service => {
    return {
        ...th.utility.getImageState,
        url: URL.SERVICE_IMAGE,
        submitUrl: URL.SERVICE_SUBMIT,
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
        },
        categoryList: json.category,
        typeList: null,
        isNew: null,
        hasDelivery: null,
        currencyList: json.currency,
        cityList: json.cities,
        sharedDate: json.sharedDate
    }

}