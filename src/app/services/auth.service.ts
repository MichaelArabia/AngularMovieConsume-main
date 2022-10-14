import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loginDTO } from '../models/DTO/loginDTO.model';
import { tokenDTO } from '../models/DTO/tokenDTO.model';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private client: HttpClient) { }

  isConneted: boolean;
  _connected$ = new Subject<boolean>();


  private url : string = "http://localhost:53448/api/";

  login(model : loginDTO) {
      this.client.post<tokenDTO>(this.url+"auth/auth",model).subscribe({
        next : ( data : tokenDTO) => {
          localStorage.setItem('token', data.token);
          localStorage.setItem('role',data.role.toString())
        }
      })
      this.isConneted = true;
      this._connected$.next(this.isConneted)
    }

  logout(){
    this.isConneted = false;
    this._connected$.next(this.isConneted);
    localStorage.clear()
  }


}
