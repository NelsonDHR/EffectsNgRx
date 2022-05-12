import { ActionReducerMap, ReducerObservable } from '@ngrx/store';
import * as reducers from './reducers'


export interface AppState {
    users: reducers.usersState,
    user: reducers.userState
}



export const appReducer : ActionReducerMap<AppState> ={
    users: reducers.usersReducer,
    user: reducers.userReducer

}
