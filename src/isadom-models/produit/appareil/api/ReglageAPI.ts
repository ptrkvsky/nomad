import { ReglageValeurAPI } from "./ReglageValeurAPI";

export interface ReglageAPI {
  sCode: string;
  sLibelle: string;
  bValeurObligatoire: boolean;
  sValeurMin: string;
  sValeurMax: string;
  sValeurMoy: string;
  rMargeTolerance: number;
  bImperatif: boolean;
  iOrdre: number;
  sInformation: string;
  bTheoriqueAppareil: boolean;
  bModeHoraire: boolean;
  tabReglageValeur: ReglageValeurAPI[];
}
