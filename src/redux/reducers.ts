import { combineReducers } from 'redux';
import { AppActions } from './actions';
import {
  SearchPageState,
  searchPageReducer
} from '../containers/SearchPage/redux/searchPageReducer';

export interface AppState {
  searchPageReducer: SearchPageState;
}

export const rootReducer: (state: AppState, action: AppActions) => AppState = combineReducers<
  AppState,
  AppActions
>({
  searchPageReducer
});
