import { AppActions } from '../../../redux/actions';
import { CHANGE_QUERY, REQUEST, SearchResult, UPDATE_RESULTS } from './searchPageActions';
import { RequestStatus } from '../../../redux/utils';
import { Reducer } from 'redux';

export interface SearchPageState {
  readonly query: string;
  readonly searchResult: SearchResult | null;
  readonly requestStatus: RequestStatus;
}

const initialState: SearchPageState = {
  query: '',
  searchResult: null,
  requestStatus: RequestStatus.Default
};

export const searchPageReducer: Reducer<SearchPageState, AppActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case UPDATE_RESULTS:
      return {
        ...state,
        searchResult: action.payload,
        requestStatus: RequestStatus.Success
      };

    case REQUEST:
      return {
        ...state,
        requestStatus: RequestStatus.Requested
      };

    case CHANGE_QUERY:
      return {
        ...state,
        query: action.payload
      };

    default:
      return state;
  }
};

export const getSearchPageState = (state: SearchPageState): SearchPageState => state;
