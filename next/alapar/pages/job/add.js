import { Component } from 'react'
import Utilities from '@/utilities';
import Callbacks from '@/callbacks';
import Form from '@/Constructions/form';
import * as URL from '@/Constructions/const';

class Add extends Component {
    constructor(props) {
        super(props)

        this.utility = new Utilities(this)
        this.callbacks = new Callbacks(this)

        this.state = {
            ...this.utility.getImageState,
            url: URL.JOB_IMAGE,
            submitUrl: URL.JOB_SUBMIT,
            selected: {
                type: 1,
                educationLevel: null,
                gender: null,
                category: null,
                employeeName: null,
                employeeSurname: null,
                employeeEducation: null,
                practiceDuration: null,
                employeePractice: null,
                role: null,
                minAge: null,
                maxAge: null,
                city: null,
                minWage: null,
                maxWage: null,
                employeeAboutExtra: null,
                employeeSkills: null,
                contactName: null,
                companyName: null,
                aboutReq: null,
                aboutJob: null,
                phone1: null,
                phone2: null,
                phone3: null,
                phone4: null,
                isWp: null,
                email: null,
            },
            types: null,
            category: null,
            subcategory: null,
            practices: null,
            cityList: null,
            educationList: null,
            gender: [{ id: 0, name: "Kişi" }, { id: 1, name: "Qadın" }]

        }

        if (this.props.filter) {
            this.state.types = this.props.filter.types;
            this.state.practices = this.props.filter.practices;
            this.state.educationLevel = this.props.filter.educations;
            this.state.category = this.props.filter.categories;
            this.state.subcategory = this.utility.convertCategory2Sub(this.props.filter.categories, "title");
            this.state.cityList = this.props.filter.cities
        }

    }

    render() {
        let newType = this.state.types.find(w => w.id == this.state.selected.type);
        return (
            <Form childstate={this}>
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
            </Form>
        )
    }
}

export async function getStaticProps() {
    const res = await fetch(URL.JOB_FORM)
    const filter = await res.json()
    return {
        props: {
            filter,
        },
    }
}

export default Add;