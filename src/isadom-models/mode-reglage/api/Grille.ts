import { Reglage } from "./Reglage";

export interface Grille {
  sIdRegroupement: string;
  sLibelle: string;
  reglageModeID: string;
  tabReglage: Reglage[];
}
