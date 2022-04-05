import { BanType, Color, Fuel, Mark, Model, TransmissionBox, Transmitter, Type, Auto_Filter } from './object'
import { Currency, City, SharedDate, ImageState } from '@/Constructions/objects'
import {Sites} from '@/Constructions/const';
import { Rent, SellType } from '@/Bina/object';

interface Auto_Selection {
    sellType: number, //
    rentDuration: number, //
    mark: number, //
    model: number, //
    ban: number, //
    price: number, //
    currency: number, //
    kredit: boolean, //
    barter: boolean, //
    aboutInfo: string, //
    color: number, //
    power: number, //
    capacity: number, //
    fuel: number, //
    transmitter: number, //
    transmissionBox: number, //
    year: number, //
    mileage: number, //
    city: number, //
    name: string, //
    isCall: boolean, // 
    isWp: boolean, //
    email: string, //
    phone: string, //
    //Chechboxs
    abs: boolean,
    yungulLehimDisk: boolean,
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
    startStopSistemi: boolean,
    type: number,
    //Filter 
    minPrice: number,
    maxPrice: number,
    minYear: number,
    maxYear: number,
    minMotorPower: number,
    maxMotorPower: number,
    sharedDate: number,

    
    modelList: Array<number>
    banList: Array<number>
    fuelList: Array<number>
    transmissionBoxList: Array<number>,
    colorList: Array<number>
    capacityList: Array<number>
}

export interface ChechboxObject{
    title: string,
    name: string,
}

export interface Auto extends ImageState{
    url: string,
    submitUrl: string,
    selected: Auto_Selection,
    markList: Array<Mark>,
    modelList: Array<Model>,
    currencyList: Array<Currency>,
    banList: Array<BanType>,
    colorList: Array<Color>,
    fuelList: Array<Fuel>,
    cityList: Array<City>,
    typeList: Array<Type>,
    capacityList: Array<any>,
    sellTypeList: Array<SellType>,
    rentDurationList: Array<Rent>,
    transmitterList: Array<Transmitter>,
    transmissionBoxList: Array<TransmissionBox>,
    //end
    about: boolean,
    price: boolean,
    kredit: boolean,
    barter: boolean,
    modelSubList: Array<any>,
    checkboxList: Array<ChechboxObject>,
    

    markTitle: string,
    power: boolean,
    banType: boolean;
    mileage: boolean;
    fuel: boolean;
    transmissionBox: boolean;
    transmitter: boolean;
    capacity: boolean;
    checkboxes: boolean;
    title: boolean;
    
    //Filter
    sharedDate: Array<SharedDate>,

    extraVisible: boolean,
}

export const Auto_State = (json: Auto_Filter, th): Auto => {
    return {
        ...th.utility.getImageState,
        url: Sites.auto.image,
        submitUrl: Sites.auto.submit,
        selected: {
            sellType: json.sellTypes[0].id, //int
            mark: null,
            model: null,
            ban: null,
            price: null,
            currency: 1,
            kredit: null,
            barter: null,
            aboutInfo: null,
            color: null,
            power: null,
            capacity: null,
            fuel: null,
            transmitter: null,
            transmissionBox: null,
            year: null,
            mileage: null,
            city: null,
            name: null,
            isCall: null,
            isWp: null,
            email: null,
            phone: null,
            //Chechboxs
            abs: null,
            yungulLehimDisk: null,
            lyuk: null,
            yagisSensor: null,
            merkeziQapanma: null,
            parkRadar: null,
            kondisioner: null,
            oturacaqIsitme: null,
            deriSalon: null,
            yanPerde: null,
            oturacaqVentilyasiya: null,
            ksenonLampa: null,
            arxaKamera: null,
            bortKomputer: null,
            esp: null,
            kruizKontrol: null,
            startStopSistemi: null,
            type: null,

            minPrice: null,
            maxPrice: null,
            minYear: null,
            maxYear: null,
            minMotorPower: null,
            maxMotorPower: null,
            sharedDate: null,


            modelList: [],
            banList: [],
            fuelList: [],
            transmissionBoxList: [],
            colorList: [],
            capacityList: [],
        },
        markList: json.type.find(w=>w.id == 1).marks,
        modelList: null,
        currencyList: json.currencies,
        banList: json.banTypes,
        colorList: json.colors,
        sellTypeList: json.sellTypes,
        fuelList: json.fuels,
        cityList: json.cities,
        typeList: json.type,
        //end
        about: true,
        price: null,
        kredit: true,
        barter: true,
        power: true,
        banType: false,
        mileage: false,
        fuel: false,
        transmissionBox: false,
        transmitter: false,
        capacity: false,
        checkboxes: false,
        title: false,

        markTitle: null,

        capacityList: [
            ...th.utility.range(50, 500, 50).map(w => { return { id: w, name: w } }),
            ...th.utility.range(600, 6500, 100).map(w => { return { id: w, name: w } }),
            ...th.utility.range(7000, 10000, 500).map(w => { return { id: w, name: w } }),
            ...th.utility.range(11000, 16000, 1000).map(w => { return { id: w, name: w } }),
        ],
        transmitterList: json.transmitters,
        transmissionBoxList: json.transmissionBoxs,
        modelSubList: null,
        checkboxList: [
            { title: "ABS", name: "abs" },
            { title: "Yüngül Lehmli Disklər", name: "yungulLehimDisk" },
            { title: "Lyuk", name: "lyuk" },
            { title: "Yağış Sensoru", name: "yagisSensor" },
            { title: "Mərkəzi Qapanma", name: "merkeziQapanma" },
            { title: "Park Radarl", name: "parkRadar" },
            { title: "Kondisioner", name: "kondisioner" },
            { title: "Oturacaqların İsidilməsi", name: "oturacaqIsitme" },
            { title: "Dəri Salon", name: "deriSalon" },
            { title: "Yan Pərdə", name: "yanPerde" },
            { title: "Oturacaqların Ventilyasiyası", name: "oturacaqVentilyasiya" },
            { title: "Ksenon Lampalar", name: "ksenonLampa" },
            { title: "Arxa Görüntü Kamerasi", name: "arxaKamera" },
            { title: "Bort Komputer", name: "bortKomputer" },
            { title: "ESP", name: "esp" },
            { title: "Kruiz Kontrol", name: "kruizKontrol" },
            { title: "Start-Stop Sistemi", name: "startStopSistemi" },
        ],
        sharedDate: json.sharedDate,
        extraVisible: false,
    }
}