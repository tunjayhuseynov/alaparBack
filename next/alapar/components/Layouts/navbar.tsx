import Link from 'next/link'
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { v4 as uuidv4 } from 'uuid'
import Image from 'next/image'
import { base } from '@/Constructions/const';
import { useAppContext, State } from 'context/context';

const CustomMenu = () => {
  return <Menu>
    <Menu.Item key={uuidv4()}>
      <Link href="/profile">
        Hesabım
      </Link>
    </Menu.Item>
    <Menu.Item key={uuidv4()}>
      <Link href="/profile/wallet">
        Pul Kisəm
      </Link>
    </Menu.Item>
    <Menu.Item key={uuidv4()}>
      <a href="#" onClick={(e) => { e.preventDefault(); fetch('/api/auth/logout').then(w => location.reload()) }}>
        Çıxış
      </a>
    </Menu.Item>
  </Menu>
}


const Navbar = ({ logoHidden }) => {
  const [appState, setAppState] = useAppContext() as State

  return (
    <div id="navbar" className={"w-full min-h-[100px] absolute top-0 transform-gpu transition-all duration-200 ease-linear "} style={{ zIndex: 50 }}>
      <div className="min-h-[35px]  w-full"></div>
      <div className="border-b border-t bg-white">
        <nav className={"container px-2 mx-auto right-0 min-h-[100px]  left-0 transform-gpu transition-all duration-200 ease-linear"}>
          <div className={'grid grid-cols-[25%,50%,25%] items-center min-h-[100px] '}>
            {
              <>
                {!appState?.auth && <div>
                  <Link href="/login">
                    <button className={'focus:outline-none hidden md:block min-w-1/5 max-w-full min-h-40 px-8 rounded font-bold text-white text-lg bg-gradient-to-r from-skyblue via-blue to-pink animate-gradient-x'}>Daxil ol</button>
                  </Link>
                </div>}
                <div className={`cursor-pointer text-center`}>
                  <Link href={'/'}>
                    {/* <h1 className={`text-3xl cursor-pointer mb-2 w-full text-left font-bold text-[#5e5e5e]  ${this.props?.router?.query?.pagename ? 'hidden' : null}`} style={{ fontFamily: "'Bodoni Moda', serif", textShadow: "0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black" }}>IDEALIST</h1> */}
                    <Image
                      width={150}
                      height={50}
                      layout={'fixed'}
                      src={base + "/logo.svg"}
                    />
                  </Link>
                </div>
                {appState?.pagename && <div className={` flex flex-row-reverse gap-4 items-center`}>
                  <Link href={`/login?r=1`}><div className={`py-4 px-3 cursor-pointer rounded-md font-semibold text-white bg-green-400 hover:bg-green-500 `}>Elan Yerləşdir</div></Link>
                  {/* <Link href={`/login?r=1`}>
                  <div className={`py-4 px-3 cursor-pointer rounded-md font-semibold text-white bg-yellow-500 hover:bg-yellow-600`}>Hekayə Yerləşdir</div>
                </Link> */}
                  {/*<a className={'font-regular text-black'}>Qeydiyyat</a>
                  */}
                </div>}
                {
                  appState?.auth && <div className={'flex-wrap flex flex-row-reverse gap-4 items-center	'}>
                    <Link href={`/${appState?.pagename}/add`}><div className={`py-4 px-3 cursor-pointer rounded-md font-semibold text-white bg-green-400 hover:bg-green-500 ${appState?.pagename ? null : 'hidden'}`}>Elan Yerləşdir</div></Link>
                    <div className={`py-4 px-3 cursor-pointer rounded-md font-semibold text-white bg-yellow-500 hover:bg-yellow-600 ${appState?.pagename ? null : 'hidden'}`}>Hekayə Yerləşdir</div>
                    <Dropdown overlay={CustomMenu}>
                      <a className="ant-dropdown-link text-black px-4" onClick={e => e.preventDefault()}>
                        Əməliyyat <DownOutlined />
                      </a>
                    </Dropdown>
                    <span className="font-semibold">Xoş Gəlmisiniz, {appState?.user.name}</span>
                  </div>
                }
              </>}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
