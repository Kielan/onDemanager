import { LOAD_BITS } from 'App/constants';
import { bitsLoaded } from 'App/actions';
import { take, call, put } from 'redux-saga';

export function* getBitsData(getState) {
    while(true) {
	yield take(LOAD_BITS);
	const state = yield getState();
	const requestURL = 'http://localhost:3005/bitStream/';
	const bits = yield call(request, requestURL);
	if (bits.err === undefined || bits.err === null) {
	    yield put(bitsLoaded(repos.data));
	} else {
	    console.log(repos.err.response);
	}
    }
}
