import { combineReducers } from 'redux';


function menus(state = { activeKey: 'recent' }, action) {
    switch (action.type) {
        case 'CHNAGE_MENU': {
            return { ...state, activeKey: action.data };;
        }

        default: {
            return state;
        }
    }
}

function config(state = { theme: 'pwd-theme' }, action) {
    switch (action.type) {
        case 'CHNAGE_CONFIG': {
            return state;
        }

        default: {
            return state;
        }
    }
}

function user(state = { name: 'pwd-username' }, action = {}) {
    switch (action.type) {
        case 'CHNAGE_USER': {
            return state;
        }

        default: {
            return state;
        }
    }
}

export default combineReducers({
    menus,
    config,
    user,
});