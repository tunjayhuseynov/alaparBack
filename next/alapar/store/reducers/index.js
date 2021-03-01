import { GiCombinationLock } from 'react-icons/gi'
import { combineReducers } from 'redux'
import { saveFilterReducer } from './save_filter'


export default combineReducers({
    redux: saveFilterReducer
})