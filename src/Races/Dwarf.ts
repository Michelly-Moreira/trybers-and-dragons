import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _createdRacesInstances = 0;

  constructor(n: string, d: number) {
    super(n, d);
    this._maxLifePoints = 80;
    Dwarf._createdRacesInstances += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Dwarf._createdRacesInstances;
  }
}