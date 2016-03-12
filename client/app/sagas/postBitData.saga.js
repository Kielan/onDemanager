import { BIT_COMMIT_SUBMIT } from 'App/constants';
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

export function* postBitData(getState) {
    while(true) {
	var {bit} = yield take(BIT_COMMIT_SUBMIT);
	const state = yield getState();
	const requestURL = 'http://localhost:3005/api/bitsSubmit';
	console.log('does it even get this far?', bit)
	const bits = yield call(request, requestURL, { method:'POST', headers: {"Content-Type": "application/json"}, body: JSON.stringify(bit) });
	if (bits.err === undefined || bits.err === null) {
	    console.log('maybe hot update just on client the timeline but thats for later')
	} else {
	    console.log(bits.err.response);
	}
    }
}
