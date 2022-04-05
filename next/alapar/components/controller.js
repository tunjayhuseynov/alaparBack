//ts-check
import { ANIMAL_FILTER_CONVERTER } from '@/Animal/object';
import { HtmlAdd as AnimalHtml, HtmlFilter as AnimalHtmlFilter } from '@/Animal/content';
import { Animal_State } from '@/Animal/state';
import { HtmlAdd as AutoHtml, HtmlFilter as AutoHtmlFilter } from '@/Auto/content';
import { AUTO_FILTER_CONVERTER } from '@/Auto/object';
import { Auto_State } from '@/Auto/state';
import { HtmlAdd as BinaHtml, HtmlFilter as BinaHtmlFilter } from '@/Bina/content';
import { BINA_FILTER_CONVERTER } from '@/Bina/object';
import { Bina_State } from '@/Bina/state';
import { HtmlAdd as ElectroHtml, HtmlFilter as ElectroHtmlFilter } from '@/Electro/content';
import { ELECTRO_FILTER_CONVERTER } from '@/Electro/object';
import { Electro_State } from '@/Electro/state';
import { HtmlAdd as HobbyHtml, HtmlFilter as HobbyHtmlFilter } from '@/Hobby/content';
import { HOBBY_FILTER_CONVERTER } from '@/Hobby/object';
import { Hobby_State } from '@/Hobby/state';
import { HtmlAdd as HomeHtml, HtmlFilter as HomeHtmlFilter } from '@/Home/content';
import { HOME_FILTER_CONVERTER } from '@/Home/object';
import { Home_State } from '@/Home/state';
import { HtmlAdd as JobHtml, HtmlFilter as JobHtmlFilter } from '@/Job/content';
import { JOB_FILTER_CONVERTER } from '@/Job/object';
import { Job_State } from '@/Job/state';
import { HtmlAdd as PrivateHtml, HtmlFilter as PrivateHtmlFilter } from '@/Private/content';
import { PRIVATE_FILTER_CONVERTER } from '@/Private/object';
import { Private_State } from '@/Private/state';
import { HtmlAdd as ChildHtml, HtmlFilter as ChildHtmlFilter } from '@/Child/content';
import { CHILD_FILTER_CONVERTER } from '@/Child/object';
import { Child_State } from '@/Child/state';
import { HtmlAdd as ServiceHtml, HtmlFilter as ServiceHtmlFilter } from '@/Service/content';
import { SERVICE_FILTER_CONVERTER } from '@/Service/object';
import { Service_State } from '@/Service/state';
import {Sites} from '@/Constructions/const';

export const pagenames = {
    bina: "dasinmaz",
    private: "private",
    auto: "auto",
    electro: "electro",
    job: "job",
    child: "child",
    service: "service",
    home: "home",
    animal: "animal",
    hobby: "hobby",
}

export const realNames = {
    bina: "Daşınmaz Əmlak",
    private: "Şəxsi Geyim və Əşyalar",
    auto: "Avtomobil və Maşınlar",
    electro: "Elektronik Əşyalar",
    job: "İş",
    child: "Uşaq Geyimi Və Əşyaları",
    service: "Xidmətlər Və Biznes Avadanlığı",
    home: "Ev və Bağ Əşyaları",
    animal: "Heyvan",
    hobby: "Hobby və Asudə",
}

