export interface TypePrestationModel {
  id: string;
  dommainID: string;
  libelle: string;
  isCure: boolean;
  isAppareillage: boolean;
  isOxygene: boolean;
  isObservance: boolean;
  isGestionTelesuivi: boolean;
  isPrescriptionMultiple: boolean;
}
