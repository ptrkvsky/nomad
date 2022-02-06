import { TiersAPI } from "../../../tiers";
import { ConfigProduitSpecAPI } from "../..";

export interface ConfigAppareilsTiersAPI {
  tabTypeConfig: string[];
  sTypeConfig: string;
  tabconfigProduitSpec: ConfigProduitSpecAPI[]; // PB ICI suppr ConfigProduitSpec
  tiers: TiersAPI;
}
