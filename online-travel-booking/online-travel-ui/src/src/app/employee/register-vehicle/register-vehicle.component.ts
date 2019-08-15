import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OnlineTravelEmployeeService } from 'src/app/service/online-travel-employee.service';

@Component({
  selector: 'app-register-vechile',
  templateUrl: './register-vechicle.component.html',
  styleUrls: ['./register-vechicle.component.css']
})
export class RegisterVehicleComponent implements OnInit {
  
  registerVechileForm : FormGroup;

  constructor(private formBuilder : FormBuilder,
    private router : Router,
    private onlineTravelEmployeeService: OnlineTravelEmployeeService) { }

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

    this.registerVechileForm = this.formBuilder.group({
      userId: ['', Validators.required],
      userName: ['', Validators.required],
      vechileNo: ['', Validators.required],
      vechileModel: ['', Validators.required],
      mobile: ['', Validators.required],
      noOfSeats: ['', Validators.required]
    });
  }

  registerVechile(){
    this.onlineTravelEmployeeService.registerVechile(this.registerVechileForm.value)
    .subscribe( data => {
      //alert('Booked Ride Success: '+JSON.stringify(data['result']) );
      // this.onlineTravelDataService.submitBookRideInfo(data['result']);
      this.router.navigate(['confirm-ride']);
    });
  }
}

