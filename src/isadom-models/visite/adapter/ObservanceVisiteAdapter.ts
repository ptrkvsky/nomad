import { ObservanceDeambulationAdapter } from '.';
import { TypePrestationAdapter } from '../../medical/prestation/adapter';
import { Adapter } from '../../_adapter';
import { ObservanceVisiteAPI } from '../api';
import { ObservanceVisiteModel } from '../front';

export class ObservanceVisiteAdapter extends Adapter<
  ObservanceVisiteModel,
  ObservanceVisiteAPI
> {
  private typePrestationAdapter = new TypePrestationAdapter();
  private observanceDeambulationAdapter = new ObservanceDeambulationAdapter();

  toClient(src: ObservanceVisiteAPI): ObservanceVisiteModel {
    if (!src) {
      return null as unknown as ObservanceVisiteModel;
    }

    return {
      ID: src.observanceVisiteID,
      typePrestation: this.typePrestationAdapter.toClient(src.typePrestation),
      observanceDeambulation: this.observanceDeambulationAdapter.toClient(
        src.observanceDeambulation,
      ),
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

  toAPI(src: ObservanceVisiteModel): ObservanceVisiteAPI {
    if (!src) {
      return null as unknown as ObservanceVisiteAPI;
    }

    return {
      observanceVisiteID: src.ID,
      typePrestation: this.typePrestationAdapter.toAPI(src.typePrestation),
      observanceDeambulation: this.observanceDeambulationAdapter.toAPI(
        src.observanceDeambulation,
      ),
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
