import { TypePrestationAdapter } from '../../medical/prestation/adapter';
import { Adapter } from '../../_adapter';
import { ObservanceDeambulationAPI } from '../api';
import { ObservanceDeambulationModel } from '../front';

export class ObservanceDeambulationAdapter extends Adapter<
  ObservanceDeambulationModel,
  ObservanceDeambulationAPI
> {
  private typePrestationAdapter = new TypePrestationAdapter();

  toClient(src: ObservanceDeambulationAPI): ObservanceDeambulationModel {
    if (!src) {
      return null as unknown as ObservanceDeambulationModel;
    }

    return {
      ID: src.observanceVisiteID,
      typePrestation: this.typePrestationAdapter.toClient(src.typePrestation),
      dureeTP: `${src.rDureeTP} `,
      dureeCalculee: `${src.rDureeCalculee}`,
      dureeEstimee: `${src.rDureeEstimee}`,
      information: src.sInformation,
      estInfoMedecin: src.bInfoMedecin,
      debutUtilisation: src.dDebutUtilisation,
      finUtilisation: src.dFinUtilisation,
      dureeUtilisation: `${src.iDureeUtilisation}`,
      dureeMediane: `${src.iDureeMediane}`,
      dernierReleve: src.dDernierReleve,
      derniereDuree: `${src.rDerniereDuree}`,
    };
  }

  toAPI(src: ObservanceDeambulationModel): ObservanceDeambulationAPI {
    if (!src) {
      return null as unknown as ObservanceDeambulationAPI;
    }

    return {
      observanceVisiteID: src.ID,
      typePrestation: this.typePrestationAdapter.toAPI(src.typePrestation),
      rDureeTP: parseFloat(src.dureeTP),
      rDureeCalculee: parseFloat(src.dureeCalculee),
      rDureeEstimee: parseFloat(src.dureeEstimee),
      sInformation: src.information,
      bInfoMedecin: src.estInfoMedecin,
      dDebutUtilisation: src.debutUtilisation,
      dFinUtilisation: src.finUtilisation,
      iDureeUtilisation: parseFloat(src.dureeUtilisation),
      iDureeMediane: parseFloat(src.dureeMediane),
      dDernierReleve: src.dernierReleve,
      rDerniereDuree: parseFloat(src.derniereDuree),
    };
  }
}
