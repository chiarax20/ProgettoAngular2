(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Chiara Perotto\Desktop\ProgettoANg2\sito\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDszh9YV8wLG5FusyHxXrJiLBhUG-8c2jI",
        authDomain: "cp-ecommerce.firebaseapp.com",
        projectId: "cp-ecommerce",
        storageBucket: "cp-ecommerce.appspot.com",
        messagingSenderId: "501000639555",
        appId: "1:501000639555:web:826dc2bb4d6fc39a7e30f6"
    }
};


/***/ }),

/***/ "BQZD":
/*!***********************************************************************!*\
  !*** ./src/app/components/lista-prodotto/lista-prodotto.component.ts ***!
  \***********************************************************************/
/*! exports provided: ListaProdottoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaProdottoComponent", function() { return ListaProdottoComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_prodotto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/prodotto.service */ "FPKQ");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/cart.service */ "c14U");
/* harmony import */ var _ricerca_ricerca_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ricerca/ricerca.component */ "PjrT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _prodotto_dettaglio_prodotto_dettaglio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../prodotto-dettaglio/prodotto-dettaglio.component */ "nbF6");







function ListaProdottoComponent_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListaProdottoComponent_div_2_div_4_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const prodotto_r3 = ctx.$implicit; const i_r4 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r5.setActiveProdotto(prodotto_r3, i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Dettaglio");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListaProdottoComponent_div_2_div_4_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const prodotto_r3 = ctx.$implicit; const i_r4 = ctx.index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r7.setActiveProdotto2(prodotto_r3, i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Aggiungi al carrello");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const prodotto_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](prodotto_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", prodotto_r3.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", prodotto_r3.price, " \u20AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", i_r4 == ctx_r2.currentIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", i_r4 == ctx_r2.currentIndex);
} }
function ListaProdottoComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Lista Prodotti:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ListaProdottoComponent_div_2_div_4_Template, 11, 7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListaProdottoComponent_div_2_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.removeAllProdotti(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Cancella tutti");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.prodotti);
} }
function ListaProdottoComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-prodotto-dettaglio", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("refreshList", function ListaProdottoComponent_div_4_Template_app_prodotto_dettaglio_refreshList_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.refreshList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("prodotto", ctx_r1.currentProdotto);
} }
class ListaProdottoComponent {
    constructor(prodottoService, cartService) {
        this.prodottoService = prodottoService;
        this.cartService = cartService;
        this.currentIndex = -1;
        this.name = '';
        this.currentProdotto = {
            name: '',
            description: '',
            price: null,
            available: false,
            url: ''
        };
    }
    receiveRicerca($event) {
        this.ricerca = $event;
        this.currentProdotto = undefined;
        this.currentIndex = -1;
        this.prodotti = this.prodottiDaFiltrare.filter(x => x.name.toLowerCase().includes(this.ricerca));
        console.log(this.prodotti);
        console.log(this.prodottiDaFiltrare);
    }
    ngOnInit() {
        this.retrieveProdotti();
        this.Listaprodotti = true;
        this.currentProdotto = null;
    }
    /*aggiungere prodotti al carrello*/
    addToCart(currentProdotto) {
        this.cartService.create(currentProdotto);
        window.alert('Prodotto aggiunto al carrello!');
    }
    /*ricarica a rimete il prodotto selezionato su nessuno*/
    refreshList() {
        this.currentProdotto = undefined;
        this.currentIndex = -1;
        this.retrieveProdotti();
    }
    /*prende tutti i prodotti dal database*/
    retrieveProdotti() {
        this.prodottoService.getAll().snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(changes => changes.map(c => (Object.assign({ key: c.payload.key }, c.payload.val()))))).subscribe(data => {
            this.prodottiDaFiltrare = this.prodotti = data;
        });
    }
    /*selezione il prodott corrente*/
    setActiveProdotto(prodotto, index) {
        this.currentProdotto = prodotto;
        this.currentIndex = index;
        this.Listaprodotti = false;
    }
    setActiveProdotto2(prodotto, index) {
        this.currentProdotto = prodotto;
        this.currentIndex = index;
        this.addToCart(this.currentProdotto);
    }
    /*cancella tutti i prodotti*/
    removeAllProdotti() {
        this.prodottoService.deleteAll()
            .then(() => this.refreshList())
            .catch(err => console.log(err));
    }
}
ListaProdottoComponent.ɵfac = function ListaProdottoComponent_Factory(t) { return new (t || ListaProdottoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_prodotto_service__WEBPACK_IMPORTED_MODULE_2__["ProdottoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"])); };
ListaProdottoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ListaProdottoComponent, selectors: [["app-lista-prodotto"]], decls: 5, vars: 2, consts: [[3, "ricercaEvent"], [1, "PaginaLista"], ["class", "lista", 4, "ngIf"], [1, "dettaglio"], [4, "ngIf"], [1, "lista"], [1, "lista-prodotti"], ["class", "prodotto", 4, "ngFor", "ngForOf"], [1, "button", 3, "click"], [1, "prodotto"], [1, "image"], [3, "src"], [3, "prodotto", "refreshList"]], template: function ListaProdottoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-ricerca", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ricercaEvent", function ListaProdottoComponent_Template_app_ricerca_ricercaEvent_0_listener($event) { return ctx.receiveRicerca($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ListaProdottoComponent_div_2_Template, 7, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ListaProdottoComponent_div_4_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.Listaprodotti);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.Listaprodotti);
    } }, directives: [_ricerca_ricerca_component__WEBPACK_IMPORTED_MODULE_4__["RicercaComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _prodotto_dettaglio_prodotto_dettaglio_component__WEBPACK_IMPORTED_MODULE_6__["ProdottoDettaglioComponent"]], styles: [".PaginaLista[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  text-align: center;\r\n  color: rgb(129, 165, 97);\r\n}\r\n\r\n.lista-prodotti[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.prodotto[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  border: 4px solid rgb(80, 98, 64);\r\n  width: 400px;\r\n  height: 600px;\r\n  margin: 4vh;\r\n  text-shadow: -1px 0 rgb(46, 51, 42), 0 1px rgb(46, 51, 42), 1px 0 rgb(46, 51, 42), 0 -1px rgb(46, 51, 42);\r\n}\r\n\r\n.prodotto[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  max-width: 200px;\r\n  max-height: 200px;\r\n}\r\n\r\n.prodotto[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\n  font-size: 30px;\r\n}\r\n\r\n.image[_ngcontent-%COMP%] {\r\n  width: 200px;\r\n  height: 200px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.button[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  color: #FFFFFF;\r\n  text-decoration: none;\r\n  line-height: 1.2;\r\n  font-weight: normal;\r\n  font-family: 'Kalam', cursive;\r\n  font-size: 18px;\r\n  background-color: rgb(129, 165, 97);\r\n  border-radius: 4px;\r\n  padding: 10px 20px;\r\n  border: 1px solid rgb(80, 98, 64);\r\n  cursor: pointer;\r\n  margin: 3%;\r\n}\r\n\r\n.button[_ngcontent-%COMP%]:hover {\r\n  background-color: rgb(129, 165, 97);\r\n  border-color: rgb(80, 98, 64);\r\n}\r\n\r\n.button[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\r\n  font-size: 24px;\r\n}\r\n\r\n.dettaglio[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  min-height: 200px;\r\n}\r\n\r\n@media only screen  and (max-width: 800px) {\r\n  .PaginaLista[_ngcontent-%COMP%]\r\n    {\r\n      width: 100%;\r\n      display: flex;\r\n      flex-direction: column;\r\n      justify-content: center;\r\n      align-items: center;\r\n      font-size: 16px;\r\n      text-align: center;\r\n    }\r\n\r\n    .prodotto[_ngcontent-%COMP%]{\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      flex-direction: column;\r\n      border: 4px solid rgb(80, 98, 64);\r\n      width: 90%;\r\n      height: 600px;\r\n      margin: 4vh;\r\n      text-shadow: -1px 0 rgb(46, 51, 42), 0 1px rgb(46, 51, 42), 1px 0 rgb(46, 51, 42), 0 -1px rgb(46, 51, 42);\r\n    }\r\n\r\n    .dettaglio[_ngcontent-%COMP%]{\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      width: 90%;\r\n      min-height: 200px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RhLXByb2RvdHRvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsaUNBQWlDO0VBQ2pDLFlBQVk7RUFDWixhQUFhO0VBQ2IsV0FBVztFQUNYLHlHQUF5RztBQUMzRzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLG1DQUFtQztFQUNuQyxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlDQUFpQztFQUNqQyxlQUFlO0VBQ2YsVUFBVTtBQUNaOztBQUNBO0VBQ0UsbUNBQW1DO0VBQ25DLDZCQUE2QjtBQUMvQjs7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0U7O01BRUksV0FBVztNQUNYLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsdUJBQXVCO01BQ3ZCLG1CQUFtQjtNQUNuQixlQUFlO01BQ2Ysa0JBQWtCO0lBQ3BCOztJQUVBO01BQ0UsYUFBYTtNQUNiLHVCQUF1QjtNQUN2QixtQkFBbUI7TUFDbkIsc0JBQXNCO01BQ3RCLGlDQUFpQztNQUNqQyxVQUFVO01BQ1YsYUFBYTtNQUNiLFdBQVc7TUFDWCx5R0FBeUc7SUFDM0c7O0lBRUE7TUFDRSxhQUFhO01BQ2IsdUJBQXVCO01BQ3ZCLG1CQUFtQjtNQUNuQixVQUFVO01BQ1YsaUJBQWlCO0lBQ25CO0FBQ0oiLCJmaWxlIjoibGlzdGEtcHJvZG90dG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5QYWdpbmFMaXN0YXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHJnYigxMjksIDE2NSwgOTcpO1xyXG59XHJcblxyXG4ubGlzdGEtcHJvZG90dGl7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLnByb2RvdHRve1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJvcmRlcjogNHB4IHNvbGlkIHJnYig4MCwgOTgsIDY0KTtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgaGVpZ2h0OiA2MDBweDtcclxuICBtYXJnaW46IDR2aDtcclxuICB0ZXh0LXNoYWRvdzogLTFweCAwIHJnYig0NiwgNTEsIDQyKSwgMCAxcHggcmdiKDQ2LCA1MSwgNDIpLCAxcHggMCByZ2IoNDYsIDUxLCA0MiksIDAgLTFweCByZ2IoNDYsIDUxLCA0Mik7XHJcbn1cclxuXHJcbi5wcm9kb3R0byBpbWd7XHJcbiAgbWF4LXdpZHRoOiAyMDBweDtcclxuICBtYXgtaGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuLnByb2RvdHRvIGg0e1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuLmltYWdlIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtZmFtaWx5OiAnS2FsYW0nLCBjdXJzaXZlO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI5LCAxNjUsIDk3KTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYig4MCwgOTgsIDY0KTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luOiAzJTtcclxufVxyXG4uYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI5LCAxNjUsIDk3KTtcclxuICBib3JkZXItY29sb3I6IHJnYig4MCwgOTgsIDY0KTtcclxufVxyXG4uYnV0dG9uID4gc3Ryb25nIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbi5kZXR0YWdsaW97XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gIC5QYWdpbmFMaXN0YVxyXG4gICAge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9kb3R0b3tcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGJvcmRlcjogNHB4IHNvbGlkIHJnYig4MCwgOTgsIDY0KTtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgaGVpZ2h0OiA2MDBweDtcclxuICAgICAgbWFyZ2luOiA0dmg7XHJcbiAgICAgIHRleHQtc2hhZG93OiAtMXB4IDAgcmdiKDQ2LCA1MSwgNDIpLCAwIDFweCByZ2IoNDYsIDUxLCA0MiksIDFweCAwIHJnYig0NiwgNTEsIDQyKSwgMCAtMXB4IHJnYig0NiwgNTEsIDQyKTtcclxuICAgIH1cclxuXHJcbiAgICAuZGV0dGFnbGlve1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "FPKQ":
/*!**********************************************!*\
  !*** ./src/app/services/prodotto.service.ts ***!
  \**********************************************/
/*! exports provided: ProdottoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdottoService", function() { return ProdottoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");


class ProdottoService {
    constructor(db) {
        this.db = db;
        this.dbPath = '/prodotti';
        this.prodottiRef = db.list(this.dbPath);
    }
    getAll() {
        return this.prodottiRef;
    }
    create(prodotto) {
        return this.prodottiRef.push(prodotto);
    }
    update(key, value) {
        return this.prodottiRef.update(key, value);
    }
    delete(key) {
        return this.prodottiRef.remove(key);
    }
    deleteAll() {
        return this.prodottiRef.remove();
    }
}
ProdottoService.ɵfac = function ProdottoService_Factory(t) { return new (t || ProdottoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"])); };
ProdottoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProdottoService, factory: ProdottoService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 3, vars: 0, consts: [[1, "footer"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A9 Copiright 2021. Powered by Chiara Perotto for Start2Impact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer[_ngcontent-%COMP%]{\r\n  background-color: rgb(129, 165, 97);\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: white;\r\n  font-size: large;\r\n  width: 99%;\r\n}\r\n\r\n@media only screen  and (max-width: 800px) {\r\n  .footer[_ngcontent-%COMP%]\r\n    {\r\n      width: 100%;\r\n      display: flex;\r\n      flex-direction: column;\r\n      justify-content: center;\r\n      align-items: center;\r\n      font-size: 20px;\r\n      text-align: center;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUNBQW1DO0VBQ25DLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjs7QUFFQTtFQUNFOztNQUVJLFdBQVc7TUFDWCxhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLHVCQUF1QjtNQUN2QixtQkFBbUI7TUFDbkIsZUFBZTtNQUNmLGtCQUFrQjtJQUNwQjtBQUNKIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI5LCAxNjUsIDk3KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICB3aWR0aDogOTklO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gIC5mb290ZXJcclxuICAgIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "PjrT":
/*!*********************************************************!*\
  !*** ./src/app/components/ricerca/ricerca.component.ts ***!
  \*********************************************************/
/*! exports provided: RicercaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RicercaComponent", function() { return RicercaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class RicercaComponent {
    constructor() {
        this.ricercaEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    /*funzioni che prendono il valore dell'input dell'utente per filtrare i risultati*/
    sendRicerca() {
        this.ricercaEvent.emit(this.ricerca.toLowerCase());
    }
    onChange(value) {
        this.ricerca = value;
    }
}
RicercaComponent.ɵfac = function RicercaComponent_Factory(t) { return new (t || RicercaComponent)(); };
RicercaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RicercaComponent, selectors: [["app-ricerca"]], outputs: { ricercaEvent: "ricercaEvent" }, decls: 5, vars: 0, consts: [[1, "ricerca"], ["placeholder", "Ricerca prodototto...", 1, "input", 3, "keyup"], ["cerca", ""], [1, "button", 3, "click"]], template: function RicercaComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function RicercaComponent_Template_input_keyup_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return ctx.onChange(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RicercaComponent_Template_button_click_3_listener() { return ctx.sendRicerca(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cerca");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".ricerca[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.input[_ngcontent-%COMP%]{\r\n  height: 30px;\r\n  margin: 1%;\r\n  width: 200px;\r\n  color: rgb(129, 165, 97);\r\n  font-weight: bold;\r\n}\r\n\r\n.button[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  color: #FFFFFF;\r\n  text-decoration: none;\r\n  line-height: 1.2;\r\n  font-weight: normal;\r\n  font-family: 'Kalam', cursive;\r\n  font-size: 18px;\r\n  background-color: rgb(129, 165, 97);\r\n  border-radius: 4px;\r\n  padding: 10px 20px;\r\n  border: 1px solid rgb(80, 98, 64);\r\n  cursor: pointer;\r\n }\r\n\r\n.button[_ngcontent-%COMP%]:hover {\r\n  background-color: rgb(129, 165, 97);\r\n  border-color: rgb(80, 98, 64);\r\n }\r\n\r\n.button[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\r\n  font-size: 24px;\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJpY2VyY2EuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLG1DQUFtQztFQUNuQyxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlDQUFpQztFQUNqQyxlQUFlO0NBQ2hCOztBQUVBO0VBQ0MsbUNBQW1DO0VBQ25DLDZCQUE2QjtDQUM5Qjs7QUFFQTtFQUNDLGVBQWU7Q0FDaEIiLCJmaWxlIjoicmljZXJjYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJpY2VyY2F7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaW5wdXR7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIG1hcmdpbjogMSU7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGNvbG9yOiByZ2IoMTI5LCAxNjUsIDk3KTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBsaW5lLWhlaWdodDogMS4yO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1mYW1pbHk6ICdLYWxhbScsIGN1cnNpdmU7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjksIDE2NSwgOTcpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDgwLCA5OCwgNjQpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuIH1cclxuXHJcbiAuYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI5LCAxNjUsIDk3KTtcclxuICBib3JkZXItY29sb3I6IHJnYig4MCwgOTgsIDY0KTtcclxuIH1cclxuXHJcbiAuYnV0dG9uID4gc3Ryb25nIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiB9XHJcblxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "QWKc":
/*!***************************************************!*\
  !*** ./src/app/components/cart/cart.component.ts ***!
  \***************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cart.service */ "c14U");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function CartComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", item_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Prezzo: ", item_r1.price, " \u20AC");
} }
class CartComponent {
    constructor(cartService) {
        this.cartService = cartService;
        this.items = [];
    }
    ngOnInit() {
        this.AllCart();
    }
    /*visualizza tutti i prodotti nel carrello*/
    AllCart() {
        this.cartService.getAll().snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(changes => changes.map(c => (Object.assign({ key: c.payload.key }, c.payload.val()))))).subscribe(data => {
            this.items = data;
            this.totale();
        });
    }
    /*elimina tutti i prodotti dal carrello*/
    removeAllProdotti() {
        this.cartService.deleteAll()
            .catch(err => console.log(err));
    }
    totale() {
        this.tot = 0;
        this.items.forEach(element => {
            this.tot = this.tot + Number(element.price);
            console.log(this.tot);
        });
    }
}
CartComponent.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"])); };
CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CartComponent, selectors: [["app-cart"]], decls: 10, vars: 2, consts: [[1, "Carrello"], [1, "title"], [1, "prodotti"], ["class", "prodotto", 4, "ngFor", "ngForOf"], [1, "button", 3, "click"], [1, "prodotto"], [1, "image"], [3, "src"]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Carrello");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CartComponent_div_5_Template, 7, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CartComponent_Template_button_click_6_listener() { return ctx.removeAllProdotti(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Cancella tutti");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Totale: ", ctx.tot, " \u20AC");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".Carrello[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  color: rgb(80, 98, 64);\r\n  text-align: center;\r\n}\r\n\r\n.prodotto[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  max-width: 200px;\r\n  max-height: 200px;\r\n}\r\n\r\n.prodotti[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.prodotto[_ngcontent-%COMP%]{\r\n  border: 4px solid rgb(80, 98, 64);\r\n  width: 400px;\r\n  height: 450px;\r\n  margin: 4vh;\r\n  text-shadow: -1px 0 rgb(46, 51, 42), 0 1px rgb(46, 51, 42), 1px 0 rgb(46, 51, 42), 0 -1px rgb(46, 51, 42);\r\n}\r\n\r\n.button[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  color: #FFFFFF;\r\n  text-decoration: none;\r\n  line-height: 1.2;\r\n  font-weight: normal;\r\n  font-family: 'Kalam', cursive;\r\n  font-size: 18px;\r\n  background-color: rgb(129, 165, 97);\r\n  border-radius: 4px;\r\n  padding: 10px 20px;\r\n  border: 1px solid rgb(80, 98, 64);\r\n  cursor: pointer;\r\n  margin: 3%;\r\n}\r\n\r\n.button[_ngcontent-%COMP%]:hover {\r\n  background-color: rgb(129, 165, 97);\r\n  border-color: rgb(80, 98, 64);\r\n}\r\n\r\n.button[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\r\n  font-size: 24px;\r\n}\r\n\r\n@media only screen  and (max-width: 800px) {\r\n  .Carrello[_ngcontent-%COMP%]\r\n    {\r\n      width: 98%;\r\n      display: flex;\r\n      flex-direction: column;\r\n      justify-content: center;\r\n      align-items: center;\r\n      font-size: 20px;\r\n      text-align: center;\r\n    }\r\n\r\n    .prodotto[_ngcontent-%COMP%]{\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      flex-direction: column;\r\n      width: 80%;\r\n      font-size: 18px;\r\n      height: 400px;\r\n      margin: 2vh;\r\n    }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLFlBQVk7RUFDWixhQUFhO0VBQ2IsV0FBVztFQUNYLHlHQUF5RztBQUMzRzs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLG1DQUFtQztFQUNuQyxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlDQUFpQztFQUNqQyxlQUFlO0VBQ2YsVUFBVTtBQUNaOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRTs7TUFFSSxVQUFVO01BQ1YsYUFBYTtNQUNiLHNCQUFzQjtNQUN0Qix1QkFBdUI7TUFDdkIsbUJBQW1CO01BQ25CLGVBQWU7TUFDZixrQkFBa0I7SUFDcEI7O0lBRUE7TUFDRSxhQUFhO01BQ2IsdUJBQXVCO01BQ3ZCLG1CQUFtQjtNQUNuQixzQkFBc0I7TUFDdEIsVUFBVTtNQUNWLGVBQWU7TUFDZixhQUFhO01BQ2IsV0FBVztJQUNiOztBQUVKIiwiZmlsZSI6ImNhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5DYXJyZWxsb3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBjb2xvcjogcmdiKDgwLCA5OCwgNjQpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnByb2RvdHRvIGltZ3tcclxuICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG4ucHJvZG90dGl7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLnByb2RvdHRve1xyXG4gIGJvcmRlcjogNHB4IHNvbGlkIHJnYig4MCwgOTgsIDY0KTtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgaGVpZ2h0OiA0NTBweDtcclxuICBtYXJnaW46IDR2aDtcclxuICB0ZXh0LXNoYWRvdzogLTFweCAwIHJnYig0NiwgNTEsIDQyKSwgMCAxcHggcmdiKDQ2LCA1MSwgNDIpLCAxcHggMCByZ2IoNDYsIDUxLCA0MiksIDAgLTFweCByZ2IoNDYsIDUxLCA0Mik7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtZmFtaWx5OiAnS2FsYW0nLCBjdXJzaXZlO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI5LCAxNjUsIDk3KTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYig4MCwgOTgsIDY0KTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luOiAzJTtcclxufVxyXG5cclxuLmJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyOSwgMTY1LCA5Nyk7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2IoODAsIDk4LCA2NCk7XHJcbn1cclxuXHJcbi5idXR0b24gPiBzdHJvbmcge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuICBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAuQ2FycmVsbG9cclxuICAgIHtcclxuICAgICAgd2lkdGg6IDk4JTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9kb3R0b3tcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgbWFyZ2luOiAydmg7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "g/Dx");
/* harmony import */ var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home-page/home-page.component */ "atC9");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");




class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "Page"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-home-page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"], _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: [".Page[_ngcontent-%COMP%] {\r\n  font-family: 'Kalam', cursive;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQTZCO0FBQy9CIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLlBhZ2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnS2FsYW0nLCBjdXJzaXZlO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _components_error404_error404_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/error404/error404.component */ "bqWh");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_add_prodotto_add_prodotto_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/add-prodotto/add-prodotto.component */ "juQh");
/* harmony import */ var _components_prodotto_dettaglio_prodotto_dettaglio_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/prodotto-dettaglio/prodotto-dettaglio.component */ "nbF6");
/* harmony import */ var _components_lista_prodotto_lista_prodotto_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/lista-prodotto/lista-prodotto.component */ "BQZD");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "g/Dx");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/home-page/home-page.component */ "atC9");
/* harmony import */ var _components_ricerca_ricerca_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/ricerca/ricerca.component */ "PjrT");
/* harmony import */ var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/cart/cart.component */ "QWKc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ "fXoL");


















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_2__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].firebase),
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabaseModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        _components_add_prodotto_add_prodotto_component__WEBPACK_IMPORTED_MODULE_8__["AddProdottoComponent"],
        _components_prodotto_dettaglio_prodotto_dettaglio_component__WEBPACK_IMPORTED_MODULE_9__["ProdottoDettaglioComponent"],
        _components_lista_prodotto_lista_prodotto_component__WEBPACK_IMPORTED_MODULE_10__["ListaProdottoComponent"],
        _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_11__["NavBarComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
        _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_13__["HomePageComponent"],
        _components_ricerca_ricerca_component__WEBPACK_IMPORTED_MODULE_14__["RicercaComponent"],
        _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_15__["CartComponent"],
        _components_error404_error404_component__WEBPACK_IMPORTED_MODULE_5__["Error404Component"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_2__["AngularFireModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabaseModule"]] }); })();


