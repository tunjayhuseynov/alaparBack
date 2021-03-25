import ImageGallery from 'react-image-gallery';

class DataReader {
    constructor(th){
        this.th = th;
    }

    imageGallery = (images)=>{
        return(
            <div>
                <ImageGallery items={images}  showPlayButton={false}/>
            </div>
        )
    }
}

export default DataReader;