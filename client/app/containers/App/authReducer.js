import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_ERROR
} from './constants';
import { fromJS } from 'immutable';

const initialState = fromJS({
    isAuthenticated: false,
    user: fromJS({
	name: '',
	email: '',
	username: '',
	followers: '',
	following: '',
	bits: null
    })
})

function authReducer(state = initialState, action) {
    switch (action.type) {
    case LOGIN:
	return state.set('loading', 'true')
	    .setIn(['user', 'username'], action.username)
    default:
	return state;
    }
}

export default authReducer;
