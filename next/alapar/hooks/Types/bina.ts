import { CommonState } from '.';

export interface BinaState extends CommonState {
	category: string;
	city: string;
	region: string;
	village: string;
	metro: string;
	sellType: string;
	roomAmount: number;
	floor: number;
	buildingFloor: number;
	landAppointment: string;
	rentDuration: string;
	areaSize: number;
	temir: string;
	houseFloor: number;
	lat: number;
	lng: number;
	hamam: number;
	eyvan: boolean;
	lift: boolean;
	hovuz: boolean;
	qaz: boolean;
	su: boolean;
	isig: boolean;
	kanalizasiya: boolean;
	owner: boolean;
	metbex: boolean;
	qab: boolean;
	paltar: boolean;
	soyuducu: boolean;
	tv: boolean;
	kondicioner: boolean;
	internet: boolean;
	telefon: boolean;
	usag: boolean;
	heyvan: boolean;
	otagordaire: boolean;
	target: string;
	metroWay: string;
	metroDuration: number;
	secondAreaSize: number;
	customAdress: string;
	contract: string;
	propertySelling: string;

	nearSchool: boolean;
	nearBusstop: boolean;
	nearHospital: boolean;
	nearShop: boolean;
	nearKindigarden: boolean;
	nearMall: boolean;
	withstuffs: boolean;

	madeinHouse: boolean;
	centralHeatingSystem: boolean;
	parkingArea: boolean;
	cabelTv: boolean;
	pvcWindow: boolean;
	combi: boolean;
	garaj: boolean;

	nometro: boolean;
}
