export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

interface LoginUserRequestAction {
  type: typeof LOGIN_USER_REQUEST;
  payload: { username: string; password: string };
}

interface LoginUserSuccessAction {
  type: typeof LOGIN_USER_SUCCESS;
  payload: { user: any };
}

interface LoginUserFailureAction {
  type: typeof LOGIN_USER_FAILURE;
  payload: string;
}

export type UserActionTypes =
  | LoginUserRequestAction
  | LoginUserSuccessAction
  | LoginUserFailureAction;
