import { ImageView } from "@/Constructions/objects";

export interface Animal_View {
    viewed: number;
    modifiedDate: string;
    packageName: string;
    statusName: string;
    about: string;
    price: number;
    title: string;
    categoryName: string;
    generaName: string;
    typeName: string;
    currencyName: string;
    cityName: string;

    genera: boolean;
    type: boolean;
    hasDelivery: boolean;

    contactNumber: string;
    isCall: boolean;
    isWp: boolean;
    email: string;
    contactName: string;


    id: number;
    statusId: number;
    packageId: number;
    currencyId: number;
    categoryId: number;
    logId: number;
    cityId: number;
    generaId: number;
    typeId: number;
    contactId: number;

    images: Array<ImageView>
}


export const Animal_View_Data = (ad: Animal_View) => {
    return {
        idList: {
            id: {
                value: ad.id,
                name: "Id"
            },
            statusId: {
                value: ad.statusId,
                name: "StatusId"
            },
            packageId: {
                value: ad.packageId,
                name: "PackageId"
            },
            categoryId: {
                value: ad.categoryId,
                name: "CategoryId"
            },
            currencyId: {
                value: ad.currencyId,
                name: "currencyId"
            },
            cityId: {
                value: ad.cityId,
                name: "cityId"
            },
            logId: {
                value: ad.logId,
                name: "logId"
            },
            generaId: {
                value: ad.generaId,
                name: "generaId"
            },
            typeId: {
                value: ad.typeId,
                name: "typeId"
            },
            contactId: {
                value: ad.contactId,
                name: "contactId"
            }
        },
        contactInfo: {
            contactNumber: {
                value: ad.contactNumber,
                name: "Mobil Nömrə"
            },
            isCall: {
                value: ad.isCall,
                name: "Zəng ilə"
            },
            isWp: {
                value: ad.isWp,
                name: "Whatsapp ilə"
            },
            email: {
                value: ad.email,
                name: "E-Poçt"
            },
            contactName: {
                value: ad.contactName,
                name: "Ad"
            },
        },
        nameList: {
            viewed: {
                value: ad.viewed,
                name: "Baxış"
            },
            modifiedDate: {
                value: ad.modifiedDate,
                name: "Yenilənmə Tarixi"
            },
            statusName: {
                value: ad.statusName,
                name: "Status"
            },
            packageName: {
                value: ad.packageName,
                name: "Paket Növü"
            },
            about: {
                value: ad.about,
                name: "Haqqında"
            },
            price: {
                  value: ad.price,
                  name: "Qiymət"  
            },
            title: {
                value: ad.title,
                name: "Başlıq"
            },
            categoryName: {
                value: ad.categoryName,
                name: "Kateqoriya"
            },
            generaName: {
                value: ad.generaName,
                name: "Cins"
            },
            typeName: {
                value: ad.typeName,
                name: "Növ"
            },
            currencyName: {
                value: ad.currencyName,
                name: "Məzənnə"
            },
            cityName: {
                value: ad.cityName,
                name: "Şəhər"
            },
        },
        checkboxes: {
            genera: {
                value: ad.genera,
                name: "Cins"
            },
            type: {
                value: ad.type,
                name: "Növ"
            },
            hasDelivery: {
                value: ad.hasDelivery,
                name: "Çatdırılma"
            },
        }
    }
}