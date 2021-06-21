import { Component } from 'react'
import * as types from '../../store/types'
import { connect } from 'react-redux';
import Utilities from '@/utilities'
import Callbacks from '@/callbacks';
import FilterLayout from '@/Layouts/filter'
import * as URL from '@/Layouts/const'

const mapStateToProps = (state) => {
    return {
        redux: state.redux
    };
}

class Filter extends Component {
    constructor(props) {
        super(props)

        this.utility = new Utilities(this);
        this.callbacks = new Callbacks(this);

        this.state = {
            ...this.utility.getImageState,
            url: URL.AUTO_IMAGE,
            submitUrl: URL.AUTO_SUBMIT,
            selected: {
                mark: null,
                model: null,
                ban: null,
                price: null,
                currency: 1,
                kredit: null,
                barter: null,
                aboutInfo: null,
                color: null,
                power: null,
                capacity: null,
                fuel: null,
                transmitter: null,
                transmissionBox: null,
                year: null,
                mileage: null,
                city: null,
                name: null,
                isCall: null,
                isWp: null,
                email: null,
                phone: null,
                //Chechboxs
                abs: null,
                yungulLehimDisk: null,
                lyuk: null,
                yagisSensor: null,
                merkeziQapanma: null,
                parkRadar: null,
                kondisioner: null,
                oturacaqIsitme: null,
                deriSalon: null,
                yanPerde: null,
                oturacaqVentilyasiya: null,
                ksenonLampa: null,
                arxaKamera: null,
                bortKomputer: null,
                esp: null,
                kruizKontrol: null,
                startStopSistemi: null,
                //Filter
                minPrice: null,
                maxPrice: null,
                minYear: null,
                maxYear: null,
                minMotorPower: null,
                maxMotorPower: null,
                sharedDate: null,
            },
            markList: null,
            modelList: null,
            currencyList: null,
            banList: null,
            colorList: null,
            fuelList: null,
            cityList: null,
            //end
            about: true,
            price: null,
            kredit: true,
            barter: true,
            power: true,
            capacityList: null,
            sharedDate: null,
            transmitterList: null,
            transmissionBoxList: null,
            year: true,
            mileage: true,
            modelSubList: null,
            checkboxList: [
                { title: "ABS", name: "abs" },
                { title: "Yüngül Lehmli Disklər", name: "yungulLehimDisk" },
                { title: "Lyuk", name: "lyuk" },
                { title: "Yağış Sensoru", name: "yagisSensor" },
                { title: "Mərkəzi Qapanma", name: "merkeziQapanma" },
                { title: "Park Radarl", name: "parkRadar" },
                { title: "Kondisioner", name: "kondisioner" },
                { title: "Oturacaqların İsidilməsi", name: "oturacaqIsitme" },
                { title: "Dəri Salon", name: "deriSalon" },
                { title: "Yan Pərdə", name: "yanPerde" },
                { title: "Oturacaqların Ventilyasiyası", name: "oturacaqVentilyasiya" },
                { title: "Ksenon Lampalar", name: "ksenonLampa" },
                { title: "Arxa Görüntü Kamerasi", name: "arxaKamera" },
                { title: "Bort Komputer", name: "bortKomputer" },
                { title: "ESP", name: "esp" },
                { title: "Kruiz Kontrol", name: "kruizKontrol" },
                { title: "Start-Stop Sistemi", name: "startStopSistemi" },
            ],
            extraVisible: false,

        }

        if (this.props.filter) {
            this.state.markList = this.props.filter.mark;
            this.state.currencyList = this.props.filter.currencies;
            this.state.banList = this.props.filter.banTypes;
            this.state.colorList = this.props.filter.colors;
            this.state.fuelList = this.props.filter.fuels;
            this.state.cityList = this.props.filter.cities;
            this.state.transmitterList = this.props.filter.transmitters
            this.state.transmissionBoxList = this.props.filter.transmissionBoxs
            this.state.capacityList = [
                ...this.utility.range(50, 500, 50).map(w => { return { id: w, name: w } }),
                ...this.utility.range(600, 6500, 100).map(w => { return { id: w, name: w } }),
                ...this.utility.range(7000, 10000, 500).map(w => { return { id: w, name: w } }),
                ...this.utility.range(11000, 16000, 1000).map(w => { return { id: w, name: w } }),
            ]
            this.state.sharedDate = this.props.filter.sharedDate
        }
    }

