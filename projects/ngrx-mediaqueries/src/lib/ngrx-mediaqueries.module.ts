import {
  NgModule,
  ModuleWithProviders,
  Optional,
  SkipSelf
} from "@angular/core";
import { NgrxMQModels } from "./models/mq.model";
import { SETTINGS } from "./services";

@NgModule({
  declarations: [],
  imports: [],
  exports: []
})
export class NgrxMediaqueriesModule {
  constructor(
    @Optional() @SkipSelf() ngrxMediaqueriesModule: NgrxMediaqueriesModule
  ) {
    if (ngrxMediaqueriesModule) {
      console.error("NgrxMediaqueriesModule is imported twice.");
    }
  }
  static forRoot(list: NgrxMQModels.List): ModuleWithProviders {
    return {
      ngModule: NgrxMediaqueriesModule,
      providers: [
        {
          provide: SETTINGS,
          useValue: list
        }
      ]
    };
  }
}
