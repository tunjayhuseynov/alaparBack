//ts-check
import { Component } from 'react'
import { stateProcess, InitFetch, pageprocess, pagenames } from '@/controller'
import Category from '@/Layouts/components/category'
import Header from '@/Layouts/header'
import { v4 as uuidv4 } from 'uuid'
import ScrollableBar from '@/Layouts/components/scrollableBar'

class Index extends Component {
    constructor(props) {
        super(props)

        this.state = {
            menuList: []
        }

        const name = Object.keys(pagenames).find(w=>pagenames[w] === this.props.pagename)
        this.obj = {
            [name]: true,
        };

/*
        this.props.menu?.forEach(element => {
            if (element.ads && element.ads.length) {
                this.state.menuList.push(
                    <Category key={uuidv4()} category={element.category} adlist={element.ads} {...this.obj}></Category>
                )
            }
        });
        */

        this.props.menu?.ads?.forEach(element => {
            if (element.list && element.list.length) {
                this.state.menuList.push(
                    <Category key={uuidv4()} title={element.title} adlist={element.list} {...this.obj}></Category>
                )
            }
        });
    }

    render() {
        return (<>
            <Header></Header>
            <section id={'main'} className={'container mx-auto'}>
                <ScrollableBar categories={this.props.menu?.categories}/>
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
        </>)
    }
}

export async function getServerSideProps(context) {
    let pagename = context.params.pagename.toLowerCase();

    let url = InitFetch(pagename, pageprocess.menu)
    const res = await fetch(url)
    const menuBar = await res.json()
    return {
        props: {
            menu: menuBar,
            pagename: pagename,
        }, // will be passed to the page component as props
    }
}

export default Index;