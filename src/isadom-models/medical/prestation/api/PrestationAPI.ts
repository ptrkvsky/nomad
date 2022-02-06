import { TiersAPI, AdresseAPI, TypePrestationAPI } from "../../../";

export interface PrestationAPI {
  prestationID: number;
  typePrestation: TypePrestationAPI;
  dDemandePrestation: string;
  tDemandePrestation: string;
  dDebutRealisation: string;
  dFin: string;
  tiersOrigine: TiersAPI;
  iFKMedecinExercice: number;
  tiersContact: TiersAPI;
  sInformationOrigine: string;
  dDemandeAppareillage: string;
  tDemandeAppareillage: string;
  iDureeTraitement: number;
  iTypeDureeTraitement: number;
  adresseAppareillage: AdresseAPI;
  sInformation: string;
  bRisqueVital: boolean;
  bALD: boolean;
  bProtocole: boolean;
  sInformationTraitement: string;
  bCollecteDechet: boolean;
  bAnnule: boolean;
  iFKProtocole: number;
}
