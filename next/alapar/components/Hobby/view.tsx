import { CommonView } from "@/Constructions/view";

export interface Hobby_View extends CommonView {
    categoryId: number;
    typeId: number;
    title: string;
    cityId: number;
    price: number;
    currencyId: number;
    about: string;
    isNew: boolean;
    hasDelivery: boolean;
    packageName: string;
    currencyName: string;
    contactNumber: number;
    isCall: boolean;
    isWp: boolean;
    email: string;
    contactName: string;
    categoryName: string;
    typeName: string;
    cityName: string;
    statusName: string;
    contactId: number;

}