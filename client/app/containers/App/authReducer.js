import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    CHANGE_FORM
} from './constants';
import { fromJS } from 'immutable';

const initialState = fromJS({
    formState: {
	username: '',
	password: ''
    },
    token: null,
    isAuthenticating: false,
    loggedIn: false,
    _id: '',
    username: '',
    password: '',
    bits: ''
});

function authReducer(state = initialState, action) {
    switch (action.type) {
    case CHANGE_FORM:
	console.log('action.newState? ', action)
	return state.set('formState', action.newState)
    case LOGIN_REQUEST:
	console.log('state',state)
	return state.set('isAuthenticating', 'true')
    case LOGIN_SUCCESS:
	console.log('state', state, 'action', action);
	return state.set('isAuthenticating', 'false').set('loggedIn', 'true').set('username', action.user.data.profile.name).set('token', action.user.data.accessToken).set('_id', action.user.data._id);
    default:
	return state;
    }
}

export default authReducer;
