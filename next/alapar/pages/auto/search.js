import { Component } from 'react'
import Filter from '@/Auto/filter'
import { connect } from "react-redux";
import Card from '@/subcomponents/card'


const mapStateToProps = (state) => {
    return {
        redux: state.redux
    };
}



class Search extends Component {
    constructor(props) {
        super(props)

    }


    render(h) {
        const posts = this.props.redux.searched ?? [];

        return (
            <div className={'searchbox container'}>
                <div className={'split leftSide'}>
                    <div className={'box'}>
                        <Filter filter={this.props.filter}></Filter>
                    </div>
                </div>
                <div className={'split rightSide'}>

                    {posts.map(w => <div className={'col'}>
                        <Card size={'45'} price={w.price} loc={w.name??''} premium={true}>
                            {w.images.map(s=><img src={"http://localhost:5566"+s.thumbnail} />)}
                        </Card>
                    </div>)}


                </div>
            </div>
        );
    }
}



export async function getStaticProps() {
    const res = await fetch('http://192.168.1.107:5566/api/auto/filter')
    const filter = await res.json()
    return {
        props: {
            filter,
        },
    }
}

export default connect(mapStateToProps)(Search);