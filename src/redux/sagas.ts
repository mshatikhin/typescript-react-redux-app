import { fork } from 'redux-saga/effects';
import { searchPageSaga } from '../containers/SearchPage/redux/searchPageSaga';

export function* rootSaga() {
  yield [fork(searchPageSaga)];
}
