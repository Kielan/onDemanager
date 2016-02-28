/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import { combineReducers } from 'redux-immutable';
import { routeReducer } from 'react-router-redux';
import globalReducer from 'App/reducer';
import auth from 'App/authReducer';

export default combineReducers({
    auth,
    route: routeReducer,
    global: globalReducer
});
