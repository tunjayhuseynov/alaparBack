import { CommonView } from "@/Constructions/view";

export interface Home_View extends CommonView {
    title: string;
    hasDelivery: boolean;
    isNew: boolean;
    price: number;
    about: string;
    categoryName: string;
    contactNumber: string;
    isCall: boolean;
    isWp: boolean;
    email: string
    contactName: string;
    cityName: string;
    currencyName: string;
    typeName: string;
    categoryId: number;
    currencyId: number;
    cityId: number;
    contactId: number;
    typeId: number;
}