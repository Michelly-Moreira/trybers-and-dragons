import Fighter from '../Fighter';
import Battle from './Battle';
import Monster from '../Monster';

export default class PVE extends Battle {
  protected _player: Fighter;
  protected _monster: Monster[];

  constructor(p: Fighter, m: Monster[]) {
    super(p);
    this._player = p;
    this._monster = m;
  }
}