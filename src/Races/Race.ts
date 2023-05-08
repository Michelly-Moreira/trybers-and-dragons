// Podemos apenas herdar dela, não instânciar desta classe
abstract class Race {
  protected _name: string;
  protected _dexterity: number;

  constructor(n: string, d: number) {
    this._name = n;
    this._dexterity = d;
  }

  // retorna qtd de instâncias criadas a partir das classes extendidas da classe race
  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  // retorna qtd máxima de pts de vida da raça
  // cada raça terá seu número máximo de pontos, que será definido dentro de cada classe especializada;
  // nesta classe deve estar apenas a assinatura do método (por isso não tem return).
  abstract get maxLifePoints(): number;

  // método de acesso (público), para ler uma propriedade privada: getter
  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }
}

export default Race;