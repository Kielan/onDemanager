import { createSelector } from 'reselect';
import globalSelector from 'globalSelector';

const profileEditingSelector = createSelector(
  globalSelector,
  (globalState) => globalState.get('profileEditing')
);

export default profileEditingSelector;
