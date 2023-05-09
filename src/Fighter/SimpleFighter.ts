export default interface SimpleFighter{
  lifePoints: number;
  strength: number;

  // métodos controladores da interface SimpleFighter
  attack(enemy: SimpleFighter): void;
  receiveDamage(attackPoints: number): number;
}