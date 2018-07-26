import { ActionsUnion, createAction } from '../../../redux/action-helpers';

interface Photos {
  photo?: Photo[];
}

export interface SearchResult {
  page: number;
  pages: number;
  perpage: number;
  photos?: Photos;
}

export interface Photo {
  id: string;
  owner: string;
  secret: string;
  server: string;
  farm: string;
  title: string;
  ispublic: number;
  isfriend: number;
  isfamily: number;
}

export const REQUEST = '[SEARCH_PAGE] REQUEST';
export const CHANGE_QUERY = '[SEARCH_PAGE] CHANGE_QUERY';
export const UPDATE_RESULTS = '[SEARCH_PAGE] UPDATE_RESULTS';

export const SearchPageActions = {
  searchRequest: (payload: { query: string }) => createAction(REQUEST, payload),
  changeQueryText: (payload: string) => createAction(CHANGE_QUERY, payload),
  updateSearchResults: (payload: SearchResult | null) => createAction(UPDATE_RESULTS, payload)
};

export type SearchPageActions = ActionsUnion<typeof SearchPageActions>;
