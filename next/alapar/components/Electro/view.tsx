import { CommonView } from "@/Constructions/view";

export interface Electro_View extends CommonView {
    categoryId: number;
    contactId: number;
    typeId: number;
    title: string;
    isNew: boolean;
    hasDelivery : boolean;
    price: number;
    currencyId: number;
    about: string;
    operatorId: number;
    operatorPhoneNumber: string;
    phoneMarkId: number;
    phoneModelId: number;
    computerMarkId: number;
    colorId: number;
    storageId: number;

    guarantee: boolean;
    credit: boolean;

    computerMark: string;
    operator: string;
    category: string;
    phoneModel: string;
    phoneColor: string;
    phoneMark: string;
    phoneStorage: string;
    phoneType: string;
    currency: string;
    cityName: string;
    name: string;
    email
    phoneNumber: string;
    isWp: boolean;
    isCall: boolean;

    cityId: number;
}