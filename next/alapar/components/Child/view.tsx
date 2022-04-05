import { CommonView } from "@/Constructions/view";

export interface Child_View extends CommonView {
    name: string;
    categoryName: string;
    colorId: number;
    colorName: string;

    shoesSizeId: number;
    shoesSizeName: string;

    clothesSizeId: number;
    clothesSizeName: string;

    cityName: string;

    categoryId: number;
    currencyName: string;
    typeName: string;
    clothesTypeName: string;
    contactName: string;
    email: string;
    isWp: boolean;
    isCall: boolean;
    contactNumber: string;
    clothesGenderName: string;
    about: string;
    price: number;
    title: string;
    hasDelivery: boolean;
    isNew: boolean;

    currencyId: number;
    cityId: number;
    contactId: number;
    clothesGenderId: number;
    clothesTypeId: number;
    typeId: number;
}