import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { OnlineTravelDataService } from '../service/online-travel-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  constructor(private formBuilder : FormBuilder, private router : Router,
    private loginService : LoginService,
    private onlineTravelDataService : OnlineTravelDataService
    ) { }

  ngOnInit() {
    
    localStorage.removeItem("currentUser");

    this.loginForm = this.formBuilder.group({
      userId: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(){
    this.loginService.login(this.loginForm.value)
    .subscribe( data => {
      
      localStorage.setItem('currentUser', JSON.stringify(data));

      if("admin" == data.role){
        this.router.navigate(['admin']);
      }else if("employee" == data.role){
        this.router.navigate(['employee']);
      }else if("customer" == data.role){
        this.router.navigate(['customer']);
      }else{
        alert("No Access");
      }

    });
}

}
