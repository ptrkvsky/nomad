import { Adapter } from '../../../_adapter';
import {
  FamilleAdapter,
  ModeleAdapter,
  TypeProduitAdapter,
  CompteurAdapter,
} from '../..';
import { AppareilAPI } from '../api';
import { AppareilModel } from '../front';
import { LocalisationAdapter } from '../../..';

export class AppareilAdapter extends Adapter<AppareilModel, AppareilAPI> {
  private typeProduitAdapter = new TypeProduitAdapter();
  private familleAdapter = new FamilleAdapter();
  private modeleAdapter = new ModeleAdapter();
  private compteurAdapter = new CompteurAdapter();
  private localisationAdapter = new LocalisationAdapter();

  toClient(src: AppareilAPI): AppareilModel {
    return {
      produitId: src.IDProduit,
      refProduit: src.sRefProduit,
      typeProduitFk: src.sFKTypeProduit,
      codeNatureProduit: src.sCodeNatureProduit,
      libelle: src.sLibelle,
      refFabricant: src.sRefFabricant,
      inactif: src.bInactif,
      previsionInactif: src.bPrevisionInactif,
      arretCdeInterne: src.dArretCdeInterne,
      arretCommande: src.bArretCommande,
      typeProduit:
        src.typeProduit && this.typeProduitAdapter.toClient(src.typeProduit),
      famille: src.famille && this.familleAdapter.toClient(src.famille),
      numeroSerie: src.sNumeroSerie,
      refProduitAppareil: src.sRefProduitAppareil,
      information: src.sInformation,
      codeAffectation: src.sCodeAffectation,
      derniereDateMouvement: src.derniereDateMouvement,
      suiviReglage: src.bSuiviReglage,
      modele: src.modele && this.modeleAdapter.toClient(src.modele),
      compteur: src.compteur && this.compteurAdapter.toClient(src.compteur),
      localisationActuelle:
        src.localisationActuelle &&
        this.localisationAdapter.toClient(src.localisationActuelle),
    };
  }

  toAPI(src: AppareilModel): AppareilAPI {
    return {
      IDProduit: src.produitId,
      sRefProduit: src.refProduit,
      sFKTypeProduit: src.typeProduitFk,
      sCodeNatureProduit: src.codeNatureProduit,
      sLibelle: src.libelle,
      sRefFabricant: src.refFabricant,
      bInactif: src.inactif,
      bPrevisionInactif: src.previsionInactif,
      dArretCdeInterne: src.arretCdeInterne,
      bArretCommande: src.arretCommande,
      typeProduit:
        src.typeProduit && this.typeProduitAdapter.toAPI(src.typeProduit),
      famille: src.famille && this.familleAdapter.toAPI(src.famille),
      sNumeroSerie: src.numeroSerie,
      sRefProduitAppareil: src.refProduitAppareil,
      sInformation: src.information,
      sCodeAffectation: src.codeAffectation,
      derniereDateMouvement: src.derniereDateMouvement,
      bSuiviReglage: src.suiviReglage,
      modele: src.modele && this.modeleAdapter.toAPI(src.modele),
      compteur: src.modele && new CompteurAdapter().toAPI(src.compteur),
      localisationActuelle:
        src.localisationActuelle &&
        this.localisationAdapter.toAPI(src.localisationActuelle),
    };
  }
}
