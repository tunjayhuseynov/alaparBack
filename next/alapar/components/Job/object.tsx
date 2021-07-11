import { Currency, City, Metro, Region, SharedDate } from '@/Constructions/objects'


export interface Type {
    id: number,
    name: string,
    categoryId: boolean,
    educationId: boolean,
    practiceId: boolean,
    cityId: boolean,
    role: boolean,
    minWage: boolean,
    maxWage: boolean,
    minAge: boolean,
    maxAge: boolean,
    aboutReq: boolean,
    aboutJob: boolean,
    companyName: boolean,
    contactName: boolean,
    employeeName: boolean,
    employeeSurname: boolean,
    employeeFatherName: boolean,
    employeeIsGirl: boolean,
    employeeAboutEducation: boolean,
    employeeAboutPractic: boolean,
    employeeSkills: boolean,
    employeeAboutExtra: boolean,
}

export interface Category {
    id: number,
    name: string,
    title: string,
}

export interface Education {
    id: number,
    name: string,
}

export interface Practice {
    id: number,
    name: string,
}

export interface JOB_FILTER {
    types: Array<Type>,
    categories: Array<Category>,
    educations: Array<Education>,
    practices: Array<Practice>,
    cities: Array<City>,
    sharedDate: Array<SharedDate>,
}

export const JOB_FILTER_CONVERTER = (json : JOB_FILTER) => ({
    types: json.types,
    categories: json.categories,
    educations: json.educations,
    practices: json.practices,
    cities: json.cities,
    sharedDate: json.sharedDate,
})