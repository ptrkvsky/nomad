import { Adapter } from '../../..';
import { TypePrestationAPI } from '../api';
import { TypePrestationModel } from '../front';

export class TypePrestationAdapter extends Adapter<
  TypePrestationModel,
  TypePrestationAPI
> {
  toClient(src: TypePrestationAPI): TypePrestationModel {
    return {
      id: src.sPKTypePrestation,
      dommainID: src.sFKDomaine,
      isAppareillage: src.bAppareillage,
      isCure: src.bCure,
      isGestionTelesuivi: src.bGestionTelesuivi,
      isObservance: src.bObservance,
      isOxygene: src.bOxygene,
      isPrescriptionMultiple: src.bPrescriptionMultiple,
      libelle: src.sLibelle,
    };
  }
  toAPI(src: TypePrestationModel): TypePrestationAPI {
    return {
      sPKTypePrestation: src.id,
      sFKDomaine: src.dommainID,
      bAppareillage: src.isAppareillage,
      bCure: src.isCure,
      bGestionTelesuivi: src.isGestionTelesuivi,
      bObservance: src.isObservance,
      bOxygene: src.isOxygene,
      bPrescriptionMultiple: src.isPrescriptionMultiple,
      sLibelle: src.libelle,
    };
  }
}
