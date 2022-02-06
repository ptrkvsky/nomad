import { ConfigProduitSpecAPI } from "../../api/ConfigProduitSpecAPI";
import { TiersAPI } from "../../../tiers";

export interface ConfigBO2Tiers {
  abTypeConfig: string[];
  sTypeConfig: string;
  tabconfigProduitSpec: ConfigProduitSpecAPI[];
  tiers: TiersAPI;
}
