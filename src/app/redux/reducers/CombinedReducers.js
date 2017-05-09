import {combineReducers} from 'redux';
import UiState from 'app/redux/reducers/uiState/UiState';

const APP_NAME = function APP_NAME(state = {}) {
	return state;
};

export default combineReducers({
	APP_NAME,
	UiState
});
