import { LOAD_BITS } from 'App/constants';
import { bitsLoaded } from 'App/actions';
import { take, call, put } from 'redux-saga/effects';

function parseJSON(response) {
  return response.json();
}

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

export function* getBitsData(getState) {
    while(true) {
	yield take(LOAD_BITS);
	const state = yield getState();
	const requestURL = 'http://localhost:3005/bitStream/';
	const bits = yield call(request, requestURL);
	if (bits.err === undefined || bits.err === null) {
	    yield put(bitsLoaded(bits.data));
	} else {
	    console.log(repos.err.response);
	}
    }
}
