# NgrxMediaqueries [![npm version](https://badge.fury.io/js/%40yoozly%2Fngrx-mediaqueries.svg)](https://badge.fury.io/js/%40yoozly%2Fngrx-mediaqueries)

A lib for Angular that binds media-queries and @ngrx/store together.
The idea behind the creation of the library cames from a talk of Michael Madsen at Rxjs Live called "Reactive Responsive Design" ([Source](https://youtu.be/GKPX0ZAaSCI)).

Possible uses cases are :

- display / hide a component or enable a functionnality according to a specific media query
- compose selectors with media queries to make the UI more responsive (ie: if the screen width is lower than 400px AND the menu is open, then put the content on two columns)

By default, the following

## Installation

Npm : `npm i @yoozly/ngrx-mediaqueries`

Yarn : `yarn add @yoozly/ngrx-mediaqueries`

## Setup - Root Module

### Add the reducer

In the root module of your application, add the reducer `ngrxMediaQueriesReducer()`. In order to merge `ngrxMediaQueriesReducer()` in the map of root reducers, use MERGE_REDUCERS injection token, like below :

```javascript
import {
  MERGE_REDUCERS,
  ngrxMediaQueriesReducer
} from "@yoozly/ngrx-mediaqueries";

@NgModule({
  StoreModule.forRoot(MERGE_REDUCERS, {
    metaReducers: [someMetaReducers]
  }),
  providers: [
    {
      provide: MERGE_REDUCERS,
      useFactory: (): ActionReducerMap<any> => ({
        ...reducers,
        ...ngrxMediaQueriesReducer()
      })
    }
  ],
})
export class RootModule {}
```

### Initialize the library

Use APP_INITIALIZER token to start the library automatically.

```javascript
import { APP_INITIALIZER } from "@angular/core";
import { MediaQueriesService } from "@yoozly/ngrx-mediaqueries";

@NgModule({
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (init: MediaQueriesService) => _ => init,
      deps: [MediaQueriesService],
      multi: true
    }
  ]
})
export class RootModule {}
```

### Include the module

Add `NgrxMediaqueriesModule` in the array of imports.

```javascript
import { NgrxMediaqueriesModule } from "@yoozly/ngrx-mediaqueries";

@NgModule({
  imports: [NgrxMediaqueriesModule]
})
export class RootModule {}
```

By default, the following media queries are watched :

- xxsmall: "(min-width:375px)"
- xsmall: "(min-width:480px)"
- small: "(min-width:600px)"
- medium: "(min-width:768px)"
- large: "(min-width:1024px)"
- xlarge: "(min-width:1280px)"
- xxlarge: "(min-width:1440px)"
- portrait: "(orientation: portrait)"
- landscape: "(orientation: landscape)"
- speech: "speech"
- touchscreen: "(hover: none) and (pointer: coarse)"
- highres: "(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)"

You can override that behavior and add your own set of media queries by using the `NgrxMediaqueriesModule.forRoot({...})` and by passing a configuration object.

```javascript
import { NgrxMediaqueriesModule } from "@yoozly/ngrx-mediaqueries";

@NgModule({
  imports: [
    NgrxMediaqueriesModule.forRoot({
      small: "(min-width:480px)",
      medium: "(min-width:720px)",
      large: "(min-width:1024px)"
    })
  ]
})
export class RootModule {}
```

Here is the full configuration :

```javascript
import { APP_INITIALIZER } from "@angular/core";
import {
  MERGE_REDUCERS,
  ngrxMediaQueriesReducer,MediaQueriesService,NgrxMediaqueriesModule
} from "@yoozly/ngrx-mediaqueries";

@NgModule({
  imports: [NgrxMediaqueriesModule],
  StoreModule.forRoot(MERGE_REDUCERS, {
    metaReducers: [someMetaReducers]
  }),
  providers: [
    {
      provide: MERGE_REDUCERS,
      useFactory: (): ActionReducerMap<any> => ({
        ...reducers,
        ...ngrxMediaQueriesReducer()
      })
    },
    {
      provide: APP_INITIALIZER,
      useFactory: (init: MediaQueriesService) => _ => init,
      deps: [MediaQueriesService],
      multi: true
    }
  ],

```

## API

### Selectors

A set of selectors is provided by default. In order to use it, use the `NgrxMediaQueriesFacade` service, like that :

```javascript
import { NgrxMediaQueriesFacade } from "@yoozly/ngrx-mediaqueries";
constructor(
  private mqService: NgrxMediaQueriesFacade
) {}
```

By default, the following selectors are available :

- getMediaQueryStateXXSmall();
- getMediaQueryStateXSmall();
- getMediaQueryStateSmall();
- getMediaQueryStateMedium();
- getMediaQueryStateLarge();
- getMediaQueryStateXLarge();
- getMediaQueryStateXXLarge();
- getMediaQueryStatePortrait();
- getMediaQueryStateLandscape();
- getMediaQueryStateSpeech();
- getMediaQueryStateTouchscreen();
- getMediaQueryStateHighres();

If you have a custom configuration, there is a special selector that accepts the name of the media query as a param :

```javascript
// in the root module
NgrxMediaqueriesModule.forRoot({
  small: "(min-width:480px)",
  medium: "(min-width:720px)",
  large: "(min-width:1024px)"
});

// then in a component
this.mqService.getMediaQueryState("small");
this.mqService.getMediaQueryState("medium");
this.mqService.getMediaQueryState("large");
```
