import { CommonView } from "@/Constructions/view";

export interface Job_View extends CommonView {
    TypeId : number;
    CategoryId : number;
    ContactId : number;
    EducationId : number;
    PracticeId : number;
    CityId : number;
    Role : string;
    MinWage : number;
    MaxWage : number;
    MinAge : number;
    MaxAge : number;
    AboutReq : string;
    AboutJob : string;
    CompanyName : string;
    ContactName : string;
    EmployeeName : string;
    EmployeeSurname : string;
    EmployeeFatherName : string;
    EmployeeIsGirl : boolean;
    EmployeeAboutEducation : string;
    EmployeeAboutPractic : string;
    EmployeeSkills : string;
    EmployeeAboutExtra : string;

    CategoryName : string;
    EducationName : string;
    CityName : string;
    VillageName : string;
    RegionName : string;

    IsWp : boolean;
    PhoneNumber1 : string;
    PhoneNumber2 : string;
    PhoneNumber3 : string;
    PhoneNumber4 : string;
    Email : string;
}