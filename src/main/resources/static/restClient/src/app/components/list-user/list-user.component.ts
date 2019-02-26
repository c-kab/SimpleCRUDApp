import {Component, OnInit} from '@angular/core';
import {UserServService} from "../../shared_service/user-serv.service";

@Component({
  selector: 'app-list-user',
  styleUrls: ['./list-user.component.css'],
  templateUrl: './list-user.component.html'
})
export class ListUserComponent implements OnInit {


  public users : any ;
  public errorMessage: string;

  constructor(private _userService : UserServService) { }

  ngOnInit() {
    this._userService.getUsers().subscribe(users => {
      this.users = users ;
    console.log(users) ;
    } ) ;

  }

}
