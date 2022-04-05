import { pagenames } from "@/controller";

export const base = 'http://192.168.0.152:3500';
export const primaryColor = '#E77328';


export const LOGIN = `${base}/api/auth/login`;
export const REGISTER = `${base}/api/auth/register`;
export const GET_USER = `${base}/api/user/get`;
export const GET_WALLET_AMOUNT = `${base}/api/user/wallet/amount`;
export const ADD_WALLET_AMOUNT = `${base}/api/user/wallet/amount/`;

type generalType = string | number;

export const GET_CONTACTS = (length: generalType) => `${base}/api/user/chat/contacts/0/${length}`;
export const GET_MORE_CONTACTS = (amount: generalType) => `${base}/api/user/chat/contacts/${amount}`;
export const GET_MESSAGES = (id: generalType) => `${base}/api/user/chat/${id}/messages`;
export const GET_MORE_MESSAGES = (id: generalType, amount: generalType) =>
	`${base}/api/user/chat/${id}/messages/${amount}`;

export const SEEN = (id: generalType) => `${base}/api/user/chat/${id}/messages/seen`;

export const GET_USER_PUBLIC = (publicID: generalType) => `${base}/api/user/chat/contact/${publicID}`;

export const SET_PREMIUM = (id: generalType, name: generalType) =>
	`${base}/api/${name}/payment/premiumactivation/${id}`;

export const SET_RENEW = (id: generalType, name: generalType) => `${base}/api/${name}/payment/renew/${id}`;
export const SET_DISCOUNT = (id: generalType, discount: generalType, pagename: generalType) =>
	`${base}/api/${pagename}/add/setdiscount/${id}/${discount}`;

export const SET_IPADRESS = (id: generalType, pagename: generalType) => `${base}/api/${pagename}/saveip/${id}`;
export const SEND_MAIL_VERIFICATION = (id: generalType) => `${base}/api/auth/sendagain/${id}`;
export const EDIT_VALUES = (id: generalType, pagename: generalType) => `${base}/api/${pagename}/getedit/${id}`;
export const SET_EDIT_AD = (id: generalType, pagename: generalType) => `${base}/api/${pagename}/edit/${id}`;
export const SET_LIMITLESS = () => `${base}/api/user/wallet/limitless`;

export const SET_TEMP_VIDEO = (pagename: generalType) => `${base}/api/${pagename}/TempVideo`;
export const SET_SAVE_STORY = (pagename: generalType) => `${base}/api/${pagename}/add/story`;
export const GET_USER_ADS = (pagename: generalType) => `${base}/api/${pagename}/user/ads`;
export const GET_STORY = (id: generalType, pagename: generalType) => `${base}/api/${pagename}/story/${id}`;
export const GET_STORIES = (pagename: generalType) => `${base}/api/${pagename}/stories`;

export const SET_TEMP_USER_IMG = () => `${base}/api/user/Image`;
export const GET_BUSINESS_TYPE = `${base}/api/user/businesstypes`;
export const GET_BUSINESS_PRICE = `${base}/api/user/businessprices`;
export const CREATE_BUSINESS = `${base}/api/user/business/create`;

