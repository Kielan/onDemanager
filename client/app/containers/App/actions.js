import { CHANGE_USERNAME, LOAD_BITS, LOAD_BITS_SUCCESS, LOAD_REPOS, LOAD_REPOS_SUCCESS } from './constants';

export function changeUsername(name) {
  return {
    type: CHANGE_USERNAME,
    name
  };
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
