import { ReglageAPI } from "./ReglageAPI";

export interface GrilleAPI {
  sIdRegroupement: string;
  sLibelle: string;
  reglageModeID: string;
  tabReglage: ReglageAPI[];
  tabReglagePrecedent?: ReglageAPI[];
  tabReglageVisite?: ReglageAPI[];
}
