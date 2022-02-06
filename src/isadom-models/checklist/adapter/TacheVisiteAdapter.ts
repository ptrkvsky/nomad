import { TypeTacheVisiteAdapter } from '.';
import { TacheVisiteAPI, TacheVisiteModel, TypeTacheVisiteModel } from '..';
import { Adapter } from '../..';

export class TacheVisiteAdapter extends Adapter<
  TacheVisiteModel,
  TacheVisiteAPI
> {
  toClient(src: TacheVisiteAPI): TacheVisiteModel {
    return {
      id: src.tacheID,
      etatRealisation: src.etatRealisation,
      information: src.sInformation,
      motifNonRealisation: src.motifNonRealisation,
      typeTache: new TypeTacheVisiteAdapter().toClient(src.typeTacheVisite),
    } as TacheVisiteModel;
  }

  toAPI(src: TacheVisiteModel): TacheVisiteAPI {
    return {
      tacheID: src.id,
      etatRealisation: src.etatRealisation,
      motifNonRealisation: src.motifNonRealisation,
      sInformation: src.information,
      typeTacheVisite: new TypeTacheVisiteAdapter().toAPI(
        src.typeTache as TypeTacheVisiteModel,
      ),
    } as TacheVisiteAPI;
  }
}
