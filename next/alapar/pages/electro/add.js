import { Component } from 'react'
import Utilities from '@/utilities';
import Callbacks from '@/callbacks';
import * as URL from '@/Constructions/const';
import Form from '@/Constructions/form'

class Add extends Component {
    constructor(props) {
        super(props)

        this.utility = new Utilities(this)
        this.callbacks = new Callbacks(this)

        this.state = {
            ...this.utility.getImageState,
            url: URL.ELECTRO_IMAGE,
            submitUrl: URL.ELECTRO_SUBMIT,
            colorUrl: URL.ELECTRO_COLOR,
            storageUrl: URL.ELECTRO_STORAGE,
            selected: {
                category: null,
                type: null,
                title: null,
                isNew: null,
                hasDelivery: null,
                price: null,
                currency: 1,
                about: null,
                operator: null,
                inputPhoneNumber: null,
                mark: null,
                model: null,
                color: null,
                storage: null,
                computerMark: null,
                //Contact
                city: null,
                name: null,
                email: null,
                phone: null,
                isWp: null,
                isCall: null,
            },
            cityList: null,
            categoryList: null,
            typeList: null,
            currencyList: null,
            operatorsList: [],
            markList: null,
            modelList: null,
            copmuterMarkList: null,
            colorList: null,
            storageList: null,
            type: false,
            mark: false,
            computerMark: false,
            operator: false,
            colorLoading: true,
            storageLoading: true

        }

        if (this.props.filter) {
            this.state.cityList = this.props.filter.cities;
            this.state.categoryList = this.props.filter.categories;
            this.state.currencyList = this.props.filter.currencies;
        }

    }

    render() {
        return (
            <Form childstate={this}>
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
                    </div>
                    {this.utility.textAreaGeneretor("Məlumat:", "Ən azı 100 hərfdən ibarət olmalıdır", this.callbacks.textAreaCallback, "about")}
                    {this.utility.imageUploadGenerator(this.state.fileList, this.state.previewVisible, this.state.previewTitle, this.state.previewImage, this.state.url)}

                </div>

                <div className="part">
                    {this.utility.header("Əlaqə", "basliq")}
                    {this.utility.selectGenerator("Şəhər:", this.state.cityList, "city", this.state.selected.city, this.callbacks.commonCallback, { sort: true, swapItem: [5] })}
                    {this.utility.inputGenerator("Adınız:", "Daxil Edin", this.callbacks.textAreaCallback, "name")}
                    {this.utility.inputGenerator("E-mail:", "Daxil Edin", this.callbacks.textAreaCallback, "email")}
                    {this.utility.inputGenerator("Telefon:", "Daxil Edin", this.callbacks.phoneNumberCallback, "phone", { phone: true })}
                    <div className="radioGroup">
                        {this.utility.checkBoxGenerator("Zəng üçün", this.callbacks.checkboxCallback, "isCall", true)}
                        {this.utility.checkBoxGenerator("Wp üçün", this.callbacks.checkboxCallback, "isWp", true)}

                    </div>
                    <div className={"button"}>
                        <a onClick={this.utility.submitClick} valId="addSection" link={this.state.submitUrl}>Elave et</a>
                    </div>
                </div>
            </Form>
        )
    }
}

export async function getStaticProps() {
    const res = await fetch(URL.ELECTRO_FORM)
    const filter = await res.json()
    return {
        props: {
            filter,
        },
    }
}

export default Add;