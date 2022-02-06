import { TiersAPI } from '../..';
import { AdresseAPI } from '../../../localisation';

export interface PatientAPI {
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
