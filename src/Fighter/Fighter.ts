import Energy from '../Energy';

interface Fighter{
  _lifePoints: number;
  _strength: number;
  _defense: number;
  _energy?: Energy;

  // métodos ccontroladores da interface Fighter
  attack(enemy: Fighter): void;
  special?(enemy: Fighter): void;
  levelUp(): void;
  receiveDamage(attackPoints: number): number;
}

export default Fighter;