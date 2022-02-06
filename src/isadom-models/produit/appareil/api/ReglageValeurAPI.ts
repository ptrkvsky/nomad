import { ReglageValeurHoraireAPI } from "./ReglageValeurHoraireAPI";

export interface ReglageValeurAPI {
  reglageID: number;
  codeReglageID: string;
  sLibelleReglage: string;
  sTypeReglage: string;
  sValeur: string;
  dSaisie: string;
  bInterpretation: boolean;
  iCPNautReglageGrille: number;
  sIDRegroupement: string;
  bModeHoraire: boolean;
  bTheoriqueInactif: boolean;
  tabReglageValeurHoraire: ReglageValeurHoraireAPI[];
}
