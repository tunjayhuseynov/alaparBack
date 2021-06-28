import { Component } from 'react'
import Utilities from '@/utilities';
import Callbacks from '@/callbacks';
import * as URL from '@/Constructions/const';
import Form from '@/Constructions/form';

class Add extends Component {
    constructor(props) {
        super(props)
 
        this.utility = new Utilities(this)
        this.callbacks = new Callbacks(this)

        this.state = {
            ...this.utility.getImageState,
            url: URL.PRIVATE_IMAGE,
            submitUrl: URL.PRIVATE_SUBMIT,
            selected: {
                category: null,
                clothesGender: null,
                clothesTypes: null,
                type: null,
                isNew: null,
                hasDelivery: null,
                title: null,
                price: null,
                currency: 1,
                aboutInfo: null,
                city: null,

                name: null,
                email: null,
                phone: null,
                isWp: null,
                isCall: null,
            },
            categoryList: null,
            clothesGendersList: null,
            clothesTypesList: null,
            typeList: null,
            hasNew: null,
            hasDelivery: null,
            currencyList: null,
            cityList: null,

        }

        if (this.props.filter) {
            this.state.categoryList = this.props.filter.category;
            this.state.currencyList = this.props.filter.currency;
            this.state.cityList = this.props.filter.cities

        }

    }

    render() {
        return (
            <Form childstate={this}>
                <div className={'part'}>
                    {this.utility.selectGenerator("Kateqoriya:", this.state.categoryList, "category", this.state.selected.category, this.callbacks.privateCategoryCallback)}
                    {this.utility.selectGenerator("Geyim Tipi:", this.state.clothesGendersList, "clothesGender", this.state.selected.clothesGender, this.callbacks.clothesGenderCallback)}
                    {this.utility.selectGenerator("Geyim Növü:", this.state.clothesTypesList, "clothesTypes", this.state.selected.clothesTypes, this.callbacks.commonCallback)}
                    {this.utility.selectGenerator("Malın Növü:", this.state.typeList, "type", this.state.selected.type, this.callbacks.commonCallback)}
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
                {this.utility.header("Əlaqə", "basliq")}
                    {this.utility.inputGenerator("Adınız:", "Daxil Edin", this.callbacks.textAreaCallback, "name")}
                    {this.utility.inputGenerator("E-mail:", "Daxil Edin", this.callbacks.textAreaCallback, "email")}
                    {this.utility.inputGenerator("Telefon:", "Daxil Edin", this.callbacks.phoneNumberCallback, "phone", { phone: true })}
                    <div className="radioGroup">
                        {this.utility.checkBoxGenerator("Zəng üçün", this.callbacks.checkboxCallback, "isCall", true)}
                        {this.utility.checkBoxGenerator("Wp üçün", this.callbacks.checkboxCallback, "isWp", true)}

                    </div>
                </div>

            </Form>
        )
    }
}

export async function getStaticProps() {
    const res = await fetch(URL.PRIVATE_FORM)
    const filter = await res.json()
    return {
        props: {
            filter,
        },
    }
}

export default Add;