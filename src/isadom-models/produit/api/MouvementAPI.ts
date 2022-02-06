import { LocalisationAPI } from "../../localisation/api/LocalisationAPI";

export interface MouvementAPI {
  iPKMouvement: number;
  iFKCodeTypeMvt: number;
  sCodeTypeMvt: string;
  sFKTypeProduit: string;
  sFKFamille: string;
  iFKProduit: number;
  iFKProduitDMCLot: number;
  iFKProduitDM: number;
  dMouvement: string;
  iFKAnnuaire: number;
  sInformation: string;
  sFKTypeLocalisationDep: string;
  sNatureLocalisationDep: string;
  iFKAnnuaireDep: number;
  iFKLocalisationDep: number;
  sFKTypeLocalisationArr: string;
  sNatureLocalisationArr: string;
  iFKAnnuaireArr: number;
  iFKLocalisationArr: number;
  sReference: string;
  iFKReference: number;
  iFKMotifRetraitDM: string;
  localisationDep: LocalisationAPI;
  localisationArr: LocalisationAPI;
  sCodeTypeAffectationProduitTiers: string;
  mouvementSuivant: MouvementAPI;
}
