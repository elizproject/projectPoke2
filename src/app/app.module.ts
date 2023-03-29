import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { PokemonFoundComponent } from './components/pokemon-found/pokemon-found.component';
import { TailwindTestComponent } from './tailwind-test/tailwind-test.component';
import { SearchComponent } from './components/search/search.component';
import { SinglePokemonComponent } from './components/single-pokemon/single-pokemon.component';
import { WasteCodesComponent } from './waste-codes/waste-codes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotFoundComponent,
    HomeComponent,
    PokemonFoundComponent,
    TailwindTestComponent,
    SearchComponent,
    SinglePokemonComponent,
    WasteCodesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
