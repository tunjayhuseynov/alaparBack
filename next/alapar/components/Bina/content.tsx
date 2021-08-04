import StaticPages from "pages/[pagename]/[processname]"
import { Bina } from "./state"

export const HtmlAdd = function HtmlAdd(this: React.Component<{}, Bina> & StaticPages) {

    let sellingBox = <div className={'sellingTypeBox'}>

        {this.utility.selectGenerator("Sənəd Növü*:", this.state.contractList, "contract", this.state.selected.contract, this.callbacks.commonCallback, { visibility: this.state.sellingTypeBoxVisibility })}
        {this.utility.selectGenerator("Satış Növü:", this.state.propertySellingTypes, "propertySelling", this.state.selected.propertySelling, this.callbacks.commonCallback, { visibility: this.state.sellingTypeBoxVisibility, noneed: true, novalidation: true })}

    </div>

    let rentingBox = <div className={'rentingBox radioGroup'}>

        {this.utility.checkBoxGenerator("Mətbəx Mebeli", this.callbacks.checkboxCallback, "metbex", this.state.rentalAddition?.metbexM)}

        {this.utility.checkBoxGenerator("Qabyuyan", this.callbacks.checkboxCallback, "qab", this.state.rentalAddition?.qabY)}

        {this.utility.checkBoxGenerator("Paltaryuyan", this.callbacks.checkboxCallback, "paltar", this.state.rentalAddition?.paltarY)}

        {this.utility.checkBoxGenerator("Soyuducu", this.callbacks.checkboxCallback, "soyuducu", this.state.rentalAddition?.soyuducu)}

        {this.utility.checkBoxGenerator("TV", this.callbacks.checkboxCallback, "tv", this.state.rentalAddition?.tv)}

        {this.utility.checkBoxGenerator("Kondicioner", this.callbacks.checkboxCallback, "kondicioner", this.state.rentalAddition?.kondicioner)}

        {this.utility.checkBoxGenerator("Internet", this.callbacks.checkboxCallback, "internet", this.state.rentalAddition?.internet)}

        {this.utility.checkBoxGenerator("Telefon", this.callbacks.checkboxCallback, "telefon", this.state.rentalAddition?.telefon)}

        {this.utility.checkBoxGenerator("Usag ilə", this.callbacks.checkboxCallback, "usag", this.state.rentalAddition?.usag)}

        {this.utility.checkBoxGenerator("Heyvan ilə", this.callbacks.checkboxCallback, "heyvan", this.state.rentalAddition?.heyvan)}

    </div>


    return (<>
        <div className={'part'}>

            {this.utility.header("Ilkin", "basliq")}

            {this.utility.radioGenerator("Əmlak Növü*:", this.state.sellTypeList, 1, this.callbacks.binaSellTypeCallback, "sellType")}

            {this.utility.selectGenerator("Kategoriya*:", this.state.categoryList, "category", this.state.selected.category, this.callbacks.binaCategoryCallback, { subname: this.state.subCategory, subnameTitle: "subname" })}

            {this.utility.selectGenerator("Şəhər*:", this.state.cityList, "city", this.state.selected.city, this.callbacks.cityCallback, { sort: true, swapItem: [5] })}

            {this.utility.selectGenerator("Rayon*:", this.state.regionList, "region", this.state.selected.region, this.callbacks.regionCallback, { sort: true })}

            {this.utility.selectGenerator("Qəsəbə:", this.state.villageList, "village", this.state.selected.village, this.callbacks.commonCallback, { sort: true, novalidation: true, noneed: true })}

            {this.utility.selectGenerator("Nişangah:", this.state.targetPointList, "target", this.state.selected.target, this.callbacks.commonCallback, { sort: true, novalidation: true, search: true, noneed: true })}

            {this.utility.inputGenerator("Ünvan (Küçə, Ev, Mənzil və s.):", "Daxil Edin", this.callbacks.textAreaCallback, "customAdress", { novalidation: true })}

            {this.utility.selectGenerator("Metro:", this.state.metroList, "metro", this.state.selected.metro, this.callbacks.commonCallback, { sort: true })}

            {this.utility.numberGenerator("Metroya olan dəqiqə müddəti*:", "Daxil Edin", this.callbacks.numberCallback, "metroDuration", this.state.selected.metro, 1, 120,
                { addonAfterList: this.state.metroWayList, addonAfterCallback: this.callbacks.commonCallback, addonName: "metroWay", addonValue: this.state.selected.metroWay })}

            <div className={'radioGroup'}>
                {this.utility.checkBoxGenerator("Metro Yoxdur", this.callbacks.isMetroCallback, "nometro", this.state.nometro)}
            </div>
            {this.utility.googleMap(this.state.lat, this.state.lng, this.callbacks.googleMapCallback, "Əmlakı Xəritədə Göstər:", "lat", "lng")}

        </div>

        <div className={'part'}>

            {this.utility.header("ƏSAS", "basliq")}

            {this.utility.selectGenerator("Kirayə müddəti*:", this.state.rentDurationList, "rentDuration", this.state.selected.rentDuration, this.callbacks.commonCallback, { sort: true })}

            {this.state.rentingTypeBoxVisibility ? this.utility.radioGenerator("Kirayə Tipi*:", this.state.rentalAddition?.otagordaire, 0, this.callbacks.rentTypeCallback, "otagordaire", [{ id: 0, name: "Bütöv Sahə" }, { id: 1, name: "Otaq" }]) : null}

            {this.utility.numberGenerator("Qiymət*:", "Daxil Edin", this.callbacks.numberCallback, "price", true, 1, Number.MAX_VALUE, { addonAfterList: this.state.currencyList, addonAfterCallback: this.callbacks.commonCallback, addonName: "currency", addonValue: this.state.selected.currency })}

            {this.utility.numberGenerator("Sahə*:", "Daxil Edin", this.callbacks.numberCallback, "areaSize", true, 1, Number.MAX_VALUE, { addonAfterOnlyText: this.state.areaUnit })}

            {this.utility.radioGenerator("Təmiri*:", this.state.addition.temir, this.state.selected.temir, this.callbacks.commonNoOptionCallback, "temir", this.state.repairList)}

            {this.utility.numberGenerator("Torpaq Sahəsi*:", "Daxil Edin", this.callbacks.numberCallback, "secondAreaSize", this.state.addition.secondArea, 1, Number.MAX_VALUE, { addonAfterOnlyText: "sot" })}

            {this.utility.numberGenerator("Evin Mərtəbə Sayı*:", "Daxil Edin", this.callbacks.numberCallback, "houseFloor", this.state.addition.houseFloor, 0)}
            {this.utility.numberGenerator("Otaq Sayı*:", "Daxil Edin", this.callbacks.numberCallback, "roomAmount", this.state.addition.roomAmount)}

            {sellingBox}

            {this.utility.selectGenerator("Torpaq Təyinatı*:", this.state.addition.landAppointment ? this.state.landAppointmentList : false, "landAppointment", this.state.selected.landAppointment, this.callbacks.commonCallback, { sort: true })}

            {this.utility.numberGenerator("Yerləşdiyi Mərtəbə*:", "Daxil Edin", this.callbacks.numberCallback, "floor", this.state.addition.floor, 0)}

            {this.utility.numberGenerator("Binanın Mərtəbəsi*:", "Daxil Edin", this.callbacks.numberCallback, "buildingFloor", this.state.addition.buildingFloor)}

            {this.utility.numberGenerator("Hamam otağı*:", "Daxil Edin", this.callbacks.numberCallback, "hamam", this.state.addition.hamam, 0, 20)}

            <div className={'radioGroup'}>

                {this.utility.checkBoxGenerator("Eyvan", this.callbacks.checkboxCallback, "eyvan", this.state.addition.eyvan)}
                {this.utility.checkBoxGenerator("Lift", this.callbacks.checkboxCallback, "lift", this.state.addition.lift)}
                {this.utility.checkBoxGenerator("Mebel", this.callbacks.checkboxCallback, "mebel", this.state.addition.mebel)}
                {this.utility.checkBoxGenerator("Hovuz", this.callbacks.checkboxCallback, "hovuz", this.state.addition.hovuz)}
                {this.utility.checkBoxGenerator("Qaz", this.callbacks.checkboxCallback, "qaz", this.state.addition.qaz)}
                {this.utility.checkBoxGenerator("Su", this.callbacks.checkboxCallback, "su", this.state.addition.su)}
                {this.utility.checkBoxGenerator("Isig", this.callbacks.checkboxCallback, "isig", this.state.addition.isig)}
                {this.utility.checkBoxGenerator("Kanalizasiya", this.callbacks.checkboxCallback, "kanalizasiya", this.state.addition.kanalizasiya)}

            </div>

            {this.state.rentingTypeBoxVisibility ? rentingBox : null}

            {this.utility.textAreaGeneretor("Əlavə Məlumat*:", "Ən azı 100 hərfdən ibarət olmalıdır", this.callbacks.textAreaCallback, "aboutInfo")}

            {this.utility.header("YAXINLIQDA:", "basliq")}
            <div className={'radioGroup'}>

                {this.utility.checkBoxGenerator("Yaxın Xəstəxana", this.callbacks.checkboxCallback, "nearHospital", true)}
                {this.utility.checkBoxGenerator("Yaxın Məktəb", this.callbacks.checkboxCallback, "nearSchool", true)}
                {this.utility.checkBoxGenerator("Yaxın Mağaza", this.callbacks.checkboxCallback, "nearShop", true)}
                {this.utility.checkBoxGenerator("Yaxın Uşaq Bağçası", this.callbacks.checkboxCallback, "nearKindigarden", true)}
                {this.utility.checkBoxGenerator("Yaxın Ticarət Mərkəzi", this.callbacks.checkboxCallback, "nearMall", true)}
                {this.utility.checkBoxGenerator("Yaxın Dayanacaq", this.callbacks.checkboxCallback, "nearBusstop", true)}

            </div>

            {this.utility.imageUploadGenerator(this.state.fileList, this.state.previewVisible, this.state.previewTitle, this.state.previewImage, this.state.url)}
        </div>

        <div className={'part'}>

            {this.utility.header("ƏLAQƏ MƏLUMATLAR", "basliq")}

            {this.utility.radioGenerator("Əlaqədar Şəxsin Statusu:", [
                {
                    id: 1,
                    name: "Sahibi"
                },
                {
                    id: 0,
                    name: "Vastəçi"
                },
            ], 1, this.callbacks.ownerCallback, "owner")}

            {this.utility.inputGenerator("Ad*:", "Daxil Edin", this.callbacks.textAreaCallback, "name")}

            {this.utility.inputGenerator("Nömrə*:", "Daxil Edin", this.callbacks.phoneNumberCallback, "phone", { phone: true })}

            {this.utility.inputGenerator("E-mail*:", "Daxil Edin", this.callbacks.textAreaCallback, "email")}


            <div className={'radioGroup'}>

                {this.utility.checkBoxGenerator("WhatsApp", this.callbacks.checkboxCallback, "wp", true)}
                {this.utility.checkBoxGenerator("Zəng", this.callbacks.checkboxCallback, "call", true)}

            </div>
        </div>
    </>)
}


