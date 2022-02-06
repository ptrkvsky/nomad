export interface LivraisonVisiteDTOAPI {
  codeGS1?: string;
  produitID: number;
  lotID?: number;
  sLot?: string;
  dLimiteconso?: Date;
  iQuantite: number | undefined;
  appareilID?: number;
  typePrestationID?: string;
}