/***/ }),

/***/ "atC9":
/*!*************************************************************!*\
  !*** ./src/app/components/home-page/home-page.component.ts ***!
  \*************************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class HomePageComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(); };
HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-home-page"]], decls: 4, vars: 0, consts: [[1, "HomePage"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your Green Shop Site!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".HomePage[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n}\r\n\r\n.HomePage[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  color:  rgb(129, 165, 97);\r\n  font-size: 50px;\r\n}\r\n\r\n@media only screen  and (max-width: 800px) {\r\n  .HomePage[_ngcontent-%COMP%]\r\n    {\r\n      width: 100%;\r\n      display: flex;\r\n      flex-direction: column;\r\n      justify-content: center;\r\n      align-items: center;\r\n      font-size: 20px;\r\n      text-align: center;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0U7O01BRUksV0FBVztNQUNYLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsdUJBQXVCO01BQ3ZCLG1CQUFtQjtNQUNuQixlQUFlO01BQ2Ysa0JBQWtCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoiaG9tZS1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuSG9tZVBhZ2V7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uSG9tZVBhZ2UgaDEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY29sb3I6ICByZ2IoMTI5LCAxNjUsIDk3KTtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiAgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgLkhvbWVQYWdlXHJcbiAgICB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "bqWh":
/*!***********************************************************!*\
  !*** ./src/app/components/error404/error404.component.ts ***!
  \***********************************************************/
