import { createStore, compose } from 'redux';
import { rootReducer } from './root-reducer';


export default function configureStore() {
    let composeEnhancers = compose;

    if (process.env.NODE_ENV !== "production" && typeof window === "object") {
        /* eslint-disable no-underscore-dangle */
        if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
            {
                composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
            }
        /* eslint-enable */
    }

    const store = createStore(
        rootReducer,
        composeEnhancers()
    );

    return store;
}
