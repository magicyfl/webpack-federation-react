import { combineReducers } from 'redux';


function listData(state = [{
    name: 'spd-name1',
    password: 'spd-password1',
}, {
    name: 'spd-name2',
    password: 'spd-password2',
}, {
    name: 'spd-name3',
    password: 'spd-password3',
}], action) {
    switch(action.type) {
        case 'CHANGE_LIST_DATA': {
            return action.data;
        }

        default: {
            return state;
        }
    }
}

export default combineReducers({
    listData,
});