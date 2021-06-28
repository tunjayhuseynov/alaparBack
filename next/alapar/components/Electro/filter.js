import { Component } from 'react'
import * as types from '../../store/types'
import { connect } from 'react-redux';
import Utilities from '@/utilities'
import Callbacks from '@/callbacks';
import FilterLayout from '@/Constructions/filter'
import * as URL from '@/Constructions/const'

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

                //filter
                minPrice: null,
                maxPrice: null,
                sharedDate: null,

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
            storageLoading: true,
            sharedDate: null,


        }

        if (this.props.filter) {
            this.state.cityList = this.props.filter.cities;
            this.state.categoryList = this.props.filter.categories;
            this.state.currencyList = this.props.filter.currencies;
            this.state.sharedDate = this.props.filter.sharedDate

        }
    }

    componentDidUpdate = async (prevProps, prevState) => {
        if (prevState.selected !== this.state.selected) {
            let conn = await fetch(`${URL.ELECTRO_SEARCH}?s=${0}&t=${20}`, {
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

    }

    render() {
        return (
            <FilterLayout>
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
                </div>

                {this.utility.selectGenerator("Paylaşma Tarixi:", this.state.sharedDate, "sharedDate", this.state.selected.sharedDate, this.callbacks.commonCallback, { selectAll: true })}

            </FilterLayout>
        )
    }
}

export default connect(mapStateToProps)(Filter);