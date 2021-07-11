import { Currency, City, SharedDate, ImageState, Region, Village, Metro } from '@/Constructions/objects'
import { Category, Education, JOB_FILTER, Practice, Type } from './object';
import * as URL from '@/Constructions/const';

interface Job_Selection {
    type: number,
    educationLevel: number,
    gender: number,
    category: number,
    employeeName: string,
    employeeSurname: string,
    employeeEducation: string,
    practiceDuration: number,
    employeePractice: string,
    role: string,
    minAge: number,
    maxAge: number,
    city: number,
    minWage: number,
    maxWage: number,
    employeeAboutExtra: string,
    employeeSkills: string,
    contactName: string,
    companyName: string,
    aboutReq: string,
    aboutJob: string,
    phone1: string,
    phone2: string,
    phone3: string,
    phone4: string,
    isWp: boolean,
    email: string,

    minAgeFilter: number,
    maxAgeFilter: number,
    minWageFilter: number,
    maxWageFilter: number,

    sharedDate: number
}

export interface Job extends ImageState{
    url: string,
    submitUrl: string,
    selected: Job_Selection,
    types: Array<Type>,
    category: Array<Category>,
    subcategory: Array<object>,
    practices: Array<Practice>,
    cityList: Array<City>,
    educationList: Array<Education>,
    gender: Array<object>,
    sharedDate: Array<SharedDate>,
}

export const Job_State = (json: JOB_FILTER, th) : Job => {
    return {
        ...th.utility.getImageState,
        url: URL.JOB_IMAGE,
        submitUrl: URL.JOB_SUBMIT,
        selected: {
            type: 1,
            educationLevel: null,
            gender: null,
            category: null,
            employeeName: null,
            employeeSurname: null,
            employeeEducation: null,
            practiceDuration: null,
            employeePractice: null,
            role: null,
            minAge: null,
            maxAge: null,
            city: null,
            minWage: null,
            maxWage: null,
            employeeAboutExtra: null,
            employeeSkills: null,
            contactName: null,
            companyName: null,
            aboutReq: null,
            aboutJob: null,
            phone1: null,
            phone2: null,
            phone3: null,
            phone4: null,
            isWp: null,
            email: null,

            sharedDate: null,
        },
        types: json.types,
        category: json.categories,
        subcategory: th.utility.convertCategory2Sub(json.categories, "title"),
        practices: json.practices,
        cityList: json.cities,
        educationList: json.educations,
        gender: [{ id: 0, name: "Kişi" }, { id: 1, name: "Qadın" }],
        sharedDate: json.sharedDate
    }
}