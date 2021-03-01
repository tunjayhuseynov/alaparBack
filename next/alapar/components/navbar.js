import { Component } from 'react'
import Link from 'next/link'



class Navbar extends Component {
  constructor() {
    super()
  }

  render(h) {
    return (
      <div className={'nav-bar'}>
          <div className={'row'}>
              <div className={'column'}>
                {//<div className={'logo'}>ALAPAR.AZ</div>
                }
              </div>
              <div className={'column'}>Actions</div>
          </div>
      </div>
    );
  }
}

export default Navbar;
