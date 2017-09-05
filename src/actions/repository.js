import getReactRepos from "../service/getReactRepos"
import { REPOSITORIES_LIST, TOGGLE_BTN_CLICKED } from "../constants"

export const getReactRepositories = () => {
    return function (dispatch) {
        getReactRepos().then((result) => {
            return dispatch({
                type: REPOSITORIES_LIST,
                payload: result
            }),
                (reason) => console.warn('getReactRepos Rejection reason:', reason)
        })
            .catch((error) => console.error('getReactRepos Error:', error))
    }
}

export const handleToggleBtnClick = (initialText) => {
    return {
        type: TOGGLE_BTN_CLICKED,
        payload: initialText
    }
}