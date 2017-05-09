import { VIEW_CONSTANTS } from 'app/utils/constants';
import { ACTION_CONSTANTS } from 'app/utils/constants';

let uiState = (state = {}, action = null) => {
	switch (action.type) {

		case ACTION_CONSTANTS.LOAD_HOME_VIEW:
			return Object.assign({}, state, {
				ViewStack: VIEW_CONSTANTS.HOME
			});

		default:
			return state;
	}
};
export default uiState;
