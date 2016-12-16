import {CATEGORY_SELECTED, DISMISS_SELECTED_CATEGORY} from '../actions/types';


export default function selectedCategory(state = {}, action) {
    switch (action.type) {
        case CATEGORY_SELECTED:
            const category = action.category
            return {...state,...category};
        case DISMISS_SELECTED_CATEGORY:
            return {};
        default:
            return state;
    }
}
