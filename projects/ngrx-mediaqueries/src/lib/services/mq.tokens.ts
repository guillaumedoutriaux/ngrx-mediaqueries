import { InjectionToken } from "@angular/core";
import { ActionReducerMap } from "@ngrx/store";

import { NgrxMQModels } from "../models/mq.model";

export const SETTINGS = new InjectionToken<NgrxMQModels.List>(
  "Media Query Service"
);
export const MERGE_REDUCERS = new InjectionToken<ActionReducerMap<any>>(
  "Media Query Reducers"
);
