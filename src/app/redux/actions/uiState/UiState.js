import ViewStack from 'app/redux/actions/uiState/ViewStack';
import { ACTION_CONSTANTS } from 'app/utils/constants';

let showLoading = (show) => {
	return {
		type: ACTION_CONSTANTS.SHOW_LOADING,
		show
	};
};

export default {
	showLoading,
	UiState: Object.assign({},
		ViewStack
	)
};
