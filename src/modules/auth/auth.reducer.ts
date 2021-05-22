import AuthAPI from '../../shared/api/auth.api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dispatch } from 'redux';
import { Alert, Platform } from 'react-native';

export const ACTION_TYPES = {
  RESTORE_TOKEN: 'auth/RESTORE_TOKEN',
  SIGN_IN: 'auth/SIGN_IN',
  SIGN_OUT: 'auth/SIGN_OUT',
  ERROR: 'auth/ERROR',
  SET_PROCESSING: 'auth/SET_PROCESSING',
  CHANGE_CURRENT_ROLE: 'auth/CHANGE_CURRENT_ROLE',
  RESET_MESSAGE_ERR: 'auth/RESET_MESSAGE_ERR',
  SET_ACTIVE: 'auth/SET_ACTIVE'
};

const initialState = {
  //splash
  isLoading: true,
  processing: false,
  isSignOut: false,
  userToken: null,
  errorMessage: false,
  // errorMessage: null,
  user: null,
  deptRoles: null,
  currentRole: null,
  active: 0,
};

export type AuthState = Readonly<typeof initialState>;

const AuthReducer = (
  state: AuthState = initialState,
  action: any
): AuthState => {
  switch (action.type) {
    case ACTION_TYPES.SIGN_IN:
      return {
        ...state,
        isSignOut: false,
        isLoading: false,
        processing: false,
        user: action.payload.user,
        deptRoles: action.payload.deptRoles,
      };
    case ACTION_TYPES.SIGN_OUT:
      return {
        ...state,
        processing: false,
        isLoading: false,
        isSignOut: true,
        userToken: null,
        user: null,
        deptRoles: null,
        currentRole: null,
      };
    case ACTION_TYPES.ERROR:
      return {
        ...state,
        processing: false,
        errorMessage: action.payload.errorMessage,
      };
    case ACTION_TYPES.SET_PROCESSING:
      return {
        ...state,
        processing: action.payload.processing,
      };
    case ACTION_TYPES.SET_ACTIVE:
      return {
        ...state,
        active: action.payload.active,
      };
    case ACTION_TYPES.CHANGE_CURRENT_ROLE:
      return {
        ...state,
        currentRole: action.payload.currentRole,
      };
    case ACTION_TYPES.RESET_MESSAGE_ERR:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};



export default AuthReducer;
