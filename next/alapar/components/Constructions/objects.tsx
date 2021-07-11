export interface Currency{
    id: number,
    name: string
}

export interface City{
    id: number,
    name: string
}

export interface Metro{
    id: number,
    name: string
}

export interface Region{
    id: number,
    name: string,
    villages: Array<Village>
}

export interface Village{
    id: number,
    name: string
}

export interface SharedDate{
    id: number,
    name: string
}

export interface ImageState{
    previewVisible: boolean,
    previewImage: string,
    previewTitle: string,
    fileList: Array<any>
}
