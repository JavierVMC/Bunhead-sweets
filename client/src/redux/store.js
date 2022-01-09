import { createStore, combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { authR } from './reducers/AuthR';
import { userR } from './reducers/UserR';
import { filtersR } from './reducers/FiltersR';
import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const reducers = {
  authR,
  userR,
  filtersR
};

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2
};

const rootReducer = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const configureStore = () =>
  createStore(persistedReducer, composeEnhancer(applyMiddleware(thunk)));
