import {createStore,combineReducers,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import dataReducer from './reducers/dataReducer';
import playistReducer from './reducers/playistReducer';

import { persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

const persistConfig = {
    key:'root',
    storage
}

const reducer = combineReducers({
    data:dataReducer,
    playist:playistReducer
})

const rootReducer = persistReducer(persistConfig,reducer);

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));

const persistor = persistStore(store);

export {persistor};
export default store;