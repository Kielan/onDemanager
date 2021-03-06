import { LOGIN } from 'App/constants';
import { loginSuccess } from 'App/actions';
import { take, call, put } from 'redux-saga';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function request(url, options) {
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then((data) => ({ data }))
    .catch((err) => ({ err }));
}

export function* getLoginData(getState) {
    while(true) {
	yield take(LOGIN);
	const state = yield getState();
	const requestURL = 'http://localhost:3005/login/';
	const login = yield call(request, requestURL);
	if (login.err === undefined || login.err === null) {
	    console.log(login)
	    yield put(loginSuccess(login));
	} else {
	    console.log(repos.err.response);
	}
    }
}
