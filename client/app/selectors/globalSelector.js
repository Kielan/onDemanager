const globalSelector = (state) => state.get('global');
console.log('state.get', ((state) => state.get('global')));
console.log('globalSelector', globalSelector)
export default globalSelector;
