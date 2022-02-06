import { Adapter } from '../../_adapter';
import { DestinataireAPI } from '../api';
import { DestinataireModel } from '../front';

export class DestinataireAdapter extends Adapter<
  DestinataireModel,
  DestinataireAPI
> {
  toClient(src: DestinataireAPI): DestinataireModel {
    return {
      typeTiersID: src.typeTiersID,
      tiersID: src.tiersID,
      nom: src.nom,
      prenom: src.prenom,
      codeAnnuaire: src.codeAnnuaire,
    };
  }

  toAPI(src: DestinataireModel): DestinataireAPI {
    return {
      typeTiersID: src.typeTiersID,
      tiersID: src.tiersID,
      nom: src.nom,
      prenom: src.prenom,
      codeAnnuaire: src.codeAnnuaire,
    };
  }
}
