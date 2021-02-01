import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.css']
})
export class RicercaComponent implements OnInit {

  ricerca: string;

  @Output() ricercaEvent  = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  /*funzioni che prendono il valore dell'input dell'utente per filtrare i risultati*/
  sendRicerca() {
    this.ricercaEvent.emit(this.ricerca.toLowerCase())
  }
  onChange(value:string){
    this.ricerca = value;
  }

}
