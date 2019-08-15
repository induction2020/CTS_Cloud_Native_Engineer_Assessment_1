import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OnlineTravelEmployeeService } from 'src/app/service/online-travel-employee.service';
import { BookInfo } from 'src/app/model/bookInfo';

@Component({
  selector: 'app-confirm-ride',
  templateUrl: './confirm-ride.component.html',
  styleUrls: ['./confirm-ride.component.css']
})
export class ConfirmRideComponent implements OnInit {

  constructor(private router : Router,
  private onlineTravelEmployeeService: OnlineTravelEmployeeService) { }

  bookInfoList : BookInfo[];
  
  columnDefs = [
    {headerName: 'User Id', field: 'userId'},
    {headerName: 'User Name', field: 'userName'},
    {headerName: 'From', field: 'from'},
    {headerName: 'To', field: 'to'},
    {headerName: 'Travel Date', field: 'date'},
    {headerName: 'No of Passengers', field: 'noOfSeats'}
  ];

  ngOnInit() {
    let currentUser= JSON.parse(localStorage.getItem('currentUser'));
    if(currentUser !=null){
      let userRole = currentUser['role'];
      if( userRole!='employee'){
        alert('Access Denied');
        this.router.navigate([userRole]);
      }
    }else{
      alert('Access Denied');
      this.router.navigate(["login"]);
    }

    this.onlineTravelEmployeeService.getOpenRides().subscribe(data =>{
      //alert("Open Rides : "+ JSON.stringify( data['result']) );      
      this.bookInfoList = data['result'];
    });
  }


}
