import { LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, UserActionTypes } from './types';

export const loginUser = (credentials: { username: string; password: string }): UserActionTypes => ({
  type: LOGIN_USER_REQUEST,
  payload: credentials,
});

export const loginUserSuccess = (user: any): UserActionTypes => ({
  type: LOGIN_USER_SUCCESS,
  payload: user,
});

export const loginUserFailure = (error: string): UserActionTypes => ({
  type: LOGIN_USER_FAILURE,
  payload: error,
});