/*! exports provided: Error404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404Component", function() { return Error404Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class Error404Component {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    /*tornare all'home-page*/
    BackToHome() {
        this.router.navigate(['/']);
    }
}
Error404Component.ɵfac = function Error404Component_Factory(t) { return new (t || Error404Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
Error404Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Error404Component, selectors: [["app-error404"]], decls: 5, vars: 0, consts: [[1, "Error404"], [1, "Button404", 3, "click"]], template: function Error404Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Page Not Found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Error404Component_Template_button_click_3_listener() { return ctx.BackToHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Back To Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".Button404[_ngcontent-%COMP%]{\r\n  background-color:    rgb(129, 165, 97);\r\n  border: none;\r\n  color: white;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n}\r\n\r\n.Error404[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding-top: 30vh;\r\n  padding-bottom: 30vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yNDA0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQ0FBc0M7RUFDdEMsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCIiwiZmlsZSI6ImVycm9yNDA0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuQnV0dG9uNDA0e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICAgIHJnYigxMjksIDE2NSwgOTcpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTVweCAzMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLkVycm9yNDA0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMzB2aDtcclxuICBwYWRkaW5nLWJvdHRvbTogMzB2aDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "c14U":
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");


class CartService {
    constructor(db) {
        this.db = db;
        this.dbPath = '/carrello';
        this.items = [];
        this.prodottiRef = db.list(this.dbPath);
    }
    getAll() {
        return this.prodottiRef;
    }
    create(prodotto) {
        return this.prodottiRef.push(prodotto);
    }
    clearCart() {
        this.items = [];
        return this.items;
    }
    deleteAll() {
        return this.prodottiRef.remove();
    }
}
CartService.ɵfac = function CartService_Factory(t) { return new (t || CartService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"])); };
CartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CartService, factory: CartService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "evFJ":
/*!******************************************!*\
  !*** ./src/app/models/prodotto.model.ts ***!
  \******************************************/
/*! exports provided: Prodotto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Prodotto", function() { return Prodotto; });
class Prodotto {
}


/***/ }),

/***/ "g/Dx":
/*!*********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class NavBarComponent {
    constructor() {
        this.title = 'Buy';
    }
    ngOnInit() {
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 14, vars: 0, consts: [[1, "BarUp"], [1, "Link2"], ["routerLink", "add", 1, "nav-link"], [1, "Menu"], ["src", "../../assets/Logo.png", "width", "20%"], [1, "Link"], [1, "Home-Page"], ["href", "/"], [1, "Carrello"], ["routerLink", "/cart"], ["src", "../../assets/carrello.jpg", "width", "15%", "height", "15%"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Aggiungi Prodotto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Carrello");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".BarUp[_ngcontent-%COMP%]{\r\n  background-color: rgb(129, 165, 97);\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: white;\r\n  font-weight: bold;\r\n }\r\n\r\n.Menu[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-size: 40px;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.Link[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-size: 25px;\r\n  position: absolute;\r\n  left: 80%;\r\n}\r\n\r\n.Link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  padding: 1%;\r\n  color: white;\r\n}\r\n\r\n.Link2[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-size: 25px;\r\n  position: absolute;\r\n  right: 80%;\r\n}\r\n\r\n.Link2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  padding: 1%;\r\n  color: white;\r\n}\r\n\r\n.Home-Page[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin-left: 2%;\r\n}\r\n\r\n.Carrello[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 1%;\r\n}\r\n\r\n@media only screen  and (max-width: 800px) {\r\n  .BarUp[_ngcontent-%COMP%]\r\n    {\r\n      width: 100%;\r\n      display: flex;\r\n      flex-direction: column;\r\n      justify-content: center;\r\n      align-items: center;\r\n      font-size: 15px;\r\n      text-align: center;\r\n      height: 200px;\r\n    }\r\n\r\n    .Link2[_ngcontent-%COMP%]{\r\n      display: flex;\r\n      flex-direction: column;\r\n      font-size: 15px;\r\n      position: absolute;\r\n      right: 65%;\r\n    }\r\n\r\n    .Link[_ngcontent-%COMP%]{\r\n      display: flex;\r\n      flex-direction: column;\r\n      font-size: 15px;\r\n      position: absolute;\r\n      right: 70%;\r\n    }\r\n\r\n    .Menu[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n      width: 40%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1DQUFtQztFQUNuQyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBR0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYjs7QUFHQTtFQUNFOztNQUVJLFdBQVc7TUFDWCxhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLHVCQUF1QjtNQUN2QixtQkFBbUI7TUFDbkIsZUFBZTtNQUNmLGtCQUFrQjtNQUNsQixhQUFhO0lBQ2Y7O0lBRUE7TUFDRSxhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLGVBQWU7TUFDZixrQkFBa0I7TUFDbEIsVUFBVTtJQUNaOztJQUVBO01BQ0UsYUFBYTtNQUNiLHNCQUFzQjtNQUN0QixlQUFlO01BQ2Ysa0JBQWtCO01BQ2xCLFVBQVU7SUFDWjs7SUFFQTtNQUNFLFVBQVU7SUFDWjtBQUNKIiwiZmlsZSI6Im5hdi1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5CYXJVcHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI5LCAxNjUsIDk3KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiB9XHJcblxyXG4uTWVudXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4uTGlua3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA4MCU7XHJcbn1cclxuXHJcbi5MaW5rIGF7XHJcbiAgcGFkZGluZzogMSU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uTGluazJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDgwJTtcclxufVxyXG5cclxuLkxpbmsyIGF7XHJcbiAgcGFkZGluZzogMSU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uSG9tZS1QYWdle1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogMiU7XHJcbn1cclxuXHJcbi5DYXJyZWxsb3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMSU7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gIC5CYXJVcFxyXG4gICAge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5MaW5rMntcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiA2NSU7XHJcbiAgICB9XHJcblxyXG4gICAgLkxpbmt7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogNzAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5NZW51IGltZ3tcclxuICAgICAgd2lkdGg6IDQwJTtcclxuICAgIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "juQh":
/*!*******************************************************************!*\
  !*** ./src/app/components/add-prodotto/add-prodotto.component.ts ***!
  \*******************************************************************/
/*! exports provided: AddProdottoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProdottoComponent", function() { return AddProdottoComponent; });
/* harmony import */ var src_app_models_prodotto_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/prodotto.model */ "evFJ");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_prodotto_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/prodotto.service */ "FPKQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








function AddProdottoComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Nome:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AddProdottoComponent_div_1_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.prodotto.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Descrizione:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AddProdottoComponent_div_1_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.prodotto.description = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Prezzo:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AddProdottoComponent_div_1_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5.prodotto.price = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AddProdottoComponent_div_1_Template_input_change_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r6.showPreview($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddProdottoComponent_div_1_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r7.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Aggiungi");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r0.prodotto.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r0.prodotto.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r0.prodotto.price);
} }
function AddProdottoComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Prodotto inserito con successo!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddProdottoComponent_div_2_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r8.newProdotto(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Nuovo Prodotto");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class AddProdottoComponent {
    constructor(prodottoService, storage) {
        this.prodottoService = prodottoService;
        this.storage = storage;
        this.prodotto = new src_app_models_prodotto_model__WEBPACK_IMPORTED_MODULE_0__["Prodotto"]();
        this.submitted = false;
        this.selectedImage = null;
    }
    /*salva il nuovo prodotto*/
    saveProdotto() {
        this.prodottoService.create(this.prodotto).then(() => {
            console.log('Nuovo oggetto creato con successo!');
            this.submitted = true;
        });
    }
    /*crea un ulteriore prodotto dopo averne creato uno nuovo*/
    newProdotto() {
        this.submitted = false;
        this.prodotto = new src_app_models_prodotto_model__WEBPACK_IMPORTED_MODULE_0__["Prodotto"]();
    }
    ngOnInit() {
    }
    showPreview(event) {
        this.selectedImage = event.target.files[0];
    }
    /*salva l'immagine sullo storage e chiama la funzione per salvare il resto del prodotto sul database*/
    save() {
        if (this.prodotto.name != '' && this.prodotto.price != null) {
            const randomId = Math.random().toString(36).substring(2);
            var name = randomId;
            const fileRef = this.storage.ref(name);
            this.storage.upload(name, this.selectedImage).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => {
                fileRef.getDownloadURL().subscribe((url) => {
                    this.url = url;
                    this.prodotto.url = url;
                    this.saveProdotto();
                });
            })).subscribe();
            console.log(this.prodotto);
        }
        else {
            window.alert("Devi compilare tutti i campi");
        }
    }
}
AddProdottoComponent.ɵfac = function AddProdottoComponent_Factory(t) { return new (t || AddProdottoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_prodotto_service__WEBPACK_IMPORTED_MODULE_4__["ProdottoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__["AngularFireStorage"])); };
AddProdottoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AddProdottoComponent, selectors: [["app-add-prodotto"]], decls: 3, vars: 2, consts: [[1, "AddPage"], ["class", "FormGroup", 4, "ngIf"], ["class", "nuovo", 4, "ngIf"], [1, "FormGroup"], [1, "form"], ["for", "name"], ["type", "text", "id", "name", "required", "", "name", "name", 1, "input", 3, "ngModel", "ngModelChange"], ["for", "description"], ["id", "description", "name", "description", "required", "", 1, "input", 3, "ngModel", "ngModelChange"], ["for", "price"], ["id", "price", "required", "", "name", "price", "type", "number", 1, "input", 3, "ngModel", "ngModelChange"], [1, "formfile"], ["type", "file", "name", "immagine", 1, "inputfile", 3, "change"], [1, "button", 3, "click"], [1, "nuovo"]], template: function AddProdottoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddProdottoComponent_div_1_Template, 17, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AddProdottoComponent_div_2_Template, 5, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submitted);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NumberValueAccessor"]], styles: [".button[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  color: #FFFFFF;\r\n  text-decoration: none;\r\n  line-height: 1.2;\r\n  font-weight: normal;\r\n  font-family: 'Kalam', cursive;\r\n  font-size: 18px;\r\n  background-color: rgb(129, 165, 97);\r\n  border-radius: 4px;\r\n  padding: 10px 20px;\r\n  border: 1px solid rgb(80, 98, 64);\r\n  cursor: pointer;\r\n  margin: 3%;\r\n}\r\n\r\n.button[_ngcontent-%COMP%]:hover {\r\n  background-color: rgb(129, 165, 97);\r\n  border-color: rgb(80, 98, 64);\r\n}\r\n\r\n.button[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\r\n  font-size: 24px;\r\n}\r\n\r\n.AddPage[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  background-color: rgb(129, 165, 97);\r\n  margin-bottom: 20vh;\r\n}\r\n\r\n.FormGroup[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  color: #FFFFFF;\r\n}\r\n\r\n.nuovo[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  text-align: center;\r\n  color: #FFFFFF;\r\n}\r\n\r\n.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n  height:20px;\r\n  width: 300px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n\r\n.inputfile[_ngcontent-%COMP%] {\r\n  margin:10px\r\n}\r\n\r\n.formfile[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n\r\n@media only screen  and (max-width: 800px) {\r\n  .AddPage[_ngcontent-%COMP%]\r\n    {\r\n      width: 100%;\r\n      display: flex;\r\n      flex-direction: column;\r\n      justify-content: center;\r\n      align-items: center;\r\n      font-size: 20px;\r\n      text-align: center;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1wcm9kb3R0by5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUNBQWlDO0VBQ2pDLGVBQWU7RUFDZixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixtQ0FBbUM7RUFDbkMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRTs7TUFFSSxXQUFXO01BQ1gsYUFBYTtNQUNiLHNCQUFzQjtNQUN0Qix1QkFBdUI7TUFDdkIsbUJBQW1CO01BQ25CLGVBQWU7TUFDZixrQkFBa0I7SUFDcEI7QUFDSiIsImZpbGUiOiJhZGQtcHJvZG90dG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtZmFtaWx5OiAnS2FsYW0nLCBjdXJzaXZlO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI5LCAxNjUsIDk3KTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYig4MCwgOTgsIDY0KTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luOiAzJTtcclxufVxyXG5cclxuLmJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyOSwgMTY1LCA5Nyk7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2IoODAsIDk4LCA2NCk7XHJcbn1cclxuXHJcbi5idXR0b24gPiBzdHJvbmcge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5cclxuLkFkZFBhZ2V7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyOSwgMTY1LCA5Nyk7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjB2aDtcclxufVxyXG5cclxuLkZvcm1Hcm91cHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxufVxyXG5cclxuLm51b3Zve1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxufVxyXG5cclxuLmZvcm0gaW5wdXR7XHJcbiAgaGVpZ2h0OjIwcHg7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uaW5wdXRmaWxlIHtcclxuICBtYXJnaW46MTBweFxyXG59XHJcblxyXG4uZm9ybWZpbGV7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiAgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgLkFkZFBhZ2VcclxuICAgIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "nbF6":
/*!*******************************************************************************!*\
  !*** ./src/app/components/prodotto-dettaglio/prodotto-dettaglio.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ProdottoDettaglioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdottoDettaglioComponent", function() { return ProdottoDettaglioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_prodotto_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/prodotto.service */ "FPKQ");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cart.service */ "c14U");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





function ProdottoDettaglioComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Descrizione:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProdottoDettaglioComponent_div_0_div_1_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.change(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Modifica");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProdottoDettaglioComponent_div_0_div_1_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.addToCart(ctx_r6.currentProdotto); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Aggiungi al carrello");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.prodotto.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r2.prodotto.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Prezzo: ", ctx_r2.prodotto.price, " \u20AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.prodotto.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Stato:", ctx_r2.currentProdotto.available ? "Disponibile" : "Non Disponibile", "");
} }
function ProdottoDettaglioComponent_div_0_div_2_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProdottoDettaglioComponent_div_0_div_2_button_21_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r9.updateAvailable(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "NonDisponibile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProdottoDettaglioComponent_div_0_div_2_button_22_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProdottoDettaglioComponent_div_0_div_2_button_22_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r11.updateAvailable(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Disponibile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProdottoDettaglioComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Nome");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProdottoDettaglioComponent_div_0_div_2_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.currentProdotto.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Descrizione");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProdottoDettaglioComponent_div_0_div_2_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.currentProdotto.description = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Prezzo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProdottoDettaglioComponent_div_0_div_2_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.currentProdotto.price = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Status:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ProdottoDettaglioComponent_div_0_div_2_button_21_Template, 2, 0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ProdottoDettaglioComponent_div_0_div_2_button_22_Template, 2, 0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProdottoDettaglioComponent_div_0_div_2_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.deleteProdotto(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Cancella");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProdottoDettaglioComponent_div_0_div_2_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.updateProdotto(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Modifica");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r3.prodotto.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.currentProdotto.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.currentProdotto.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.currentProdotto.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.currentProdotto.available ? "Disponibile" : "Non Disponibile", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.currentProdotto.available);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.currentProdotto.available);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.message);
} }
function ProdottoDettaglioComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProdottoDettaglioComponent_div_0_div_1_Template, 18, 5, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProdottoDettaglioComponent_div_0_div_2_Template, 29, 8, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.modifica);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.modifica);
} }
function ProdottoDettaglioComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Impossibile accedre a questo prodotto...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ProdottoDettaglioComponent {
    constructor(prodottoService, cartService) {
        this.prodottoService = prodottoService;
        this.cartService = cartService;
        this.currentProdotto = {
            name: '',
            description: '',
            price: null,
            available: false,
            url: ''
        };
        this.message = '';
    }
    ngOnInit() {
        this.message = '';
        this.modifica = false;
    }
    /* aggiungi prodotto al database carrello*/
    addToCart(currentProdotto) {
        this.cartService.create(currentProdotto);
        window.alert('Prodotto aggiunto al carrello!');
    }
    ngOnChanges() {
        this.message = '';
        this.currentProdotto = Object.assign({}, this.prodotto);
    }
    /*cambia la disponibilità del prodotto*/
    updateAvailable(status) {
        if (this.currentProdotto.key) {
            this.prodottoService.update(this.currentProdotto.key, { available: status })
                .then(() => {
                this.currentProdotto.available = status;
                this.message = 'Disponibilità prodotto aggiornata!';
            })
                .catch(err => console.log(err));
        }
    }
    change() {
        this.modifica = true;
    }
    /*modifica i campi di input del prodotto*/
    updateProdotto() {
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
    deleteProdotto() {
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
    goBack() {
        window.location.reload();
    }
}
ProdottoDettaglioComponent.ɵfac = function ProdottoDettaglioComponent_Factory(t) { return new (t || ProdottoDettaglioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_prodotto_service__WEBPACK_IMPORTED_MODULE_1__["ProdottoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"])); };
ProdottoDettaglioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProdottoDettaglioComponent, selectors: [["app-prodotto-dettaglio"]], inputs: { prodotto: "prodotto" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 2, consts: [[4, "ngIf"], [1, "button", 3, "click"], ["class", "prodotto", 4, "ngIf"], [1, "prodotto"], [1, "image"], [3, "src"], [1, "buttonGroup"], [1, "FormGroup"], [1, "form"], ["for", "name"], ["type", "text", "id", "name", "name", "name", 1, "input", 3, "ngModel", "ngModelChange"], ["for", "description"], ["type", "text", "id", "description", "name", "description", 1, "input", 3, "ngModel", "ngModelChange"], ["for", "price"], ["type", "text", "id", "price", "name", "price", 1, "input", 3, "ngModel", "ngModelChange"], ["class", "button", 3, "click", 4, "ngIf"], ["type", "submit", 1, "button", 3, "click"]], template: function ProdottoDettaglioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProdottoDettaglioComponent_div_0_Template, 3, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProdottoDettaglioComponent_div_1_Template, 4, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProdottoDettaglioComponent_Template_button_click_2_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Torna lista prodotti");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentProdotto);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.currentProdotto);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".button[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  color: #FFFFFF;\r\n  text-decoration: none;\r\n  line-height: 1.2;\r\n  font-weight: normal;\r\n  font-family: 'Kalam', cursive;\r\n  font-size: 18px;\r\n  background-color: rgb(129, 165, 97);\r\n  border-radius: 4px;\r\n  padding: 10px 20px;\r\n  border: 1px solid rgb(80, 98, 64);\r\n  cursor: pointer;\r\n  margin: 2%;\r\n}\r\n\r\n.button[_ngcontent-%COMP%]:hover {\r\n  background-color: rgb(129, 165, 97);\r\n  border-color: rgb(80, 98, 64);\r\n}\r\n\r\n.button[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\r\n  font-size: 24px;\r\n}\r\n\r\n.FormGroup[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n\r\n.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n  height:20px;\r\n  width: 200px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n\r\n.buttonGroup[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.image[_ngcontent-%COMP%] {\r\n  width: 200px;\r\n  height: 200px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n  max-width: 200px;\r\n  max-height: 200px;\r\n}\r\n\r\n.prodotto[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  max-width: 200px;\r\n  max-height: 200px;\r\n}\r\n\r\n.prodotto[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\n  font-size: 30px;\r\n}\r\n\r\n.prodotto[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n\r\n@media only screen  and (max-width: 800px) {\r\n  .prodotto[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n  }\r\n\r\n  .buttonGroup[_ngcontent-%COMP%]{\r\n    width: 90%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2RvdHRvLWRldHRhZ2xpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUNBQWlDO0VBQ2pDLGVBQWU7RUFDZixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0VBQ3JCO0FBQ0YiLCJmaWxlIjoicHJvZG90dG8tZGV0dGFnbGlvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LWZhbWlseTogJ0thbGFtJywgY3Vyc2l2ZTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyOSwgMTY1LCA5Nyk7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoODAsIDk4LCA2NCk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbjogMiU7XHJcbn1cclxuXHJcbi5idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjksIDE2NSwgOTcpO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiKDgwLCA5OCwgNjQpO1xyXG59XHJcblxyXG4uYnV0dG9uID4gc3Ryb25nIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbi5Gb3JtR3JvdXB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5mb3JtIGlucHV0e1xyXG4gIGhlaWdodDoyMHB4O1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmJ1dHRvbkdyb3Vwe1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmltYWdlIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbmltZ3tcclxuICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG4ucHJvZG90dG8gaW1ne1xyXG4gIG1heC13aWR0aDogMjAwcHg7XHJcbiAgbWF4LWhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi5wcm9kb3R0byBoNHtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbi5wcm9kb3R0b3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuICBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAucHJvZG90dG97XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbkdyb3Vwe1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_lista_prodotto_lista_prodotto_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/lista-prodotto/lista-prodotto.component */ "BQZD");
/* harmony import */ var _components_add_prodotto_add_prodotto_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/add-prodotto/add-prodotto.component */ "juQh");
/* harmony import */ var _components_prodotto_dettaglio_prodotto_dettaglio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/prodotto-dettaglio/prodotto-dettaglio.component */ "nbF6");
/* harmony import */ var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/cart/cart.component */ "QWKc");
/* harmony import */ var _components_error404_error404_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/error404/error404.component */ "bqWh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const routes = [
    { path: '', component: _components_lista_prodotto_lista_prodotto_component__WEBPACK_IMPORTED_MODULE_1__["ListaProdottoComponent"] },
    { path: 'add', component: _components_add_prodotto_add_prodotto_component__WEBPACK_IMPORTED_MODULE_2__["AddProdottoComponent"] },
    { path: 'dettaglio/:name', component: _components_prodotto_dettaglio_prodotto_dettaglio_component__WEBPACK_IMPORTED_MODULE_3__["ProdottoDettaglioComponent"] },
    { path: 'cart', component: _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_4__["CartComponent"] },
    { path: '**', component: _components_error404_error404_component__WEBPACK_IMPORTED_MODULE_5__["Error404Component"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map