import 'whatwg-fetch';
import { call, put, takeLatest } from 'redux-saga/effects';
import { REQUEST, SearchPageActions, SearchResult } from './searchPageActions';
import { FLICKR_API_KEY } from '../../../config';

type SearchRequesActionType = ReturnType<typeof SearchPageActions.searchRequest>;


function fetchPhotosApi(query: string): Promise<SearchResult> {
  // tslint:disable-next-line:max-line-length
  const options = `method=flickr.photos.search&api_key=${FLICKR_API_KEY}&tags=${query}&format=json&nojsoncallback=1`;
  const url = `https://api.flickr.com/services/rest/?${options}`;
  return fetch(url)
    .then(response => response.json())
    .catch(() => null);
}

function* request(action: SearchRequesActionType) {
  const query = action.payload.query;
  if (query == null || query.length === 0) {
    yield put(SearchPageActions.updateSearchResults(null));
  } else {
    const result: SearchResult = yield call(fetchPhotosApi, query);
    yield put(SearchPageActions.updateSearchResults(result));
  }
}

export function* searchPageSaga() {
  yield takeLatest<SearchRequesActionType>(REQUEST, request);
}
