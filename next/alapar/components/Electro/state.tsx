import { Currency, City, SharedDate, ImageState, Region, Village, Metro } from '@/Constructions/objects'
import { Category, Color, ComputerMark, ELECTRO_FORM, Mark, Model, Operator, Storage, Type } from './object';
import * as URL from '@/Constructions/const';


interface Electro_Selection {
    category: number,
    type: number,
    title: string,
    isNew: boolean,
    hasDelivery: boolean,
    price: number,
    currency: number,
    about: string,
    operator: string,
    inputPhoneNumber: string,
    mark: number,
    model: number,
    color: number,
    storage: number,
    computerMark: number,
    //Contact
    city: number,
    name: string,
    email: string,
    phone: string,
    isWp: boolean,
    isCall: boolean,

    minPrice: number,
    maxPrice: number,
    sharedDate: number,
}

export interface Electro extends ImageState{
    url: string,
    submitUrl: string,
    colorUrl: string,
    storageUrl: string,
    selected: Electro_Selection,
    cityList: Array<City>,
    categoryList: Array<Category>,
    typeList: Array<Type>,
    currencyList: Array<Currency>,
    operatorsList: Array<Operator>,
    markList: Array<Mark>,
    modelList: Array<Model>,
    computerMarkList: Array<ComputerMark>,
    colorList: Array<Color>,
    storageList: Array<Storage>,
    type: boolean,
    mark: boolean,
    computerMark: boolean,
    operator: boolean,
    colorLoading: boolean,
    storageLoading: boolean,
    sharedDate: Array<SharedDate>,
}

export const Electro_State = (json: ELECTRO_FORM, th) : Electro => {
    return {
        ...th.utility.getImageState,
        url: URL.ELECTRO_IMAGE,
        submitUrl: URL.ELECTRO_SUBMIT,
        colorUrl: URL.ELECTRO_COLOR,
        storageUrl: URL.ELECTRO_STORAGE,
        selected: {
            category: null,
            type: null,
            title: null,
            isNew: null,
            hasDelivery: null,
            price: null,
            currency: 1,
            about: null,
            operator: null,
            inputPhoneNumber: null,
            mark: null,
            model: null,
            color: null,
            storage: null,
            computerMark: null,
            //Contact
            city: null,
            name: null,
            email: null,
            phone: null,
            isWp: null,
            isCall: null,

            minPrice: null,
            maxPrice: null,
            sharedDate: null,
        },
        cityList: json.cities,
        categoryList: json.categories,
        typeList: null,
        currencyList: json.currencies,
        operatorsList: [],
        markList: null,
        modelList: null,
        copmuterMarkList: null,
        colorList: null,
        storageList: null,
        type: false,
        mark: false,
        computerMark: false,
        operator: false,
        colorLoading: true,
        storageLoading: true,
        sharedDate: json.sharedDate
    }

}