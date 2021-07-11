import { message, Tabs, Button, Upload,  Modal, Select, Radio, Checkbox, InputNumber, Collapse, Input, Tooltip } from 'antd';
import { DndProvider, useDrag, useDrop, createDndContext } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import React from 'react'
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from "react-google-maps";
import { v4 as uuidv4 } from 'uuid'


const { Option, OptGroup } = Select;
const { TextArea } = Input;




function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

class Utilities {

    constructor(th) {
        this.th = th;
    }

    header = (title, classname) => {
        return (
            <div>
                <h3 className={classname}>{title}</h3>
            </div>

        )
    }
    range = (start, end, step = 1) => {
        const allNumbers = [start, end, step].every(Number.isFinite);

        if (!allNumbers) {
            throw new TypeError('range() expects only finite numbers as arguments.');
        }

        if (step <= 0) {
            throw new Error('step must be a number greater than 0.');
        }

        if (start > end) {
            step = -step;
        }

        const length = Math.floor(Math.abs((end - start) / step)) + 1;

        return Array.from(Array(length), (x, index) => start + index * step);
    }

    convertCategory2Sub = (list, keyName) => {
        return [...new Set(list.filter(w => w[keyName]).map((w) => w[keyName]))].map((w, i) => { return { name: w, category: list.filter(d => d[keyName] == w) } })
    }

    divider = (text, side = "left") => {


        return (
            <div className={'separator'}>{text}</div>)
    }

