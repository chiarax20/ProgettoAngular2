import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { Error404Component } from './components/error404/error404.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProdottoComponent } from './components/add-prodotto/add-prodotto.component';
import { ProdottoDettaglioComponent } from './components/prodotto-dettaglio/prodotto-dettaglio.component';
import { ListaProdottoComponent } from './components/lista-prodotto/lista-prodotto.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RicercaComponent } from './components/ricerca/ricerca.component';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    AddProdottoComponent,
    ProdottoDettaglioComponent,
    ListaProdottoComponent,
    NavBarComponent,
    FooterComponent,
    HomePageComponent,
    RicercaComponent,
    CartComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
