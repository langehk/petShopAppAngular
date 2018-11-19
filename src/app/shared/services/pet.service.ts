import { Injectable } from '@angular/core';
import {Pet} from '../models/pet';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../../_services/authentication.service';
import {TodoItem} from '../../_models/todoitem';
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
export class PetService {
  constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }

  apiUrl = 'https://rigtigepetwebapi.azurewebsites.net/api/pets';

  constructor(private http: HttpClient) { }

  getPets(): Observable<Pet[]> {
   httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());


    // get users from api
    return this.http.get<Pet[]>(environment.apiUrl + '/api/pets/', httpOptions);
    //return this.http.get<Pet[]>(this.apiUrl);
  }

  addPet(pet: Pet): Observable<Pet> {
    return this.http.post<Pet>(this.apiUrl, pet);
  }

  updatePet(pet: Pet): Observable<Pet>  {
    return this.http.put<Pet>(this.apiUrl + '/' + pet.petId, pet);
  }

  deletePet(petId: number): Observable<any> {
    return this.http.delete(this.apiUrl + '/' + petId);
  }

  getPetsById(petId: number): Observable<Pet> {
    return this.http.get<Pet>(this.apiUrl + '/' + petId);
  }
}
