export const HtmlAdd = function HtmlAdd() {
    return (<>
        <div className={'part'}>
            {this.utility.selectGenerator("Kateqoriya:", this.state.categoryList, "category", this.state.selected.category, this.callbacks.animalCategoryCallback)}
            {this.utility.selectGenerator("Cins:", this.state.generaList, "genera", this.state.selected.genera, this.callbacks.commonCallback)}
            {this.utility.selectGenerator("Elan Növü:", this.state.typeList, "type", this.state.selected.type, this.callbacks.commonCallback)}
            <div className={'radioGroup'}>
                {this.utility.checkBoxGenerator("Çatdırılma var", this.callbacks.checkboxCallback, "hasDelivery", true, { makeBlock: true })}
            </div>
            {this.utility.inputGenerator("Elanın Adı:", "Daxil Edin", this.callbacks.textAreaCallback, "title")}
            {this.utility.numberGenerator("Qiymət:", "Daxil Edin", this.callbacks.numberCallback, "price", true, 1, Number.MAX_VALUE, { addonAfterList: this.state.currencyList, addonAfterCallback: this.callbacks.commonCallback, addonName: "currency", addonValue: this.state.selected.currency })}
            {this.utility.selectGenerator("Şəhər:", this.state.cityList, "city", this.state.selected.city, this.callbacks.commonCallback, { sort: true, swapItem: [5] })}
            {this.utility.textAreaGeneretor("Məlumat:", "Ən azı 100 hərfdən ibarət olmalıdır", this.callbacks.textAreaCallback, "aboutInfo")}
            {this.utility.imageUploadGenerator(this.state.fileList, this.state.previewVisible, this.state.previewTitle, this.state.previewImage, this.state.url)}

        </div>
        <div className="part">
            {this.utility.header("Əlaqə", "basliq")}
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

export const HtmlFilter = function HtmlFilter() {
    return (<>
        {this.utility.selectGenerator("Kateqoriya:", this.state.categoryList, "category", this.state.selected.category, this.callbacks.animalCategoryCallback)}
        {this.utility.selectGenerator("Cins:", this.state.generaList, "genera", this.state.selected.genera, this.callbacks.commonCallback)}
        {this.utility.selectGenerator("Elan Növü:", this.state.typeList, "type", this.state.selected.type, this.callbacks.commonCallback)}
        <div className={'radioGroup'}>
            {this.utility.checkBoxGenerator("Çatdırılma var", this.callbacks.checkboxCallback, "hasDelivery", true, { makeBlock: true })}
        </div>
        {this.utility.rangeİnputGenerator("Qiymət:", "minPrice", "maxPrice", this.callbacks.numberCallback, true)}
        {this.utility.selectGenerator("Şəhər:", this.state.cityList, "city", this.state.selected.city, this.callbacks.commonCallback, { sort: true, swapItem: [5] })}

        {this.utility.selectGenerator("Paylaşma Tarixi:", this.state.sharedDate, "sharedDate", this.state.selected.sharedDate, this.callbacks.commonCallback, { selectAll: true })}

    </>)
}