import { TypePrestationAdapter } from '.';
import { PrestationAPI } from '../api';
import { Adapter, AdresseAdapter, TiersAdapter } from '../../..';
import { PrestationModel } from '../front';

export class PrestationAdapter extends Adapter<PrestationModel, PrestationAPI> {
  private typePrestationAdapter = new TypePrestationAdapter();
  private tiersAdapter = new TiersAdapter();
  private adresseAdapter = new AdresseAdapter();

  toClient(src: PrestationAPI): PrestationModel {
    //TODO FBR convertion des dates / heures en timestamps
    return {
      id: src.prestationID,
      type: this.typePrestationAdapter.toClient(src.typePrestation),
      tiersOrigine: this.tiersAdapter.toClient(src.tiersOrigine),
      adresseAppareillage: this.adresseAdapter.toClient(
        src.adresseAppareillage,
      ),
      dureeTraitement: src.iDureeTraitement,
      information: src.sInformation,
      informationOrigine: src.sInformationOrigine,
      informationTraitement: src.sInformationTraitement,
      isALD: src.bALD,
      isAnnule: src.bAnnule,
      isCollecteDechet: src.bCollecteDechet,
      isProtocole: src.bCollecteDechet,
      isRisqueVital: src.bRisqueVital,
      medecinExerciceID: src.iFKMedecinExercice,
      protocolID: src.iFKProtocole,
      tiersContact: this.tiersAdapter.toClient(src.tiersContact),
      typeDureeTraitement: src.iTypeDureeTraitement,
    } as PrestationModel;
  }
  toAPI(src: PrestationModel): PrestationAPI {
    //TODO FBR convertion des dates / heures en timestamps
    return {
      prestationID: src.id,
      typePrestation: this.typePrestationAdapter.toAPI(src.type),
      tiersOrigine: this.tiersAdapter.toAPI(src.tiersOrigine),
      adresseAppareillage: this.adresseAdapter.toAPI(src.adresseAppareillage),
      iDureeTraitement: src.dureeTraitement,
      sInformation: src.information,
      sInformationOrigine: src.informationOrigine,
      sInformationTraitement: src.informationTraitement,
      bALD: src.isALD,
      bAnnule: src.isAnnule,
      bCollecteDechet: src.isCollecteDechet,
      bRisqueVital: src.isRisqueVital,
      iFKMedecinExercice: src.medecinExerciceID,
      iFKProtocole: src.protocolID,
      tiersContact: this.tiersAdapter.toAPI(src.tiersContact),
      iTypeDureeTraitement: src.typeDureeTraitement,
    } as PrestationAPI;
  }
}
