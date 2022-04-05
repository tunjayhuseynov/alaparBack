import { message, Button, Upload, Modal, Select, Radio, Checkbox, InputNumber, Input, Tooltip } from 'antd';
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
import { FiRotateCcw, FiRotateCw } from "react-icons/fi"
import { v4 as uuidv4 } from 'uuid'

import dynamic from 'next/dynamic'
import { pageprocess } from './controller';

const MobileSelector = dynamic(() => import('@/mobileUtility').then(w => w.MobileSelector), {
    ssr: false,
});

const MobileNumberInput = dynamic(() => import('@/mobileUtility').then(w => w.MobileNumberInput), {
    ssr: false,
});
const AdvanceTool = dynamic(() => import('@/mobileUtility').then(w => w.AdvanceTool), {
    ssr: false,
});

const Device = dynamic(() => import('@/mobileUtility').then(w => w.Device), { ssr: false })


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
            <div className={'subitem pt-2'}>
                <h3 className={classname}>{title}</h3>
            </div>

        )
    }

    advancePanel = (list) => {
        return <AdvanceTool list={list} />
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

    generateModal = (htmlElements, visible, visibleName, { title = "", additionButtonList = [] } = {}) => {
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
                    ...additionButtonList,
                ]}>
                {htmlElements}
            </Modal>

        )
    }

    showError = (text) => {
        message.error(text)
    }

    phoneConverter = (a, c, i) => {
        if (i == 0) a += '('
        if (i == 2) return a + c + ') '
        if (i == 5) return a + c + '-'
        if (i == 7) return a + c + '-'
        return a + c
    }

    visible = false;

    inputGenerator = (title, placeholder, callback, state, { visibility = null, phone = null, mail = null, novalidation = null, tooltiptext = null } = {}) => {
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
            obj.inputMode = "numeric"
            obj.onInput = (v) => {
                v.target.value = v.target.value.slice(0, 15).replace(/[^0-9]/g, '').split("").reduce(this.phoneConverter, '');

                v.target.value = v.target.value.replace(/[- \(\)]{1,2}$/g, "").split("").reduce((a, c) => a + c, '')

            }
        }
        else if (mail) {
            obj.inputMode = "email"
            val.isemail = "true"
            obj.onInput = (v) => {
                v.target.value = v.target.value.replace(" ", "")
            }
        }
        else {
            obj.onBlur = this.th.callbacks.trimCallback
        }

        return (
            <div className={'subitem simpleInput'}>
                <div className={'item'}><label>{title}</label></div>
                <div className={'item'} {...val} displayname={title.replace(/[^\p{L}]+/gu, "")}>

                    <Tooltip visible={this.visible && tooltiptext} title={tooltiptext} placement={"right"}>
                        <Input
                            {...obj}
                            name={state}
                            allowClear
                            defaultValue={this.th?.state?.selected[state]}
                            placeholder={placeholder}
                            onKeyUp={callback}
                            onFocus={() => { if (tooltiptext) { this.visible = true; this.th.setState({}) } }}
                            onBlur={() => { if (tooltiptext) { this.visible = false; this.th.setState({}) } }}
                        />
                    </Tooltip>
                </div>
            </div>
        )
    }

    numberGenerator = (title, placeholder, callback, name, visibility, min = 1, max = Number.MAX_VALUE, { addonAfterList = null, addonAfterCallback = null, addonName = null, addonValue = null, addonAfterOnlyText = null, nocommo = false } = {}) => {
        if (!visibility) {

            this.th.state.selected[name] = null

            return null
        }

        let formatter = !nocommo ? value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',') : value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, '');
        let parser = value => `${value}`.replace(/\$\s?|(,*)/g, '').slice(0, 14)


        return <Device>
            {(isMobile) => {
                let selectedInput;
                /*if (isMobile) selectedInput = (<>
                    <MobileNumberInput name={name} formatter={formatter} min={min} max={max} className={'ant-input-number-input w-full inputnumber'}
                        placeholder={placeholder} callback={callback}
                    />
                </>)
                else {*/
                selectedInput = <><InputNumber
                    style={{ verticalAlign: 'middle', borderBottomRightRadius: 0, borderTopRightRadius: 0 }}
                    name={name}
                    min={min}
                    max={max}
                    defaultValue={this.th?.state?.selected[name]}
                    inputMode="decimal"
                    className={'flex-grow inputnumber'}
                    placeholder={placeholder}
                    formatter={formatter}
                    parser={parser}
                    onKeyUp={callback}
                />


                </>

                // }


                return <div className={'subitem numberInput'} validatename={name} displayname={title.replace(/[^\p{L}]+/gu, "")}>
                    <div className={'item'}>
                        <label className={'title'}>{title}</label>
                    </div>
                    <div className={'item flex'}>

                        {selectedInput}

                        {!addonAfterList ? null :
                            <div className="ant-input-group-addon" style={{ paddingTop: '2px', verticalAlign: 'middle', display: 'inline-table', lineHeight: '24px' }}>
                                <Select value={addonValue} onSelect={addonAfterCallback} name={addonName}>
                                    {addonAfterList.map((w, i) => <Option key={uuidv4()} state={addonName} value={w.id}>{w.name}</Option>)}
                                </Select>
                            </div>
                        }
                        {!addonAfterOnlyText ? null :
                            <div className="ant-input-group-addon" style={{ paddingTop: '2px', verticalAlign: 'middle', display: 'inline-table', lineHeight: '24px' }}>
                                {addonAfterOnlyText}
                            </div>
                        }
                    </div>
                </div>
            }}
        </Device>
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
                <div className={'item'} validatename={name} displayname={title.replace(/[^\p{L}]+/gu, "")}>
                    <TextArea
                        className={'width inputarea'}
                        name={name}
                        defaultValue={this.th?.state?.selected[name]}
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

    rangeİnputGenerator = (title, minName, maxName, callback, visibility, { min = 1, max = Number.MAX_VALUE, step = 1, addonAfterList = null, addonAfterCallback = null, addonName = null, addonValue = null, addonAfterOnlyText = null, nocommo = false } = {}) => {
        if (!visibility) {

            this.th.state.selected[minName] = null
            this.th.state.selected[maxName] = null

            return null
        }


        let formatter = !nocommo ? value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',') : value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, '');
        let parser = value => `${value}`.replace(/\$\s?|(,*)/g, '').slice(0, 14)

        return (
            <Device>
                {(isMobile) => {
                    let selectedInput;

                    /*if (isMobile) {
                        selectedInput = (<>
                            <MobileNumberInput formatter={formatter} name={minName} min={min} max={max} step={step} className={'ant-input-number-input w-full inputnumber'}
                                callback={callback} placeholder={"Min."}
                            />
                            -
                            <MobileNumberInput formatter={formatter} name={maxName} min={min} max={max} step={step} className={'ant-input-number-input w-full inputnumber'}
                                callback={callback} placeholder={"Max."}
                            />
                        </>
                        )
                    } else {*/
                    selectedInput = (
                        <>
                            <InputNumber
                                className="flex-grow-1"
                                style={{ verticalAlign: 'middle', borderBottomRightRadius: 0, borderTopRightRadius: 0 }}
                                placeholder={"Min."}
                                inputMode="decimal"
                                onKeyUp={callback}
                                min={min} max={this.th.state.selected[maxName] ?? max} step={step} name={minName}
                                formatter={formatter}
                                parser={parser}
                                defaultValue={this.th?.state?.selected[minName]}
                            />
                            -
                            <InputNumber
                                className="flex-grow-1"
                                style={{ verticalAlign: 'middle', borderBottomRightRadius: 0, borderTopRightRadius: 0 }}
                                placeholder={"Max."}
                                inputMode="decimal"
                                onKeyUp={callback}
                                min={this.th.state.selected[minName] ?? min} max={max} step={step} name={maxName}
                                formatter={formatter}
                                parser={parser}
                                defaultValue={this.th?.state?.selected[maxName]}
                            />
                        </>
                    )
                    //}


                    return (
                        <div className={'subitem rangeInput'} displayname={title.replace(/[^\p{L}]+/gu, "")}>
                            <div className={'item'} ><label>{title}</label></div>
                            <div className={'item flex items-center'}>
                                {selectedInput}
                                {!addonAfterList ? null :
                                    <div className="flex items-center bg-[#FAFAFA]" >
                                        <Select value={addonValue} onSelect={addonAfterCallback} name={addonName}>
                                            {addonAfterList.map((w, i) => <Option key={uuidv4()} state={addonName} value={w.id}>{w.name}</Option>)}
                                        </Select>
                                    </div>
                                }
                                {!addonAfterOnlyText ? null :
                                    <div className="addonSimple flex items-center bg-[#FAFAFA] px-3 border" >
                                        {addonAfterOnlyText}
                                    </div>
                                }
                            </div>
                        </div>
                    )
                }}
            </Device>
        )
    }

    selectGenerator = (title, options, name, selected, callback, { categorySave = false, typeFirstSave = false, visibility = null, loading = null, search = false, noneed = false, sort = false, selectAll = false, subname = null, subnameTitle = null, swapItem = null, novalidation = null, filtername = false, multiple = false } = {}) => {
        if (visibility != null && visibility == false) {
            if (multiple)
                this.th.state.selected[name] = [];
            else
                this.th.state.selected[name] = null

            return null
        }

        if ((!options || options.length < 1) && visibility == null) {

            if (multiple)
                this.th.state.selected[name] = [];
            else
                this.th.state.selected[name] = null

            return null
        }
        
        if(typeFirstSave){
            this.th.state.typeFirstCallback = callback;
        }
        if (categorySave) {
            this.th.state.categoryCallback = callback
        }
        if (sort) {
            options.sort((a, b) => {
                let fa = a.name.toLowerCase()
                let fb = b.name.toLowerCase()
                if (fa.includes("digər")) return 1
                if (fb.includes("digər")) return -1
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
        let val = {}
        if (loading) {
            obj.loading = true
        }
        if (novalidation == null) {
            val.validatename = name;
        }
        if (multiple) {
            obj.mode = "multiple"
            obj.allowClear = true
        }

        return <Device>
            {(isMobile) => {

                return (<div className={`subitem selectInput`} >
                    <div className={'item'}><label>{title}</label></div>
                    <div className={'item'} {...val} displayname={title.replace(/[^\p{L}]+/gu, "")} >
                        {isMobile & obj?.mode != "multiple" ? <MobileSelector state={name} selected={selected} callback={callback} object={obj}>

                            {selectAll ? <option key={uuidv4()} state={name} value={""}>Hamısı</option> : <option disabled value={""} hidden> Seçin </option>}

                            {noneed ? <option key={uuidv4()} state={name} value={""}>Heç Biri</option> : null}
                            {subname ? options?.filter(w => !(w[subnameTitle]))?.map((w, i) => <option state={name} key={uuidv4()} value={w.id}>{!filtername ? w.name : w.filtername}</option>) : null}

                            {subname ? subname?.map((w, i) => <optgroup key={uuidv4()} label={w.name}>

                                {w.category.map((d, q) => <option state={name} key={uuidv4()} value={d.id}>{!filtername ? d.name : d.filtername}</option>)}

                            </optgroup>) : options?.map((w, i) => <option key={uuidv4()} state={name} value={w.id}>{!filtername ? w.name : w.filtername}</option>)
                            }
                        </MobileSelector>
                            :
                            <Select {...obj} filterOption={(input, option) => option?.children?.toLowerCase().indexOf(input.toLowerCase()) >= 0} showSearch={search} onSelect={callback} onDeselect={callback} placeholder={"Seçin"} value={selected} name={name} className={'w-full'}>
                                {selectAll ? <Option key={uuidv4()} state={name} value={null}>Hamısı</Option> : null}
                                {noneed ? <Option key={uuidv4()} state={name} value={""}>Heç Biri</Option> : null}
                                {subname ? options?.filter(w => !(w[subnameTitle]))?.map((w, i) => <Option state={name} key={uuidv4()} value={w.id}>{w.name}</Option>) : null}
                                {subname ? subname?.map((w, i) => <OptGroup key={uuidv4()} label={w.name}>

                                    {w.category.map((d, q) => <Option state={name} key={uuidv4()} value={d.id}>{!filtername ? d.name : d.filtername}</Option>)}

                                </OptGroup>) : options?.map((w, i) => <Option key={uuidv4()} state={name} value={w.id}>{!filtername ? w.name : w.filtername}</Option>)
                                }
                            </Select>

                        }
                    </div>
                </div>)
            }}</Device>
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
                <div className={`radioitem checkInput ${makeBlock ? 'makeBlock' : ''}`} displayname={title.replace(/[^\p{L}]+/gu, "")}>
                    <div className={'item'}><label>{title}</label></div>
                    <div className={'item flex flex-wrap justify-around'}>
                        {multiple.map(w => <Checkbox key={uuidv4()} checked={this.th?.state?.selected[w.name]} state={w.name} name={w.name} onChange={callback}>{w.title}</Checkbox>
                        )}
                    </div>
                </div>
            )
        }
    
        return (
            <div className={`radioitem checkInput ${makeBlock ? 'makeBlock' : ''}`} displayname={title.replace(/[^\p{L}]+/gu, "")}>
                <Checkbox checked={this.th?.state?.selected[name]} state={name} name={name} onChange={callback}>{title}</Checkbox>
            </div>
        )
    }


    radioGenerator = (title, values, defaultValue, callback, name, secondValues, { filtername = false } = {}) => {
        if (!values) return null
        let val = this.th?.state?.selected[name];
        if (typeof val === 'boolean') {
            val = val ? 1 : 0;
        }
        
        return (
            <div className={"subitem w-full"} validatename={name} displayname={title.replace(/[^\p{L}]+/gu, "")}>
                <label>{title}</label> <br />
                <Radio.Group onChange={callback} value={val} name={name} defaultValue={defaultValue} buttonStyle="solid">
                    {!secondValues ?
                        values.map((w, i) => <Radio.Button key={new Date().getTime() + i} value={w.id}>{filtername ? w.filtername : w.name}</Radio.Button>) :
                        secondValues.map((w, i) => <Radio.Button key={new Date().getTime() + i} value={w.id}>{filtername ? w.filtername : w.name}</Radio.Button>)}
                </Radio.Group>
            </div>
        )
    }

    //Validation 

    validation = (id, photoLen) => {
        let inputs = document.querySelectorAll(`#${id} [validatename]`);
        let classes = ["border", "border-red"];
        let hasError = false
        for (let index = 0; index < inputs.length; index++) {
            if (this.th.state.selected[inputs[index].getAttribute("validatename")] == null) {
                if (!hasError) { hasError = !hasError; }
                let text = `Məlumat Doldurulmayıb: ${inputs[index].getAttribute("displayname")}`
                this.showError(text)

                let ele = inputs[index].querySelector(".ant-input-number-input-wrap") || inputs[index].querySelector(".ant-select-selector") || inputs[index].querySelector("textarea") || inputs[index].querySelector(".ant-input-affix-wrapper") || inputs[index].querySelector(".ant-radio-group") || inputs[index].querySelector("input");
                if (ele) {
                    ele.classList.add(...classes);
                    ele.onclick = (e) => { ele.classList.remove(...classes) }
                }
            }
            else if (this.th.state.selected[inputs[index].getAttribute("isemail") === "true" ? inputs[index].getAttribute("validatename") : null] != null && !this.th.state.selected[inputs[index].getAttribute("validatename")].match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
                if (!hasError) { hasError = !hasError; }
                this.showError(`E-mail düzgün daxil edilməyib`)

                let ele = inputs[index].querySelector(".ant-input-number-input-wrap") || inputs[index].querySelector(".ant-select-selector") || inputs[index].querySelector("textarea") || inputs[index].querySelector(".ant-input-affix-wrapper") || inputs[index].querySelector("input");

                if (ele) {
                    ele.classList.add(...classes);
                    ele.onclick = (e) => { ele.classList.remove(...classes) }
                }
            }
        }

        if ((this.th.state.selected.images == null || this.th.state.selected.images.length < photoLen) && this.th.state?.fileList.length < photoLen) {
            let ele = document.querySelector(`#${id} .ant-upload`)
            ele.classList.add(...classes);
            ele.onclick = (e) => { ele.classList.remove(...classes) }
            let text = `Məlumat Doldurulmayıb: Şəkillər (Min. ${photoLen})`
            this.showError(text)
            if (!hasError) { hasError = !hasError; }
        }

        return hasError

    }

    // Submit 

    submitClick = (valid, link, photoLen = 1) => {
        if (this.validation(valid, photoLen)) {
            return false;
        }

        let header = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            mode: 'cors',
            body: JSON.stringify(this.th.state.selected)
        }
        fetch(link, header).then((res) => {
            if (res.status == 200) {
                alert("Yükləndi")
                //location.reload()
            } else {
                alert(res.status)
                res.json().then((json) => alert(json))
            }

        });

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
                {file.status === 'error' && file.status != undefined ? errorNode : originNode}
                <div className={'text-center mb-4 cursor-default flex p-5'}>
                    <DeleteOutlined className={'inline flex-grow text-black cursor-pointer'} onClick={() => this.handleRemove(file)} />
                    <FiRotateCcw className={'inline flex-grow text-black cursor-pointer'} onClick={() => this.handleRotation(file, -90)} />
                    <FiRotateCw className={'inline flex-grow text-black cursor-pointer'} onClick={() => this.handleRotation(file, 90)} />
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

    imageUploadGenerator = (fileList, previewVisible, previewTitle, previewImage, url, { undertext = null } = {}) => {
        return (
            <div className={"subitem"}>
                <div className={'item'}><label>Şəkil Əlavə Et*:</label></div>
                <div className={'item'}>
                    <DndProvider manager={this.manager.dragDropManager}>
                        <Upload
                            action={url}
                            beforeUpload={
                                (file, list) => {
                                    if (file.size > 3145728) {
                                        message.warning("Şəkil 3 MB`dan Az Olmalıdır")
                                        return false;
                                    }
                                    for (let index = 0; index < list.length; index++) {
                                        if (this.th.state.fileList.find(w => w.name == list[index].name)) {
                                            this.showError("Eyni fayl birdən çox yüklənə bilməz.")
                                            return false;
                                        }
                                    }
                                }
                            }
                            showUploadList={{ showRemoveIcon: false }}
                            name={"images"}
                            maxCount={25}
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
                            {fileList.length >= 25 ? null :
                                <div>
                                    <PlusOutlined />
                                    <div style={{ marginTop: 8 }}>Şəkil</div>
                                </div>}
                        </Upload>
                    </DndProvider>
                    <Modal
                        visible={previewVisible}
                        title={previewTitle}
                        footer={null}
                        destroyOnClose
                        onCancel={this.handleCancel}
                    >
                        <img style={{ width: '100%', height: '100%' }} src={previewImage} />
                    </Modal>
                </div>
                {undertext != null ? <div className="text-xs">-{undertext}</div> : null}
            </div>
        )
    }

    getImageState = {
        previewVisible: false,
        previewRotation: 0,
        previewImage: '',
        previewTitle: '',
        fileList: []
    }

    handleCancel = () => this.th.setState({ previewVisible: false, previewImage: null });

    handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            if (file?.thumbUrl) {
                file.preview = file.thumbUrl
            } else {
                file.preview = await getBase64(file.originFileObj);
            }
        }
        this.rotate(file.preview, file["rotation"]).then((base) => {
            this.th.setState({
                previewImage: file.url || base,
                previewVisible: true,
                previewRotation: file["rotation"],
                previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
            });
        })

    };

    handleChange = async ({ fileList, file }) => {
        console.log(file)
        if (file?.error?.status == 415) {
            this.th.setState({
                ...this.th.state,
                fileList: [...fileList].filter(w => w?.originFileObj != file.originFileObj),
            })
            this.showError("Fayl Tipi Dəstəklənmir. PNG, JPG və ya JPEG tipli fayl yükləyin")
            return;
        }

        if (file != undefined && !file["rotation"]) {
            file["rotation"] = 0;
        }

        this.th.setState({
            ...this.th.state,
            fileList: [...fileList].filter(w => w?.status != undefined),
            selected:
            {
                ...this.th.state.selected,
                images: [...fileList].filter(w => w?.response && !w?.userImage).map(w => ({ filename: w.response.fileName, rotation: w["rotation"], }))

            }
        })
    };

    handleRotation = async (file, rotation) => {
        if (file?.userImage) {
            try {
                let req = await fetch(`${this.th.state.url}/rotate`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    mode: 'cors',
                    body: JSON.stringify({ id: file.id, adId: file.adId, rotate: rotation })
                })

                if (req.ok) {
                    console.log(`Rotated`)
                    //await this.handleChange({ fileList: this.th.state.fileList.filter(w => w !== file), file: file })
                    message.success("Şəkil Döndərildi")
                }
            } catch (error) {
                message.error("Xəta! Şəkil Döndörilə Bilmədi")
            }

            let img = document.querySelector(`img[src="${file.thumbUrl}"]`);
            console.log(img.style.transform)
            if(img.style.transform.includes('rotate')){
                img.style.transform = `rotate(${parseInt(img.style.transform.replace(/\D/g, "")) + rotation}deg)`
            }
            else{
                img.style.transform = `rotate(${rotation}deg)`
            }
            return
        }
        let imageList = this.th.state.selected.images;

        let value = imageList.find(w => w.filename == file.response.fileName);
        value.rotation += rotation
        file["rotation"] = value.rotation

        let img = document.querySelector(`img[src="${file.thumbUrl}"]`);
        img.style.transform = `rotate(${value.rotation}deg)`

        this.th.setState({
            ...this.th.state,
            selected: {
                ...this.th.state.selected,
                images: imageList
            }
        })
    }

    handleRemove = async (file) => {
        if (file?.userImage != true) {
            try {
                let req = await fetch(this.th.state.url, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    mode: 'cors',
                    body: JSON.stringify({ name: file.response.fileName })
                })

                if (req.ok) {
                    console.log(`Deleted`)
                    await this.handleChange({ fileList: this.th.state.fileList.filter(w => w !== file), file: file })
                    message.success("Şəkil Silindi")
                }
            } catch (error) {
                message.error("Xəta! Şəkil Silinmədi")
            }
        } else if (file?.userImage) {
            const ans = confirm("Şəkil Həmişəlik Silinmək Üzrədir. Silinsin?");
            if (ans) {
                try {
                    let req = await fetch(`${this.th.state.url}/exist`, {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        mode: 'cors',
                        body: JSON.stringify({ name: file.imagePath, adId: file.adId, id: file.id })
                    })

                    if (req.ok) {
                        console.log(`Deleted`)
                        await this.handleChange({ fileList: this.th.state.fileList.filter(w => w !== file), file: file })
                        message.success("Şəkil Silindi")
                    }
                } catch (error) {
                    console.log(error)
                    message.error("Xəta! Şəkil Silinmədi")
                }
            }
        }
    }

    rotate = (srcBase64, degrees) => new Promise((resolve, reject) => {
        const canvas = document.createElement("canvas")
        let ctx = canvas.getContext("2d");
        let image = new Image();

        image.onload = function () {
            canvas.width = degrees % 180 === 0 ? image.width : image.height;
            canvas.height = degrees % 180 === 0 ? image.height : image.width;

            ctx.translate(canvas.width / 2, canvas.height / 2);
            ctx.rotate(degrees * Math.PI / 180);
            ctx.drawImage(image, image.width / -2, image.height / -2);

            resolve(canvas.toDataURL())
        };

        image.src = srcBase64;
    })

    /*
    END
    IMAGE
    IMAGE
    IMAGE

    */

    googleMap = (lat, lan, callback, title, latName, lanName) => {
        return (
            <div displayname={title.replace(/[^\p{L}]+/gu, "")} className={"subitem"} style={{ height: '100%' }}>
                <div className={'item'}>
                    <label>{title}</label>
                </div>
                <div className={'item'}>
                    <RegularMap
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD6Vz_IKnktPC_TLl9DAmm_BpxokzQ4fIQ"
                        loadingElement={<div style={loadingElementStyle} />}
                        containerElement={<div className={`${callback == null ? 'h-[75vh]' : 'h-[50vh]'} w-full`} />}
                        mapElement={<div className={'h-full'} />}
                        info={{ lat: (this.th?.state.selected?.lat ?? lat), lan: (this.th?.state.selected?.lng ?? lan), callback: callback }}
                    />
                </div>
            </div>
        )
    }
}



export default Utilities;

const defaultOptions = { scrollwheel: false };

export const RegularMap = withScriptjs(
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


export const phoneConverter = (a, c, i) => {
    if (i == 0) a += '('
    if (i == 2) return a + c + ') '
    if (i == 5) return a + c + '-'
    if (i == 7) return a + c + '-'
    return a + c
}