import Head from 'next/head'
import Category from '@/subcomponents/category'
import { Component } from 'react'
import Carousel from '@/subcomponents/carousel'
import Card from '@/subcomponents/card'

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    let arr = []
    for (let index = 0; index < 10; index++) {
      arr.push(
        <div className={'carousel-item-container'}>
          <div className={'item'}>
            <Card size={'45'} price={'55.000'} loc={'Sahil metrosu'} premium={true}>
              <img src="placeholders/1.jpg" />
              <img src="placeholders/2.jpg" />
              <img src="placeholders/3.jpg" />
              <img src="placeholders/1.jpg" />
              <img src="placeholders/1.jpg" />
              <img src="placeholders/1.jpg" />
              <img src="placeholders/1.jpg" />
              <img src="placeholders/1.jpg" />
              <img src="placeholders/1.jpg" />
              <img src="placeholders/1.jpg" />
              <img src="placeholders/1.jpg" />
              <img src="placeholders/1.jpg" />
              <img src="placeholders/1.jpg" />
              <img src="placeholders/1.jpg" />
            </Card>
          </div>
        </div>
      )
    }

    return (
      <div className={'main'}>
        <br></br>
        <div className={'container'}>
          <div className={'title'}><span className={'underline'}>Elanlar</span></div>
          <Category></Category>
          <Category></Category>
        </div>
      </div>

    );
  }
}

export default Home;
