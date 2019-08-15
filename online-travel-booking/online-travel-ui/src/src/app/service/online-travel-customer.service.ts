import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthUser } from '../model/AuthUser';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { BookInfo } from '../model/bookInfo';
import { TripInfo } from '../model/TripInfo';

@Injectable({
  providedIn: 'root'
})
export class OnlineTravelCustomerService {

  constructor(private httpClient: HttpClient) { }


  customerServiceBaseUrl = 'http://localhost:8085/'

  bookRide(bookInfo: BookInfo): any {
    return this.httpClient.post<any>(this.customerServiceBaseUrl, bookInfo);
  }


  getBookedRideInfo(): Observable<BookInfo> {
    let myBookedTicket = this.httpClient.get<BookInfo>(this.customerServiceBaseUrl + "myOpenrides").pipe(
      map(myBookedTicket => myBookedTicket),
      tap(h => {
        const outcome = h ? `fetched` : `did not find`;
        //this.log(`${outcome} hero id=${id}`);
      }),
      catchError(this.handleError<BookInfo>(`getMyBookedRideInfo`))
    );

    return myBookedTicket;
  }

  trackMyRide(): Observable<BookInfo> {
    let myBookedTicket = this.httpClient.get<BookInfo>(this.customerServiceBaseUrl + "trackMyRide").pipe(
      map(myBookedTicket => myBookedTicket),
      tap(h => {
        const outcome = h ? `fetched` : `did not find`;
        //this.log(`${outcome} hero id=${id}`);
      }),
      catchError(this.handleError<BookInfo>(`trackMyRide`))
    );

    return myBookedTicket;
  }


  cancelRide(bookInfo: BookInfo): any {
    return this.httpClient.put<any>(this.customerServiceBaseUrl, bookInfo);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }
}
