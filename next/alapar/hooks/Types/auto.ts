import { CommonState } from ".";

export interface AutoState extends CommonState {
	sellType: string; //
	rentDuration: string; //
	type: string;
	mark: string; //
	model: string; //
	ban: string; //
	kredit: boolean; //
	barter: boolean; //
	color: string; //
	power: number; //
	capacity: number; //
	fuel: number; //
	transmitter: string; //
	transmissionBox: string; //
	year: number; //
	mileage: number; //
	city: string; //

	//Chechboxs
	abs: boolean;
	yungulLehimDisk: boolean;
	lyuk: boolean;
	yagisSensor: boolean;
	merkeziQapanma: boolean;
	parkRadar: boolean;
	kondisioner: boolean;
	oturacaqIsitme: boolean;
	deriSalon: boolean;
	yanPerde: boolean;
	oturacaqVentilyasiya: boolean;
	ksenonLampa: boolean;
	arxaKamera: boolean;
	bortKomputer: boolean;
	esp: boolean;
	kruizKontrol: boolean;
	startStopSistemi: boolean;
}
