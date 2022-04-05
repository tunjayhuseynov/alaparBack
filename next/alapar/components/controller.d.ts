interface LabelItem {
	name: string;
	mainColor: string;
	colorName: string;
	bg: string;
	position: string;
	size: string;
}

declare const labelNames: {
	[name: string]: LabelItem;
};
