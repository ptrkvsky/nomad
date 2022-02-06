import { TypeLocalisationModel } from "../localisation";

export interface AdresseModel {
    adresseID: number;
    typeLocalisation: TypeLocalisationModel;
    adresseComplete: string;
    adresseSansCPVille: string;
    adresseAvecRC: string;
    codePostal: string;
    ville: string;
    telFixe: string;
    telAutre: string;
    telInformation: string;
    libelle: string;
    numeroVoie: string;
    adresse: string;
    dateDebut: string;
    dateFin: string;
    enCours: boolean;
    adressePrincipale: boolean;
}