import { Adapter } from '../../_adapter';
import { TypeLocalisationAdapter } from '..';
import { AdresseAPI } from '../api/AdresseAPI';
import { AdresseModel } from '../../_front';

export class AdresseAdapter extends Adapter<AdresseModel, AdresseAPI> {
  private typeLocalisationAdapter = new TypeLocalisationAdapter();

  toClient(src: AdresseAPI) {
    return {
      adresseID: src.iPKAdresse,
      adresseAvecRC: src.sAdresseAvecRC,
      adresseComplete: src.sAdresseComplete,
      adressePrincipale: src.bAdressePrincipale,
      adresseSansCPVille: src.sAdresseSansCPVille,
      codePostal: src.sCodePostal,
      dateDebut: src.dDebut,
      dateFin: src.dFin,
      enCours: src.bEnCours,
      libelle: src.sLibelle,
      numeroVoie: src.sNumeroVoie,
      telAutre: src.sTelAutre,
      telFixe: src.sTelFixe,
      telInformation: src.sTelInformation,
      typeLocalisation: this.typeLocalisationAdapter.toClient(
        src.typeLocalisation,
      ),
      ville: src.sVille,
      adresse: src.sAdresse,
    } as AdresseModel;
  }

  toAPI(src: AdresseModel): AdresseAPI {
    return {
      iPKAdresse: src.adresseID,
      bAdressePrincipale: src.adressePrincipale,
      bEnCours: src.enCours,
      dDebut: src.dateDebut,
      dFin: src.dateFin,
      sAdresse: src.adresse,
      sAdresseAvecRC: src.adresseAvecRC,
      sAdresseComplete: src.adresseComplete,
      sAdresseSansCPVille: src.adresseSansCPVille,
      sCodePostal: src.codePostal,
      sLibelle: src.libelle,
      sNumeroVoie: src.numeroVoie,
      sTelAutre: src.telAutre,
      sTelFixe: src.telFixe,
      sTelInformation: src.telInformation,
      sVille: src.ville,
      typeLocalisation: this.typeLocalisationAdapter.toAPI(
        src.typeLocalisation,
      ),
    } as AdresseAPI;
  }
}
