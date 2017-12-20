import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";


import {HttpClient} from "@angular/common/http";
import {BACKEND_URL} from "../../../utils";
import {Transazione} from "../../models/Transazione";

@Injectable()
export class TransazioneService {

  constructor(private http: HttpClient) { }
  getListaTransazioni(): Observable<Transazione[]> {
    return this.http.get<Transazione[]>(BACKEND_URL + "/acquistato//getListaProdottiByUserId");
  }
}
