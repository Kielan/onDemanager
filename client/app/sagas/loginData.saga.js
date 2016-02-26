import { LOGIN } from 'App/constants';
import { loginSuccess } from 'App/actions';
import { take, call, put } from 'redux-saga';

export function* getLoginData(getState) {
    while(true) {
	yield take(LOAD_BITS);
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
