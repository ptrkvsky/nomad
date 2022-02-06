export interface IAbstractValeurModel<TypeValeur> {
    id: number
    valeurs: TypeValeur[],
    timestampSaisie : string;
    commentaire : string;
    module: string
}