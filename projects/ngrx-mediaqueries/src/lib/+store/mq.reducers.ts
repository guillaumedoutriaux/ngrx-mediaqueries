import { ActionReducerMap, Action, createReducer, on } from "@ngrx/store";
// import { NgrxFormState } from "../models";
import * as fromActions from "./mq.actions";

export const reducerName = "ngrxMediaQueries";

const initialState: any = {};

const featureReducer = createReducer(
  initialState,
  on(fromActions.updateAllMQ, (state, { list }) => ({
    ...state,
    ...list
  })),
  on(fromActions.updateOneMQ, (state, { id, status }) => ({
    ...state,
    [id]: status
  }))
);

function reducer(state: any | undefined, action: Action) {
  return featureReducer(state, action);
}

export const ngrxMediaQueriesReducer = (): ActionReducerMap<any> => ({
  [reducerName]: reducer
});
