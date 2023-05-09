import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Race, { Elf } from './Races';
import Fighter from './Fighter';
import getRandomInt from './utils';

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
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(this._name, this._dexterity);
    this._archetype = new Mage(this._name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
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

  // o retorno de energy é um objeto, por isso o spread operator retornando todo o objeto dentro das chaves
  get energy(): Energy {
    return { ...this._energy };
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    if (damage > 0) {
      this._lifePoints -= damage;
    } else {
      this._lifePoints -= 1;
    }
    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    const newMaxLifePoints = this._maxLifePoints + getRandomInt(1, 10);
    this._maxLifePoints = Math.min(newMaxLifePoints, this._race.maxLifePoints);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: 10,
    };
    this._lifePoints = this._maxLifePoints;
  }
  // Este método retorna o dano causado pelo ataque especial, que será utilizado no método attack da classe inimiga.
  // Ele consome toda a energia atual do personagem, definindo o valor de energy.amount para 0.
  // Por fim, ele retorna o dano causado, que será utilizado para calcular a redução dos pontos de vida do inimigo.
  
  special(): number {
    const damage = this.strength * this.energy.amount;
    this._energy.amount = 0;
    return damage;
  }
}