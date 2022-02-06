export interface NatureProduitModel {
  id: "M" | "C" | "F";
  libelle: "Materiel" | "Consommable" | "Forfaitaire";
}

export function natureProduit(id: "M" | "C" | "F") {
  switch (id) {
    case "C":
      return { id: "C", libelle: "Consommable" } as NatureProduitModel;
    case "M":
      return { id: "M", libelle: "Materiel" } as NatureProduitModel;
    case "F":
      return { id: "F", libelle: "Forfaitaire" } as NatureProduitModel;
  }
}
