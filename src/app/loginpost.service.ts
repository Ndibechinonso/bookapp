import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginpostService {

  private _url: string ='https://mybooksserver.herokuapp.com/user'
  constructor(private _http: HttpClient) { }

  postUserDetails(user: User){
    return this._http.post<any>(this._url, user)
  }
}
