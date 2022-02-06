import { CompteurAPI } from ".";
import { FamilleAPI, ModeleAPI, TypeProduitAPI } from "../..";
import { LocalisationAPI } from "../../../localisation/api/LocalisationAPI";

export interface AppareilAPI {
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
}
