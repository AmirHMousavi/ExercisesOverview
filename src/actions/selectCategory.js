import {CATEGORY_SELECTED, DISMISS_SELECTED_CATEGORY} from './types';

export function setSelectedCategory(category) {
    return {type: CATEGORY_SELECTED, category}
}

export function dismiss() {
    return {type: DISMISS_SELECTED_CATEGORY}
}

export function selectCategory(category) {
    return dispatch => {
        dispatch(setSelectedCategory(category))
    }
}
export function dismissSelectedCategory() {
    return dispatch => {
        dispatch(dismiss())
    }
}