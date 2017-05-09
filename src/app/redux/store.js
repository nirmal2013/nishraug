import CombinedReducers from './reducers/CombinedReducers';
import {
	createStore,
	compose,
	applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';

import defaults from './defaults';

const AppStore = {

	create: (shouldExposeReduxTools) => {
		// The Redux Store.
		let store;

		if (shouldExposeReduxTools) {
			store = createStore(
				CombinedReducers,
				Object.assign({}, defaults),
				compose(
					applyMiddleware(thunk),
					window.devToolsExtension ? window.devToolsExtension() : f => f // WTF is f => f -> https://github.com/reactjs/redux/issues/632
				)
			);
		} else {
			store = createStore(
				CombinedReducers,
				defaults,
				applyMiddleware(thunk)
			);
		}

		// override base store.subscribe to add try catch
		const subscribe = store.subscribe;
		store.subscribe = (func) => {
			return subscribe(() => {
				try {
					func();
				} catch (e) {
					console.error('Error in some user defined subscribe method.', e.stack);
				}
			});
		};

		return store;
	}
};

export default AppStore;
