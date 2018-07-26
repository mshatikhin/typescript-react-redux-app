// see https://medium.com/@martin_hotell/improved-redux-type-safety-with-typescript-2-8-2c11a8062575

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

// example

// const SET_AGE = '[user] SET_AGE';
// const Actions = {
//   setAge: (age: number) => createAction(SET_AGE, age)
// };
// export type Actions = ActionsUnion<typeof Actions>
