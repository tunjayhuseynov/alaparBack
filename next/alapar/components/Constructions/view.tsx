import { ImageView } from "./objects";

interface User {
    id: number;
    publicId: string;
    name: string;
    email: string;
    role: string;
    accountType: string;
    status: string;
    walletId: number;
    businessAccountId: number;
    businessAccount: BusinessAccount
}

interface BusinessAccount {

}

export interface CommonView {
    id: number,
    statusId: number,
    statusName: string,
    packageId: number,
    packageName: string,
    modifiedDate: string,
    fromDate: string;
    tillDate: string,
    viewed: number,
    userId: number;
    discount: number,
    images: Array<ImageView>,
    logId: number,

}