import { Props, SearchPage } from './SearchPage';
import { connect } from 'react-redux';
import { searchPageSelector } from '../../redux/selectors';
import { SearchPageActions } from './redux/searchPageActions';
import { SearchPageState } from './redux/searchPageReducer';

const searchPageActions = {
  searchRequest: SearchPageActions.searchRequest,
  changeQueryText: SearchPageActions.changeQueryText
};

const mergeProps = (
  stateProps: SearchPageState,
  dispatchProps: typeof searchPageActions
): Props => {
  const onSearch = () => {
    dispatchProps.searchRequest({ query: stateProps.query });
  };

  return {
    query: stateProps.query,
    searchResult: stateProps.searchResult,
    requestStatus: stateProps.requestStatus,
    onChangeQuery: dispatchProps.changeQueryText,
    onSearch
  };
};

export const SearchContainer = connect(searchPageSelector, searchPageActions, mergeProps)(
  SearchPage
);
