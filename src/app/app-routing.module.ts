import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SearchComponent } from './components/search/search.component';
import { SinglePokemonComponent } from './components/single-pokemon/single-pokemon.component';

const routes: Routes = [
  {path: "", pathMatch:"full", redirectTo: "/home"},
  {path: "home", component: HomeComponent},
  {path: "search", component: SearchComponent, children: [
    {path: ":id", component: SinglePokemonComponent },
  ]},
  {path: "404", component: NotFoundComponent},
  {path: "**", redirectTo: "/404"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
