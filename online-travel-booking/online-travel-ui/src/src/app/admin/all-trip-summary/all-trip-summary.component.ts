import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OnlineTravelAdminService } from 'src/app/service/online-travel-admin.service';
import { TripInfo } from 'src/app/model/TripInfo';

@Component({
  selector: 'app-all-trip-summary',
  templateUrl: './all-trip-summary.component.html',
  styleUrls: ['./all-trip-summary.component.css']
})
export class AllTripSummaryComponent implements OnInit {

tripInfoList:TripInfo[];

constructor(private router : Router,
private onlineTravelAdminService : OnlineTravelAdminService) { }

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
      if(userRole!='admin'){ 
        alert('Access Denied');
        this.router.navigate([userRole]);
      }
    }else{
      alert('Access Denied');
      this.router.navigate(["login"]);
    }

    this.onlineTravelAdminService.allEmployeeTripSummary().subscribe( data => {
      //alert('All Trip Info: '+JSON.stringify(data['result']) );
      this.tripInfoList = data['result'];
    });

    


  }

}
