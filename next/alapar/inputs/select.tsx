import { Form, Select } from 'antd'
import _ from 'lodash'
import { Dispatch, useMemo } from 'react';
const { Option, OptGroup } = Select;

type Props = {
    label: string,
    options: { name: string, value: string }[], name: string, selectAll?: boolean, noneed?: boolean, subname?: string, search?: boolean, extras?: {
        mode?: 'multiple',
        allowClear?: boolean,
        loading?: boolean
    },
    required?: boolean,
    change?: Dispatch<{ name: string, value: string }>
}

// There was filtername ! Check it later
// There was filterOption attribute ! Probably sort list 
export default function SelectInput({ label, options, name: inputName, selectAll = false, noneed = false, subname, search, extras, required = false, change = () => { } }: Props) {
    const subnameList = useMemo(() => {
        if (subname) {
            return _.groupBy(options, subname)
        }
    }, [])

    return (
        <Form.Item label={label} name={inputName} required={required}>
            <Select {...extras} onChange={change} showSearch={search} /*onSelect={callback} onDeselect={callback}*/ placeholder={"Seçin"} /*value={selected}*/ className={'w-full'}>
                {selectAll && <Option key={"Hamısı"} value={null}>Hamısı</Option>}
                {noneed ? <Option key={"hecbiri"} value={""}>Heç Biri</Option> : null}
                {subname && options?.filter(w => !(w[subname]))?.map((w, i) => <Option key={w.value} value={w.value}>{w.name}</Option>)}
                {subname ? Object.entries(subnameList).map(([key, value], i) => <OptGroup key={key} label={key}>

                    {value.map((d, q) => <Option key={d.value} value={d.name}>{d.name}</Option>)}

                </OptGroup>) : options?.map((w, i) => <Option key={w.value} value={w.value}>{w.name}</Option>)
                }
            </Select>
        </Form.Item>
    )
}
