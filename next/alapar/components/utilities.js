import { message, Tabs, Button, Upload, Modal, Select, Radio, Checkbox, InputNumber, Collapse, Input, Tooltip } from 'antd';
import { DndProvider, useDrag, useDrop, createDndContext } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import React from 'react'
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from "react-google-maps";
import { v4 as uuidv4 } from 'uuid'

const { TabPane } = Tabs;
const { Option, OptGroup } = Select;
const { TextArea } = Input;

import { PlusOutlined } from '@ant-design/icons';



function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}


function onChange(a, b, c) {
    console.log(a, b, c);
}

class Utilities {

    constructor(th) {
        this.th = th;
    }

    divider = (text, side = "left") => {


        return (
            <div className={'separator'}>{text}</div>)
    }

    showError = (text) => {
        message.error(text)
    }

    tabGenerator = (tabs, ...items) => {
        return (
            <Tabs
                onTabClick={(key, event) => this.th.setState({ activeKey: key })}
                activeKey={this.th.state.activeKey}
                centered
                tabPosition={'top'}
                animated
            >
                {items.map((w, k) => {
                    return (
                        <TabPane forceRender={true} tab={tabs[k]} key={`${k + 1}`}>
                            {w}
                            {k != items.length - 1 ?
                                <div className={'tabBtn'}>
                                    <a className={'btn'} onClick={() => this.th.setState({ activeKey: `${k + 2}` })}>Sonraki</a>
                                </div>
                                : null}
                        </TabPane>
                    )
                })}
            </Tabs>
        );
    }

    inputGenerator = (title, placeholder, callback, state) => {
        return (
            <div className={'subitem simpleInput'}>
                <div className={'item'}><label>{title}</label></div>
                <div className={'item'} validatename={state} displayname={title.replace(":", "")}>

                    <Input
                        className={'width'}
                        name={state}
                        placeholder={placeholder}
                        onKeyUp={callback} />
                </div>
            </div>
        )
    }

    numberGenerator = (title, placeholder, callback, name, visibility, min = 1, max = Number.MAX_VALUE, { addonAfterList = null, addonAfterCallback = null, addonName = null, addonValue = null, addonAfterOnlyText = null } = {}) => {
        if (!visibility) {

            this.th.state.selected[name] = null

            return null
        }
        return (
            <div className={'subitem numberInput'} validatename={name} displayname={title.replace(":", "")}>
                <div className={'item'}>
                    <label className={'title'}>{title}</label>
                </div>
                <div className={'item'}>
                    <InputNumber
                        style={{ verticalAlign: 'middle', borderBottomRightRadius: 0, borderTopRightRadius: 0 }}
                        name={name}
                        min={min}
                        max={max}
                        className={'width inputnumber'}
                        placeholder={placeholder}
                        formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        parser={value => `${value}`.replace(/\$\s?|(,*)/g, '')}
                        onKeyUp={callback}
                    />
                    {!addonAfterList ? null :
                        <div className="ant-input-group-addon" style={{ paddingTop: '2px', verticalAlign: 'middle', display: 'inline-table', lineHeight: '24px', height: '32px' }}>
                            <Select style={{ width: 120 }} value={addonValue} onSelect={addonAfterCallback} name={addonName}>
                                {addonAfterList.map((w, i) => <Option state={addonName} value={w.id}>{w.name}</Option>)}
                            </Select>
                        </div>
                    }
                    {!addonAfterOnlyText ? null :
                        <div className="ant-input-group-addon" style={{ paddingTop: '2px', verticalAlign: 'middle', display: 'inline-table', lineHeight: '24px', height: '32px' }}>
                         {addonAfterOnlyText}
                        </div>
                    }
                </div>
            </div>
        )
    }

    textAreaGeneretor = (title, placeholder, callback, name) => {
        return (
            <div className={'subitem textAreaInput'}>
                <div className={'item'}>
                    <label>{title}</label>
                </div>
                <div className={'item'} validatename={name} displayname={title.replace(":", "")}>
                    <TextArea
                        className={'width inputarea'}
                        name={name}
                        placeholder={placeholder}
                        autoSize={{ minRows: 5, maxRows: 12 }}
                        onKeyUp={callback}
                        maxLength={5000}
                    />
                </div>
            </div>
        )
    }

