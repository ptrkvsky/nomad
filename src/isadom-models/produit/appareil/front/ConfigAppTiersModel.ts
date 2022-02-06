import { ConfigProduitSpecModel } from "../..";
import { TiersModel } from "../../../tiers";

export interface ConfigAppTiersModel {
  tabTypeConfig: string[];
  sTypeConfig: string;
  tabconfigProduitSpec: ConfigProduitSpecModel[]; // PB ICI suppr ConfigProduitSpec
  tiers: TiersModel;
}
