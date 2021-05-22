import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import authReducer, { AuthState } from '../../modules/auth/auth.reducer';
import { configureStore } from '@reduxjs/toolkit';
import loggerMiddleware from '../../config/logger-middleware';

const middleware = [thunk, loggerMiddleware];

export interface IRootState {
    readonly authReducer: AuthState;
}

const reducer = combineReducers<IRootState>({
  authReducer,
});

const store = configureStore({
    reducer,
    middleware,
  });
  
  export default store;
  