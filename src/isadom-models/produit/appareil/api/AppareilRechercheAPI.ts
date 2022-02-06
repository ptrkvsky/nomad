export interface AppareilRechercheAPI {
  appareilID: number;
  referenceAppareil: string;
  numeroSerie: string;
  desactive: boolean;
  libelleTypeProduit: string;
  typeProduitID: string;
  libelleModele: string;
  modeleID: string;
  referenceModele: string;
  localisationID: number;
  natureLocalisation: string;
  libelleLocalisation: string;
  typeLocalisationID: string;
  libelleTypeLocalisation: string;
  materielDisponible: boolean;
}
