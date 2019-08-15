import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OnlineTravelCustomerService } from 'src/app/service/online-travel-customer.service';

@Component({
  selector: 'app-track-ride',
  templateUrl: './track-ride.component.html',
  styleUrls: ['./track-ride.component.css']
})
export class TrackRideComponent implements OnInit {
  
  cancelRideForm: FormGroup;
  constructor(private router : Router,
    private formBuilder: FormBuilder,
    private onlineTravelCustomerService : OnlineTravelCustomerService) { }

  ngOnInit() {
    
    let currentUser= JSON.parse(localStorage.getItem('currentUser'));
    if(currentUser !=null){
      let userRole = currentUser['role'];
      if( userRole!='customer'){
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


    this.onlineTravelCustomerService.trackMyRide()
    .subscribe(data => {
      //alert("MyBookedRideInfo: "+JSON.stringify(data));
      this.cancelRideForm.setValue(data["result"]);
    });
  }

}
