const protectedRoutes = [
    {
	path: '/profile',
	getComponent: function get(location, cb) {
	    require.ensure([], (require) => {
		cb(null, require('ProfilePage').default);
	    }, 'ProfilePage');
	},
	onEnter: function (nextState, replaceState) {
	    let { loggedIn } = store.getState();
	    console.log('wtf featurepage', loggedIn)
	    if (!loggedIn) {
		if(nextState.location.state && nextState.location.pathname) {
		    replaceState(null, nextState.location.pathname);
		} else {
		    replaceState(null, '/');
		}
	    }
	}
    }
];

export default protectedRoutes;
