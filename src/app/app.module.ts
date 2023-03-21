import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AssetsImagesPipe } from './pipes/assets-images.pipe';
import { RandomFactsComponent } from './random-facts/random-facts.component';
import { BreedsComponent } from './breeds/breeds.component';
import { HttpClientModule } from '@angular/common/http';
import { EmptyFieldPipe } from './pipes/empty-field.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AssetsImagesPipe,
    RandomFactsComponent,
    BreedsComponent,
    EmptyFieldPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
