import { ImageView } from "@/Constructions/objects";

export interface Auto_View {
    id: number,
    modifiedDate: string,
    viewed: number,
    title: string,
    statusId: number,
    packageId: number,
    categoryId: number,
    mark: string,
    modelId: number,
    model: string,
    modelTitle: string,
    banTypeId: number,
    banType: string,
    currencyId: number,
    colorId: number,
    color: string,
    fuelId: number,
    fuel: string,
    transmitterId: number,
    transmitter: string,
    transmissionBoxId: number,
    transmissionBox: string,
    carYear: number,
    mileage: number,
    price: number,
    motorPower: number,
    motorCapacity: number,
    about: string,
    kredit: boolean,
    barter: boolean,
    name: string,
    email: string,
    phoneNumber: string,
    isWp: boolean,
    isCall: boolean,
    city: string,
    cityId: number,
    logId: number,
    abs: boolean,
    yungulDisk: boolean,
    lyuk: boolean,
    yagisSensor: boolean,
    merkeziQapanma: boolean,
    parkRadar: boolean,
    kondisioner: boolean,
    oturacaqIsitme: boolean,
    deriSalon: boolean,
    yanPerde: boolean,
    oturacaqVentilyasiya: boolean,
    ksenonLampa: boolean,
    arxaKamera: boolean,
    bortKomputer: boolean,
    esp: boolean,
    kruizKontrol: boolean,
    startStopSistem: boolean,
    images: Array<ImageView>
}


export const Auto_View_Data = (ad: Auto_View) => {
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
            modelId: {
                value: ad.modelId,
                name: "modelId"
            },
            banTypeId: {
                value: ad.banTypeId,
                name: "banTypeId"
            },
            currencyId: {
                value: ad.currencyId,
                name: "currencyId"
            },
            colorId: {
                value: ad.colorId,
                name: "colorId"
            },
            fuelId: {
                value: ad.fuelId,
                name: "fuelId"
            },
            transmitterId: {
                value: ad.transmitterId,
                name: "transmitterId"
            },
            transmissionBoxId: {
                value: ad.transmissionBoxId,
                name: "transmissionBoxId"
            },
            cityId: {
                value: ad.cityId,
                name: "cityId"
            },
            logId: {
                value: ad.logId,
                name: "logId"
            },
        },
        nameList: {
            modifiedDate: {
                value: ad.modifiedDate,
                name: "Yenilənmə Tarixi"
            },
            title: {
                value: ad.title,
                name: "Başlıq"
            },
            mark: {
                value: ad.mark,
                name: "Marka"
            },
            model: {
                value: ad.model,
                name: "Model"
            },
            modelTitle: {
                value: ad.modelTitle,
                name: "Kateqoriya"
            },
            banType: {
                value: ad.banType,
                name: "Ban növü"
            },
            color: {
                value: ad.color,
                name: "Rəng"
            },
            fuel: {
                value: ad.fuel,
                name: "Yanacaq növü"
            },
            transmitter: {
                value: ad.transmitter,
                name: "Ötürücü"
            },
            transmissionBox: {
                value: ad.transmissionBox,
                name: "Sürətlər qutusu"
            },
            about: {
                value: ad.about,
                name: "Haqqında"
            },
            city: {
                value: ad.city,
                name: "Şəhər"
            },
            carYear: {
                value: ad.carYear,
                name: "Buraxılış ili"
            },
            mileage: {
                value: ad.mileage,
                name: "Yürüş"
            },
            price: {
                value: ad.price,
                name: "Qiymət"
            },
            motorPower: {
                value: ad.motorPower,
                name: "Mühərrikin gücü"
            },
            motorCapacity: {
                value: ad.motorCapacity,
                name: "Mühərrik"
            },
        },
        contactInfo: {
            name: {
                value: ad.name,
                name: "Ad"
            },
            email: {
                value: ad.email,
                name: "E-Poçt"
            },
            phoneNumber: {
                value: ad.phoneNumber,
                name: "Nömrə"
            },
            isWp: {
                value: ad.isWp,
                name: "Whatsapp ilə"
            },
            isCall: {
                value: ad.isCall,
                name: "Zəng ilə"
            },
        },
        checkboxes: {
            kredit: {
                value: ad.kredit,
                name: "Kredit"
            },
            barter: {
                value: ad.barter,
                name: "Barter"
            },
            abs: {
                value: ad.abs,
                name: "ABS"
            },
            yungulDisk: {
                value: ad.yungulDisk,
                name: "Yüngül lehimli disklər"
            },
            lyuk: {
                value: ad.lyuk,
                name: "Lyuk"
            },
            yagisSensor: {
                value: ad.yagisSensor,
                name: "Yağış sensoru"
            },
            merkeziQapanma: {
                value: ad.merkeziQapanma,
                name: "Mərkəzi qapanma"
            },
            parkRadar: {
                value: ad.parkRadar,
                name: "Park radarı"
            },
            kondisioner: {
                value: ad.kondisioner,
                name: "Kondisioner"
            },
            oturacaqIsitme: {
                value: ad.oturacaqIsitme,
                name: "Oturacaqların isidilməsi"
            },
            deriSalon: {
                value: ad.deriSalon,
                name: "Dəri salon"
            },
            yanPerde: {
                value: ad.yanPerde,
                name: "Yan pərdələr"
            },
            oturacaqVentilyasiya: {
                value: ad.oturacaqVentilyasiya,
                name: "Oturacaqların ventilyasiyası"
            },
            ksenonLampa: {
                value: ad.ksenonLampa,
                name: "Ksenon lampalar"
            },
            arxaKamera: {
                value: ad.arxaKamera,
                name: "Arxa görüntü kamerası"
            },
            bortKomputer: {
                value: ad.bortKomputer,
                name: "Bort Komputer"
            },
            esp: {
                value: ad.esp,
                name: "ESP"
            },
            kruizKontrol: {
                value: ad.kruizKontrol,
                name: "Kruiz Kontrol"
            },
            startStopSistem: {
                value: ad.startStopSistem,
                name: "Start-Stop Sistemi"
            },
        }
    }
}