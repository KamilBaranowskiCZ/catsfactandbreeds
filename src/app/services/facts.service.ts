import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fact } from '../models/fact';

@Injectable({
  providedIn: 'root'
})
export class FactsService {

  path="https://catfact.ninja/fact";

  constructor(private http: HttpClient) { }

  getFact(){
    return this.http.get<Fact>(this.path);
  }
}
