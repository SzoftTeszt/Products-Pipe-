import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductsListComponent } from './products-list/products-list.component';
import { KeresoPipe } from './kereso.pipe';
import { RendezoPipe } from './rendezo.pipe';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { SiginComponent } from './sigin/sigin.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    KeresoPipe,
    RendezoPipe,
    NavComponent,
    HomeComponent,
    SiginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
