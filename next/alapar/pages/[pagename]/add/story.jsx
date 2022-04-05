import { pagenames, labelNames } from '@/controller'
import { Form, Input, Button, Checkbox, Upload, Select } from 'antd';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import { GET_USER_ADS, SET_SAVE_STORY, SET_TEMP_VIDEO } from '@/Constructions/const';
import {useEffect, useState} from 'react'

function Story({ apiPagename }) {

    const [values, setValues] = useState([]);

    const onFinish = async (values) => {
        console.log('Success:', values);
        const body = {
            title: values?.title,
            description: values?.description,
            link: values?.link,
            video: values?.video[0]?.response?.fileName,
            AdId: values?.AdId,
        }

        const req = await fetch(SET_SAVE_STORY(apiPagename), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
              },
            body: JSON.stringify(body)
        })
        const res = await req.json();
        if(req.ok){
            console.log(res)
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    useEffect(async ()=>{
        const req = await fetch(GET_USER_ADS(apiPagename))
        const res = await req.json()
        if(req.ok){
            setValues(res?.map(w=> { return {label: `${w?.categoryName} - ${w?.villageName || w?.regionName || w?.customAdress || w?.targetName}`, value: w?.id}}))
        }
    },[])

    return <>
        <div className="grid grid-cols-3">
            <div className="col-span-2 px-5 py-5">
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Başlıq"
                        name="title"
                        rules={[{ required: true, message: 'Başlıq Yazın' }]}
                    >
                        <Input />
                    </Form.Item>


                    <Form.Item
                        label="Ətraflı Məlumat"
                        name="description"
                        rules={[{ required: true, message: 'Ətraflı Məlumat Yazın' }]}
                    >
                        <Input.TextArea rows="5" />
                    </Form.Item>

                    <Form.Item
                        label="Paylaşım Linki"
                        name="link"
                        rules={[{ required: false}]}
                    >
                        <Input placeholder="Hekayənizdə Link Paylaşa Bilərsiniz" />
                    </Form.Item>

                    <Form.Item name="AdId" label="Elanınız" rules={[{ required: false }]}>
                        <Select options={values} onChange={(e) => console.log(e)} placeholder="İstədiyiniz Elanınızı Seçə Bilərsiniz"/>
                    </Form.Item>

                    <Form.Item label="15 Saniyəlik Video" rules={[{ required: true, message: 'Video Yüklənməlidir' }]}>
                        <Form.Item name="video" valuePropName="fileList" getValueFromEvent={normFile} rules={[{ required: true, message: 'Video Yüklənməlidir' }]}>
                            <Upload.Dragger name="video" action={SET_TEMP_VIDEO(apiPagename)} maxCount={1}>
                                <p className="ant-upload-drag-icon">
                                    <InboxOutlined />
                                </p>
                                <p className="ant-upload-text">Yalnızca Bir Video Yüləyə Bilərsiniz</p>
                                <p className="ant-upload-hint">Dəstəklənən Formatlar: AV1, MKV, Mp4</p>
                            </Upload.Dragger>
                        </Form.Item>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Göndər
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <div></div>
            <div>

            </div>
        </div>
    </>
}


export default Story;



export async function getStaticProps(context) {
    let pagename = context.params.pagename.toLowerCase();

    return {
        props: {
            pagename: pagename,
            apiPagename: Object.keys(pagenames)[Object.values(pagenames).indexOf(pagename.toLowerCase())],
            color: labelNames[pagename]?.mainColor,
        },
    }
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { pagename: pagenames.animal } },
            { params: { pagename: pagenames.auto } },
            { params: { pagename: pagenames.bina } },
            { params: { pagename: pagenames.child } },
            { params: { pagename: pagenames.electro } },
            { params: { pagename: pagenames.hobby } },
            { params: { pagename: pagenames.home } },
            { params: { pagename: pagenames.job } },
            { params: { pagename: pagenames.private } },
            { params: { pagename: pagenames.service } },
        ],
        fallback: false // See the "fallback" section below
    };
}