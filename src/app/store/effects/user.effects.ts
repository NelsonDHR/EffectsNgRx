import { Injectable } from "@angular/core";
import { Actions, createEffect,  Effect,  ofType } from "@ngrx/effects";
import * as uActions from "../actions";
import { Action, Store } from '@ngrx/store';
import { catchError, map, mergeMap, tap } from "rxjs/operators";
import { UserService } from '../../services/user.service';
import { User } from "src/app/models/user.model";
import { AppState } from '../app.reducers';

import { of } from "rxjs";

@Injectable()
export class userEffects{

    //actions$ esta $ indica por convencion que es un observable. Actions es un observable que escuhca las acciones que se disparan
    constructor(private actions$: Actions,private userService:UserService,private store:Store<AppState>){}
    
    //El create effect necesita un callback que regresa un observable
    @Effect({dispatch: false})
    loadUserS$ = this.actions$.pipe(
        ofType(uActions.loadUser),
        tap(data => console.log('effect tap',data)),
        mergeMap(( action )=> this.userService.getUserByID(action.id)
        .pipe(
            map((user:User) => 
                    this.store.dispatch(uActions.loadUserSuccess({user:user}))
            ),
            catchError( err => of (this.store.dispatch(uActions.loadUserError({payload:err}))))
        )
    ));

}