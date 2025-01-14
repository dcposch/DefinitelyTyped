// Type definitions for react-router-redux 4.0
// Project: https://github.com/rackt/react-router-redux
// Definitions by: Isman Usoh <https://github.com/isman-usoh>
//                 Noah Shipley <https://github.com/noah79>
//                 Karol Janyst <https://github.com/LKay>
//                 Dovydas Navickas <https://github.com/DovydasNavickas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { History, Location, LocationDescriptor } from "history";
import { Action, Middleware, Store } from "redux";

export const CALL_HISTORY_METHOD: string;
export const LOCATION_CHANGE: string;

export interface LocationActionPayload {
    method: string;
    args?: any[] | undefined;
}

export interface RouterAction extends Action {
    payload?: LocationActionPayload | undefined;
}

export type LocationAction = (nextLocation: LocationDescriptor) => RouterAction;
export type GoAction = (n: number) => RouterAction;
export type NavigateAction = () => RouterAction;

export const push: LocationAction;
export const replace: LocationAction;
export const go: GoAction;
export const goBack: NavigateAction;
export const goForward: NavigateAction;

export interface RouteActions {
    push: typeof push;
    replace: typeof replace;
    go: typeof go;
    goForward: typeof goForward;
    goBack: typeof goBack;
}

export const routerActions: RouteActions;

export interface RouterState {
    locationBeforeTransitions: Location;
}

export type DefaultSelectLocationState = (state: any) => RouterState;

export interface SyncHistoryWithStoreOptions {
    selectLocationState?: DefaultSelectLocationState | undefined;
    adjustUrlOnReplay?: boolean | undefined;
}

export interface HistoryUnsubscribe {
    unsubscribe(): void;
}

export function routerReducer(state?: RouterState, action?: Action): RouterState;
export function syncHistoryWithStore(
    history: History,
    store: Store<any>,
    options?: SyncHistoryWithStoreOptions,
): History & HistoryUnsubscribe;
export function routerMiddleware(history: History): Middleware;
