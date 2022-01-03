
import {combineReducers, createStore, applyMiddleware} from "redux"

import thunk from 'redux-thunk';
import {unitReducer} from './unitReducer';
import {formsStatusReducer} from './formsStatusReducer';
import {currentUnitReducer} from './currentUnitReducer';

const rootReducer = combineReducers({
    unitReducer: unitReducer,
    formsStatusReducer: formsStatusReducer,
    currentUnitReducer: currentUnitReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export default store

export type AppStoreType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store; // for dev







