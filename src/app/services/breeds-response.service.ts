import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BreedResponse } from '../models/breeds-response';

@Injectable({
  providedIn: 'root'
})
export class BreedsResponseService {

  path="https://catfact.ninja/breeds";

  constructor(private http: HttpClient) { }

  getBreedsResponse(){
    return this.http.get<BreedResponse>(this.path);
  }

}
