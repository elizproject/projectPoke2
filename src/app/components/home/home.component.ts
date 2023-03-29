import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokeapiService } from 'src/app/service/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pokemonData: any[] = [];

  constructor(private http: HttpClient, private servizioProva: PokeapiService) { }

  ngOnInit(): void {
    // Recupera tutti i nomi dei Pokémon dall'API
    this.http.get<any>('https://pokeapi.co/api/v2/pokemon')
      .subscribe((data) => {
        // Seleziona tre nomi a caso
        console.log(data);
        const allPokemonNames = data.results.map((result: any) => result.name);
        const randomNames = this.servizioProva.pickRandom(allPokemonNames, 3);
  
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


}