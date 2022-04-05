import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Form, Input, Button, Select, Upload, Timeline, TimePicker, Alert, Switch, message } from 'antd';
import { RegularMap } from '@/utilities'
import { InboxOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { SET_TEMP_USER_IMG, CREATE_BUSINESS, GET_BUSINESS_TYPE, GET_BUSINESS_PRICE } from '@/Constructions/const'
import { phoneConverter } from '@/utilities'
import { realNames } from '@/controller'

const BusinessCreate = ({ types, prices }) => {
    const router = useRouter()
    const [form] = Form.useForm()
    const [selectedType, setSelectedType] = useState(null)
    const [mapEnable, setMapEnable] = useState(true)
    const [coordinate, setCoordinate] = useState({ lat: null, lan: null })
    const [weekday, setWeekday] = useState({ start: null, end: null })
    const [saturday, setSaturday] = useState({ start: null, end: null })
    const [sunday, setSunday] = useState({ start: null, end: null })
    const [info, setInfo] = useState(null)

    useEffect(() => {
        if (mapEnable == false) {
            setCoordinate({ lat: null, lan: null })
        }
    }, [mapEnable])

    const map = (w) => {
        setCoordinate({
            lat: w.latLng.lat(),
            lan: w.latLng.lng()
        })
        form.setFieldsValue({
            map: {
                lat: w.latLng.lat(),
                lan: w.latLng.lng()
            }
        })

    }

    useEffect(() => {
        form.setFieldsValue({
            date: {
                weekday,
                saturday,
                sunday
            }
        })
    }, [weekday, saturday, sunday])


    const onFinish = async (values) => {
        const body = {
            Name: values.name,
            BusinessTypeId: values.businessTypeId,
            Description: values.description,
            Address: values.address,
            WeekdayStart: values.date.weekday.start,
            WeekdayEnd: values.date.weekday.end,
            SaturdayStart: values.date.saturday.start,
            SaturdayEnd: values.date.saturday.end,
            SundayStart: values.date.sunday.start,
            SundayEnd: values.date.sunday.end,
            LogoName: values.images[0].response.fileName,
            Lat: values.map.lat,
            Lon: values.map.lan,
            Phone1: values.phone1?.replace(/[^0-9]/g, ''),
            Phone2: values.phone2?.replace(/[^0-9]/g, ''),
            Phone3: values.phone3?.replace(/[^0-9]/g, ''),
            Duration: values.paymentDuration,
        }
        const req = await fetch(CREATE_BUSINESS, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(body)
        })

        if (req.ok) {
            router.push('/profile/business')
        } else if (req.status == 416) {
            message.error("Yetərsiz Balans")
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    const phone = (v) => {
        v.target.value = v.target.value.slice(0, 15).replace(/[^0-9]/g, '').split("").reduce(phoneConverter, '');

        v.target.value = v.target.value.replace(/[- \(\)]{1,2}$/g, "").split("").reduce((a, c) => a + c, '')
    }

    return <>
        <Form
            name="basic"
            form={form}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Biznesin Adı"
                name="name"
                rules={[{ required: true, message: 'Zəhmət olmasa ad daxil edin' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item label="Tipi" name="businessTypeId"
                rules={[{ required: true, message: 'Zəhmət olmasa tip seçin' }, () => ({
                    validator: () => new Promise((resolve, reject) => {
                        console.log(selectedType)
                        if (selectedType) return resolve("")

                        return reject()
                    })
                })]}
            >
                <Select onSelect={(value) => {
                    form.setFieldsValue({
                        businessTypeId: value,
                    })
                    setSelectedType(value)
                    const type = types?.find(w => w.id == value)
                    const res = []
                    Object.entries(realNames).forEach(element => {
                        if (type[element[0]]) {
                            res.push(element[1])
                        }
                    });

                    setInfo(`Bu Tip Yalnızca Bu Bölmələrdə Biznes Elanı kimi Göstəriləcək:${res.reduce((a, c, i) => `${a}\n${i + 1}.${c}`, '')}`)
                }} value={selectedType}>
                    {types?.map(w => <Select.Option value={w?.id}>{w?.name}</Select.Option>)}
                </Select>
                {info ? <Alert className={'whitespace-pre-wrap'} message={`${info}`} type="info" /> : null}
            </Form.Item>

            <Form.Item
                label="Haqqında"
                name="description"
                rules={[{ required: true, message: 'Zəhmət olmasa biznes haqqında məlumat daxil edin' }]}
            >
                <Input.TextArea rows={5} />
            </Form.Item>

            <Form.Item
                label="Ünvan"
                name="address"
            >
                <Input />
            </Form.Item>

            <Form.Item tooltip={<span>Şənbə və Bazar Boş Buraxıla Bilər</span>} label="İş Qrafiki" name="date" rules={[{ required: true, message: 'Please' }, () => ({
                validator: () => new Promise((resolve, reject) => {
                    if (weekday.start && weekday.end) return resolve("");

                    return reject(new Error("Zəhmət olmasa Həftə İçi Qrafiki Seçin"))
                })
            })]}>
                <Timeline mode='alternate' className='py-3'>
                    <Timeline.Item position="right" color="#d3eeca">Həftə İçi</Timeline.Item>

                    <Timeline.Item position="left" dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}><TimePicker.RangePicker format={'HH:mm'} minuteStep={5}
                        onChange={(e) => setWeekday({ start: e[0].format('H:mm'), end: e[1].format('H:mm') })} />
                    </Timeline.Item>

                    <Timeline.Item position="right" color="#B0E0E6">Şənbə</Timeline.Item>

                    <Timeline.Item position="left" dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}><TimePicker.RangePicker format={'HH:mm'} minuteStep={5}
                        onChange={(e) => setSaturday({ start: e[0].format('H:mm'), end: e[1].format('H:mm') })} />
                    </Timeline.Item>

                    <Timeline.Item position="right" color="#66cdaa">Bazar</Timeline.Item>

                    <Timeline.Item position="left" dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}><TimePicker.RangePicker format={'HH:mm'} minuteStep={5}
                        onChange={(e) => setSunday({ start: e[0].format('H:mm'), end: e[1].format('H:mm') })} />
                    </Timeline.Item>

                </Timeline>
            </Form.Item>


            <Form.Item label="Marka Şəkli" rules={[{ required: true, message: 'Zəhmət olmasa Markanızın Şəklini Əlavə Edin' }]}>
                <Form.Item name="images" valuePropName="fileList" rules={[{ required: true, message: 'Zəhmət olmasa Markanızın Şəklini Əlavə Edin' }]} getValueFromEvent={normFile} >
                    <Upload.Dragger name="images" action={SET_TEMP_USER_IMG()} maxCount={1}>
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                    </Upload.Dragger>
                </Form.Item>
            </Form.Item>

            <Form.Item label="Xəritə" name="map">
                <div className="py-1"><Switch defaultChecked onChange={(value) => { setMapEnable(value); }} /></div>
                {mapEnable && <div className={"subitem py-5"} style={{ height: '100%' }}>
                    <div className={'item'}>
                        <RegularMap
                            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD6Vz_IKnktPC_TLl9DAmm_BpxokzQ4fIQ"
                            loadingElement={<div style={{ height: '100%' }} />}
                            containerElement={<div className={`h-[50vh] w-full`} />}
                            mapElement={<div className={'h-full'} />}
                            info={{ lat: coordinate.lat ?? 40.409264, lan: coordinate.lan ?? 49.867092, callback: map }}
                        />
                    </div>
                </div>}
            </Form.Item>

            <Form.Item
                name="phone1"
                label="Nömrə"
                rules={[
                    {
                        required: true,
                        message: 'Zəhmət olmasa telefon nömrəsi daxil edin',
                    },
                ]}
            >
                <Input
                    style={{
                        width: '100%',
                    }}
                    placeholder="(0xx) xxx-xx-xx"
                    inputMode="numeric"
                    onInput={phone}
                />
            </Form.Item>

            <Form.Item
                name="phone2"
                label="2. Nömrə"
            >
                <Input
                    style={{
                        width: '100%',
                    }}
                    placeholder="(0xx) xxx-xx-xx"
                    inputMode="numeric"
                    onInput={phone}
                />
            </Form.Item>

            <Form.Item
                name="phone3"
                label="3. Nömrə"
            >
                <Input
                    style={{
                        width: '100%',
                    }}
                    placeholder="(0xx) xxx-xx-xx"
                    inputMode="numeric"
                    onInput={phone}
                />
            </Form.Item>

            <Form.Item label="Müddət və Qiymət" name="paymentDuration"
                rules={[{ required: true, message: 'Zəhmət olmasa müddət və qiyməti seçin' }]}
            >
                <Select onSelect={(value) => {

                }}>
                    {prices?.map(w => <Select.Option value={w.id}>{w.name} - {w.price} Azn</Select.Option>)}
                </Select>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Keç
                </Button>
            </Form.Item>
        </Form>
    </>
}

BusinessCreate.getProfileLayout = true

export default BusinessCreate;


export async function getStaticProps(context) {
    const req = await fetch(GET_BUSINESS_TYPE)
    const res = await req.json();
    const req2 = await fetch(GET_BUSINESS_PRICE)
    const res2 = await req2.json();
    return {
        props: {
            types: res,
            prices: res2,
        },
    }
}