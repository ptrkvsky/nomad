import { AdresseModel } from "../../_front";

export interface TiersModel {
  tiersID: number;
  codeTiers: string;
  prenom: string;
  nom: string;
  typeTiers?: string;
  mail: string;
  telgsm: string;
  adressePrincipale?: AdresseModel;
  tAdresse?: AdresseModel[];
}
