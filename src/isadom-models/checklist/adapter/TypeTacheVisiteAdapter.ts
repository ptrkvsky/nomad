import { TypeTacheVisiteAPI, TypeTacheVisiteModel } from '..';
import { Adapter } from '../../';

export class TypeTacheVisiteAdapter extends Adapter<
  TypeTacheVisiteModel,
  TypeTacheVisiteAPI
> {
  toClient(src: TypeTacheVisiteAPI): TypeTacheVisiteModel {
    return {
      id: src.typeTacheID,
      information: src.sInformation,
      isCrGenerationAuto: src.bCrGenerationAuto,
      isInactif: src.bInactif,
      isInformatif: src.bInformatif,
      isReserve: src.bReserver,
      isValidation: src.bValidation,
      libelle: src.sLibelle,
      ordre: src.iOrdre,
      reference: src.sReference,
    } as TypeTacheVisiteModel;
  }
  toAPI(src: TypeTacheVisiteModel): TypeTacheVisiteAPI {
    return {
      typeTacheID: src.id,
      sLibelle: src.libelle,
      sReference: src.reference,
      bReserver: src.isReserve,
      bInactif: src.isInactif,
      bInformatif: src.isInformatif,
      bValidation: src.isValidation,
      sInformation: src.information,
      iOrdre: src.ordre,
      bCrGenerationAuto: src.isCrGenerationAuto,
    } as TypeTacheVisiteAPI;
  }
}
