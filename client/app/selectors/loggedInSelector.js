import { createSelector } from 'reselect';
import authSelector from 'authSelector';

const loggedInSelector = createSelector(
    authSelector,
    (authState) => authState.get('loggedIn')
);

export default loggedInSelector;
