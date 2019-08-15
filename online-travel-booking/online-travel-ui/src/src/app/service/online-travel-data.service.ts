import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OnlineTravelDataService {
  private bookRideInfo = new BehaviorSubject(null);
  bookRideSource = this.bookRideInfo.asObservable();

  private userInfo = new BehaviorSubject(null);
  userSource = this.userInfo.asObservable();

  submitBookRideInfo(updatedBookRide : any){
    this.bookRideInfo.next(updatedBookRide);
  }




}
