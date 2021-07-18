//ts-check
import { ANIMAL_FILTER_CONVERTER } from '@/Animal/object';
import { HtmlAdd as AnimalHtml, HtmlFilter as AnimalHtmlFilter } from '@/Animal/content';
import { Animal_State } from '@/Animal/state';
import { HtmlAdd as AutoHtml, HtmlFilter as AutoHtmlFilter} from '@/Auto/content';
import { AUTO_FILTER_CONVERTER } from '@/Auto/object';
import { Auto_State } from '@/Auto/state';
import { HtmlAdd as BinaHtml, HtmlFilter as BinaHtmlFilter} from '@/Bina/content';
import { BINA_FILTER_CONVERTER } from '@/Bina/object';
import { Bina_State } from '@/Bina/state';
import { HtmlAdd as ElectroHtml, HtmlFilter as ElectroHtmlFilter} from '@/Electro/content';
import { ELECTRO_FILTER_CONVERTER } from '@/Electro/object';
import { Electro_State } from '@/Electro/state';
import { HtmlAdd as HobbyHtml, HtmlFilter as HobbyHtmlFilter} from '@/Hobby/content';
import { HOBBY_FILTER_CONVERTER } from '@/Hobby/object';
import { Hobby_State } from '@/Hobby/state';
import { HtmlAdd as HomeHtml, HtmlFilter as HomeHtmlFilter} from '@/Home/content';
import { HOME_FILTER_CONVERTER } from '@/Home/object';
import { Home_State } from '@/Home/state';
import { HtmlAdd as JobHtml, HtmlFilter as JobHtmlFilter} from '@/Job/content';
import { JOB_FILTER_CONVERTER } from '@/Job/object';
import { Job_State } from '@/Job/state';
import { HtmlAdd as PrivateHtml, HtmlFilter as PrivateHtmlFilter} from '@/Private/content';
import { PRIVATE_FILTER_CONVERTER } from '@/Private/object';
import { Private_State } from '@/Private/state';
import { HtmlAdd as ChildHtml, HtmlFilter as ChildHtmlFilter } from '@/Child/content';
import { CHILD_FILTER_CONVERTER } from '@/Child/object';
import { Child_State } from '@/Child/state';
import { HtmlAdd as ServiceHtml, HtmlFilter as ServiceHtmlFilter} from '@/Service/content';
import { SERVICE_FILTER_CONVERTER } from '@/Service/object';
import { Service_State } from '@/Service/state';
import * as URL from '@/Constructions/const';

export const pagenames = {
    animal: "animal",
    auto: "auto",
    bina: "dasinmaz",
    electro: "electro",
    hobby: "hobby",
    home: "home",
    job: "job",
    private: "private",
    child: "child",
    service: "service"
}

export const pageprocess = {
    search: "search",
    add: "add",
}

const contentProcess = function contentProcess(comname, addHtml, searchHtml ){
    switch (comname) {
        case pageprocess.search:
            return searchHtml;
        case pageprocess.add:
            return addHtml;
        default:
            break;
    }
}


export const stateProcess = function stateProcess(pagename, comname){
    switch (pagename) {
        case pagenames.animal:
            this.filter = ANIMAL_FILTER_CONVERTER(this.props.filter)
            this.state = Animal_State(this.filter, this)
            this.html = contentProcess(comname, AnimalHtml, AnimalHtmlFilter).bind(this)
            break;

        case pagenames.auto:
            this.filter = AUTO_FILTER_CONVERTER(this.props.filter)
            this.state = Auto_State(this.filter, this)
            this.html = contentProcess(comname, AutoHtml, AutoHtmlFilter).bind(this)
            break;

        case pagenames.bina:
            this.filter = BINA_FILTER_CONVERTER(this.props.filter)
            this.state = Bina_State(this.filter, this)
            this.html = contentProcess(comname, BinaHtml, BinaHtmlFilter).bind(this)
            break;
        case pagenames.electro:
            this.filter = ELECTRO_FILTER_CONVERTER(this.props.filter)
            this.state = Electro_State(this.filter, this)
            this.html = contentProcess(comname, ElectroHtml, ElectroHtmlFilter).bind(this)
            break;
        case pagenames.hobby:
            this.filter = HOBBY_FILTER_CONVERTER(this.props.filter)
            this.state = Hobby_State(this.filter, this)
            this.html = contentProcess(comname, HobbyHtml, HobbyHtmlFilter).bind(this)
            break;
        case pagenames.home:
            this.filter = HOME_FILTER_CONVERTER(this.props.filter)
            this.state = Home_State(this.filter, this)
            this.html = contentProcess(comname, HomeHtml, HomeHtmlFilter).bind(this)
            break;
        case pagenames.job:
            this.filter = JOB_FILTER_CONVERTER(this.props.filter)
            this.state = Job_State(this.filter, this)
            this.html = contentProcess(comname, JobHtml, JobHtmlFilter).bind(this)
            break;
        case pagenames.private:
            this.filter = PRIVATE_FILTER_CONVERTER(this.props.filter)
            this.state = Private_State(this.filter, this)
            this.html = contentProcess(comname, PrivateHtml, PrivateHtmlFilter).bind(this)
            break;
        case pagenames.child:
            this.filter = CHILD_FILTER_CONVERTER(this.props.filter)
            this.state = Child_State(this.filter, this)
            this.html = contentProcess(comname, ChildHtml, ChildHtmlFilter).bind(this)
            break;
        case pagenames.service:
            this.filter = SERVICE_FILTER_CONVERTER(this.props.filter)
            this.state = Service_State(this.filter, this)
            this.html = contentProcess(comname, ServiceHtml, ServiceHtmlFilter).bind(this)
            break;
        default:
            break;
    }
};

export const InitFetch = function InitFetch(pagename, comname){
    switch (pagename) {
        case pagenames.animal:
            return contentProcess(comname, URL.ANIMAL_FORM, URL.ANIMAL_GET_FILTER);
        case pagenames.auto:
            return contentProcess(comname, URL.AUTO_FORM, URL.AUTO_GET_FILTER)
        case pagenames.bina:
            return contentProcess(comname, URL.BINA_FORM, URL.BINA_GET_FILTER)
        case pagenames.electro:
            return contentProcess(comname, URL.ELECTRO_FORM, URL.ELECTRO_GET_FILTER)
        case pagenames.hobby:
            return contentProcess(comname, URL.HOBBY_FORM, URL.HOBBY_GET_FILTER)
        case pagenames.home:
            return contentProcess(comname, URL.HOME_FORM, URL.HOME_GET_FILTER)
        case pagenames.job:
            return contentProcess(comname, URL.JOB_FORM, URL.JOB_GET_FILTER)
        case pagenames.private:
            return contentProcess(comname, URL.PRIVATE_FORM, URL.PRIVATE_GET_FILTER)
        case pagenames.child:
            return contentProcess(comname, URL.CHILD_FORM, URL.CHILD_GET_FILTER)
        case pagenames.service:
            return contentProcess(comname, URL.SERVICE_FORM, URL.SERVICE_GET_FILTER)
        default:
            break;
    }
}