import { Component } from "react";
import Utilities from '@/utilities';
import Callbacks from '@/callbacks';
import { stateProcess, labelNames, InitFetch, pageprocess, pagenames } from '@/controller'
import router, { withRouter } from 'next/router';
import Form from '@/Constructions/form';
import { base, EDIT_VALUES, SET_EDIT_AD } from "@/Constructions/const";
import Cookies from 'js-cookie'


class Index extends Component {
    constructor(props) {
        super(props);

        this.utility = new Utilities(this)
        this.callbacks = new Callbacks(this)
        this.html = null;
        stateProcess.bind(this)(this.props.pagename, pageprocess.add);
        this.state.selected = {
            ...this.props.values
        }
        this.state.progressBar = true
        this.state.pageprocess = pageprocess.edit

        this.state.verified = true;
        this.state.errorText = "Elan Əlavə Etmək Üçün Sistemə Daxil Olmalısınız. 5 Saniyə Sonra Daxil Olma Səhfəsinə Yönləndirilirsiniz..."

        this.state.selected.images = []


    }

    componentDidMount = async () => {
        const token = Cookies.get("access_token")
        if (!token) {
            setTimeout(() => router.push("/login"), 5500)
            return
        }
        const user = JSON.parse(Cookies.get("user"))
        console.log(user?.id, this.props.values)
        if (user?.id != this.props?.values?.userId) {
            this.setState({
                verified: false,
                errorText: "Zəhmət Olmasa Öz Elanınızı Seçin"
            })
            //setTimeout(() => router.back(), 5500)
            return
        }
        if (user?.verified === "Waiting") {
            this.setState({
                verified: false,
                errorText: "Elan Əlavə Etmək Üçün Hesabınızı Aktiv Etməlisiniz. 5 Saniyə Sonra Profil Səhfəsinə Yönləndirilirsiniz..."
            })
            setTimeout(() => router.push("/profile"), 5500)
            return
        }
        //const files = [];
        const count = [];
        this.props?.values?.images?.map(async w => {

            const reader = new FileReader();
            const data = await fetch(`${base}${w.imagePath}`)
            const blob = await data.blob();
            reader.readAsDataURL(blob);
            reader.onload = e => {
                w['thumbUrl'] = e.target.result;
                w['status'] = "done";
                w['name'] = w.imagePath.split('/').at(-1);
                w['userImage'] = true

                this.setState({
                    fileList: [...this.state.fileList, w]
                })
            }
        });


    }

    render() {
        let content = this.html();
        return (
            this.props.auth && this.state.verified ?
                <Form submit={this.utility.submitClick} link={SET_EDIT_AD(this.props?.id, this.props?.pageForApi)}>
                    {content}
                </Form> : <div className="flex justify-center pt-12"><span className="font-semibold text-2xl">{this.state.errorText}</span></div>
        )
    }
}

export async function getServerSideProps(context) {
    const pagename = context.params.pagename.toLowerCase();
    const url = InitFetch(pagename, pageprocess.add)
    const id = context.params.id.toLowerCase();
    const pageForApi = Object.keys(pagenames)[Object.values(pagenames).indexOf(pagename.toLowerCase())]

    const res = await fetch(url)
    const filter = await res.json()

    const resvalues = await fetch(EDIT_VALUES(id, pageForApi))
    const values = await resvalues.json()

    return {
        props: {
            id,
            values,
            filter,
            pageForApi,
            pagename: pagename,
            color: labelNames[pagename]?.mainColor,
        },
    }
}

export default withRouter(Index)