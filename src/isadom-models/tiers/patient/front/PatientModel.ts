import { TiersModel } from '../../';
import { AdresseModel } from '../../../_front';

export interface PatientModel {
  tiersID: number;
  codeTiers: string;
  prenom: string;
  nom: string;
  typeTiers?: string;
  mail: string;
  telgsm: string;
  adressePrincipale?: AdresseModel;
  adresses?: AdresseModel[];
}
