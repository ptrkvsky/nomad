import { TypeProduitModel } from '..';

export class TypeProduitBuilder {
  private typeProduitId!: string;
  private libelle!: string;
  private codeNatureProduit!: string;
  private suiviTiers!: boolean;
  private suiviIntervention!: boolean;
  private inactif!: boolean;

  public build(): TypeProduitModel {
    return {
      typeProduitId: this.typeProduitId,
      libelle: this.libelle,
      codeNatureProduit: this.codeNatureProduit,
      suiviTiers: this.suiviTiers,
      suiviIntervention: this.suiviIntervention,
      inactif: this.inactif,
    };
  }

  setTypeProduitId(typeproduitID: string): TypeProduitBuilder {
    this.typeProduitId = typeproduitID;
    return this;
  }
}
