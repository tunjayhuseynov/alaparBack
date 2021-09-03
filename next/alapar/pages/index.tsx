import { Component } from "react";
import { pagenames, labelNames } from "@/controller";
import Link from "next/link";

class MainPage extends Component {
    constructor(props) {
        super(props)

    }



    render() {
        return (
            <div className="relative overflow-hidden">
                <div className={`flex flex-col min-h-screen items-center justify-center gap-8 z-10`}>
                    <h1 className="text-[2rem] md:text-xl lg:text-6xl font-bold">IDEALIST</h1>
                    <div className="grid grid-cols-2 gap-4 md:gap-8">
                        {Object.values(pagenames).map(w =>
                            <Link href={`/${w}`}>
                                <div className={`rounded-lg px-6 py-4 md:px-12 md:py-6 lg:px-16 lg:py-8 text-center font-semibold text-xs md:text-sm lg:text-xl transition-all cursor-pointer hover:scale-105 border-2 text-black`} style={{ borderColor: `${labelNames[w].mainColor}` }}>
                                    {labelNames[w].name}
                                </div></Link>
                        )}
                    </div>

                </div>

                <div className="absolute left-0 top-0 translate-x-[-25%] translate-y-[-30%]">
                    <img className="w-[25vw]" src={'/illustrations/mainpage/topleft.svg'} />
                </div>
                <div className="absolute right-0 top-1/3 translate-x-[35%] translate-y-[-75%]">
                    <img className="w-[25vw]" src={'/illustrations/mainpage/centerright.svg'} />
                </div>
                <div className="absolute bottom-0 left-0">
                    <img className="w-[25vw]" src={'/illustrations/mainpage/bottomleft.svg'} />
                </div>
                <div className="absolute bottom-0 left-0">
                    <img className="w-[25vw]" src={'/illustrations/mainpage/answer.svg'} />
                </div>
            </div>
        )
    }
}

export async function getStaticProps(context) {
    return {
        props: {
            layout: false,
        },
    }
}

export default MainPage;