import { Component } from 'react'
import * as types from '../../store/types'
import { connect } from 'react-redux';
import Utilities from '@/utilities'
import Callbacks from '@/callbacks';
import * as URL from '@/Layouts/const';
import FilterLayout from '@/Layouts/filter'

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

                minAgeFilter: null,
                maxAgeFilter: null,
                minWageFilter: null,
                maxWageFilter: null,
                sharedDate: null,
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
            this.state.sharedDate = this.props.filter.sharedDate

        }
    }

    componentDidUpdate = async (prevProps, prevState) => {
        if (prevState.selected !== this.state.selected) {
            let conn = await fetch(`${URL.JOB_SEARCH}?s=${0}&t=${20}`, {
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
        let newType = this.state.types.find(w => w.id == this.state.selected.type);

        return (
            <FilterLayout>

                {this.utility.selectGenerator("Elan Növü:", this.state.types, "type", this.state.selected.type, this.callbacks.commonCallback)}

                {this.utility.radioGenerator("Cinsiyyət:", newType?.employeeIsGirl, 2, this.callbacks.ownerCallback, "gender", this.state.gender)}


                {this.utility.selectGenerator("İş Sahəsi:", this.state.category, "category", this.state.selected.category, this.callbacks.commonCallback, { subname: this.state.subcategory, subnameTitle: "title", search: true })}
                {this.utility.rangeİnputGenerator("Maaş:", "minWageFilter", "maxWageFilter", this.callbacks.numberCallback, newType?.companyName)}
                {this.utility.rangeİnputGenerator("Yaş aralığı:", "minAgeFilter", "maxAgeFilter", this.callbacks.numberCallback, newType?.companyName, { min: 16, max: 65 })}
                {this.utility.selectGenerator("Təhsil səviyyəsi:", this.state.educationList, "educationLevel", this.state.selected.educationLevel, this.callbacks.commonCallback, { visibility: newType?.educationId })}
                {this.utility.selectGenerator("İş Təcrübəsi:", this.state.practices, "practiceDuration", this.state.selected.practiceDuration, this.callbacks.commonCallback, { visibility: newType?.practiceId })}
                {this.utility.selectGenerator("Şəhər:", this.state.cityList, "city", this.state.selected.city, this.callbacks.commonCallback, { sort: true, swapItem: [5] })}

                {this.utility.selectGenerator("Paylaşma Tarixi:", this.state.sharedDate, "sharedDate", this.state.selected.sharedDate, this.callbacks.commonCallback, { selectAll: true })}

            </FilterLayout>
        )
    }
}

export default connect(mapStateToProps)(Filter);