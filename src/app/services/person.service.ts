import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../models/person.model';
import { ActIn } from '../models/actorIn.model';
import { personDTO } from '../models/DTO/personDTO.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private _url : string = "http://localhost:53448/api";

  constructor(private _client: HttpClient) { }

  getAllPerson(): Observable<Person[]>
  {
    return this._client.get<Person[]>(this._url+'/person')
  }

  createPerson(person:personDTO):Observable<personDTO>{
    let myHeaders : HttpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer ' + localStorage.getItem('token')
    })
    return this._client.post<Person>(this._url+"/person", person, { headers : myHeaders } )

  }

  getOnePerson(id:number):Observable<Person>{
    let myHeaders : HttpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer ' + localStorage.getItem('token')
    })
    return this._client.get<Person>(this._url+"/person/" + id, { headers : myHeaders } )
  }

  setActorRole(setActor: ActIn):Observable<ActIn>{
    let myHeaders : HttpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer' + localStorage.getItem('token')
    })
    return this._client.post<ActIn>(this._url+"/person/setActor", setActor, { headers : myHeaders})
  }


}
