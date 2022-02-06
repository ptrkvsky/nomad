export interface IAbstractValeurPossibleModel<TypeValeur>{
    id:number,
    version:string,
    score:number,
    valeur: TypeValeur
}