export interface RechercheConsommableAPI {
  "ref/lib"?: string;
  nature: "C" | "M";
  famille?: string;
  sousfamille?: string;
  typepresta?: string;
  actif?: number;
}
