import { PPT } from '../../PPT';

export interface TacheAPI {
  tacheID: number;
  etatRealisation: 'REALISE' | 'NREALISE' | '';
  motifNonRealisation: PPT;
  sInformation: string;
}
