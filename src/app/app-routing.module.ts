import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProdottoComponent } from './components/lista-prodotto/lista-prodotto.component';
import { AddProdottoComponent } from './components/add-prodotto/add-prodotto.component';
import { ProdottoDettaglioComponent } from './components/prodotto-dettaglio/prodotto-dettaglio.component';
import { CartComponent } from './components/cart/cart.component';
import { Error404Component } from './components/error404/error404.component';


const routes: Routes = [
  { path: '', component: ListaProdottoComponent },
  { path: 'add', component: AddProdottoComponent },
  { path: 'dettaglio/:name', component: ProdottoDettaglioComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', component: Error404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
