import { Form, Input } from 'antd';
import { useState } from 'react';

type Props = { label: string, name: string, placeholder: string, defaultValue?: string, required?: boolean, phone?: boolean }

export default function TextInput({ label, name, placeholder, defaultValue, required = false, phone = false }: Props) {
    const [text, setText] = useState(defaultValue || '')
    const extras = {}
    if (placeholder) extras["placeholder"] = placeholder;
    if (defaultValue) extras["defaultValue"] = defaultValue;
    if (phone) {
        extras["value"] = text; 
        extras["onChange"] = (v) => {
            setText(v.target.value.slice(0, 15).replace(/[^0-9]/g, '').split("").reduce(phoneConverter, '').replace(/[- \(\)]{1,2}$/g, "").split("").reduce((a, c) => a + c, ''))
        }
    }
    return (
        <Form.Item label={label} name={name} required={required}>
            <Input
                {...extras}
                name={name}
                allowClear
            />
        </Form.Item>
    )
}

const phoneConverter = (a, c, i) => {
    if (i == 0) a += '('
    if (i == 2) return a + c + ') '
    if (i == 5) return a + c + '-'
    if (i == 7) return a + c + '-'
    return a + c
}
