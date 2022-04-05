import { throws } from 'assert';
import Cookies from 'js-cookie'
import { send } from 'process';
import { ADD_WALLET_AMOUNT, GET_USER, GET_WALLET_AMOUNT, SET_PREMIUM, SET_DISCOUNT, SEND_MAIL_VERIFICATION, SET_RENEW, SET_LIMITLESS } from './Constructions/const';

export default function UserSdk() {
    return {
        async getUser() {
            const userCookie = Cookies.get("user");

            if (userCookie) {
                const req = await fetch(GET_USER)
                if (req.ok) {
                    return await req.json()
                }
                else {
                    throw "Unauthorization";
                }
            }
            throw "Unauthorization";
        },

        async getWalletAmount() {
            const userCookie = Cookies.get("user");

            if (userCookie) {
                const req = await fetch(GET_WALLET_AMOUNT)
                if (req.ok) {
                    return (await req.json()).amount
                }
                else {
                    throw "Unauthorization";
                }
            }
            throw "Unauthorization";
        },

        async increaseWalletAmount(amount: number) {
            const userCookie = Cookies.get("user");

            if (userCookie) {
                const req = await fetch(ADD_WALLET_AMOUNT + amount)
                if (req.ok) {
                    return (await req.json()).amount
                }
                else {
                    throw "Unauthorization";
                }
            }
            throw "Unauthorization";
        },


        async setPremiumToAd(id: number, name: string) {
            const userCookie = Cookies.get("user");

            if (userCookie) {
                const req = await fetch(SET_PREMIUM(id, name))
                if (req.ok) {
                    return req;
                }
                else {
                    throw "Unauthorization";
                }
            }
            throw "Unauthorization";
        },

        async setDiscount(id: number, discount: number, pagename: string) {
            const userCookie = Cookies.get("user");

            if (userCookie) {
                const req = await fetch(SET_DISCOUNT(id, discount, pagename))
                if (req.ok) {
                    return req;
                }
                else {
                    throw "Unauthorization";
                }
            }
            throw "Unauthorization";
        },

        async sendVerificationMail() {
            const userCookie = Cookies.get("user");

            if (userCookie) {
                const req = await fetch(SEND_MAIL_VERIFICATION(JSON.parse(userCookie)?.id))
                if (req.ok) {
                    return req;
                }
                else {
                    throw "Unauthorization";
                }
            }
            throw "Unauthorization";
        },

        async renewAd(id: number, pagename: string){
            const userCookie = Cookies.get("user");

            if (userCookie) {
                const req = await fetch(SET_RENEW(id, pagename))
                if (req.ok) {
                    return req;
                }
                else {
                    throw "Unauthorization";
                }
            }
            throw "Unauthorization";
        },

        async setLimitless(){
            const userCookie = Cookies.get("user");

            if (userCookie) {
                const req = await fetch(SET_LIMITLESS())
                if (req.ok) {
                    return req;
                }
                else {
                    throw req.status;
                }
            }
            throw "Unauthorization";
        }

    }
}