import { call, put, takeEvery } from 'redux-saga/effects';
import axios,  { AxiosResponse }  from 'axios';
import { loginUserSuccess, loginUserFailure } from '../actions/userActions';
import { LOGIN_USER_REQUEST } from '../actions/types';

function* loginUserSaga(action: any): Generator<any, void, AxiosResponse>  {
  try {
    const response: AxiosResponse = yield call(axios.post, '/api/auth/login', action.payload);
    localStorage.setItem('token', response.data.token);
    yield put(loginUserSuccess(response.data.user));
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      yield put(loginUserFailure((error.response.data)));
    } else {
      yield put(loginUserFailure((error as Error).message));
    }
  }
}

export function* watchLoginUser() {
  yield takeEvery(LOGIN_USER_REQUEST, loginUserSaga);
}
