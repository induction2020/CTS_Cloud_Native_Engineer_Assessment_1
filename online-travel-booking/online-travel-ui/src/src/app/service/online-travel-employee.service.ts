import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthUser } from '../model/AuthUser';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { BookInfo } from '../model/bookInfo';
import { TripInfo } from '../model/TripInfo';
import { VechileInfo } from '../model/VechileInfo.';

@Injectable({
  providedIn: 'root'
})
export class OnlineTravelEmployeeService {
  
 employeeServiceBaseUrl = 'http://localhost:8086/'
 constructor(private httpClient : HttpClient) { }
 

 registerVechile(vechilenfo: VechileInfo): any {
  return this.httpClient.post<any>(this.employeeServiceBaseUrl+"registerVechile", vechilenfo);
 }

 getOpenRides(): Observable<BookInfo[]> {
  let openRideList = this.httpClient.get<BookInfo[]>(this.employeeServiceBaseUrl + "openRides").pipe(
    map(openRideList => openRideList),
    tap(h => {
      const outcome = h ? `fetched` : `did not find`;
      //this.log(`${outcome} hero id=${id}`);
    }),
    catchError(this.handleError<BookInfo[]>(`getOpenRides`))
  );

  return openRideList;
}

confirmRides(bookInfo: BookInfo): any {
  return this.httpClient.put<any>(this.employeeServiceBaseUrl+"confirmRide", bookInfo);
}


 employeeTripSummary(): Observable<TripInfo[]> {
   let tripInfo = this.httpClient.get<TripInfo[]>(this.employeeServiceBaseUrl+"empTripSummary").pipe(
     map(tripInfo => tripInfo),
     tap(h => {
       const outcome = h ? `fetched` : `did not find`;
       //this.log(`${outcome} hero id=${id}`);
     }),
     catchError(this.handleError<TripInfo[]>(`employeeTripSummary`))
   );
   return tripInfo;
 }
 
 private handleError<T>(operation = 'operation', result?: T) {
     return (error: any): Observable<T> => {
       return of(result as T);
     };
   }

   
 


 }
 
