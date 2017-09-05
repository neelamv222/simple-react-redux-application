import { SEE_MORE, COLLAPSE_MODE, TOGGLE_BTN_CLICKED } from "../constants";

const initialState = {
    text: SEE_MORE,
    mode: COLLAPSE_MODE
};

export default function (state = initialState, action) {
    switch (action.type) {
        case TOGGLE_BTN_CLICKED:
            return Object.assign({}, state, {
                text: action.payload.text,
                mode: action.payload.mode
            });
            break;
    }

    return state;
}