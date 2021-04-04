import { Component } from 'react'
import Utilities from '@/utilities';
import Callbacks from '@/callbacks';

class Add extends Component {
    constructor(props) {
        super(props)
        console.log(this.props.filter)

        this.utility = new Utilities(this)
        this.callbacks = new Callbacks(this)

        this.state = {
            ...this.utility.getImageState,
            url: "http://192.168.1.107:5566/api/auto/image",
            submitUrl: "http://192.168.1.107:5566/api/auto/Add",
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
            ]

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
        }

    }

    render() {
        return (
            <div id={'addSection'}>
                <div className={'container'}>
                    <div className={'row'}>
                        <div className={'col first'}>
                            <div className={'customCol'}>
                                <div className={'part'}>
                                    {this.utility.header("Əsas", "basliq")}
                                    {this.utility.selectGenerator("Marka:", this.state.markList, "mark", this.state.selected.mark, this.callbacks.markCallback, { search: true })}
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
                                    {this.utility.numberGenerator("Buraxılış ili:", "Daxil Edin", this.callbacks.numberCallback, "year", this.state.year)}
                                    {this.utility.numberGenerator("Yürüş (km):", "Daxil Edin", this.callbacks.numberCallback, "mileage", this.state.mileage)}
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
                                    {this.utility.inputGenerator("Telefon:", "Daxil Edin", this.callbacks.textAreaCallback, "phone")}
                                    <div className="radioGroup">
                                        {this.utility.checkBoxGenerator("Zəng üçün", this.callbacks.checkboxCallback, "isCall", true)}
                                        {this.utility.checkBoxGenerator("Wp üçün", this.callbacks.checkboxCallback, "isWp", true)}

                                    </div>
                                    <div className={"button"}>
                                        <a onClick={this.utility.submitClick} valId="addSection" link={this.state.submitUrl}>Elave et</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'col second'}>
                            <div className={'customCol'}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export async function getStaticProps() {
    const res = await fetch('http://192.168.1.107:5566/api/auto/Form')
    const filter = await res.json()
    return {
        props: {
            filter,
        },
    }
}

export default Add;