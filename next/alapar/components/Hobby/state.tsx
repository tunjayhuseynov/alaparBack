import { City, Currency, ImageState, SharedDate } from "@/Constructions/objects";
import { Category, HOBBY_FORM, Type } from "./object";
import * as URL from '@/Constructions/const';


interface Hobby_Selection{
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

    maxPrice: number,
    minPrice: number,

    sharedDate: number,
}

interface Hobby extends ImageState{
    url: string,
    submitUrl: string,
    selected: Hobby_Selection,
    categoryList: Array<Category>,
    typeList: Array<Type>,
    currencyList: Array<Currency>,
    cityList: Array<City>,
    hasNew: boolean,
    hasDelivery: boolean,
    sharedDate: Array<SharedDate>,
}

export const Hobby_State = (json: HOBBY_FORM, th) : Hobby => {
    return {
        ...th.utility.getImageState,
        url: URL.HOBBY_FORM,
        submitUrl: URL.HOBBY_SUBMIT,
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

            maxPrice: null,
            minPrice: null,

            sharedDate: null,
        },
        categoryList: json.category,
        typeList: null,
        currencyList: json.currency,
        cityList: json.cities,
        isNew: false,
        hasDelivery: false,
        sharedDate: json.sharedDate

    }

}