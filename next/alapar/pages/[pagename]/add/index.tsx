//ts-check
import { Component, useEffect, useMemo } from 'react'
import Utilities from '@/utilities';
import Callbacks from '@/callbacks';
import Form from '@/Constructions/form';
import { stateProcess, labelNames, InitFetch, pageprocess, pagenames } from '@/controller'
import Cookies from 'js-cookie'
import router, { withRouter } from 'next/router';
import { MainContext } from 'pages/_app';
import { HtmlAdd, IDbAnimal } from '@/Animal/content';
import { useAppContext } from 'context/context';
import { useQuery } from 'hooks/useFirebase';
import { AnimalState } from 'hooks/Types/animal';

type Props = { pagename: string }
const CreatePage = ({ pagename }: Props) => {
    const [{ auth }, setState] = useAppContext()
    const { getDoc } = useQuery()

    const submit = () => {

    }

    let content = useMemo(async () => {
        switch (pagename) {
            case "animal":
                const res = await getDoc<IDbAnimal>("categories", "dbAnimal")
                const cities = await getDoc<{ data: { name: string }[] }>("azerbaijan", "cities")
                return HtmlAdd({ data: res, cities: cities.data })
            default:
                break;
        }
    }, [])
    return (
        <Form submit={submit}>
            {content}
        </Form>
    )
}

// class StaticPages extends Component{
//     static contextType = MainContext
//     constructor(props) {
//         super(props)

//         this.utility = new Utilities(this)
//         this.callbacks = new Callbacks(this)
//         switch (this.props.pagename) {
//             case "animal":
//                 this.content = HtmlAdd({})
//                 break;

//             default:
//                 break;
//         }
//         stateProcess.bind(this)(this.props.pagename, pageprocess.add);

//         this.state.progressBar = true
//         this.state.pageprocess = pageprocess.add 
//         this.state.verified = true;
//         this.state.errorText = "Elan Əlavə Etmək Üçün Sistemə Daxil Olmalısınız. 5 Saniyə Sonra Daxil Olma Səhfəsinə Yönləndirilirsiniz..."

//     }

//     render() {
//         return (
//             this.props.auth && this.state.verified ?
//                 <Form submit={this.utility.submitClick} link={this.state.submitUrl} photoLen={(this.props.pagename === pagenames.bina || this.props.pagename === pagenames.auto) ? 4 : 1}>
//                     {this.content}
//                 </Form> : <div className="flex justify-center pt-12"><span className="font-semibold text-2xl">{this.state.errorText}</span></div>
//         )
//     }
// }


export async function getServerSideProps(context) {
    let pagename = context.params.pagename.toLowerCase();
    const url = InitFetch(pagename, pageprocess.add)


    const res = await fetch(url)
    const filter = await res.json()
    return {
        props: {
            filter,
            pagename: pagename,
            color: labelNames[pagename]?.mainColor,
        },
    }
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { pagename: pagenames.animal } },
            { params: { pagename: pagenames.auto } },
            { params: { pagename: pagenames.bina } },
            { params: { pagename: pagenames.child } },
            { params: { pagename: pagenames.electro } },
            { params: { pagename: pagenames.hobby } },
            { params: { pagename: pagenames.home } },
            { params: { pagename: pagenames.job } },
            { params: { pagename: pagenames.private } },
            { params: { pagename: pagenames.service } },
        ],
        fallback: false // See the "fallback" section below
    };
}

export default CreatePage

// export const add = StaticPages
// export default withRouter(StaticPages);