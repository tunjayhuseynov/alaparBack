import Utilities from "@/utilities"
// import { add } from "pages/[pagename]/add/index"
import { useMemo, useState } from "react"
import { Animal } from "./state"
import { CheckboxInput, NumberInput, SelectInput, TextAreaInput, TextInput } from 'inputs'
import { Currency } from "hooks/Types"

export interface IDbAnimal {
    data: {
        name: string;
        genera?: { name: string }[]
        type?: { name: string }[]
    }[]
}

export const HtmlAdd = function HtmlAdd({ data, cities }: { data: IDbAnimal, cities: { name: string }[] }) {
    const utility = useMemo(() => new Utilities(), [])

    const [category, setCategory] = useState<{ name: string, value: string }>()
    const genera = data.data.find(s => s.name === category.name)?.genera
    const type = data.data.find(s => s.name === category.name)?.type

    return (<>
        <div className={'part'}>
            <SelectInput label="Kateqoriya" options={data.data.map((e) => ({ name: e.name, value: e.name }))} name="category" required={true} change={setCategory} />
            {genera && <SelectInput label="Cins" options={genera.map((e) => ({ name: e.name, value: e.name }))} name="genera" required={true} />}
            {type && <SelectInput label="Elan Növü" options={type.map((e) => ({ name: e.name, value: e.name }))} name="type" required={true} />}
            <div className={'radioGroup'}>
                <CheckboxInput label="Çatdırılma var" name="hasDelivery" />
            </div>
            <TextInput label="Elanın Adı" placeholder="Daxil Edin" name="title" />
            <NumberInput label="Qiymət" placeholder="Daxil Edin" name="price" min={1} addonAfter={{
                name: "currency",
                value: Object.values(Currency).map(e => e)
            }} />
            <SelectInput label="Şəhər" options={cities.map((e) => ({ name: e.name, value: e.name }))} name="city" required={true} />
            <TextAreaInput label="Məlumat" placeholder="Ən azı 100 hərfdən ibarət olmalıdır" name="about" />
            {/* {utility.imageUploadGenerator(this.state.fileList, this.state.previewVisible, this.state.previewTitle, this.state.previewImage, this.state.url)} */}

        </div>
        <div className="part">
            {utility.header("ƏLAQƏ MƏLUMATLAR", "basliq")}
            <TextInput label="Adınız" placeholder="Daxil Edin" name="name" />
            <TextInput label="E-mail" placeholder="Daxil Edin" name="email" />
            <TextInput label="Telefon" placeholder="Daxil Edin" name="phone" phone={true} />
            <div className="radioGroup">
                <CheckboxInput label="Zəng üçün" name="isCall" />
                <CheckboxInput label="Wp üçün" name="isWp" />
            </div>
        </div>
    </>)
}

// export const HtmlFilter = function HtmlFilter(this: React.Component<{}, Animal> & InstanceType<typeof add>) {
//     const utility = useMemo(() => new Utilities(), [])

//     return (<>
//         {utility.selectGenerator("Kateqoriya:", this.state.categoryList, "category", this.state.selected.category, this.callbacks.animalCategoryCallback, { categorySave: true })}
//         {utility.selectGenerator("Cins:", this.state.generaList, "generaList", this.state.selected.generaList, this.callbacks.multipleCallback, { multiple: true })}
//         {utility.selectGenerator("Elan Növü:", this.state.typeList, "type", this.state.selected.type, this.callbacks.commonCallback)}
//         <div className={'radioGroup'}>
//             {utility.checkBoxGenerator("Çatdırılma var", this.callbacks.checkboxCallback, "hasDelivery", true, { makeBlock: true })}
//         </div>
//         {utility.rangeİnputGenerator("Qiymət:", "minPrice", "maxPrice", this.callbacks.numberCallback, true)}
//         {utility.selectGenerator("Şəhər:", this.state.cityList, "city", this.state.selected.city, this.callbacks.commonCallback, { sort: true, swapItem: [5] })}

//         {utility.selectGenerator("Paylaşma Tarixi:", this.state.sharedDate, "sharedDate", this.state.selected.sharedDate, this.callbacks.commonCallback, { selectAll: true })}

//     </>)
// }