import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { registerDTO } from '../models/DTO/registerDTO.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private _client: HttpClient) { }

  private url : string = "http://localhost:53448/api/";

  register(model : registerDTO): Observable<registerDTO>{
    return this._client.post<registerDTO>(this.url+"User/register",model)
  }

}
