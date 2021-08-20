import StaticPages from "pages/[pagename]/[processname]"
import { Private } from "./state"

export const HtmlAdd = function HtmlAdd(this: React.Component<{}, Private> & StaticPages) {
    return (<>
        <div className={'part'}>
            {this.utility.selectGenerator("Kateqoriya:", this.state.categoryList, "category", this.state.selected.category, this.callbacks.privateCategoryCallback)}
            {this.utility.selectGenerator("Geyim Tipi:", this.state.clothesGendersList, "clothesGender", this.state.selected.clothesGender, this.callbacks.clothesGenderCallback)}
            {this.utility.selectGenerator("Geyim Növü:", this.state.clothesTypesList, "clothesTypes", this.state.selected.clothesTypes, this.callbacks.commonCallback)}
            {this.utility.selectGenerator("Malın Növü:", this.state.typeList, "type", this.state.selected.type, this.callbacks.commonCallback)}

            {this.utility.selectGenerator("Rəngi:", this.state.clothesColors, "clothesColor", this.state.selected.clothesColor, this.callbacks.commonCallback, { visibility: this.state.clothesTypesList?.find(w => w.id == this.state.selected.clothesTypes)?.clothesColor ?? false })}

            {this.utility.selectGenerator("Ölçü:", this.state.shoesSizesList, "shoesSize", this.state.selected.shoesSize, this.callbacks.commonCallback, { visibility: this.state.clothesTypesList?.find(w => w.id == this.state.selected.clothesTypes)?.shoesSize ?? false })}

            {this.utility.selectGenerator("Ölçü:", this.state.clothesSizesList, "clothesSize", this.state.selected.clothesSize, this.callbacks.commonCallback, { visibility: this.state.clothesTypesList?.find(w => w.id == this.state.selected.clothesTypes)?.clothesSize ?? false })}

            <div className={'radioGroup'}>
                {this.utility.checkBoxGenerator("Yeni", this.callbacks.checkboxCallback, "isNew", this.state.hasNew, { makeBlock: true })}
                {this.utility.checkBoxGenerator("Çatdırılma var", this.callbacks.checkboxCallback, "hasDelivery", this.state.hasDelivery, { makeBlock: true })}
            </div>
            {this.utility.inputGenerator("Elanın Adı:", "Daxil Edin", this.callbacks.textAreaCallback, "title")}
            {this.utility.numberGenerator("Qiymət:", "Daxil Edin", this.callbacks.numberCallback, "price", true, 1, Number.MAX_VALUE, { addonAfterList: this.state.currencyList, addonAfterCallback: this.callbacks.commonCallback, addonName: "currency", addonValue: this.state.selected.currency })}
            {this.utility.selectGenerator("Şəhər:", this.state.cityList, "city", this.state.selected.city, this.callbacks.commonCallback, { sort: true, swapItem: [5] })}
            {this.utility.textAreaGeneretor("Məlumat:", "Ən azı 100 hərfdən ibarət olmalıdır", this.callbacks.textAreaCallback, "aboutInfo")}
            {this.utility.imageUploadGenerator(this.state.fileList, this.state.previewVisible, this.state.previewTitle, this.state.previewImage, this.state.url)}

        </div>
        <div className="part">
            {this.utility.header("ƏLAQƏ MƏLUMATLAR", "basliq")}
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

export const HtmlFilter = function HtmlFilter(this: React.Component<{}, Private> & StaticPages) {
    return (<>
        {this.utility.selectGenerator("Kateqoriya:", this.state.categoryList, "category", this.state.selected.category, this.callbacks.privateCategoryCallback)}
        {this.utility.selectGenerator("Geyim Tipi:", this.state.clothesGendersList, "clothesGender", this.state.selected.clothesGender, this.callbacks.clothesGenderCallback)}
        {this.utility.selectGenerator("Geyim Növü:", this.state.clothesTypesList, "clothesTypesList", this.state.selected.clothesTypesList, this.callbacks.multipleCallback, { multiple: true })}
        {this.utility.selectGenerator("Malın Növü:", this.state.typeList, "typeList", this.state.selected.typeList, this.callbacks.multipleCallback, { multiple: true })}

        {this.utility.selectGenerator("Rəngi:", this.state.clothesColors, "clothesColorList", this.state.selected.clothesColorList, this.callbacks.multipleCallback, { visibility: this.state.clothesTypesList?.filter(w=>w.clothesColor == true).map(w=>w.id).filter(w=> this.state.selected.clothesTypesList.indexOf(w) !== -1).length > 0, multiple: true })}
        {this.utility.selectGenerator("Ayaqqabı Ölçüsü:", this.state.shoesSizesList, "shoesSizeList", this.state.selected.shoesSizeList, this.callbacks.multipleCallback, { visibility: this.state.clothesTypesList?.filter(w=>w.shoesSize == true).map(w=>w.id).filter(w=> this.state.selected.clothesTypesList.indexOf(w) !== -1).length > 0, multiple: true })}
        {this.utility.selectGenerator("Geyim Ölçüsü:", this.state.clothesSizesList, "clothesSizeList", this.state.selected.clothesSizeList, this.callbacks.multipleCallback, { visibility: this.state.clothesTypesList?.filter(w=>w.clothesSize == true).map(w=>w.id).filter(w=> this.state.selected.clothesTypesList.indexOf(w) !== -1).length > 0, multiple: true })}

        <div className={'radioGroup'}>
            {this.utility.checkBoxGenerator("Yeni", this.callbacks.checkboxCallback, "isNew", this.state.hasNew, { makeBlock: true })}
            {this.utility.checkBoxGenerator("Çatdırılma var", this.callbacks.checkboxCallback, "hasDelivery", this.state.hasDelivery, { makeBlock: true })}
        </div>
        {this.utility.rangeİnputGenerator("Qiymət:", "minPrice", "maxPrice", this.callbacks.numberCallback, true, { addonAfterList: this.state.currencyList, addonAfterCallback: this.callbacks.commonCallback, addonName: "currency", addonValue: this.state.selected.currency })}
        {this.utility.selectGenerator("Şəhər:", this.state.cityList, "city", this.state.selected.city, this.callbacks.commonCallback, { sort: true, swapItem: [5], selectAll: true })}
        {this.utility.selectGenerator("Paylaşma Tarixi:", this.state.sharedDate, "sharedDate", this.state.selected.sharedDate, this.callbacks.commonCallback, { selectAll: true })}

    </>)
}