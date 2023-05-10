import Battle from './Battle';
import Character from '../Character';
import { SimpleFighter } from '../Fighter';

export default class PVP extends Battle {
  protected _player1: Character | SimpleFighter;
  protected _player2: Character | SimpleFighter;

  constructor(p1: Character | SimpleFighter, p2: Character | SimpleFighter) {
    super(p1);
    this._player1 = p1;
    this._player2 = p2;
  }

  playersAttackEachOther(): void {
    this._player2.attack(this._player1);
    if (this._player1.lifePoints !== -1) {
      this._player1.attack(this._player2);
    }
  }

  fight(): number {
    while (this._player1.lifePoints !== -1 && this._player2.lifePoints !== -1) {
      this.playersAttackEachOther();
    }
    return super.fight();
  }
}
