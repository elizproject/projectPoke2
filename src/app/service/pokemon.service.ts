import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  private url= 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  getPokemon(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/pokemon/${id}`);
  }
}
