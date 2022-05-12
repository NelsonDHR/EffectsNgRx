import { Action, createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import * as uActions from '../actions/index';


export interface usersState {
    users: User[]; 
    loaded: boolean,
    loading: boolean,
    error: any
}

export const usersInitialState: usersState = {
   users: [],
   loaded: false,
   loading: false,
   error: null
}

const _usersReducer = createReducer(usersInitialState,

    on(uActions.loadUsers, state => ({ ...state, loading: true})),
    on(uActions.loadUsersSuccess, (state,{users}) => ({ ...state, 
                                                        loading: false,
                                                        loaded: true,
                                                        users:[...users]})),
    on(uActions.loadUsersError, (state,{payload}) => ({ ...state, 
                                                        loading: false,
                                                        loaded:true,
                                                        error: payload})),

    

);

export function usersReducer(state: usersState | undefined, action: Action) {
    return _usersReducer(state, action);
}