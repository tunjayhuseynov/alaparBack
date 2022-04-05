import { CommonView } from "@/Constructions/view";

export interface Bina_View extends CommonView{
    categoryId: number,
    cityId: number,
    contactId: number,
    regionId: number,
    villageId: number,
    metroId: number,
    sellTypeId: number,
    rentPaymentTypeId: number,
    currencyId: number,
    metroWayId: number,
    propertySellingTypeId: number,
    contractTypeId: number,
    landAppointmentId: number,
    targetPointId: number,
    adress: string,
    customAdress: string,
    email: string,
    personName: string,
    about: string,
    repairId: number,
    repairName: string,
    houseFloor: number,
    landAppointmentName: string,
    targetName: string,
    propertySellingName: string,
    contractName: string,
    categoryName: string,
    cityName: string,
    regionName: string,
    villageName: string,
    metroName: string,
    sellTypeName: string,
    currencyName: string,
    metroWayName: string,
    contactNumber: string,
    areaUnit: string,
    price: number,
    areaSize: number,
    metroDuration: number,
    secondAreaSize: number,
    roomAmount: number,
    buildingFloor: number,
    floor: number,
    hamam: number,
    eyvan: boolean,
    lift: boolean,
    mebel: boolean,
    hovuz: boolean,
    qaz: boolean,
    su: boolean,
    isig: boolean,
    kanalizasiya: boolean,
    metbexM: boolean,
    qabY: boolean,
    paltarY: boolean,
    soyuducu: boolean,
    tv: boolean,
    kondicioner: boolean,
    internet: boolean,
    telefon: boolean,
    usag: boolean,
    heyvan: boolean,
    otagordaire: boolean,
    isCall: boolean,
    isWp: boolean,
    owner: boolean,
    nearHospital: boolean,
    nearSchool: boolean,
    nearShop: boolean,
    nearKindigarden: boolean,
    nearMall: boolean,
    nearBusstop: boolean,
    longitude: number,
    latitude: number,
    discount: number,

    withstuffs: boolean,
    madeinHouse: boolean,
    centralHeatingSystem: boolean,
    parkingArea: boolean,
    cabelTv: boolean,
    pvcWindow: boolean,
    combi: boolean,
    garaj: boolean,

    userId: number,

}

