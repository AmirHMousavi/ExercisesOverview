import axios from 'axios';
import {FETCH_SOLUTION_GROUPS} from './types';

export function setAllSolutionGroups(solutionGroups) {
    return {type: FETCH_SOLUTION_GROUPS, solutionGroups}
}

export function fetchAllSolutionGroups() {
    return dispatch => {
        axios
            .get("/solution-groups")
            .then((res) => {
                dispatch(setAllSolutionGroups(res.data))
            });
    }
}