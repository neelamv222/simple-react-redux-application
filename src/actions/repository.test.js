import { handleToggleBtnClick } from './repository';
import { TOGGLE_BTN_CLICKED, SEE_LESS, EXPAND_MODE } from "../constants";

describe('actions', () => {
    it('should create an action to handle button click (Expanding/Collapsing the list)', () => {
        const obj = { text: SEE_LESS, mode: EXPAND_MODE }
        const expectedAction = {
            type: TOGGLE_BTN_CLICKED,
            payload: obj
        }
        expect(handleToggleBtnClick(obj)).toEqual(expectedAction)
    })
})

