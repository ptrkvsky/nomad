import { TypeTacheModel } from './TypeTacheModel';

export interface TypeTacheVisiteModel extends TypeTacheModel {
  isInformatif: boolean;
  isValidation: boolean;
  information: string;
  ordre: number;
  isCrGenerationAuto: boolean;
}
