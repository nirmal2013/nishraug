import React from 'react';
import {connect} from 'react-redux';
import Home from 'app/components/home';
import Login from 'app/components/login';
import { VIEW_CONSTANTS } from 'app/utils/constants';

const App = ({viewStack}, {store}) => {

	let view;

	switch (viewStack) {
		case VIEW_CONSTANTS.HOME:
			view = <Home store={store} />;
			break;
		case VIEW_CONSTANTS.LOGIN:
			view = <Login store={store} />;
			break;
		default:
			view = null;
	}

	return (
		<div>
			{ view }
		</div>
	);

};

// Redux Connector to store
const mapStateToProps = (state) => {
	return {
		viewStack: state.UiState.ViewStack
	};
};

App.propTypes = {
	viewStack: React.PropTypes.string
};

App.contextTypes = {
	store: React.PropTypes.object
};

export default connect(mapStateToProps)(App);
