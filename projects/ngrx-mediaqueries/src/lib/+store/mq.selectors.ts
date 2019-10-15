import { createFeatureSelector } from "@ngrx/store";
import { createSelector } from "@ngrx/store";

import { NgrxMQModels } from "../models/mq.model";
import { reducerName } from "./mq.reducers";

const getNgrxMediaQueriesState = createFeatureSelector<NgrxMQModels.State>(
  reducerName
);

export const getMediaQueryState = createSelector(
  getNgrxMediaQueriesState,
  (state: NgrxMQModels.State, props: { key: string }) =>
    state && state[props.key]
);

export const getMediaQueryStateXXSmall = createSelector(
  getNgrxMediaQueriesState,
  (state: NgrxMQModels.State) => state && state.xxsmall
);

export const getMediaQueryStateXSmall = createSelector(
  getNgrxMediaQueriesState,
  (state: NgrxMQModels.State) => state && state.xsmall
);

export const getMediaQueryStateSmall = createSelector(
  getNgrxMediaQueriesState,
  (state: NgrxMQModels.State) => state && state.small
);

export const getMediaQueryStateMedium = createSelector(
  getNgrxMediaQueriesState,
  (state: NgrxMQModels.State) => state && state.medium
);

export const getMediaQueryStateLarge = createSelector(
  getNgrxMediaQueriesState,
  (state: NgrxMQModels.State) => state && state.large
);

export const getMediaQueryStateXLarge = createSelector(
  getNgrxMediaQueriesState,
  (state: NgrxMQModels.State) => state && state.xlarge
);

export const getMediaQueryStateXXLarge = createSelector(
  getNgrxMediaQueriesState,
  (state: NgrxMQModels.State) => state && state.xxlarge
);

export const getMediaQueryStatePortrait = createSelector(
  getNgrxMediaQueriesState,
  (state: NgrxMQModels.State) => state && state.portrait
);

export const getMediaQueryStateLandscape = createSelector(
  getNgrxMediaQueriesState,
  (state: NgrxMQModels.State) => state && state.landscape
);

export const getMediaQueryStateSpeech = createSelector(
  getNgrxMediaQueriesState,
  (state: NgrxMQModels.State) => state && state.speech
);

export const getMediaQueryStateTouchscreen = createSelector(
  getNgrxMediaQueriesState,
  (state: NgrxMQModels.State) => state && state.touchscreen
);

export const getMediaQueryStateHighres = createSelector(
  getNgrxMediaQueriesState,
  (state: NgrxMQModels.State) => state && state.highres
);