export const Sites: ISITE = {
	bina: {
        name: pagenames.bina,
        submit: `${base}/api/bina/Add`,
        image: `${base}/api/bina/image`,
        form: `${base}/api/bina/Form`,
        getFilter: `${base}/api/bina/filter`,
        search: `${base}/api/bina/search`,
        menu: `${base}/api/bina/mainmenu2`,
        get: `${base}/api/bina/get/`,
        vips: `${base}/api/bina/vips/`,
    },
	private: {
        name: pagenames.private,
        submit: `${base}/api/private/Add`,
        image: `${base}/api/private/image`,
        form: `${base}/api/private/Form`,
        getFilter: `${base}/api/private/filter`,
        search: `${base}/api/private/search`,
        menu: `${base}/api/private/mainmenu2`,
        get: `${base}/api/private/get/`,
        vips: `${base}/api/private/vips/`,
    },
	auto: {
        name: pagenames.auto,
        submit: `${base}/api/auto/Add`,
        image: `${base}/api/auto/image`,
        form: `${base}/api/auto/Form`,
        getFilter: `${base}/api/auto/filter`,
        search: `${base}/api/auto/search`,
        menu: `${base}/api/auto/mainmenu2`,
        get: `${base}/api/auto/get/`,
        vips: `${base}/api/auto/vips/`,
    },
	electro: {
        name: pagenames.electro,
        color: `${base}/api/electro/color/`,
        storage:  `${base}/api/electro/storage/`,
        submit: `${base}/api/electro/Add`,
        image: `${base}/api/electro/image`,
        form: `${base}/api/electro/Form`,
        getFilter: `${base}/api/electro/filter`,
        search: `${base}/api/electro/search`,
        menu: `${base}/api/electro/mainmenu2`,
        get: `${base}/api/electro/get/`,
        vips: `${base}/api/electro/vips/`,
    },
	job: {
        name: pagenames.job,
        submit: `${base}/api/job/Add`,
        image: `${base}/api/job/image`,
        form: `${base}/api/job/Form`,
        getFilter: `${base}/api/job/filter`,
        search: `${base}/api/job/search`,
        menu: `${base}/api/job/mainmenu2`,
        get: `${base}/api/job/get/`,
        vips: `${base}/api/job/vips/`,
    },
	child: {
        name: pagenames.child,
        submit: `${base}/api/child/Add`,
        image: `${base}/api/child/image`,
        form: `${base}/api/child/Form`,
        getFilter: `${base}/api/child/filter`,
        search: `${base}/api/child/search`,
        menu: `${base}/api/child/mainmenu2`,
        get: `${base}/api/child/get/`,
        vips: `${base}/api/child/vips/`,
    },
	service: {
        name: pagenames.service,
        submit: `${base}/api/service/Add`,
        image: `${base}/api/service/image`,
        form: `${base}/api/service/Form`,
        getFilter: `${base}/api/service/filter`,
        search: `${base}/api/service/search`,
        menu: `${base}/api/service/mainmenu2`,
        get: `${base}/api/service/get/`,
        vips: `${base}/api/service/vips/`,
    },
	home: {
        name: pagenames.home,
        submit: `${base}/api/home/Add`,
        image: `${base}/api/home/image`,
        form: `${base}/api/home/Form`,
        getFilter: `${base}/api/home/filter`,
        search: `${base}/api/home/search`,
        menu: `${base}/api/home/mainmenu2`,
        get: `${base}/api/home/get/`,
        vips: `${base}/api/home/vips/`,
    },
	animal: {
        name: pagenames.animal,
        submit: `${base}/api/animal/Add`,
        image: `${base}/api/animal/image`,
        form: `${base}/api/animal/Form`,
        getFilter: `${base}/api/animal/filter`,
        search: `${base}/api/animal/search`,
        menu: `${base}/api/animal/mainmenu2`,
        get: `${base}/api/animal/get/`,
        vips: `${base}/api/animal/vips/`,
    },
	hobby: {
        name: pagenames.hobby,
        submit: `${base}/api/hobby/Add`,
        image: `${base}/api/hobby/image`,
        form: `${base}/api/hobby/Form`,
        getFilter: `${base}/api/hobby/filter`,
        search: `${base}/api/hobby/search`,
        menu: `${base}/api/hobby/mainmenu2`,
        get: `${base}/api/hobby/get/`,
        vips: `${base}/api/hobby/vips/`,
    }
};

interface ISITE {
	bina: ISiteDetail;
	private: ISiteDetail;
	auto: ISiteDetail;
	electro: ISiteDetail;
	job: ISiteDetail;
	child: ISiteDetail;
	service: ISiteDetail;
	home: ISiteDetail;
	animal: ISiteDetail;
	hobby: ISiteDetail;
}

export interface ISiteDetail {
    name: string;
    submit: string;
    image: string;
    form: string;
    getFilter: string;
    search: string;
    menu: string
    get: string;
    vips: string;
    color?: string;
    storage?: string;
}
