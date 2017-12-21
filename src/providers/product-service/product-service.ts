import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {of} from "rxjs/observable/of";
import {Product} from "../../models/Product";
import {Observable} from "rxjs/Observable";
import {BACKEND_URL} from "../../utils";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'})
};
@Injectable()
export class ProductService {

  constructor(public http: HttpClient) {
    console.log('Hello ProductService Provider');
  }

  listProdotti: Array<Product>;
  eliminato: boolean = false;

  findAll(): Observable<Product[]> {
    console.log("Chiamata service al Server - FINDALL()")
    return this.http.get<Product[]>(BACKEND_URL + "/product/getListProduct");
  }
  compraProdotti(listaProdotti,idCarta): Observable<Product>{
    return this.http.post<Product>(BACKEND_URL+"/product/addProductById/"+idCarta,listaProdotti,httpOptions)
  }
  findDisponibili(): Observable<Product[]> {
    return this.http.get<Product[]>(BACKEND_URL + "/product/getListProductDisponibile");
  }

  generaOfferte(): Observable<string> {
    console.log("Offerte Generate");
    return this.http.get<string>(BACKEND_URL + "/product/generaOfferte")
  }

  //PRENDE IL CARRELLO DAL LOCALSTORAGE, CIOE' LA MEMORIA INTERNA
  getCarrello() {
    if (localStorage.getItem("carrello") == null) {
      this.listProdotti = new Array;
      localStorage.setItem("carrello", JSON.stringify(this.listProdotti))
    } else {
      this.listProdotti = JSON.parse(localStorage.getItem("carrello"))
    }

    return this.listProdotti;
  }

  //AGGIUNTA DI UN PRODOTTO AL CARRELLO
  addProdotto(prodotto) {
    this.getCarrello()
    let somma: number = 1;                //SERVER RITORNA QUANTITADAACQUISTARE = 1 DI DEFAULT, SE SI FACESSE +1 AL PRIMO GIRO ANDREBBE A 2

    for (let prod of this.listProdotti) {
      if (prod.id == prodotto.id) {
        somma = somma + prod.quantitaDaAcquistare
        this.listProdotti.splice(this.listProdotti.indexOf(prod), 1)    //Cancello il prodotto dal carrello
      }
    }
    prodotto.quantitaDaAcquistare = somma
    this.listProdotti.push(prodotto);                                               //Aggiungoil prodotto
    localStorage.setItem("carrello", JSON.stringify(this.listProdotti))
    console.log("Aggiunto: ", prodotto)       //FUNZIONA
  }

  //AGGIUNTA DI N PRODOTTI AL CARRELLO
  compraQuantita (quant: number, prodotto: Product){
    this.getCarrello()
    let somma: number = 1;                //SERVER RITORNA QUANTITADAACQUISTARE = 1 DI DEFAULT, SE SI FACESSE +1 AL PRIMO GIRO ANDREBBE A 2
    let passato: boolean = false

    for (let prod of this.listProdotti) {
      if (prod.id == prodotto.id) {
        passato= true
        if(prodotto.quantitaDaAcquistare == undefined){
          prodotto.quantitaDaAcquistare = 0
          prodotto.quantitaDaAcquistare += quant
        }
        else prodotto.quantitaDaAcquistare += quant
        this.listProdotti.splice(this.listProdotti.indexOf(prod), 1)    //Cancello il prodotto dal carrello
      }
    }
    if (passato == false) prodotto.quantitaDaAcquistare = quant       //SE IL PRODOTTO NON ESISTE ASSEGNA DIRETTAMENTE LA QUANTITA' INSERITA AL CAMPO DELLA QUANTITA' DA ACQUISTARE
    this.listProdotti.push(prodotto);                                               //Aggiungoil prodotto
    localStorage.setItem("carrello", JSON.stringify(this.listProdotti))
    console.log("Aggiunto: ", prodotto)       //FUNZIONA
  }

  //ELIMINAZIONE DI UN'INTERO PRODOTTO
  deleteCarrello(product): Observable<Product> {
    this.getCarrello()
    this.eliminato = false
    console.log("SERVICE PRODUCT - getCarrello() eseguito")

    for (let cell of this.listProdotti) {
      if (cell.id == product.id && !this.eliminato) {
        this.listProdotti.splice(this.listProdotti.indexOf(cell), 1)
        localStorage.setItem("carrello", JSON.stringify(this.listProdotti))
        this.eliminato = true
      }
    }
    // console.log("SERVICE PRODUCT - STO USCENDO...")
    return of(product);
  }

  //DIMINUZIONE QUANTITA' CARRELLO
  deleteOne(product): Observable<Product> {
    this.getCarrello()
    let differenza: number = 0;
    // console.log("SERVICE PRODUCT - deleteOne() partito")
    if (product.quantitaDaAcquistare > 1) {
      for (let cell of this.listProdotti) {
        if (cell.id == product.id) {
          differenza = cell.quantitaDaAcquistare - 1;
          product.quantitaDaAcquistare = differenza;
          this.listProdotti.splice(this.listProdotti.indexOf(cell), 1, product)
          localStorage.setItem("carrello", JSON.stringify(this.listProdotti))
        }
      }
    }
    else if (product.quantitaDaAcquistare == 1) this.deleteCarrello(product)
    console.log("SERVICE PRODUCT - deleteOne() terminato")
    return of(product)
  }

  //CERCA E RESTITUISCE UN PRODOTTO DAL CARRELLO
  getOnefromCarrello(product): Observable<Product>{
    this.getCarrello();
    console.log("Carrello: ", this.listProdotti)

    let prodottoCercato: Product = new Product();

    for (let prod of this.listProdotti) {
      if (prod.id == product.id) {
        prodottoCercato = prod
      }
    }
    return of(prodottoCercato)
  }

  //ARROTONDA UN NUMERO IN INGRESSO
  roundNumber(num){
    return parseFloat(num).toFixed(2);
  }
  cleanCarrello(){  //cancello tutto il carrello
    this.listProdotti = new Array;
    localStorage.setItem("carrello", JSON.stringify(this.listProdotti))
  }
}
