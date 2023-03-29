import { Component, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/service/pokemon.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  pokemonName= "";
  searchError = false;
  pokemonImageUrl= "";
  pokemonStats: any = {
    speed: 0,
    special_defense: 0,
    special_attack: 0,
    attack: 0,
    hp: 0
  };

  constructor(private servizioProva: PokeapiService){};
  
  ngOnInit(): void {
    console.log("OnInIt del search");
  }

  searchPokemon() {
    // Reset delle variabili
    this.pokemonImageUrl = "assets/pokeball.png";
    this.pokemonStats = null;
    
    this.servizioProva.getPokemonByName(this.pokemonName).subscribe({
      next: data => {
        console.log(data);
        this.searchError = false;
        this.pokemonStats = {
          speed: this.getStatByName(data, 'speed'),
          special_defense: this.getStatByName(data, 'special-defense'),
          special_attack: this.getStatByName(data, 'special-attack'),
          attack: this.getStatByName(data, 'attack'),
          hp: this.getStatByName(data, 'hp')
        };
        this.pokemonName = data.name;
        this.pokemonImageUrl = data.sprites.front_default || "assets/pokeball.png";
      },
      error: error => {
        console.log(error);
        this.searchError = true;
      }
    });
  }

  private getStatByName(pokemonData: any, statName: string): number {
    const stat = pokemonData.stats.find((stat: any) => stat.stat.name === statName);
    return stat.base_stat;
  }
}

