import { Component } from 'react'
import Link from 'next/link'



class Navbar extends Component {
  constructor() {
    super()
    this.classname = "container px-2 mx-auto bg-white fixed right-0 left-0 transform-gpu transition-all duration-200 ease-linear";
    this.navidClass = "w-full bg-white fixed min-h-75 transform-gpu transition-all duration-200 ease-linear"
  }

  componentDidMount() {
    let navbar = document.querySelector("#navbar");
    window.addEventListener("scroll", () => {
      console.log(navbar.offsetHeight - navbar.clientHeight)
      if (this.lastTop < window.pageYOffset && navbar.offsetHeight < window.pageYOffset) {
        if (!navbar.className.includes("-translate-y-full")) {
          navbar.classList.add("-translate-y-full")
        }
      } else if (this.lastTop > window.pageYOffset && navbar.offsetHeight < window.pageYOffset) {
        if (navbar.className.includes("-translate-y-full")) {
          navbar.classList.remove("-translate-y-full")
          navbar.classList.add("filter", "drop-shadow-nav")
        }
      } else if (navbar.offsetHeight - navbar.clientHeight >= window.pageYOffset) {
        navbar.className = this.navidClass
      }
      this.lastTop = window.pageYOffset;
    })
  }

  render(h) {
    return (
      <div id="navbar" className={this.navidClass}>
        <nav className={this.classname}>
          <div className={'flex flex-row content-center min-h-75'}>
            <div className={'flex-grow-1'}></div>
            <div className={'flex-grow-1 flex flex-row-reverse gap-4 items-center	'}>
              <button className={'focus:outline-none min-w-1/5 max-w-full min-h-40 px-8 rounded font-bold text-white text-lg bg-gradient-to-r from-skyblue via-blue to-pink animate-gradient-x'}>Daxil ol</button>
              <a className={'font-regular text-black'}>Qeydiyyat</a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
