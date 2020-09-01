import {
    SET_SIDEBAR_STATE
} from './constants'

export const initialState = {
    sideBarExpandedItems: []
};

export const rootReducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case SET_SIDEBAR_STATE:
            const payload = action.payload;
            return {
                ...state,
                sideBarExpandedItems: payload
            };

        default:
            return initialState;
    }
};