import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import {ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { BookRideComponent } from './customer/book-ride/book-ride.component';
import { CancelRideComponent } from './customer/cancel-ride/cancel-ride.component';
import { TrackRideComponent } from './customer/track-ride/track-ride.component';

import { ConfirmRideComponent } from './employee/confirm-ride/confirm-ride.component';
import { TripSummaryComponent } from './employee/trip-summary/trip-summary.component';
import { AllTripSummaryComponent } from './admin/all-trip-summary/all-trip-summary.component';
import { RegisterVehicleComponent } from './employee/register-vehicle/register-vehicle.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    BookRideComponent,
    CancelRideComponent,
    TrackRideComponent,
    RegisterVehicleComponent,
    ConfirmRideComponent,
    TripSummaryComponent,
    AllTripSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AgGridModule.withComponents(null)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
