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

  // Funzione per selezionare n elementi casuali da un array
  pickRandom(array: any[], n: number): any[] {
    const result = new Array(n);
    let length = array.length;
    const taken = new Array(length);

    //Controllo se il numero di pokemon richiesti non è maggiore di quelli che ho
    if (n > length) {
      console.log("Non ho tutti questi pokemon")
    }

    //
    while (n--) {
      const x = Math.floor(Math.random() * length);
      result[n] = array[x in taken ? taken[x] : x];
      taken[x] = --length in taken ? taken[length] : length;
    }

    return result;
  }
  
}
