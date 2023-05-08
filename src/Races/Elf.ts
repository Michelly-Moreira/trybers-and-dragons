import Race from './Race';

export default class Elf extends Race {
  protected _maxLifePoints: number;
  protected static _createdRacesInstances = 0;

  constructor(n: string, d: number) {
    super(n, d);
    this._maxLifePoints = 99;
    Elf._createdRacesInstances += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Elf._createdRacesInstances;
  }
}
