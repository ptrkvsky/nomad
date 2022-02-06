import { GrilleAPI } from "./GrilleAPI";

export interface ModeReglageAPI {
  reglageProduitModeID: number;
  reglageModeID: string;
  familleID: string;
  modeleID: number;
  bModeParDefaut: boolean;
  bSuiviReglageTheorique: boolean;
  bSuiviReglageConstate: boolean;
  bSuiviReglageMesure: boolean;
  bSuiviReglageEnPartant: boolean;
  typePrestationID: string;
  sInformation: string;
  bInactif: boolean;
  tabGrille: GrilleAPI[];
}