    priceİnputGenerator = (title, minName, maxName, min, step, Callback, visibility) => {
        if (!visibility) {

            this.th.state.selected[minName] = null
            this.th.state.selected[maxName] = null

            return null
        }
        return (
            <div className={'subitem priceInput'} validatename={minName} displayname={title.replace(":", "")}>
                <div className={'item'} validatename={maxName}><label>{title}</label></div>
                <div className={'item'}>
                    <InputNumber
                        placeholder={"Min."}
                        onBlur={Callback}
                        onInput={Callback}
                        min={min} step={step} name={minName}
                        formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        parser={value => value.replace(/\$\s?|(,*)/g, '')}
                    />
                -
                <InputNumber
                        placeholder={"Max."}
                        onBlur={Callback}
                        onInput={Callback}
                        min={min} step={step} name={maxName}
                        formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        parser={value => value.replace(/\$\s?|(,*)/g, '')}
                    />
                </div>
            </div>
        )
    }

    selectGenerator = (title, options, name, selected, callback, sort, selectAll, subname = null) => {
        if (!options || options.length < 1) {

            this.th.state.selected[name] = null

            return null
        }
        if (sort) {
            options.sort((a, b) => {
                let fa = a.name.toLowerCase()
                let fb = b.name.toLowerCase()

                if (fa < fb) return -1
                if (fa > fb) return 1
                return 0
            })
        }

        if (subname) {
            console.log(subname)
            return (
                <div className={'subitem selectInput'}>
                    <div className={'item'}><label>{title}</label></div>
                    <div className={'item'} validatename={name} displayname={title.replace(":", "")}>
                        <Select virtual={false} onSelect={callback} placeholder={"Seçin"} value={selected} name={name} className={'width'}>
                            {selectAll ? <Option state={name} value={0}>Hamısı</Option> : null}
                            {subname.map((w, i) => <OptGroup key={uuidv4()} label={w.name}>

                                {w.category.map((d, q) => <Option state={name} key={uuidv4()} value={d.id}>{d.name}</Option>)}


                            </OptGroup>)}
                        </Select>
                    </div>
                </div>

            )
        }

        return (<div className={'subitem selectInput'}>
            <div className={'item'}><label>{title}</label></div>
            <div className={'item'} validatename={name} displayname={title.replace(":", "")}>
                <Select virtual={false} onSelect={callback} placeholder={"Seçin"} value={selected} name={name} className={'width'}>
                    {selectAll ? <Option state={name} value={0}>Hamısı</Option> : null}
                    {options.map((w, i) => <Option state={name} key={new Date().getTime() + i} value={w.id}>{w.name}</Option>)}
                </Select>
            </div>
        </div>)
    }

    checkBoxGenerator = (title, callback, name, visible) => {
        if (!visible) {
            this.th.state.selected[name] = null
            return null
        }
        return (
            <div className={'subitem checkInput'} displayname={title.replace(":", "")}>
                <Checkbox state={name} name={name} onChange={callback}>{title}</Checkbox>
            </div>
        )
    }


    radioGenerator = (title, values, defaultValue, callback, name, secondValues) => {
        if (!values) return null
        return (
            <div className={"subitem radioInput"} validatename={name} displayname={title.replace(":", "")}>
                <label>{title}</label> <br />
                <Radio.Group onChange={callback} defaultValue={defaultValue} buttonStyle="solid">
                    {!secondValues ?
                        values.map((w, i) => <Radio.Button key={new Date().getTime() + i} value={w.id}>{w.name}</Radio.Button>) :
                        secondValues.map((w, i) => <Radio.Button key={new Date().getTime() + i} value={w.id}>{w.name}</Radio.Button>)}
                </Radio.Group>
            </div>
        )
    }

    /*

    IMAGE
    IMAGE
    IMAGE

    */


    DragableUploadListItem = ({ originNode, moveRow, file, fileList }) => {
        const type = 'DragableUploadList';
        const ref = React.useRef();
        const index = fileList.indexOf(file);
        const [{ isOver, dropClassName }, drop] = useDrop({
            accept: type,
            collect: monitor => {
                const { index: dragIndex } = monitor.getItem() || {};
                if (dragIndex === index) {
                    return {};
                }
                return {
                    isOver: monitor.isOver(),
                    dropClassName: dragIndex < index ? ' drop-over-downward' : ' drop-over-upward',
                };
            },
            drop: item => {
                moveRow(item.index, index);
            },
        });
        const [, drag] = useDrag({
            item: { type, index },
            collect: monitor => ({
                isDragging: monitor.isDragging(),
            }),
        });
        drop(drag(ref));
        const errorNode = (
            <Tooltip title="Upload Error" getPopupContainer={() => document.body}>
                {originNode.props.children}
            </Tooltip>
        );
        return (
            <div
                ref={ref}
                className={`ant-upload-draggable-list-item ${isOver ? dropClassName : ''}`}
                style={{ cursor: 'move' }}
            >
                {file.status === 'error' ? errorNode : originNode}
            </div>
        );
    };


