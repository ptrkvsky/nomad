export class TypeTacheModel {
  id: string;
  libelle: string;
  reference: string;
  isReserve: boolean;
  isInactif: boolean;

  constructor(
    id: string,
    libelle: string,
    reference: string,
    isReserve: boolean,
    isInactif: boolean,
  ) {
    this.id = id;
    this.libelle = libelle;
    this.reference = reference;
    this.isReserve = isReserve;
    this.isInactif = isInactif;
  }
}
