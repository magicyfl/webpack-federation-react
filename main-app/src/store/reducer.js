import { combineReducers } from 'redux';


function menus(state = { activeKey: 'recent' }, action) {
    switch (action.type) {
        case 'CHNAGE_MENU': {
            return { ...state, activeKey: action.activeKey };
        }
        default: {
            return state;
        }
    }
}

export default combineReducers({
    menus,
});