import { Component, ReactNode } from 'react'
import { AiOutlineCaretDown } from 'react-icons/ai'
import Card, { General } from '@/Layouts/components/card'

import { v4 as uuidv4 } from 'uuid'

interface Props {
    mix: boolean;
    animal?: boolean,
    auto?: boolean,
    bina?: boolean,
    electro?: boolean,
    hobby?: boolean,
    home?: boolean,
    job?: boolean,
    private?: boolean,
    child?: boolean,
    service?: boolean,
    category?: object;
    title?: string;
    adlist: Array<General> | Array<{ name: string, ads: General[] }>;
}

interface State {
    adList: Array<ReactNode>;
}

class Category extends Component<Props, State> {
    constructor(props) {
        super(props)

        let setter

        if (this.props.mix) {
            setter = this.cardGeneratorForAll(this.props.adlist as Array<{ name: string, ads: General[] }>)
        } else {
            setter = this.cardGenerator(this.props.adlist as Array<General>);
        }

        this.state = {
            adList: setter,
        }

    }

    cardGeneratorForAll = (adlist: Array<{ name: string, ads: General[] }>) => {

        let listArray = [];
        adlist.forEach(element => {
            const name = element.name.toLowerCase();
            element.ads.forEach(s => listArray.push(
                <Card key={uuidv4()}
                    mobility={true}
                    ad={s}
                    animal={name === "animal"}
                    auto={name === "auto"}
                    bina={name === "bina"}
                    electro={name === "electro"}
                    hobby={name === "hobby"}
                    home={name === "home"}
                    job={name === "job"}
                    private={name === "private"}
                    child={name === "child"}
                    service={name === "service"}
                    pagename={name}
                />
            )
            )
        })

        return listArray.sort((a, b) => 0.5 - Math.random());
    }

    cardGenerator = (adlist: Array<General>) => {

        let listArray = [];
        adlist.forEach(element => {
            listArray.push(
                <Card key={uuidv4()}
                    mobility={true}
                    ad={element}
                    animal={this.props.animal}
                    auto={this.props.auto}
                    bina={this.props.bina}
                    electro={this.props.electro}
                    hobby={this.props.hobby}
                    home={this.props.home}
                    job={this.props.job}
                    private={this.props.private}
                    child={this.props.child}
                    service={this.props.service}
                />
            )
        });

        return listArray;
    }


    render() {
        console.log(this.props)
        return (
            <div className="py-4 p-2 sm:p-0">
                <div className="h-30 flex justify-between ml-3 mb-3 lg:ml-0 lg:mb-0">
                    <h2 className="text-2xl">{this.props.category?.["title"] ?? this.props.title}</h2>
                </div>
                <div className={'grid grid-cols-1 lg:grid-cols-2 md:gap-x-4 md:gap-y-4 gap-y-4 lg:py-4'}>
                    {this.state.adList}
                </div>
                {!this.props.mix && <div className={'text-center p-3'}>
                    <a className={'box-border p-3 font-semibold bg-gradient-to-r from-skyblue via-blue to-pink rounded-lg text-white'}>Daha çox <AiOutlineCaretDown className={'inline'} /></a>
                </div>}
            </div>
        )
    }
}

export default Category;