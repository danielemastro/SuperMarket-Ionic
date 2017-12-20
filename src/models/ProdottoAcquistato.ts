
import {Category} from "./Category";
import {Unita} from "./Unita";
import {Transazione} from "./Transazione";

export class ProdottoAcquistato {
  id: number;
  nome: string;
  marca: string;
  dataScadenza: string;
  categoria: Category;
  quantitaDisponibile: number;
  quantitaDaAcquistare: number;
  unità: Unita;
  prezzoUnitario: number;
  prezzoSenzaIva: number;
  prezzoIvato: number;
  prezzoScontato: number
  img: string;
  offerta: number;
  transazione:Transazione;
  //comprato: boolean = false;
}
