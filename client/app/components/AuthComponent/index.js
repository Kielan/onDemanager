import React from 'react';
import autobind from 'react-autobind';
import {connect} from 'react-redux';
import {pushState} from 'redux-router';

export function requireAuthentication(Component) {

class AuthComponent extends React.Component {
    constructor(props, context) {
	super();
	autobind(this);
	this.state = {

	}
    }

    componentWillMount () {
	this.checkAuth(this.props.isAuthenticated);
    }

    componentWillReceiveProps (nextProps) {
	this.checkAuth(nextProps.isAuthenticated);
    }

    checkAuth (isAuthenticated) {
        if (!isAuthenticated) {
            let redirectAfterLogin = this.props.location.pathname;
            this.props
                .dispatch(pushState(null, `/login?next=${redirectAfterLogin}`));
        }
    }
    
    render() {
	return (
		<div>
		{this.props.isAuthenticated === true
                 ? <Component {...this.props}/>
                 : null
                }
		</div>
	)
    }
} //end component

    const mapStateToProps = (state) => ({
	token: state.auth.token,
	userName: state.auth.userName,
	isAuthenticated: state.auth.isAuthenticated
    })

    return connect(mapStateToProps)(AuthComponent);
}
