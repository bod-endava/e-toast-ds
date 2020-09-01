import {
    SET_SIDEBAR_STATE
} from './constants';

export function setSidebarState(payload) {
    return {
        payload: payload,
        type: SET_SIDEBAR_STATE
    };
}