import buttonReducer from './buttonReducer';
import * as actions from "../actions/repository";
import { SEE_MORE, COLLAPSE_MODE, TOGGLE_BTN_CLICKED, SEE_LESS, EXPAND_MODE } from "../constants";

describe('button reducer', () => {

    it('returns an empty array as default state', () => {
        const initialState = {
            text: SEE_MORE,
            mode: COLLAPSE_MODE
        };
        let action = { type: 'unknown' };
        let newState = buttonReducer(undefined, { type: 'unknown' });
        expect(newState).toEqual(initialState)
    });

    it('returns the state as per given action', () => {
        const data = {
            text: SEE_LESS,
            mode: EXPAND_MODE
        };
        let action = {
            type: TOGGLE_BTN_CLICKED,
            payload: data
        };
        let newState = buttonReducer(undefined, action);
        expect(newState).toEqual(action.payload);
    });
});


