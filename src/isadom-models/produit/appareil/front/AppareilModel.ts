import { CompteurModel } from ".";
import { FamilleModel, ModeleModel, TypeProduitModel } from "../..";
import { LocalisationModel } from "../../../localisation/front";
export interface AppareilModel {
  produitId: number;
  refProduit: string;
  typeProduitFk: string;
  codeNatureProduit: string;
  libelle: string;
  refFabricant: string;
  inactif: boolean;
  previsionInactif: boolean;
  arretCdeInterne: string;
  arretCommande: boolean;
  typeProduit: TypeProduitModel;
  famille: FamilleModel;
  numeroSerie: string;
  refProduitAppareil: string;
  information: string;
  codeAffectation: string;
  derniereDateMouvement: string;
  suiviReglage: boolean;
  modele: ModeleModel;
  compteur: CompteurModel;
  localisationActuelle: LocalisationModel;
}
