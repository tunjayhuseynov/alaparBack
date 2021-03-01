import { Component } from 'react'
import { Input, Col, Row, Select, AutoComplete } from 'antd';
const { Search } = Input;
const { Option } = Select;

class SearchBar extends Component {
    constructor(props) {
        super(props)
    }


    render(h) {
        const onSearch = value => console.log(value)
        return (
            <div className={'search'}>
                <div className={'searchContainer'}>
                    <Row style={{ textAlign: 'center', width: '50%' }}>
                        <Input.Group compact style={{ display: 'flex'}}>
                            <Select defaultValue="Yeni Tikili" size="large">
                                <Option value="0">Yeni Tikili</Option>
                                <Option value="1">Kohne Tikili</Option>
                            </Select>
                            <Search
                                placeholder="Şəhər, Metro, Rayon, Qəsəbə və s."
                                allowClear
                                size="large"
                                enterButton="Axtar"
                                onSearch={onSearch}
                            />
                        </Input.Group>
                    </Row>
                </div>
            </div>
        );
    }
}

export default SearchBar;