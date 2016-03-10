import { LOGIN_SUBMIT, LOGIN_SUCCESS, CHANGE_USERNAME, LOAD_REPOS, LOAD_REPOS_SUCCESS, CHANGE_FORM, LOAD_BITS, LOAD_BITS_SUCCESS } from './constants';


export function changeForm(newState) {
    return {
	type: CHANGE_FORM,
	newState
    };
}

export function changeUsername(name) {
  return {
    type: CHANGE_USERNAME,
    name
  };
}

export function loginSubmit(username, password) {
    console.log('logindata', username, password)
    return {
	type: LOGIN_SUBMIT,
	data: {username, password}
    }
}

export function loginRequest(data) {
    console.log('loginRequest data', data)
    return {
	type: LOGIN_REQUEST,
	payload: {data}
    }
}


export function loginSuccess(data) {
    localStorage.setItem('token', data.accessToken)
    return {
	type: LOGIN_SUCCESS,
	user : {data}
    }
}

export function loadBits() {
    return {
	type: LOAD_BITS
    }
}

export function bitsLoaded(bits) {
    return {
	type: LOAD_BITS_SUCCESS,
	bits
    }
}

export function loadRepos() {
  return {
    type: LOAD_REPOS
  };
}

export function reposLoaded(repos) {
  return {
    type: LOAD_REPOS_SUCCESS,
    repos
  };
}

