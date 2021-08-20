import StaticPages from "pages/[pagename]/[processname]"
import { Auto } from "./state"

export const HtmlAdd = function HtmlAdd(this: React.Component<{}, Auto> & StaticPages) {
    return (<>
        <div className={'part'}>
            {this.utility.header("Əsas", "basliq")}
            {this.utility.radioGenerator("Satış Növü*:", this.state.sellTypeList, 1, this.callbacks.autoSellTypeCallback, "sellType")}
            {this.utility.selectGenerator("Marka:", this.state.markList, "mark", this.state.selected.mark, this.callbacks.autoMarkCallback, { search: true })}
            {this.utility.selectGenerator("Model:", this.state.modelList, "model", this.state.selected.model, this.callbacks.commonCallback, { search: true, subname: this.state.modelSubList, subnameTitle: "title" })}
            {this.utility.selectGenerator("Ban növü:", this.state.banList, "ban", this.state.selected.ban, this.callbacks.commonCallback)}
            {this.utility.numberGenerator("Qiymət:", "Daxil Edin", this.callbacks.numberCallback, "price", true, 1, Number.MAX_VALUE, { addonAfterList: this.state.currencyList, addonAfterCallback: this.callbacks.commonCallback, addonName: "currency", addonValue: this.state.selected.currency })}
            {this.utility.selectGenerator("Kirayə müddəti*:", this.state.rentDurationList, "rentDuration", this.state.selected.rentDuration, this.callbacks.commonCallback)}
            <div className={'radioGroup'}>
                {this.utility.checkBoxGenerator("Kredit", this.callbacks.checkboxCallback, "kredit", this.state.kredit)}
                {this.utility.checkBoxGenerator("Barter", this.callbacks.checkboxCallback, "barter", this.state.barter)}
            </div>
            {this.utility.textAreaGeneretor("Məlumat:", "Ən azı 100 hərfdən ibarət olmalıdır", this.callbacks.textAreaCallback, "aboutInfo")}
            {this.utility.imageUploadGenerator(this.state.fileList, this.state.previewVisible, this.state.previewTitle, this.state.previewImage, this.state.url)}

        </div>
        <div className={'part'}>
            {this.utility.header("Özəlliklər", "basliq")}
            {this.utility.numberGenerator("Buraxılış ili:", "Daxil Edin", this.callbacks.numberCallback, "year", true, 1900, new Date().getFullYear() + 1, { nocommo: true })}
            {this.utility.numberGenerator("Yürüş (km):", "Daxil Edin", this.callbacks.numberCallback, "mileage", true)}
            {this.utility.selectGenerator("Yanacaq növü:", this.state.fuelList, "fuel", this.state.selected.fuel, this.callbacks.commonCallback)}
            {this.utility.selectGenerator("Sürətlər qutusu:", this.state.transmissionBoxList, "transmissionBox", this.state.selected.transmissionBox, this.callbacks.commonCallback)}
            {this.utility.selectGenerator("Ötürücü:", this.state.transmitterList, "transmitter", this.state.selected.transmitter, this.callbacks.commonCallback)}
            {this.utility.numberGenerator("Mühərrikin gücü (a.g):", "Daxil Edin", this.callbacks.numberCallback, "power", this.state.power)}
            {this.utility.selectGenerator("Mühərrikin həcmi (sm³):", this.state.capacityList, "capacity", this.state.selected.capacity, this.callbacks.commonCallback)}
            {this.utility.selectGenerator("Rəng:", this.state.colorList, "color", this.state.selected.color, this.callbacks.commonCallback)}
        </div>
        <div className="part">
            {this.utility.header("Təchizatlar", "basliq")}
            <div className={'radioGroup'} style={{ display: 'block!important', paddingBottom: '5px' }}>
                {this.state.checkboxList.map(w => this.utility.checkBoxGenerator(w.title, this.callbacks.checkboxCallback, w.name, true, { makeBlock: true }))}
            </div>
        </div>
        <div className="part">
            {this.utility.header("ƏLAQƏ MƏLUMATLAR", "basliq")}
            {this.utility.selectGenerator("Şəhər:", this.state.cityList, "city", this.state.selected.city, this.callbacks.commonCallback, { sort: true, swapItem: [5] })}
            {this.utility.inputGenerator("Adınız:", "Daxil Edin", this.callbacks.textAreaCallback, "name")}
            {this.utility.inputGenerator("E-mail:", "Daxil Edin", this.callbacks.textAreaCallback, "email")}
            {this.utility.inputGenerator("Telefon:", "Daxil Edin", this.callbacks.phoneNumberCallback, "phone", { phone: true })}
            <div className="radioGroup">
                {this.utility.checkBoxGenerator("Zəng üçün", this.callbacks.checkboxCallback, "isCall", true)}
                {this.utility.checkBoxGenerator("Wp üçün", this.callbacks.checkboxCallback, "isWp", true)}

            </div>
        </div>
    </>)
}


