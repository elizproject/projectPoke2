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
  pokemonStats: any[] = [];

  constructor(private servizioProva: PokeapiService){};
  
  ngOnInit(): void {
    console.log("OnInIt del search");
  }

  searchPokemon() {
    this.servizioProva.getPokemonByName(this.pokemonName).subscribe({
      next: data => {
        console.log(data);
        this.searchError = false;
        this.pokemonStats = {
          name: data.name,
          speed: data.stats[0].base_stat,
          specialDefense: data.stats[1].base_stat,
          specialAttack: data.stats[2].base_stat,
          attack: data.stats[4].base_stat,
          hp: data.stats[5].base_stat
        };
        this.pokemonImageUrl = data.sprites.front_default;
      },
      error: error => {
        console.log(error);
        this.searchError = true;
      }
    });
  }

  private getStatValue(stats: any[], statName: string): string {
    const stat = stats.find(s => s.stat.name === statName);
    return stat ? stat.base_stat : "none";
  }
}


