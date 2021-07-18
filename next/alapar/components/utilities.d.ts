declare class Utilities{
    constructor(th: any);

    constructor();

    header(title: string, classname: string) : ReactNode;

    range(start : number, end : number, step : number) : Array<number>;

    convertCategory2Sub(list : Array<object>, keyName: string) : Array<object>;

    divider(text: string, side: string): ReactNode;

    generateModal(htmlElements : ReactNode, visible : boolean, visibleName : string, { title }? : {title?: string}) : ReactNode;
    
    showError(text : string) : any; 

    inputGenerator(title : string, placeholder : string, callback : Function, state : string, { visibility, phone, novalidation }? : {visibility? : boolean | Array<any>, phone? : boolean, novalidation? : boolean}): ReactNode;

    numberGenerator(title : string, placeholder : string, callback : Function, name, visibility : boolean | number | string | Array<object>, min? : number, max? : number, { addonAfterList, addonAfterCallback, addonName, addonValue, addonAfterOnlyText }? : {addonAfterList? : Array<any>, addonAfterCallback? : Function, addonName? : string, addonValue? : string | number, addonAfterOnlyText?: string}): ReactNode;

    textAreaGeneretor(title : string, placeholder : string, callback : Function, name : string, { visibility }? : {visibility? : boolean}) : ReactNode;

    rangeİnputGenerator(title : string, minName : string, maxName : string, callback : Function, visibility : boolean | number, { min, max, step, addonAfterList, addonAfterCallback, addonName, addonValue, addonAfterOnlyText }? : {min?: number, max?: number, step? : number, addonAfterList? : Array<any>, addonAfterCallback? : Function, addonName? : string, addonValue? : string | number, addonAfterOnlyText?: string}) : ReactNode;

    selectGenerator(title : string, options : Array<object | string> | boolean, name : string, selected : any, callback : Function, { visibility, loading, search, noneed, sort, selectAll, subname, subnameTitle, swapItem, novalidation }? : {visibility? : boolean, loading? : boolean, search? : boolean, noneed? : boolean, sort? : boolean, selectAll? : boolean, subname? : Array<any>, subnameTitle? : string, swapItem? : Array<number>, novalidation? : boolean}) : ReactNode;

    checkBoxGenerator(title : string, callback : Function, name : string, visible : boolean, { multiple, makeBlock }? : {multiple? : Array<any>, makeBlock?: boolean}) : ReactNode;

    radioGenerator(title : string, values : Array<object> | boolean, defaultValue : number, callback : Function, name : string, secondValues? : Array<object>) : ReactNode;

    validation(id: string | number) : boolean;

    async submitClick(e : object) : void;

    imageUploadGenerator(fileList : Array<any>, previewVisible : boolean, previewTitle : string, previewImage : string, url : string) : ReactNode;

    getImageState : object;

    handleCancel() : void;

    async handlePreview(file : object) : void;

    async handleChange({ fileList, file } : {fileList : Array<object>, file : any}) : void;

    handleRotation(file : object, rotation : number) : void;

    async handleRemove (file : object) : void;

    googleMap(lat : number, lon : number, callback : Function, title : string, latName? : string, lanName? : string) : ReactNode;
}

export default Utilities;