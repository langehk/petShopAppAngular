import { Injectable } from '@angular/core';
import {Owner} from '../models/owner';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

apiUrl = 'https://rigtigepetwebapi.azurewebsites.net/api/owners';

  constructor(private http: HttpClient) { }

  getOwners(): Observable<Owner[]> {
    return this.http.get<Owner[]>(this.apiUrl);
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
