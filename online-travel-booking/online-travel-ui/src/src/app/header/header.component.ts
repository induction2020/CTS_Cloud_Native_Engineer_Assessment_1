import { Component, OnInit } from '@angular/core';
import { OnlineTravelDataService } from '../service/online-travel-data.service';
import { AuthUser } from '../model/AuthUser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  private currentUser : AuthUser;
  private userName : string;
  private userRole : string;


  constructor(private onlineTravelDataService : OnlineTravelDataService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(this.currentUser !=null){
      //alert('currentUser: '+ JSON.stringify(this.currentUser) );
      this.userName = this.currentUser['userName'];
      this.userRole = "Role : "+this.currentUser['role'];
    }else{
      //alert('currentUser: '+ JSON.stringify(this.currentUser) );
      this.userName = "";
      this.userRole = "";
    }
  }

  ngOnInit() {

  }

}
