import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private _http:HttpClient) { }
  private _registerUrl='http://localhost:8081/register'
  private _loginUrl='http://localhost:8081/login'
  registerUser(user)
  {
    return this._http.post<any>(this._registerUrl,user)
  }
  loginUser(user)
  {
    return this._http.post<any>(this._loginUrl,user)
  }
}
