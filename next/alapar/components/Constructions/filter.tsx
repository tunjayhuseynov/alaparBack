import { Component } from 'react'
import Card , { General }from '@/Layouts/components/card'
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
    category: object;
    ads: Array<General>;
}
class FilterLayout extends Component<Props, {ads: Array<General>}> {
    constructor(props) {
        super(props)

    }

    render() {
        const list = this.props.ads.length > 0 ? this.props.ads.map((ads) => {
           
            return <Card key={uuidv4()}
                ad={ads}
                animal={this.props.animal}
                auto={this.props.auto}
                bina={true}
                electro={this.props.electro}
                hobby={this.props.hobby}
                home={this.props.home}
                job={this.props.job}
                private={this.props.private}
                child={this.props.child}
                service={this.props.service}
                eager={false}
            />
        }) : null;

        return (
            <div className={'flex flex-col md:flex-row container mx-auto min-h-screen gap-4'}>
                <div className={'flex-grow-0 w-250px self-center md:self-start text-center'}>
                    <div className={'box'}>
                        <div id={'filter'}>
                            <div className={'flex flex-col gap-4'}>
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'flex-grow-2 bg-white rounded'}>
                    {list}
                </div>
            </div>
        )
    }
}

export default FilterLayout;