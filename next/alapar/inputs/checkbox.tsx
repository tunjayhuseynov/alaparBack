import { Checkbox, Form } from 'antd'
import React from 'react'

type Props = { label: string, name: string, defaultValue?: string, required?: boolean }

export default function CheckboxInput({ name, required, label }: Props) {
    return (
        <Form.Item name={name} valuePropName="checked" required={required}>
            <Checkbox name={name}>{label}</Checkbox>
        </Form.Item>
    )
}
