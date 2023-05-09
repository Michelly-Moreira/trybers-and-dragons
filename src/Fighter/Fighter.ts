import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

// SIP(segregação de interface)
export default interface Fighter extends SimpleFighter {
  defense: number;
  energy?: Energy;

  // métodos controladores da interface Fighter
  special?(enemy: Fighter): void;
  levelUp(): void;
}