import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
        movies=[];
        private movieUrl = 'http://192.168.0.89:3000/api/movie';
        private bookingUrl = 'http://192.168.0.89:3000/api/booking';
        private customersUrl = 'http://192.168.0.89:3000/api/customers';
  constructor(private http: HttpClient) { }
  getRemoteMovies(): Observable<[]>{
  	return this.http.get<[]>(this.movieUrl); 		
 }
 getMovieById(id):Observable<any>{
  return this.http.get<[]>(this.movieUrl +"/" + id); 	
 }
 addBooking(booking):Observable<any>{
  return this.http.post<[]>(this.bookingUrl, booking); 	
 }
}
