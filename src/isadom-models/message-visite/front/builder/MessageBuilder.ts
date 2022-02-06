import { MessageModel, TypeObjetModel, DestinataireModel } from '..';

export class MessageModelBuilder {
  private ID!: number;
  private typeObjet!: TypeObjetModel;
  private objet!: string;
  private corps!: string;
  private destinatairesPrincipaux!: DestinataireModel[];

  build() {
    return {
      ID: this.ID,
      typeObjet: this.typeObjet,
      objet: this.objet,
      corps: this.corps,
      destinatairesPrincipaux: this.destinatairesPrincipaux,
    } as MessageModel;
  }

  setTypeObjet(typeObjet: TypeObjetModel): MessageModelBuilder {
    this.typeObjet = typeObjet;
    return this;
  }

  setObjet(objet: string): MessageModelBuilder {
    this.objet = objet;
    return this;
  }

  setCorps(message: string): MessageModelBuilder {
    this.corps = message;
    return this;
  }

  setDestinatairesPrincipaux(
    destinatairesPrincipaux: DestinataireModel[],
  ): MessageModelBuilder {
    this.destinatairesPrincipaux = destinatairesPrincipaux;
    return this;
  }
}
