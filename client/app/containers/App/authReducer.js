import {
  LOGIN
} from './constants';
import { fromJS } from 'immutable';

const initialState = fromJS({
    isAuthenticating: false,
    loggedIn: false,
    username: '',
    password: '',
    bits: ''
});

function authReducer(state = initialState, action) {
    switch (action.type) {
    case LOGIN:
	console.log('state',state)
	return state.set('isAuthenticating', 'true')
    default:
	return state;
    }
}

export default authReducer;
