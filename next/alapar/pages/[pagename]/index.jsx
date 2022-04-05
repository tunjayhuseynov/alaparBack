//ts-check
import { Component, useMemo } from 'react'
import { labelNames, InitFetch, pageprocess, pagenames } from '@/controller'
import Category from '@/Layouts/components/category'
import Header from '@/Layouts/header'
import { v4 as uuidv4 } from 'uuid'
import ScrollableBar from '@/Layouts/components/scrollableBar'
import dynamic from 'next/dynamic'

// const Story = dynamic(
//     () => import('@/Layouts/components/story'),
//     { ssr: false }
//   )

const Index = ({ pagename, color, colorname, menu }) => {
    const name = Object.keys(pagenames).find(w => pagenames[w] === pagename)
    const obj = {
        [name]: true,
    };
    const menuList = useMemo(() => {
        const list = []
        menu?.ads?.forEach(element => {
            if (element.list && element.list.length > 0) {
                list.push(
                    <Category key={uuidv4()} title={element.title} adlist={element.list} {...obj}></Category>
                )
            }
        });
        return list;
    }, [])

    return (<>
        <Header color={color} colorname={colorname}></Header>
        <section id={'main'} className={'lg:container mx-auto'}>
            {/* <Story pagename={this.props?.pagename}></Story> */}
            <ScrollableBar categories={menu?.categories} />
            <div className={'text-center block mt-10'}>
                <h1 className={'text-2xl'}>
                    <span>Elanlar</span>
                    <span className={'h-2px w-3% bg-gradient-to-r from-skyblue via-blue to-pink block mx-auto my-0'}></span>
                </h1>
            </div>
            <div id={'categoryList'}>
                {menuList}
            </div>
        </section>
    </>)
}
// class Index extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             menuList: [],
//         }
//         const name = Object.keys(pagenames).find(w => pagenames[w] === this.props.pagename)
//         this.obj = {
//             [name]: true,
//         };

//         /*
//                 this.props.menu?.forEach(element => {
//                     if (element.ads && element.ads.length) {
//                         this.state.menuList.push(
//                             <Category key={uuidv4()} category={element.category} adlist={element.ads} {...this.obj}></Category>
//                         )
//                     }
//                 });
//                 */

//         this.props.menu?.ads?.forEach(element => {
//             if (element.list && element.list.length > 0) {
//                 this.state.menuList.push(
//                     <Category key={uuidv4()} title={element.title} adlist={element.list} {...this.obj}></Category>
//                 )
//             }
//         });
//     }

//     render() {

//         return (<>
//             <Header color={this.props.color} colorname={this.props.colorname}></Header>
//             <section id={'main'} className={'lg:container mx-auto'}>
//                 {/* <Story pagename={this.props?.pagename}></Story> */}
//                 <ScrollableBar categories={this.props.menu?.categories} />
//                 <div className={'text-center block mt-10'}>
//                     <h1 className={'text-2xl'}>
//                         <span>Elanlar</span>
//                         <span className={'h-2px w-3% bg-gradient-to-r from-skyblue via-blue to-pink block mx-auto my-0'}></span>
//                     </h1>
//                 </div>
//                 <div id={'categoryList'}>
//                     {this.state.menuList}
//                 </div>
//             </section>
//         </>)
//     }
// }

export async function getServerSideProps(context) {
    let pagename = context.params.pagename.toLowerCase();

    let url = InitFetch(pagename, pageprocess.menu)
    console.log(url)
    const res = await fetch(url)
    const menuBar = await res.json()
    return {
        props: {
            menu: menuBar,
            pagename: pagename,
            color: labelNames[pagename]?.mainColor,
            colorname: labelNames[pagename]?.colorName
        }, // will be passed to the page component as props
    }
}

export default Index;