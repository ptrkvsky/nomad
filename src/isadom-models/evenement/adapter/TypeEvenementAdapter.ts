import { Adapter } from '../../_adapter';
import { TypeEvenementAPI } from '../api/TypeEvenementAPI';
import { TypeEvenementModel } from './../front/TypeEvenementModel';

export class TypeEvenementAdapter extends Adapter<
  TypeEvenementModel,
  TypeEvenementAPI
> {
  toClient(src: TypeEvenementAPI): TypeEvenementModel {
    return {
      typeEvenementID: src.typeEvenementID,
      libelle: src.sLibelle,
      periodeValidite: src.bPeriodeValidite,
      patient: src.bPatient,
      reserver: src.bReserver,
      consentement: src.bConsentement,
      finPeriodeObligatoire: src.bFinPeriodeObligatoire,
      precisionObligatoire: src.bPrecisionObligatoire,
      precision: src.tPrecision,
    } as TypeEvenementModel;
  }

  toAPI(src: TypeEvenementModel): TypeEvenementAPI {
    return {
      typeEvenementID: src.typeEvenementID,
      sLibelle: src.libelle,
      bPeriodeValidite: src.periodeValidite,
      bPatient: src.patient,
      bReserver: src.reserver,
      bConsentement: src.consentement,
      bFinPeriodeObligatoire: src.finPeriodeObligatoire,
      bPrecisionObligatoire: src.precisionObligatoire,
      tPrecision: src.precision,
    } as TypeEvenementAPI;
  }
}
