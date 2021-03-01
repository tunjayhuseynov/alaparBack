import * as types from '../types'

export const saveFilterAction = (data) => async dispatch => {
    dispatch({
        type: types.SAVE_FILTER,
        payload: data
    })
}
