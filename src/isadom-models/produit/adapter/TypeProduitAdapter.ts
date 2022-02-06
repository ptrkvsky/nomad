import { Adapter } from '../../_adapter';
import { TypeProduitAPI } from '..';
import { TypeProduitModel } from '../front';

export class TypeProduitAdapter extends Adapter<
  TypeProduitModel,
  TypeProduitAPI
> {
  toClient(src: TypeProduitAPI): TypeProduitModel {
    return {
      typeProduitId: src.idTypeProduit,
      libelle: src.sLibelle,
      codeNatureProduit: src.sCodeNatureProduit,
      suiviTiers: src.bSuiviTiers,
      suiviIntervention: src.bSuiviIntervention,
      inactif: src.bInactif,
    };
  }

  toAPI(src: TypeProduitModel): TypeProduitAPI {
    return {
      idTypeProduit: src.typeProduitId,
      sLibelle: src.libelle,
      sCodeNatureProduit: src.codeNatureProduit,
      bSuiviTiers: src.suiviTiers,
      bSuiviIntervention: src.suiviIntervention,
      bInactif: src.inactif,
    };
  }
}
