import { Component } from "react";
import { Form, Input, Button, Checkbox } from 'antd';
import { REGISTER } from '@/Constructions/const'
import Link from "next/link";
import { withRouter, NextRouter  } from 'next/router'

interface Props{
    router: NextRouter;
}

class Register extends Component<Props,{}> {
    constructor(params) {
        super(params);

    }

    onFinish = async (values: any) => {
        console.log(values)
        const req = await fetch(REGISTER, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(values)
        })


        if(req.ok){
            this.props.router.push('/profile')
        }
    };

    onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    formItemLayout = {
        labelCol: {
            xs: { span: 12 },
            md: { span: 10 },
        },
        wrapperCol: {
            xs: { span: 23, offset: 1 },
            md: { span: 14 },
        },
    };
    tailFormItemLayout = {
        wrapperCol: {
            xs: {
                span: 24,
                offset: 0,
            },
            sm: {
                span: 16,
                offset: 8,
            },
        },
    };
    render() {
        return (
            <div className="relative w-full h-full">
                <Link href={'/login'}>
                    <div className="absolute right-5 top-5 py-4 px-8 bg-white border rounded-md cursor-pointer">
                        <div className="white font-semibold ">
                            Daxil Ol
                        </div>
                    </div>
                </Link>
                <div className="w-full h-full bg-gradient-to-r from-skyblue via-blue to-pink animate-gradient-x">
                    <div className="w-[80%] md:w-[40%] h-[25rem] translate-y-1/2 mx-auto bg-white flex flex-col gap-5 items-center justify-center">
                        <h1 className="font-semibold text-4xl">Qeydiyyat</h1>
                        <Form
                            {...this.formItemLayout}
                            initialValues={{ remember: true }}
                            onFinish={this.onFinish}
                            onFinishFailed={this.onFinishFailed}
                            autoComplete="off"
                        >
                            <Form.Item
                                label="Ad"
                                name="name"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="E-poçt"
                                name="email"
                                rules={[{ required: true, type: 'email', message: 'Please input your email!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Şifrə"
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item
                                name="confirm"
                                label="Şifrəni Təkrarla"
                                dependencies={['password']}
                                hasFeedback
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please confirm your password!',
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject(new Error('Şifrələr eyni deyil!'));
                                        },
                                    }),
                                ]}
                            >
                                <Input type="password"/>
                            </Form.Item>

                            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                <Button type="primary" htmlType="submit">
                                    İrəli
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>

                </div>
            </div>)
    }


}


export async function getStaticProps(context) {
    return {
        props: {
            layout: false
        }, // will be passed to the page component as props
    }
}

export default withRouter(Register);