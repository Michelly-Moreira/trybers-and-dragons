import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Race, { Elf } from './Races';
import Fighter from './Fighter';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  private _name: string;

  constructor(name: string) {
    this._name = name;
    this._dexterity = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    this._race = new Elf(this._name, this._dexterity);
    this._archetype = new Mage(this._name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    this._defense = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    this._energy = {
      type_: this._archetype.energyType,
      amount: Math.floor(Math.random() * (10 - 1 + 1) + 1),
    };
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  // energy é um objeto
  get energy(): Energy {
    return { ...this._energy };
  }
}