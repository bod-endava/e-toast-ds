export const initialState = {
    
};

export const rootReducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case -1:
            return { ...state };

        default:
            return initialState;
    }
};