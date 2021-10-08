import { createStore, compose } from 'redux'
import rootReducer from './reducers'

// If Redux DevTools Extension is installed use it, otherwise use Redux compose
const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                name: 'GoodGhosting',
                shouldHotReload: false,
            })
        : compose


const configureStore = () => createStore(rootReducer, {}, composeEnhancers())


export default configureStore