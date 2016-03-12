import { LOGIN_SUBMIT, LOGIN_REQUEST } from 'App/constants';
import { loginSuccess } from 'App/actions';
import { take, call, put } from 'redux-saga/effects';

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
	console.log('response.status', response.status)
    return response;
  }
    const error = new Error(response.statusText);
    console.log('err tt ', response)
  error.response = response;
  throw error;
}

function request(url, options) {
    console.log('url and options', url, options, fetch(url, options))
    return fetch(url, options )
	.then(checkStatus)
	.then(parseJSON)
	.then((data) => ({ data }))
	.catch((err) => ({ err }));
}

export function* getLoginData(getState) {
    while(true) {
	var {data} = yield take(LOGIN_SUBMIT);
	const state = yield getState();
	const username = state.getIn(['auth', 'userData', 'username']);
	const requestURL = 'http://localhost:3005/api/login';
	const userInfo = yield call(request, requestURL, { method:'POST', headers: {"Content-Type": "application/json"}, body: JSON.stringify(data) });
	console.log('userInfo ', userInfo)
	if (userInfo.err === undefined || userInfo.err === null) {
	    yield put(loginSuccess(userInfo.data));
	} else {
	    console.log(userInfo.err.response);
	}
    }
}
