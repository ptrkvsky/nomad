import { ErreurMessage } from "./ErreurMessageAPI";

export interface Erreur {
  metiers: ErreurMessage[];
  systemes: ErreurMessage[];
  alertes: ErreurMessage[];
}
