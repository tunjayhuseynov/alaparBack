import StaticPages from "pages/[pagename]/[processname]"
import { Electro } from "./state"

export const HtmlAdd = function HtmlAdd(this: React.Component<{}, Electro> & StaticPages) {
    return (<>
        <div className={'part'}>
            {this.utility.header("Əsas", "basliq")}
            {this.utility.inputGenerator("Elan Başlığı:", "Daxil Edin", this.callbacks.textAreaCallback, "title")}

            {this.utility.selectGenerator("Kateqoriya:", this.state.categoryList, "category", this.state.selected.category, this.callbacks.electroCategoryCallback)}

            {this.utility.selectGenerator("Marka:", this.state.computerMarkList, "computerMark", this.state.selected.computerMark, this.callbacks.commonCallback)}

            {this.utility.selectGenerator("Növ:", this.state.typeList, "type", this.state.selected.type, this.callbacks.commonCallback)}

            {this.utility.selectGenerator("Operator:", this.state.operatorsList, "operator", this.state.selected.operator, this.callbacks.commonCallback)}

            {this.utility.inputGenerator("Nömrə:", "(xxx) xxx-xx-xx", this.callbacks.phoneNumberCallback, "inputPhoneNumber", { visibility: this.state.operatorsList, phone: true })}

            {this.utility.selectGenerator("Marka:", this.state.markList, "mark", this.state.selected.mark, this.callbacks.electroMarkCallback)}
            {this.utility.selectGenerator("Model:", this.state.modelList, "model", this.state.selected.model, this.callbacks.electroModelCallback)}
            {this.utility.selectGenerator("Rəng:", this.state.colorList, "color", this.state.selected.color, this.callbacks.commonCallback, { loading: this.state.colorloading })}
            {this.utility.selectGenerator("Yaddaş:", this.state.storageList, "storage", this.state.selected.storage, this.callbacks.commonCallback, { loading: this.state.storageloading })}


            {this.utility.numberGenerator("Qiymət:", "Daxil Edin", this.callbacks.numberCallback, "price", true, 1, Number.MAX_VALUE, { addonAfterList: this.state.currencyList, addonAfterCallback: this.callbacks.commonCallback, addonName: "currency", addonValue: this.state.selected.currency })}
            <div className={'radioGroup'}>
                {this.utility.checkBoxGenerator("Yeni", this.callbacks.checkboxCallback, "isNew", true, { makeBlock: true })}
                {this.utility.checkBoxGenerator("Çatdırılma", this.callbacks.checkboxCallback, "hasDelivery", true, { makeBlock: true })}
                {this.utility.checkBoxGenerator("Zəmanət", this.callbacks.checkboxCallback, "guarantee", true, { makeBlock: true })}
                {this.utility.checkBoxGenerator("Kredit", this.callbacks.checkboxCallback, "credit", true, { makeBlock: true })}
            </div>
            {this.utility.textAreaGeneretor("Məlumat:", "Ən azı 100 hərfdən ibarət olmalıdır", this.callbacks.textAreaCallback, "about")}
            {this.utility.imageUploadGenerator(this.state.fileList, this.state.previewVisible, this.state.previewTitle, this.state.previewImage, this.state.url)}

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


export const HtmlFilter = function HtmlFilter(this: React.Component<{}, Electro> & StaticPages) {
    return (<>

        {this.utility.selectGenerator("Kateqoriya:", this.state.categoryList, "category", this.state.selected.category, this.callbacks.electroCategoryCallback)}

        {this.utility.selectGenerator("Marka:", this.state.computerMarkList, "computerMark", this.state.selected.computerMark, this.callbacks.commonCallback)}

        {this.utility.selectGenerator("Növ:", this.state.typeList, "type", this.state.selected.type, this.callbacks.commonCallback)}

        {this.utility.selectGenerator("Operator:", this.state.operatorsList, "operator", this.state.selected.operator, this.callbacks.commonCallback)}

        {this.utility.inputGenerator("Nömrə:", "(xxx) xxx-xx-xx", this.callbacks.phoneNumberCallback, "inputPhoneNumber", { visibility: this.state.operatorsList, phone: true })}

        {this.utility.selectGenerator("Marka:", this.state.markList, "mark", this.state.selected.mark, this.callbacks.electroMarkCallback)}
        {this.utility.selectGenerator("Model:", this.state.modelList, "model", this.state.selected.model, this.callbacks.electroModelCallback)}
        {this.utility.selectGenerator("Rəng:", this.state.colorList, "color", this.state.selected.color, this.callbacks.commonCallback, { loading: this.state.colorloading })}
        {this.utility.selectGenerator("Yaddaş:", this.state.storageList, "storage", this.state.selected.storage, this.callbacks.commonCallback, { loading: this.state.storageloading })}

        {this.utility.rangeİnputGenerator("Qiymət:", "minPrice", "maxPrice", this.callbacks.numberCallback, this.state.selected.category, { addonAfterList: this.state.currencyList, addonAfterCallback: this.callbacks.commonCallback, addonName: "currency", addonValue: this.state.selected.currency })}

        <div className={'radioGroup'}>
            {this.utility.checkBoxGenerator("Yeni", this.callbacks.checkboxCallback, "isNew", true, { makeBlock: true })}
            {this.utility.checkBoxGenerator("Çatdırılma", this.callbacks.checkboxCallback, "hasDelivery", true, { makeBlock: true })}
            {this.utility.checkBoxGenerator("Zəmanət", this.callbacks.checkboxCallback, "guarantee", true, { makeBlock: true })}
            {this.utility.checkBoxGenerator("Kredit", this.callbacks.checkboxCallback, "credit", true, { makeBlock: true })}
        </div>

        {this.utility.selectGenerator("Paylaşma Tarixi:", this.state.sharedDate, "sharedDate", this.state.selected.sharedDate, this.callbacks.commonCallback, { selectAll: true })}

    </>)
}