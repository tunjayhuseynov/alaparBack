import { Component } from 'react'
import Utilities from '@/utilities';
import Callbacks from '@/callbacks';
import * as URL from '@/Constructions/const';
import Form from '@/Constructions/form';
import {Auto_State} from '@/Auto/state';
import {AUTO_FILTER_CONVERTER} from '@/Auto/object';



class Add extends Component {
    constructor(props) {
        super(props)

        this.utility = new Utilities(this)
        this.callbacks = new Callbacks(this)

        this.filter = AUTO_FILTER_CONVERTER(this.props.filter)
        this.state = {
            ...this.utility.getImageState,
            url: URL.AUTO_IMAGE,
            submitUrl: URL.AUTO_SUBMIT,
            ...Auto_State
        }

        if (this.props.filter) {
            this.state.markList = this.filter.mark;
            this.state.currencyList = this.filter.currencies;
            this.state.banList = this.filter.banTypes;
            this.state.colorList = this.filter.colors;
            this.state.fuelList = this.filter.fuels;
            this.state.cityList = this.filter.cities;
            this.state.transmitterList = this.filter.transmitters
            this.state.transmissionBoxList = this.filter.transmissionBoxs
            this.state.capacityList = [
                ...this.utility.range(50, 500, 50).map(w => { return { id: w, name: w } }),
                ...this.utility.range(600, 6500, 100).map(w => { return { id: w, name: w } }),
                ...this.utility.range(7000, 10000, 500).map(w => { return { id: w, name: w } }),
                ...this.utility.range(11000, 16000, 1000).map(w => { return { id: w, name: w } }),
            ]
        }

    }

    render() {
        return (
            <Form childstate={this}>
                <div className={'part'}>
                    {this.utility.header("Əsas", "basliq")}
                    {this.utility.selectGenerator("Marka:", this.state.markList, "mark", this.state.selected.mark, this.callbacks.autoMarkCallback, { search: true })}
                    {this.utility.selectGenerator("Model:", this.state.modelList, "model", this.state.selected.model, this.callbacks.commonCallback, { search: true, subname: this.state.modelSubList, subnameTitle: "title" })}
                    {this.utility.selectGenerator("Ban növü:", this.state.banList, "ban", this.state.selected.ban, this.callbacks.commonCallback)}
                    {this.utility.numberGenerator("Qiymət:", "Daxil Edin", this.callbacks.numberCallback, "price", true, 1, Number.MAX_VALUE, { addonAfterList: this.state.currencyList, addonAfterCallback: this.callbacks.commonCallback, addonName: "currency", addonValue: this.state.selected.currency })}
                    <div className={'radioGroup'}>
                        {this.utility.checkBoxGenerator("Kredit", this.callbacks.checkboxCallback, "kredit", this.state.kredit)}
                        {this.utility.checkBoxGenerator("Barter", this.callbacks.checkboxCallback, "barter", this.state.barter)}
                    </div>
                    {this.utility.textAreaGeneretor("Məlumat:", "Ən azı 100 hərfdən ibarət olmalıdır", this.callbacks.textAreaCallback, "aboutInfo")}
                    {this.utility.imageUploadGenerator(this.state.fileList, this.state.previewVisible, this.state.previewTitle, this.state.previewImage, this.state.url)}

                </div>
                <div className={'part'}>
                    {this.utility.header("Özəlliklər", "basliq")}
                    {this.utility.numberGenerator("Buraxılış ili:", "Daxil Edin", this.callbacks.numberCallback, "year", true)}
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
                    {this.utility.header("Əlaqə", "basliq")}
                    {this.utility.selectGenerator("Şəhər:", this.state.cityList, "city", this.state.selected.city, this.callbacks.commonCallback, { sort: true, swapItem: [5] })}
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
    const res = await fetch(URL.AUTO_FORM)
    const filter = await res.json()
    return {
        props: {
            filter,
        },
    }
}

export default Add;