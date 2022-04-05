import { Component, Fragment } from "react";
import { pagenames, labelNames } from "@/controller";
import Link from "next/link";
import { Sites, primaryColor, ISiteDetail } from "@/Constructions/const";
import Header from '@/Layouts/header'
import Navbar from '@/Layouts/navbar'
import { generate } from 'shortid'
import { GetServerSideProps } from 'next'
import Category from "@/Layouts/components/category";
import { General } from "@/Layouts/components/card";

interface IProps {
    auth: true
    business: false
    layout: false
    vips: {
        name: string,
        ads: General[]
    }[]
}

class MainPage extends Component<IProps, any> {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <>
                <Navbar logoHidden={true}></Navbar>
                <div className="relative overflow-hidden px-[15%] 2xl:px-[15%] m-x-auto">
                    <div id="nav" className="top-0 pt-16 pb-10 flex flex-col items-center">
                        <div className="w-full">
                            <Header color={primaryColor} colorname={"orange"}></Header>
                        </div>
                    </div>
                    <div className={'min-h-full flex flex-col justify-center items-center'}>
                        {/* <div className="font-semibold text-3xl">
                            Bölmələri Kəşf Edin
                        </div> */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-1 gap-y-3 md:gap-4 border p-10 rounded-sm  shadow-custom">
                            {Object.values(pagenames).map(w =>
                                <div key={w}>
                                    <Link href={`/${w}/search`} >
                                        <div className={`relative md:rounded-md h-[150px]  2xl:min-w-[225px] px-[10%] items-start pt-8 justify-center w-full text-center font-semibold text-xs md:text-sm lg:text-xl transition-all cursor-pointer hover:scale-105`} style={{ backgroundColor: labelNames[w as keyof typeof labelNames].mainColor }}>
                                            <div className="grid grid-cols-[35%,65%] xl:grid-cols-[30%,70%] gap-x-1 items-center">
                                                <div className="z-50 familyFont border border-[#f46a21] rounded-full bg-white w-[35px] h-[35px] 2xl:w-[50px] 2xl:h-[50px] flex items-center justify-center">
                                                    <div className={`text-xl`} style={{ color: labelNames[w as keyof typeof labelNames].mainColor }}>
                                                        id
                                                    </div>
                                                </div>
                                                <span className={'text-white relative z-10 text-left text-sm'}>
                                                    <div className=" break-words	">{labelNames[w as keyof typeof labelNames].name}</div>
                                                </span>
                                            </div>
                                            <div className="absolute text-sm left-1/2 -translate-x-1/2 bottom-3 b-2 w-3/4 text-white border border-white rounded-md">
                                                Keçid
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="border-t mt-[100px] pt-10">
                        <div>
                            <Category key={generate()} title={"VIP Elanlar"} adlist={this.props.vips} mix={true}></Category>
                        </div>
                    </div>
                </div>
            </>

        )
    }
}

export const getServerSideProps: GetServerSideProps = async ({ res, req }) => {
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    )
  
    const sites = Object.entries(Sites)

    const response = await Promise.all(sites.map((s: [string, ISiteDetail]) => fetch(s[1].vips).then(r => r.json())))

    return {
        props: {
            layout: false,
            vips: response.map((r: any, i: number) => ({
                name: sites[i][0],
                ads: r
            }))
        },
    }
}

export default MainPage;