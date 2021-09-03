import { Component } from 'react'
import { Select, Input } from 'antd';
const { Option } = Select;
const { Search } = Input;

class Header extends Component {
    constructor() {
        super()
    }

    render(h) {

        return (
            <section id="header" className={'min-h-[350px] pb-5 mb-[100px] flex flex-col items-center justify-end '}>
                <div className="w-[98%] sm:w-[calc(10rem+33.3%)] md:w-[calc(8rem+33.3%)] h-[150px] mb-3 rounded-xl origin-center bg-no-repeat bg-cover flex items-center justify-center" style={{ backgroundImage: "url('https://source.unsplash.com/2000x500/?red')" }}>
                    <h1 id="logo" className={'text-6xl mb-2 w-full text-center font-bold text-white '} style={{ fontFamily: "'Bodoni Moda', serif" , textShadow: "0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black"}}>IDEALIST</h1>
                </div>
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