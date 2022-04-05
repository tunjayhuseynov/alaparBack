import { CommonView } from "@/Constructions/view";

export interface Private_View extends CommonView {
    categoryName: string;
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

    colorId: number;
    colorName: string;
    shoesSizeId: number;
    shoesSizeName: string;
    clothesSizeId: number;
    clothesSizeName: string;
    about: string;
    price: number;
    title: string;
    hasDelivery: boolean;
    isNew: boolean;

    currencyId: number;
    cityId: number;
    contactId: number;
    typeId: number;
    clothesTypeId: number;
    clothesGenderId: number;
}