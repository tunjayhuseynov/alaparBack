import { City, ClothesColor, ClothesSize, Currency, ImageState, SharedDate, ShoeSize } from "@/Constructions/objects";
import { Category, ClothesGender, ClothesType, CHILD_FILTER, Type } from "./object";
import * as URL from '@/Constructions/const';

export interface Child_Selection{
    category: number,
    clothesGender: number,
    clothesTypes: number,
    clothesColor: number,
    shoesSize: number,
    clothesSize: number,
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

    minPrice: number,
    maxPrice: number,

    sharedDate: number,

    typeList: Array<number>
    clothesTypesList: Array<number>
    clothesColorList: Array<number>
    clothesSizeList: Array<number>
    shoesSizeList: Array<number>
}

export interface Child extends ImageState{
    url: string,
    submitUrl: string,
    selected: Child_Selection,
    categoryList: Array<Category>,
    clothesGendersList: Array<ClothesGender>,
    clothesTypesList: Array<ClothesType>,
    clothesColors: Array<ClothesColor>,
    shoesSizesList: Array<ShoeSize>
    clothesSizesList: Array<ClothesSize>
    typeList: Array<Type>,
    hasNew: boolean,
    hasDelivery: boolean,
    currencyList: Array<Currency>,
    cityList: Array<City>,
    sharedDate: Array<SharedDate>,
}

export const Child_State = (json: CHILD_FILTER, th) : Child => {
    return {
        ...th.utility.getImageState,
        url: URL.CHILD_IMAGE,
        submitUrl: URL.CHILD_SUBMIT,
        selected: {
            category: null,
            clothesGender: null,
            clothesTypes: null,
            clothesColor: null,
            shoesSize: null,
            clothesSize: null,
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

            typeList: [],
            clothesTypesList: [],
            clothesColorList: [],
            clothesSizeList: [],
            shoesSizeList: [],
        },
        categoryList: json.category,
        clothesGendersList: null,
        clothesTypesList: null,
        shoesSizesList: json.shoesSizes,
        clothesSizesList: json.clothesSizes,
        clothesColors: json.colors,
        typeList: null,
        hasNew: null,
        hasDelivery: null,
        currencyList: json.currency,
        cityList: json.cities,
        sharedDate: json.sharedDate
    }

}