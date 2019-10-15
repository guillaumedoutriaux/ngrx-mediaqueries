import { createAction, props } from "@ngrx/store";

import { NgrxMQModels } from "../models/mq.model";

export const updateAllMQ = createAction(
  "[NgrxMediaQueries] Update All Media Queries",
  props<{ list: NgrxMQModels.State }>()
);

export const updateOneMQ = createAction(
  "[NgrxMediaQueries] Update One Media Query",
  props<{ id: string; status: boolean }>()
);
