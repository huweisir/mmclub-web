import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();

const production = process.env.NODE_ENV === "production";
export function configureStore(preloadedState: any) {
    return production ? createStore(
        rootReducer,
        preloadedState
    ) : createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(loggerMiddleware))
}


const settingStore = configureStore({});

export default settingStore;