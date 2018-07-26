# Типизируй правильно!


Пример использования:

```typescript

// Actions:

export const REQUEST = '[SEARCH_PAGE] REQUEST';
export const SearchPageActions = {
  searchRequest: (payload: { query: string }) => createAction(REQUEST, payload)
};
export type SearchPageActions = ActionsUnion<typeof SearchPageActions>;


// Reducers:

export interface SearchPageState {
  readonly query: string;
}

const initialState: SearchPageState = {
  query: ''
};

export const searchPageReducer: Reducer<SearchPageState, AppActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
   
    case REQUEST:
      return {
        ...state,
        requestStatus: RequestStatus.Requested
      };

    default:
      return state;
  }
};


```


Презентация:
https://speakerdeck.com/codefest/codefest-2018-mikhail-shatikhin-skb-kontur-kak-tipizirovat-redux-prilozhieniie-na-typescript-ili-flow

Видео доклада:
https://2018.codefest.ru/lecture/1313/



```typescript
// original to see https://medium.com/@martin_hotell/improved-redux-type-safety-with-typescript-2-8-2c11a8062575

export interface Action<T extends string> {
  type: T;
}

export interface ActionWithPayload<T extends string, P> extends Action<T> {
  payload: P;
}

export function createAction<T extends string>(type: T, payload?: undefined): Action<T>;
export function createAction<T extends string, P>(type: T, payload: P): ActionWithPayload<T, P>;
export function createAction<T extends string, P>(type: T, payload: P) {
  return payload === undefined ? { type } : { type, payload };
}

type ActionFn<T extends string> = () => Action<T>;
type ActionWithPayloadFn<T extends string, P> = (payload: P) => ActionWithPayload<T, P>;

function action<T extends string>(type: T): ActionFn<T>;
function action<T extends string, P>(type: T): ActionWithPayloadFn<T, P>;
function action(type: string) {
  return (payload?: any) => (payload ? { type, payload } : { type });
}

type FunctionType = (...args: any[]) => any;

interface ActionCreatorsMapObject {
  [actionCreator: string]: FunctionType;
}

export type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<A[keyof A]>;

```
