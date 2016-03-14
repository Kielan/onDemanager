import {
    CHANGE_USERNAME,
    LOAD_REPOS_SUCCESS,
    LOAD_REPOS,
    LOAD_REPOS_ERROR,
    LOAD_BITS_SUCCESS,
    LOAD_BITS_ERROR,
    BIT_COMMIT_SUBMIT,
    EDIT_PROFILE,
    CANCEL_EDIT_PROFILE,
    SAVE_EDIT_PROFILE,
    SHOW_MODAL_COMPOSE,
    UPDATE_MODAL_TEXT_CONTENT
} from './constants';
import { fromJS } from 'immutable';

const initialState = fromJS({
    loading: false,
    error: false,
    currentUser: false,
    profileEditing: false,
    userData: fromJS({
	repositories: false,
	username: '',
	bits: null
    }),
    ComposeBoxState: {
	content: ''
    },
    ModalComposeState {
	content: ''
    },
    showModalCompose: false
});

function globalReducer(state = initialState, action) {
    switch (action.type) {
    case UPDATE_MODAL_TEXT_CONTENT:
	return state.setIn(['ModalComposeState', 'content'], action.newContent)
    case SHOW_MODAL_COMPOSE:
	console.log('showModalCompose', state.get('showModalCompose'))
	return state.set('showModalCompose', true)
    case EDIT_PROFILE:
	var toggle = state.get('profileEditing')
	console.log('meh toggle', toggle);
	return state.set('profileEditing', 'true')
    case CANCEL_EDIT_PROFILE:
	console.log('cancel edit profile')
	return state.set('profileEditing', false)
    case SAVE_EDIT_PROFILE:
	return state.set('profileEditing', false)
    case BIT_COMMIT_SUBMIT:
	
    case LOAD_BITS_SUCCESS:
	console.log('find bits in thar', action)
	return state.setIn(['userData', 'bits'], action.bits)
    case CHANGE_USERNAME:
	// Delete prefixed '@' from github username
	const name = action.name.replace(/@/gi, '');
	return state.setIn(['userData', 'username'], name);
    case LOAD_REPOS:
	return state.set('loading', 'true').setIn(['userData', 'repositories'], false);
    case LOAD_REPOS_SUCCESS:
	return state
            .setIn(['userData', 'repositories'], action.repos)
            .set('loading', false)
            .set('currentUser', state.getIn(['userData', 'username']));
    case LOAD_REPOS_ERROR:
	return state
            .set('error', true)
            .set('loading', false);
    default:
	return state;
    }
}

export default globalReducer;
