import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BookRideComponent } from './customer/book-ride/book-ride.component';
import { CancelRideComponent } from './customer/cancel-ride/cancel-ride.component';
import { TrackRideComponent } from './customer/track-ride/track-ride.component';
import { ConfirmRideComponent } from './employee/confirm-ride/confirm-ride.component';
import { AllTripSummaryComponent } from './admin/all-trip-summary/all-trip-summary.component';
import { TripSummaryComponent } from './employee/trip-summary/trip-summary.component';
import { RegisterVehicleComponent } from './employee/register-vehicle/register-vehicle.component';

const routes: Routes = [
{path: '', component: LoginComponent },
{path: 'register', component: RegisterComponent },
{path: 'login', component: LoginComponent},
{path: 'admin', component: AllTripSummaryComponent},
{path: 'customer', component: BookRideComponent},
{path: 'employee', component: ConfirmRideComponent},
{path: 'book-ride', component: BookRideComponent},
{path: 'cancel-ride', component: CancelRideComponent},
{path: 'track-ride', component: TrackRideComponent},
{path: 'register-vechile', component: RegisterVehicleComponent},
{path: 'confirm-ride', component: ConfirmRideComponent},
{path: 'trip-summary', component: TripSummaryComponent},
{path: 'all-trip-summary', component: AllTripSummaryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
