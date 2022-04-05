import { CommonState } from ".";

export interface AnimalState extends CommonState {
	category: string;
	type: string;
	genera: string;
	hasDelivery: boolean;
	title: string;

	city: number;
}
