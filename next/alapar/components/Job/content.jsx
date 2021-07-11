export const HtmlAdd = function HtmlAdd() {
    let newType = this.state.types.find(w => w.id == this.state.selected.type);
    return (<>
        <div className={'part'}>
            {this.utility.header("Əsas", "basliq")}

            {this.utility.selectGenerator("Elan Növü:", this.state.types, "type", this.state.selected.type, this.callbacks.commonCallback)}

            {this.utility.inputGenerator("Ad:", "Daxil Edin", this.callbacks.textAreaCallback, "employeeName", { visibility: newType?.employeeName })}
            {this.utility.inputGenerator("Soyad:", "Daxil Edin", this.callbacks.textAreaCallback, "employeeSurname", { visibility: this.state.types.find(w => w.id == this.state.selected.type)?.employeeSurname })}
            {this.utility.radioGenerator("Cinsiyyət:", newType?.employeeIsGirl, 2, this.callbacks.ownerCallback, "gender", this.state.gender)}
            {this.utility.numberGenerator("Yaşınız:", "Daxil edin", this.callbacks.numberCallback, "minAge", newType?.employeeName, 16, 65)}


            {this.utility.selectGenerator("İş Sahəsi:", this.state.category, "category", this.state.selected.category, this.callbacks.commonCallback, { subname: this.state.subcategory, subnameTitle: "title", search: true })}
            {this.utility.inputGenerator("Vəzifə:", "Daxil Edin", this.callbacks.textAreaCallback, "role", { visibility: newType?.role })}
            {this.utility.selectGenerator("Şəhər:", this.state.cityList, "city", this.state.selected.city, this.callbacks.commonCallback, { sort: true, swapItem: [5] })}


            {this.utility.rangeİnputGenerator("Maaş:", "minWage", "maxWage", this.callbacks.numberCallback, newType?.companyName)}
            {this.utility.rangeİnputGenerator("Yaş aralığı:", "minAge", "maxAge", this.callbacks.numberCallback, newType?.companyName, { min: 16, max: 65 })}

            {this.utility.selectGenerator("Təhsil səviyyəsi:", this.state.educationList, "educationLevel", this.state.selected.educationLevel, this.callbacks.commonCallback, { visibility: newType?.educationId })}
            {this.utility.textAreaGeneretor("Təhsiliniz barəsində məlumat:", "Daxil Edin", this.callbacks.textAreaCallback, "employeeEducation", { visibility: newType?.employeeAboutEducation })}

            {this.utility.selectGenerator("İş Təcrübəsi:", this.state.practices, "practiceDuration", this.state.selected.practiceDuration, this.callbacks.commonCallback, { visibility: newType?.practiceId })}
            {this.utility.textAreaGeneretor("İş təcrübəsi barəsində məlumat:", "Daxil Edin", this.callbacks.textAreaCallback, "employeePractice", { visibility: newType?.employeeAboutPractic })}

            {this.utility.textAreaGeneretor("Tələblər:", "Daxil Edin", this.callbacks.textAreaCallback, "aboutReq", { visibility: newType?.aboutReq })}
            {this.utility.textAreaGeneretor("İş barəsində məlumat:", "Daxil Edin", this.callbacks.textAreaCallback, "aboutJob", { visibility: newType?.aboutJob })}

            {this.utility.textAreaGeneretor("Bacarıqlarınız:", "Daxil Edin", this.callbacks.textAreaCallback, "employeeSkills", { visibility: newType?.employeeSkills })}
            {this.utility.textAreaGeneretor("Əlavə məlumat:", "Daxil Edin", this.callbacks.textAreaCallback, "employeeAboutExtra", { visibility: newType?.employeeAboutExtra })}

        </div>

        <div className="part">
            {this.utility.header("Əlaqə", "basliq")}


            {this.utility.inputGenerator("Şirkətin Adı:", "Daxil Edin", this.callbacks.textAreaCallback, "companyName", { visibility: newType?.companyName })}
            {this.utility.inputGenerator("Əlaqədar Şəxsin Adı:", "Daxil Edin", this.callbacks.textAreaCallback, "contactName", { visibility: newType?.contactName })}
            {this.utility.inputGenerator("Email:", "Daxil Edin", this.callbacks.textAreaCallback, "email")}
            {this.utility.inputGenerator("Telefon nömrəsi:", "Ən azı bir nömrə lazımdır", this.callbacks.phoneNumberCallback, "phone1", { phone: true })}
            {this.utility.inputGenerator("", "Ikinci nömrə", this.callbacks.phoneNumberCallback, "phone2", { phone: true, novalidation: true })}
            {this.utility.inputGenerator("", "Üçüncü nömrə", this.callbacks.phoneNumberCallback, "phone3", { phone: true, novalidation: true })}
            {this.utility.inputGenerator("", "Dördüncü nömrə", this.callbacks.phoneNumberCallback, "phone4", { phone: true, novalidation: true })}

            <div className="radioGroup">
                {this.utility.checkBoxGenerator("Wp var?", this.callbacks.checkboxCallback, "isWp", true)}

            </div>

        </div>
    </>)
}


export const HtmlFilter = function HtmlFilter() {
    let newType = this.state.types.find(w => w.id == this.state.selected.type);
    
    return (<>

        {this.utility.selectGenerator("Elan Növü:", this.state.types, "type", this.state.selected.type, this.callbacks.commonCallback)}

        {this.utility.radioGenerator("Cinsiyyət:", newType?.employeeIsGirl, 2, this.callbacks.ownerCallback, "gender", this.state.gender)}


        {this.utility.selectGenerator("İş Sahəsi:", this.state.category, "category", this.state.selected.category, this.callbacks.commonCallback, { subname: this.state.subcategory, subnameTitle: "title", search: true })}
        {this.utility.rangeİnputGenerator("Maaş:", "minWageFilter", "maxWageFilter", this.callbacks.numberCallback, newType?.companyName)}
        {this.utility.rangeİnputGenerator("Yaş aralığı:", "minAgeFilter", "maxAgeFilter", this.callbacks.numberCallback, newType?.companyName, { min: 16, max: 65 })}
        {this.utility.selectGenerator("Təhsil səviyyəsi:", this.state.educationList, "educationLevel", this.state.selected.educationLevel, this.callbacks.commonCallback, { visibility: newType?.educationId })}
        {this.utility.selectGenerator("İş Təcrübəsi:", this.state.practices, "practiceDuration", this.state.selected.practiceDuration, this.callbacks.commonCallback, { visibility: newType?.practiceId })}
        {this.utility.selectGenerator("Şəhər:", this.state.cityList, "city", this.state.selected.city, this.callbacks.commonCallback, { sort: true, swapItem: [5] })}

        {this.utility.selectGenerator("Paylaşma Tarixi:", this.state.sharedDate, "sharedDate", this.state.selected.sharedDate, this.callbacks.commonCallback, { selectAll: true })}


    </>)
}