    moveRow =
        (dragIndex, hoverIndex) => {
            let fileList = this.th.state.fileList;
            [fileList[dragIndex], fileList[hoverIndex]] = [fileList[hoverIndex], fileList[dragIndex]]
            this.th.setState({
                fileList: fileList
            })
            this.handleChange({ fileList: fileList })
        }


    manager = createDndContext(HTML5Backend);

    imageUploadGenerator = (fileList, previewVisible, previewTitle, previewImage) => {
        return (
            <div className={"subitem"}>
                <DndProvider manager={this.manager.dragDropManager}>
                    <Upload
                        action="http://192.168.1.107:5566/api/bina/image"
                        name={"images"}
                        multiple={true}
                        listType="picture-card"
                        fileList={fileList}
                        onPreview={this.handlePreview}
                        onChange={this.handleChange}
                        itemRender={(originNode, file, currFileList) => (
                            <this.DragableUploadListItem
                                originNode={originNode}
                                file={file}
                                fileList={currFileList}
                                moveRow={this.moveRow}
                            />
                        )}
                    >
                        {fileList.length >= 25 ? null : <div>
                            <PlusOutlined />
                            <div style={{ marginTop: 8 }}>Şəkil</div>
                        </div>}
                    </Upload>
                </DndProvider>
                <Modal
                    visible={previewVisible}
                    title={previewTitle}
                    footer={null}
                    onCancel={this.handleCancel}
                >
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
            </div>
        )
    }

    getImageState = {
        previewVisible: false,
        previewImage: '',
        previewTitle: '',
        fileList: []
    }

    handleCancel = () => this.th.setState({ previewVisible: false });

    handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        this.th.setState({
            previewImage: file.url || file.preview,
            previewVisible: true,
            previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
        });
    };

    handleChange = async ({ fileList }) => {
        this.th.setState({
            ...this.th.state,
            fileList: [...fileList],
            selected:
            {
                ...this.th.state.selected,
                images: [...fileList].filter(w => w.response).map(w => w.response.fileName)

            }
        })
    };

    /*
    END
    IMAGE
    IMAGE
    IMAGE

    */

    googleMap = (lat, lan, callback, title, latName, lanName) => {
        return (
            <div displayname={title.replace(":", "")} className={"subitem"} style={{ height: '100%', width: '50%' }}>
                <div className={'item'}>
                    <label>{title}</label>
                </div>
                <div className={'item'}>
                    <Button type="primary" onClick={() => { this.th.setState({ mapVisible: true }) }}>
                        Aç
                </Button>
                </div>
                <Modal title="Xəritə" visible={this.th.state.mapVisible} width={'50%'} footer={null} onCancel={() => { this.th.setState({ mapVisible: false }) }}>
                    <RegularMap
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD6Vz_IKnktPC_TLl9DAmm_BpxokzQ4fIQ"
                        loadingElement={<div style={loadingElementStyle} />}
                        containerElement={<div style={containerElementStyle} />}
                        mapElement={<div style={mapElementStyle} />}
                        info={{ lat: lat, lan: lan, callback: callback }}
                    />
                </Modal>

            </div>
        )
    }
}



export default Utilities;


const defaultOptions = { scrollwheel: false };

const RegularMap = withScriptjs(
    withGoogleMap(props => (
        <GoogleMap
            defaultZoom={12}
            defaultCenter={{ lat: +props.info.lat, lng: +props.info.lan }}
            defaultOptions={defaultOptions}
            onClick={props.info.callback}
            options={{ mapTypeControl: true, clickableIcons: false }}

        >
            <Marker position={{ lat: +props.info.lat, lng: +props.info.lan }} />
        </GoogleMap>
    ))
);

const loadingElementStyle = { height: '100%' };
const containerElementStyle = { height: '500px' };
const mapElementStyle = { height: '100%' };