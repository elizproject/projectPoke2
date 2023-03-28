import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { PokemonFoundComponent } from './components/pokemon-found/pokemon-found.component';
import { TailwindTestComponent } from './tailwind-test/tailwind-test.component';
import { SearchComponent } from './components/search/search.component';
import { SinglePokemonComponent } from './components/single-pokemon/single-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DirectiveComponent,
    NotFoundComponent,
    HomeComponent,
    PokemonFoundComponent,
    TailwindTestComponent,
    SearchComponent,
    SinglePokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
