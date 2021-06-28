import { Component } from 'react'
import Link from 'next/link'



class Navbar extends Component {
  constructor() {
    super()

  }

  render(h) {
    return (
      <nav className={'container mx-auto'}>
        <div className={'flex flex-row content-center min-h-75'}>
          <div className={'flex-grow'}></div>
          <div className={'flex-grow flex flex-row-reverse gap-4 items-center	'}>
            <button className={'focus:outline-none min-w-1/5 max-w-1/4 min-h-40 px-8 rounded font-bold text-white text-lg bg-gradient-to-r from-skyblue via-blue to-pink animate-gradient-x'}>Daxil ol</button>
            <a className={'font-regular text-black'}>Qeydiyyat</a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
