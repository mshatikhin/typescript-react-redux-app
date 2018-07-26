import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { applyMiddleware, compose, createStore, Store } from 'redux';
import { rootReducer, AppState } from './reducers';
import { rootSaga } from './sagas';

declare var module: any;
declare var require: any;
declare var window: ExtendedWindow;

interface ExtendedWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
}

const initialState = {};

const sagaMiddleware: any = createSagaMiddleware();

export function configureStore(): Store<AppState> {
  // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer as any,
    initialState,
    (compose as any)(applyMiddleware(sagaMiddleware, logger as any))
  ) as Store<AppState>;

  sagaMiddleware.run(rootSaga);

  return store;
}
