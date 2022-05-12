import { Action, createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import * as uActions from '../actions/index';


export interface userState {
    id: String,
    user: User|null,
    loaded: boolean,
    loading: boolean,
    error: any
}

export const userInitialState: userState = {
   id: '',
   user: null,
   loaded: false,
   loading: false,
   error: null
}

const _userReducer = createReducer(userInitialState,

    on(uActions.loadUser, (state,{id}) => (
        { 
            ...state, 
            loading: true, 
            id: id})),
    on(uActions.loadUserSuccess, (state,{user}) => ({ ...state, 
                                                        loading: false,
                                                        loaded: true,
                                                        user:{...user}})),
    on(uActions.loadUserError, (state,{payload}) => ({ ...state, 
                                                        loading: false,
                                                        loaded:true,
                                                        error: payload})),

    

);

export function userReducer(state: userState | undefined, action: Action) {
    return _userReducer(state, action);
}