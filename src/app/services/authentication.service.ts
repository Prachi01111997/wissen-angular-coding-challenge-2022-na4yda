import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  // modify the return type to properly use the full response
  login(email: string, password: string) {
    return this.http.post('https://reqres.in/api/login',{email,password});
  }
  afterLogin(token:string){
    return this.http.post('https://reqres.in/api/unknown',{token});
  }
  userData(){
    return this.http.get('https://reqres.in/api/unknown');
  }
}
