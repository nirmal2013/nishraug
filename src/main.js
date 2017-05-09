import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import AppStore from 'app/redux/store';
import App from 'app/app';

const initApp = () => {

	let shouldExposeReduxTools = true;
	const store = AppStore.create({}, shouldExposeReduxTools);

	render(
		<Provider store={store}>
			<App/>
		</Provider>,
		document.getElementById('app')
	);
};

initApp();