export const labelNames = { 
    animal: { name: "Heyvanlar", mainColor: "#cc711f", colorName: "darkgreen", bg: "bg_animal.jpg", position: "0 50%", size: "cover" },
    auto: { name: "Nəqliyyat\nVasitələri", mainColor: "#fe2923", colorName: "darkred", bg: "bg_car.jpg", position: "0 68%", size: "cover" },
    dasinmaz: { name: "Daşınmaz\nƏmlak", mainColor: "#a16539", colorName: "brown", bg: "bg_dasinmaz.jpg", position: "0 15%", size: "cover" },
    electro: { name: "Elektronik", mainColor: "#2650ff", colorName: "", bg: "bg_electro.jpg", position: "0 60%", size: "cover" },
    hobby: { name: "Hobby və Asudə", mainColor: "#cf168c", colorName: "", bg: "bg_hobby.jpg", position: "0 55%", size: "cover" },
    home: { name: "Ev və Bağ Əşyaları", mainColor: "#2ab24e", colorName: "", bg: "bg_home.jpg", position: "0 70%", size: "cover" },
    job: { name: "İş Elanları", mainColor: "#069880", colorName: "", bg: "bg_job.jpg", position: "0 45%", size: "cover" },
    private: { name: "Şəxsi Geyim\nVə Əşyalar", mainColor: "#9924ff", colorName: "", bg: "bg_private.jpg", position: "0 30%", size: "cover" },
    child: { name: "Uşaq Aləmi", mainColor: "#f2a700", colorName: "", bg: "bg_child.jpg", position: "0 57%", size: "cover" },
    service: { name: "Xidmətlər\nVə Biznes\nAvadanlığı", mainColor: "#5479a3", colorName: "", bg: "bg_service.jpg", position: "0 45%", size: "cover" },
}

export const pageprocess = {
    filter: "filter",
    add: "add",
    show: "show",
    menu: "menu",
    edit: "edit",
    search: "search",
}

export const PackageAd = {
    Standart: 1,
    VIP: 2,
    Premium: 3,
}

export const StatusAd = {
    Pending: 1,
    Online: 2,
    Cancelled: 3,
    Closed: 4
}

const contentProcess = function contentProcess(comname, addHtml, filterHtml, showHtml, menuHtml, searchURL) {
    switch (comname) {
        case pageprocess.filter:
            return filterHtml;
        case pageprocess.add:
            return addHtml;
        case pageprocess.show:
            return showHtml;
        case pageprocess.menu:
            return menuHtml;
        case pageprocess.search:
            return searchURL;
        default:
            break;
    }
}


export const stateProcess = function stateProcess(pagename, comname) {
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

export const InitFetch = function InitFetch(pagename, comname) {
    console.log(pagename, comname)
    switch (pagename) {
        case pagenames.animal:
            return contentProcess(comname, Sites.animal.form, Sites.animal.getFilter, Sites.animal.get, Sites.animal.menu, Sites.animal.search);
        case pagenames.auto:
            return contentProcess(comname, Sites.auto.form, Sites.auto.getFilter, Sites.auto.get, Sites.auto.menu, Sites.auto.search)
        case pagenames.bina:
            return contentProcess(comname, Sites.bina.form, Sites.bina.getFilter, Sites.bina.get, Sites.bina.menu, Sites.bina.search)
        case pagenames.electro:
            return contentProcess(comname, Sites.electro.form, Sites.electro.getFilter, Sites.electro.get, Sites.electro.menu, Sites.electro.search)
        case pagenames.hobby:
            return contentProcess(comname, Sites.hobby.form, Sites.hobby.getFilter, Sites.hobby.get, Sites.hobby.menu, Sites.hobby.search)
        case pagenames.home:
            return contentProcess(comname, Sites.home.form, Sites.home.getFilter, Sites.home.get, Sites.home.menu, Sites.home.search)
        case pagenames.job:
            return contentProcess(comname, Sites.job.form, Sites.job.getFilter, Sites.job.get, Sites.job.menu, Sites.job.search)
        case pagenames.private:
            return contentProcess(comname, Sites.private.form, Sites.private.getFilter, Sites.private.get, Sites.private.menu, Sites.private.search)
        case pagenames.child:
            return contentProcess(comname, Sites.child.form, Sites.child.getFilter, Sites.child.get, Sites.child.menu, Sites.child.search)
        case pagenames.service:
            return contentProcess(comname, Sites.service.form, Sites.service.getFilter, Sites.service.get, Sites.service.menu, Sites.service.search)
        default:
            break;
    }
}