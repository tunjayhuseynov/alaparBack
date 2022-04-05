import { Form, InputNumber, Select } from 'antd'
import React from 'react'

type Props = {
    label: string, name: string, min?: number, max?: number, defaultValue?: number, placeholder?: string, nocommo?: boolean, required?: boolean, addonAfter?: {
        name: string,
        value: string | string[]
    }
}

export default function NumberInput({ name, label, min = 0, max = Number.MAX_SAFE_INTEGER, defaultValue, placeholder, nocommo = false, required = false, addonAfter }: Props) {
    const extras = {}
    if (placeholder) extras["placeholder"] = placeholder;
    if (defaultValue) extras["defaultValue"] = defaultValue;
    if (addonAfter) {
        if (typeof addonAfter.value === "string") {
            extras["addonAfter"] = addonAfter.value;
        } else {
            extras["addonAfter"] = <Form.Item name={addonAfter.name} noStyle>
                <Select defaultValue={addonAfter.value[0]}>
                    {addonAfter.value.map((w, i) => <Select.Option key={w} value={w}>{w}</Select.Option>)}
                </Select>
            </Form.Item>
        }
    }


    let formatter = !nocommo ? value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',') : value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, '');
    let parser = (value: string) => parseFloat(`${value}`.replace(/\$\s?|(,*)/g, '').slice(0, 14))

    return <>
        <Form.Item label={label} name={name} required={required}>
            <InputNumber
                {...extras}
                style={{ verticalAlign: 'middle', borderBottomRightRadius: 0, borderTopRightRadius: 0 }}
                name={name}
                min={min}
                max={max}
                inputMode="decimal"
                className={'flex-grow inputnumber'}
                formatter={formatter}
                parser={parser}
            />
        </Form.Item>
    </>
}
