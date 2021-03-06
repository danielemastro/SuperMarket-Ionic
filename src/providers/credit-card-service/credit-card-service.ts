import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {CreditCard} from "../../models/CreditCard";
import {BACKEND_URL} from "../../utils";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'})
};
/*
  Generated class for the CreditCardServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CreditCardService {

  constructor(public http: HttpClient) {
    console.log('Hello CreditCardService Provider');
  }


  getListCardUser(): Observable<Array<CreditCard>>{
    return this.http.get<Array<CreditCard>>(BACKEND_URL + "/creditCard/getCardUser");
  }
  addCard(creditCard): Observable<CreditCard>  {
    return this.http.post<CreditCard>(BACKEND_URL + "/creditCard/addCartaCredito",creditCard, httpOptions);
  }
  deleteCreditCard(creditCard): Observable<CreditCard> {
    return this.http.delete<CreditCard>(BACKEND_URL + "/creditcard/deletecard/" + creditCard.id);
  }
}