export const HtmlFilter = function HtmlFilter(this: React.Component<{}, Auto> & StaticPages) {
    let extras = () => {
        return (
            <>
                {this.utility.selectGenerator("Yanacaq növü:", this.state.fuelList, "fuel", this.state.selected.fuelList, this.callbacks.multipleCallback, { multiple: true })}
                {this.utility.selectGenerator("Sürətlər qutusu:", this.state.transmissionBoxList, "transmissionBoxList", this.state.selected.transmissionBoxList, this.callbacks.multipleCallback, { multiple: true })}
                {this.utility.selectGenerator("Ötürücü:", this.state.transmitterList, "transmitter", this.state.selected.transmitter, this.callbacks.commonCallback)}

                {this.utility.selectGenerator("Rəng:", this.state.colorList, "colorList", this.state.selected.colorList, this.callbacks.multipleCallback, { multiple: true })}
                {this.utility.selectGenerator("Mühərrikin həcmi (sm³):", this.state.capacityList, "capacityList", this.state.selected.capacityList, this.callbacks.multipleCallback, { multiple: true })}

                {this.utility.rangeİnputGenerator("Mühərrikin gücü (a.g):", "minMotorPower", "maxMotorPower", this.callbacks.numberCallback, this.state.selected.mark)}

                <div className={'radioGroup'}>
                    {this.state.checkboxList.map(w => this.utility.checkBoxGenerator(w.title, this.callbacks.checkboxCallback, w.name, true))}
                </div>
            </>

        )
    }
    return (<>
        {this.utility.radioGenerator("Satış Növü:", this.state.sellTypeList, 1, this.callbacks.autoSellTypeCallback, "sellType")}
        {this.utility.selectGenerator("Marka:", this.state.markList, "mark", this.state.selected.mark, this.callbacks.autoMarkCallback, { search: true })}
        {this.utility.selectGenerator("Model:", this.state.modelList, "modelList", this.state.selected.modelList, this.callbacks.multipleCallback, { search: true, subname: this.state.modelSubList, subnameTitle: "title", multiple: true })}
        {this.utility.selectGenerator("Ban növü:", this.state.banList, "banList", this.state.selected.banList, this.callbacks.multipleCallback, { multiple: true })}
        {this.utility.rangeİnputGenerator("Qiymət:", "minPrice", "maxPrice", this.callbacks.numberCallback, this.state.selected.mark, { addonAfterList: this.state.currencyList, addonAfterCallback: this.callbacks.commonCallback, addonName: "currency", addonValue: this.state.selected.currency })}
        {this.utility.selectGenerator("Kirayə müddəti*:", this.state.rentDurationList, "rentDuration", this.state.selected.rentDuration, this.callbacks.commonCallback)}
        {this.utility.rangeİnputGenerator("Buraxılış ili:", "minYear", "maxYear", this.callbacks.numberCallback, this.state.selected.mark)}
        {this.utility.rangeİnputGenerator("Yürüş (km):", "minMileage", "maxMileage", this.callbacks.numberCallback, this.state.selected.mark)}
        <div className={'radioGroup'}>
            {this.utility.checkBoxGenerator("Kredit", this.callbacks.checkboxCallback, "kredit", this.state.kredit)}
            {this.utility.checkBoxGenerator("Barter", this.callbacks.checkboxCallback, "barter", this.state.barter)}
        </div>
        {this.utility.selectGenerator("Şəhər:", this.state.cityList, "city", this.state.selected.city, this.callbacks.commonCallback, { sort: true, swapItem: [5] })}

        {this.utility.selectGenerator("Paylaşma Tarixi:", this.state.sharedDate, "sharedDate", this.state.selected.sharedDate, this.callbacks.commonCallback, { selectAll: true })}

        {this.utility.advancePanel(extras())}
    </>)
}