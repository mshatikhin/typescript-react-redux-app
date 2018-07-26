import { AppState } from './reducers';
import { getSearchPageState } from '../containers/SearchPage/redux/searchPageReducer';

export const searchPageSelector = (state: AppState) => getSearchPageState(state.searchPageReducer);
