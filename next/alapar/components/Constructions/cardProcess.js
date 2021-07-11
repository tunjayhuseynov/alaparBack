import Card from '@/Layouts/components/card'
import { v4 as uuidv4 } from 'uuid';
import { AiFillTag, AiFillBank } from 'react-icons/ai'
import { RiFilePaper2Line } from 'react-icons/ri'
import { BiArea } from 'react-icons/bi'

export const binaGenerator = (adList, category) => {
    let listArray = [];
    adList.forEach(element => {
        let title = `${element.villageName} qəsəbəsi`
        listArray.push(
            <Card key={uuidv4()} images={element.images} price={element.price} currency={element.currencyName} title={title}>
                <div className="flex-grow-1 flex flex-col text-base font-medium">
                    <div className="flex-grow-1"><AiFillTag className="inline" /> {element.categoryName}</div>
                    <div className="flex-grow-1"><BiArea className="inline" /> {element.areaSize} {category.areaUnit}</div>
                    <div className="flex-grow-1"><RiFilePaper2Line className="inline" /> {element.hasLicense ? "Çıxarış var" : "Çıxarış yoxdur"}</div>
                </div>
            </Card>
        )
    });

    return listArray;
}
