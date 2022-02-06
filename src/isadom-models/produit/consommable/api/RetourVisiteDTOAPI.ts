export interface RetourVisiteDTOAPI {
  codeGS1?: string;
  produitID: number;
  lotID?: number;
  sLot?: string;
  dLimiteconso?: Date;
  iQuantite: number | undefined;
  localisationRetourID?: number;
}
