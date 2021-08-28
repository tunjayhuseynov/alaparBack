import { Component, ReactNode } from 'react'
import { AiOutlineCaretDown } from 'react-icons/ai'
import Card, { General } from '@/Layouts/components/card'

import { v4 as uuidv4 } from 'uuid'

interface Props{
    animal: boolean,
    auto: boolean,
    bina: boolean,
    electro: boolean,
    hobby: boolean,
    home: boolean,
    job: boolean,
    private: boolean,
    child: boolean,
    service: boolean,
    category?: object;
    title?: string;
    adlist: Array<General>;
}
interface State{
    adList: Array<ReactNode>;
}

class Category extends Component<Props, State> {
    constructor(props) {
        super(props)

        let setter;

        if(this.props.bina){
            setter = this.binaGenerator(this.props.adlist, this.props.category);
        }

        this.state = {
            adList: setter,
        }

    }

    binaGenerator = (adlist : Array<General>, category) => {

        let listArray = [];
        adlist.forEach(element => {
            listArray.push(
                <Card key={uuidv4()} 
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
        return (
            <div className="py-4 p-2 sm:p-0">
                <div className="h-30 flex justify-between">
                    <h2 className="text-2xl">{this.props.category?.["title"] ?? this.props.title}</h2>
                </div>
                <div className={'grid grid-cols-1 md:grid-cols-2 md:gap-x-4 md:gap-y-4 gap-y-4 py-4'}>
                    {this.state.adList}
                </div>
                <div className={'text-center p-3'}>
                    <a className={'box-border p-3 font-semibold bg-gradient-to-r from-skyblue via-blue to-pink rounded-lg text-white'}>Daha çox <AiOutlineCaretDown className={'inline'} /></a>
                </div>
            </div>
        )
    }
}

export default Category;