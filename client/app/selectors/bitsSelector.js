import { createSelector } from 'reselect';
import globalSelector from 'globalSelector';

const bitsSelector = createSelector(
    globalSelector,
    (globalState) => globalState.getIn(['userData', 'bits'])
);

export default bitsSelector;
