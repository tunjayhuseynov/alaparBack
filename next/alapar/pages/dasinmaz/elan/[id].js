import { Component } from 'react'
import { withRouter, NextRouter } from 'next/router'
import DataReader from '@/dataReader'


class AdPage extends Component {
    constructor(props) {
        super(props)
        console.log(props.json)
        this.dataReader = new DataReader(this)

        this.state = {
            images: props.json.images.map(w => {
                return {
                    original: "http://localhost:5566" + w.imagePath,
                    thumbnail: "http://localhost:5566" + w.thumbnail,
                    originalClass: "imageInGallery",
                    height: "200",
                }
            })
        }
    }

    render() {
        return (
            <div id={'elanSection'}>
                <div className={'container'}>
                    <div className={'row'}>

                        <div className={'item'}>
                            <div className={'imageGallery'}>
                                {this.dataReader.imageGallery(this.state.images)}
                            </div>
                            <div className={'feature'}>
                                <div className={'item'}>
                                    <div className={'price'}>
                                        {this.props.json.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} {this.props.json.currencyName}
                                    </div>
                                </div>
                                <div className={'item'}>
                                    <div className={'mainFeatures'}>
                                        <div className={'top'}>
                                            <div className={'adress'}>{this.props.json.adress}`da</div>
                                            <div className={'category'}>{this.props.json.categoryName}</div>
                                            <div className={'sellType'}>{this.props.json.sellTypeName}</div>
                                        </div>
                                        <div className={'side'}></div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className={'item'}>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export async function getServerSideProps(context) {
    const res = await fetch(`http://192.168.1.107:5566/api/bina/get/${context.query.id}`)
    const json = await res.json()
    return {
        props: {
            json,
        },
    }
}

export default withRouter(AdPage);