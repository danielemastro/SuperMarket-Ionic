import {Category} from "./Category";
import {Unita} from "./Unita";

export class Product {
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
  //comprato: boolean = false;
}