export const Bina_View_Data = (ad: Bina_View) => {
    return {
        idlist: {
            id: {
                value: ad.id,
                name: "Id"
            },
            statusId: {
                value: ad.statusId,
                name: "Status"
            },
            packageId: {
                value: ad.packageId,
                name: "Paket Növü"
            },
            categoryId: {
                value: ad.categoryId,
                name: "Kateqoriya"
            },
            cityId: {
                value: ad.cityId,
                name: "Şəhər"
            },
            logId: {
                value: ad.logId,
                name: "Log Id"
            },
            contactId: {
                value: ad.contactId,
                name: "Kontakt Id"
            },
            regionId: {
                value: ad.regionId,
                name: "Rayon Id"
            },
            villageId: {
                value: ad.villageId,
                name: "Qəsəbə Id"
            },
            metroId: {
                value: ad.metroId,
                name: "Metro Id"
            },
            sellTypeId: {
                value: ad.sellTypeId,
                name: "Satış Tipi Id"
            },
            rentPaymentTypeId: {
                value: ad.rentPaymentTypeId,
                name: ""
            },
            currencyId: {
                value: ad.currencyId,
                name: ""
            },
            metroWayId: {
                value: ad.metroWayId,
                name: ""
            },
            propertySellingTypeId: {
                value: ad.propertySellingTypeId,
                name: ""
            },
            contractTypeId: {
                value: ad.contractTypeId,
                name: ""
            },
            landAppointmentId: {
                value: ad.landAppointmentId,
                name: ""
            },
            targetPointId: {
                value: ad.targetPointId,
                name: ""
            },
            repairId: {
                value: ad.repairId,
                name: ""
            },
        },
        nameList: {
            discount: {
                value: ad.discount,
                name: "Endirim"
            },
            modifiedDate: {
                value: ad.modifiedDate,
                name: "Yenilənmə Tarixi"
            },
            viewed: {
                value: ad.viewed,
                name: "Baxış"
            },
            adress: {
                value: ad.adress,
                name: "Adress"
            },
            customAdress: {
                value: ad.customAdress,
                name: "Adress"
            },
            about: {
                value: ad.about,
                name: "Ətraflı Məlumat"
            },
            repairName: {
                value: ad.repairName,
                name: "Təmir Vəziyyəti"
            },
            houseFloor: {
                value: ad.houseFloor,
                name: "Evin Mərtəbə Sayı"
            },
            landAppointmentName: {
                value: ad.landAppointmentName,
                name: "Torpaq Təyinatı"
            },
            targetName: {
                value: ad.targetName,
                name: "Nişangah"
            },
            propertySellingName: {
                value: ad.propertySellingName,
                name: "Satış Növü"
            },
            contractName: {
                value: ad.contractName,
                name: "Sənəd Növü"
            },
            categoryName: {
                value: ad.categoryName,
                name: "Kateqoriya"
            },
            packageName: {
                value: ad.packageName,
                name: "Paket Növü"
            },
            cityName: {
                value: ad.cityName,
                name: "Şəhər"
            },
            regionName: {
                value: ad.regionName,
                name: "Rayon"
            },
            villageName: {
                value: ad.villageName,
                name: "Qəsəbə"
            },
            metroName: {
                value: ad.metroName,
                name: "Metro"
            },
            sellTypeName: {
                value: ad.sellTypeName,
                name: "Satış Tipi"
            },
            currencyName: {
                value: ad.currencyName,
                name: "Məzənnə"
            },
            statusName: {
                value: ad.statusName,
                name: "Status"
            },
            metroWayName: {
                value: ad.metroWayName,
                name: "Metroya getmək üçün vəsait"
            },
            areaUnit: {
                value: ad.areaUnit,
                name: "Sahə Ölçüsü"
            },
            price: {
                value: ad.price,
                name: "Qiymət"
            },
            areaSize: {
                value: ad.areaSize,
                name: "Sahəsi"
            },
            metroDuration: {
                value: ad.metroDuration,
                name: "Metroya olan dəqiqə müddəti"
            },
            secondAreaSize: {
                value: ad.secondAreaSize,
                name: "Evin Sahəsi"
            },
            roomAmount: {
                value: ad.roomAmount,
                name: "Otaq Sayı"
            },
            buildingFloor: {
                value: ad.buildingFloor,
                name: "Binanın mərtəbə sayı"
            },
            floor: {
                value: ad.floor,
                name: "Yerləşdiyi Mərtəbə"
            },
            hamam: {
                value: ad.hamam,
                name: "Hamam Sayı"
            },
        },
        checkboxes: {
            withstuffs: {
                value: ad.withstuffs,
                name: "Əşyalı"
            },
            madeinHouse: {
                value: ad.madeinHouse,
                name: "Düzəlmə"
            },
            centralHeatingSystem: {
                value: ad.centralHeatingSystem,
                name: "Mərkəzi İsitmə Sistemi"
            },
            parkingArea: {
                value: ad.parkingArea,
                name: "Avtodayanacaq"
            },
            cabelTv: {
                value: ad.cabelTv,
                name: "Kabel TV"
            },
            pvcWindow: {
                value: ad.pvcWindow,
                name: "PVC Pəncərə"
            },
            combi: {
                value: ad.combi,
                name: "Kombi Sistemi"
            },
            garaj: {
                value: ad.garaj,
                name: "Garaj"
            },
            eyvan: {
                value: ad.eyvan,
                name: "Eyvan"
            },
            lift: {
                value: ad.lift,
                name: "Lift"
            },
            mebel: {
                value: ad.mebel,
                name: "Mebel"
            },
            hovuz: {
                value: ad.hovuz,
                name: "Hovuz"
            },
            qaz: {
                value: ad.qaz,
                name: "Qaz"
            },
            su: {
                value: ad.su,
                name: "Su"
            },
            isig: {
                value: ad.isig,
                name: "İşıq"
            },
            kanalizasiya: {
                value: ad.kanalizasiya,
                name: "Kanalizasiya"
            },
        },
        contactInfo: {
            email: {
                value: ad.email,
                name: "E-poçt"
            },
            personName: {
                value: ad.personName,
                name: "Şəxsin Adı"
            },
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
            owner: {
                value: ad.owner,
                name: "Sahib"
            },
        },
        rent: {
            metbexM: {
                value: ad.metbexM,
                name: "Mətbəx Mebeli"
            },
            qabY: {
                value: ad.qabY,
                name: "Qabyuyan"
            },
            paltarY: {
                value: ad.paltarY,
                name: "Paltaryuyan"
            },
            soyuducu: {
                value: ad.soyuducu,
                name: "Soyuducu"
            },
            tv: {
                value: ad.tv,
                name: "Tv"
            },
            kondicioner: {
                value: ad.kondicioner,
                name: "Kondisaner"
            },
            internet: {
                value: ad.internet,
                name: "İnternet"
            },
            telefon: {
                value: ad.telefon,
                name: "Telefon"
            },
            usag: {
                value: ad.usag,
                name: "UşaqlI"
            },
            heyvan: {
                value: ad.heyvan,
                name: "Heyvan"
            },
        },
        otagordaire: {
            value: ad.otagordaire,
            name: "Kirayə Tipi"
        },
        nearLocations: {
            nearHospital: {
                value: ad.nearHospital,
                name: "Xəstəxana"
            },
            nearSchool: {
                value: ad.nearSchool,
                name: "Məktəb"
            },
            nearShop: {
                value: ad.nearShop,
                name: "Market"
            },
            nearKindigarden: {
                value: ad.nearKindigarden,
                name: "Bağça"
            },
            nearMall: {
                value: ad.nearMall,
                name: "Ticarət Mərkəzi"
            },
            nearBusstop: {
                value: ad.nearBusstop,
                name: "Avtobus Dayanacağı"
            },
        },
        longitude: {
            value: ad.longitude,
            name: ""
        },
        latitude: {
            value: ad.latitude,
            name: ""
        },
    }
}