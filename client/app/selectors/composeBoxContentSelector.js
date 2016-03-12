import { createSelector } from 'reselect';
import globalSelector from 'globalSelector';

const composeBoxContentSelector = createSelector(
  globalSelector,
    (globalState) => globalState.getIn('ComposeBoxState', 'content')
);

export default composeBoxContentSelector;
