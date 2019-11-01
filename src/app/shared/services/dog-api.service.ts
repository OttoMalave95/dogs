import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const DOG_API_URL = 'https://dog.ceo/api';

@Injectable({
  providedIn: 'root'
})
export class DogApiService {

  constructor(private httpClient: HttpClient) { }

  getBreedsListAll(): Observable<object> {
    return this.httpClient.get<object>(`${DOG_API_URL}/breeds/list/all`);
  }

  getBreedImage(breed: string): Observable<object> {
    return this.httpClient.get<object>(`${DOG_API_URL}/breed/${breed}/images/random`);
  }

  getBreedImages(breed: string): Observable<object> {
    return this.httpClient.get<object>(`${DOG_API_URL}/breed/${breed}/images`);
  }
}
