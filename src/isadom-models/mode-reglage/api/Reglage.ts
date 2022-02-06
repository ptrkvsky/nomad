import { ReglageValeur } from "./ReglageValeur";

export interface Reglage {
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
  tabReglageValeur: ReglageValeur[];
}
