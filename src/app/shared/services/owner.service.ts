import { Injectable } from '@angular/core';
import {Owner} from '../models/owner';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../../_services/authentication.service';
import {environment} from '../../../environments/environment';


const httpOptions = {
  headers: new HttpHeaders( {
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  apiUrl = 'https://rigtigepetwebapi.azurewebsites.net/api/owners';


  constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }

  getOwners(): Observable<Owner[]> {

    httpOptions.headers =
       httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    return this.http.get<Owner[]>(environment.apiUrl + '/api/owners/', httpOptions);

    //return this.http.get<Owner[]>(this.apiUrl);
 }

  addOwner(owner: Owner): Observable<Owner> {
    return this.http.post<Owner>(this.apiUrl, owner);
  }

  updateOwner(owner: Owner): Observable<Owner>  {
    return this.http.put<Owner>(this.apiUrl + '/' + owner.ownerId, owner);
  }

  deleteOwner(ownerId: number): Observable<any> {
    return this.http.delete(this.apiUrl + '/' + ownerId);
  }

  getOwnersById(ownerId: number): Observable<Owner> {
    return this.http.get<Owner>(this.apiUrl + '/' + ownerId);
  }
}
