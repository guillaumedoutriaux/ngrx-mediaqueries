import { Injectable, Inject, Optional } from "@angular/core";
import { Store } from "@ngrx/store";

import { updateAllMQ, updateOneMQ } from "../+store";
import { NgrxMQModels } from "../models/mq.model";
import { SETTINGS } from "./mq.tokens";
import { ngrxMediaQueriesDefault } from "./mq.default";
import { BrowserWindowRef } from "./windowref.service";

@Injectable({ providedIn: "root" })
export class MediaQueriesService {
  private mqList: NgrxMQModels.List;

  constructor(
    private store: Store<any>,
    private wr: BrowserWindowRef,
    @Optional() @Inject(SETTINGS) private list: NgrxMQModels.List
  ) {
    this.mqList = this.list ? this.list : ngrxMediaQueriesDefault;
    this.init();
  }

  public init() {
    this.initializeStore();
    this.initializeListeners();
  }

  private initializeStore(): void {
    const storeDatas = this.convertListForStore();
    this.store.dispatch(updateAllMQ({ list: storeDatas }));
  }

  private convertListForStore(): NgrxMQModels.State {
    return Object.keys(this.mqList).reduce((acc, key) => {
      acc[key] = false;
      return acc;
    }, {});
  }

  private initializeListeners() {
    if (this.wr.nativeWindow) {
      Object.entries(this.mqList).forEach(([key, value]) => {
        const mediaQuery: MediaQueryList = this.wr.nativeWindow.matchMedia(
          `${value}`
        );
        mediaQuery.addListener(mq =>
          this.store.dispatch(updateOneMQ({ id: key, status: mq.matches }))
        );
        this.store.dispatch(
          updateOneMQ({ id: key, status: mediaQuery.matches })
        );
      });
    }
  }
}
