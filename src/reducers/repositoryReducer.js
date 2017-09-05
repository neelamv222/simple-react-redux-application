import { REPOSITORIES_LIST } from "../constants";

export default function (state = [], action) {
    switch (action.type) {
        case REPOSITORIES_LIST:
            return action.payload
            break;
    }

    return state;
}