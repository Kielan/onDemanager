import { createSelector } from 'reselect';
import authSelector from 'authSelector';

const usernameSelector = createSelector(
  authSelector,
  (authState) => authState.get('username')
);

export default usernameSelector;
