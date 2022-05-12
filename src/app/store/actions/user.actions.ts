import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

export const loadUser = createAction('[User] load User',props<{id: String}>());
export const loadUserSuccess = createAction('[User] loadUserSucces', props<{user:User}>());
export const loadUserError = createAction('[User] load User Error', props<{payload:any}>())