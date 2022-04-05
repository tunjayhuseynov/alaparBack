export interface CommonState {
	packageName: string;
	statusName: string;
	timestamp: number;

	about: string;
	currency: Currency;
	price: number;


	//Contact
	contactName: string;
	email: string;
	phone: string;
	isWp: boolean;
	isCall: boolean;
}

export enum Currency {
    AZN = 'AZN',
    USD = 'USD',
}


