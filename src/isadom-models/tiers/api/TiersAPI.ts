import { AdresseAPI } from "../../localisation/api/AdresseAPI";

export interface TiersAPI {
  iPKTiers: number;
  sCodeTiers: string;
  sPrenom: string;
  sNom: string;
  sTypeTiers: string;
  sMail: string;
  sTelgsm: string;
  adressePrincipale: AdresseAPI;
  tAdresse: AdresseAPI[];
}
