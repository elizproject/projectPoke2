import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pokemonData: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Recupera tutti i nomi dei Pokémon dall'API
    this.http.get<any>('https://pokeapi.co/api/v2/pokemon')
      .subscribe((data) => {
        // Seleziona tre nomi a caso
        console.log(data);
        const allPokemonNames = data.results.map((result: any) => result.name);
        const randomNames = this.pickRandom(allPokemonNames, 3);
  
        // Recupera i dati dei tre Pokémon selezionati
        randomNames.forEach(name => {
          this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .subscribe((data) => {
              // Aggiungi i dati del Pokémon nell'array this.pokemonData
              this.pokemonData.push(data);
            });
        });
      });
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