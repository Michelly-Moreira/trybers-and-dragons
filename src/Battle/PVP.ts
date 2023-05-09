import Battle from './Battle';
import Character from '../Character';

export default class PVP extends Battle {
  private _player1: Character;
  private _player2: Character;

  constructor(p1: Character, p2: Character) {
    super(p1);
    this._player1 = p1;
    this._player2 = p2;
  }

  fight(): number {
    while (this._player1.lifePoints !== -1 && this._player2.lifePoints !== -1) {
      this._player1.attack(this._player2);
      if (this._player2.lifePoints === -1) {
        return -1; // jogador 1 ganha
      }

      this._player2.attack(this._player1);
      if (this._player1.lifePoints === -1) {
        return 1; // jogador 2 ganha
      }
    }

    return super.fight(); // In case of a draw
  }
}