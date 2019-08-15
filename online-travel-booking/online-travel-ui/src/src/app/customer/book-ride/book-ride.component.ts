import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OnlineTravelDataService } from 'src/app/service/online-travel-data.service';
import { AuthUser } from 'src/app/model/AuthUser';
import { OnlineTravelCustomerService } from 'src/app/service/online-travel-customer.service';

@Component({
  selector: 'app-book-ride',
  templateUrl: './book-ride.component.html'
})
export class BookRideComponent implements OnInit {

  bookRideForm : FormGroup;
  
  constructor(private formBuilder : FormBuilder, private router : Router,
  private onlineTravelService : OnlineTravelCustomerService,
  private onlineTravelDataService : OnlineTravelDataService ) { }

  ngOnInit() {

    let currentUser= JSON.parse(localStorage.getItem('currentUser'));
    if(currentUser !=null){
      let userRole = currentUser['role'];
      if(userRole!='customer'){
        alert('Access Denied');
        this.router.navigate([userRole]);
      }
    }else{
      alert('Access Denied');
      this.router.navigate(["login"]);
    }

    this.bookRideForm = this.formBuilder.group({
      from: ['', Validators.required],
      to: ['', Validators.required],
      userId: ['', Validators.required],
      userName: ['', Validators.required],
      date: ['', Validators.required],
      noOfSeats: ['', Validators.required],
    });
  }

  bookRide(){
    this.onlineTravelService.bookRide(this.bookRideForm.value)
    .subscribe( data => {
      //alert('Booked Ride Success: '+JSON.stringify(data['result']) );
      // this.onlineTravelDataService.submitBookRideInfo(data['result']);
      this.router.navigate(['cancel-ride']);
    });

}

}
