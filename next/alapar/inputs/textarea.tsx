import { Form, Input } from 'antd';
const { TextArea } = Input;

type Props = { label: string, name: string, placeholder: string, defaultValue?: string, required?: boolean }

export default function TextAreaInput({ label, name, placeholder, defaultValue, required = false }: Props) {
    const extras = {}
    if (placeholder) extras["placeholder"] = placeholder;
    if (defaultValue) extras["defaultValue"] = defaultValue;

    return (
        <Form.Item label={label} name={name} required={required}>
            <TextArea
                {...extras}
                className={'width inputarea'}
                name={name}
                autoSize={{ minRows: 5, maxRows: 12 }}
                maxLength={5000}
            />
        </Form.Item>
    )
}
