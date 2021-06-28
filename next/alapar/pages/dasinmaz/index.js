import Head from 'next/head'
import { Component } from 'react'
import Carousel from '@/subcomponents/carousel'
import Category from '@/Layouts/components/category'

class Home extends Component {
  constructor(props) {

    super(props)
  }

  render() {
    return (
      <section id={'main'} className={'container mx-auto'}>
        <div className={'text-center block'}>
          <h1 className={'text-2xl'}>
            <span>Elanlar</span>
            <span className={'h-2px w-3% bg-gradient-to-r from-skyblue via-blue to-pink block mx-auto my-0'}></span>
          </h1>
        </div>
        <div id={'categoryList'}>
          <Category></Category>
        </div>
      </section>

    );
  }
}

export default Home;
