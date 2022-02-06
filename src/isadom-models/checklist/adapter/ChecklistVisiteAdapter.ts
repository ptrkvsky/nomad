import { TacheVisiteAdapter } from '.';
import { ChecklistVisiteModel, ChecklistVisiteAPI } from '..';
import { Adapter } from '../..';

export class ChecklistVisiteAdapter extends Adapter<
  ChecklistVisiteModel,
  ChecklistVisiteAPI
> {
  toClient(src: any): any {
    const libelle = src.libelleTypePrestation
      ? src.libelleTypeVisite + ` - ` + src.libelleTypePrestation
      : src.libelleTypeVisite;

    return {
      reference: src.reference,
      referenceID: src.referenceID,
      taches: new TacheVisiteAdapter().toClients(src.tTacheVisite),
      libelle: libelle,
      typeVisiteID: src.typeVisiteID,
      libelleTypeVisite: src.libelleTypeVisite,
      libelleTypePrestation: src.libelleTypePrestation,
    } as ChecklistVisiteModel;
  }

  toAPI(src: any): any {
    return {
      reference: src.reference,
      referenceID: src.referenceID,
      tTacheVisite: new TacheVisiteAdapter().toAPIs(src.taches),
      typeVisiteID: src.typeVisiteID,
      libelleTypeVisite: src.libelleTypeVisite,
      libelleTypePrestation: src.libelleTypePrestation,
    } as ChecklistVisiteAPI;
  }
}
