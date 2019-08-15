import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OnlineTravelEmployeeService } from 'src/app/service/online-travel-employee.service';
import { TripInfo } from 'src/app/model/TripInfo';

@Component({
  selector: 'app-trip-summary',
  templateUrl: './trip-summary.component.html',
  styleUrls: ['./trip-summary.component.css']
})
export class TripSummaryComponent implements OnInit {

  constructor( private router : Router,
  private onlineTravelEmployeeService : OnlineTravelEmployeeService) { }
  tripInfoList:TripInfo[];
  
  columnDefs = [

    {headerName: 'User Id', field: 'userId'},
    {headerName: 'User Name', field: 'userName'},
    {headerName: 'Employee Id', field: 'empId'},
    {headerName: 'Employee Name', field: 'empName'},
    {headerName: 'From', field: 'from'},
    {headerName: 'To', field: 'to'},
    {headerName: 'Travel Date', field: 'date'},
    {headerName: 'No of Passengers', field: 'noOfSeats'},
    {headerName: 'Amount', field: 'amount'}
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

    this.onlineTravelEmployeeService.employeeTripSummary().subscribe( data => {
      this.tripInfoList = data['result'];
    });

    
  }

}
