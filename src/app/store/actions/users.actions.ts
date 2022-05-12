import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

export const loadUsers = createAction('[Users] load Users');
export const loadUsersSuccess = createAction('[Users] loadUsersSucces', props<{users:User[]}>());
export const loadUsersError = createAction('[Users] load Users Error', props<{payload:any}>())