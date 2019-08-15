import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OnlineTravelCustomerService } from 'src/app/service/online-travel-customer.service';

@Component({
  selector: 'app-cancel-ride',
  templateUrl: './cancel-ride.component.html',
  styleUrls: ['./cancel-ride.component.css']
})
export class CancelRideComponent implements OnInit {

  cancelRideForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private onlineTravelCustomerService: OnlineTravelCustomerService,
    private router: Router) { }


  ngOnInit() {

    
    let currentUser= JSON.parse(localStorage.getItem('currentUser'));
    if( currentUser !=null){
      let userRole = currentUser['role'];
      if(userRole!='customer'){
        alert('Access Denied');
        this.router.navigate([userRole]);
      }
    }else{
      alert('Access Denied');
      this.router.navigate(["login"]);
    }

    this.cancelRideForm = this.formBuilder.group({
      from: ['', Validators.required],
      to: ['', Validators.required],
      userId: ['', Validators.required],
      userName: ['', Validators.required],
      date: ['', Validators.required],
      noOfSeats: ['', Validators.required],
    });

    this.onlineTravelCustomerService.getBookedRideInfo()
    .subscribe(data => {
      //alert("MyBookedRideInfo: "+JSON.stringify(data));
      this.cancelRideForm.setValue(data["result"]);
    });

  }


  cancelRide() {
    this.onlineTravelCustomerService.cancelRide(this.cancelRideForm.value)
      .subscribe(data => {
        this.cancelRideForm.setValue(data);
      });
  }


}
