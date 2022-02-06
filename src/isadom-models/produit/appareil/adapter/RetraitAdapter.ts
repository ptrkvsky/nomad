import { MotifRetraitDMAdapter } from '.';
import { CompteurAdapter } from '../..';
import { LocalisationInterneAdapter } from '../../../localisation/adapter/LocalisationInterneAdapter';
import { Adapter } from '../../../_adapter';
import { RetraitAPI } from '../api';
import { RetraitModel } from '../front';

export class RetraitAdapter extends Adapter<RetraitModel, RetraitAPI> {
  private localisationInterneAdapter = new LocalisationInterneAdapter();
  private motifRetraitDMAdapter = new MotifRetraitDMAdapter();
  private compteurAdapter = new CompteurAdapter();

  toClient(src: RetraitAPI): RetraitModel {
    if (!src) {
      return null as unknown as RetraitModel;
    }

    return {
      localisation: this.localisationInterneAdapter.toClient(src.localisation),
      motif: this.motifRetraitDMAdapter.toClient(src.motif),
      compteur: this.compteurAdapter.toClient(src.compteur),
    };
  }

  toAPI(src: RetraitModel): RetraitAPI {
    if (!src) {
      return null as unknown as RetraitAPI;
    }

    return {
      localisation: this.localisationInterneAdapter.toAPI(src.localisation),
      motif: this.motifRetraitDMAdapter.toAPI(src.motif),
      compteur: this.compteurAdapter.toAPI(src.compteur),
    };
  }
}
