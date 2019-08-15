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
export class OnlineTravelAdminService {

adminServiceBaseUrl = 'http://localhost:8070/'

constructor(private httpClient : HttpClient) { }

allEmployeeTripSummary(): Observable<TripInfo[]> {
  let tripInfo = this.httpClient.get<TripInfo[]>(this.adminServiceBaseUrl+"allEmpTripSummary").pipe(
    map(tripInfo => tripInfo),
    tap(h => {
      const outcome = h ? `fetched` : `did not find`;
      //this.log(`${outcome} hero id=${id}`);
    }),
    catchError(this.handleError<TripInfo[]>(`allEmployeeTripSummary`))
  );
  
  return tripInfo;
}

private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }
}
