import * as React from 'react';
import Loader from '@skbkontur/react-ui/Loader';
import { SearchResult } from './redux/searchPageActions';
import { RequestStatus } from '../../redux/utils';
import { SearchBar } from './SearchBar';
import { SearchResults } from './SearchResults';

export interface Actions {
  onSearch: () => void;
  onChangeQuery: (query: string) => any;
}

export interface Props extends Actions {
  query: string;
  searchResult: SearchResult | null;
  requestStatus: RequestStatus;
}

export const SearchPage: React.SFC<Props> = ({
  query,
  onSearch,
  onChangeQuery,
  searchResult,
  requestStatus
}) => (
  <>
    <SearchBar query={query} onSearch={onSearch} onChangeQuery={onChangeQuery} />
    <SearchResults searchResult={searchResult} requestStatus={requestStatus} />
  </>
);