export const HtmlFilter = function HtmlFilter(this: React.Component<{}, Bina> & StaticPages) {
    let extras = () => {


        let rentingBox = <div className={'rentingBox radioGroup'} >

            {this.utility.checkBoxGenerator("Mətbəx Mebeli", this.callbacks.checkboxCallback, "metbex", this.state.rentalAddition?.metbexM)}

            {this.utility.checkBoxGenerator("Qabyuyan", this.callbacks.checkboxCallback, "qab", this.state.rentalAddition?.qabY)}

            {this.utility.checkBoxGenerator("Paltaryuyan", this.callbacks.checkboxCallback, "paltar", this.state.rentalAddition?.paltarY)}

            {this.utility.checkBoxGenerator("Soyuducu", this.callbacks.checkboxCallback, "soyuducu", this.state.rentalAddition?.soyuducu)}

            {this.utility.checkBoxGenerator("TV", this.callbacks.checkboxCallback, "tv", this.state.rentalAddition?.tv)}

            {this.utility.checkBoxGenerator("Kondicioner", this.callbacks.checkboxCallback, "kondicioner", this.state.rentalAddition?.kondicioner)}

            {this.utility.checkBoxGenerator("Internet", this.callbacks.checkboxCallback, "internet", this.state.rentalAddition?.internet)}

            {this.utility.checkBoxGenerator("Telefon", this.callbacks.checkboxCallback, "telefon", this.state.rentalAddition?.telefon)}

            {this.utility.checkBoxGenerator("Usag ilə", this.callbacks.checkboxCallback, "usag", this.state.rentalAddition?.usag)}

            {this.utility.checkBoxGenerator("Heyvan ilə", this.callbacks.checkboxCallback, "heyvan", this.state.rentalAddition?.heyvan)}

        </div>

        return (
            <>
                {this.utility.radioGenerator("Əlaqədar Şəxsin Statusu:", [
                    {
                        id: 2,
                        name: "Hamısı"
                    },
                    {
                        id: 1,
                        name: "Sahibi"
                    },
                    {
                        id: 0,
                        name: "Vastəçi"
                    },
                ], 2, this.callbacks.ownerCallback, "owner")}


                {this.utility.rangeİnputGenerator("Yerləşdiyi Mərtəbə:", "minApartmentFloor", "maxApartmentFloor", this.callbacks.numberCallback, this.state.addition.floor)}


                {this.utility.rangeİnputGenerator("Binanın Mərtəbəsi:", "minBuildingFloor", "maxBuildingFloor", this.callbacks.numberCallback, this.state.addition.buildingFloor)}

                {this.utility.rangeİnputGenerator("Metroya olan müddət:", "minMetroDuration", "maxMetroDuration", this.callbacks.numberCallback, this.state.selected.metro,
                    { addonAfterList: this.state.metroWayList, addonAfterCallback: this.callbacks.commonCallback, addonName: "metroWay", addonValue: this.state.selected.metroWay })}


                {this.utility.rangeİnputGenerator("Hamam Sayı", "minBath", "maxBath", this.callbacks.numberCallback, this.state.addition.hamam)}

                <div className={'radioGroup'}>

                    {this.utility.checkBoxGenerator("Yaxın Xəstəxana", this.callbacks.checkboxCallback, "nearHospital", true)}
                    {this.utility.checkBoxGenerator("Yaxın Məktəb", this.callbacks.checkboxCallback, "nearSchool", true)}
                    {this.utility.checkBoxGenerator("Yaxın Mağaza", this.callbacks.checkboxCallback, "nearShop", true)}
                    {this.utility.checkBoxGenerator("Yaxın Uşaq Bağçası", this.callbacks.checkboxCallback, "nearKindigarden", true)}
                    {this.utility.checkBoxGenerator("Yaxın Ticarət Mərkəzi", this.callbacks.checkboxCallback, "nearMall", true)}
                    {this.utility.checkBoxGenerator("Yaxın Dayanacaq", this.callbacks.checkboxCallback, "nearBusstop", true)}

                </div>

                {this.utility.checkBoxGenerator("Eyvan", this.callbacks.checkboxCallback, "eyvan", this.state.addition.eyvan)}
                {this.utility.checkBoxGenerator("Lift", this.callbacks.checkboxCallback, "lift", this.state.addition.lift)}
                {this.utility.checkBoxGenerator("Mebel", this.callbacks.checkboxCallback, "mebel", this.state.addition.mebel)}
                {this.utility.checkBoxGenerator("Temir", this.callbacks.checkboxCallback, "temir", this.state.addition.temir)}
                {this.utility.checkBoxGenerator("Hovuz", this.callbacks.checkboxCallback, "hovuz", this.state.addition.hovuz)}
                {this.utility.checkBoxGenerator("Qaz", this.callbacks.checkboxCallback, "qaz", this.state.addition.qaz)}
                {this.utility.checkBoxGenerator("Su", this.callbacks.checkboxCallback, "su", this.state.addition.su)}
                {this.utility.checkBoxGenerator("Isig", this.callbacks.checkboxCallback, "isig", this.state.addition.isig)}
                {this.utility.checkBoxGenerator("Kanalizasiya", this.callbacks.checkboxCallback, "kanalizasiya", this.state.addition.kanalizasiya)}


                {this.state.rentingTypeBoxVisibility ? rentingBox : null}

            </>
        );
    }

    return (<>
        {this.utility.radioGenerator("Əmlak:", this.state.sellTypeList, 1, this.callbacks.binaSellTypeCallback, "sellType")}

        {this.utility.selectGenerator("Kategoriya:", this.state.categoryList, "category", this.state.selected.category, this.callbacks.binaCategoryCallback, { subname: this.state.subCategory, subnameTitle: "subname" })}

        {this.utility.selectGenerator("Şəhər:", this.state.cityList, "city", this.state.selected.city, this.callbacks.cityCallback, { sort: true, swapItem: [5] })}

        {this.utility.selectGenerator("Rayon:", this.state.regionList, "region", this.state.selected.region, this.callbacks.regionCallback, { sort: true })}

        {this.utility.selectGenerator("Qəsəbə:", this.state.villageList, "village", this.state.selected.village, this.callbacks.commonCallback, { sort: true })}

        {this.utility.selectGenerator("Nişangah:", this.state.targetPointList, "target", this.state.selected.target, this.callbacks.commonCallback, { sort: true, selectAll: true, search: true })}

        {this.utility.selectGenerator("Metro:", this.state.metroList, "metro", this.state.selected.metro, this.callbacks.commonCallback, { sort: true })}


        {this.utility.selectGenerator("Kirayə müddəti:", this.state.rentDurationList, "rentDuration", this.state.selected.rentDuration, this.callbacks.commonCallback, { sort: true })}


        {this.utility.rangeİnputGenerator("Qiymət:", "minPrice", "maxPrice", this.callbacks.numberCallback, this.state.selected.category, { addonAfterList: this.state.currencyList, addonAfterCallback: this.callbacks.commonCallback, addonName: "currency", addonValue: this.state.selected.currency })}

        {this.utility.rangeİnputGenerator("Sahə:", "minArea", "maxArea", this.callbacks.numberCallback, this.state.selected.category, { addonAfterOnlyText: this.state.areaUnit ?? "m²" })}

        {this.utility.radioGenerator("Təmiri*:", this.state.addition.temir, this.state.selected.temir, this.callbacks.commonNoOptionCallback, "temir", this.state.repairList)}

        {this.utility.rangeİnputGenerator("Torpaq Sahəsi:", "minLandArea", "maxLandArea", this.callbacks.numberCallback, this.state.addition.secondArea, { addonAfterOnlyText: "sot" })}

        {this.utility.selectGenerator("Sənəd Növü*:", this.state.contractList, "contract", this.state.selected.contract, this.callbacks.commonCallback, { visibility: this.state.sellingTypeBoxVisibility })}
        {this.utility.selectGenerator("Satış Növü:", this.state.propertySellingTypes, "propertySelling", this.state.selected.propertySelling, this.callbacks.commonCallback, { visibility: this.state.sellingTypeBoxVisibility, noneed: true, novalidation: true })}


        {this.utility.rangeİnputGenerator("Otaq sayı:", "minRoom", "maxRoom", this.callbacks.numberCallback, this.state.addition.roomAmount)}

        {this.utility.selectGenerator("Torpaq Teyinati:", this.state.addition.landAppointment ? this.state.landAppointmentList : false, "landAppointment", this.state.selected.landAppointment, this.callbacks.commonCallback, { selectAll: true })}


        {this.utility.checkBoxGenerator("Mərtəbə:", this.callbacks.checkboxCallback, null, this.state.addition.roomAmount, {
            multiple: [
                {
                    name: "bottomfloor",
                    title: "Ən Alt"
                },
                {
                    name: "middlefloor",
                    title: "Ortalar"
                },
                {
                    name: "upperfloor",
                    title: "Ən Yuxarı"
                },
            ]
        })}

        {this.utility.selectGenerator("Paylaşma Tarixi:", this.state.sharedDate, "sharedDate", this.state.selected.sharedDate, this.callbacks.commonCallback, { selectAll: true })}
        {this.utility.advancePanel(extras())}

    </>)
}