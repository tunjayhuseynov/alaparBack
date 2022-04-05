import { Component, useContext, useEffect } from "react";
import { Form, Input, Button, Checkbox } from 'antd';
import { LOGIN } from '@/Constructions/const'
import Link from "next/link";
import { withRouter, NextRouter } from 'next/router'
import { Alert } from 'antd';
import {MainContext} from 'pages/_app'

interface Props {
    router: NextRouter;
}
const Login = (props: Props)=> {
    const onFinish = async (values: any) => {
   
        const req = await fetch(LOGIN, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(values)
        })

        if (req.ok) {
            props.router.push('/profile')
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

        return (
            <div className="relative w-full h-full ">
                <Link href={'/login/register'}>
                    <div className="absolute right-5 top-5 py-4 px-8 bg-white border rounded-md cursor-pointer">
                        <div className="white font-semibold ">
                            Qeydiyyat
                        </div>
                    </div>
                </Link>
                <div className="w-full h-full bg-gradient-to-r from-skyblue via-blue to-pink animate-gradient-x">
                    <div className="w-[80%] md:w-[40%] h-[25rem] translate-y-1/2 mx-auto bg-white flex flex-col gap-5 items-center justify-center">
                        <h1 className="font-semibold text-4xl">Daxil Ol</h1>
                        <Alert className={`${props?.router?.query?.r === "1"? null: 'hidden'}`} message="Elan və Hekayə Əlavə Etmək Üçün Sistemə Daxil Olun" type="warning" />
                        <Form
                            name="basic"
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 16 }}
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <Form.Item
                                label="E-poçt"
                                name="email"
                                rules={[{ required: true, type: 'email', message: 'Please input your username!' }]}
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

                            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                                <Checkbox>Məni Xatırla</Checkbox>
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


export async function getStaticProps(context) {
    return {
        props: {
            layout: false
        }, // will be passed to the page component as props
    }
}

export default withRouter(Login);