import { Component } from 'react'
import * as types from '../../store/types'
import { connect } from 'react-redux';
import Utilities from '@/utilities'
import Callbacks from '@/callbacks';
import * as URL from '@/Constructions/const';
import FilterLayout from '@/Constructions/filter'
import { Animal_State } from './state';
import { ANIMAL_FILTER_CONVERTER } from './object';

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

        this.filter = ANIMAL_FILTER_CONVERTER(this.props.filter)

        this.state = {
            ...this.utility.getImageState,
            url: URL.ANIMAL_IMAGE,
            submitUrl: URL.ANIMAL_SUBMIT,
            ...Animal_State

        }

        if (this.props.filter) {
            this.state.categoryList = this.filter.category;
            this.state.currencyList = this.filter.currency;
            this.state.cityList = this.filter.cities
            this.state.sharedDate = this.filter.sharedDate

        }

    }

    componentDidUpdate = async (prevProps, prevState) => {
        if (prevState.selected !== this.state.selected) {
            let conn = await fetch(`${URL.ANIMAL_SEARCH}?s=${0}&t=${20}`, {
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
                {this.utility.selectGenerator("Kateqoriya:", this.state.categoryList, "category", this.state.selected.category, this.callbacks.animalCategoryCallback)}
                {this.utility.selectGenerator("Cins:", this.state.generaList, "genera", this.state.selected.genera, this.callbacks.commonCallback)}
                {this.utility.selectGenerator("Elan Növü:", this.state.typeList, "type", this.state.selected.type, this.callbacks.commonCallback)}
                <div className={'radioGroup'}>
                    {this.utility.checkBoxGenerator("Çatdırılma var", this.callbacks.checkboxCallback, "hasDelivery", true, { makeBlock: true })}
                </div>
                {this.utility.rangeİnputGenerator("Qiymət:", "minPrice", "maxPrice", this.callbacks.numberCallback, true)}
                {this.utility.selectGenerator("Şəhər:", this.state.cityList, "city", this.state.selected.city, this.callbacks.commonCallback, { sort: true, swapItem: [5] })}

                {this.utility.selectGenerator("Paylaşma Tarixi:", this.state.sharedDate, "sharedDate", this.state.selected.sharedDate, this.callbacks.commonCallback, { selectAll: true })}

            </FilterLayout>
        )
    }
}

export default connect(mapStateToProps)(Filter);