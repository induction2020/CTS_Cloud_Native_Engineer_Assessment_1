import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../model/Login';
import { AuthUser } from '../model/AuthUser';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = 'http://localhost:8098/login'

  constructor(private httpClient : HttpClient) { }

 login(login : Login): Observable<AuthUser> {
    let authUser = this.httpClient.post<AuthUser>(this.baseUrl, login).pipe(
      map(authUser => authUser),
      tap(h => {
        const outcome = h ? `fetched` : `did not find`;
        //this.log(`${outcome} hero id=${id}`);
      }),
      catchError(this.handleError<AuthUser>(`getTask`))
    );

    return authUser;

  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      return of(result as T);
    };
  }
}
