import { Draft } from 'immer';
import { AnyAction } from 'redux';
import { Epic } from 'redux-observable';
import { RegisterRouteParams } from './epics/routerEpic';
export interface ModelReducers<T> {
    [actionType: string]: (state: Draft<T>, action: AnyAction) => void;
}
export interface CreateModelParams<T> {
    key: string;
    initialState: T;
    route?: string;
    initActions?: RegisterRouteParams[];
    epics?: Epic[];
    reducers?: ModelReducers<T>;
}
export declare const createModel: <T>(params: CreateModelParams<T>) => void;
export default createModel;
//# sourceMappingURL=createModel.d.ts.map