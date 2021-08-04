
import { Currency, City, SharedDate, ClothesColor, ShoeSize, ClothesSize } from '@/Constructions/objects'

export interface ClothesType{
    id: number,
    name: string,
    clothesGenderId: number
    clothesColor: boolean,
    shoesSize: boolean,
    clothesSize: boolean,
}

export interface ClothesGender{
    id: number,
    name: string,
    clothesTypes: Array<ClothesType>
}

export interface Type{
    id: number,
    name: string,
    categoryId: number
}

export interface Category{
    id: number,
    name: string,
    new: boolean,
    delivery: boolean,
    clothesGender: Array<ClothesGender>,
    types: Array<Type>
}

export interface CHILD_FILTER{
    category: Array<Category>,
    colors: Array<ClothesColor>,
    cities: Array<City>,
    shoesSizes: Array<ShoeSize>,
    clothesSizes: Array<ClothesSize>,
    currency: Array<Currency>,
    sharedDate: Array<SharedDate>,
}

export const CHILD_FILTER_CONVERTER = (json : CHILD_FILTER) => ({
    category: json.category,
    cities: json.cities,
    colors: json.colors,
    shoesSizes: json.shoesSizes,
    clothesSizes: json.clothesSizes,
    currency: json.currency,
    sharedDate: json.sharedDate,
})