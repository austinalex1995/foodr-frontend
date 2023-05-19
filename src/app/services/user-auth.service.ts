import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  /**
   * 
   * Constructor
   * 
   */

  constructor(private http : HttpClient) { }



  /**
   * 
   * Class methods
   * 
   */

  attemptLogin(user:User) : Observable<User> {

    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.post<User>("http://localhost:9000/user/login", user, {headers: header});

  }

  registerUser(user:User) : Observable<User> {

    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.post<User>("http://localhost:9000/user/register", user, {headers: header});

  }

}
