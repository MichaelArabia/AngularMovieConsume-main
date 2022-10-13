import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { addMovieDTO } from '../models/DTO/addMovieDTO.model';
import { editMovieDTO } from '../models/DTO/editMovieDTO.model';
import { Movie } from '../models/movie.model';


@Injectable({
  providedIn: 'root'
})

export class ApiConsumeService {

  constructor(private _client: HttpClient) {
  }

  private url : string = "http://localhost:53448/api";

  getMovies(): Observable<Movie[]>{
    return this._client.get<Movie[]>(this.url+"/Movie")
  }

  getOneMovie(id:number): Observable<Movie>{
    let myHeaders : HttpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer ' + localStorage.getItem('token')
    })
    return this._client.get<Movie>(this.url+"/Movie/" + id, {headers : myHeaders})
  }

  createMovie(movie: addMovieDTO): Observable<addMovieDTO>{
    let myHeaders : HttpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer ' + localStorage.getItem('token')
    })
    return this._client.post<addMovieDTO>(this.url+"/Movie", movie, {headers : myHeaders})
  }

  updateMovie(movie: editMovieDTO): Observable<editMovieDTO>{
    let myHeaders : HttpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer ' + localStorage.getItem('token')
  })
  return this._client.put<editMovieDTO>(this.url+"/Movie", movie, {headers : myHeaders})
  }

  deleteMovie(id:number): Observable<Movie>{
    let myHeaders : HttpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer ' + localStorage.getItem('token')
    })
    return this._client.delete<Movie>(this.url+"/Movie/" + id, {headers : myHeaders})
  }
}
