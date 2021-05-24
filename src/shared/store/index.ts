import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import authReducer, { AuthState } from '../../modules/auth/auth.reducer';
import { configureStore } from '@reduxjs/toolkit';
import loggerMiddleware from '../../config/logger-middleware';
import DashBoardReducer, {DashBoardState} from 'app/modules/dashboard/dashboard.reducer'
const middleware = [thunk, loggerMiddleware];

export interface IRootState {
    readonly authReducer: AuthState;
    readonly DashBoardReducer: DashBoardState;
}

const reducer = combineReducers<IRootState>({
  authReducer,
  DashBoardReducer
});

const store = configureStore({
    reducer,
    middleware,
  });
  
  export default store;
  