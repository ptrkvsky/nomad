import { TypeTacheAPI } from '.';

export interface TypeTacheVisiteAPI extends TypeTacheAPI {
  typeTacheTypeVisiteID: number;
  bInformatif: boolean;
  bValidation: boolean;
  sInformation: string;
  iOrdre: number;
  bCrGenerationAuto: boolean;
}
