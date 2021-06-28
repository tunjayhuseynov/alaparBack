import { Component } from 'react'
import * as types from '../../store/types'
import { connect } from 'react-redux';
import Utilities from '@/utilities'
import Callbacks from '@/callbacks';
import * as URL from '@/Constructions/const';
import FilterLayout from '@/Constructions/filter'

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
            url: URL.HOBBY_IMAGE,
            submitUrl: URL.HOBBY_SUBMIT,
            selected: {
                category: null,
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

                maxPrice: null,
                minPrice: null,
            },
            categoryList: null,
            typeList: null,
            currencyList: null,
            cityList: null,
            isNew: false,
            hasDelivery: false

        }

        if (this.props.filter) {
            this.state.categoryList = this.props.filter.category;
            this.state.currencyList = this.props.filter.currency;
            this.state.cityList = this.props.filter.cities
            this.state.sharedDate = this.props.filter.sharedDate
        }

    }

    componentDidUpdate = async (prevProps, prevState) => {
        if (prevState.selected !== this.state.selected) {
            let conn = await fetch(`${URL.HOBBY_SEARCH}?s=${0}&t=${20}`, {
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
                {this.utility.selectGenerator("Kateqoriya:", this.state.categoryList, "category", this.state.selected.category, this.callbacks.hobbyCategoryCallback)}
                {this.utility.selectGenerator("Malın Növü:", this.state.typeList, "type", this.state.selected.type, this.callbacks.commonCallback)}
                <div className={'radioGroup'}>
                    {this.utility.checkBoxGenerator("Yeni", this.callbacks.checkboxCallback, "isNew", this.state.isNew, { makeBlock: true })}
                    {this.utility.checkBoxGenerator("Çatdırılma var", this.callbacks.checkboxCallback, "hasDelivery", this.state.hasDelivery, { makeBlock: true })}
                </div>
                {this.utility.rangeİnputGenerator("Qiymət:", "minPrice", "maxPrice", this.callbacks.numberCallback, true)}

                {this.utility.selectGenerator("Şəhər:", this.state.cityList, "city", this.state.selected.city, this.callbacks.commonCallback, { sort: true, swapItem: [5] })}

                {this.utility.selectGenerator("Paylaşma Tarixi:", this.state.sharedDate, "sharedDate", this.state.selected.sharedDate, this.callbacks.commonCallback, { selectAll: true })}

            </FilterLayout>
        )
    }
}

export default connect(mapStateToProps)(Filter);