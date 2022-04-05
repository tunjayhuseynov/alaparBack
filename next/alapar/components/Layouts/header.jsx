import { Component } from 'react'
import { Select, Input } from 'antd';
import { RiSearchFill } from 'react-icons/Ri'


class Header extends Component {
    constructor() {
        super()
    }

    componentDidMount() {
        if (typeof document !== 'undefined') {
            document.documentElement.style.setProperty("--header-select-bg", `${this.props.color}`)
        }
    }

    render(h) {

        return (
            <section id="header" className={'min-h-[150px] pb-5 mb-[50px] mt-[150px]'}>
                {/* <div className="w-[98%] sm:w-[calc(10rem+33.3%)] md:w-[calc(8rem+33.3%)] h-[150px] mb-3 rounded-xl origin-center bg-no-repeat bg-cover flex items-center justify-center" style={{ backgroundImage: `url('https://source.unsplash.com/2000x500/?${this.props.colorname}')` }}>
                    <h1 id="logo" className={'text-6xl mb-2 w-full text-center text-white'} style={{fontFamily: "'Bodoni Moda', serif", textShadow: "0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black" }}>IDEALIST</h1>
                </div> */}
                {/* <div>
                    <Image
                        width={400}
                        height={200}
                        layout={'fixed'}
                        src={base + "/org_logo.svg"}
                    />
                </div> */}
                <div id="searchbar" className={'flex flex-row items-center justify-center w-full'}>
                    {/* <div id="selector">

                        <Select className={'w-32 text-center font-medium text-white text-lg '} defaultValue={'Baku'}>
                            <Option value={"Baku"}>Baku</Option>
                            <Option value={"Seki"}>Seki</Option>
                        </Select>
                    </div>
                    <div id="searchInput" className={'min-w-1/3'}>
                        <Search className={'h-9'} enterButton={'Axtar'}></Search>
                    </div> */}
                    <div className="min-w-[50%] relative">
                        <input type="text" className="w-full h-[50px] outline-none rounded-3xl px-5 text-xl font-bold border" />
                        <div className="absolute right-5 top-1/2 -translate-y-1/2 rounded-full bg-primary p-2 cursor-pointer">
                            <RiSearchFill className="text-white font-bold"/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Header;