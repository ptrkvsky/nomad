import { TiersAdapter } from '../..';
import { Adapter } from '../../_adapter';
import { EvenementAPI } from '../api/EvenementAPI';
import { EvenementModel } from './../front/EvenementModel';
import { TypeEvenementAdapter } from './TypeEvenementAdapter';

export class EvenementAdapter extends Adapter<EvenementModel, EvenementAPI> {
  tiersAdapter = new TiersAdapter();
  typeEventAdapter = new TypeEvenementAdapter();

  toClient(src: EvenementAPI): EvenementModel {
    return {
      evenementID: src.evenementID,
      typeEvenement: this.typeEventAdapter.toClient(src.typeEvenement),
      dateDebut: src.dDebut,
      dateFin: src.dFin,
      annule: src.bAnnule,
      tiers: this.tiersAdapter.toClient(src.tiers),
    };
  }

  toAPI(src: EvenementModel): EvenementAPI {
    return {
      evenementID: src.evenementID,
      typeEvenement: this.typeEventAdapter.toAPI(src.typeEvenement),
      dDebut: src.dateDebut,
      dFin: src.dateFin,
      bAnnule: src.annule,
      tiers: this.tiersAdapter.toAPI(src.tiers),
    };
  }
}
