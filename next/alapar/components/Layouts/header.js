import { Component } from 'react'
import { Select, Input } from 'antd';
const { Option } = Select;
const { Search  } = Input;

class Header extends Component {
    constructor() {
        super()
    }

    render(h) {

        return (
            <section id="header" className={'min-h-375 flex flex-col items-center justify-center'}>
                <h1 id="logo" className={'text-5xl font-bold'}>ALAPAR</h1>
                <div id="searchbar" className={'flex flex-row items-center justify-center w-full'}>
                    <div id="selector">
                        <Select className={'w-32 text-center font-medium text-white text-lg'} defaultValue={'Baku'}>
                            <Option value={"Baku"}>Baku</Option>
                            <Option value={"Seki"}>Seki</Option>
                        </Select>
                    </div>    
                    <div id="searchInput" className={'min-w-1/3'}>
                        <Search className={'h-9'} enterButton={'Axtar'}></Search>
                    </div> 
                </div>
            </section>
        );
    }
}

export default Header;