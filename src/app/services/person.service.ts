import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private url : string = "http://localhost:53448/api";

  constructor(private client: HttpClient) { }

  getAllPerson(): Observable<Person[]>
  {
    return this.client.get<Person[]>(this.url+'/person')
  }


}
