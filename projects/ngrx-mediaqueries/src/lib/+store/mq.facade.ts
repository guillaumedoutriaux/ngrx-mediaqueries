import { Injectable } from "@angular/core";
import { Store, select } from "@ngrx/store";

import { Observable } from "rxjs";

import { NgrxMQModels } from "../models/mq.model";
import * as fromSelector from "../+store/mq.selectors";

@Injectable({ providedIn: "root" })
export class NgrxMediaQueriesFacade {
  constructor(private store: Store<NgrxMQModels.State>) {}

  public getMediaQueryState(key: string): Observable<boolean> {
    return this.store.pipe(
      select(fromSelector.getMediaQueryState, { key: key })
    );
  }

  public getMediaQueryStateXXSmall(): Observable<boolean> {
    return this.store.pipe(select(fromSelector.getMediaQueryStateXXSmall));
  }

  public getMediaQueryStateXSmall(): Observable<boolean> {
    return this.store.pipe(select(fromSelector.getMediaQueryStateXSmall));
  }

  public getMediaQueryStateSmall(): Observable<boolean> {
    return this.store.pipe(select(fromSelector.getMediaQueryStateSmall));
  }

  public getMediaQueryStateMedium(): Observable<boolean> {
    return this.store.pipe(select(fromSelector.getMediaQueryStateMedium));
  }

  public getMediaQueryStateLarge(): Observable<boolean> {
    return this.store.pipe(select(fromSelector.getMediaQueryStateLarge));
  }

  public getMediaQueryStateXLarge(): Observable<boolean> {
    return this.store.pipe(select(fromSelector.getMediaQueryStateXLarge));
  }

  public getMediaQueryStateXXLarge(): Observable<boolean> {
    return this.store.pipe(select(fromSelector.getMediaQueryStateXXLarge));
  }

  public getMediaQueryStatePortrait(): Observable<boolean> {
    return this.store.pipe(select(fromSelector.getMediaQueryStatePortrait));
  }

  public getMediaQueryStateLandscape(): Observable<boolean> {
    return this.store.pipe(select(fromSelector.getMediaQueryStateLandscape));
  }

  public getMediaQueryStateSpeech(): Observable<boolean> {
    return this.store.pipe(select(fromSelector.getMediaQueryStateSpeech));
  }

  public getMediaQueryStateTouchscreen(): Observable<boolean> {
    return this.store.pipe(select(fromSelector.getMediaQueryStateTouchscreen));
  }

  public getMediaQueryStateHighres(): Observable<boolean> {
    return this.store.pipe(select(fromSelector.getMediaQueryStateHighres));
  }
}
