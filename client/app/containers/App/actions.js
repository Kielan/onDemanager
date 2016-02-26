import { UserAuthWrapper } from 'redux-auth-wrapper'
import { push } from 'react-router-redux';
import { CHANGE_USERNAME, LOGIN, LOGIN_SUCCESS, LOAD_BITS, LOAD_BITS_SUCCESS, LOAD_REPOS, LOAD_REPOS_SUCCESS } from './constants';

export function changeUsername(name) {
  return {
    type: CHANGE_USERNAME,
    name
  };
}

export function login() {
    return {
	type: LOGIN
    }
}

export function loginSuccess(user) {
    return {
	type: LOGIN_SUCCESS,
	user
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


export function loadBits() {
    return {
	type: LOAD_BITS
    };
}

export function bitsLoaded(bits) {
    return {
	type: LOAD_BITS_SUCCESS,
	bits
    };
}

export const requireAuthentication = UserAuthWrapper({
  authSelector: state => state.auth,
  predicate: auth => auth.isAuthenticated,
  redirectAction: push,
  wrapperDisplayName: 'UserIsJWTAuthenticated'
})
