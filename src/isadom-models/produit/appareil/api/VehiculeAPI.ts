import { CompteurAPI } from ".";
import { FamilleAPI, ModeleAPI, TypeProduitAPI } from "../..";
import {
  LocalisationAPI,
  TypeLocalisationInterneAPI,
} from "../../../localisation";

export interface Vehicule {
  IDProduit: number;
  sRefProduit: string;
  sFKTypeProduit: string;
  sCodeNatureProduit: string;
  sLibelle: string;
  sRefFabricant: string;
  bInactif: boolean;
  bPrevisionInactif: boolean;
  dArretCdeInterne: string;
  bArretCommande: boolean;
  typeProduit: TypeProduitAPI;
  famille: FamilleAPI;
  sNumeroSerie: string;
  sRefProduitAppareil: string;
  sInformation: string;
  sCodeAffectation: string;
  derniereDateMouvement: string;
  bSuiviReglage: boolean;
  modele: ModeleAPI;
  compteur: CompteurAPI;
  localisationActuelle: LocalisationAPI;
  typeLocalisation: TypeLocalisationInterneAPI;
}