    componentDidUpdate = async (prevProps, prevState) => {
        if (prevState.selected !== this.state.selected) {
            let conn = await fetch(`${URL.AUTO_SEARCH}?s=${0}&t=${20}`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                mode: 'cors',
                body: JSON.stringify(this.state.selected)
            });
            let res = await conn.json();

            this.props.dispatch({ type: types.SAVE_FILTER, payload: res })
        }

    }

    extras = () => {
        return (
            <div className={'extraModel'}>
                <div className={'extraFlex'}>
                    <div>
                        {this.utility.selectGenerator("Yanacaq növü:", this.state.fuelList, "fuel", this.state.selected.fuel, this.callbacks.commonCallback)}
                        {this.utility.selectGenerator("Sürətlər qutusu:", this.state.transmissionBoxList, "transmissionBox", this.state.selected.transmissionBox, this.callbacks.commonCallback)}
                        {this.utility.selectGenerator("Ötürücü:", this.state.transmitterList, "transmitter", this.state.selected.transmitter, this.callbacks.commonCallback)}
                    </div>
                    <div>
                        {this.utility.selectGenerator("Rəng:", this.state.colorList, "color", this.state.selected.color, this.callbacks.commonCallback)}
                        {this.utility.selectGenerator("Mühərrikin həcmi (sm³):", this.state.capacityList, "capacity", this.state.selected.capacity, this.callbacks.commonCallback)}

                        {this.utility.rangeİnputGenerator("Mühərrikin gücü (a.g):", "minMotorPower", "maxMotorPower", this.callbacks.numberCallback, this.state.selected.mark)}

                    </div>

                </div>
                <div className={'radioGroup'}>
                    {this.state.checkboxList.map(w => this.utility.checkBoxGenerator(w.title, this.callbacks.checkboxCallback, w.name, true))}
                </div>
            </div>
        )
    }

    render() {
        return (
            <FilterLayout>
                    {this.utility.selectGenerator("Marka:", this.state.markList, "mark", this.state.selected.mark, this.callbacks.autoMarkCallback, { search: true })}
                    {this.utility.selectGenerator("Model:", this.state.modelList, "model", this.state.selected.model, this.callbacks.commonCallback, { selectAll: true, search: true, subname: this.state.modelSubList, subnameTitle: "title" })}
                    {this.utility.selectGenerator("Ban növü:", this.state.banList, "ban", this.state.selected.ban, this.callbacks.commonCallback, { selectAll: true})}
                    {this.utility.rangeİnputGenerator("Qiymət:", "minPrice", "maxPrice", this.callbacks.numberCallback, this.state.selected.mark, { addonAfterList: this.state.currencyList, addonAfterCallback: this.callbacks.commonCallback, addonName: "currency", addonValue: this.state.selected.currency })}
                    <div className={'radioGroup'}>
                        {this.utility.checkBoxGenerator("Kredit", this.callbacks.checkboxCallback, "kredit", this.state.kredit)}
                        {this.utility.checkBoxGenerator("Barter", this.callbacks.checkboxCallback, "barter", this.state.barter)}
                    </div>
                    {this.utility.rangeİnputGenerator("Buraxılış ili:", "minYear", "maxYear", this.callbacks.numberCallback, this.state.selected.mark)}

                    {this.utility.rangeİnputGenerator("Yürüş (km):", "minMileage", "maxMileage", this.callbacks.numberCallback, this.state.selected.mark)}

                    {this.utility.selectGenerator("Şəhər:", this.state.cityList, "city", this.state.selected.city, this.callbacks.commonCallback, { sort: true, swapItem: [5], selectAll: true })}

                    {this.utility.selectGenerator("Paylaşma Tarixi:", this.state.sharedDate, "sharedDate", this.state.selected.sharedDate, this.callbacks.commonCallback, { selectAll: true })}

                    {this.utility.generateModal(this.extras(), this.state.extraVisible, "extraVisible", { title: "Əlavələr" })}

                    <div className={'extraBtnParent'}>
                        <button className={'extraBtn'} onClick={() => { this.setState({ extraVisible: true }) }}>Əlavələr</button>
                    </div>
            </FilterLayout>)
    }
}

export default connect(mapStateToProps)(Filter);