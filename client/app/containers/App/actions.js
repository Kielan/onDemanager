import { LOGIN_SUBMIT, LOGIN_SUCCESS, CHANGE_USERNAME, LOAD_REPOS, LOAD_REPOS_SUCCESS, CHANGE_FORM, CHANGE_COMPOSE_BOX, LOAD_BITS, LOAD_BITS_SUCCESS, BIT_COMMIT_SUBMIT, EDIT_PROFILE, CANCEL_EDIT_PROFILE, SAVE_EDIT_PROFILE, SHOW_MODAL_COMPOSE, HIDE_MODAL_COMPOSE, UPDATE_MODAL_TEXT_CONTENT, MODAL_BIT_COMMIT_SUBMIT } from './constants';


export function changeForm(newState) {
    return {
	type: CHANGE_FORM,
	newState
    };
}

export function changeComposeBox(ComposeBoxState) {
    return {
	type: CHANGE_COMPOSE_BOX,
	ComposeBoxState
    }
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

export function bitCommitSubmit(author, date, content) {
    console.log('bitCommitSubmit action', date)
    return {
	type: BIT_COMMIT_SUBMIT,
	bit: { author: author, date: date, content: content }
    };
}

export function editProfile() {
    return {
	type: EDIT_PROFILE
    };
}

export function cancelEditProfile() {
    return {
	type: CANCEL_EDIT_PROFILE
    };
}

export function showModalCompose() {
    return {
	type: SHOW_MODAL_COMPOSE
    }
}

export function hideModalCompose() {
    return {
	type: HIDE_MODAL_COMPOSE
    }
}

export function updateModalTextContent(newContent) {
    return {
	type: UPDATE_MODAL_TEXT_CONTENT,
	newContent
    }
}

export function modalBitCommitSubmit(author, date, content) {
    return {
	type: MODAL_BIT_COMMIT_SUBMIT,
	bit: { author: author, date: date, content: content }
    }
}