    generateModal = (htmlElements, visible, visibleName, { title = "" } = {}) => {
        let handleOk = () => {
            this.th.setState({ [visibleName]: false });
        };

        let handleCancel = () => {
            this.th.setState({ [visibleName]: false });
        };

        return (
            <Modal
                visible={visible}
                title={title}
                onOk={this.handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="submit" type="primary" onClick={handleOk}>
                        Tamam
                    </Button>,
                ]}>
                {htmlElements}
            </Modal>

        )
    }

    showError = (text) => {
        message.error(text)
    }


    inputGenerator = (title, placeholder, callback, state, { visibility = null, phone = null, novalidation = null } = {}) => {
        if ((Array.isArray(visibility) && visibility.length < 1) || visibility == false) {

            this.th.state.selected[state] = null

            return null
        }
        let val = {}
        if (novalidation == null) {
            val.validatename = state;
        }

        let obj = {}
        if (phone) {
            obj.onInput = (v) => {
                v.target.value = v.target.value.replace(/(?<=^.{15}).*/g, "").replace(/[^0-9]/g, '').split("").reduce((a, c, i) => {
                    if (i == 0) a += '('
                    if (i == 2) return a + c + ') '
                    if (i == 5) return a + c + '-'
                    if (i == 7) return a + c + '-'
                    return a + c
                }, '');

                v.target.value = v.target.value.replace(/[- \(\)]{1,2}$/g, "").split("").reduce((a, c) => a + c, '')

            }
        }

        return (
            <div className={'subitem simpleInput'}>
                <div className={'item'}><label>{title}</label></div>
                <div className={'item'} {...val} displayname={title.replace(":", "")}>

                    <Input
                        {...obj}
                        className={'w-full md:w-1/2'}
                        name={state}
                        placeholder={placeholder}
                        onKeyUp={callback} 
                        onBlur={this.th.callbacks.trimCallback}
                        />
                </div>
            </div>
        )
    }

    numberGenerator = (title, placeholder, callback, name, visibility, min = 1, max = Number.MAX_VALUE, { addonAfterList = null, addonAfterCallback = null, addonName = null, addonValue = null, addonAfterOnlyText = null } = {}) => {
        if (!visibility) {

            this.th.state.selected[name] = null

            return null
        }

        let formatter = value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        let parser = value => `${value}`.replace(/\$\s?|(,*)/g, '')


        return (
            <div className={'subitem numberInput'} validatename={name} displayname={title.replace(":", "")}>
                <div className={'item'}>
                    <label className={'title'}>{title}</label>
                </div>
                <div className={'item flex'}>
                    <InputNumber
                        style={{ verticalAlign: 'middle', borderBottomRightRadius: 0, borderTopRightRadius: 0 }}
                        name={name}
                        min={min}
                        max={max}
                        className={'w-full md:w-1/2 inputnumber'}
                        placeholder={placeholder}
                        formatter={formatter}
                        parser={parser}
                        onKeyUp={callback}
                    />
                    {!addonAfterList ? null :
                        <div className="ant-input-group-addon" style={{ paddingTop: '2px', verticalAlign: 'middle', display: 'inline-table', lineHeight: '24px', height: '32px' }}>
                            <Select value={addonValue} onSelect={addonAfterCallback} name={addonName}>
                                {addonAfterList.map((w, i) => <Option key={uuidv4()} state={addonName} value={w.id}>{w.name}</Option>)}
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

    textAreaGeneretor = (title, placeholder, callback, name, { visibility = null } = {}) => {
        if (visibility == false) {
            this.th.state.selected[name] = null

            return null
        }

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
                        onBlur={this.th.callbacks.trimCallback}
                    />
                </div>
            </div>
        )
    }

    rangeİnputGenerator = (title, minName, maxName, Callback, visibility, { min = Number.MIN_VALUE, max = Number.MAX_VALUE, step = 1, addonAfterList = null, addonAfterCallback = null, addonName = null, addonValue = null, addonAfterOnlyText = null } = {}) => {
        if (!visibility) {

            this.th.state.selected[minName] = null
            this.th.state.selected[maxName] = null

            return null
        }
        return (
            <div className={'subitem rangeInput'} displayname={title.replace(":", "")}>
                <div className={'item'} ><label>{title}</label></div>
                <div className={'item'}>
                    <InputNumber
                        style={{ verticalAlign: 'middle', borderBottomRightRadius: 0, borderTopRightRadius: 0 }}
                        placeholder={"Min."}
                        onKeyUp={Callback}
                        min={min} max={max} step={step} name={minName}
                        formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        parser={value => value.replace(/\$\s?|(,*)/g, '')}
                    />
                    -
                    <InputNumber
                        style={{ verticalAlign: 'middle', borderBottomRightRadius: 0, borderTopRightRadius: 0 }}
                        placeholder={"Max."}
                        onKeyUp={Callback}
                        min={min} max={max} step={step} name={maxName}
                        formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        parser={value => value.replace(/\$\s?|(,*)/g, '')}
                    />
                    {!addonAfterList ? null :
                        <div className="ant-input-group-addon" style={{ paddingTop: '2px', verticalAlign: 'middle', display: 'inline-table', lineHeight: '24px', height: '32px' }}>
                            <Select style={{ width: 120 }} value={addonValue} onSelect={addonAfterCallback} name={addonName}>
                                {addonAfterList.map((w, i) => <Option key={uuidv4()} state={addonName} value={w.id}>{w.name}</Option>)}
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

    selectGenerator = (title, options, name, selected, callback, { visibility = false, loading = null, search = false, sort = false, selectAll = false, subname = null, subnameTitle = null, swapItem = null, novalidation = null } = {}) => {
        if ((!options || options.length < 1) && !visibility) {

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
        if (swapItem) {
            swapItem.reverse().forEach((e) => {
                options.unshift(options.find(w => w.id == e))
                options.splice(options.lastIndexOf(options.find(w => w.id == e)), 1)
            })
        }

        let obj = {}
        if (loading) {
            obj.loading = true
        }
        if (novalidation == null) {
            obj.validatename = name;
        }

        if (subname) {
            return (
                <div className={'subitem selectInput'}>
                    <div className={'item'}><label>{title}</label></div>
                    <div className={'item'} displayname={title.replace(":", "")}>
                        <Select {...obj} filterOption={(input, option) => option?.children?.toLowerCase().indexOf(input.toLowerCase()) >= 0} showSearch={search} virtual={false} onSelect={callback} placeholder={"Seçin"} value={selected} name={name} className={'w-full md:w-1/2'}>
                            {selectAll ? <Option key={uuidv4()} state={name} value={null}>Hamısı</Option> : null}
                            {options?.filter(w => !(w[subnameTitle]))?.map((w, i) => <Option state={name} key={uuidv4()} value={w.id}>{w.name}</Option>)}
                            {subname?.map((w, i) => <OptGroup key={uuidv4()} label={w.name}>

                                {w.category.map((d, q) => <Option state={name} key={uuidv4()} value={d.id}>{d.name}</Option>)}

                            </OptGroup>)}
                        </Select>
                    </div>
                </div>

            )
        }

        return (<div className={'subitem selectInput'}>
            <div className={'item'}><label>{title}</label></div>
            <div className={'item'} displayname={title.replace(":", "")}>
                <Select {...obj} filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0} showSearch={search} virtual={false} onSelect={callback} placeholder={"Seçin"} value={selected} name={name} className={'w-full md:w-1/2'}>
                    {selectAll ? <Option key={uuidv4()} state={name} value={null}>Hamısı</Option> : null}
                    {options?.map((w, i) => <Option key={uuidv4()} state={name} value={w.id}>{w.name}</Option>)}
                </Select>
            </div>
        </div>)
    }

    checkBoxGenerator = (title, callback, name, visible, { multiple = null, makeBlock = null } = {}) => {
        if (!visible) {
            if (multiple) {
                multiple.forEach(w => {
                    this.th.state.selected[w.name] = null
                })

                return null
            }

            this.th.state.selected[name] = null
            return null
        }

        if (multiple) {
            return (
                <div className={`subitem checkInput ${makeBlock ? 'makeBlock' : ''}`} displayname={title.replace(":", "")}>
                    <div className={'item'}><label>{title}</label></div>
                    <div className={'item'}>
                        {multiple.map(w => <Checkbox key={uuidv4()} checked={this.th.state.selected[w.name]} state={w.name} name={w.name} onChange={callback}>{w.title}</Checkbox>
                        )}
                    </div>
                </div>
            )
        }

        return (
            <div className={`subitem checkInput ${makeBlock ? 'makeBlock' : ''}`} displayname={title.replace(":", "")}>
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

    //Validation 

    validation = (id) => {
        let inputs = document.querySelectorAll(`#${id} [validatename]`);
        let classes = ["border", "border-red"];
        let hasError = false

        for (let index = 0; index < inputs.length; index++) {
            if (!this.th.state.selected[inputs[index].getAttribute("validatename")]) {
                if (!hasError) { hasError = !hasError; }

                let text = `Məlumat Doldurulmayıb: ${inputs[index].getAttribute("displayname")}`
                this.showError(text)

                let ele = inputs[index].querySelector(".ant-select-selector") || inputs[index].querySelector("textarea") || inputs[index].querySelector("input");
                if (ele) {
                    ele.classList.add(...classes);
                    ele.onclick = (e) => { ele.classList.remove(...classes) }
                }
            }
        }

        if (this.th.state.selected.images == null || this.th.state.selected.images.length == 0) {
            let ele = document.querySelector(`#${id} .ant-upload`)
            ele.classList.add(...classes);
            ele.onclick = (e) => { ele.classList.remove(...classes) }
            let text = `Məlumat Doldurulmayıb: Şəkillər`
            this.showError(text)
            if (!hasError) { hasError = !hasError; }
        }

        return hasError

    }

    // Submit 

    submitClick = async (e) => {
        let source = e.target.parentElement

        if (this.validation(source.getAttribute("valid"))) {
            return
        }

        let header = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify(this.th.state.selected)
        }

        let res = await fetch(source.getAttribute("link"), header);
        if (res.status == 200) {
            alert("Yükləndi")
            location.reload()
        } else {
            alert(res.status)
        }
    }

    /*

    IMAGE
    IMAGE
    IMAGE

    */


    DragableUploadListItem = ({ originNode, moveRow, file, fileList }) => {
        console.log(originNode)
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
                <div className={'text-center mb-4 cursor-default'}>
                    <DeleteOutlined className={'inline text-black cursor-pointer'} onClick={()=> this.handleRemove(file)}/>
                </div>
            </div>
        );
    };

    example = () => <div className={'text-center mb-4 cursor-default'}>
        <DeleteOutlined className={'inline text-black cursor-pointer'} />
    </div>
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

    imageUploadGenerator = (fileList, previewVisible, previewTitle, previewImage, url) => {
        return (
            <div className={"subitem"}>
                <DndProvider manager={this.manager.dragDropManager}>
                    <Upload
                        action={url}
                        showUploadList={{showRemoveIcon: false}}
                        name={"images"}
                        multiple={true}
                        listType="picture-card"
                        accept="image/*"
                        fileList={fileList}
                        onPreview={this.handlePreview}
                        onChange={this.handleChange}
                        onRemove={this.handleRemove}
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

    handleChange = async ({ fileList, file }) => {
        if (file?.error?.status == 415) {
            this.showError("Fayl Tipi Dəstəklənmir. PNG, JPG və ya JPEG tipli fayl yükləyin")
        }
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

    handleRemove = async (file) => {
        await this.handleChange({fileList: this.th.state.fileList.filter(w=> w !== file), file: file})
        let req = await fetch(this.th.state.url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors',
            body: JSON.stringify({ name: file.response.fileName })
        })

        if (req.ok) console.log(`${file.response.fileName} Deleted`)
    }

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
                <Modal title="Xəritə" visible={this.th.state.mapVisible} className={'w-full md:w-3/4 top-3'} footer={null} onCancel={() => { this.th.setState({ mapVisible: false }) }}>
                    <RegularMap
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD6Vz_IKnktPC_TLl9DAmm_BpxokzQ4fIQ"
                        loadingElement={<div style={loadingElementStyle} />}
                        containerElement={<div className={'h-75vh'} />}
                        mapElement={<div className={'h-full'} />}
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