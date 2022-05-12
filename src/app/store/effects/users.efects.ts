import { Injectable } from "@angular/core";
import { Actions, createEffect,  Effect,  ofType } from "@ngrx/effects";
import * as uActions from "../actions";
import { Action, Store } from '@ngrx/store';
import { catchError, map, mergeMap, tap } from "rxjs/operators";
import { UserService } from '../../services/user.service';
import { User } from "src/app/models/user.model";
import { AppState } from '../app.reducers';
import { loadUsersError } from '../actions/users.actions';
import { of } from "rxjs";

@Injectable()
export class usersEffects{

    //actions$ esta $ indica por convencion que es un observable. Actions es un observable que escuhca las acciones que se disparan
    constructor(private actions$: Actions,private userService:UserService,private store:Store<AppState>){}
    
    //El create effect necesita un callback que regresa un observable
    @Effect({dispatch: false})
    loadUsers$ = this.actions$.pipe(
        ofType(uActions.loadUsers),
        tap(data => console.log('effect tap',data)),
        mergeMap(()=> this.userService.getUsers()
        .pipe(
            map((users:User[]) => 
                    this.store.dispatch(uActions.loadUsersSuccess({users:users}))
            ),
            catchError( err => of (this.store.dispatch(loadUsersError({payload:err}))))
        )
    ));

}