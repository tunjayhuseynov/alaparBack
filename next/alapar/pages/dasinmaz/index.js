import { Component } from 'react'
import Category from '@/Layouts/components/category'
import * as URL from '@/Constructions/const';
import { v4 as uuidv4 } from 'uuid';
import Header from '@/Layouts/header'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menuList: []
    }

    this.props.menu?.forEach(element => {
      if (element.ads && element.ads.length) {
        this.state.menuList.push(
          <Category key={uuidv4()} title={element.category.name} category={element.category} adlist={element.ads} bina></Category>
        )
      }
    });
  }

  render() {
    return (
      <>
        <Header></Header>
        <section id={'main'} className={'container mx-auto'}>
          <div className={'text-center block'}>
            <h1 className={'text-2xl'}>
              <span>Elanlar</span>
              <span className={'h-2px w-3% bg-gradient-to-r from-skyblue via-blue to-pink block mx-auto my-0'}></span>
            </h1>
          </div>
          <div id={'categoryList'}>
            {this.state.menuList}
          </div>
        </section>
      </>

    );
  }
}

export default Home;

export async function getStaticProps(context) {
  const res = await fetch(URL.BINA_MENU)
  const menuBar = await res.json()
  return {
    props: {
      menu: menuBar
    },
  }
}