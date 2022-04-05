import { CommonView } from "@/Constructions/view";

export interface Private_View extends CommonView {
    about: string;
    categoryId: number;
    title: string;
    isNew: boolean;
    hasDelivery: boolean;
    price: number;
    serviceTypeName: string;
    contactNumber: string;
    isCall: boolean;
    isWp: boolean;
    email: string;
    contactName: string;
    categoryName: string;
    currencyName: string;
    cityName: string;

    currencyId: number;
    cityId: number;
    contactId: number;
    typeId: number;

    lableName: string;
}