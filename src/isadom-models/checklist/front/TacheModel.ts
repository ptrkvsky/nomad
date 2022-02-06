import { EtatRealisation, TypeTacheModel } from '.';
import { PPT } from '../../PPT';

export interface TacheModel {
  id: number;
  etatRealisation: EtatRealisation;
  motifNonRealisation: PPT;
  information: string;
  typeTache: TypeTacheModel;
}
