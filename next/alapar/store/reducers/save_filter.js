import * as types from '../types'

const initialState = {
    searched: null
}

export const saveFilterReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SAVE_FILTER:
            return {
                ...state,
                searched: action.payload
            }
        default:
            return state
    }
}