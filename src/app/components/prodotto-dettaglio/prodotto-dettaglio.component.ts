import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import {Prodotto} from 'src/app/models/prodotto.model';
import { ProdottoService } from 'src/app/services/prodotto.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-prodotto-dettaglio',
  templateUrl: './prodotto-dettaglio.component.html',
  styleUrls: ['./prodotto-dettaglio.component.css']
})
export class ProdottoDettaglioComponent implements OnInit {

  @Input() prodotto?: Prodotto;

  currentProdotto: Prodotto = {
    name: '',
    description: '',
    price:null,
    available: false,
    url:''
  };
  message = '';
  modifica:boolean;

  constructor(private prodottoService: ProdottoService,
              private cartService: CartService) { }

  ngOnInit(): void {
    this.message = '';
    this.modifica=false;
  }

  /* aggiungi prodotto al database carrello*/
  addToCart(currentProdotto) {
    this.cartService.create(currentProdotto);
    window.alert('Prodotto aggiunto al carrello!');
  }

  ngOnChanges(): void {
    this.message = '';
    this.currentProdotto = { ...this.prodotto };
  }

  /*cambia la disponibilità del prodotto*/
  updateAvailable(status: boolean): void {
    if (this.currentProdotto.key) {
      this.prodottoService.update(this.currentProdotto.key, { available: status })
      .then(() => {
        this.currentProdotto.available = status;
        this.message = 'Disponibilità prodotto aggiornata!';
      })
      .catch(err => console.log(err));
    }
  }

  change(){
    this.modifica=true;
  }

  /*modifica i campi di input del prodotto*/
  updateProdotto(): void {
    const data = {
      name: this.currentProdotto.name,
      description: this.currentProdotto.description,
      price: this.currentProdotto.price,
      url: this.currentProdotto.url
    };

    if (this.currentProdotto.key) {
      this.prodottoService.update(this.currentProdotto.key, data)
        .then(() => this.message = 'Prodotto modificato con successo!')
        .catch(err => console.log(err));
    }
  }

  /*elimina il prodotto dal database*/
  deleteProdotto(): void {
    if (this.currentProdotto.key) {
      this.prodottoService.delete(this.currentProdotto.key)
        .then(() => {
          window.alert('Prodotto eliminato!');
          window.location.reload();
        })
        .catch(err => console.log(err));
    }
  }

  /*torna alla visualizzazione precedente*/
  goBack(){
    window.location.reload();
  }

}
