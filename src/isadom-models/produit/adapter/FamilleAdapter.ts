import { Adapter } from '../../_adapter';
import { FamilleAPI } from '..';
import { FamilleModel } from '../front';
import { TypePrestationAdapter } from '../../medical/prestation/adapter';
import { SousFamilleAdapter } from './SousFamilleAdapter';
export class FamilleAdapter extends Adapter<FamilleModel, FamilleAPI> {
  private typePrestationAdapter = new TypePrestationAdapter();
  private sousFamilleAdapter = new SousFamilleAdapter();
  toClient(src: FamilleAPI): FamilleModel {
    return {
      idFamille: src.sPKFamille,
      libelle: src.sLibelle,
      suiviCompteur: src.bSuiviCompteur,
      suiviReglage: src.bSuiviReglage,
      observance: src.bObservance,
      inactif: src.bInactif,
      sousFamille: this.sousFamilleAdapter.toClients(src.tSousFamille),
      tTypePrestation: this.typePrestationAdapter.toClients(
        src.tTypePrestation,
      ),
    };
  }

  toAPI(src: FamilleModel): FamilleAPI {
    return {
      sPKFamille: src.idFamille,
      sLibelle: src.libelle,
      bSuiviCompteur: src.suiviCompteur,
      bSuiviReglage: src.suiviReglage,
      bObservance: src.observance,
      bInactif: src.inactif,
      tSousFamille:
        src.sousFamille && this.sousFamilleAdapter.toAPIs(src.sousFamille),
      tTypePrestation: this.typePrestationAdapter.toAPIs(src.tTypePrestation),
    };
  }
}
