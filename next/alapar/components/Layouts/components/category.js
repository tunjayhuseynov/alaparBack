import Card from '@/Layouts/components/card'
import { Component } from 'react'
import {AiOutlineCaretDown} from 'react-icons/ai'
import { v4 as uuidv4 } from 'uuid';

class Category extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="py-4 p-2 sm:p-0">
                <div className="h-30 flex justify-between">
                    <h2 className="text-2xl">Yeni Tikili</h2>
                </div>
                <div className={'grid grid-cols-1 md:grid-cols-2 md:gap-x-4 md:gap-y-4 gap-y-4 py-4'}>
                    <Card key={uuidv4()}></Card>
                    <Card key={uuidv4()}></Card>
                    <Card key={uuidv4()}></Card>
                    <Card key={uuidv4()}></Card>
                </div>
                <div className={'text-center p-3'}>
                    <a className={'box-border p-3 font-semibold bg-gradient-to-r from-skyblue via-blue to-pink rounded-lg text-white'}>Daha çox <AiOutlineCaretDown className={'inline'}/></a> 
                </div>
            </div>
        )
    }
}

export default Category;