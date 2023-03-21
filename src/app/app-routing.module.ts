import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreedsComponent } from './breeds/breeds.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RandomFactsComponent } from './random-facts/random-facts.component';

const routes: Routes = [
  {path: "", component: MainPageComponent}, 
  {path: "facts", component: RandomFactsComponent}, 
  {path: "breeds", component: BreedsComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
