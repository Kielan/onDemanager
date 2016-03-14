import { createSelector } from 'reselect';
import globalSelector from 'globalSelector';

const showModalComposeSelector = createSelector(
    globalSelector,
    (globalState) => globalState.get('showModalCompose')
);

export default showModalComposeSelector;
