import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import { UserService } from '../../services/user.service';
import { AppState } from '../../store/app.reducers';
import * as uActions from '../../store/actions/users.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  loading:boolean=false;
  users:User[] = [];
  error:any;

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {

    this.store.select('users').subscribe(({users,loading,error})=>{
      this.users=users
      this.loading=loading;
      this.error=error;
    });

    this.store.dispatch(uActions.loadUsers())
    
    //esto se hará usando efectos
    /* this.UserService.getUsers()
      .subscribe(users => {
        console.log(users);
        this.users=users;
      }) */
  }

}
